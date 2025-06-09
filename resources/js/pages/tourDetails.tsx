// /Users/dave/Code/travel-agency/resources/js/pages/TourDetails.tsx

import PublicFooter from '@/components/public-footer';
import PublicNavbar from '@/components/public-navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker'; // Ensure DatePicker is set up
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; // Import Label
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea'; // Import Textarea
import StarRating from '@/components/ui/star-rating'; // Import StarRating
import { cn } from '@/lib/utils';
import { TourItinerary, TourLocation, TourPackage, Review, SharedData } from '@/types'; // Updated imports
import { Head, Link, useForm, usePage } from '@inertiajs/react'; // Added useForm
import { Check, Clock, DollarSign, MapPin, MessageSquare, Star, User, Users, X, Send } from 'lucide-react'; // Added User, MessageSquare, Send
import React, { useState } from 'react'; // Import useState
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const inclusions = [
    'Full Board Accommodation while on Safari',
    'Meals as stated (Breakfast, Lunch, Dinner)',
    'All park entry fees, government taxes, and an English-speaking driver/guide',
    'Game drives as per the itinerary',
    'Game drive in a 4x4 tourist Vehicle  with an open roof for comfortable viewing and a UHF Radio',
    'Recommended mineral water while on safari',
    'Airport pickup and drop-off',
    'Assistance at anytime',
];
const exclusions = [
    'Tips',
    'Laundry',
    'Visiting the Maasai Village',
    'Drinks and any other items of a personal nature',
    'Balloon Safari',
    'Optional activities',
];

// --- Placeholder Single Tour Data ---
// TODO: This data should come from Inertia props passed by the controller

export default function TourDetails() {
    const { props, component } = usePage<SharedData>();
    const logoUrl = '/storage/image_assets/logo.jpg'; // Ensure correct path

    const tour = props.tour as TourPackage;
    const tourItinerary = props.itinerary as TourItinerary[] || [];
    const locations = props.locations as TourLocation[];
    const reviews = props.reviews as Review[] || [];

    // Animation hooks - Added bookingRef
    const animationOptions = { triggerOnce: true, threshold: 0.1 };
    const { ref: heroRef, inView: heroInView } = useInView(animationOptions);
    const { ref: detailsRef, inView: detailsInView } = useInView(animationOptions);
    const { ref: bookingRef, inView: bookingInView } = useInView(animationOptions); // New hook for booking widget
    const { ref: itineraryRef, inView: itineraryInView } = useInView(animationOptions);
    const { ref: inclusionsRef, inView: inclusionsInView } = useInView(animationOptions);
    const { ref: highlightsRef, inView: highlightsInView } = useInView(animationOptions);
    const { ref: reviewsRef, inView: reviewsInView } = useInView(animationOptions); // New hook for reviews section
    const { ref: ctaRef, inView: ctaInView } = useInView(animationOptions);
    
    // Use Inertia's useForm for the Booking Request Widget
    const { data: bookingRequestData, setData: setBookingRequestData, post: postBookingRequest, processing: bookingProcessing, errors: bookingErrors, reset: resetBookingForm } = useForm({
        destination: tour.title, 
        user_name: '',
        user_email: '',
        check_in_date: undefined as Date | undefined, // Maps to 'checkInDate' for mailable
        number_of_people: 1, // Maps to 'numberOfPeople' for mailable
        message: '',      // Maps to 'userMessage' for mailable
    });

    const handleBookingRequestSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Booking Request Data:', bookingRequestData);
        postBookingRequest(route('check.availability'), { // New route name
            preserveScroll: true,
            onSuccess: () => {
                alert('Your booking request has been sent! We will contact you shortly with details and a quote.');
                resetBookingForm('user_name', 'user_email', 'check_in_date', 'number_of_people', 'message'); // Reset relevant fields
            },
            onError: (errors) => {
                console.error('Error submitting booking request:', errors);
                const errorMessages = Object.values(errors).join('\n');
                alert(`There was an error submitting your request:\n${errorMessages}\nPlease try again.`);
            },
        });
    };

    // Use Inertia's useForm for the Review Submission
    const { data: reviewData, setData: setReviewData, post: postReview, processing: reviewProcessing, errors: reviewErrors, reset: resetReviewForm, recentlySuccessful: reviewRecentlySuccessful } = useForm({
        name: '',
        email: '', 
        rating: 0,
        comment: '',
    });

    const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (reviewData.rating === 0) {
            alert("Please select a rating."); // Simple client-side validation for rating
            return;
        }
        postReview(route('tours.reviews.store', { tour: tour.id }), { // Assumes tour.id is the identifier
            preserveScroll: true,
            onSuccess: () => {
                resetReviewForm('rating', 'comment'); // Keep name/email if logged out user wants to review again (though unlikely for same tour)
                // Optionally clear name/email if not logged in: resetReviewForm();
            },
            onError: (errors) => {
                console.error('Error submitting review:', errors);
            },
        });
    };

    return (
        <>
            <Head title={`${tour.title} - Tai-Oak Tours & Travel`} />

            <div className="flex min-h-screen flex-col items-center bg-[#fff7d6] text-[#1b1b18]">
                <PublicNavbar />

                <div className="w-full flex-1">
                    {/* --- Hero Section --- */}
                    {/* Sequence 1: Image */}
                    <section
                        ref={heroRef}
                        className={cn(
                            'relative h-[50vh] w-full bg-black md:h-[60vh]',
                            'opacity-0 transition-opacity duration-1000 ease-in-out',
                            heroInView ? 'opacity-100' : '',
                        )}
                    >
                        {/* ... Hero content ... */}
                        <img src={tour.image} alt={tour.title} className="h-full w-full object-cover opacity-70" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-black/30 p-6 text-center text-white">
                            <h1 className="mb-2 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">{tour.title}</h1>
                            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-lg text-gray-200">
                                {' '}
                                {/* Added flex-wrap */}
                                <span className="flex items-center gap-1.5">
                                    <Clock className="h-5 w-5" />
                                    {tour.duration_days} Days
                                </span>
                                {/* Improved Price Display in Hero */}
                                <span className="flex items-center gap-1.5">
                                    <DollarSign className="h-5 w-5" />
                                    <span>
                                        Low: <span className="font-semibold text-white">${tour.low_season_price.toLocaleString()}</span>
                                        <span className="mx-1 text-gray-400">|</span>
                                        Peak: <span className="font-semibold text-white">${tour.high_season_price.toLocaleString()}</span>
                                        <span className="ml-1">pp</span>
                                    </span>
                                </span>
                                {tour.rating && (
                                    <span className="flex items-center gap-1 rounded-full bg-yellow-400 px-2 py-0.5 text-sm font-bold text-black">
                                        <Star className="h-4 w-4 fill-black" /> {tour.rating}
                                    </span>
                                )}
                            </div>
                        </div>
                    </section>

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
                        {/* ... Overview content ... */}
                        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                            <h2 className="mb-4 text-3xl font-bold text-gray-900">Tour Overview</h2>
                            <p className="mb-8 text-lg leading-relaxed text-gray-700">{tour.description}</p>{' '}
                            {/* Assuming description holds overview */}
                            <Separator className="my-8" />
                            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
                                <div className="flex flex-col items-center">
                                    <Clock className="mb-2 h-8 w-8 text-[#007562]" />
                                    <span className="font-semibold text-gray-800">Duration</span>
                                    <span className="text-sm text-gray-600">{tour.duration_days} Days</span>
                                </div>
                                {/* Improved Price Display in Key Details */}
                                <div className="flex flex-col items-center">
                                    <DollarSign className="mb-2 h-8 w-8 text-[#007562]" />
                                    <span className="font-semibold text-gray-800">Pricing (per person)</span>
                                    <div className="mt-1 text-sm text-gray-600">
                                        <p>
                                            Low Season: <strong className="text-gray-700">${tour.low_season_price.toLocaleString()}</strong>
                                        </p>
                                        <p>
                                            Peak Season: <strong className="text-gray-700">${tour.high_season_price.toLocaleString()}</strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Users className="mb-2 h-8 w-8 text-[#007562]" />
                                    <span className="font-semibold">Group Size</span>
                                    <span className="text-sm text-gray-600">Small Groups (2-6)</span> {/* Example */}
                                </div>
                                <div className="flex flex-col items-center">
                                    <MapPin className="mb-2 h-8 w-8 text-[#007562]" />
                                    <span className="font-semibold">Main Location</span>
                                    <span className="text-sm text-gray-600">{locations[0].name}</span> {/* Example */}
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
                            <div className="rounded-lg bg-white p-8 shadow-md">
                                {' '}
                                {/* White container inside */}
                                <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Check Availability & Request Quote</h2>
                                <form onSubmit={handleBookingRequestSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        {/* User Name */}
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="userName" className="font-semibold">
                                                Full Name <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="userName"
                                                type="text"
                                                placeholder="Your Full Name"
                                                value={bookingRequestData.user_name}
                                                onChange={(e) => setBookingRequestData('user_name', e.target.value)}
                                                required
                                                className="bg-white"
                                            />
                                        </div>
                                        {/* User Email */}
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="userEmail" className="font-semibold">
                                                Email Address <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="userEmail"
                                                type="email"
                                                placeholder="you@example.com"
                                                value={bookingRequestData.user_email}
                                                onChange={(e) => setBookingRequestData('user_email', e.target.value)}
                                                required
                                                className="bg-white"
                                            />
                                        </div>
                                        {/* Departure Date */}
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="departureDate" className="font-semibold">
                                                Check-In Date  <span className="text-red-500">*</span>
                                            </Label>
                                            <DatePicker
                                                date={bookingRequestData.check_in_date}
                                                setDate={(date) => setBookingRequestData('check_in_date', date)}
                                                buttonId="departureDate"
                                                placeholder="Select check-in date"
                                                className="bg-white hover:bg-white hover:placeholder:text-black" // Cream background for button
                                            />
                                        </div>
                                        {/* Number of Travelers */}
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="travelers" className="font-semibold">
                                                Number of Travelers  <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="travelers"
                                                type="number"
                                                placeholder="e.g., 2"
                                                min="1"
                                                value={bookingRequestData.number_of_people}
                                                onChange={(e) => setBookingRequestData('number_of_people', Math.max(1, parseInt(e.target.value, 10) || 1))}
                                                required
                                                className="bg-white" // Ensure input bg is white
                                            />
                                        </div>
                                    </div>
                                    {/* Message */}
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="bookingMessage" className="font-semibold">
                                            Specific Requests or Questions (Optional)
                                        </Label>
                                        <textarea
                                            id="message"
                                            rows={4} // Adjusted rows
                                            className="border-input focus-visible:border-ring focus-visible:ring-ring/50 w-full rounded-md border bg-white p-3 text-base shadow-xs transition-[color,box-shadow] focus:outline-none focus-visible:ring-[3px] md:text-sm" // Ensure bg-white
                                            placeholder="Any specific requests, preferred accommodation type, or questions..."
                                            value={bookingRequestData.message}
                                            onChange={(e) => setBookingRequestData('message', e.target.value)}
                                        ></textarea>
                                    </div>
                                    {/* Submit Button */}
                                    <div className="pt-2 text-center">
                                        <Button type="submit" size="lg" variant="default" className="w-full sm:w-auto" disabled={bookingProcessing}>
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
                                {tourItinerary && tourItinerary.length > 0 ? tourItinerary.map((day: TourItinerary) => (
                                    <div
                                        key={day.id}
                                        className="flex flex-col gap-2 rounded-lg border border-gray-300 bg-[#f5e7c5] p-6 shadow-sm md:flex-row md:gap-6"
                                    >
                                        {' '}
                                        {/* Changed inner bg */}
                                        <div className="flex shrink-0 items-center justify-center rounded-full bg-[#152253] p-3 text-center font-bold text-white md:h-16 md:w-16">
                                            Day <span className="ml-1 text-xl">{day.day_number}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="mb-1 text-xl font-semibold text-gray-800">{day.title}</h3>
                                            <p className="text-gray-700">{day.description}</p>
                                        </div>
                                    </div>
                                )) : (
                                    <p className="text-center text-gray-600">
                                        Detailed daily itinerary is not available for this tour package yet. Please check back later or contact us for more information.
                                    </p>
                                )}
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
                        <div className="mx-auto grid max-w-4xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
                            <div>
                                <h3 className="mb-4 text-2xl font-bold text-gray-900">What's Included</h3>
                                <ul className="space-y-2">
                                    {inclusions.map(
                                        (
                                            item, // Using static inclusions for now
                                        ) => (
                                            <li key={item} className="flex items-start gap-2 text-gray-700">
                                                <Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                                                <span>{item}</span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h3 className="mb-4 text-2xl font-bold text-gray-900">What's Excluded</h3>
                                <ul className="space-y-2">
                                    {exclusions.map(
                                        (
                                            item, // Using static exclusions for now
                                        ) => (
                                            <li key={item} className="flex items-start gap-2 text-gray-700">
                                                <X className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                                                <span>{item}</span>
                                            </li>
                                        ),
                                    )}
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
                                {tour.highlights && tour.highlights.split(',  ').map(
                                    (
                                        highlight, // Assuming highlights is an array
                                    ) => (
                                        <Badge
                                            key={highlight}
                                            variant="secondary"
                                            className="bg-[#f5e7c5] px-4 py-1.5 text-base text-gray-800 shadow-sm hover:bg-[#e6d9b9]"
                                        >
                                            {' '}
                                            {/* Changed badge bg */}
                                            {highlight}
                                        </Badge>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>

                    {/* --- Reviews Section --- */}
                    {/* Sequence 7: Cream */}
                    <section
                        ref={reviewsRef}
                        className={cn(
                            'w-full bg-[#f5e7c5] py-16', // Cream background
                            'opacity-0 transition-opacity delay-600 duration-1000 ease-in-out', // Adjusted delay
                            reviewsInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">Customer Reviews</h2>
                            {tour.total_reviews > 0 && props.average_rating !== null ? (
                                <div className="mb-8 flex flex-col items-center text-center">
                                    <StarRating value={tour.average_rating} size={32} readonly />
                                    <p className="mt-2 text-lg text-gray-700">
                                        {tour.average_rating.toFixed(1)} out of 5 stars
                                    </p>
                                    <p className="text-sm text-gray-600">Based on {tour.total_reviews} review{props.total_reviews !== 1 && 's'}</p>
                                </div>
                            ) : (
                                <p className="mb-8 text-center text-gray-600">Be the first to review this tour!</p>
                            )}

                            

                            {/* Review Submission Form */}
                            <div className="rounded-lg bg-white p-6 shadow-md md:p-8">
                                <h3 className="mb-6 text-2xl font-semibold text-gray-900">Leave a Review</h3>
                                {reviewRecentlySuccessful && (
                                    <div className="mb-4 rounded-md bg-green-100 p-4 text-sm text-green-700">
                                        Thank you! Your review has been submitted successfully. It will be visible after approval.
                                    </div>
                                )}
                                <form onSubmit={handleReviewSubmit} className="space-y-5">
                                    {!props.auth.user && ( // Show Name and Email only if user is not logged in
                                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                            <div>
                                                <Label htmlFor="reviewName" className="font-semibold">Your Name <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="reviewName"
                                                    type="text"
                                                    placeholder="John Doe"
                                                    value={reviewData.name}
                                                    onChange={(e) => setReviewData('name', e.target.value)}
                                                    disabled={reviewProcessing}
                                                    required
                                                    className="bg-white"
                                                />
                                                {reviewErrors.name && <p className="mt-1 text-xs text-red-500">{reviewErrors.name}</p>}
                                            </div>
                                            <div>
                                                <Label htmlFor="reviewEmail" className="font-semibold">Your Email <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="reviewEmail"
                                                    type="email"
                                                    placeholder="you@example.com"
                                                    value={reviewData.email}
                                                    onChange={(e) => setReviewData('email', e.target.value)}
                                                    disabled={reviewProcessing}
                                                    required
                                                    className="bg-white"
                                                />
                                                {reviewErrors.email && <p className="mt-1 text-xs text-red-500">{reviewErrors.email}</p>}
                                            </div>
                                        </div>
                                    )}
                                    <div>
                                        <Label htmlFor="reviewRating" className="font-semibold">Your Rating <span className="text-red-500">*</span></Label>
                                        <StarRating value={reviewData.rating} onChange={(rating) => setReviewData('rating', rating)} size={28} />
                                        {reviewErrors.rating && <p className="mt-1 text-xs text-red-500">{reviewErrors.rating}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="reviewComment" className="font-semibold">Your Review</Label>
                                        <Textarea
                                            id="reviewComment"
                                            rows={5}
                                            placeholder="Share your experience with this tour..."
                                            value={reviewData.comment}
                                            onChange={(e) => setReviewData('comment', e.target.value)}
                                            disabled={reviewProcessing}
                                            className="bg-white"
                                        />
                                        {reviewErrors.comment && <p className="mt-1 text-xs text-red-500">{reviewErrors.comment}</p>}
                                    </div>
                                    <Button type="submit" size="lg" variant="default" className="w-full sm:w-auto" disabled={reviewProcessing}>
                                        <Send className="mr-2 h-4 w-4" /> Submit Review
                                    </Button>
                                </form>
                            </div>
                            {/* Existing Reviews Carousel */}
                            {reviews && reviews.length > 0 && (
                            <Swiper
                                modules={[Pagination, Navigation, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    loop={reviews.length > 1} // Loop if more than one review
                                    autoplay={{
                                        delay: 5000, // Adjusted delay
                                        disableOnInteraction: true,
                                    }}
                                    className="mySwiper mt-12 rounded-lg pb-10" // Added margin-top, padding-bottom for pagination
                                    breakpoints={{
                                        // when window width is >= 768px (md)
                                        768: {
                                            slidesPerView: reviews.length > 1 ? 2 : 1, // Show 2 slides if more than 1 review, else 1
                                            spaceBetween: 20,
                                        },
                                    }}
                            >
                                {reviews.map((review: Review) => (
                                    <SwiperSlide key={review.id} className="p-1"> {/* Minimal padding for slide, card handles internal padding */}
                                        <div className="flex h-full flex-col rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
                                            <div className="mb-2 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    {/* Placeholder for avatar */}
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#152253] text-white">
                                                        <User size={20} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800">{review.name}</h4>
                                                        <p className="text-xs text-gray-500">
                                                            {new Date(review.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                        </p>
                                                        </div>
                                                </div>
                                                <StarRating value={review.rating} size={18} readonly />
                                            </div>
                                            <p className="flex-grow text-gray-700">{review.comment}</p> {/* flex-grow to help with consistent height */}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            )}
                            {reviews.length === 0 && !reviewRecentlySuccessful && (
                                <p className="mt-8 text-center text-gray-600">No reviews yet for this tour. Be the first to share your experience!</p>
                            )}
                        </div>
                    </section>

                    {/* --- Optional: Keep simpler CTA or remove --- */}
                    {/* Sequence 7: Cream */}
                    <section
                        ref={ctaRef}
                        className={cn(
                            'w-full bg-[#f5e7c5] py-16 text-center', // Changed background to Cream
                            'opacity-0 transition-opacity delay-700 duration-1000 ease-in-out', // Adjusted delay
                            ctaInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                            <h2 className="mb-4 text-3xl font-bold text-gray-900">Have More Questions?</h2>
                            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
                                Our travel experts are happy to help with any further details or customization requests for the {tour.title}.
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
