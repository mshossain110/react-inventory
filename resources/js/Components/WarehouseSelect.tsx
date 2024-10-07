import { Company, Warehouse } from "@/types";
import { router } from "@inertiajs/react";
import {
    Select,
    SelectProps,
    SelectedItemProps,
    SelectItem,
    ListboxSection,
} from "@nextui-org/react";
import { useSessionStorage } from "@reactuses/core";
import axios from "axios";
import React, { EventHandler, useEffect, useMemo, useState } from "react";

export default function WarehouseSelect(
    {warehouse, setWarehouse}: { warehouse: number; setWarehouse: React.ChangeEventHandler<HTMLSelectElement>}
) {

    const [warehouses, setWarehouses] = useSessionStorage<Warehouse[]>('warehouses', []);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            console.log(warehouses)
            if (!warehouses?.length)
                {
                    axios.get("/api/warehouses")
                    .then((response) => setWarehouses(response.data.data))
                }
        }, 5000)

        return () => clearTimeout(timer);
        
    }, [])

    return (
        <Select
            isRequired
            label="Warehouse"
            placeholder="Select Warehouse"
            radius="none"
            value={warehouse}
            onChange={setWarehouse}
            items={warehouses ? warehouses : undefined}
        >
            {(wh) => <SelectItem key={wh.id}>{wh.name}</SelectItem> }
        </Select>
    );
}