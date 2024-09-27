import { Company, Warehouse } from "@/types";
import { router } from "@inertiajs/react";
import {
    Select,
    SelectProps,
    SelectedItemProps,
    SelectItem,
    ListboxSection,
} from "@nextui-org/react";
import axios from "axios";
import React, { EventHandler, useEffect, useState } from "react";

export default function WarehouseSelect({warehouse, setWarehouse}: { warehouse: number; setWarehouse: React.ChangeEventHandler<HTMLSelectElement>}) {
    const [warehouses, setWarehouses] = useState<Company[]>([]);
    useEffect(() => {
        axios
            .get("/api/warehouses")
            .then((response) => setWarehouses(response.data.data));
    });

    return (
        <Select
            isRequired
            label="Warehouse"
            placeholder="Select Warehouse"
            radius="none"
            value={warehouse}
            onChange={setWarehouse}
        >
            {warehouses.map((wh) => (
                <SelectItem key={wh.id}>{wh.name}</SelectItem>
            ))}
        </Select>
    );
}
