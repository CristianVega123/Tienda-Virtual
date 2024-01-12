import axios, { AxiosError, AxiosResponse } from "axios";
import { StateUser } from "../types/InterfaceState";
import React, { SetStateAction } from "react";

const url_server = import.meta.env.VITE_APP_URL;
const SingUpURL = "\\api\\create_client";
const LogInURL = "\\api\\login";



//TODO Devolver un array de errores para poder tratarlos o mostrarlo en la pantalla, posiblemente cree una clase para manejar los errores.


/**
 * 
 * @param data <FormData> Este valor tiene todo lo que se manda del formulario
 * @returns 
 */
export const sign_up = async (
    data: FormData
): Promise<AxiosResponse<StateUser, any> | AxiosError<unknown, any>>  => {
    const user = await axios.post(`${url_server}${SingUpURL}`, data);
    console.log(user);

    return user 
};

export const log_in =async (FormData:FormData, change_auth: React.Dispatch<SetStateAction<boolean | null>>) => {
   try {
     const logUser = await axios.post(`${url_server}${LogInURL}`, FormData);
     console.log(logUser);
     
     change_auth(true);
   } catch (error) {
    
   } 
}


export const log_out = async (change_auth: React.Dispatch<SetStateAction<boolean | null>>) => {
        try {
            let data = await axios.post(
                `${import.meta.env.VITE_APP_URL}/api/logout`,
                undefined
            );

            change_auth(false);
        } catch (error) {}
    };