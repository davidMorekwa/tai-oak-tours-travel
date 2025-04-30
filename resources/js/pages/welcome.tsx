// /Users/dave/Code/travel-agency/resources/js/pages/welcome.tsx

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Mail, MapPin, MapPlus, Phone, ShieldCheck, SlidersHorizontal, Sparkles, Users } from 'lucide-react';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PublicNavbar from '@/components/public-navbar'; // Corrected import path

const slidesData = [
    {
        imageUrl: '/storage/image_assets/image1.jpg',
        title: 'Majestic Wildlife Safaris',
        description: "Witness the Big Five and breathtaking landscapes in Kenya's world-renowned parks.",
    },
    {
        imageUrl: '/storage/image_assets/image3.jpg',
        title: 'Discover Paradise Beaches',
        description: 'Relax on pristine white sands and swim in turquoise waters.',
    },
    {
        imageUrl: '/storage/image_assets/pexels-redrum-visuals-5819238.jpg',
        title: 'Explore Ancient Wonders',
        description: 'Step back in time and witness breathtaking historical sites.',
    },
    {
        imageUrl: '/storage/image_assets/Mount_Kenya.jpg',
        title: 'Adventure in the Mountains',
        description: 'Experience stunning landscapes and thrilling outdoor activities.',
    },
];

const destinations = [
    { value: 'maasai-mara', label: 'Maasai Mara National Reserve' },
    { value: 'amboseli', label: 'Amboseli National Park' },
    { value: 'diani-beach', label: 'Diani Beach' },
    { value: 'lake-nakuru', label: 'Lake Nakuru National Park' },
    { value: 'tsavo', label: 'Tsavo East/West National Parks' },
    { value: 'mount-kenya', label: 'Mount Kenya Region' },
];

export default function Welcome() {
    const { props, component } = usePage<SharedData>();
    const { auth } = props;

    const logoUrl = '/storage/image_assets/logo.jpg'; // Corrected path if needed

    // useInView hooks for animations
    const animationOptions = { triggerOnce: true, threshold: 0.1 };
    const { ref: welcomeBlurbRef, inView: welcomeBlurbInView } = useInView(animationOptions);
    const { ref: popularDestinationsRef, inView: popularDestinationsInView } = useInView(animationOptions);
    const { ref: whyChooseUsRef, inView: whyChooseUsInView } = useInView(animationOptions);
    const { ref: featuredPackagesRef, inView: featuredPackagesInView } = useInView(animationOptions);
    const { ref: tripPlannerRef, inView: tripPlannerInView } = useInView(animationOptions);

    // State for Trip Planner
    const [selectedDestination, setSelectedDestination] = useState<string | undefined>();
    const [numberOfPersons, setNumberOfPersons] = useState<number>(1);
    const [checkInDate, setCheckInDate] = useState<Date | undefined>();
    const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();

    const handleTripPlanSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tripData = { destination: selectedDestination, persons: numberOfPersons, checkIn: checkInDate, checkOut: checkOutDate };
        console.log('Trip Planner Data:', tripData);
        alert('Trip details submitted for checking! (Placeholder - Backend needed)');
    };

    return (
        <>
            <Head title="Tai-Oak Tours & Travel - Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            {/* Main container */}
            <div className="flex min-h-screen flex-col items-center bg-[#fff7d6] text-[#1b1b18]">
                {/* --- Header --- */}
                <PublicNavbar />
                {/* --- End Header --- */}

                {/* --- Slider Section --- */}
                <section className="w-full">
                    {/* ... Swiper code remains the same ... */}
                     <Swiper
                        modules={[Autoplay, EffectFade]}
                        spaceBetween={0}
                        slidesPerView={1}
                        effect="fade"
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        className="h-[65vh] w-full md:h-[75vh]"
                    >
                        {slidesData.map(({ imageUrl, title, description }, index) => (
                            <SwiperSlide key={index} className="group relative">
                                <img src={imageUrl} alt={title} className="h-full w-full object-cover" loading={index === 0 ? 'eager' : 'lazy'} />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                    <div className="container max-w-0 overflow-hidden rounded-lg border border-white/20 bg-black/30 p-6 text-center text-white opacity-0 shadow-lg backdrop-blur-sm transition-[max-width,opacity] duration-700 ease-out group-[.swiper-slide-active]:max-w-md group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:delay-200 md:p-8 group-[.swiper-slide-active]:md:max-w-lg lg:p-10 group-[.swiper-slide-active]:lg:max-w-2xl">
                                        <h1 className="container mb-4 translate-y-4 transform text-4xl font-bold opacity-0 drop-shadow-md transition-all duration-700 ease-out group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:delay-[900ms] lg:text-6xl">{title}</h1>
                                        <p className="mb-6 translate-y-4 transform text-lg opacity-0 drop-shadow transition-all duration-700 ease-out group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:delay-[1100ms] lg:text-xl">{description}</p>
                                        <div className="translate-y-4 transform opacity-0 transition-all duration-700 ease-out group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:delay-[1300ms]">
                                            <Button variant={'default'} size={'lg'}>Learn More</Button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
                {/* --- End Slider Section --- */}

                {/* --- Welcome Blurb Section --- */}
                {/* Sequence 1: Dark Blue */}
                <section
                    ref={welcomeBlurbRef}
                    className={cn(
                        'w-full bg-[#152253] py-16 text-white', // Changed background to Dark Blue, added text-white
                        'opacity-0 transition-opacity duration-1000 ease-in-out',
                        welcomeBlurbInView ? 'opacity-100' : '',
                    )}
                >
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl"> {/* Removed text-gray-900 */}
                            Jambo! Welcome to Your Kenyan Adventure
                        </h2>
                        <p className="text-lg text-gray-300"> {/* Changed text color */}
                            Experience the magic of Kenya with Tai-Oak Tours & Travel. From breathtaking wildlife safaris in the Maasai Mara to serene
                            beaches along the coast, our local experts craft personalized journeys filled with authentic moments and unforgettable
                            memories. Let's plan your dream trip!
                        </p>
                    </div>
                </section>
                {/* --- End Welcome Blurb Section --- */}

                {/* --- Popular Destinations Section --- */}
                {/* Sequence 2: White */}
                <section
                    ref={popularDestinationsRef}
                    className={cn(
                        'w-full bg-white py-16', // Keep background White
                        'opacity-0 transition-opacity delay-100 duration-1000 ease-in-out',
                        popularDestinationsInView ? 'opacity-100' : '',
                    )}
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-10 flex flex-col items-center text-center sm:flex-row sm:items-baseline sm:justify-between sm:text-left">
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Popular Destinations</h2>
                            <Button variant={'default'} className="mt-4 shrink-0 sm:mt-0">See All Destinations</Button>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {/* Cards use cream background */}
                            <Card className="flex flex-col overflow-hidden border-none bg-[#f5e7c5] pt-0 shadow-md transition-transform duration-300 ease-in-out hover:z-10 hover:scale-105 hover:shadow-lg">
                                <img src="/storage/image_assets/pexels-pixabay-59989.jpg" className="h-48 w-full object-cover" alt="Amboseli Park" />
                                <CardHeader className="pt-4 pb-2 text-gray-900"><h3 className="text-lg font-semibold">Amboseli Park</h3></CardHeader>
                                <CardDescription className="flex-grow px-6 pb-4 text-sm text-gray-700">See elephants up close...</CardDescription>
                            </Card>
                            {/* ... other 3 cards ... */}
                             <Card className="flex flex-col overflow-hidden border-none bg-[#f5e7c5] pt-0 shadow-md transition-transform duration-300 ease-in-out hover:z-10 hover:scale-105 hover:shadow-lg">
                                <img src="/storage/image_assets/1.jpg" className="h-48 w-full object-cover" alt="Maasai Mara" />
                                <CardHeader className="pt-4 pb-2 text-gray-900"><h3 className="text-lg font-semibold">Maasai Mara</h3></CardHeader>
                                <CardDescription className="flex-grow px-6 pb-4 text-sm text-gray-700">Experience the Great Migration...</CardDescription>
                            </Card>
                            <Card className="flex flex-col overflow-hidden border-none bg-[#f5e7c5] pt-0 shadow-md transition-transform duration-300 ease-in-out hover:z-10 hover:scale-105 hover:shadow-lg">
                                <img src="/storage/image_assets/image3.jpg" className="h-48 w-full object-cover" alt="Diani Beach" />
                                <CardHeader className="pt-4 pb-2 text-gray-900"><h3 className="text-lg font-semibold">Diani Beach</h3></CardHeader>
                                <CardDescription className="flex-grow px-6 pb-4 text-sm text-gray-700">Relax on pristine white sands...</CardDescription>
                            </Card>
                            <Card className="flex flex-col overflow-hidden border-none bg-[#f5e7c5] pt-0 shadow-md transition-transform duration-300 ease-in-out hover:z-10 hover:scale-105 hover:shadow-lg">
                                <img src="/storage/image_assets/Mount_Kenya.jpg" className="h-48 w-full object-cover" alt="Mount Kenya" />
                                <CardHeader className="pt-4 pb-2 text-gray-900"><h3 className="text-lg font-semibold">Mount Kenya</h3></CardHeader>
                                <CardDescription className="flex-grow px-6 pb-4 text-sm text-gray-700">Explore stunning alpine scenery...</CardDescription>
                            </Card>
                        </div>
                    </div>
                </section>
                {/* --- End Popular Destinations Section --- */}

                {/* --- Why Choose Us Section --- */}
                {/* Sequence 3: Cream */}
                <section
                    ref={whyChooseUsRef}
                    className={cn(
                        'w-full bg-[#f5e7c5] py-16', // Keep background Cream
                        'opacity-0 transition-opacity delay-200 duration-1000 ease-in-out',
                        whyChooseUsInView ? 'opacity-100' : '',
                    )}
                >
                    <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Why Travel With Tai-Oak?</h2>
                        <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-700">
                            Your dream Kenyan adventure deserves more than just a booking service... Discover the difference local expertise makes.
                        </p>
                        <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-4">
                            {/* Benefit Icons use dark blue background */}
                            {/* ... benefit blocks remain the same ... */}
                             <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#152253] text-white"><MapPin className="h-6 w-6" /></div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">Deep Local Knowledge</h3>
                                <p className="text-gray-600">Born and raised in Kenya, our team offers unparalleled insights...</p>
                            </div>
                            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#152253] text-white"><SlidersHorizontal className="h-6 w-6" /></div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">Tailor-Made Adventures</h3>
                                <p className="text-gray-600">Forget cookie-cutter tours. We listen to your interests...</p>
                            </div>
                            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#152253] text-white"><ShieldCheck className="h-6 w-6" /></div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">Travel with Confidence</h3>
                                <p className="text-gray-600">Your safety and comfort are our top priorities...</p>
                            </div>
                            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#152253] text-white"><Users className="h-6 w-6" /></div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">Genuine Cultural Connections</h3>
                                <p className="text-gray-600">We believe in responsible tourism that benefits local communities...</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* --- End Why Choose Us Section --- */}

                {/* --- Featured Packages Section --- */}
                {/* Sequence 4: White */}
                <section
                    ref={featuredPackagesRef}
                    className={cn(
                        'w-full bg-white py-16', // Changed background to White
                        'opacity-0 transition-opacity delay-300 duration-1000 ease-in-out',
                        featuredPackagesInView ? 'opacity-100' : '',
                    )}
                >
                    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 md:px-10">
                        <div className="mb-10 text-center">
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Featured Packages</h2> {/* Changed text color */}
                            <p className="mt-2 text-lg text-gray-700">Start your adventure with our handpicked popular tours.</p> {/* Changed text color */}
                        </div>
                        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-stretch md:justify-center">
                            {/* Cards use cream background */}
                            <Card className="flex w-full max-w-md flex-col overflow-hidden border-none bg-[#f5e7c5] text-gray-900 shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl md:w-1/2">
                                {/* ... card 1 content ... */}
                                 <CardHeader className="pt-6 pb-2"><CardTitle className="text-xl font-semibold">Amboseli Elephant Spectacle</CardTitle></CardHeader>
                                <CardDescription className="flex-grow px-6 pb-4 text-base text-gray-700">
                                    <p className="mb-3 font-medium text-sm text-gray-600">3 Days / 2 Nights | Kilimanjaro Views | Elephant Herds</p>
                                    <p>Witness vast herds of elephants roam freely against the breathtaking backdrop of Africa's highest peak...</p>
                                </CardDescription>
                                <CardFooter className="mt-auto flex flex-col items-start px-6 pt-2 pb-6">
                                    <p className="mb-3 text-lg font-semibold text-[#007562]">Starting From $650 pp</p>
                                    <Button variant={'default'} className="w-full sm:w-auto">View Itinerary</Button>
                                </CardFooter>
                            </Card>
                            <Card className="flex w-full max-w-md flex-col overflow-hidden border-none bg-[#f5e7c5] text-gray-900 shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl md:w-1/2">
                                {/* ... card 2 content ... */}
                                 <CardHeader className="pt-6 pb-2"><CardTitle className="text-xl font-semibold">Diani Beach Bliss</CardTitle></CardHeader>
                                <CardDescription className="flex-grow px-6 pb-4 text-base text-gray-700">
                                    <p className="mb-3 font-medium text-sm text-gray-600">5 Days / 4 Nights | White Sands | Watersports | Relaxation</p>
                                    <p>Unwind on the award-winning shores of Diani. Perfect for post-safari relaxation or a standalone beach getaway.</p>
                                </CardDescription>
                                <CardFooter className="mt-auto flex flex-col items-start px-6 pt-2 pb-6">
                                    <p className="mb-3 text-lg font-semibold text-[#007562]">Starting From $500 pp</p>
                                    <Button variant={'default'} className="w-full sm:w-auto">Explore Package</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
                {/* --- End Featured Packages Section --- */}

                {/* --- Quick Trip Planner Section --- */}
                {/* Sequence 5: Cream */}
                <section
                    ref={tripPlannerRef}
                    className={cn(
                        'flex w-full flex-col items-center bg-[#f5e7c5] py-16', // Changed background to Cream
                        'opacity-0 transition-opacity delay-400 duration-1000 ease-in-out',
                        tripPlannerInView ? 'opacity-100' : '',
                    )}
                >
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Plan Your Dream Kenyan Adventure</h2>
                        <p className="mt-2 text-lg text-gray-600">Tell us your preferences, and let's start crafting your perfect trip!</p>
                    </div>
                    {/* Form uses white background */}
                    <form onSubmit={handleTripPlanSubmit} className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-md lg:p-10">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {/* ... form inputs ... */}
                             <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="destination" className="font-semibold">Destination</Label>
                                <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                                    <SelectTrigger id="destination"><SelectValue placeholder="Select Destination" /></SelectTrigger>
                                    <SelectContent>{destinations.map((dest) => (<SelectItem key={dest.value} value={dest.value}>{dest.label}</SelectItem>))}</SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="persons" className="font-semibold">Number of Persons</Label>
                                <Input id="persons" type="number" placeholder="e.g., 2" min="1" value={numberOfPersons} onChange={(e) => setNumberOfPersons(parseInt(e.target.value, 10) || 1)} required />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="checkin" className="font-semibold">Check-in Date</Label>
                                {/* Date pickers use cream background */}
                                <DatePicker date={checkInDate} setDate={setCheckInDate} buttonId="checkin" className="bg-[#f5e7c5] hover:bg-[#e6d9b9]" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="checkout" className="font-semibold">Check-out Date</Label>
                                {/* Date pickers use cream background */}
                                <DatePicker date={checkOutDate} setDate={setCheckOutDate} buttonId="checkout" className="bg-[#f5e7c5] hover:bg-[#e6d9b9]" />
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <Button type="submit" variant={'default'} size={'lg'} className="w-full px-8 sm:w-auto">Check Availability</Button>
                        </div>
                    </form>
                </section>
                {/* --- End Quick Trip Planner Section --- */}

                {/* --- Footer --- */}
                {/* Sequence 6: Dark Blue */}
                <footer className="mt-auto w-full bg-[#152253] py-10 text-sm text-[#9a9a9a]">
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
