<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory; // Optional: Add if you plan to use factories for Location
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;
    protected $fillable = [
        "name",
        "country",
        "image"
    ];

    // Define the many-to-many relationship with Tour
    public function tours()
    {
        return $this->belongsToMany(Tour::class);
    }
}
