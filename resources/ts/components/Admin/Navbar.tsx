import React, { SetStateAction, useContext } from "react";
import { log_out } from "../../services/ServicesAuthUser";
import { AdminPageContext as ProviderContextAdmin } from "../../Context/ContextAdminPage";
import menu from "../../../assets/menu.svg";
import { SectionAdminSideBar } from "../../types/Enums";

function Navbar({}: // change_background
{
    // change_background: (type: "show" | "hidden") => void
}) {
    const { changeAuth, section } = useContext(ProviderContextAdmin);

    return (
        <nav className="p-3 z-0 flex justify-between items-center w-full">
            <div>
                <h1 className='text-3xl font-[500]'>{section ? (section.charAt(0).toUpperCase() + section.slice(1)) : null}</h1>
            </div>
            <div>
                <button
                    onClick={() => {
                        if (changeAuth) {
                            log_out(changeAuth);
                        }
                    }}
                >
                    Log out
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
