<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Itinerary>
 */
class ItineraryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'tour_id' => $this->faker->numberBetween(1,5),
            'day_number' => $this->faker->numberBetween(1,5),
            'title' => $this->faker->words(3, true),
            'description' => $this->faker->sentences(3, true),
        ];
    }
}
