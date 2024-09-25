<?php

namespace Database\Factories;

use App\Enums\ProductItemStatusesEnum;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductItem>
 */
class ProductItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => rand(1, 11),
            'provider_id' => null,
            'warehouse_id' => rand(1, 4),
            'identity' => Str::random(10),
            'status' => Arr::random(ProductItemStatusesEnum::values()),
            'buy_price' => rand(3000, 20000),
            'sell_price' => rand(3000, 20000)
        ];
    }
}
