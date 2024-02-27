import axios from "axios";

let url_server = import.meta.env.VITE_APP_URL;
let apiStoreProductURL = "\\api\\admin\\store_products";
let apiDeleteProductURL = "\\api\\admin\\delete_products";

export const store_admin = async (form: FormData) => {
    let data = await axios.post(`${url_server}${apiStoreProductURL}`, form);
    console.log(data);
};

export const delete_product_admin = async (id: number) => {
    axios.delete(`${url_server}${apiDeleteProductURL}\\${id}`);
};
