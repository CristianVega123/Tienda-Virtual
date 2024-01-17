import React, { useRef } from "react";
import { store_admin } from "../../services/ServicesAdmin";

/**
 * ? Creación del componente para crear productos
 */
function ProductsAdmin() {
    const $form = useRef<HTMLFormElement>(null);

    const manage_informacion_form = () => {
        if ($form.current) {
            const formData = new FormData($form.current);

            store_admin(formData);
        }
    };

    return (
        <main className="flex justify-center">
            <form
                ref={$form}
                onSubmit={(event) => {
                    event.preventDefault();
                }}
                className="mt-6 md:flex md:gap-6 flex-wrap md:w-[90%] md:justify-between"
            >
                <article className="md:flex md:flex-col   gap-5">
                    <div className="md:flex md:w-full md:gap-6 justify-between items-baseline">
                        <span className="text-[20px]">Nombre del producto</span>
                        <input type="text" name="product_name" className="rounded-md p-2 bg-[#23262f]"/>
                    </div>
                    <div className="md:flex md:w-full md:gap-6 md:justify-between">
                        <span>Precio del Producto</span>
                        <input type="number" name="product_price" id="" />
                    </div>
                    <div className="md:flex md:w-full md:gap-6 md:justify-between">
                        <span>Cantidad del Producto</span>
                        <input type="number" name="product_units" id="" />
                    </div>
                    <div className="md:flex md:w-full md:gap-6">
                        <span>Descripción del Producto</span>
                        <input type="text" name="product_description" id="" />
                    </div>
                    <div className="md:flex md:w-full md:gap-6">
                        <span>Categoria</span>
                        <select name="category_id" id="" className="text-black">
                            <option value="1">Technology</option>
                            <option value="2">Smartphone</option>
                            <option value="3">Clothes</option>
                            <option value="4">Televisión</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            onClick={manage_informacion_form}
                        />
                    </div>
                </article>
                <article className="">
                    <input type="file" name="product_image" id="" />
                </article>
            </form>
        </main>
    );
}

export default ProductsAdmin;
