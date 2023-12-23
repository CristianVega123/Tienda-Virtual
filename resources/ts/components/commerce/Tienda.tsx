import Layout from "../Layout/LayoutMain";
import { useStateUser } from "../../store/StateGlobalShop";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Navigate } from "react-router-dom";

export default function Tienda() {
    const {
        user_email,
        user_id,
        user_isValid,
        user_name,
        user_role,
        user_surname,
    } = useStateUser();
    const [Auth, setAuth] = useState<null | boolean>(null);

    useEffect(() => {
        /**
         * -------------- *
         * *Entendiendo como funciona el servicio de autenticación a través de cookies en laravel
         * -------------- *
         */
        const valid = async () => {
            try {
                //TODO: Miraré si guardaré estos datos (del usuario autentificado), si colocarlos dentro de un estado global y también guardarlo en el localstorage (información no sensible obviamente)
                let response = await axios.get("/api/user");
                
            } catch (error ) {
                if (error instanceof AxiosError) {
                    let status = error.response?.status;
                    if (status !== 200) {
                        setAuth(false);
                    }
               } 
            }
        };
        valid();
    }, []);

    /**
     * ? Manejando la autentificación, en esta verificación vemos si el estado es null y que sea igual a false
     * * Si entra a esta condición significaría que el usuario no esta autentificado.
     */

    if (Auth !== null && Auth === false) {
        return <Navigate to="/register/Log_in" />;
    }

    return (
        <>
            <Layout>
                <div>
                    <span>{String(Auth)}</span>
                    <span>{user_id}</span>
                    <span>{user_name}</span>
                    <span>{user_surname}</span>
                    <span>{user_email}</span>
                    <span>{user_isValid}</span>
                    <span>{user_role}</span>
                </div>
            </Layout>
        </>
    );
}
