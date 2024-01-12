import React, { useContext } from "react";
import { AdminPageContext as ProviderContextAdmin } from "../../Context/ContextAdminPage";
import Menu from "../../../assets/menu.svg";
import { Link } from "react-router-dom";
import { SectionAdminSideBar } from "../../types/Enums";
import { log_out } from "../../services/ServicesAuthUser";

function LateralMenu() {
    const { section, changeAuth } =
        useContext(ProviderContextAdmin);


    return (
        <aside
            className={` bg-lateral-color top-0 h-full w-80 z-50 flex flex-col gap-20  
    `}
        >
            <div className="flex justify-between align-baseline w-full p-4">
                {/* //* Logo */}
                <h1 className="text-2xl">Logo</h1>
            </div>
            <section className="flex flex-col items-center gap-5">
                <Link
                    to={`/store/${SectionAdminSideBar.DASHBOARD}`}
                    className={`${section && (section === SectionAdminSideBar.DASHBOARD) ? "bg-slate-700" : null} block indent-4 border-black border-2 w-[80%] p-3`}
                >
                    Dashboard
                </Link>
                <Link
                    to={`/store/${SectionAdminSideBar.USER}`}
                    className={`${section && (section === SectionAdminSideBar.USER) ? "bg-slate-700" : null} block indent-4 border-black border-2 w-[80%] p-3`}
                >
                    User
                </Link>
                <Link
                    to={`/store/${SectionAdminSideBar.PRODUCTS}`}
                    className={`${section && (section === SectionAdminSideBar.PRODUCTS) ? "bg-slate-700" : null} block indent-4 border-black border-2 w-[80%] p-3`}
                >
                    Products
                </Link>
                <button onClick={() => {
                    if (changeAuth) {
                        log_out(changeAuth)
                        
                    }
                }}>
                    logout
                </button>
            </section>
        </aside>
    );
}

export default LateralMenu;
