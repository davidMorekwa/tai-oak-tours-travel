// /Users/dave/Code/travel-agency/resources/js/components/layout/PublicNavbar.tsx

import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { type SharedData } from '@/types'; // Import SharedData type

// Define logo path within the component or pass as prop if needed elsewhere
 // Adjust path if needed

export default function PublicNavbar() {
    // Get component name from usePage hook *inside* this component
    const { component } = usePage<SharedData>();
    const logoUrl = '/storage/image_assets/logo.jpg';

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#fff7d6] shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href={route('home')} className="shrink-0">
                    <img src={logoUrl} alt="Tai-Oak Tours & Travel Logo" className="h-10 w-auto md:h-12" />
                </Link>

                {/* Desktop Navigation Links (Hidden on small screens) */}
                <nav className="hidden items-center space-x-2 md:flex md:space-x-4">
                    <Link
                        href={route('home')}
                        className={cn(
                            'rounded-md px-3 py-1.5 text-sm font-medium text-[#152253] transition-colors hover:bg-black/5 hover:text-[#007562]',
                            component === 'Welcome' ? 'font-semibold text-[#007562] underline decoration-2 underline-offset-4' : '',
                        )}
                    >
                        Home
                    </Link>
                    <Link
                        href={route('about')}
                        className={cn(
                            'rounded-md px-3 py-1.5 text-sm font-medium text-[#152253] transition-colors hover:bg-black/5 hover:text-[#007562]',
                            component === 'AboutUs' ? 'font-semibold text-[#007562] underline decoration-2 underline-offset-4' : '',
                        )}
                    >
                        About Us
                    </Link>
                    <Link
                        href={route('contact')}
                        className={cn(
                            'rounded-md px-3 py-1.5 text-sm font-medium text-[#152253] transition-colors hover:bg-black/5 hover:text-[#007562]',
                            component === 'ContactUs' ? 'font-semibold text-[#007562] underline decoration-2 underline-offset-4' : '',
                        )}
                    >
                        Contact Us
                    </Link>
                    <Link
                        href={route('home')} // Replace later
                        className={cn(
                            'rounded-md px-3 py-1.5 text-sm font-medium text-[#152253] transition-colors hover:bg-black/5 hover:text-[#007562]',
                            // component === 'Hotels' ? 'font-semibold text-[#007562] underline decoration-2 underline-offset-4' : ''
                        )}
                    >
                        Hotels
                    </Link>
                    <Link
                        href={route('tours')} // Replace later
                        className={cn(
                            'rounded-md px-3 py-1.5 text-sm font-medium text-[#152253] transition-colors hover:bg-black/5 hover:text-[#007562]',
                            // component === 'Destinations' ? 'font-semibold text-[#007562] underline decoration-2 underline-offset-4' : ''
                        )}
                    >
                        Destinations
                    </Link>
                </nav>

                {/* Mobile Menu Button (Hidden on medium screens and up) */}
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6 text-[#152253]" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuItem asChild>
                                <Link
                                    href={route('home')}
                                    className={cn('w-full cursor-pointer', component === 'Welcome' ? 'font-semibold text-[#007562]' : 'text-gray-700')}
                                >
                                    Home
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link
                                    href={route('about')}
                                    className={cn('w-full cursor-pointer', component === 'AboutUs' ? 'font-semibold text-[#007562]' : 'text-gray-700')}
                                >
                                    About Us
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link
                                    href={route('contact')}
                                    className={cn('w-full cursor-pointer', component === 'ContactUs' ? 'font-semibold text-[#007562]' : 'text-gray-700')}
                                >
                                    Contact Us
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href={route('home')} className={cn('w-full cursor-pointer text-gray-700')}>
                                    Hotels
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href={route('home')} className={cn('w-full cursor-pointer text-gray-700')}>
                                    Destinations
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
