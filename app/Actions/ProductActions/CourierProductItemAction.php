<?php
namespace App\Actions\ProductActions;

use App\Enums\LogTypeEnum;
use App\Enums\ProductItemStatusesEnum;
use App\Models\ProductItem;
use Illuminate\Support\Facades\DB;

class CourierProductItemAction
{
    public function excute(ProductItem $productItem, array $data)
    {
        $productItem->loadMissing(['product', 'warehouse']);

        DB::beginTransaction();
        try {

            $title = __(":name  was couriered form :wname", [
                'name' => $productItem->product->name,
                'wname' => $productItem->warehouse->name
            ]);

            $productItem->sell_price = $data['sell_price'];
            $productItem->status = ProductItemStatusesEnum::COURIER;
            $productItem->profit = $data['profit'];
            $productItem->sold_at = now();

            $productItem->save();

            $productItem->transections()->create([
                'title' => $title,
                'credit' => $data['paid']
            ]);

            $productData = $productItem->only([
                'product_id',
                'provider_id',
                'warehouse_id',
                'identity',
                'buy_price',
                'profit',
                'sold_at',
                'sell_price'
            ]);
            $log = $productData;
            $log['name'] = $productItem->product->name;
            $log['warehouse_name'] = $productItem->warehouse->name;
            $log['title'] = $title;
            $log['invoice'] = $data['invoice'];
            $log['paid'] = $data['paid'];
            $log['courier_number'] = $data['courier_number'];

            $productItem->logs()->create([
                'log_type' => LogTypeEnum::SOLD_PRODUCT,
                'log' => $log
            ]);

            DB::commit();
        } catch (\Throwable $th) {
            throw $th;
            DB::rollBack();
        }
    }
}