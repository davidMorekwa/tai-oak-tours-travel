<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    /** @use HasFactory<\Database\Factories\ReviewFactory> */
    use HasFactory;
    protected $fillable = [
        'tour_id',
        'name',
        'email',
        'rating',
        'comment',
        'is_approved',
    ];
    protected $casts = [
        'is_approved' => 'boolean',
        'rating' => 'integer',
    ];
    public function tourPackage()
    {
        return $this->belongsTo(Tour::class, 'tour_id');
    }
}
