// /Users/dave/Code/travel-agency/resources/js/components/layout/PublicFooter.tsx

import React from 'react';
import { Link } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, MapPlus, Phone } from 'lucide-react';

// Define logo path within the component
// Ensure this path is correct relative to your public directory
const logoUrl = '/storage/image_assets/logo.jpg';

export default function PublicFooter() {
    return (
        <footer className="w-full bg-[#152253] py-10 text-sm text-[#9a9a9a]">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3 lg:grid-cols-5">
                {/* Company Info */}
                <div className="md:col-span-1 lg:col-span-1">
                    <Link href={route('home')} className="mb-4 inline-block">
                        <img src={logoUrl} alt="Tai-Oak Tours & Travel Logo" className="h-10 w-auto" />
                    </Link>
                    <h4 className="mb-3 font-semibold text-white">Tai-Oak Tours & Travel</h4>
                    <p className="text-sm leading-relaxed">
                        Your gateway to unforgettable Kenyan adventures. We offer personalized safaris, cultural experiences, and beach holidays.
                    </p>
                </div>
                {/* Company Links */}
                <div>
                    <h4 className="mb-3 font-semibold text-white">Company</h4>
                    <ul className="space-y-2">
                        <li><Link href={route('home')} className="hover:text-white">Home</Link></li>
                        <li><Link href={route('about')} className="hover:text-white">About Us</Link></li>
                        <li><Link href={route('contact')} className="hover:text-white">Contact Us</Link></li>
                        <li><Link href={route('tours')} className="hover:text-white">Tours</Link></li> {/* Added Tours Link */}
                        {/* Add Careers link if you have that page */}
                        {/* <li><Link href="#" className="hover:text-white">Careers</Link></li> */}
                    </ul>
                </div>
                {/* Services */}
                <div>
                    <h4 className="mb-3 font-semibold text-white">Services</h4>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-white">Air Ticketing</Link></li>
                        <li><Link href="#" className="hover:text-white">Car Rentals</Link></li>
                        <li><Link href="#" className="hover:text-white">Safari Packages</Link></li>
                        <li><Link href="#" className="hover:text-white">Team Building</Link></li>
                        <li><Link href="#" className="hover:text-white">Hotel Reservations and Bookings</Link></li>
                        <li><Link href="#" className="hover:text-white">Excursions</Link></li>
                    </ul>
                </div>
                {/* Newsletter */}
                <div>
                    <h4 className="mb-3 font-semibold text-white">Newsletter</h4>
                    <p className="mb-3 text-sm">Subscribe for travel tips & offers.</p>
                    {/* TODO: Implement form submission */}
                    <form className="flex flex-col gap-2 sm:flex-row">
                        <Input type="email" className="flex-grow bg-white/10 text-white placeholder:text-gray-400" placeholder="Your email" required />
                        <Button variant={'default'} type="submit" className="shrink-0">Subscribe</Button>
                    </form>
                </div>
                 {/* Address */}
                <div>
                    <h4 className="mb-3 font-semibold text-white">Address</h4>
                    <address className="space-y-2 not-italic">
                        <p className="flex items-center gap-2"><MapPlus className="size-4 shrink-0 text-[#007562]" />Muthaiga Square, Thika Road, Nairobi</p>
                        <p className="flex items-center gap-2"><Phone className="size-4 shrink-0 text-[#007562]" /> +254 741 775 694</p>
                        <p className="flex items-center gap-2"><Mail className="size-4 shrink-0 text-[#007562]" />taioaktraveltours2025@gmail.com</p>
                    </address>
                </div>
            </div>
            {/* Copyright */}
            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs">
                <p>&copy; {new Date().getFullYear()} Tai-Oak Tours & Travel. All rights reserved.</p>
            </div>
        </footer>
    );
}
