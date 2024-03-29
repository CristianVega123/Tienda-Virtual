import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios, { AxiosError } from "axios";
import Email from "../../../assets/email-img.png";
import Password from "../../../assets/password-img.png";
import { Navigate } from "react-router-dom";
import { getUser } from "../../services/ServicesGetUser";
import Loading from "../../components/Loading";
import { log_in } from "../../services/ServicesAuthUser";
import { SectionAdminSideBar } from "../../types/Enums";

export default function Login() {
    const [Auth, setAuth] = useState<boolean | null>(null);
    const [Load, setLoad] = useState(true);
    const [errorState, setErrorState] = useState<string[]>([]);
    const $form = useRef<HTMLFormElement>(null);
    const $boxError = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.title = "Login"
        getUser(setLoad, setAuth);
        return () => {};
    }, []);

    if (Auth) {
        return <Navigate to={`/store/${SectionAdminSideBar.DASHBOARD}`} />;
    }

    if (Load) {
        //! Posible error encontrado, al parecer se junta ambos estilos en el layout
        return <Loading />;
    }

    const dataValidation = async () => {
        if ($form.current) {
            try {
                const formDataValidation = new FormData($form.current);
                await log_in(formDataValidation, setAuth);
            } catch (error) {
                if (error instanceof AxiosError) {
                    $form.current.reset();
                    let errors = error.response?.data.errors;

                    let arrayErrors: string[] = [];

                    if ($boxError.current) {
                        $boxError.current.classList.remove("hidden");

                        for (const error_text in errors) {
                            let message_text_error: string[] =
                                errors[error_text];

                            arrayErrors.push(...message_text_error);
                        }

                        setErrorState([...errorState, ...arrayErrors]);
                    }
                }
            }
        }
    };

    const hiddenBoxError = () => {
        if ($boxError.current) {
            $boxError.current.classList.add("hidden");
            setErrorState([]);
        }
    };

    return (
        <main className={`flex justify-center items-center flex-col`}>
            <div className="bg-[#3d1a98] w-[89vw] h-[40vh] min-h-[250px] max-w-[24em] rounded-xl flex flex-col gap-8 md:h-[390px] sm:max-w-md">
                <div className="mt-5">
                    <h1 className="text-[3.2em] font-bold text-center">
                        Log in
                    </h1>
                </div>
                <form
                    action=""
                    onSubmit={(event) => {
                        event.preventDefault();
                        dataValidation()
                    }}
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
                    <input
                        type="submit"
                        className="border-black border-2 px-5 py-3 rounded-lg"
                        value="Enviar"
                    />
                </form>
            </div>
            <div
                ref={$boxError}
                className="bg-[#f43f5e] w-[60vw] mt-6 p-5 slide-top hidden"
            >
                <span className="text-center text-[#fda4af] block">
                    {errorState &&
                        errorState.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                </span>
            </div>
            <span className="text-center p-3">
                ¿Aún no tienes cuenta? Registrate gratis aquí{" "}
                <Link to="/register/Sign_up" className="text-[#6636f1]">
                    aquí
                </Link>
            </span>
        </main>
    );
}
