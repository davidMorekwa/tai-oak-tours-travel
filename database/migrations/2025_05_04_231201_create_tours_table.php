<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tours', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->integer('duration_days');
            $table->string('image');
            $table->text('description')->nullable();
            $table->text('overview')->nullable();
            $table->text('highlights')->nullable();
            $table->string('country');
            $table->boolean('is_featured')->default(false);
            $table->decimal('low_season_price', 10, 2)->nullable();
            $table->decimal('high_season_price', 10, 2)->nullable();
            $table->decimal('rating');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tours');
    }
};
