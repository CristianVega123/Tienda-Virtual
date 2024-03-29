import React, { useRef } from "react";
// import { store_admin } from "@/services/ServicesAdmin";
import { store_admin } from "../../../services/ServicesAdmin";
import { Textarea, Input } from "@nextui-org/react";


function AddProduct() {
    const $form = useRef<HTMLFormElement>(null);

    const manage_informacion_form = () => {
        if ($form.current) {
            const formData = new FormData($form.current);
            store_admin(formData);
        }
    };

    return (
        <form
            ref={$form}
            onSubmit={(event) => {
                event.preventDefault();
                manage_informacion_form();

                $form.current?.reset();
            }}
            className="mt-6 md:flex flex-wrap md:w-[90%] md:justify-between"
        >
            <article className="md:flex md:flex-col   gap-5">
                <div className="md:flex md:w-full md:gap-6 justify-between items-baseline">
                    <span className="text-[18px]">Nombre del producto</span>
                    <Input type="text" label="Nombre" name="product_name" placeholder="Coloque el nombre del producto" />
                </div>
                <div className="md:flex md:w-full md:gap-6 md:justify-between">
                    <span className="text-[20px]"> Precio del Producto</span>
                    <Input type="number" label="Precio"  name="product_price" step={".01"} placeholder="Coloque el precio de producto" />
                    
                </div>
                <div className="md:flex md:w-full md:gap-6 md:justify-between">
                    <span className="text-[20px]">Cantidad del Producto</span>
                    <Input type="text" label="Cantidad" name="product_units" placeholder="Coloque la cantidad de producto" />

                </div>
                <div className="md:flex md:w-full md:gap-6">
                    <span className="text-[20px]">
                        Descripción del Producto
                    </span>
                    <Textarea
                        label="Description"
                        placeholder="Enter your description"
                        name="product_description"
                        className="max-w-xs"
                    />
                </div>
                <div className="md:flex md:w-full md:gap-6 md:justify-between">
                    <span className="text-[20px]">Categoria</span>
                    <select
                        name="category_id"
                        id=""
                        className="rounded-md p-2 bg-[#23262f] text-white"
                    >
                        <option value="1">Technology</option>
                        <option value="2">Smartphone</option>
                        <option value="3">Clothes</option>
                        <option value="4">Televisión</option>
                    </select>
                </div>
                <div>
                    <input
                        className="rounded-md bg-primary-color p-2 px-4"
                        type="submit"
                    />
                </div>
            </article>
            <article className="">
                <input type="file" name="product_image" id="" />
            </article>
        </form>
    );
}

export default AddProduct;
