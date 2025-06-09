import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { StarRatingProps } from '@/types';



const StarRating: React.FC<StarRatingProps> = ({
    count = 5,
    value,
    onChange,
    size = 24,
    color = "text-yellow-400", // Default active star color
    hoverColor = "text-yellow-500", // Default hover star color
    inactiveColor = "text-gray-300", // Default inactive star color
    className,
    readonly = false,
}) => {
    const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

    const stars = Array.from({ length: count }, (_, i) => i + 1);

    const handleClick = (rating: number) => {
        if (!readonly && onChange) {
            onChange(rating);
        }
    };

    const handleMouseEnter = (rating: number) => {
        if (!readonly) {
            setHoverValue(rating);
        }
    };

    const handleMouseLeave = () => {
        if (!readonly) {
            setHoverValue(undefined);
        }
    };

    return (
        <div className={cn("flex items-center space-x-0.5", className)}> {/* Reduced space for tighter stars */}
            {stars.map((starValue) => (
                <Star
                    key={starValue}
                    size={size}
                    className={cn(
                        !readonly ? "cursor-pointer" : "cursor-default",
                        "transition-colors",
                        (hoverValue || value) >= starValue ? (hoverValue ? hoverColor : color) : inactiveColor
                    )}
                    fill={(hoverValue || value) >= starValue ? 'currentColor' : 'none'}
                    onClick={() => handleClick(starValue)}
                    onMouseEnter={() => handleMouseEnter(starValue)}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
        </div>
    );
};

export default StarRating;