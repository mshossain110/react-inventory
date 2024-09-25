<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $device_id
 * @property int $warehouse_id
 * @property int $sell_price
 * @property int $profit
 * @property string $sell_type
 * @property string $invoice
 * @property string $note
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Sale extends Model
{
    use HasFactory;

    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function device(): BelongsTo
    {
        return $this->belongsTo(Device::class);
    }
}
