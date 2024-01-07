import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios, { AxiosError } from "axios";
import Email from "../../../assets/email-img.png";
import Password from "../../../assets/password-img.png";
import { Navigate } from 'react-router-dom'

export default function Login() {
    const [CSRF, setCSRF] = useState("");
    const [Auth, setAuth] = useState(false);
    const [showModal, setshowModal] = useState(false);
    const $form = useRef<HTMLFormElement>(null);
    const $boxError = useRef<HTMLDivElement>(null);
    const $spanError = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const getCsrf = async () => {
            const crsfJSON = await axios.get("/sanctum/csrf-cookie");
            const data = crsfJSON.config.headers.get("X-XSRF-TOKEN") as string;
            setCSRF(data);
        };
        getCsrf();
        return () => {};
    }, []);


    if (Auth) {
        return <Navigate to="/store" />
    }

    const dataValidation = async () => {
        if ($form.current && CSRF) {
            try {
                const formDataValidation = new FormData($form.current);
                const postValidation = await axios.post(
                    "/api/login",
                    formDataValidation,
                );

                if (postValidation.status === 200) {
                   setAuth(true) 
                }
            } catch (error) {
                if (error instanceof AxiosError) {
                    $form.current.reset();
                    let data = error.response?.data;

                    if ($boxError.current && $spanError.current) {
                        $spanError.current.textContent = data.error;
                        $boxError.current.classList.remove("hidden")
                    }

                }
            }
        }
    };

    const hiddenBoxError = () => {
        console.log("key");
        if ($boxError.current && $spanError.current) {
            $boxError.current.classList.add("hidden") 
            $spanError.current.textContent = ""
        }
    }

    return (
        <>
            <main
                className={`flex justify-center items-center flex-col opacity-${
                    showModal ? 0 : 100
                }`}
            >
                <div className="bg-[#3d1a98] w-[89vw] h-[40vh] min-h-[250px] max-w-[24em] rounded-xl flex flex-col gap-8 md:h-[390px] sm:max-w-md">
                    <div className="mt-5">
                        <h1 className="text-[3.2em] font-bold text-center">
                            Log in
                        </h1>
                    </div>
                    <form
                        action=""
                        onSubmit={(event) => event.preventDefault()}
                        className="w-[inherit] h-[50vh] flex justify-center items-center flex-col max-w-[24em] gap-[1.23em] sm:max-w-md"
                        ref={$form}
                        onKeyDown={hiddenBoxError}
                    >
                        <div className="relative">
                            <div className="absolute left-3 top-[0.68em]">
                                <img src={Email} alt="" />
                            </div>
                            <input
                                type="email"
                                className="input"
                                name="email"
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
                                name="password"
                                placeholder="Contraseña"
                                required
                            />
                        </div>
                        <button
                            type="button"
                            className="border-black border-2 px-5 py-3 rounded-lg"
                            onClick={dataValidation}
                        >
                            Enviar
                        </button>
                    </form>
                </div>
                <div ref={$boxError} className="bg-[#f43f5e] w-[60vw] mt-6 p-5 slide-top hidden">
                    <span
                        ref={$spanError}
                        className="text-center text-[#fda4af] block"
                    ></span>
                </div>
                <span className="text-center p-3">
                    ¿Aún no tienes cuenta? Registrate gratis aquí{" "}
                    <Link to="/register/Sign_up" className="text-[#6636f1]">
                        aquí
                    </Link>
                </span>
            </main>
            {/* <ModalVerify show={showModal} changeShow={setshowModal} /> */}
        </>
    );
}