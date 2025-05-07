<?php

namespace App\Http\Controllers;

use App\Models\Itinerary;
use App\Models\Tour;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Storage; // If using Storage::url() for images
use Inertia\Inertia;

class ToursController extends Controller
{
    public function welcome(){
        $featured_packages = Tour::where('is_featured',1)->get();
        return Inertia::render('welcome',['featured_packages' => $featured_packages]);
    }
    // Get all tours
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 9); // Default to 9 items per page, or from request
        $filters = [
            'search' => $request->input('search'),
            'country' => $request->input('country'),
        ];

        // Fetch paginated tours from the database
        $toursPaginator = Tour::query() // Start with query()
            ->orderBy('title') // Example: order by title
            ->when($filters['search'], function ($query, $search) {
                // Search in title and description. Adjust columns as needed.
                $query->where(function ($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                      ->orWhere('description', 'like', "%{$search}%");
                    // Add more searchable fields if necessary
                });
            })
            ->when($filters['country'], function ($query, $country) {
                $query->where('country', $country); // Exact match for dropdown
            })
            ->paginate($perPage); // Use the $perPage variable

        // Transform the collection of tours within the paginator
        $transformedTours = $toursPaginator->getCollection()->map(function (Tour $tour) {
            // Example transformation for image URL:
            // Assuming $tour->image stores a path like 'assets/image.jpg' relative to 'public/storage/'
            // or 'storage/assets/image.jpg' relative to 'public/'
            $imageUrl = $tour->image ? asset($tour->image) : asset('storage/image_assets/placeholder.jpg');

            return [
                'id' => $tour->id,
                'title' => $tour->title,
                'image' => $imageUrl, // Use the transformed image URL
                'duration_days' => $tour->duration_days,
                'description' => $tour->description,
                'low_season_price' => (float) $tour->low_season_price, // Ensure numeric type
                'high_season_price' => (float) $tour->high_season_price, // Ensure numeric type
                'rating' => (float) $tour->rating, // Ensure numeric type
                // Assuming highlights are stored as a comma and double-space separated string
                'highlights' => $tour->highlights ? array_map('trim', explode(',  ', $tour->highlights)) : [],
                // Add any other fields your frontend 'TourPackage' type expects
            ];
        });

        // Create a new paginator instance with the transformed items
        $paginatedFormattedTours = new LengthAwarePaginator(
            $transformedTours,
            $toursPaginator->total(),
            $toursPaginator->perPage(),
            $toursPaginator->currentPage(),
            ['path' => $request->url(), 'query' => $request->query()]
        );

        // Get distinct countries for the filter dropdown
        $availableCountries = Tour::query()
            ->distinct()
            ->whereNotNull('country') // Exclude null/empty countries
            ->pluck('country')
            ->sort()
            ->values()
            ->all();

        return Inertia::render('tours', [
            'tourPackages' => $paginatedFormattedTours,
            'filters' => $filters, // Pass all current filters back
            'availableCountries' => $availableCountries, // Pass available countries
        ]);
    }

    // get tour and itinerary
    public function getTourAndItinerary(String $id){
        $tour = Tour::find($id);
        $tour->image = asset($tour->image);
        $itinerary = $tour->itineraries()->orderBy('day_number')->get();
        return Inertia::render('tourDetails', ['tour'=>$tour, 'itinerary'=>$itinerary]);
    }
}
