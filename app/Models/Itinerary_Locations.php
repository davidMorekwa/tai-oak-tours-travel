<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class itinerary_locations extends Model
{
    protected $fillable = [
        "itinerary_id",
        "location_id"
    ];
}
