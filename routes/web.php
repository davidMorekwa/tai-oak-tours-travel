<?php

use App\Http\Controllers\ToursController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ToursController::class, 'welcome'])->name('home');
Route::get('/about', function () {
    return Inertia::render('aboutUs');
})->name('about');
Route::get('/contact', function () {
    return Inertia::render('contactUs');
})->name('contact');
Route::get('/tours', [ToursController::class, 'index'])->name('tours');
Route::get('/tours/{id}', [ToursController::class, 'getTourAndItinerary'])->name('details');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
