import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../../services/ServicesGetUser";
import Loading from "../../components/Loading";
import { RoleUser } from "../../types/Enums";
import AdminPage from "./Admin/AdminPage";
import CustomerPage from "./Customer/CustomerPage";
import { ContextAdminPage } from "../../Context/ContextAdminPage";
import LayoutAdmin from "../../components/Layout/LayoutAdmin";

export default function Tienda() {
    const [Auth, setAuth] = useState<null | boolean>(null);
    const [Role, setRole] = useState("");
    const [Load, setLoad] = useState(true);

    useEffect(() => {
        /**
         * -------------- *
         * *Entendiendo como funciona el servicio de autenticación a través de cookies en laravel
         * -------------- *
         */

        //TODO Todas las llamadas de apis lo estoy colocando en una función aparte para poder contorlar sus errores.

        getUser(setLoad, setAuth).then((user) => {
            if (user) {
                setRole(user.data.user_role);
            }
        });
    }, []);

    /**
     * ? Manejando la autentificación, en esta verificación vemos si el estado es null y que sea igual a false
     * * Si entra a esta condición significaría que el usuario no esta autentificado.
     */

    if (Auth !== null && Auth === false) {
        return <Navigate to="/register/Log_in" />;
    }

    if (Load) {
        return <Loading />;
    }

    return (
        <>
                    {Role === RoleUser.ADMIN ? <AdminPage changeAuth={setAuth} /> : <CustomerPage />}
        </>
    );
}
