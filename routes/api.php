<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CompanyController;
use App\Http\Controllers\API\WarehouseController;

Route::middleware([])->group(function() {
    Route::get('companies', [CompanyController::class, 'index'])->name('company.index');
    Route::get('warehouses', [WarehouseController::class, 'index'])->name('warehouse.index');
});