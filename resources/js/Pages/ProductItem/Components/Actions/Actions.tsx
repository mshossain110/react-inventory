"use strict";
import { Productitem, productTable, ProductSatus } from "@/types";
import SellAction from "./SellAction";
import CourierAction from "./CourierAction";
import BadAction from "./BadAction";
import TransferAction from "./TransferAction";
import ReturnAction from "./ReturnAction";
import ReplaceAction from "./ReplaceAction";

export default function Actions({ item }: { item: productTable }) {
    return (
        <div className="relative flex items-center gap-2">
            { item.status == 'available' && 
                <>
                    <SellAction item={item} />
                    <CourierAction item={item} />
                    <BadAction item={item} />
                    <TransferAction item={item} />
                </>
            }

            {
                item.status == 'sold' && 
                <>
                    <ReturnAction item={item} />
                </>
            }
            
            
            <ReplaceAction item={item} />
        </div>
    );
}
