import { Productitem, productTable } from "@/types";
import SellAction from "./SellAction";
import CourierAction from "./CourierAction";
import BadAction from "./BadAction";
import { Link } from "@nextui-org/react";
import TransferAction from "./TransferAction";
import ReturnAction from "./ReturnAction";
import ReplaceAction from "./ReplaceAction";

export default function Actions({ item }: { item: productTable }) {
    return (
        <div className="relative flex items-center gap-2">
            <SellAction item={item} />
            <CourierAction item={item} />
            <BadAction item={item} />
            <TransferAction item={item}/>
            <ReturnAction item={item} />
            <ReplaceAction item={item} />
        </div>
    );
}
