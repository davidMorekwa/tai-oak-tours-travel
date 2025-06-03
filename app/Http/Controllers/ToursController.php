<?php

namespace App\Http\Controllers;

use App\Models\Itinerary;
use App\Models\Location;
use App\Models\Tour;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Storage; // If using Storage::url() for images
use Inertia\Inertia;

class ToursController extends Controller
{
    public function welcome()
    {
        $featured_packages = Tour::where('is_featured', 1)->get();
        return Inertia::render('welcome', ['featured_packages' => $featured_packages]);
    }
    // Get all tours
    public function getAllTours(Request $request)
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
                $query->whereHas('locations', function ($locationQuery) use ($country) {
                    $locationQuery->where('country', $country);
                });
            })
            ->paginate($perPage); // Use the $perPage variable



        // Transform the collection of tours within the paginator
        $transformedTours = $toursPaginator->getCollection()->map(function (Tour $tour) {
            // Example transformation for image URL:
            // Assuming $tour->image stores a path like 'assets/image.jpg' relative to 'public/storage/'
            // or 'storage/assets/image.jpg' relative to 'public/'
            $imageUrl = $tour->image ? asset('storage/' . $tour->image) : asset('storage/image_assets/placeholder.jpg');

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
        $availableCountries = Location::query()->distinct('country')->pluck('country')->sort()->values()->all();

        return Inertia::render('tours', [
            'tourPackages' => $paginatedFormattedTours,
            'filters' => $filters, // Pass all current filters back
            'availableCountries' => $availableCountries, // Pass available countries
        ]);
    }

    // get tour and itinerary
    public function getTourAndItinerary(string $id)
    {
        $tour = Tour::find($id);
        $tour->image = asset('storage/' . $tour->image);
        $itinerary = $tour->itineraries()->orderBy('day_number')->get();
        $locations = $tour->locations()->get();
        return Inertia::render('tourDetails', ['tour' => $tour, 'itinerary' => $itinerary, 'locations' => $locations]);
    }

    public function index()
    {
        // Eager load locations if you plan to display more details from them.
        // For now, we'll rely on the 'country' field directly on the Tour model.
        $toursData = Tour::orderBy('created_at', 'desc')->get()->map(function ($tour) {
            return [
                'id' => $tour->id,
                'title' => $tour->title,
                // Ensure APP_URL is set in .env for Storage::url() to work correctly
                'image_url' => $tour->image ? Storage::url($tour->image) : asset('storage/image_assets/placeholder.jpg'), // Provide a placeholder
                'country' => $tour->country,
                'duration_days' => $tour->duration_days,
                'low_season_price' => $tour->low_season_price,
                'is_featured' => $tour->is_featured,
                // Add 'edit_url' and 'delete_url' if you have those routes defined
                // 'edit_url' => route('admin.tours.edit', $tour->id),
            ];
        });
        return Inertia::render('admin/tours/Index', ['tours' => $toursData]);
    }

    public function create()
    {
        $locations = Location::all();
        return Inertia::render('admin/tours/Create', ['locations' => $locations]);
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'location' => 'required|string|exists:locations,name', // Validates that the location name exists
            'duration_days' => 'required|integer|min:1',
            'low_season_price' => 'required|numeric|min:0',
            'high_season_price' => 'required|numeric|min:0',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048', // Max 2MB
            'highlights' => 'nullable|string',
            'is_featured' => 'required|boolean',
        ]);

        $imagePath = null;
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $destinationPath = public_path('storage/tour_images');
            $file = $request->file('image');

            // Optionally create the directory if it doesn't exist
            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0755, true);
            }

            // Generate a unique filename
            $filename = time() . '-' . $file->getClientOriginalName();
            $file->move($destinationPath, $filename);
            $imagePath = 'tour_images/' . $filename;
        }

        // Find the Location model instance by name
        $locationModel = Location::where('name', $validatedData['location'])->first();

        if (!$locationModel) {
            // This case should ideally be caught by 'exists:locations,name' validation
            // but as a fallback or if validation is bypassed.
            return back()->withErrors(['location' => 'Selected location not found.'])->withInput();
        }

        $tour = Tour::create([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
            'duration_days' => $validatedData['duration_days'],
            'low_season_price' => $validatedData['low_season_price'],
            'high_season_price' => $validatedData['high_season_price'],
            'highlights' => $validatedData['highlights'],
            'is_featured' => $validatedData['is_featured'],
            'image' => $imagePath,
            'rating' => '4.5'
        ]);

        // Attach the location to the tour using the many-to-many relationship
        $tour->locations()->attach($locationModel->id);

        return Redirect::route('admin.tours.index')->with('success', 'Tour package created successfully.');
    }

    public function edit(Tour $tour)
    {
        // Eager load the currently associated location(s) to pre-select in the form
        // Also load itineraries, ordered by day_number
        $tour->load([
            'locations',
            'itineraries' => function ($query) {
                $query->orderBy('day_number', 'asc');
            }
        ]);
        $locations = Location::orderBy('name')->get(['id', 'name', 'country']);
        // Prepare the tour data for the form, especially the selected location name
        $tourData = [
            'id' => $tour->id,
            'title' => $tour->title,
            'description' => $tour->description,
            'location' => $tour->locations->first()->name ?? '', // Get the name of the first associated location
            'duration_days' => $tour->duration_days,
            'low_season_price' => $tour->low_season_price,
            'high_season_price' => $tour->high_season_price,
            'image_url' => $tour->image ? Storage::url($tour->image) : null,
            'highlights' => $tour->highlights,
            'is_featured' => $tour->is_featured,
            'itineraries' => $tour->itineraries->map(function ($itinerary) {
                return [
                    'id' => $itinerary->id,
                    'day_number' => $itinerary->day_number,
                    'title' => $itinerary->title,
                    'description' => $itinerary->description,
                ];
            })->all(), // Ensure it's an array
        ];

        return Inertia::render('admin/tours/Edit', [
            'tour' => $tourData, // Itineraries are now part of the tour data
            'locations' => $locations,
        ]);
    }

    public function update(Request $request, Tour $tour)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'location' => 'required|string|exists:locations,name',
            'duration_days' => 'required|integer|min:1',
            'low_season_price' => 'required|numeric|min:0',
            'high_season_price' => 'required|numeric|min:0',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048', // Image is optional on update
            'highlights' => 'nullable|string',
            'is_featured' => 'required|boolean',
        ]);

        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            // Delete old image if it exists
            if ($tour->image) {
                Storage::disk('public')->delete($tour->image);
            }
            $validatedData['image'] = $request->file('image')->store('tour_images', 'public');
        } else {
            // Keep existing image if no new one is uploaded
            $validatedData['image'] = $tour->image;
        }

        $locationModel = Location::where('name', $validatedData['location'])->firstOrFail();

        // Prepare data for tour update, ensuring 'location' (name) is not passed directly
        $updateData = $validatedData;
        $updateData['country'] = $locationModel->country; // Set the country field on the tour
        unset($updateData['location']); // Remove the location name, it's for relationship sync

        $tour->update($updateData);

        // Sync the location (detaches old, attaches new if different)
        $tour->locations()->sync([$locationModel->id]);
        return Redirect::route('admin.tours.index')->with('success', 'Tour package updated successfully.');
    }

    public function destroy(Tour $tour)
    {
        try {
            // Delete the associated image from storage if it exists
            if ($tour->image) {
                Storage::disk('public')->delete($tour->image);
            }

            // Detach all locations associated with this tour (for many-to-many)
            $tour->locations()->detach();

            // Delete itineraries associated with this tour (if not handled by DB cascade)
            // If your itineraries table has a foreign key with ON DELETE CASCADE, this is not strictly needed.
            // $tour->itineraries()->delete(); // Uncomment if you need to manually delete related itineraries

            // Delete the tour
            $tour->delete();

            return Redirect::route('admin.tours.index')->with('success', 'Tour package deleted successfully.');
        } catch (\Exception $e) {
            // Log the error or handle it as needed
            return Redirect::route('admin.tours.index')->with('error', 'Failed to delete tour package. Please try again.');
        }
    }
}
