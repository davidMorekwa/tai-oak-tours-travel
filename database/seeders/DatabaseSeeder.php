<?php

namespace Database\Seeders;

use App\Models\Itinerary;
use App\Models\Location;
use App\Models\Review;
use App\Models\Tour;
use App\Models\tours;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        // Location::factory()->count(10)->create();
        // Tour::factory(5)->create();
        // Itinerary::factory(15)->create();
        $tours = Tour::all();

        if ($tours->isEmpty()) {
            $this->command->info('No tours found. Skipping review seeding. Please seed tours first.');
            return;
        }

        foreach ($tours as $tour) {
            $numberOfReviews = rand(0, 8); // Create between 0 to 8 reviews per tour

            for ($i = 0; $i < $numberOfReviews; $i++) {

                Review::factory()->create([
                    'tour_id' => $tour->id,
                ]);
            }
        }
        
        $this->command->info('Reviews seeded successfully for existing tours.');
    }
}
