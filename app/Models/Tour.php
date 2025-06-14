<?php

namespace App\Models;

use Database\Factories\TourFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Itinerary;
use App\Models\Location; // Add this line
use Illuminate\Database\Eloquent\Casts\Attribute;

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
        "highlights",
        "image"
    ];

    public function itineraries(){
        return $this->hasMany(Itinerary::class);
    }

    public function locations()
    {
        return $this->belongsToMany(Location::class);
    }
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
    public function approvedReviews(){
        return $this->hasMany(Review::class)->where('is_approved', true)->latest();
    }
    public function averageRating():Attribute{
        return Attribute::make(
            get: fn () => $this->approvedReviews()->avg('rating')
        );
    }
    protected function totalReviews(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->approvedReviews()->count()
        );
    }
}
