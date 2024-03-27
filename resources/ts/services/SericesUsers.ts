import axios from "axios";

const url_server = import.meta.env.VITE_APP_URL;
const apiUsersProduct = "\\api\\users\\products";

/**
 * ! Este servicio puede ser usado tanto como para admins como para usuarios normales
 */
export const show_product = async (signal?: AbortSignal, cursor ?: string): Promise<Response> => {
    const products = await fetch(
        cursor || `${url_server}${apiUsersProduct}`,
        {
            signal,
        }
    );

    return products;
};
