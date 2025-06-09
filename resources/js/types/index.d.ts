import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
    available_countries: string[];
}
export interface PaginatedData<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number | null;
    last_page: number;
    last_page_url: string;
    links: LinkItem[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}
export interface LinkItem {
    url: string | null;
    label: string;
    active: boolean;
}

// TRAVEL INFOMATION TYPES
export interface TourPackage {
    id: number,
    title: string,
    image: string,
    duration_days: string,
    description: string,
    is_featured: boolean,
    low_season_price: number,
    high_season_price: number,
    rating: number,
    highlights: string,
    reviews: Review[];
    average_rating: number; 
    total_reviews: number; 
}

export interface TourItinerary {
    id: number,
    tour_id: number,
    day_number: number,
    title: string,
    description: string,
}
export interface TourLocation {
    id: number,
    name: string,
    country: string
}
export interface FlashMessage {
    success?: string;
    error?: string;
}
export interface ItineraryItem {
    id: number;
    day_number: number;
    title: string;
    description: string;
}
export interface StarRatingProps {
    count?: number;
    value: number;
    onChange?: (rating: number) => void;
    size?: number;
    color?: string;
    hoverColor?: string;
    inactiveColor?: string;
    className?: string;
    readonly?: boolean;
}
export interface Review {
    id: number;
    name: string; // Name of the reviewer
    rating: number; // 1-5
    comment: string;
    created_at: string; // ISO date string, consider formatting with date-fns or similar
    user_avatar?: string | null; // Optional avatar URL for display
}
export interface AdminReview extends Review {
    reviewer_name: string; // Alias for name for clarity in admin
    reviewer_email?: string | null;
    is_approved: boolean;
    created_at_formatted: string;
    tour_title?: string; // Title of the tour being reviewed
    user_name?: string; // Name of the registered user, if applicable
}
export interface AdminReviewsIndexPageProps extends SharedData {
    reviews: PaginatedData<AdminReview>;
    filters: {
        status: 'all' | 'pending' | 'approved';
    };
}