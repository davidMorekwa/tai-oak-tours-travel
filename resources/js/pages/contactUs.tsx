// /Users/dave/Code/travel-agency/resources/js/pages/ContactUs.tsx

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Head, Link, usePage } from '@inertiajs/react';
import { Mail, MapPin, MapPlus, Phone } from 'lucide-react'; // Icons for contact details
// Import useInView and cn
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { SharedData } from '@/types';
import PublicNavbar from '@/components/public-navbar';

// Define logo path
const logoUrl = '/storage/image_assets/logo.png'; // Adjust path if needed

export default function ContactUs() {
    const { props, component } = usePage<SharedData>();
    const logoUrl = '/storage/image_assets/logo.jpg';
    // Setup useInView hooks for each section with staggering delays
    const animationOptions = { triggerOnce: true, threshold: 0.1 };
    const { ref: heroRef, inView: heroInView } = useInView(animationOptions);
    const { ref: formDetailsRef, inView: formDetailsInView } = useInView(animationOptions);
    const { ref: mapRef, inView: mapInView } = useInView(animationOptions);

    // Placeholder for form submission handling (using Inertia's useForm later)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add form submission logic here using Inertia useForm
        console.log('Form submitted');
        alert('Enquiry submitted! (Placeholder)');
    };

    return (
        <>
            <Head title="Contact Tai-Oak Tours & Travel" />

            {/* Main Content Area */}
            <div className="flex min-h-screen flex-col items-center bg-[#fff7d6] text-[#1b1b18]">
                {/* --- Navigation Header --- */}
                <PublicNavbar />
                {/* --- End Navigation Header --- */}

                {/* Content Sections Wrapper */}
                <div className="w-full max-w-7xl px-4 py-6 md:px-6 lg:px-8 lg:py-8">
                    {/* Hero Section - ANIMATED */}
                    <section
                        ref={heroRef}
                        className={cn(
                            'mb-8 rounded-lg bg-gradient-to-r from-[#152253] to-[#0e1630] p-8 py-12 text-center text-white shadow-lg md:py-16',
                            'opacity-0 transition-opacity duration-1000 ease-in-out', // Base animation
                            heroInView ? 'opacity-100' : '', // In view state
                        )}
                    >
                        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Get In Touch</h1>
                        <p className="mx-auto max-w-3xl text-lg text-gray-300">
                            Have questions about our tours, need help planning your trip, or just want to say hello? We'd love to hear from you! Reach
                            out using the form below or contact us directly.
                        </p>
                    </section>

                    {/* Contact Form & Details Section - ANIMATED */}
                    <section
                        ref={formDetailsRef}
                        className={cn(
                            'mb-8 rounded-lg bg-white p-6 shadow-md md:p-8', // White background
                            'opacity-0 transition-opacity duration-1000 ease-in-out delay-100', // Animation + delay
                            formDetailsInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
                            {/* Contact Details (Takes up 2/5 columns on large screens) */}
                            <div className="lg:col-span-2">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#007562]" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Our Office</h3>
                                            <address className="not-italic text-gray-600">
                                                123 Safari Lane, Westlands
                                                <br />
                                                Nairobi, Kenya
                                            </address>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="mt-1 h-6 w-6 shrink-0 text-[#007562]" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                                            <a href="tel:+254700123456" className="text-gray-600 hover:text-[#007562] hover:underline">
                                                +254 700 123 456
                                            </a>
                                            <p className="text-sm text-gray-500">(Mon-Fri, 9am - 5pm EAT)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Mail className="mt-1 h-6 w-6 shrink-0 text-[#007562]" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                                            <a href="mailto:info@taioaktours.co.ke" className="text-gray-600 hover:text-[#007562] hover:underline">
                                                info@taioaktours.co.ke
                                            </a>
                                            <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form (Takes up 3/5 columns on large screens) */}
                            <div className="lg:col-span-3">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">Send Us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                                                Full Name <span className="text-red-600">*</span>
                                            </label>
                                            <Input id="name" type="text" placeholder="Your Name" required />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                                Email Address <span className="text-red-600">*</span>
                                            </label>
                                            <Input id="email" type="email" placeholder="you@example.com" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                                            Subject
                                        </label>
                                        <Input id="subject" type="text" placeholder="e.g., Enquiry about Maasai Mara Safari" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                                            Your Message <span className="text-red-600">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            className="border-input focus-visible:border-ring focus-visible:ring-ring/50 w-full rounded-md border bg-transparent p-3 text-base shadow-xs transition-[color,box-shadow] focus:outline-none focus-visible:ring-[3px] md:text-sm"
                                            placeholder="Tell us how we can help..."
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="text-right">
                                        <Button type="submit" variant={'default'} size={'lg'}>
                                            Send Message
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* Map Section - ANIMATED */}
                    <section
                        ref={mapRef}
                        className={cn(
                            'mb-8 rounded-lg bg-[#f5e7c5] p-6 shadow-md md:p-8', // Cream background
                            'opacity-0 transition-opacity duration-1000 ease-in-out delay-200', // Animation + delay
                            mapInView ? 'opacity-100' : '',
                        )}
                    >
                        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Find Us Here</h2>
                        <div className="overflow-hidden rounded-lg shadow-md">
                            {/* Replace with your actual Google Maps embed code */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.17934904937!2d36.76402365820312!3d-1.3030739999999907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1678886456789!5m2!1sen!2sus" // Placeholder URL
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Tai-Oak Tours Location"
                            ></iframe>
                        </div>
                    </section>
                </div>{' '}
                {/* End content wrapper */}
                {/* --- Footer --- */}
                <footer className="mt-auto w-full bg-[#152253] py-10 text-sm text-[#9a9a9a]">
                    {/* ... Footer content (same as before) ... */}
                     <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3 lg:grid-cols-5">
                        {/* Company Info */}
                        <div className="md:col-span-1 lg:col-span-1">
                            <Link href={route('home')} className="mb-4 inline-block">
                                <img src={logoUrl} alt="Tai-Oak Tours & Travel Logo" className="h-10 w-auto" />
                            </Link>
                            <h4 className="mb-3 font-semibold text-white">Tai-Oak Tours & Travel</h4>
                            <p className="text-sm leading-relaxed">
                                Your gateway to unforgettable Kenyan adventures...
                            </p>
                        </div>
                        {/* Company Links */}
                        <div>
                            <h4 className="mb-3 font-semibold text-white">Company</h4>
                            <ul className="space-y-2">
                                <li><Link href={route('home')} className="hover:text-white">Home</Link></li>
                                <li><Link href={route('about')} className="hover:text-white">About Us</Link></li>
                                <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                            </ul>
                        </div>
                        {/* Services */}
                        <div>
                            <h4 className="mb-3 font-semibold text-white">Services</h4>
                            <ul className="space-y-2">
                                <li><Link href="#" className="hover:text-white">Tour Guiding</Link></li>
                                <li><Link href="#" className="hover:text-white">Package Bookings</Link></li>
                                <li><Link href="#" className="hover:text-white">Rental Services</Link></li>
                                <li><Link href="#" className="hover:text-white">Hotel Reservations</Link></li>
                            </ul>
                        </div>
                        {/* Newsletter */}
                        <div>
                            <h4 className="mb-3 font-semibold text-white">Newsletter</h4>
                            <p className="mb-3 text-sm">Subscribe for travel tips...</p>
                            <form className="flex flex-col gap-2 sm:flex-row">
                                <Input type="email" className="flex-grow bg-white/10 text-white placeholder:text-gray-400" placeholder="Your email" required />
                                <Button variant={'default'} type="submit" className="shrink-0">Subscribe</Button>
                            </form>
                        </div>
                         {/* Address */}
                        <div>
                            <h4 className="mb-3 font-semibold text-white">Address</h4>
                            <address className="space-y-2 not-italic">
                                <p className="flex items-center gap-2"><MapPlus className="size-4 shrink-0 text-[#007562]" /> 123 Safari Lane...</p>
                                <p className="flex items-center gap-2"><Phone className="size-4 shrink-0 text-[#007562]" /> +254 700 123 456</p>
                                <p className="flex items-center gap-2"><Mail className="size-4 shrink-0 text-[#007562]" /> info@taioaktours.co.ke</p>
                            </address>
                        </div>
                    </div>
                    {/* Copyright */}
                    <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs">
                        <p>&copy; {new Date().getFullYear()} Tai-Oak Tours & Travel. All rights reserved.</p>
                    </div>
                </footer>
                {/* --- End Footer --- */}
            </div>{' '}
            {/* End main content div */}
        </> // End fragment
    );
}
