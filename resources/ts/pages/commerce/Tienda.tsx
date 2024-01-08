import { useStateUser } from "../../store/StateGlobalShop";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { getUser } from "../../services/ServicesGetUser";
import Loading from "../../components/Loading";
import Layout from "../Layout/LayoutMain";

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
    const [Load, setLoad] = useState(true);

    useEffect(() => {
        /**
         * -------------- *
         * *Entendiendo como funciona el servicio de autenticación a través de cookies en laravel
         * -------------- *
         */

        //TODO Todas las llamadas de apis lo estoy colocando en una función aparte para poder contorlar sus errores.

        getUser(setLoad, setAuth);
    }, []);

    /**
     * ? Manejando la autentificación, en esta verificación vemos si el estado es null y que sea igual a false
     * * Si entra a esta condición significaría que el usuario no esta autentificado.
     */

    if (Auth !== null && Auth === false) {
        return <Navigate to="/register/Log_in" />;
    }

    if (Load) {
        return <Loading /> 
    }

    /**
     * ? Funcion para logout al usuario
     * ! Prueba
     */

    const log_out = async () => {
        try {
            let data = await axios.post(
                `${import.meta.env.VITE_APP_URL}/api/logout`,
                undefined
            );
            console.log(data);

            setAuth(false);
        } catch (error) {}
        // if (data.status === 200) {
        //    setAuth(false)
        // }
    };

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
                <button onClick={log_out}>Salir</button>
            </div>

        </Layout>
        </>
    );
}
