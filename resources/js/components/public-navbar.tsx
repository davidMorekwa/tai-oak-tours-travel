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
import { Menu, Facebook, Instagram, Twitter } from 'lucide-react';
import { type SharedData } from '@/types'; // Import SharedData type

// Define logo path within the component or pass as prop if needed elsewhere
 // Adjust path if needed

 const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook }, // Replace # with your Facebook URL
    { name: 'Instagram', href: '#', icon: Instagram }, // Replace # with your Instagram URL
    { name: 'Twitter', href: '#', icon: Twitter }, // Replace # with your Twitter/X URL
];

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

                {/* Right side container (Nav + Social + Mobile Trigger) */}
                <div className="flex items-center gap-2">
                    {/* Desktop Navigation Links (Hidden on small screens) */}
                    <nav className="hidden items-center space-x-1 md:flex md:space-x-2 lg:space-x-4">
                        {/* ... Existing Link components for Home, About, Contact, etc. ... */}
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
                            href={route('tours')} // Link to Tours page
                            className={cn(
                                'rounded-md px-3 py-1.5 text-sm font-medium text-[#152253] transition-colors hover:bg-black/5 hover:text-[#007562]',
                                component === 'Tours' || component === 'TourDetails' ? 'font-semibold text-[#007562] underline decoration-2 underline-offset-4' : '', // Highlight for Tours and TourDetails
                            )}
                        >
                            Tours
                        </Link>
                        {/* <Link
                            href={route('home')} // Replace later
                            className={cn(
                                'rounded-md px-3 py-1.5 text-sm font-medium text-[#152253] transition-colors hover:bg-black/5 hover:text-[#007562]',
                                // component === 'Destinations' ? 'font-semibold text-[#007562] underline decoration-2 underline-offset-4' : ''
                            )}
                        >
                            Destinations
                        </Link> */}
                    </nav>

                    {/* Desktop Social Links (Hidden on small screens) */}
                    <div className="hidden items-center space-x-1 border-l border-gray-300 pl-3 md:flex md:pl-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md p-2 text-[#152253] transition-colors hover:bg-black/10 hover:text-[#007562]"
                                aria-label={`Visit our ${link.name} page`}
                            >
                                <link.icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>

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
                                {/* Main Nav Items */}
                                <DropdownMenuItem asChild>
                                    <Link href={route('home')} className={cn('w-full cursor-pointer', component === 'Welcome' ? 'font-semibold text-[#007562]' : 'text-gray-700')}>Home</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href={route('about')} className={cn('w-full cursor-pointer', component === 'AboutUs' ? 'font-semibold text-[#007562]' : 'text-gray-700')}>About Us</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href={route('contact')} className={cn('w-full cursor-pointer', component === 'ContactUs' ? 'font-semibold text-[#007562]' : 'text-gray-700')}>Contact Us</Link>
                                </DropdownMenuItem>
                                 <DropdownMenuItem asChild>
                                    <Link href={route('tours')} className={cn('w-full cursor-pointer', component === 'Tours' || component === 'TourDetails' ? 'font-semibold text-[#007562]' : 'text-gray-700')}>Tours</Link>
                                </DropdownMenuItem>
                                {/* <DropdownMenuItem asChild>
                                    <Link href={route('home')} className={cn('w-full cursor-pointer text-gray-700')}>Destinations</Link>
                                </DropdownMenuItem> */}

                                {/* Separator */}
                                <DropdownMenuSeparator />

                                {/* Social Links in Mobile Menu */}
                                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">Follow Us</div>
                                {socialLinks.map((link) => (
                                    <DropdownMenuItem key={link.name} asChild>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex w-full cursor-pointer items-center gap-2 text-gray-700" // Added flex, gap
                                        >
                                            <link.icon className="h-4 w-4" />
                                            {link.name}
                                        </a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    );
}
