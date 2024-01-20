import React, { useContext } from "react";
import { log_out } from "../../services/ServicesAuthUser";
import { AdminPageContext as ProviderContextAdmin } from "../../Context/ContextAdminPage";
import {
    Autocomplete,
    AutocompleteItem,
    Listbox,
    ListboxItem,

} from "@nextui-org/react";
import { section_admin } from "../../data";
import { useNavigate } from 'react-router-dom'
import { SectionAdminSideBar } from "../../types/Enums";

function Navbar({}: // change_background
{}) {
    const { changeAuth, section } = useContext(ProviderContextAdmin);
    const navigate = useNavigate()

    return (
        <nav className="p-3 z-0 flex justify-between items-center w-full">
            <div>
                <h1 className="text-3xl font-[500]">
                    {section
                        ? section.charAt(0).toUpperCase() + section.slice(1)
                        : null}
                </h1>
            </div>
            <div>
                {/* <Autocomplete
                    defaultItems={section_admin}
                    label="Section"
                    placeholder="Busque su sección"
                    onKeyDown={e => e.continuePropagation()}
                    onSelectionChange={(key) => {
                        
                        if (key === SectionAdminSideBar.DASHBOARD) {
                            navigate(`/store/${SectionAdminSideBar.DASHBOARD}`)
                        } else if(key === SectionAdminSideBar.PRODUCTS) {
                            navigate(`/store/${SectionAdminSideBar.PRODUCTS}`)
                        } else if (key === SectionAdminSideBar.USER) {
                            navigate(`/store/${SectionAdminSideBar.USER}`)
                        }
                        
                    }}
                >
                    {(section) => (
                        <AutocompleteItem key={section.value}>
                            {section.label}
                        </AutocompleteItem>
                    )}
                </Autocomplete> */}

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
