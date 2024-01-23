import { useMemo, useContext } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
} from "@nextui-org/react";
import { AdminPageContext } from "./../../../Context/ContextAdminPage";


const columns = [
    {
        key: "prod_id",
        label: "Product Id",
    },
    {
        key: "prod_name",
        label: "Product name",
    },
    {
        key: "prod_price",
        label: "Product price",
    },
    {
        key: "prod_units",
        label: "Product units",
    },
    {
        key: "prod_description",
        label: "Product description",
    },
    {
        key: "p_action",
        label: "Product units",
    },
];

export default function ShowProducts() {
    const { products } = useContext(AdminPageContext);

    return (
        <>
            <Table aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.key}>
                            {column.label}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={products}>
                    {(item: any) => {
                        let index = item.prod_id
                        return (
                            <TableRow key={index}>
                                {(columnKey) => {
                                    return (
                                        <TableCell>
                                            {getKeyValue(item, columnKey)}
                                        </TableCell>
                                    );
                                }}
                            </TableRow>
                        );
                    }}
                </TableBody>
            </Table>
        </>
    );
}
