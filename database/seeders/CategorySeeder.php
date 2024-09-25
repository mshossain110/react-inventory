<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            [
                'name'      => 'Mobile',
                'slug'       => 'mobile',
            ],
            [
                'name'      => 'Laptop',
                'slug'       => 'laptop',
            ],
            [
                'name'      => 'Accessories',
                'slug'       => 'accessories',
            ]
        ];

        foreach ($items as $key => $item) {
            $user = Category::create($item);
        }
    }
}
