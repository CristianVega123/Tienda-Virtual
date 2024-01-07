import { useRef, useState } from "react";
import Name from "../../../assets/name-img.png";
import Email from "../../../assets/email-img.png";
import Password from "../../../assets/password-img.png";
import { Link, Navigate, redirect } from "react-router-dom";
import { AxiosError } from "axios";
import ModalVerify from "./ModalVerify";
import { create_user } from '../../services/ServicesSingUp'

export default function SingUp() {
    const [Auth, setAuth] = useState(false);
    const [showModal, setshowModal] = useState(false);
    const [errorsState, setErrorsState] = useState<any[]>([])


    const $form = useRef<HTMLFormElement>(null);
    const $boxError = useRef<HTMLDivElement>(null);
    const $spanError = useRef<HTMLSpanElement>(null);

    if (Auth) {
        return <Navigate to="/store" />;
    }

    const sentDataUser = async (event: React.MouseEvent) => {
        if ($form.current) {
            try {
                const formData = new FormData($form.current);


                //TODO: Una vaga idea de mandarle la autorización de enviar el verificador a su email (probablemente el Modal tendra los datos para enviar hacía el controlador)
                // formData.append("user_valid", "0");

                // await create_user(formData)

                // $form.current.reset();
                setshowModal(true);
            } catch (error) {
                if (error instanceof AxiosError) {
                    let data = error.response?.data;
                    let errors = data.errors
                    
                    console.log(errors);
                    

                    if ($boxError.current && $spanError.current) {

                        setErrorsState(errors)

                        // $spanError.current.textContent = data;
                        $boxError.current.classList.remove("hidden")
                    }

                }
            }
        }
    };

    const hiddenBoxError = () => {

    }

    return (
        <>
            <main
                className={`flex justify-center items-center flex-col opacity-${
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
                        onSubmit={(event) => event.preventDefault()}
                        onKeyDown={hiddenBoxError}
                        className="w-[inherit] h-[50vh] flex justify-start items-center flex-col max-w-[24em] gap-[1.6em] sm:max-w-md"
                        ref={$form}
                        method="POST"
                    >
                        <div className="relative">
                            <div className="absolute left-3 top-[0.59em]">
                                <img src={Name} alt="" />
                            </div>
                            <input
                                type="text"
                                className="input"
                                pattern="^[a-zA-Z]+$"
                                name="user_name"
                                placeholder="Nombre"
                                required={true}
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
                                required={true}
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
                        <input
                            type="button"
                            className="border-black border-2 px-5 py-3 rounded-lg"
                            onClick={sentDataUser}
                            value="Enviar"
                        />
                    </form>
                </div>
                <div
                    ref={$boxError}
                    className="bg-[#f43f5e] w-[60vw] mt-6 p-5 slide-top hidden"
                >
                    <span
                        // ref={$spanError}
                        className="text-center text-[#fda4af] block"
                    >{
                        errorsState !== undefined ?(
                            errorsState.map( error => {
                                return (
                                    <p>
                                        
                                    </p>
                                )
                            })
                        ) : null
                    }</span>
                </div>
                <span className="text-center p-3">
                    ¿Ya tienes cuenta? Entonces entra{" "}
                    <Link to="/register/Log_in" className="text-[#6636f1]">
                        aquí
                    </Link>
                </span>
            </main>
            <ModalVerify show={showModal} changeShow={setshowModal} changeAuth={setAuth} />
        </>
    );
}
