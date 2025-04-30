import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { NavItem, type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, Mail, MapPlus, Phone } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slidesData = [
    {
        imageUrl: '/storage/image_assets/image1.jpg', // Replace with your actual image
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
    // Add more objects here for additional slides
];
const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen,
    },
];
export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Tai-Oak Tours & Travel">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#fff7d6] text-[#1b1b18] lg:justify-center">
                <div className="flex w-full flex-col opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    {/* Navigation Bar */}
                    <header className="absolute z-2 mt-6 mb-6 flex w-full max-w-[335px] flex-row items-center justify-center text-sm not-has-[nav]:hidden lg:max-w-full">
                        <nav className="flex w-1/2 items-center justify-around gap-4 rounded-4xl border bg-[#152238]">
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm px-5 py-2 text-sm leading-normal text-[#EDEDEC] hover:cursor-pointer"
                            >
                                Home
                            </Link>
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm px-5 py-1.5 text-sm leading-normal text-[#EDEDEC] hover:cursor-pointer"
                            >
                                About Us
                            </Link>
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm px-5 py-1.5 text-sm leading-normal text-[#EDEDEC] hover:cursor-pointer"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm px-5 py-1.5 text-sm leading-normal text-[#EDEDEC] hover:cursor-pointer"
                            >
                                Hotels
                            </Link>
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm px-5 py-1.5 text-sm leading-normal text-[#EDEDEC] hover:cursor-pointer"
                            >
                                Destinations
                            </Link>
                        </nav>
                    </header>
                    {/* Hero Section */}
                    <div className="w-full">
                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            spaceBetween={0}
                            slidesPerView={1}
                            effect="fade" // Changed 'slide   ' to 'fade' (or use 'slide')
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                            loop={true}
                            className="h-[600px] w-full"
                        >
                            {/* --- MAP OVER slidesData --- */}
                            {slidesData.map(({ imageUrl, title, description }, index) => (
                                // Removed console.log
                                <SwiperSlide key={index} className="group relative">
                                    {' '}
                                    {/* Removed w-full */}
                                    <img
                                        src={imageUrl} // Use imageUrl from slide data
                                        alt={title} // Use title for alt text
                                        className="h-full w-full object-cover"
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="/* Base Styles */ /* --- Animation --- */ /* Initial State */ /* Transition */ /* Container animation duration */ /* Active State */ /* Final width */ /* Start animation slightly earlier */ container max-w-0 overflow-hidden rounded-lg border border-white/10 bg-black/10 p-6 text-center text-white opacity-0 shadow-lg backdrop-blur-sm transition-[max-width,opacity] duration-700 ease-out group-[.swiper-slide-active]:max-w-md group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:delay-200 md:p-8 group-[.swiper-slide-active]:md:max-w-lg lg:p-10 group-[.swiper-slide-active]:lg:max-w-2xl">
                                            {/* --- Animated Title (Increased Delay) --- */}
                                            <h1 className="/* Initial State + Transition */ /* Start AFTER finishes (200+700) */ container mb-4 translate-y-4 transform text-4xl font-bold opacity-0 drop-shadow-md transition-all duration-700 ease-out group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:delay-[900ms] lg:text-6xl">
                                                {title}
                                            </h1>
                                            {/* --- Animated Description (Increased Delay) --- */}
                                            <p className="/* Initial State + Transition */ /* Start after title starts */ mb-6 translate-y-4 transform text-lg opacity-0 drop-shadow transition-all duration-700 ease-out group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:delay-[1100ms] lg:text-xl">
                                                {description}
                                            </p>
                                            {/* --- Animated Button Wrapper (Increased Delay) --- */}
                                            <div className="/* Initial State + Transition */ /* Start after description starts */ translate-y-4 transform opacity-0 transition-all duration-700 ease-out group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:delay-[1300ms]">
                                                <Button variant={'default'} size={'lg'}>
                                                    Learn More
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            {/* --- END MAP --- */}
                        </Swiper>
                    </div>
                    {/* Popular Destination */}
                    <div className="border-b border-b-gray-300 py-5">
                        <div className="flex flex-row items-center justify-between px-10 py-5">
                            <h1>Popular Destinations</h1>
                            <Button variant={'default'}>See More</Button>
                        </div>
                        <div className="flex flex-row items-center justify-evenly px-7">
                            <Card className="w-1/5 border-none bg-[#f5e7c5] pt-0">
                                <img src="/storage/image_assets/pexels-pixabay-59989.jpg" className="rounded-t-lg" />
                                <CardHeader className="text-gray-900">Amboseli Park</CardHeader>
                                <CardDescription>See elephants up close at the Amboseli national park</CardDescription>
                            </Card>
                            <Card className="w-1/5 border-none bg-[#f5e7c5] pt-0">
                                <img src="/storage/image_assets/pexels-pixabay-59989.jpg" className="rounded-t-lg" />
                                <CardHeader className="text-gray-900">Amboseli Park</CardHeader>
                                <CardDescription>See elephants up close at the Amboseli national park</CardDescription>
                            </Card>
                            <Card className="w-1/5 border-none bg-[#f5e7c5] pt-0">
                                <img src="/storage/image_assets/pexels-pixabay-59989.jpg" className="rounded-t-lg" />
                                <CardHeader className="text-gray-900">Amboseli Park</CardHeader>
                                <CardDescription>See elephants up close at the Amboseli national park</CardDescription>
                            </Card>

                            <Card className="w-1/5 border-none bg-[#f5e7c5] pt-0">
                                <img src="/storage/image_assets/pexels-pixabay-59989.jpg" className="rounded-t-lg" />
                                <CardHeader className="text-gray-900">Amboseli Park</CardHeader>
                                <CardDescription>See elephants up close at the Amboseli national park</CardDescription>
                            </Card>
                        </div>
                    </div>
                    {/* Why Choose Us */}
                    <div className="border-b border-b-gray-300 py-5">
                        <div>
                            <p>Why Travel With Us</p>
                        </div>
                        <div></div>
                    </div>
                    {/* Featured Packages  */}
                    <div className="flex w-full flex-row bg-[#152253]">
                        <div className="w-1/4">
                            <img src="/storage/image_assets/wildlife2.avif" alt="" className="h-full" />
                        </div>

                        <div className="flex flex-col items-center justify-around">
                            <div className="px-10 py-5">
                                <p className="text-white">Featured Packages</p>
                            </div>
                            <div className="flex flex-row items-center justify-around">
                                <Card className="mb-5 w-1/4 border-none bg-[#f5e7c5] px-5 py-3">
                                    <CardTitle className="text-gray-900">Amboseli Safari Adventure</CardTitle>
                                    <CardDescription>3 Days | Unbeatable Kilimanjaro Views | Large Elephant Herds</CardDescription>
                                    <CardDescription>
                                        Get up close with gentle giants against the iconic backdrop of Mount Kilimanjaro in Amboseli National Park.
                                    </CardDescription>
                                    <CardFooter className="text-[#007562]">Starting From $4,000</CardFooter>
                                    <Button variant={'default'} className="m-auto w-1/2">
                                        Learn More
                                    </Button>
                                </Card>
                                <Card className="mb-5 w-1/4 border-none bg-[#f5e7c5] px-5 py-3">
                                    <CardTitle className="text-gray-900">Diani Beach Relaxation Getaway</CardTitle>
                                    <CardDescription>7 Days | Safari in Tsavo & Amboseli + Beach time in Watamu</CardDescription>
                                    <CardDescription>
                                        The perfect blend of thrilling wildlife encounters and relaxing white-sand beaches on Kenya's beautiful coast.
                                    </CardDescription>
                                    <CardFooter className="text-[#007562]">Starting From $2,500</CardFooter>
                                    <Button variant={'default'} className="m-auto w-1/2">
                                        Learn More
                                    </Button>
                                </Card>
                            </div>
                        </div>
                    </div>
                    {/* Enquiry Submission */}
                    <div className="flex flex-col items-center border-b border-b-gray-300 py-5">
                        <div className="px-10 py-5">
                            <p>Submit Enquiry</p>
                        </div>
                        <form className="flex w-3/4 flex-col items-center rounded-lg p-8 shadow-md">
                            <div className="mb-5 flex w-full flex-row items-center justify-around">
                                <Input className="w-1/3" placeholder="Full Name" />
                                <Input className="w-1/3" placeholder="email address" />
                            </div>
                            <div className="mb-3 flex w-full flex-row items-center justify-around">
                                <Input className="w-1/3" placeholder="phone number" />
                                <Input className="w-1/3" placeholder="website" />
                            </div>
                            <div className="mb-3 flex w-full flex-row items-center justify-around">
                                <textarea rows={5} cols={80} className="border p-1" placeholder="message here...."></textarea>
                            </div>
                            <Button variant={'default'} className="my-5 w-1/4">
                                Submit
                            </Button>
                        </form>
                    </div>
                    {/* Footer */}
                    <footer className="p-x5 flex w-full flex-row items-center justify-around bg-[#152253] py-10">
                        <div className="w-1/4">{/* Companny info/description */}</div>
                        <div className="flex w-3/4 flex-row justify-between border border-red-900">
                            <div className="flex w-1/2 flex-col items-start">
                                <p className="text-white">Company</p>
                                <Link className="text-[#9a9a9a]" href="">
                                    Home
                                </Link>
                                <Link className="text-[#9a9a9a]" href="">
                                    About Us
                                </Link>{' '}
                                {/* TODO: Add Link to About Us Page*/}
                                <Link className="text-[#9a9a9a]" href="">
                                    Contact Us
                                </Link>{' '}
                                {/* TODO: Add Link to Contact Us Page*/}
                                <Link className="text-[#9a9a9a]" href="">
                                    Careers
                                </Link>{' '}
                                {/* TODO: Add Link to Careers Page*/}
                            </div>
                            <div className="flex w-1/2 flex-col">
                                <div className="flex flex-row items-center justify-evenly">
                                    <div className="flex flex-col items-start">
                                        <p className="text-white">Service</p>
                                        <Link className="text-[#9a9a9a]" href="">
                                            Tour Guide
                                        </Link>
                                        <Link className="text-[#9a9a9a]" href="">
                                            Tour Booking
                                        </Link>{' '}
                                        <Link className="text-[#9a9a9a]" href="">
                                            Rental Services
                                        </Link>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="text-white">Address</p>
                                        <div className="flex flex-row">
                                            <MapPlus color="#007562" strokeWidth={1} />
                                            <p className="text-sm text-[#9a9a9a]">Address</p>
                                        </div>
                                        <div className="flex flex-row">
                                            <Phone color="#007562" strokeWidth={1} />
                                            <p className="text-sm text-[#9a9a9a]">Address</p>
                                        </div>
                                        <div className="flex flex-row">
                                            <Mail color="#007562" strokeWidth={1} />
                                            <p className="text-sm text-[#9a9a9a]">Address</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <Input className="" placeholder="Subscribe to newsletter" />
                                    <Button variant={'default'}>Subscribe</Button>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
