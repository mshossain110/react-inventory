<?php
namespace App\Actions\ProductActions;

use App\Enums\LogTypeEnum;
use App\Enums\ProductItemStatusesEnum;
use App\Models\ProductItem;
use Illuminate\Support\Facades\DB;

class BadProductItemAction
{
    public function excute(ProductItem $productItem, array $data)
    {
        DB::beginTransaction();
        try {

            $productItem->status = ProductItemStatusesEnum::BAD;

            $productItem->save();

            $productData = $productItem->only([
                'product_id',
                'provider_id',
                'warehouse_id',
                'identity',
            ]);
            $log = $productData;
            $log['name'] = $productItem->product->name;
            $log['title'] = "Mark as bad";
            $log['note'] = $data['note'];

            $productItem->logs()->create([
                'log_type' => LogTypeEnum::BAD_PRODUCT,
                'log' => $log
            ]);

            DB::commit();
        } catch (\Throwable $th) {
            throw $th;
            DB::rollBack();
        }
    }
}