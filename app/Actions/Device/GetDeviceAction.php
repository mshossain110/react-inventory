<?php
namespace App\Actions\Device;

use App\Models\Device;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class GetDeviceAction
{
    public static function execute(): LengthAwarePaginator
    {
        return Device::with(['deviceModel'])->paginate();
    }
}