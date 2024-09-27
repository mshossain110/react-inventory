import { Productitem } from "@/types";
import SellAction from "./SellAction";
import CourierAction from "./CourierAction";
import BadAction from "./BadAction";
import { Link } from "@nextui-org/react";
import TransferAction from "./TransferAction";
import ReturnAction from "./ReturnAction";
import ReplaceAction from "./ReplaceAction";

export default function Actions({ item }: { item: Productitem }) {
    return (
        <div className="relative flex items-center gap-2">
            <SellAction />
            <CourierAction />
            <BadAction />
            <TransferAction />
            <ReturnAction />
            <ReplaceAction />
        </div>
    );
}
