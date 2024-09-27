<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Company;
use App\Models\Product;
use App\Models\Warehouse;
use App\Models\ProductItem;
use Illuminate\Http\Request;
use App\Enums\ProductItemStatusesEnum;
use App\Http\Requests\StoreProductItemRequest;
use App\Http\Requests\UpdateProductItemRequest;
use Illuminate\Contracts\Database\Query\Builder;
use App\Actions\ProductActions\GetProductItemsAction;

class ProductItemController extends Controller
{
    public function current(Request $request)
    {
        $warehouses = [1];
        $statuses = [ProductItemStatusesEnum::AVAILAVLE, ProductItemStatusesEnum::BAD];
        $search = $request->get('search');

        $products = (new GetProductItemsAction())->statues($statuses)->warehouse($warehouses)->search($search)->get();

        return Inertia::render('ProductItem/Index', [
            'items' => $products
        ]);
    }
    public function available(Request $request)
    {
        $warehouses = Warehouse::select('id')->where('company_id', 1)->get()->unique()->toArray();
        $statuses = [ProductItemStatusesEnum::AVAILAVLE];
        $search = $request->get('search');

        $products = app(GetProductItemsAction::class)->statues($statuses)->warehouse($warehouses)->search($search)->get();

        return Inertia::render('ProductItem/Index', [
            'items' => $products
        ]);
    }
    public function courier(Request $request)
    {
        $warehouses = Warehouse::select('id')->where('company_id', 1)->get()->unique()->toArray();
        $statuses = [ProductItemStatusesEnum::COURIER];
        $search = $request->get('search');

        $products = app(GetProductItemsAction::class)->statues($statuses)->warehouse($warehouses)->search($search)->get();

        return Inertia::render('ProductItem/Index', [
            'items' => $products
        ]);
    }
    public function bad(Request $request)
    {
        $warehouses = Warehouse::select('id')->where('company_id', 1)->get()->unique()->toArray();
        $statuses = [ProductItemStatusesEnum::BAD];
        $search = $request->get('search');

        $products = app(GetProductItemsAction::class)->statues($statuses)->warehouse($warehouses)->search($search)->get();

        return Inertia::render('ProductItem/Index', [
            'items' => $products
        ]);
    }
    public function sold(Request $request)
    {
        $warehouses = Warehouse::select('id')->where('company_id', 1)->get()->unique()->toArray();
        $statuses = [ProductItemStatusesEnum::SOLD];
        $search = $request->get('search');

        $products = app(GetProductItemsAction::class)->statues($statuses)->warehouse($warehouses)->search($search)->get();

        return Inertia::render('ProductItem/Index', [
            'items' => $products
        ]);
    }
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
