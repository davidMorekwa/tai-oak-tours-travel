# Stage 1: PHP Base and Composer Dependencies
FROM php:8.2-fpm-alpine AS php_base

LABEL maintainer="your-name@example.com"
LABEL description="PHP-FPM base for Laravel application."

# Install system dependencies
# oniguruma-dev for mbstring, icu-dev for intl
RUN apk add --no-cache \
    bash \
    curl \
    libzip-dev \
    zip \
    unzip \
    libpng-dev \
    jpeg-dev \
    freetype-dev \
    libxml2-dev \
    oniguruma-dev \
    icu-dev \
    supervisor \
    git \
    openssh-client # For composer if it needs to pull private repos via SSH

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
    gd \
    pdo pdo_mysql \
    zip \
    exif \
    pcntl \
    bcmath \
    opcache \
    intl \
    mbstring \
    xml

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copy composer files and install dependencies (without scripts or autoloader yet)
COPY composer.json composer.lock ./
RUN composer install --no-interaction --no-plugins --no-scripts --no-dev --prefer-dist

# Stage 2: Node.js and Frontend Asset Compilation
FROM node:20-alpine AS node_builder

LABEL description="Node.js builder for frontend assets."

WORKDIR /app

COPY package.json package-lock.json ./
# If using yarn:
# COPY package.json yarn.lock ./

RUN npm ci
# If using yarn:
# RUN yarn install --frozen-lockfile

# Copy necessary files for frontend build
# Adjust these paths if your vite/tailwind/tsconfig configs are elsewhere
COPY resources/ ./resources/
COPY vite.config.js ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY tsconfig.json ./

RUN npm run build

# Stage 3: Final Application Image
FROM php:8.2-fpm-alpine AS app_final

# Create a non-root user for running the application
RUN addgroup -g 1000 -S www-data && \
    adduser -u 1000 -S www-data -G www-data

# Install only runtime system dependencies
RUN apk add --no-cache bash supervisor # Add other runtime deps if needed, e.g., nginx if serving directly

WORKDIR /var/www/html

# Copy custom PHP configuration (optional)
# COPY docker/php/php.ini /usr/local/etc/php/conf.d/custom.ini

# Copy application code from the current directory
COPY . .

# Copy vendor dependencies from the php_base stage
COPY --from=php_base /var/www/html/vendor ./vendor

# Copy compiled frontend assets from the node_builder stage
COPY --from=node_builder /app/public/build ./public/build

# Generate optimized autoloader
RUN composer dump-autoload --optimize --no-dev --classmap-authoritative

# Set permissions for Laravel storage and bootstrap cache
# Ensure these directories exist before setting permissions
RUN mkdir -p storage/framework/{sessions,views,cache} bootstrap/cache \
    && chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Laravel specific commands - These cache configurations based on the build-time .env.
# For production, it's often better to run these in an entrypoint script or CI/CD pipeline
# after environment variables are fully set.
# COPY .env.example .env # If you want to build with example env
RUN php artisan config:cache
RUN php artisan route:cache
RUN php artisan view:cache
# php artisan storage:link is best run in an entrypoint script or manually after container start.

EXPOSE 9000

USER www-data

CMD ["php-fpm"]

# Example for using Supervisor to run php-fpm and queue workers:
# COPY docker/supervisor/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
# CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]