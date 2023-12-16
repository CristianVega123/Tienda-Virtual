import { useRef, useState } from "react";
import Name from "../../../assets/name-img.png";
import Email from "../../../assets/email-img.png";
import Password from "../../../assets/password-img.png";
import { Link, Navigate, redirect } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import ModalVerify from "./ModalVerify";
import { useStateUser } from "../../store/StateGlobalShop";
import { StateUser } from "../../types/InterfaceState";

export default function SingUp() {
    const [Auth, setAuth] = useState(false);
    const [showModal, setshowModal] = useState(false);

    // * Usar el estado global del usuario (Zustand)

    const {
        update_user_id,
        update_user_name,
        update_user_isValid,
        update_user_surname,
        update_user_role,
        update_user_email,
    } = useStateUser();

    const $form = useRef<HTMLFormElement>(null);

    if (Auth) {
        return <Navigate to="/store" />;
    }

    const sentDataUser = async (event: React.MouseEvent) => {
        if ($form.current) {
            try {
                const formData = new FormData($form.current);

                formData.append("user_valid", "0");
                let auth_person: AxiosResponse = await axios.post(
                    "/api/create_client",
                    formData
                );
                let data_valid_person: StateUser =
                    auth_person.data["user_created"];

                update_user_id(data_valid_person.user_id);
                update_user_name(data_valid_person.user_name);
                update_user_surname(data_valid_person.user_surname)
                update_user_email(data_valid_person.user_email)
                update_user_isValid(data_valid_person.user_isValid)
                update_user_role(data_valid_person.user_role)

                // setshowModal(true);
                $form.current.reset();
                setAuth(true)
            } catch (error) {}
        }
    };

    return (
        <>
            <main
                className={`flex justify-center items-center opacity-${
                    showModal ? 0 : 100
                }`}
            >
                <div className="bg-[#3d1a98] w-[89vw] h-[45vh] min-h-[500px] max-w-[24em] rounded-xl flex flex-col gap-11 md:h-[390px] sm:max-w-md">
                    <div className="mt-5">
                        <h1 className="text-[3.2em] font-bold text-center">
                            Sign up
                        </h1>
                    </div>
                    <form
                        action=""
                        onSubmit={(event) => event.preventDefault()}
                        className="w-[inherit] h-[50vh] flex justify-start items-center flex-col max-w-[24em] gap-[1.6em] sm:max-w-md"
                        ref={$form}
                    >
                        <div className="relative">
                            <div className="absolute left-3 top-[0.59em]">
                                <img src={Name} alt="" />
                            </div>
                            <input
                                type="text"
                                className="input"
                                name="user_name"
                                placeholder="Nombre"
                                required
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute left-3 top-[0.59em]">
                                <img src={Name} alt="" />
                            </div>
                            <input
                                type="text"
                                className="input"
                                name="user_surname"
                                placeholder="Apellido"
                                required
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute left-3 top-[0.68em]">
                                <img src={Email} alt="" />
                            </div>
                            <input
                                type="email"
                                className="input"
                                name="user_email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute left-3 top-[0.68em]">
                                <img src={Password} alt="" />
                            </div>
                            <input
                                type="password"
                                className="input"
                                name="user_password"
                                placeholder="Contraseña"
                                required
                            />
                        </div>
                        <button
                            type="button"
                            className="border-black border-2 px-5 py-3 rounded-lg"
                            onClick={sentDataUser}
                        >
                            Enviar
                        </button>
                    </form>
                    <span className="text-center">
                        ¿Ya tienes cuenta? Entonces entra{" "}
                        <Link to="/register/Log_in" className="text-[#6636f1]">
                            aquí
                        </Link>
                    </span>
                </div>
            </main>
            <ModalVerify show={showModal} changeShow={setshowModal} />
        </>
    );
}
