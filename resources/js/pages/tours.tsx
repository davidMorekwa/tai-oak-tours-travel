// /Users/dave/Code/travel-agency/resources/js/pages/Tours.tsx

import PublicFooter from '@/components/public-footer';
import PublicNavbar from '@/components/public-navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input'; // Keep for Footer
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"; // Import Select components
import { Label } from '@/components/ui/label'; // Import Label for filter
import { cn } from '@/lib/utils';
import { PaginatedData, TourPackage, type SharedData } from '@/types'; // Import PaginatedData
import { Head, Link, router, usePage } from '@inertiajs/react'; // Import router
import { Mail, MapPlus, Phone, Search, Star, X as XIcon } from 'lucide-react'; // Added Search and XIcon
import React, { Key, useEffect, useState } from 'react'; // Import useState and useEffect
import { useInView } from 'react-intersection-observer';

// Define the props structure including the paginated tourPackages
interface ToursPageProps extends SharedData {
    tourPackages: PaginatedData<TourPackage>; // Use the PaginatedData type
    filters: { // Add filters prop
        search: string | null;
        country: string | null;
        availableCountries: string[]; // For the dropdown options
    };
}

export default function Tours() {
    const { props } = usePage<ToursPageProps>(); // Use the specific props interface
    const logoUrl = '/storage/image_assets/logo.jpg'; // Ensure correct path

    const [searchFilters, setSearchFilters] = useState({
        search: props.filters.search || '',
        country: props.filters.country || '',
    });

    // Animation hooks
    const animationOptions = { triggerOnce: true, threshold: 0.1 };
    const { ref: heroRef, inView: heroInView } = useInView(animationOptions);
    const { ref: packagesRef, inView: packagesInView } = useInView(animationOptions);
    const { ref: paginationRef, inView: paginationInView } = useInView(animationOptions); // For pagination animation

    console.log('Tour Packages Data:', props.tourPackages);
    console.log('Current Filters:', props.filters);

    const handleSearch = (e?: React.FormEvent<HTMLFormElement>) => {
        if (e) e.preventDefault();
        const queryParams: Record<string, any> = { page: 1 };
        if (searchFilters.search) queryParams.search = searchFilters.search;
        if (searchFilters.country) queryParams.country = searchFilters.country;

        router.get(route('tours'), queryParams, { // Use 'tours' if that's your route name
            preserveState: true, // Preserves component state (like searchTerm input)
            replace: true,       // Replaces history entry instead of pushing
        });
    };

    const clearSearch = () => {
        setSearchFilters({ search: '', country: '' });
        // Ensure 'tours.index' is the correct route name, or use 'tours' if simpler
        router.get(route('tours'), { page: 1 }, { // Clear all filters and reset to page 1
            preserveState: true,
            replace: true,
        });
    };

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
                            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Explore Our Tours</h1>
                            <p className="text-lg text-gray-300">
                                Discover meticulously crafted itineraries designed to showcase the best of Africa's wildlife, landscapes, culture, and
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
                            {/* --- Filter Bar --- */}
                            <div className="mb-10 rounded-lg bg-[#f5e7c5] p-4 sm:p-6 shadow-md">
                                <form onSubmit={handleSearch} className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-end">
                                    {/* Search Term Input */}
                                    <div className="md:col-span-1">
                                        <Label htmlFor="search-tours" className="block text-sm font-medium text-gray-700 mb-1">
                                            Keyword
                                        </Label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                            <Input
                                                type="text"
                                                id="search-tours"
                                                placeholder="e.g., Mara, Safari, Beach..."
                                                value={searchFilters.search}
                                                onChange={(e) => setSearchFilters(prev => ({ ...prev, search: e.target.value }))}
                                                className="w-full rounded-md border-gray-300 bg-white py-2 pl-10 pr-10 shadow-sm focus:border-[#152253] focus:ring-[#152253] sm:text-sm" // Adjusted padding and styling
                                            />
                                            {searchFilters.search && (
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                                    onClick={() => {
                                                        setSearchFilters(prev => ({ ...prev, search: '' }));
                                                        // Optionally trigger search immediately on clear, or wait for main search button
                                                        // handleSearch(); // if you want immediate re-filter
                                                    }}
                                                    aria-label="Clear search"
                                                >
                                                    <XIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                    {/* Country Input */}
                                    <div className="md:col-span-1">
                                        <Label htmlFor="country-filter" className="block text-sm font-medium text-gray-700 mb-1">
                                            Country
                                        </Label>
                                        <Select
                                            value={searchFilters.country || ''}
                                            onValueChange={(value) => setSearchFilters(prev => ({ ...prev, country: value === 'all' ? '' : value }))}
                                        >
                                            <SelectTrigger id="country-filter" className="w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-[#152253] focus:ring-[#152253] sm:text-sm">
                                                <SelectValue placeholder="Select a country" />
                                            </SelectTrigger>
                                            <SelectContent className='bg-white'>
                                                <SelectItem value="all" className='text-gray-900'>All Countries</SelectItem>
                                                {props.availableCountries.map((countryName) => (
                                                    <SelectItem key={countryName} value={countryName} className='text-gray-900'>
                                                        {countryName}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    {/* Submit Button */}
                                    <div className="md:col-span-1 flex items-end space-x-2">
                                        <Button type="submit" variant="default" className="w-full flex-grow px-6 py-2">
                                            <Search className="mr-2 h-4 w-4" />
                                            Apply Filters
                                        </Button>
                                        {(searchFilters.search || searchFilters.country) && (
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={clearSearch}
                                                className="w-auto px-3 py-2"
                                                aria-label="Clear all filters"
                                            >
                                                <XIcon className="h-4 w-4 text-gray-500 hover:text-gray-600" />
                                            </Button>
                                        )}
                                    </div>
                                </form>
                            </div>

                            {props.tourPackages.data.length > 0 ? (
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                                    {props.tourPackages.data.map((pkg:TourPackage) => ( // Access items via props.tourPackages.data
                                        <Card
                                            key={pkg.id}
                                            className="flex flex-col overflow-hidden pt-0 border-none bg-[#f5e7c5] shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl" // Cream background for cards
                                        >
                                            <div className="relative">
                                                <img src={pkg.image} alt={pkg.title} className="h-60 w-full object-cover" /> {/* Fixed height image */}
                                                {/* Optional: Overlay for Price/Duration - corrected class for rounded corner */}
                                                <div className="absolute bottom-0 left-0 bg-black/60 px-3 py-1 text-sm font-semibold text-white">
                                                    {pkg.duration_days} days
                                                </div>
                                                {pkg.rating && (
                                                    <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-yellow-400 px-2 py-0.5 text-xs font-bold text-black">
                                                        <Star className="h-3 w-3 fill-black" />
                                                        {pkg.rating.toPrecision(2)}
                                                    </div>
                                                )}
                                            </div>
                                            <CardHeader className="pt-4 pb-2">
                                                <CardTitle className="text-lg font-semibold leading-tight">{pkg.title}</CardTitle>
                                            </CardHeader>
                                            <CardDescription className="flex-grow px-6 pb-4 text-sm text-gray-700">
                                                <p className="mb-2 line-clamp-3">{pkg.description}</p> {/* Limit description lines */}
                                            </CardDescription>
                                            <CardFooter className="mt-auto flex items-center justify-between bg-[#e6d9b9] px-6 py-3"> {/* Slightly darker footer */}
                                            <div className="text-[#152253]"> {/* Base color for the price section */}
                                                    <p className="flex items-baseline"> {/* Align text along baseline */}
                                                        <span className="mr-1 text-xs font-medium">Low (Jan-June):</span>
                                                        <span className="text-sm font-bold">${pkg.low_season_price.toLocaleString()}</span>
                                                    </p>
                                                    <p className="mt-0.5 flex items-baseline"> {/* Add small top margin, align text */}
                                                        <span className="mr-1 text-xs font-medium">Peak (July-Dec):</span>
                                                        <span className="text-sm font-bold">${pkg.high_season_price.toLocaleString()}</span>
                                                    </p>
                                                </div>
                                                <Link href={route('details', pkg.id)}> {/* TODO: Route to the tourpackage infomation */}
                                                    <Button variant={'default'} size="sm">
                                                        View Details
                                                    </Button>
                                                </Link>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-12 text-center">
                                    <Search className="mx-auto h-12 w-12 text-gray-400" />
                                    <h3 className="mt-2 text-xl font-semibold text-gray-900">No Tours Found</h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        We couldn't find any tours matching your current filters. Try adjusting your search or country selection.
                                    </p>
                                    { (searchFilters.search || searchFilters.country) &&
                                        <Button variant="link" onClick={clearSearch} className="mt-4 text-[#152253]">Clear all filters</Button>
                                    }
                                </div>
                            )}

                            {/* --- Pagination Links --- */}
                            {props.tourPackages.links.length > 3 && ( // Only show pagination if there's more than one page (prev, current, next for simple, or more for full)
                                <div
                                    ref={paginationRef}
                                    className={cn(
                                        'mt-12 flex justify-center space-x-1',
                                        'opacity-0 transition-opacity delay-200 duration-1000 ease-in-out',
                                        paginationInView ? 'opacity-100' : ''
                                    )}
                                >
                                    {props.tourPackages.links.map((link: { url: any; active: any; label: any; }, index: Key | null | undefined) => (
                                        <Link
                                            key={index}
                                            href={link.url || '#'} // Use link.url, provide fallback if null
                                            className={cn(
                                                'px-4 py-2 border rounded-md text-sm font-medium transition-colors',
                                                link.active ? 'bg-[#152253] text-white border-[#152253]' : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300',
                                                !link.url ? 'text-gray-400 cursor-not-allowed bg-gray-50' : '' // Disabled state
                                            )}
                                            // Preserve scroll position on navigation
                                            preserveScroll
                                            // Use dangerouslySetInnerHTML for labels like "&laquo; Previous"
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ))}
                                </div>
                            )}
                            {/* Pagination Info */}
                            <div className="mt-4 text-center text-sm text-gray-600">
                                Showing {props.tourPackages.from} to {props.tourPackages.to} of {props.tourPackages.total} results
                            </div>
                        </div>
                    </section>
                </div>

                {/* --- Footer --- */}
                <PublicFooter />
                {/* --- End Footer --- */}
            </div>
        </>
    );
}
