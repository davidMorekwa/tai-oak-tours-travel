<?php

namespace App\Http\Controllers;

use App\Models\Itinerary;
use App\Models\Tour;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ItineraryController extends Controller
{
    public function create(Tour $tour)
    {
        // You might want to pass the next available day number
        $nextDayNumber = $tour->itineraries()->max('day_number') + 1;

        return Inertia::render('admin/tours/itineraries/Create', [
            'tour' => $tour->only('id', 'title'), // Pass only necessary tour info
            'nextDayNumber' => $nextDayNumber,
        ]);
    }

    public function store(Request $request, Tour $tour)
    {
        $validatedData = $request->validate([
            'day_number' => 'required|integer|min:1',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $itinerary = new Itinerary($validatedData);
        $itinerary->tour_id = $tour->id;
        $itinerary->save();

        // Redirect back to the tour edit page, perhaps to a specific tab/section for itineraries
        // Or to a page listing itineraries for this tour.
        // For now, let's redirect to the tour's edit page.
        return Redirect::route('admin.tours.edit', $tour->id)
                       ->with('success', 'Itinerary item added successfully.');
    }

    // We'll add edit, update, destroy methods later
    public function edit(Tour $tour, Itinerary $itinerary)
    {
        // Ensure the itinerary belongs to the tour (optional, but good practice if not using nested resource controllers strictly)
        if ($itinerary->tour_id !== $tour->id) {
            abort(404); // Or redirect with an error
        }

        return Inertia::render('admin/tours/itineraries/Edit', [
            'tour' => $tour->only('id', 'title'),
            'itinerary' => $itinerary->only('id', 'day_number', 'title', 'description'),
        ]);
    }

    public function update(Request $request, Tour $tour, Itinerary $itinerary)
    {
        if ($itinerary->tour_id !== $tour->id) {
            abort(404);
        }

        $validatedData = $request->validate([
            'day_number' => 'required|integer|min:1',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $itinerary->update($validatedData);

        return Redirect::route('admin.tours.edit', $tour->id)
                       ->with('success', 'Itinerary item updated successfully.');
    }
}