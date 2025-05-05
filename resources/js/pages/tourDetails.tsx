// /Users/dave/Code/travel-agency/resources/js/pages/TourDetails.tsx

import React, { useState } from 'react'; // Import useState
import PublicNavbar from '@/components/public-navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; // Import Label
import { Textarea } from '@/components/ui/textarea'; // Import Textarea
import { DatePicker } from '@/components/ui/date-picker'; // Ensure DatePicker is set up
import { cn } from '@/lib/utils';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { CalendarDays, Check, Clock, DollarSign, Mail, MapPlus, Phone, Users, X, Star, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import PublicFooter from '@/components/public-footer';

// --- Placeholder Single Tour Data ---
// TODO: This data should come from Inertia props passed by the controller
const tourData = {
    // ... (tourData remains the same as before) ...
    id: 1,
    title: 'Maasai Mara Classic Safari',
    imageUrl: '/storage/image_assets/1.jpg', // Main hero image
    gallery: [ // Optional: Add more images for a gallery later
        '/storage/image_assets/1.jpg',
        '/storage/image_assets/wildlife.jpg',
        '/storage/image_assets/mara_river_crossing.jpg',
    ],
    duration: '4 Days / 3 Nights',
    price: 675,
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

    // Animation hooks - Added bookingRef
    const animationOptions = { triggerOnce: true, threshold: 0.1 };
    const { ref: heroRef, inView: heroInView } = useInView(animationOptions);
    const { ref: detailsRef, inView: detailsInView } = useInView(animationOptions);
    const { ref: bookingRef, inView: bookingInView } = useInView(animationOptions); // New hook for booking widget
    const { ref: itineraryRef, inView: itineraryInView } = useInView(animationOptions);
    const { ref: inclusionsRef, inView: inclusionsInView } = useInView(animationOptions);
    const { ref: highlightsRef, inView: highlightsInView } = useInView(animationOptions);
    const { ref: ctaRef, inView: ctaInView } = useInView(animationOptions);

    // State for Booking Widget
    const [departureDate, setDepartureDate] = useState<Date | undefined>();
    const [numTravelers, setNumTravelers] = useState<number>(2); // Default to 2 travelers
    const [bookingMessage, setBookingMessage] = useState<string>('');

    // Placeholder Handler for Booking Widget Submission
    const handleBookingRequestSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const bookingRequestData = {
            tourId: tourData.id,
            tourTitle: tourData.title,
            departureDate: departureDate,
            travelers: numTravelers,
            message: bookingMessage,
        };
        console.log('Booking Request Data:', bookingRequestData);
        // ** TODO: Replace with Inertia useForm submission to backend **
        // Example: Inertia.post(route('tours.requestQuote', { tour: tourData.id }), bookingRequestData);
        alert('Availability request sent! We will contact you shortly with details and a quote. (Placeholder)');
    };

    return (
        <>
            <Head title={`${tourData.title} - Tai-Oak Tours & Travel`} />

            <div className="flex min-h-screen flex-col items-center bg-[#fff7d6] text-[#1b1b18]">
                <PublicNavbar />

                <div className="w-full flex-1">
                    {/* --- Hero Section --- */}
                    {/* Sequence 1: Image */}
                    <section ref={heroRef} className={cn('relative h-[50vh] w-full bg-black md:h-[60vh]', 'opacity-0 transition-opacity duration-1000 ease-in-out', heroInView ? 'opacity-100' : '')}>
                        {/* ... Hero content ... */}
                         <img src={tourData.imageUrl} alt={tourData.title} className="h-full w-full object-cover opacity-70" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-black/30 p-6 text-center text-white">
                            <h1 className="mb-2 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">{tourData.title}</h1>
                            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-lg text-gray-200"> {/* Added flex-wrap */}
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

                    {/* --- Overview & Key Details Section --- */}
                    {/* Sequence 2: White */}
                    <section ref={detailsRef} className={cn('w-full bg-white py-16', 'opacity-0 transition-opacity delay-100 duration-1000 ease-in-out', detailsInView ? 'opacity-100' : '')}>
                        {/* ... Overview content ... */}
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

                    {/* --- NEW: Booking Request Widget Section --- */}
                    {/* Sequence 3: Cream */}
                    <section
                        ref={bookingRef} // Attach ref
                        className={cn(
                            'w-full bg-[#f5e7c5] py-16', // Cream background
                            'opacity-0 transition-opacity delay-200 duration-1000 ease-in-out', // Animation + delay
                            bookingInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                            <div className="rounded-lg bg-white p-8 shadow-md"> {/* White container inside */}
                                <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Check Availability & Request Quote</h2>
                                <form onSubmit={handleBookingRequestSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        {/* Departure Date */}
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="departureDate" className="font-semibold">Preferred Departure Date</Label>
                                            <DatePicker
                                                date={departureDate}
                                                setDate={setDepartureDate}
                                                buttonId="departureDate"
                                                placeholder="Select start date"
                                                className="bg-white hover:bg-white hover:placeholder:text-black" // Cream background for button
                                            />
                                        </div>
                                        {/* Number of Travelers */}
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="travelers" className="font-semibold">Number of Travelers</Label>
                                            <Input
                                                id="travelers"
                                                type="number"
                                                placeholder="e.g., 2"
                                                min="1"
                                                value={numTravelers}
                                                onChange={(e) => setNumTravelers(Math.max(1, parseInt(e.target.value, 10) || 1))} // Ensure min 1
                                                required
                                                className="bg-white" // Ensure input bg is white
                                            />
                                        </div>
                                    </div>
                                    {/* Message */}
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="bookingMessage" className="font-semibold">Specific Requests or Questions (Optional)</Label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            className="border-input focus-visible:border-ring focus-visible:ring-ring/50 w-full rounded-md border bg-transparent p-3 text-base shadow-xs transition-[color,box-shadow] focus:outline-none focus-visible:ring-[3px] md:text-sm"
                                            placeholder="Tell us how we can help..."
                                            required
                                        ></textarea>
                                    </div>
                                    {/* Submit Button */}
                                    <div className="pt-2 text-center">
                                        <Button type="submit" size="lg" variant="default" className="w-full sm:w-auto">
                                            Request Availability & Quote
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    {/* --- End Booking Request Widget Section --- */}

                    {/* --- Itinerary Section --- */}
                    {/* Sequence 4: White */}
                    <section
                        ref={itineraryRef}
                        className={cn(
                            'w-full bg-white py-16', // Changed background to White
                            'opacity-0 transition-opacity delay-300 duration-1000 ease-in-out', // Adjusted delay
                            itineraryInView ? 'opacity-100' : '',
                        )}
                    >
                        {/* ... Itinerary content ... */}
                         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Daily Itinerary</h2>
                            <div className="space-y-8">
                                {tourData.itinerary.map((day) => (
                                    <div key={day.day} className="flex flex-col gap-2 rounded-lg border border-gray-300 bg-[#f5e7c5] p-6 shadow-sm md:flex-row md:gap-6"> {/* Changed inner bg */}
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

                    {/* --- Inclusions & Exclusions Section --- */}
                    {/* Sequence 5: Cream */}
                    <section
                        ref={inclusionsRef}
                        className={cn(
                            'w-full bg-[#f5e7c5] py-16', // Changed background to Cream
                            'opacity-0 transition-opacity delay-400 duration-1000 ease-in-out', // Adjusted delay
                            inclusionsInView ? 'opacity-100' : '',
                        )}
                    >
                        {/* ... Inclusions/Exclusions content ... */}
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

                    {/* --- Highlights Section --- */}
                    {/* Sequence 6: White */}
                    <section
                        ref={highlightsRef}
                        className={cn(
                            'w-full bg-white py-16', // Changed background to White
                            'opacity-0 transition-opacity delay-500 duration-1000 ease-in-out', // Adjusted delay
                            highlightsInView ? 'opacity-100' : '',
                        )}
                    >
                        {/* ... Highlights content ... */}
                         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Tour Highlights</h2>
                            <div className="flex flex-wrap justify-center gap-3">
                                {tourData.highlights.map((highlight) => (
                                    <Badge key={highlight} variant="secondary" className="bg-[#f5e7c5] px-4 py-1.5 text-base text-gray-800 shadow-sm hover:bg-[#e6d9b9]"> {/* Changed badge bg */}
                                        {highlight}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* --- Optional: Keep simpler CTA or remove --- */}
                    {/* Sequence 7: Cream */}
                    <section
                        ref={ctaRef}
                        className={cn(
                            'w-full bg-[#f5e7c5] py-16 text-center', // Changed background to Cream
                            'opacity-0 transition-opacity delay-600 duration-1000 ease-in-out', // Adjusted delay
                            ctaInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                            <h2 className="mb-4 text-3xl font-bold text-gray-900">Have More Questions?</h2>
                            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
                                Our travel experts are happy to help with any further details or customization requests for the {tourData.title}.
                            </p>
                            <Button size={'lg'} variant={'default'} asChild>
                                <Link href={route('contact')}>Contact Us</Link>
                            </Button>
                        </div>
                    </section>

                </div>

                {/* --- Footer --- */}
                {/* Sequence 8: Dark Blue */}
                <PublicFooter />
            </div>
        </>
    );
}
