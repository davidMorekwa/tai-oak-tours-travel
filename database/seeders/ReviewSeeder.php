<?php

namespace Database\Seeders;

use App\Models\Review;
use App\Models\Tour;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tours = Tour::all();

        if ($tours->isEmpty()) {
            $this->command->info('No tours found. Skipping review seeding. Please seed tours first.');
            return;
        }

        foreach ($tours as $tour) {
            $numberOfReviews = rand(0, 8); // Create between 0 to 8 reviews per tour

            for ($i = 0; $i < $numberOfReviews; $i++) {

                Review::factory()->create([
                    'tour_package_id' => $tour->id,
                ]);
            }
        }
        
        $this->command->info('Reviews seeded successfully for existing tours.');
    
    }
}
