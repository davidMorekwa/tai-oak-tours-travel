// /Users/dave/Code/travel-agency/resources/js/components/layout/PublicNavbar.tsx

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { type SharedData } from '@/types'; // Import SharedData type
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, Facebook, Instagram, MapPin, Menu, Twitter } from 'lucide-react';

// Define logo path within the component or pass as prop if needed elsewhere
// Adjust path if needed

const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook }, // Replace # with your Facebook URL
    { name: 'Instagram', href: '#', icon: Instagram }, // Replace # with your Instagram URL
    { name: 'Twitter', href: '#', icon: Twitter }, // Replace # with your Twitter/X URL
];

export default function PublicNavbar() {
    // Get component name from usePage hook *inside* this component
    const { component, props } = usePage<SharedData>();
    const logoUrl = '/storage/image_assets/logo.jpg';
    const availableCountries = (props.availableCountries as String[]) || [];
    console.log('Available Countries:', availableCountries);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href={route('home')} className="shrink-0">
                    <img src={logoUrl} alt="Tai-Oak Tours & Travel Logo" className="h-24 w-auto md:h-12" />
                </Link>

                {/* Right side container (Nav + Social + Mobile Trigger) */}
                <div className="flex items-center gap-2">
                    {/* Desktop Navigation Links (Hidden on small screens) */}
                    <nav className="hidden items-center space-x-1 md:flex md:space-x-2 lg:space-x-4">
                        {/* ... Existing Link components for Home, About, Contact, etc. ... */}
                        <Link
                            href={route('home')}
                            className={cn(
                                'rounded-md px-3 py-1.5 text-sm font-medium text-[#152253] transition-colors hover:bg-[#007562]/5 hover:text-[#007562]',
                                component === 'Welcome' ? 'font-semibold text-[#007562] underline decoration-2 underline-offset-4' : '',
                            )}
                        >
                            Home
                        </Link>
                        <Link
                            href={route('about')}
                            className={cn(
                                'rounded-md px-3 py-1.5 text-sm font-medium text-[#152253] transition-colors hover:bg-[#007562]/5 hover:text-[#007562]',
                                component === 'AboutUs' ? 'font-semibold text-[#007562] underline decoration-2 underline-offset-4' : '',
                            )}
                        >
                            About Us
                        </Link>
                        <Link
                            href={route('contact')}
                            className={cn(
                                'rounded-md px-3 py-1.5 text-sm font-medium text-[#152253] transition-colors hover:bg-[#007562]/5 hover:text-[#007562]',
                                component === 'ContactUs' ? 'font-semibold text-[#007562] underline decoration-2 underline-offset-4' : '',
                            )}
                        >
                            Contact Us
                        </Link>
                        <Link
                            href={route('tours')} // Link to Tours page
                            className={cn(
                                'rounded-md px-3 py-1.5 text-sm font-medium text-[#152253] transition-colors hover:bg-[#007562]/5 hover:text-[#007562]',
                                component === 'Tours' || component === 'TourDetails'
                                    ? 'font-semibold text-[#007562] underline decoration-2 underline-offset-4'
                                    : '', // Highlight for Tours and TourDetails
                            )}
                        >
                            Tours
                        </Link>
                        {availableCountries.length > 0 && (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className={cn(
                                            'flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-[#152253] transition-colors hover:bg-[#007562]/5 hover:text-[#007562] focus-visible:ring-0 focus-visible:ring-offset-0',
                                            component === 'Tours' && props.ziggy?.query?.country?.length
                                                ? 'font-semibold text-[#007562] underline decoration-2 underline-offset-4'
                                                : '',
                                        )}
                                    >
                                        Destinations
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>{' '}
                                <DropdownMenuContent align="start" className="w-56 bg-white">
                                    {availableCountries.map((country) => (
                                        <DropdownMenuItem key={country} asChild className="transition-colors hover:bg-[#007562]/5 hover:text-[#007562]">
                                            <Link
                                                href={route('tours', { country: country })}
                                                className="w-full cursor-pointer text-[#152253] transition-colors hover:bg-[#007562]/5 hover:text-[#007562] focus-visible:ring-0 focus-visible:ring-offset-0"
                                            >
                                                {country}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </nav>

                    {/* Desktop Social Links (Hidden on small screens) */}
                    <div className="hidden items-center space-x-1 border-l border-gray-300 pl-3 md:flex md:pl-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md p-2 text-[#152253] transition-colors hover:bg-[#007562]/5 hover:text-[#007562]"
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
                            <DropdownMenuContent align="end" className="w-56 bg-white">
                                {/* Main Nav Items */}
                                <DropdownMenuItem asChild>
                                    <Link
                                        href={route('home')}
                                        className={cn(
                                            'focus:bg-accent focus:text-accent-foreground w-full cursor-pointer px-2 py-1.5 text-sm transition-colors outline-none hover:bg-[#007562]/5 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                            component === 'Welcome' ? 'font-semibold text-[#007562]' : 'text-gray-700 hover:text-[#007562]',
                                        )}
                                    >
                                        Home
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href={route('about')}
                                        className={cn(
                                            'focus:bg-accent focus:text-accent-foreground w-full cursor-pointer px-2 py-1.5 text-sm transition-colors outline-none hover:bg-[#007562]/5 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                            component === 'AboutUs' ? 'font-semibold text-[#007562]' : 'text-gray-700 hover:text-[#007562]',
                                        )}
                                    >
                                        About Us
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href={route('contact')}
                                        className={cn(
                                            'focus:bg-accent focus:text-accent-foreground w-full cursor-pointer px-2 py-1.5 text-sm transition-colors outline-none hover:bg-[#007562]/5 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                            component === 'ContactUs' ? 'font-semibold text-[#007562]' : 'text-gray-700 hover:text-[#007562]',
                                        )}
                                    >
                                        Contact Us
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href={route('tours')}
                                        className={cn(
                                            'focus:bg-accent focus:text-accent-foreground w-full cursor-pointer px-2 py-1.5 text-sm transition-colors outline-none hover:bg-[#007562]/5 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                            component === 'Tours' || component === 'TourDetails'
                                                ? 'font-semibold text-[#007562]'
                                                : 'text-gray-700 hover:text-[#007562]',
                                        )}
                                    >
                                        Tours
                                    </Link>
                                </DropdownMenuItem>
                                {availableCountries.length > 0 && (
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger
                                            className={cn(
                                                'w-full cursor-pointer justify-start hover:bg-[#007562]/5',
                                                component === 'Tours' && props.ziggy?.query?.country
                                                    ? 'font-semibold text-[#007562]'
                                                    : 'text-gray-700 hover:text-[#007562]',
                                            )}
                                        >
                                            <MapPin className="mr-2 h-4 w-4" />
                                            <span>Destinations</span>
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent className="bg-white">
                                                {availableCountries.map((country) => (
                                                    <DropdownMenuItem key={country} asChild>
                                                        <Link
                                                            href={route('tours', { country: country })}
                                                            className="w-full cursor-pointer text-gray-700 hover:bg-[#007562]/5 hover:text-[#007562]"
                                                        >
                                                            {country}
                                                        </Link>
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                )}

                                {/* Separator */}
                                <DropdownMenuSeparator />

                                {/* Social Links in Mobile Menu */}
                                <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">Follow Us</div>
                                {socialLinks.map((link) => (
                                    <DropdownMenuItem key={link.name} asChild>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex w-full cursor-pointer items-center gap-2 text-gray-700 hover:bg-[#007562]/5 hover:text-[#007562]"
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
