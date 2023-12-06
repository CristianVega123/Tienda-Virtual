import ImageMain from "./ImageMain";
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <div className="glass dark:glass-dark rounded-lg flex p-5 justify-around md:w-[72%]">
            <ImageMain />
            <div className="inline-block w-[39%] self-center h-[25em]">
                <h1 className="font-bold text-[3.8em]">
                    ¡Visita nuestra tienda virtual!
                </h1>
                <span className="break-words mt-9 inline-block text-xl">
                    Mira nuestros productos, tenemos variedad cocmo por ejemplo:
                    Tecnología, Ropa, Electronomestico, etc.
                    <Link to="/products">Ver Productos</Link>
                    <span className="text-[15px] mt-3 block">
                        ¿Ya tienes alguna cuenta? Registrate{" "}
                        <Link
                            to="/register"
                            className="text-[#6636f1] indent-1 "
                        >
                            aquí
                        </Link>
                    </span>
                </span>
            </div>
        </div>
    );
}
