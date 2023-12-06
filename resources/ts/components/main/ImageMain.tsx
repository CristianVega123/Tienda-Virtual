import Img from "../../../assets/main-image.png";
import Atropos from "atropos/react";

export default function ImageMain() {
    return (
        <div className="p-5 w-max">
            <Atropos
                className="imgp"
                // activeOffset={1}
                // shadowScale={1}
                innerClassName="shadow"
                highlight={false}
                shadow={true}
                onEnter={() => console.log("Enter")}
                onLeave={() => console.log("Leave")}
                onRotate={(x, y) => console.log("Rotate", x, y)}
            >
                <img src={Img} alt="" />
            </Atropos>
            {/* <span><a href="https://www.freepik.es/vector-gratis/smartphone-isometrico-notificacion-pantalla_3297752.htm#query=vender%203d&position=39&from_view=search&track=ais&uuid=e7f817cf-db38-469e-873e-88b146224bb7">Imagen de katemangostar</a> en Freepik</span> */}
        </div>
    );
}
