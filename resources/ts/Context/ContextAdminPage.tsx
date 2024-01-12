import { SetStateAction, createContext, useState, useRef } from "react";
import LateralMenu from "../components/Admin/LateralMenu";
import Navbar from "../components/Admin/Navbar";
import { SectionAdminSideBar } from "../types/Enums";


interface StateAdminPage {
    changeAuth?: React.Dispatch<SetStateAction<boolean | null>>;
    section ?: SectionAdminSideBar 
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
    const $divMain = useRef<HTMLDivElement>(null);



    return (
        <AdminPageContext.Provider
            value={{
                ...value,
            }}
        >
            <div ref={$divMain}  className="w-full h-[100vh] grid grid-cols-[320px_1fr] gap-6">
                <LateralMenu />
                {children}
            </div>
        </AdminPageContext.Provider>
    );
}
