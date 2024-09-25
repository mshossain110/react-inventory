import { Productitem } from "@/types";
import SellAction from "./SellAction";
import CourierAction from "./CourierAction";
import BadAction from "./CourierAction";
import { Link } from "@nextui-org/react";

export default function Actions({ item }: { item: Productitem }) {
    return (
        <div className="relative flex items-center gap-2">
            <SellAction />
            <CourierAction />
            <BadAction />
            <Link href="#" as="button"></Link>
            <Link href="#" as="button">
                Transfer
            </Link>
            <Link href="#" as="button">
                Replace
            </Link>
            <Link href="#" as="button">
                Transfer to other shop
            </Link>
        </div>
    );
}
