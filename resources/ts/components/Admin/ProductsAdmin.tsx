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

            store_admin(formData)
        }
    };

    return (
        <div>
            <form
                ref={$form}
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
                <section >
                    <div>
                        <span>Nombre del producto</span>
                        <input type="text" name="product_name" />
                    </div>
                    <div>
                        <span>Precio del Producto</span>
                        <input type="number" name="product_price" id="" />
                    </div>
                    <div>
                        <span>Cantidad del Producto</span>
                        <input type="number" name="product_units" id="" />
                    </div>
                    <div>
                        <span>Descripción del Producto</span>
                        <input type="text" name="product_description" id="" />
                    </div>
                    <div>
                        <span>Categoria</span>
                        <select name="category_id" id="" className="text-black">
                            <option value="1">Technology</option>
                            <option value="2">Smartphone</option>
                            <option value="3">Clothes</option>
                            <option value="4">Televisión</option>
                        </select>
                    </div>
                    <input type="file" name="product_image" id="" />
                    <input type="submit" onClick={manage_informacion_form} />
                </section>
            </form>
        </div>
    );
}

export default ProductsAdmin;
