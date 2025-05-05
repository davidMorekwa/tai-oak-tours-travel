<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TourFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->words(3, true),
            'duration_days' => $this->faker->numberBetween(0,7),
            'image' => $this->faker->imageUrl(1600,900, 'travel'),
            'description' => $this->faker->paragraph(),
            'low_season_price' => $this->faker->numberBetween(0,7),
            'high_season_price' => $this->faker->numberBetween(0,7),
        ];
    }
}
