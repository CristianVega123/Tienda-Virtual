import { useState, useContext } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
    Dropdown,
    DropdownTrigger,
    Button,
    DropdownMenu,
    DropdownItem,
    useDisclosure,
    Modal,
    ModalFooter,
    ModalBody,
    ModalHeader,
    ModalContent,
    Input,
    Spinner,
} from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";
import { AdminPageContext } from "./../../../Context/ContextAdminPage";
import { ModalProductDataAction } from "./../../../types/typesAdmins";
import { delete_product_admin } from "../../../services/ServicesAdmin";
import { show_product } from "../../../services/SericesUsers";

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
        key: "category_name",
        label: "Product Category",
    },
    {
        key: "p_action",
        label: "Product Actions",
    },
];

export default function ShowProducts() {
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const { setProducts, products } = useContext(AdminPageContext);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalDataAction, setmodalDataAction] =
        useState<ModalProductDataAction>({} as ModalProductDataAction);

    let list = useAsyncList({
        async load({ signal, cursor }) {
            
            // If no cursor is available, then we're loading the first page.
            if (cursor) {
                setIsLoading(false);
            }
            // Otherwise, the cursor is the next URL to load, as returned from the previous page.
            const res = await show_product(signal, cursor);
            let json = await res.json();
            if (res) {
                setIsLoading(false)           
                if (!(json.length === products.length) ) {
                    setProducts(json)
                } else {
                    console.log("same length");
                    
                }
            }
            
            setHasMore(json.next !== null);

            return {
                items: json,
                cursor: json.next,
            };
        },
    });

    const [loaderRef, scrollerRef] = useInfiniteScroll({
        hasMore,
        onLoadMore: list.loadMore,
    });

    return (
        <>
            <Table
                layout="auto"
                isHeaderSticky
                aria-label="Example table with infinite pagination"
                baseRef={scrollerRef}
                classNames={{
                    base: "max-h-[520px] overflow-scroll",
                    table: "min-h-[400px]",
                }}
            >
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.key}>
                            {column.label}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody
                    items={list.items}
                    isLoading={isLoading}
                    loadingContent={<Spinner color="white" />}
                >
                    {(item: any) => {
                        // console.log(item);
                        let index = item.prod_id;
                        console.log(index);

                        return (
                            <TableRow key={index}>
                                {(columnKey) => {

                                    if (columnKey === "p_action") {
                                        return (
                                            <TableCell>
                                                <Dropdown>
                                                    <DropdownTrigger>
                                                        <Button variant="bordered">
                                                            Open Menu
                                                        </Button>
                                                    </DropdownTrigger>
                                                    <DropdownMenu aria-label="Action event example">
                                                        <DropdownItem
                                                            key="new"
                                                            onPress={() => {
                                                                setmodalDataAction(
                                                                    {
                                                                        action: "UPDATE",
                                                                        product:
                                                                            item,
                                                                    }
                                                                );
                                                                onOpen();
                                                            }}
                                                        >
                                                            Update
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            key="copy"
                                                            className="text-danger"
                                                            color="danger"
                                                            onPress={() => {
                                                                delete_product_admin(
                                                                    item.prod_id
                                                                );
                                                                list.reload()
                                                            }}
                                                        >
                                                            Delete
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </TableCell>
                                        );
                                    }

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

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {modalDataAction.action}
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    label="Product id"
                                    isDisabled
                                    defaultValue={`${modalDataAction.product.prod_id}`}
                                />
                                <Input
                                    label="Product Name"
                                    defaultValue={
                                        modalDataAction.product.prod_name
                                    }
                                />
                                <Input
                                    label="Price"
                                    defaultValue={`${modalDataAction.product.prod_price}`}
                                />
                                <Input
                                    label="Units"
                                    defaultValue={`${modalDataAction.product.prod_units}`}
                                />
                                <Input
                                    label="Description"
                                    defaultValue={`${modalDataAction.product.prod_description}`}
                                />
                                <Input
                                    label="Category"
                                    defaultValue={`${modalDataAction.product.category_name}`}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
