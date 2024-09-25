<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            [
                'category_id'      => 1,
                'name'       => 'vivo y93',
                'slug'           => 'vivo_y93',
                'quantity'          => 0,
                'buy_price'     => 4700,
                'sell_price'       => 5500,
            ],
            [
                'category_id'      => 1,
                'name'       => 'vivo y85',
                'slug'           => 'vivo_y85',
                'quantity'          => 0,
                'buy_price'     => 4700,
                'sell_price'       => 5800,
            ],
            [
                'category_id'      => 1,
                'name'       => 'vivo y95',
                'slug'           => 'vivo_y95',
                'quantity'          => 0,
                'buy_price'     => 4900,
                'sell_price'       => 6500,
            ],
            [
                'category_id'      => 1,
                'name'       => 'vivo y97',
                'slug'           => 'vivo_y97',
                'quantity'          => 0,
                'buy_price'     => 4900,
                'sell_price'       => 6000,
            ],
            [
                'category_id'      => 1,
                'name'       => 'vivo y17',
                'slug'           => 'vivo_y17',
                'quantity'          => 0,
                'buy_price'     => 6200,
                'sell_price'       => 7500,
            ],
            [
                'category_id'      => 1,
                'name'       => 'vivo y11',
                'slug'           => 'vivo_y11',
                'quantity'          => 0,
                'buy_price'     => 5700,
                'sell_price'       => 6500,
            ],
            [
                'category_id'      => 1,
                'name'       => 'vivo y19',
                'slug'           => 'vivo_y19',
                'quantity'          => 0,
                'buy_price'     => 6600,
                'sell_price'       => 8500,
            ],
            [
                'category_id'      => 1,
                'name'       => 'vivo s1pro',
                'slug'           => 'vivo_s1pro',
                'quantity'          => 0,
                'buy_price'     => 7800,
                'sell_price'       => 9500,
            ],
            [
                'category_id'      => 1,
                'name'       => 'vivo s1',
                'slug'           => 'vivo_s1',
                'quantity'          => 0,
                'buy_price'     => 8700,
                'sell_price'       => 9500,
            ],
            [
                'category_id'      => 1,
                'name'       => 'Oppo A3s',
                'slug'           => 'oppo_a3s',
                'quantity'          => 0,
                'buy_price'     => 4900,
                'sell_price'       => 6500,
            ],
            [
                'category_id'      => 1,
                'name'       => 'Oppo A5s',
                'slug'           => 'oppo_a5s',
                'quantity'          => 0,
                'buy_price'     => 5200,
                'sell_price'       => 7500,
            ],
        ];

        foreach ($items as $key => $item) {
            Product::create($item);
        }
    }
}
