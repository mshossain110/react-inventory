<?php
namespace App\Actions\ProductActions;

use App\Enums\LogTypeEnum;
use App\Enums\ProductItemStatusesEnum;
use App\Models\ProductItem;
use Illuminate\Support\Facades\DB;

class TransferProductItemAction
{
    public function excute(ProductItem $productItem, array $data)
    {
        DB::beginTransaction();
        try {

            $preWarehouse = $productItem->warehouse->name;
            $productItem->warehouse_id = $data['warehouse'];

            $productItem->save();
            $productItem->refresh();

            $productData = $productItem->only([
                'product_id',
                'provider_id',
                'warehouse_id',
                'identity',
            ]);
            $log = $productData;
            $log['name'] = $productItem->product->name;
            $log['previous'] = $preWarehouse;
            $log['new'] = $productItem->warehouse->name;
            $log['title'] = "Transfer warehouse from " . $preWarehouse . ' to ' .$productItem->warehouse->name;

            $productItem->logs()->create([
                'log_type' => LogTypeEnum::TRANSFER_PRODUCT,
                'log' => $log
            ]);

            DB::commit();
        } catch (\Throwable $th) {
            throw $th;
            DB::rollBack();
        }
    }
}