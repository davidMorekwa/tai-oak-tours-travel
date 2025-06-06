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
    highlights: string
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
