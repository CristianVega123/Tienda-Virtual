import { SetStateAction, createContext, useState, useRef } from "react";
import LateralMenu from "../components/Admin/LateralMenu";
import Navbar from "../components/Admin/Navbar";
import { SectionAdminSideBar } from "../types/Enums";

interface StateAdminPage {
    changeAuth?: React.Dispatch<SetStateAction<boolean | null>>;
    section?: SectionAdminSideBar;
    setShowLateralMenu: React.Dispatch<SetStateAction<boolean>>;
    showLateralMenu: boolean;
}

export const AdminPageContext = createContext<StateAdminPage>(
    {} as StateAdminPage
);

export function ContextAdminPage({
    children,
    value,
}: {
    children: React.ReactNode;
    value: {
        [prop: string]: any;
    };
}) {
    const [showLateralMenu, setShowLateralMenu] = useState(false);

    return (
        <AdminPageContext.Provider
            value={{
                ...value,
                setShowLateralMenu,
                showLateralMenu,
            }}
        >
            <div className="w-full h-[100vh]  flex  gap-4">
                <LateralMenu />

                {children}
            </div>
        </AdminPageContext.Provider>
    );
}
