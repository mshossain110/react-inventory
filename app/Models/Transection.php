<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @property int $id
 * @property string $title
 * @property string $transectable_type
 * @property int $transectable_id
 * @property int $debit
 * @property int $credit
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */

class Transection extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'credit',
        'debit',
    ];

    /**
     * The attributes casts.
     *
     * @var array<int, string>
     */
    protected $casts = [
        'sold_at' => 'datetime',
    ];

    /**
     * Get the parent commentable model
     */
    public function transectable(): MorphTo
    {
        return $this->morphTo();
    }
}
