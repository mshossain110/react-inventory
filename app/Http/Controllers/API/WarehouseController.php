<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\CompanyResource;
use App\Http\Resources\WarehouseResource;
use App\Models\Company;
use App\Models\Warehouse;

class WarehouseController extends Controller
{
    public function index()
    {
        $warehouses = Warehouse::where('company_id', 1)->get();

        return WarehouseResource::collection($warehouses);
    }
}