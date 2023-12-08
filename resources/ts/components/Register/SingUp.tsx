import { useRef } from 'react'
import Name from "../../../assets/name-img.png";
import Email from "../../../assets/email-img.png";
import Password from "../../../assets/password-img.png";
import { Link, redirect } from 'react-router-dom';


export default function SingUp() {

    const $form = useRef<HTMLFormElement>(null);

    const sentDataUser = (event: React.MouseEvent) => {
        if ($form.current) {
            const formData = new FormData($form.current);
            console.log(formData.get("user_password"));
        }
    }

    return (
        <main className=" flex justify-center items-center">
            <div className="bg-[#3d1a98] w-[89vw] h-[65vh] min-h-[500px] rounded-xl flex flex-col gap-11">
                <div className="mt-5">
                    <h1 className="text-[3.2em] font-bold text-center">
                        Sign up
                    </h1>
                </div>
                <form
                    action=""
                    onSubmit={(event) => event.preventDefault()}
                    className="w-[inherit] h-[50vh] flex justify-start items-center flex-col gap-[2em]"
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
                        />
                    </div>
                    <button onClick={sentDataUser}>Enviar</button>
                </form>
                <span className='text-center'>¿Ya tienes cuenta? Entonces entra <Link to="/register/Log_in" className='text-[#6636f1]'>aquí</Link></span>
            </div>
        </main>
    );
}
