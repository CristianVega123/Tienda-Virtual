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
        </main>
    );
}

export default ProductsAdmin;
