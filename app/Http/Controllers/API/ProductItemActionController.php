<?php

namespace App\Http\Controllers\API;

use App\Models\ProductItem;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\ProductActions\BadProductItemAction;
use App\Actions\ProductActions\SoldProductItemAction;
use App\Actions\ProductActions\ReturnProductItemAction;
use App\Actions\ProductActions\CourierProductItemAction;
use App\Actions\ProductActions\TransferProductItemAction;

class ProductItemActionController extends Controller
{
    public function sold(ProductItem $productItem, Request $request)
    {
        $request->validate([
            'sell_price' => 'required|numeric',
            'profit' => 'required|numeric'
        ]);

        $data = $request->all();

        app(SoldProductItemAction::class)->excute($productItem, $data);
    }

    public function courier(ProductItem $productItem, Request $request)
    {
        $request->validate([
            'sell_price' => 'required|numeric',
            'profit' => 'required|numeric'
        ]);

        $data = $request->all();

        app(CourierProductItemAction::class)->excute($productItem, $data);
    }

    public function bad(ProductItem $productItem, Request $request)
    {
        $request->validate([
            'note' => 'required'
        ]);

        $data = $request->all();

        app(BadProductItemAction::class)->excute($productItem, $data);
    }

    public function transfer(ProductItem $productItem, Request $request)
    {
        $request->validate([
            'warehouse' => 'required|exists:warehouses,id'
        ]);

        $data = $request->all();

        app(TransferProductItemAction::class)->excute($productItem, $data);
    }

    public function return(ProductItem $productItem, Request $request)
    {
        $request->validate([
            'note' => 'required',
            'amount' => 'required|numeric',
        ]);

        $data = $request->all();

        app(ReturnProductItemAction::class)->excute($productItem, $data);
    }
}
