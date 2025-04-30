// /Users/dave/Code/travel-agency/resources/js/pages/Tours.tsx

import PublicNavbar from '@/components/public-navbar';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input'; // Keep for Footer
import { cn } from '@/lib/utils';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Mail, MapPlus, Phone, Star } from 'lucide-react'; // Added Star for potential rating
import { useInView } from 'react-intersection-observer';

// --- Placeholder Tour Package Data ---
// TODO: Replace with data fetched from your backend
const tourPackages = [
    {
        id: 1,
        title: 'Maasai Mara Classic Safari',
        imageUrl: '/storage/image_assets/1.jpg', // Replace with actual image
        duration: '4 Days / 3 Nights',
        highlights: ['Big Five Game Drives', 'Mara River Crossing (Seasonal)', 'Maasai Village Visit (Optional)'],
        description: 'Immerse yourself in the legendary Maasai Mara, renowned for its incredible wildlife density and the Great Migration.',
        price: 850,
        rating: 4.8, // Example rating
        detailsLink: '#', // Replace with actual route later: route('tours.show', { tour: 1 })
    },
    {
        id: 2,
        title: 'Amboseli Elephant Spectacle',
        imageUrl: '/storage/image_assets/pexels-pixabay-59989.jpg', // Replace with actual image
        duration: '3 Days / 2 Nights',
        highlights: ['Views of Mt. Kilimanjaro', 'Large Elephant Herds', 'Observation Hill'],
        description: 'Get up close with gentle giants against the iconic backdrop of Africa\'s highest peak in Amboseli National Park.',
        price: 650,
        rating: 4.7,
        detailsLink: '#', // Replace with actual route later
    },
    {
        id: 3,
        title: 'Diani Beach Paradise Escape',
        imageUrl: '/storage/image_assets/image3.jpg', // Replace with actual image
        duration: '5 Days / 4 Nights',
        highlights: ['White Sand Beaches', 'Snorkeling/Diving', 'Coastal Relaxation', 'Colobus Conservation'],
        description: 'Unwind on the award-winning Diani Beach. Perfect for post-safari relaxation or a standalone beach getaway.',
        price: 500,
        rating: 4.9,
        detailsLink: '#', // Replace with actual route later
    },
    {
        id: 4,
        title: 'Lake Nakuru & Rift Valley Explorer',
        imageUrl: '/storage/image_assets/image2.jpg', // Replace with actual image
        duration: '3 Days / 2 Nights',
        highlights: ['Flamingo Flocks (Seasonal)', 'Rhino Sanctuary', 'Baboon Cliff', 'Optional Hell\'s Gate'],
        description: 'Discover the unique beauty of the Great Rift Valley, from vibrant birdlife to endangered rhinos.',
        price: 550,
        rating: 4.6,
        detailsLink: '#', // Replace with actual route later
    },
    {
        id: 5,
        title: 'Tsavo East & West Adventure',
        imageUrl: '/storage/image_assets/wildlife.jpg', // Replace with actual image
        duration: '4 Days / 3 Nights',
        highlights: ['Mzima Springs', 'Shetani Lava Flows', '"Red Elephants"', 'Lugard Falls'],
        description: 'Explore the vast wilderness of Tsavo, Kenya\'s largest national park, known for its diverse landscapes and unique wildlife.',
        price: 750,
        rating: 4.5,
        detailsLink: '#', // Replace with actual route later
    },
    {
        id: 6,
        title: 'Mount Kenya Trekking Challenge',
        imageUrl: '/storage/image_assets/Mount_Kenya.jpg', // Replace with actual image
        duration: '5 Days / 4 Nights',
        highlights: ['Point Lenana Summit', 'Alpine Scenery', 'Diverse Flora/Fauna', 'Experienced Guides'],
        description: 'Embark on an exhilarating trek up Mount Kenya, Africa\'s second-highest peak, through stunning landscapes.',
        price: 1100,
        rating: 4.8,
        detailsLink: '#', // Replace with actual route later
    },
    // Add more packages as needed
];
// --- End Placeholder Data ---

export default function Tours() {
    const { props, component } = usePage<SharedData>();
    const logoUrl = '/storage/image_assets/logo.jpg'; // Ensure correct path

    // Animation hooks
    const animationOptions = { triggerOnce: true, threshold: 0.1 };
    const { ref: heroRef, inView: heroInView } = useInView(animationOptions);
    const { ref: packagesRef, inView: packagesInView } = useInView(animationOptions);

    return (
        <>
            <Head title="Our Tour Packages - Tai-Oak Tours & Travel" />

            {/* Main container */}
            <div className="flex min-h-screen flex-col items-center bg-[#fff7d6] text-[#1b1b18]">
                {/* --- Header --- */}
                <PublicNavbar />
                {/* --- End Header --- */}

                {/* Content Sections Wrapper */}
                <div className="w-full flex-1"> {/* Added flex-1 to push footer down */}
                    {/* Hero Section - ANIMATED */}
                    <section
                        ref={heroRef}
                        className={cn(
                            'bg-gradient-to-r from-[#152253] to-[#0e1630] py-16 text-center text-white shadow-lg md:py-20', // Dark Blue Gradient
                            'opacity-0 transition-opacity duration-1000 ease-in-out',
                            heroInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Explore Our Kenyan Tours</h1>
                            <p className="text-lg text-gray-300">
                                Discover meticulously crafted itineraries designed to showcase the best of Kenya's wildlife, landscapes, culture, and
                                coastline. Find your perfect adventure below.
                            </p>
                        </div>
                    </section>

                    {/* Packages Grid Section - ANIMATED */}
                    <section
                        ref={packagesRef}
                        className={cn(
                            'w-full bg-white py-16', // White background
                            'opacity-0 transition-opacity delay-100 duration-1000 ease-in-out',
                            packagesInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            {/* Optional: Add Filters/Sorting controls here later */}
                            {/* <div className="mb-8 flex justify-end"> ... Filters ... </div> */}

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                                {tourPackages.map((pkg) => (
                                    <Card
                                        key={pkg.id}
                                        className="flex flex-col overflow-hidden pt-0 border-none bg-[#f5e7c5] shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl" // Cream background for cards
                                    >
                                        <div className="relative">
                                            <img src={pkg.imageUrl} alt={pkg.title} className="h-60 w-full object-cover" /> {/* Fixed height image */}
                                            {/* Optional: Overlay for Price/Duration */}
                                            <div className="absolute bottom-0 left-0 bg-black/60 px-3 py-1 text-sm font-semibold text-white">
                                                {pkg.duration}
                                            </div>
                                            {pkg.rating && (
                                                <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-yellow-400 px-2 py-0.5 text-xs font-bold text-black">
                                                    <Star className="h-3 w-3 fill-black" />
                                                    {pkg.rating.toFixed(1)}
                                                </div>
                                            )}
                                        </div>
                                        <CardHeader className="pt-4 pb-2">
                                            <CardTitle className="text-lg font-semibold leading-tight">{pkg.title}</CardTitle>
                                        </CardHeader>
                                        <CardDescription className="flex-grow px-6 pb-4 text-sm text-gray-700">
                                            <p className="mb-2 line-clamp-3">{pkg.description}</p> {/* Limit description lines */}
                                            {/* Optional: Display highlights */}
                                            <ul className="mt-2 list-disc list-inside text-xs text-gray-600">
                                                {pkg.highlights.slice(0, 2).map(hl => <li key={hl}>{hl}</li>)}
                                                {pkg.highlights.length > 2 && <li>...</li>}
                                            </ul>
                                        </CardDescription>
                                        <CardFooter className="mt-auto flex items-center justify-between bg-[#e6d9b9] px-6 py-3"> {/* Slightly darker footer */}
                                            <p className="text-lg font-semibold text-[#152253]">
                                                ${pkg.price} <span className="text-sm font-normal text-gray-600">/ person</span>
                                            </p>
                                            <Link href={pkg.detailsLink}>
                                                <Button variant={'default'} size="sm">
                                                    View Details
                                                </Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>

                            {/* Optional: Add Pagination controls here later */}
                            {/* <div className="mt-12 text-center"> ... Pagination ... </div> */}
                        </div>
                    </section>
                </div>

                {/* --- Footer --- */}
                <footer className="w-full bg-[#152253] py-10 text-sm text-[#9a9a9a]"> {/* Removed mt-auto as flex-1 on content wrapper handles it */}
                    {/* ... Footer content remains the same ... */}
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
                                <li><Link href={route('contact')} className="hover:text-white">Contact Us</Link></li>
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
            </div>
        </>
    );
}
