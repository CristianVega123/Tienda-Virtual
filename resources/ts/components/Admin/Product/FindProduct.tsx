import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    getKeyValue,
    useDisclosure,
} from "@nextui-org/react";
import { useContext, useState } from "react";
import { AdminPageContext } from "../../../Context/ContextAdminPage";
import { ModalProductDataAction, ProductsData } from "../../../types/typesAdmins";
import { delete_product_admin } from "../../../services/ServicesAdmin";

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

function FindProduct() {
    const { products } = useContext(AdminPageContext);
    const [productsFind, setProductsFind] = useState<ProductsData[]>([]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalDataAction, setmodalDataAction] =
        useState<ModalProductDataAction>({} as ModalProductDataAction);

    const valueChange = (value: string) => {
        let valueFind = products.filter((product) =>
            product.prod_name.includes(value)
        );
        if (value === "" ) {
           setProductsFind([]) 
        } else {
            setProductsFind([...valueFind])
        }
    };

    return (
        <>
            <nav className="flex justify-end">
                <div className="w-[300px] ">
                    <Input
                        label="Products"
                        size="sm"
                        variant="faded"
                        onValueChange={valueChange}
                    />
                </div>
            </nav>
            <Table aria-label="Example static collection table">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.key}>
                            {column.label}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={productsFind}>
                    {productsFind.length === 0 ? (
                        <TableRow key="1">
                            <TableCell>{null}</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>{null}</TableCell>
                        </TableRow>
                    ) : (
                        (item) => (
                            <TableRow key={item.prod_id}>
                                {(columnKey)=> {
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

                                                                let newproduct = products.filter(product => product.prod_id !== item.prod_id)

                                                                    console.log(newproduct);
                                                                    
                                                                // setProducts(newproduct)
                                                            }}
                                                        >
                                                            Delete
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </TableCell>
                                        );
                                    }

                                return (<TableCell>{getKeyValue(item, columnKey)}</TableCell>)} }
                            </TableRow>
                        )
                    )}
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

export default FindProduct;
