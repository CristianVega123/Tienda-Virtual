import axios from "axios";

const url_server = import.meta.env.VITE_APP_URL;
const apiUsersProduct = "\\api\\users\\products";

/**
 * ! Este servicio puede ser usado tanto como para admins como para usuarios normales
 */
export const show_product = async () => {
    const products = await axios.get(`${url_server}${apiUsersProduct}`);

    return products
};
