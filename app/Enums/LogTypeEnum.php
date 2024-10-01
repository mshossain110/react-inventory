<?php

namespace App\Enums;

enum LogTypeEnum: string
{
    //product actions (ACTION_SOURCE)
    case NEW_PRODUCT = 'NEW PRODUCT';
    case SOLD_PRODUCT = 'SOLD PRODUCT';
    case BAD_PRODUCT = 'BAD PRODUCT';
}
