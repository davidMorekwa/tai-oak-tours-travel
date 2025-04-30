// /Users/dave/Code/travel-agency/resources/js/pages/AboutUs.tsx

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Head, Link, usePage } from '@inertiajs/react';
import { BookOpen, Heart, Mail, MapPlus, Phone, ShieldCheck, Sparkles, Target, Users } from 'lucide-react';
// 1. Import useInView and cn
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { SharedData } from '@/types';
import PublicNavbar from '@/components/public-navbar';

// --- Placeholder Team Data ---
const teamMembers = [
    {
        name: 'Jomo Kenyatta', // Replace with actual names
        title: 'Founder & Lead Guide',
        bio: "With over 15 years exploring Kenya's wild places, Jomo's passion is sharing authentic safari experiences and hidden gems.",
        imageUrl: '/storage/image_assets/team_member_1.jpg', // Replace with actual image paths
    },
    {
        name: 'Asha Nabwire',
        title: 'Operations Manager',
        bio: 'Asha ensures every detail of your trip runs smoothly, from seamless bookings to coordinating logistics on the ground.',
        imageUrl: '/storage/image_assets/team_member_2.jpg', // Replace with actual image paths
    },
    {
        name: 'David Kimani',
        title: 'Safari Specialist & Cultural Liaison',
        bio: 'David combines his deep knowledge of wildlife with a love for connecting travelers with local communities and traditions.',
        imageUrl: '/storage/image_assets/team_member_3.jpg', // Replace with actual image paths
    },
    // Add more team members as needed
];
// --- End Placeholder Team Data ---

export default function AboutUs() {
    // 2. Setup useInView hooks for each section with staggering delays

    const { props, component } = usePage<SharedData>();
    const logoUrl = '/storage/image_assets/logo.jpg';

    
    const animationOptions = { triggerOnce: true, threshold: 0.1 };
    const { ref: heroRef, inView: heroInView } = useInView(animationOptions);
    const { ref: storyRef, inView: storyInView } = useInView(animationOptions);
    const { ref: teamRef, inView: teamInView } = useInView(animationOptions);
    const { ref: missionVisionRef, inView: missionVisionInView } = useInView(animationOptions);
    const { ref: valuesRef, inView: valuesInView } = useInView(animationOptions);
    const { ref: ctaRef, inView: ctaInView } = useInView(animationOptions);

    return (
        <>
            <Head title="About Tai-Oak Tours & Travel" />
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
                        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Discover Kenya With Passionate Locals</h1>
                        <p className="mx-auto max-w-3xl text-lg text-gray-300">
                            Welcome to Tai-Oak Tours & Travel, your trusted partner for authentic and unforgettable adventures across the heart of
                            Kenya. We're more than just a travel agency; we're storytellers, explorers, and proud Kenyans eager to share the magic of
                            our homeland with you.
                        </p>
                    </section>

                    {/* Our Story Section - ANIMATED */}
                    <section
                        ref={storyRef}
                        className={cn(
                            'mb-8 rounded-lg bg-white p-6 shadow-md md:p-8',
                            'opacity-0 transition-opacity delay-100 duration-1000 ease-in-out', // Added delay
                            storyInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="grid gap-8 md:grid-cols-2 md:items-center">
                            <div>
                                <h2 className="mb-4 flex items-center text-3xl font-bold text-gray-900">
                                    <BookOpen className="mr-3 h-7 w-7 text-[#007562]" />
                                    Our Story
                                </h2>
                                <p className="mb-4 text-gray-700">
                                    Founded by lifelong friends with a shared passion for Kenya's incredible landscapes and diverse cultures, Tai-Oak
                                    Tours & Travel was born from a desire to offer more than just standard tours. We wanted to create genuine
                                    connections, showcase hidden gems, and provide experiences that leave lasting memories.
                                </p>
                                <p className="text-gray-700">
                                    From humble beginnings exploring our local surroundings, we've grown into a dedicated team committed to
                                    sustainable tourism and delivering exceptional service, ensuring every traveler experiences the true spirit of
                                    Kenya.
                                </p>
                            </div>
                            <div className="mt-6 md:mt-0">
                                <img
                                    src="/storage/image_assets/pexels-zhenyu-peng-2150336263-31279791.jpg"
                                    alt="Tai-Oak Team or Kenyan Landscape"
                                    className="h-auto w-full rounded-lg object-cover shadow-md"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Meet the Team Section - ANIMATED */}
                    <section
                        ref={teamRef}
                        className={cn(
                            'mb-8 rounded-lg bg-[#f5e7c5] p-6 shadow-md md:p-8',
                            'opacity-0 transition-opacity delay-200 duration-1000 ease-in-out', // Added delay
                            teamInView ? 'opacity-100' : '',
                        )}
                    >
                        <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">Meet Our Passionate Team</h2>
                        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-700">
                            The heart of Tai-Oak lies in our dedicated team of local experts who bring your Kenyan adventure to life.
                        </p>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                                >
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        className="mb-4 h-32 w-32 rounded-full object-cover ring-4 ring-[#007562]/50"
                                    />
                                    <h3 className="mb-1 text-xl font-semibold text-gray-900">{member.name}</h3>
                                    <p className="mb-3 text-sm font-medium text-[#007562]">{member.title}</p>
                                    <p className="text-sm text-gray-600">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Mission & Vision Section - ANIMATED */}
                    <section
                        ref={missionVisionRef}
                        className={cn(
                            'mb-8 grid gap-8 rounded-lg bg-white p-6 shadow-md md:grid-cols-2 md:p-8', // Changed bg back
                            'opacity-0 transition-opacity delay-300 duration-1000 ease-in-out', // Added delay
                            missionVisionInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="text-center md:text-left">
                            <h3 className="mb-3 flex items-center justify-center text-2xl font-semibold text-gray-900 md:justify-start">
                                <Target className="mr-2 h-6 w-6 text-[#152253]" />
                                Our Mission
                            </h3>
                            <p className="text-gray-700">
                                To craft personalized, authentic, and sustainable travel experiences in Kenya that connect our guests with the beauty
                                of our nature, the richness of our culture, and the warmth of our people.
                            </p>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="mb-3 flex items-center justify-center text-2xl font-semibold text-gray-900 md:justify-start">
                                <Sparkles className="mr-2 h-6 w-6 text-[#152253]" />
                                Our Vision
                            </h3>
                            <p className="text-gray-700">
                                To be the leading and most trusted tour operator in Kenya, renowned for exceptional service, local expertise, and a
                                commitment to responsible tourism that benefits both our clients and communities.
                            </p>
                        </div>
                    </section>

                    {/* Our Values Section - ANIMATED */}
                    <section
                        ref={valuesRef}
                        className={cn(
                            'mb-8 rounded-lg bg-[#f5e7c5] p-6 shadow-md md:p-8', // Changed bg back
                            'opacity-0 transition-opacity delay-400 duration-1000 ease-in-out', // Added delay
                            valuesInView ? 'opacity-100' : '',
                        )}
                    >
                        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Our Core Values</h2>
                        <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-4">
                            {/* Value 1: Authenticity */}
                            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#152253] text-white">
                                    <Heart className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">Authenticity</h3>
                                <p className="text-gray-600">Offering genuine experiences that reflect the true culture and nature of Kenya.</p>
                            </div>
                            {/* Value 2: Responsibility */}
                            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#152253] text-white">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">Responsibility</h3>
                                <p className="text-gray-600">
                                    Committing to sustainable practices that protect our environment and support local communities.
                                </p>
                            </div>
                            {/* Value 3: Passion */}
                            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#152253] text-white">
                                    <Sparkles className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">Passion</h3>
                                <p className="text-gray-600">Sharing our love for Kenya with enthusiasm, ensuring every journey is special.</p>
                            </div>
                            {/* Value 4: Excellence */}
                            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#152253] text-white">
                                    <Users className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">Client Focus</h3>
                                <p className="text-gray-600">
                                    Prioritizing our clients' needs and satisfaction through exceptional service and attention to detail.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action Section - ANIMATED */}
                    <section
                        ref={ctaRef}
                        className={cn(
                            'mb-8 rounded-lg bg-[#152253] p-8 text-center text-white shadow-lg',
                            'opacity-0 transition-opacity delay-500 duration-1000 ease-in-out', // Added delay
                            ctaInView ? 'opacity-100' : '',
                        )}
                    >
                        <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Kenyan Adventure?</h2>
                        <p className="mx-auto mb-6 max-w-2xl text-gray-300">
                            Let our local experts craft the perfect itinerary for you. Explore our packages or get in touch to discuss your dream
                            trip.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Link href="#">
                                <Button variant={'default'} size={'lg'} className="w-full sm:w-auto">
                                    View Our Packages
                                </Button>
                            </Link>
                            <Link href="#">
                                <Button variant={'secondary'} size={'lg'} className="w-full bg-white text-[#152253] hover:bg-gray-200 sm:w-auto">
                                    Contact Us Today
                                </Button>
                            </Link>
                        </div>
                    </section>
                </div>{' '}
                {/* End content wrapper */}
                {/* --- Footer --- */}
                <footer className="mt-auto w-full bg-[#152253] py-10 text-sm text-[#9a9a9a]">
                    {/* ... Footer content ... */}
                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3 lg:grid-cols-5">
                        {/* Company Info */}
                        <div className="md:col-span-1 lg:col-span-1">
                            <h4 className="mb-3 font-semibold text-white">Tai-Oak Tours & Travel</h4>
                            <p className="text-sm leading-relaxed">
                                Your gateway to unforgettable Kenyan adventures. We offer personalized safaris, cultural experiences, and beach
                                holidays.
                            </p>
                        </div>
                        {/* Company Links */}
                        <div>
                            <h4 className="mb-3 font-semibold text-white">Company</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href={route('home')} className="hover:text-white">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('about')} className="hover:text-white">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Services */}
                        <div>
                            <h4 className="mb-3 font-semibold text-white">Services</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Tour Guiding
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Package Bookings
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Rental Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Hotel Reservations
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Newsletter */}
                        <div>
                            <h4 className="mb-3 font-semibold text-white">Newsletter</h4>
                            <p className="mb-3 text-sm">Subscribe for travel tips and special offers.</p>
                            <form className="flex flex-col gap-2 sm:flex-row">
                                <Input
                                    type="email"
                                    className="flex-grow bg-white/10 text-white placeholder:text-gray-400"
                                    placeholder="Your email"
                                    required
                                />
                                <Button variant={'default'} type="submit" className="shrink-0">
                                    Subscribe
                                </Button>
                            </form>
                        </div>
                        {/* Address */}
                        <div>
                            <h4 className="mb-3 font-semibold text-white">Address</h4> {/* Changed from mt-4 */}
                            <address className="space-y-2 not-italic">
                                <p className="flex items-center gap-2">
                                    <MapPlus className="size-4 shrink-0 text-[#007562]" /> 123 Safari Lane, Nairobi, Kenya
                                </p>
                                <p className="flex items-center gap-2">
                                    <Phone className="size-4 shrink-0 text-[#007562]" /> +254 700 123 456
                                </p>
                                <p className="flex items-center gap-2">
                                    <Mail className="size-4 shrink-0 text-[#007562]" /> info@taioaktours.co.ke
                                </p>
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
