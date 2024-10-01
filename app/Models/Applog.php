<?php

namespace App\Models;

use App\Enums\LogTypeEnum;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @property int $id
 * @property int $user_id
 * @property int $company_id
 * @property string $log_type
 * @property array $log
 * @property User $user
 * @property Company $company
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Applog extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'log',
        'log_type',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'log' => 'array',
            'log_type' => LogTypeEnum::class
        ];
    }

        /**
     * The "booted" method of the model.
     */
    protected static function booted(): void
    {
        static::creating(function (Applog $log) {
            $log->user_id = Auth::user()->id;
            $log->company_id = Auth::user()->company_id?: 1;
        });
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the parent commentable model
     */
    public function logable(): MorphTo
    {
        return $this->morphTo();
    }

}
