<?php

namespace App\Models;

use App\Enums\ProductItemStatusesEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $product_id
 * @property int $provider_id
 * @property int $warehouse_id
 * @property string $identity
 * @property int $status
 * @property int $buy_price
 * @property int $sell_price
 * @property Carbon $sold_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class ProductItem extends Model
{
    use HasFactory;

    /**
     * The attributes casts.
     *
     * @var array<int, string>
     */
    protected $casts = [
        'status' => ProductItemStatusesEnum::class
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function provider(): BelongsTo
    {
        return $this->belongsTo(Provider::class);
    }

    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }
}
