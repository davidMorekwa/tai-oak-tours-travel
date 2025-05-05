<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    protected $fillable = [
        "title",
        "duration_days",
        "description",
        "low_season_price",
        "high_season_price"
    ];
}
