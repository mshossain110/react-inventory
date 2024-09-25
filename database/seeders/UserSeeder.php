<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            [
                'firstname'      => 'admin',
                'lastname'       => null,
                'name'           => 'admin',
                'email'          => 'admin@admin.com',
                'password'       => '$2y$10$l4MghrLnKXTRUDlR07XQeesKHRIaAe7WzDf90g751BEf70AwnJ5m.', // password
                'remember_token' => Str::random(10),
                'email_verified_at' => now(),
            ],
        ];

        foreach ($items as $key => $item) {
            $user = User::create($item);
        }
    }
}
