<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\CompanyResource;
use App\Models\Company;

class CompanyController extends Controller
{
    public function index()
    {
        $company = 1;
        $warehouse = 1;
        $companies = Company::with([
            'warehouses' => function($q) use($warehouse){
                    $q->where('id', $warehouse);
                }
            ])
            ->where('id', $company)->get();
        return CompanyResource::collection($companies);
    }
}