import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import {
    generate_token_email,
    send_token_email,
} from "../../services/ServicesAuthEmail";

function ModalVerify({
    show,
    changeShow,
    changeAuth,
}: {
    show: boolean;
    changeShow: Dispatch<SetStateAction<boolean>>;
    changeAuth: Dispatch<SetStateAction<boolean | null>>;
}) {
    const $dialog = useRef<HTMLDialogElement>(null);
    const $formTokenEmail = useRef<HTMLFormElement>(null);
    const [showInputToken, setShowInputToken] = useState(false);
    const [token_email, setTokenEmail] = useState<{
        [index: number]: any;
    }>({});

    // * Con el props que le mando desde el padre, decidimos si se veo o no.
    if (show && $dialog.current) {
        $dialog.current?.showModal();
    } else {
        $dialog.current?.close();
    }
    const changeStateShowKey = (event: React.KeyboardEvent) => {
        if (event.key === "Escape") {
            changeShow(false);
            setShowInputToken(false);
            setTokenEmail("");
        }
    };

    const closeDialog = () => {
        if ($dialog.current) {
            changeShow(false);
            changeAuth(true);
        }
    };

    const changeDivVerify = () => {
        generate_token_email(true);
        setShowInputToken(true);
    };

    const clickSendTokenEmail = () => {
        let token = "";
        for (const key in token_email) {
            let value = token_email[key];
            token += value;
        }

        send_token_email(Number(token), changeAuth);
    };

    //! Esta funcion sirve como helper
    const arrayChildrenForm = () => {
        if ($formTokenEmail.current) {
            let form = $formTokenEmail.current;

            let ArrayInputFormChildren = Array.from(form.children).filter(
                (nodes) => nodes.getAttribute("type") === "number"
            );
            return ArrayInputFormChildren;
        }

        return null;
    };

    const set_token = (event: React.KeyboardEvent) => {
        let current = event.target as HTMLInputElement;
        let valueInput = current.value;
        let key = event.key;
        let char = key.charCodeAt(0);

        if (char === 101) {
            return false;
        }
        if (char >= 48 && char <= 57) {
            let index = Number(current.getAttribute("data-index"));
            setTokenEmail({
                ...token_email,
                [index]: key,
            });

            if (valueInput.length > 0) {
                current.value = "";
            }
        }
    };

    const change_focus = (event: React.KeyboardEvent) => {
        let current = event.target as HTMLInputElement;
        let indexCurrent = current.getAttribute("data-index");
        let children = arrayChildrenForm();

        if (children && indexCurrent && Number(indexCurrent) < 3) {
            let node = children[Number(indexCurrent) + 1] as HTMLInputElement;

            node.focus();
        }
    };

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
            {showInputToken ? (
                <div>
                    <form
                        ref={$formTokenEmail}
                        action=""
                        onSubmit={(event) => event.preventDefault()}
                        className="text-black"
                    >
                        <input
                            type="number"
                            className="w-[60px] h-[30px] mr-4"
                            data-index="0"
                            maxLength={1}
                            onKeyUp={change_focus}
                            onKeyDown={set_token}
                        />
                        <input
                            type="number"
                            className="w-[60px] h-[30px] mr-4"
                            data-index="1"
                            onKeyUp={change_focus}
                            onKeyDown={set_token}
                        />
                        <input
                            type="number"
                            className="w-[60px] h-[30px] mr-4"
                            data-index="2"
                            onKeyUp={change_focus}
                            onKeyDown={set_token}
                        />
                        <input
                            type="number"
                            className="w-[60px] h-[30px] mr-4"
                            data-index="3"
                            onKeyUp={change_focus}
                            onKeyDown={set_token}
                        />
                        <input
                            type="submit"
                            value="Enviar"
                            onClick={clickSendTokenEmail}
                            onKeyUp={change_focus}
                            onKeyDown={set_token}
                        />

                        <span>{/* {token_email} */}</span>
                    </form>
                </div>
            ) : (
                <>
                    <div>¿Deseas verificar tu email?</div>
                    <button onClick={changeDivVerify}>Aceptar</button>
                    <button onClick={closeDialog}>Cerrar</button>
                </>
            )}
        </dialog>
    );
}

export default ModalVerify;
