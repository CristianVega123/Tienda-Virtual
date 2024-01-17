import React, { SetStateAction, useEffect } from "react";
import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import { ContextAdminPage } from "../../../Context/ContextAdminPage";
import { useParams } from "react-router-dom";
import DashboardAdmin from "../../../components/Admin/DashboardAdmin";
import { SectionAdminSideBar } from "../../../types/Enums";
import ProductsAdmin from "../../../components/Admin/ProductsAdmin";
import UsersAdmin from "../../../components/Admin/UsersAdmin";
import NotFound from "../../../components/NotFound";
import Navbar from "../../../components/Admin/Navbar";

function AdminPage({
    changeAuth,
}: {
    changeAuth: React.Dispatch<SetStateAction<boolean | null>>;
}) {

  useEffect(() => {
    document.title = "Panel de control"
  })
  

  //? Posibles section dentro de la página

  let SectionRender: React.ReactNode;
  const {section} = useParams()
  
  if (section) {
    if (section === SectionAdminSideBar.DASHBOARD) {
      SectionRender = <DashboardAdmin  />
    } else if (section === SectionAdminSideBar.PRODUCTS) {
      SectionRender = <ProductsAdmin /> 
    } else if (section === SectionAdminSideBar.USER) {
      SectionRender = <UsersAdmin /> 
    } else {
      return <NotFound /> 
    }

  }


    return (
        <LayoutAdmin>
          {/* Usamos el contexto para poder mandar datos a los demas hijos y dejar de usar los props. */}
            <ContextAdminPage value={{
              changeAuth,
              section
            }}>
              <Navbar />
              {SectionRender}
            </ContextAdminPage>
        </LayoutAdmin>
    );
}

export default AdminPage;
