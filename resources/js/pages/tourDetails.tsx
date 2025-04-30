// /Users/dave/Code/travel-agency/resources/js/pages/TourDetails.tsx

import PublicNavbar from '@/components/public-navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge'; // Import Badge
import { Separator } from '@/components/ui/separator'; // Import Separator
import { Input } from '@/components/ui/input'; // Keep for Footer
import { cn } from '@/lib/utils';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { CalendarDays, Check, Clock, DollarSign, Mail, MapPlus, Phone, Users, X, Star, MapPin } from 'lucide-react'; // Added more icons
import { useInView } from 'react-intersection-observer';

// --- Placeholder Single Tour Data ---
// TODO: This data should come from Inertia props passed by the controller
const tourData = {
    id: 1,
    title: 'Maasai Mara Classic Safari',
    imageUrl: '/storage/image_assets/1.jpg', // Main hero image
    gallery: [ // Optional: Add more images for a gallery later
        '/storage/image_assets/1.jpg',
        '/storage/image_assets/wildlife.jpg',
        '/storage/image_assets/mara_river_crossing.jpg',
    ],
    duration: '4 Days / 3 Nights',
    price: 850,
    rating: 4.8,
    overview: 'Immerse yourself in the legendary Maasai Mara, world-renowned for its exceptional wildlife density, stunning landscapes, and the dramatic Great Migration (seasonal). This classic safari offers unforgettable game drives and a chance to witness the Big Five in their natural habitat.',
    highlights: [
        'Multiple Game Drives in Maasai Mara National Reserve',
        'Chance to witness the Great Migration (July - October)',
        'Search for the Big Five (Lion, Leopard, Elephant, Rhino, Buffalo)',
        'Scenic drive through the Great Rift Valley',
        'Comfortable lodge/camp accommodation',
        'Optional Maasai Village Visit',
        'Optional Hot Air Balloon Safari',
    ],
    itinerary: [
        { day: 1, title: 'Nairobi to Maasai Mara', description: 'Depart from Nairobi after breakfast and drive down the scenic Great Rift Valley escarpment. Arrive at your lodge/camp in the Maasai Mara in time for lunch, followed by an afternoon game drive. Dinner and overnight stay.' },
        { day: 2, title: 'Full Day Game Drive', description: 'Spend the full day exploring the vast plains of the Maasai Mara. Search for the Big Five and other wildlife. Visit the Mara River, famous for the wildebeest crossing during migration season. Enjoy a picnic lunch in the reserve. Return to the lodge/camp for dinner.' },
        { day: 3, title: 'Morning Game Drive & Optional Activities', description: 'Early morning game drive for a chance to see predators hunting. Return for breakfast. Optional activities include a visit to a local Maasai village or a hot air balloon safari (at extra cost). Afternoon game drive or relax at the lodge. Dinner and overnight.' },
        { day: 4, title: 'Maasai Mara to Nairobi', description: 'Enjoy a final early morning game drive. After breakfast, check out and begin the drive back to Nairobi, arriving in the late afternoon. Drop off at your hotel or the airport.' },
    ],
    inclusions: [
        'Park entrance fees',
        'Accommodation as specified (Full Board)',
        'Transport in a safari vehicle (e.g., 4x4 Land Cruiser)',
        'Professional English-speaking driver/guide',
        'All game drives as per itinerary',
        'Bottled water during safari',
        'Government taxes',
    ],
    exclusions: [
        'International flights',
        'Visa fees',
        'Optional activities (Balloon Safari, Maasai Village)',
        'Tips and gratuities',
        'Personal expenses (drinks, laundry, etc.)',
        'Travel insurance',
    ],
};
// --- End Placeholder Data ---

export default function TourDetails() {
    const { props, component } = usePage<SharedData>();
    const logoUrl = '/storage/image_assets/logo.jpg'; // Ensure correct path

    // Animation hooks
    const animationOptions = { triggerOnce: true, threshold: 0.1 };
    const { ref: heroRef, inView: heroInView } = useInView(animationOptions);
    const { ref: detailsRef, inView: detailsInView } = useInView(animationOptions);
    const { ref: itineraryRef, inView: itineraryInView } = useInView(animationOptions);
    const { ref: inclusionsRef, inView: inclusionsInView } = useInView(animationOptions);
    const { ref: highlightsRef, inView: highlightsInView } = useInView(animationOptions);
    const { ref: ctaRef, inView: ctaInView } = useInView(animationOptions);

    return (
        <>
            {/* Use the specific tour title */}
            <Head title={`${tourData.title} - Tai-Oak Tours & Travel`} />

            {/* Main container */}
            <div className="flex min-h-screen flex-col items-center bg-[#fff7d6] text-[#1b1b18]">
                {/* --- Header --- */}
                <PublicNavbar />
                {/* --- End Header --- */}

                {/* Content Sections Wrapper */}
                <div className="w-full flex-1">
                    {/* --- Hero Section (Image + Title) --- */}
                    {/* Sequence 1: Image (No specific background needed) */}
                    <section
                        ref={heroRef}
                        className={cn(
                            'relative h-[50vh] w-full bg-black md:h-[60vh]', // Adjust height as needed
                            'opacity-0 transition-opacity duration-1000 ease-in-out',
                            heroInView ? 'opacity-100' : '',
                        )}
                    >
                        <img src={tourData.imageUrl} alt={tourData.title} className="h-full w-full object-cover opacity-70" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-black/30 p-6 text-center text-white">
                            <h1 className="mb-2 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">{tourData.title}</h1>
                            <div className="flex items-center space-x-4 text-lg text-gray-200">
                                <span className="flex items-center gap-1.5"><Clock className="h-5 w-5" /> {tourData.duration}</span>
                                <span className="flex items-center gap-1.5"><DollarSign className="h-5 w-5" /> From ${tourData.price} pp</span>
                                {tourData.rating && (
                                    <span className="flex items-center gap-1 rounded-full bg-yellow-400 px-2 py-0.5 text-sm font-bold text-black">
                                        <Star className="h-4 w-4 fill-black" /> {tourData.rating.toFixed(1)}
                                    </span>
                                )}
                            </div>
                        </div>
                    </section>
                    {/* --- End Hero Section --- */}

                    {/* --- Overview & Key Details Section --- */}
                    {/* Sequence 2: White */}
                    <section
                        ref={detailsRef}
                        className={cn(
                            'w-full bg-white py-16',
                            'opacity-0 transition-opacity delay-100 duration-1000 ease-in-out',
                            detailsInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                            <h2 className="mb-4 text-3xl font-bold text-gray-900">Tour Overview</h2>
                            <p className="mb-8 text-lg leading-relaxed text-gray-700">{tourData.overview}</p>
                            <Separator className="my-8" />
                            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
                                <div className="flex flex-col items-center">
                                    <Clock className="mb-2 h-8 w-8 text-[#007562]" />
                                    <span className="font-semibold">Duration</span>
                                    <span className="text-sm text-gray-600">{tourData.duration}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <DollarSign className="mb-2 h-8 w-8 text-[#007562]" />
                                    <span className="font-semibold">Starting Price</span>
                                    <span className="text-sm text-gray-600">${tourData.price} / person</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Users className="mb-2 h-8 w-8 text-[#007562]" />
                                    <span className="font-semibold">Group Size</span>
                                    <span className="text-sm text-gray-600">Small Groups (2-6)</span> {/* Example */}
                                </div>
                                <div className="flex flex-col items-center">
                                    <MapPin className="mb-2 h-8 w-8 text-[#007562]" />
                                    <span className="font-semibold">Main Location</span>
                                    <span className="text-sm text-gray-600">Maasai Mara</span> {/* Example */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* --- End Overview Section --- */}

                    {/* --- Itinerary Section --- */}
                    {/* Sequence 3: Cream */}
                    <section
                        ref={itineraryRef}
                        className={cn(
                            'w-full bg-[#f5e7c5] py-16',
                            'opacity-0 transition-opacity delay-200 duration-1000 ease-in-out',
                            itineraryInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Daily Itinerary</h2>
                            <div className="space-y-8">
                                {tourData.itinerary.map((day) => (
                                    <div key={day.day} className="flex flex-col gap-2 rounded-lg border border-gray-300 bg-white p-6 shadow-sm md:flex-row md:gap-6">
                                        <div className="flex shrink-0 items-center justify-center rounded-full bg-[#152253] p-3 text-center font-bold text-white md:h-16 md:w-16">
                                            Day <span className="ml-1 text-xl">{day.day}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="mb-1 text-xl font-semibold text-gray-800">{day.title}</h3>
                                            <p className="text-gray-700">{day.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* --- End Itinerary Section --- */}

                    {/* --- Inclusions & Exclusions Section --- */}
                    {/* Sequence 4: White */}
                    <section
                        ref={inclusionsRef}
                        className={cn(
                            'w-full bg-white py-16',
                            'opacity-0 transition-opacity delay-300 duration-1000 ease-in-out',
                            inclusionsInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="mx-auto grid max-w-4xl gap-10 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
                            <div>
                                <h3 className="mb-4 text-2xl font-bold text-gray-900">What's Included</h3>
                                <ul className="space-y-2">
                                    {tourData.inclusions.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-gray-700">
                                            <Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="mb-4 text-2xl font-bold text-gray-900">What's Excluded</h3>
                                <ul className="space-y-2">
                                    {tourData.exclusions.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-gray-700">
                                            <X className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* --- End Inclusions Section --- */}

                    {/* --- Highlights Section --- */}
                    {/* Sequence 5: Cream */}
                    <section
                        ref={highlightsRef}
                        className={cn(
                            'w-full bg-[#f5e7c5] py-16',
                            'opacity-0 transition-opacity delay-400 duration-1000 ease-in-out',
                            highlightsInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Tour Highlights</h2>
                            <div className="flex flex-wrap justify-center gap-3">
                                {tourData.highlights.map((highlight) => (
                                    <Badge key={highlight} variant="secondary" className="bg-white px-4 py-1.5 text-base text-gray-800 shadow-sm">
                                        {highlight}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* --- End Highlights Section --- */}

                     {/* --- Call to Action Section --- */}
                     {/* Sequence 6: White (before footer) */}
                    <section
                        ref={ctaRef}
                        className={cn(
                            'w-full bg-white py-16 text-center',
                            'opacity-0 transition-opacity delay-500 duration-1000 ease-in-out',
                            ctaInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                            <h2 className="mb-4 text-3xl font-bold text-gray-900">Ready for this Adventure?</h2>
                            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
                                Book your spot on the {tourData.title} or contact us for more details and customization options.
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <Button size={'lg'} variant={'default'} asChild>
                                    <Link href={route('contact')}>Enquire Now</Link>
                                </Button>
                                {/* Add a direct booking link/modal trigger if applicable */}
                                {/* <Button size={'lg'} variant={'outline'}>Book Online</Button> */}
                            </div>
                        </div>
                    </section>
                    {/* --- End Call to Action Section --- */}

                </div>

                {/* --- Footer --- */}
                {/* Sequence 7: Dark Blue */}
                <footer className="w-full bg-[#152253] py-10 text-sm text-[#9a9a9a]">
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
