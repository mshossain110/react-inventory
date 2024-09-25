<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Warehouse;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $companies = [
            'SITECH' => [
                'SITECH',
                'Advance Computer',
                'Shahajadi Telecom'
            ],
            'AK Telecom' => [
                'AK Telecom'
            ]
        ];

        foreach ($companies as $company => $warehouses) {
            $company = Company::create([
                'name' => $company,
            ]);

            foreach($warehouses as $warehouse) {
                Warehouse::create([
                    'name' => $warehouse,
                    'company_id' => $company->id
                ]);
            }
        }
    }
}
