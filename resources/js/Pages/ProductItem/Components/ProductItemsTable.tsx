import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User,
    Chip,
    Tooltip,
    getKeyValue,
} from "@nextui-org/react";
import { Productitem, productTable } from "@/types";
import Actions from "./Actions/Actions";

const statusColorMap = {
    sold: "success",
    bad: "danger",
    courier: "warning",
};

export default function ProductItemsTable({ items }: { items: productTable[] }) {
    const columns = [
        { name: "Model", uid: "name" },
        { name: "Buy Price", uid: "buy_price" },
        { name: "Status", uid: "status" },
        { name: "", uid: "actions" },
    ];
    const renderCell = React.useCallback<
        (item: productTable, columnKey: string | number) => any
    >((item, columnKey) => {
        const cellValue = item[columnKey];

        switch (columnKey) {
            case "name":
                return item.name;

            case "status":
                return (
                    <Chip
                        className="capitalize"
                        color={
                            item.status
                                ? statusColorMap[item.status]
                                : "primary"
                        }
                        size="sm"
                        variant="flat"
                    >
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <Actions item={item} />
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <Table isStriped aria-label="Product Item">
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn
                        key={column.uid}
                        align={column.uid === "actions" ? "center" : "start"}
                    >
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={items}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => (
                            <TableCell>{renderCell(item, columnKey)}</TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
