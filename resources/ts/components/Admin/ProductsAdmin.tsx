import { Accordion, AccordionItem } from "@nextui-org/react";
import AddProduct from "./Product/AddProduct";
import ShowProducts from "./Product/ShowProducts";

/**
 * ? Creación del componente para crear productos
 */
function ProductsAdmin() {
    return (
        <main className="flex justify-center ">
            <Accordion variant="splitted" defaultExpandedKeys={["1"]}>
                <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Add Products"
                >
                    <AddProduct />
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Show Productos"
                >
                    <ShowProducts />
                </AccordionItem>

                <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Accordion 3"
                >
                    "tata"
                </AccordionItem>
            </Accordion>
        </main>
    );
}

export default ProductsAdmin;
