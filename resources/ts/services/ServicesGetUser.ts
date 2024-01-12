import axios, { AxiosError, AxiosResponse } from "axios";
import { StateUser } from "../types/InterfaceState";
import { Dispatch, SetStateAction } from "react";

const url_server = import.meta.env.VITE_APP_URL;
const getUserUrl = "\\api\\user";

//TODO Implementar una forma para que se guarde el estado a la par de que se haga esta consulta dentro del programa.

/**
 *
 * @param setLoad Función para cmabiar la pantalla de carga
 * @param setAuth Funcion del estado para ver si un usuario esta autentificado
 * @returns void
 */

export const getUser = async (setLoad: Dispatch<SetStateAction<boolean>>, setAuth: Dispatch<SetStateAction<boolean | null>>) => {
    try {
        const user: AxiosResponse<StateUser> = await axios.get(
            `${url_server}${getUserUrl}`
        );


        //TODO esta función también se usará para poder establecer un estado global

        setLoad(false);
        setAuth(true)

        return user;
    } catch (error) {
        if (error instanceof AxiosError) {
            let status = error.response?.status;

            if (status !== 200) {
                setAuth(false);
                setLoad(false);
            }
        }
    }
};
