<?php

namespace App\Models;

use App\Enums\ProductItemStatusesEnum;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @property int $id
 * @property int $product_id
 * @property int $provider_id
 * @property int $warehouse_id
 * @property string $identity
 * @property int $status
 * @property int $buy_price
 * @property int $sell_price
 * @property int $profit
 * @property Carbon $sold_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class ProductItem extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'product_id',
        'provider_id',
        'warehouse_id',
        'identity',
        'status',
        'profit',
        'buy_price',
        'sell_price',
        'sold_at'
    ];

    /**
     * The attributes casts.
     *
     * @var array<int, string>
     */
    protected $casts = [
        'sold_at' => 'datetime',
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

    public function logs(): MorphMany
    {
        return $this->morphMany(Applog::class, 'logable');
    }

    public function transections(): MorphMany
    {
        return $this->morphMany(Transection::class, 'transectable');
    }
}
