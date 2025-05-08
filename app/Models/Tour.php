<?php

namespace App\Models;

use Database\Factories\TourFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Itinerary;
use App\Models\Location; // Add this line

class Tour extends Model
{
    use HasFactory;
    protected $fillable = [
        "title",
        "duration_days",
        "description",
        "low_season_price",
        "high_season_price",
        "rating",
        "is_featured",
        'country',
        "highlights"
    ];

    public function itineraries(){
        return $this->hasMany(Itinerary::class);
    }

    public function locations()
    {
        return $this->belongsToMany(Location::class);
    }
}
