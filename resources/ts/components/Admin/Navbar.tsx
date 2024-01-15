import React, { SetStateAction, useContext } from "react";
import { log_out } from "../../services/ServicesAuthUser";
import { AdminPageContext as ProviderContextAdmin } from "../../Context/ContextAdminPage";
import menu from "../../../assets/menu.svg";


function Navbar({
    // change_background
}: {
    // change_background: (type: "show" | "hidden") => void 
}) {
    const { setShowLateralMenu, changeAuth } = useContext(ProviderContextAdmin);

    return (
        <nav className="p-3 z-0 flex justify-between items-center self-start w-full">
            <button
                className="bg-light-primary-color w-max p-2 rounded-md hover:bg-primary-color"
                onClick={() => {
                    setShowLateralMenu(true);
                }}
            >
                <img src={menu} className="w-7" alt="" />
            </button>

            <div>

            </div>
            <button
                onClick={() => {
                    if (changeAuth) {
                        log_out(changeAuth);
                        
                    }
                }}
            >
                Log out
            </button>
        </nav>
    );
}

export default Navbar;
