<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\ItineraryController;
use App\Http\Controllers\ToursController;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ToursController::class, 'welcome'])->name('home');
Route::get('/about', function () {
    return Inertia::render('aboutUs');
})->name('about');
Route::get('/contact', function () {
    return Inertia::render('contactUs');
})->name('contact');
Route::get('/tours', [ToursController::class, 'getAllTours'])->name('tours');
Route::get('/tours/{id}', [ToursController::class, 'getTourAndItinerary'])->name('details');
Route::post('/check-availability', [EmailController::class, 'handleAvailabilityCheck'])->name('check.availability');
Route::post('/contact-us', [EmailController::class, 'handleContactFormSubmission'])->name('contact.submit');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/register', [RegisteredUserController::class, 'create']);
    Route::post('/register', [RegisteredUserController::class, 'store']);
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('/tour/index', [ToursController::class, 'index'])->name('admin.tours.index'); // Corrected path to match convention
    Route::get('/tour/create', [ToursController::class, 'create'])->name('admin.tours.create');
    Route::post('/tour/store', [ToursController::class, 'store'])->name('admin.tours.store');
    Route::get('/tour/{tour}/edit', [ToursController::class, 'edit'])->name('admin.tours.edit');
    Route::put('/tour/{tour}', [ToursController::class, 'update'])->name('admin.tours.update'); // Using PUT for updates
    Route::delete('/tour/{tour}', [ToursController::class, 'destroy'])->name('admin.tours.destroy');

    // Itinerary Routes (nested under tours)
    Route::get('/tour/{tour}/itineraries/create', [ItineraryController::class, 'create'])->name('admin.tours.itineraries.create');
    Route::post('/tour/{tour}/itineraries', [ItineraryController::class, 'store'])->name('admin.tours.itineraries.store');
    Route::get('/tour/{tour}/itineraries/{itinerary}/edit', [ItineraryController::class, 'edit'])->name('admin.tours.itineraries.edit');
    Route::put('/tour/{tour}/itineraries/{itinerary}', [ItineraryController::class, 'update'])->name('admin.tours.itineraries.update');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
