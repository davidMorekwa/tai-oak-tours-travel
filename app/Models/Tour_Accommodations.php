<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class tour_accommodations extends Model
{
    protected $fillable = [
        "tour_id",
        "accommodation_id",
        "nights"
    ];
}
