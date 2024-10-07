<?php
namespace App\Actions\ProductActions;

use App\Enums\LogTypeEnum;
use App\Enums\ProductItemStatusesEnum;
use App\Models\ProductItem;
use Illuminate\Support\Facades\DB;

class ReturnProductItemAction
{
    public function excute(ProductItem $productItem, array $data)
    {
        DB::beginTransaction();
        try {

            $title = __(":name  was return form customer in :wname", [
                'name' => $productItem->product->name,
                'wname' => $productItem->warehouse->name
            ]);

            $productItem->buy_price = $data['amount'];
            $productItem->sell_price = 0;
            $productItem->profit = 0;
            $productItem->sold_at = null;
            $productItem->status = ProductItemStatusesEnum::AVAILAVLE;

            $productItem->save();

            $productItem->transections()->create([
                'title' => $title,
                'debit' => $data['amount']
            ]);

            $productData = $productItem->only([
                'product_id',
                'provider_id',
                'warehouse_id',
                'identity',
            ]);
            $log = $productData;
            $log['name'] = $productItem->product->name;
            $log['title'] = $title;
            $log['given_amount'] = $data['amount']; 
            $log['note'] = $data['note'];

            $productItem->logs()->create([
                'log_type' => LogTypeEnum::RETURN_PRODUCT,
                'log' => $log
            ]);

            DB::commit();
        } catch (\Throwable $th) {
            throw $th;
            DB::rollBack();
        }
    }
}