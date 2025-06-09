<?php

namespace Database\Factories;

use App\Models\Tour;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\review>
 */
class ReviewFactory extends Factory
{

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'tour_id' => Tour::inRandomOrder()->first()?->id ?? Tour::factory(),
            'name' => $this->faker->name(),
            'email' => $this->faker->safeEmail(),
            'rating' => $this->faker->numberBetween(3, 5), // Reviews tend to be higher
            'comment' => $this->faker->paragraph(3, true),
            'is_approved' => $this->faker->boolean(85), // 85% chance of being approved for seeding
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'updated_at' => function (array $attributes) {
                // Ensure updated_at is same or after created_at
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }
}
