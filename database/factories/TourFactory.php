<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use function PHPSTORM_META\map;

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
        $countries = array('Kenya', 'Tanzania');
        $num = $this->faker->numberBetween(0,1);
        return [
            'title' => $this->faker->words(3, true),
            'duration_days' => $this->faker->numberBetween(0,7),
            'image' => 'storage/assets/elephant-kilimanjaro-landscape.jpeg',
            'description' => $this->faker->paragraph(),
            'low_season_price' => $this->faker->numberBetween(1,7),
            'high_season_price' => $this->faker->numberBetween(5,7),
            'rating' => $this->faker->numberBetween(0,5),
            'is_featured' => $this->faker->boolean(),
            'country' => $countries[$num],
            'highlights' => "hightligh1,  hightligh2,  hightligh3,  hightligh4,  hightligh5"
        ];
    }
}
