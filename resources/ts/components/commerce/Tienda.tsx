import Layout from "../Layout/LayoutMain";
import { useStateUser } from "../../store/StateGlobalShop";
import { useEffect, useState } from "react";
import axios from "axios";
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
    const [Auth, setAuth] = useState<boolean>(false);

    useEffect(() => {
        /**
         * --------------
         * *Entendiendo como funciona el servicio de autenticación a través de cookies en laravel
         */
        const valid = async () => {
            let response = await axios.get("/api/user");
            let status = response.status;
            if (status === 200) {
              setAuth(true)            
            }
        };
        valid()          
    }, []);

    return (
        <>
        <div className="text-black">
            {String(Auth)}

        </div>
            {/* {Auth ? (
                <Navigate to="/register/Log_in" />
            ) : (
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
            )} */}
        </>
    );
}
