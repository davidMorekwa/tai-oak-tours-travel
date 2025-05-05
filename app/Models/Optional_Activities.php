<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class optional_activities extends Model
{
    protected $fillable = [
        "itinerary_day_id",
        "activity_name",
        "cost_usd",
        "description"
    ];
}
