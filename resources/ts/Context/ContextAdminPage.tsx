import { SetStateAction, createContext, useState, useEffect } from "react";
import LateralMenu from "../components/Admin/LateralMenu";
import { SectionAdminSideBar } from "../types/Enums";
import { show_product } from "../services/SericesUsers";
import { AxiosResponse } from "axios";

interface StateAdminPage {
    changeAuth?: React.Dispatch<SetStateAction<boolean | null>>;
    section?: SectionAdminSideBar;
    setShowLateralMenu: React.Dispatch<SetStateAction<boolean>>;
    showLateralMenu: boolean;
    products: any;
    setProducts: React.Dispatch<React.SetStateAction<AxiosResponse<any,any>[]>>;
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
    const [products, setProducts] = useState<AxiosResponse[]>([]);
    useEffect(() => {
        if (products.length === 0) {
            show_product().then((result) => setProducts(result.data));
        }
    });

    return (
        <AdminPageContext.Provider
            value={{
                ...value,
                setShowLateralMenu,
                showLateralMenu,
                products,
                setProducts,
            }}
        >
            <div className="w-full h-[100vh]  flex  gap-11">
                <LateralMenu />
                <div className="flex flex-col w-full gap-16">{children}</div>
            </div>
        </AdminPageContext.Provider>
    );
}
