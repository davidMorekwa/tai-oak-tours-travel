<?php

namespace App\Http\Controllers;

use App\Models\tours;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ToursController extends Controller
{

    // Get all tours
    public function index(){
        $tours = tours::all();  

        return Inertia::render('tours', ['tours'=>$tours]);
    }
}
