import { ModalAction } from "./Enums";

export type ProductsData = {
    prod_id: number;
    prod_name: string;
    prod_price: number;
    prod_units: number;
    prod_description: string;
    category_name: string;
    prod_url_img: string;
};

export type ModalProductDataAction = {
    action: keyof typeof ModalAction;
    product: ProductsData;
};
