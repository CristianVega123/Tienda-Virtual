import axios, { AxiosError, AxiosResponse } from "axios";
import { StateUser } from "../types/InterfaceState";

const url_server = import.meta.env.VITE_APP_URL;
const SingUpURL = "\\api\\create_client";


/**
 * 
 * @param data <FormData> Este valor tiene todo lo que se manda del formulario
 * @returns 
 */
export const create_user = async (
    data: FormData
): Promise<AxiosResponse<StateUser, any> | AxiosError<unknown, any>>  => {
    const user = await axios.post(`${url_server}${SingUpURL}`, data);
    console.log(user);

    return user 
};
