import axios, { AxiosResponse } from "axios";

const url_server = import.meta.env.VITE_APP_URL;
const SingUpURL = "\\api\\validation";


/**
 * 
 * @param accept <number> Valor que se manda para ver si quiere verificar su email
 * @returns 
 */
export const login = async (
    accept: "0" | "1"
): Promise<AxiosResponse<any>> => {
    return axios.post(`${url_server}${SingUpURL}`, {
        accept: accept
    });
};
