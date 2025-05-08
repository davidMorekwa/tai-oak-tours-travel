// /Users/dave/Code/travel-agency/resources/js/pages/welcome.tsx

import PublicFooter from '@/components/public-footer';
import PublicNavbar from '@/components/public-navbar'; // Corrected import path
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { TourPackage, type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react'; // Corrected import path
import { Briefcase, DollarSign, Gem, Heart, Smile, Star } from 'lucide-react';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const heroTitle = 'Adventure Awaits';
const heroDescription = "Explore Kenya's breathtaking landscapes, vibrant cultures, and unforgettable wildlife encounters.";

const slidesData = [
    {
        // imageUrl: '/storage/image_assets/image1.jpg',
        imageUrl: 'storage/assets/zebra-and-gazelle-landscape.jpeg',
        title: heroTitle,
        description: heroDescription,
    },
    {
        imageUrl: '/storage/image_assets/image3.jpg',
        title: 'Discover Paradise Beaches',
        description: 'Relax on pristine white sands and swim in turquoise waters.',
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

interface PopularDestinationCardData {
    name: string;
    imageSrc: string;
    description: string;
    filterValue: string; // Used for the route query parameter
}

const popularDestinationCardsData: PopularDestinationCardData[] = [
    {
        name: 'Amboseli National Park Safari',
        imageSrc: '/storage/image_assets/pexels-pixabay-59989.jpg',
        description: "Witness majestic elephant herds against the iconic backdrop of Mount Kilimanjaro. A photographer's dream.",
        filterValue: 'amboseli',
    },
    {
        name: 'Family Adventures',
        imageSrc: 'storage/assets/family-safari-landscape.jpeg', // Replace with actual image
        description: 'Create lifelong memories with tours designed for all ages. Safe, engaging, and fun-filled experiences.',
        filterValue: 'family',
    },
    {
        name: 'Maasai Mara Safari',
        imageSrc: '/storage/image_assets/1.jpg',
        description: 'Home to the Great Migration, vast plains teeming with wildlife, and rich Maasai culture. An unparalleled safari experience.',
        filterValue: 'maasai-mara',
    },
    {
        name: 'Diani Beach',
        imageSrc: '/storage/image_assets/image3.jpg',
        description: 'Unwind on award-winning white sandy beaches, enjoy turquoise waters, and indulge in thrilling watersports.',
        filterValue: 'diani-beach',
    },
    {
        name: 'Mt. Kilimanjaro Hiking',
        imageSrc: 'storage/assets/kilimanjaro-landscape.jpeg', // Replace with actual image
        description: "Conquer Africa's highest peak. Epic treks offering breathtaking views and a life-changing achievement.",
        filterValue: 'kilimanjaro hiking',
    },
    {
        name: 'Mount Kenya Trek',
        imageSrc: '/storage/image_assets/Mount_Kenya.jpg',
        description: "Challenge yourself with a trek to Africa's second-highest peak, surrounded by unique alpine flora and breathtaking views.",
        filterValue: 'mount-kenya',
    },
    {
        name: 'Honeymoon Packages',
        imageSrc: 'storage/assets/honeymoon-safari.jpg', // Replace with actual image
        description: 'Celebrate your love with idyllic escapes. Luxurious lodges, private safaris, and unforgettable moments.',
        filterValue: 'honeymoon',
    },
    {
        name: 'Photography Safaris',
        imageSrc: 'storage/assets/mama-elephant-with-kids-landscape.jpg', // Replace with actual image
        description: 'Capture the perfect shot. Guided tours focusing on wildlife and landscape photography opportunities.',
        filterValue: 'photography',
    },
    {
        name: 'Cultural Immersions',
        imageSrc: 'storage/assets/culture-safari-landscape.jpg', // Replace with actual image
        description: 'Connect with local traditions. Authentic experiences visiting vibrant communities and learning ancient customs.',
        filterValue: 'cultural',
    },
];

export default function Welcome() {
    const { props, component } = usePage<SharedData>();
    const { auth } = props;

    const featuredPackages = props.featured_packages as TourPackage[];
    console.log('Featured Packages:', featuredPackages);

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
                                        <h1 className="container mb-4 translate-y-4 transform text-4xl font-bold opacity-0 drop-shadow-md transition-all duration-700 ease-out group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:delay-[900ms] lg:text-6xl">
                                            {title}
                                        </h1>
                                        <p className="mb-6 translate-y-4 transform text-lg opacity-0 drop-shadow transition-all duration-700 ease-out group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:delay-[1100ms] lg:text-xl">
                                            {description}
                                        </p>
                                        <div className="translate-y-4 transform opacity-0 transition-all duration-700 ease-out group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:delay-[1300ms]">
                                            <Button variant={'default'} size={'lg'}>
                                                Learn More
                                            </Button>
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
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                            {' '}
                            {/* Removed text-gray-900 */}
                            Jambo! Welcome to your Africa Adventure
                        </h2>
                        <p className="text-lg text-gray-300">
                            {' '}
                            {/* Changed text color */}
                            Experience the magic of Africa with Tai-Oak Tours & Travel. From breathtaking wildlife safaris in the Maasai Mara to serene
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
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Popular Packages</h2>
                            <Link href={route('tours')}>
                                <Button variant={'default'} className="mt-4 shrink-0 hover:cursor-pointer sm:mt-0">
                                    See All Packages
                                </Button>
                            </Link>
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]} // Add Navigation and Pagination modules
                            spaceBetween={24} // Space between slides
                            slidesPerView={1} // Default for smallest screens
                            navigation // Enable navigation arrows
                            autoplay={{ delay: 3000, disableOnInteraction: false }} // Added autoplay
                            breakpoints={{
                                // when window width is >= 640px
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                                // when window width is >= 1024px
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 24,
                                },
                            }}
                            className="pb-10 px-10 rounded-lg" // Add padding-bottom for pagination dots if they overlap
                        >
                            {popularDestinationCardsData.map((destination) => (
                                <SwiperSlide key={destination.filterValue} className="h-auto group">
                                    {' '}
                                    {/* Ensure slides adapt to content height */}
                                    <Link
                                        href={route('tours', { search: destination.filterValue })}
                                        className="block h-full" // Make the link take up the card space and ensure full height
                                    >
                                        <Card className="flex h-full flex-col overflow-hidden border-none bg-[#f5e7c5] pt-0 shadow-md transition-transform duration-300 ease-in-out group-[.swiper-slide-active]:scale-105 group-[&:not(.swiper-slide-active)]:hover:z-10 group-[&:not(.swiper-slide-active)]:hover:scale-105 group-[&:not(.swiper-slide-active)]:hover:shadow-lg">
                                            <img
                                                src={destination.imageSrc}
                                                className="h-48 w-full object-cover"
                                                alt={destination.name}
                                                loading="lazy"
                                            />
                                            <CardHeader className="pt-4 pb-2 text-gray-900">
                                                <h3 className="text-lg font-semibold">{destination.name}</h3>
                                            </CardHeader>
                                            <CardDescription className="flex-grow px-6 pb-4 text-sm text-gray-700">
                                                {destination.description}
                                            </CardDescription>
                                        </Card>
                                    </Link>
                                </SwiperSlide>  
                            ))}
                        </Swiper>
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
                            Your dream African adventure deserves more than just a booking service... Discover the difference local expertise makes.
                        </p>
                        <div className="grid grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
                            {/* Benefit Icons use dark blue background */}
                            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#152253] text-white">
                                    <Briefcase className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">Professionalism</h3>
                                <p className="text-gray-600">
                                    Our commitment to excellence ensures every detail of your journey is handled with utmost care and expertise.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#152253] text-white">
                                    <Star className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">Quality Services</h3>
                                <p className="text-gray-600">
                                    We pride ourselves on delivering top-tier services, from luxury accommodations to seamless travel arrangements.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#152253] text-white">
                                    <DollarSign className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">Affordability</h3>
                                <p className="text-gray-600">
                                    Experience the best of Africa without breaking the bank. We offer competitive pricing for exceptional adventures.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#152253] text-white">
                                    <Gem className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">Value For Money</h3>
                                <p className="text-gray-600">
                                    We believe in providing outstanding experiences that offer true value, creating memories that last a lifetime.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#152253] text-white">
                                    <Smile className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">Friendly Guides and Team</h3>
                                <p className="text-gray-600">
                                    Our passionate and knowledgeable local guides are dedicated to making your trip engaging and enjoyable.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#152253] text-white">
                                    <Heart className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">Customer Satisfaction</h3>
                                <p className="text-gray-600">
                                    Your happiness is our priority. We strive to exceed your expectations and ensure a delightful travel experience.
                                </p>
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
                            <p className="mt-2 text-lg text-gray-700">Start your adventure with our handpicked popular tours.</p>{' '}
                            {/* Changed text color */}
                        </div>
                        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-stretch md:justify-center">
                            {/* Cards use cream background */}
                            {featuredPackages.map((tour: TourPackage, index: number) => (
                                <Card className="flex w-full max-w-md flex-col overflow-hidden border-none bg-[#f5e7c5] text-gray-900 shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl md:w-1/2">
                                    {/* ... card 1 content ... */}

                                    <CardHeader className="pt-6 pb-2">
                                        <CardTitle className="text-xl font-semibold">{tour.title}</CardTitle>
                                    </CardHeader>
                                    <CardDescription className="flex-grow px-6 pb-4 text-base text-gray-700">
                                        <p className="mb-3 text-sm font-medium text-gray-600">
                                            {tour.duration_days} Days |{' '}
                                            {
                                                tour.highlights
                                                    ? tour.highlights
                                                          .split(',  ') // Assuming this specific delimiter is correct for your data
                                                          .slice(0, 3)
                                                          .map((highlight) => highlight.trim())
                                                          .join('| ')
                                                    : 'Key attractions' // Fallback if highlights are not available
                                            }
                                        </p>
                                        <p className="line-clamp-4 text-sm">{tour.description}</p>
                                    </CardDescription>
                                    <CardFooter className="mt-auto flex flex-col items-start px-6 pt-2 pb-6">
                                        <p className="mb-3 text-lg font-semibold text-[#007562]">
                                            Starting From ${tour.low_season_price.toLocaleString()}
                                        </p>
                                        <Link href={route('details', tour.id)}>
                                            <Button variant={'default'} className="w-full sm:w-auto">
                                                View Itinerary
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            ))}
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
                                <Label htmlFor="destination" className="font-semibold">
                                    Destination
                                </Label>
                                <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                                    <SelectTrigger id="destination">
                                        <SelectValue placeholder="Select Destination" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {destinations.map((dest) => (
                                            <SelectItem key={dest.value} value={dest.value}>
                                                {dest.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="persons" className="font-semibold">
                                    Number of Persons
                                </Label>
                                <Input
                                    id="persons"
                                    type="number"
                                    placeholder="e.g., 2"
                                    min="1"
                                    value={numberOfPersons}
                                    onChange={(e) => setNumberOfPersons(parseInt(e.target.value, 10) || 1)}
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="checkin" className="font-semibold">
                                    Check-in Date
                                </Label>
                                {/* Date pickers use cream background */}
                                <DatePicker
                                    date={checkInDate}
                                    setDate={setCheckInDate}
                                    buttonId="checkin"
                                    className="bg-[#f5e7c5] hover:bg-[#e6d9b9]"
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="checkout" className="font-semibold">
                                    Check-out Date
                                </Label>
                                {/* Date pickers use cream background */}
                                <DatePicker
                                    date={checkOutDate}
                                    setDate={setCheckOutDate}
                                    buttonId="checkout"
                                    className="bg-[#f5e7c5] hover:bg-[#e6d9b9]"
                                />
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <Button type="submit" variant={'default'} size={'lg'} className="w-full px-8 sm:w-auto">
                                Check Availability
                            </Button>
                        </div>
                    </form>
                </section>
                {/* --- End Quick Trip Planner Section --- */}

                {/* --- Footer --- */}
                {/* Sequence 6: Dark Blue */}
                <PublicFooter />
                {/* --- End Footer --- */}
            </div>
        </>
    );
}
