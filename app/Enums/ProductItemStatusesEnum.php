<?php

namespace App\Enums;

use App\Enums\Traits\EnumToArray;

enum ProductItemStatusesEnum: string
{
    use EnumToArray;

    case AVAILAVLE = 'available';
    case COURIER = 'courier';
    case BAD = 'bad';
    case SOLD = 'sold';
    case SERVICE = 'service';
    case PROVIDER = 'provider';
}