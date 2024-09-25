<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\ProductItem;
use Illuminate\Http\Request;
use App\Enums\ProductItemStatusesEnum;
use App\Http\Requests\StoreProductItemRequest;
use App\Http\Requests\UpdateProductItemRequest;
use Illuminate\Contracts\Database\Query\Builder;

class ProductItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $warehouseId = $request->get('warehouse_id');
        $user = $request->user();

        $items = ProductItem::with(['product', 'product.category'])
            ->where('warehouse_id', $warehouseId ?: 1)
            ->whereIn('status', [ProductItemStatusesEnum::AVAILAVLE, ProductItemStatusesEnum::BAD, ProductItemStatusesEnum::COURIER])
            ->get();

        return Inertia::render('ProductItem/Index', [
            'items' => $items
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductItemRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductItem $productItem)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProductItem $productItem)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductItemRequest $request, ProductItem $productItem)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProductItem $productItem)
    {
        //
    }
}
