<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CompanyController;
use App\Http\Controllers\API\WarehouseController;
use App\Http\Controllers\API\ProductItemActionController;

Route::middleware(['auth:sanctum'])->name('api.')->group(function() {
    Route::get('companies', [CompanyController::class, 'index'])->name('company.index');
    Route::get('warehouses', [WarehouseController::class, 'index'])->name('warehouse.index');

    Route::put('product-item/{productItem:id}/sold', [ProductItemActionController::class, 'sold'])->name('product-item.actions.sold');
    Route::put('product-item/{productItem:id}/bad', [ProductItemActionController::class, 'bad'])->name('product-item.actions.bad');
    Route::put('product-item/{productItem:id}/courier', [ProductItemActionController::class, 'courier'])->name('product-item.actions.courier');
    Route::put('product-item/{productItem:id}/transfer', [ProductItemActionController::class, 'transfer'])->name('product-item.actions.transfer');
});