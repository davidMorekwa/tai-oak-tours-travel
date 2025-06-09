<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReviewRequest;
use App\Http\Requests\TourReviewRequest;
use App\Models\Review;
use App\Models\Tour;
use App\Models\TourPackage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class ReviewController extends Controller
{
    public function store(TourReviewRequest $request, int $tour_id): RedirectResponse
    {
        try {
            $validatedData = $request->validated();
            $tour = Tour::findOrFail($tour_id);
            $reviewData = [
                'tour_id' => $tour->id,
                'rating' => $validatedData['rating'],
                'comment' => $validatedData['comment'],
                'is_approved' => false, // Default to not approved; admin can approve later
            ];

            if (Auth::check()) {
                $user = Auth::user();
                $reviewData['user_id'] = $user->id;
                $reviewData['name'] = $user->name; // Or a specific profile name field
                $reviewData['email'] = $user->email;
            } else {
                $reviewData['name'] = $validatedData['name'];
                $reviewData['email'] = $validatedData['email'];
            }
            Log::info('Storing review for tour ID: ' . $tour->id, $reviewData);
            Review::create($reviewData);


            // Optionally, send a notification to admin about new review

            return back()->with('success', 'Review submitted successfully! It will be visible after approval.');

        } catch (\Exception $e) {
            Log::error('Error storing review: ' . $e->getMessage());
            return back()->with('error', 'There was an issue submitting your review. Please try again.');
        }
    }

    public function index(HttpRequest $request)
    {
        $status = $request->input('status', 'all'); // 'all', 'pending', 'approved'

        $reviewsQuery = Review::with(['tourPackage:id,title']) // Eager load tour title and user name
            ->latest();

        if ($status === 'pending') {
            $reviewsQuery->where('is_approved', false);
        } elseif ($status === 'approved') {
            $reviewsQuery->where('is_approved', true);
        }

        $reviews = $reviewsQuery->paginate(10)->withQueryString();

        $reviews->through(fn ($review) => [
            'id' => $review->id,
            'reviewer_name' => $review->name,
            'reviewer_email' => $review->email,
            'rating' => $review->rating,
            'comment' => $review->comment,
            'is_approved' => $review->is_approved,
            'created_at_formatted' => $review->created_at->format('M d, Y H:i'),
            'tour_title' => $review->tour?->title, // Access eager loaded tour title
            'user_name' => $review->user?->name, // Access eager loaded user name (if review by registered user)
        ]);

        return Inertia::render('admin/tours/reviews/index', [
            'reviews' => $reviews,
            'filters' => ['status' => $status],
        ]);
    }

    public function approve(Review $review): RedirectResponse
    {
        if (!$review->is_approved) {
            $review->update(['is_approved' => true]);
            return back()->with('success', 'Review approved successfully.');
        }
        return back()->with('info', 'Review was already approved.');
    }

    public function unapprove(Review $review): RedirectResponse
    {
        if ($review->is_approved) {
            $review->update(['is_approved' => false]);
            return back()->with('success', 'Review unapproved successfully.');
        }
        return back()->with('info', 'Review was already pending.');
    }

    public function destroy(Review $review): RedirectResponse
    {
        try {
            $review->delete();
            return back()->with('success', 'Review deleted successfully.');
        } catch (\Exception $e) {
            // Log error
            return back()->with('error', 'Failed to delete review.');
        }
    }


}
