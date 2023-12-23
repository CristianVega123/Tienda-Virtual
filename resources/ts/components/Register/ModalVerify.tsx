import React, { Dispatch, SetStateAction, useRef } from "react";

function ModalVerify({
    show,
    changeShow,
}: {
    show: boolean;
    changeShow: Dispatch<SetStateAction<boolean>>;
}) {
    const $dialog = useRef<HTMLDialogElement>(null);

    // * Con el props que le mando desde el padre, decidimos si se veo o no.
    if (show && $dialog.current) {
        $dialog.current?.showModal();
    } else {
        $dialog.current?.close();
    }
    const changeStateShowKey = (event: React.KeyboardEvent) => {
        console.log(event.key);
        if (event.key === "Escape") {
            changeShow(false);
        }
    };

    const closeDialog = () => {
        if ($dialog.current) {
            changeShow(false);
        }
    };


    const changeDivVerify = () => {
        console.log("change verify content");
        
    }

    /**
     * --------------------------
     * ? Ventana modal para verificar el correo (Solo para eso sirve este componente).
     * --------------------------
     */
    return (
        <dialog
            ref={$dialog}
            className="bg-[#262626] outline-none w-[88vw] h-[50vh] max-w-sm text-black dialog sm:w-[50vw] sm:max-w-[490px] rounded-lg"
            onKeyDown={changeStateShowKey}
        >
            <div>
                ¿Deseas verificar tu email?
            </div>
            <button onClick={changeDivVerify}>
                Aceptar
            </button>
        </dialog>
    );
}

export default ModalVerify;
