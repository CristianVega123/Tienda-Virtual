import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import AddProduct from "./Product/AddProduct";
import ShowProducts from "./Product/ShowProducts";
import FindProduct from "./Product/FindProduct";

/**
 * ? Creación del componente para crear productos
 */
function ProductsAdmin() {
    return (
        <main className="flex justify-center flex-wrap gap-24">
            <AddProduct />
            <Divider></Divider>
            <ShowProducts />
            <Divider></Divider>
            <FindProduct />
            {/* <Accordion variant="splitted" defaultExpandedKeys={["1"]}>
                <AccordionItem key="1" title="Add Products" className="">
                </AccordionItem>
                <AccordionItem key="2" title="Show Products">
                </AccordionItem>

                <AccordionItem key="3" title="Find Products">
                </AccordionItem>
            </Accordion> */}
        </main>
    );
}

export default ProductsAdmin;
