<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProductItemActionController;
use App\Http\Controllers\ProductItemController;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('companies', CompanyController::class);
    Route::get('product-items/current', [ProductItemController::class, 'current'])->name('product-item.current');
    Route::get('product-items/available', [ProductItemController::class, 'available'])->name('product-item.available');
    Route::get('product-items/courier', [ProductItemController::class, 'courier'])->name('product-item.courier');
    Route::get('product-items/bad', [ProductItemController::class, 'bad'])->name('product-item.bad');
    Route::get('product-items/sold', [ProductItemController::class, 'sold'])->name('product-item.sold');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
