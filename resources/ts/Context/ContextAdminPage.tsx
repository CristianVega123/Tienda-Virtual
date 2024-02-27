import { SetStateAction, createContext, useState, useEffect } from "react";
import LateralMenu from "../components/Admin/LateralMenu";
import { SectionAdminSideBar } from "../types/Enums";
import { show_product } from "../services/SericesUsers";
import { AxiosResponse } from "axios";
import { ProductsData } from "../types/typesAdmins";



/**
 * Envuelve toda la pagina para que tenga un contexto sobre sus datos.
 */

interface StateAdminPage {
    changeAuth?: React.Dispatch<SetStateAction<boolean | null>>;
    section?: SectionAdminSideBar;
    setShowLateralMenu: React.Dispatch<SetStateAction<boolean>>;
    showLateralMenu: boolean;
    products: ProductsData[];
    setProducts: React.Dispatch<
        React.SetStateAction<ProductsData[]>
    >;
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
    const [products, setProducts] = useState<ProductsData[]>([]);
    useEffect(() => {
        let data: any 
        if (products) {
            data= show_product().then(async (result) => {
                let json = await result.json();
                setProducts(json);
            });
        }
    },[]);

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
            <div className="w-full h-[100vh]  flex  gap-11 h-auto">
                <LateralMenu />
                <div className="flex flex-col w-full gap-16">{children}</div>
            </div>
        </AdminPageContext.Provider>
    );
}
