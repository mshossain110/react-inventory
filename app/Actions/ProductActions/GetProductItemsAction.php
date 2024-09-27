<?php
namespace App\Actions\ProductActions;

use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\Builder;

class GetProductItemsAction
{
    protected Builder $productQuery;

    public function __construct() {
        $this->productQuery = DB::table('products')
            ->join('product_items', 'product_items.product_id', '=', 'products.id')
            ->select(['products.*', 'product_items.*']);
    }
    
    public function statues(array $statues)
    {
        $this->productQuery = $this->productQuery->whereIn('product_items.status', $statues);

        return $this;
    }

    public function search(?string $search)
    {
        if (empty($search)) {
            return $this;
        }

        $this->productQuery = $this->productQuery->where(function(Builder $query) use ($search) {
            $query->where('products.name', 'like', '%'. $search . '%')
                ->orWhere('products.SKU', 'like', '%'. $search . '%')
                ->orWhere('product_items.identity', 'like', '%'. $search . '%');
        });

        return $this;
    }

    public function warehouse(array $warehouses)
    {
        $this->productQuery = $this->productQuery->whereIn('product_items.warehouse_id', $warehouses);

        return $this;
    }

    public function soldAt($dateForm, $dateTo)
    {
        $this->productQuery = $this->productQuery->whereBetween('product_items.sold_at', [$dateForm, $dateTo]);

        return $this;
    }

    public function get(): Collection
    {
        return $this->productQuery->get();
    }

}