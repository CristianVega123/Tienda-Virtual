import React, { useContext } from "react";
import { AdminPageContext as ProviderContextAdmin } from "../../Context/ContextAdminPage";
import { Link } from "react-router-dom";
import { SectionAdminSideBar } from "../../types/Enums";

function LateralMenu() {
    const { section, changeAuth } = useContext(ProviderContextAdmin);

    return (
        <aside
            className={`hidden md:bg-lateral-color md:top-0 sm:h-[100vh] sticky top-0 lg:w-[30%] lg:min-w-[235px] lg:max-w-[255px] xl:flex lg:flex-col  md:gap-20  
    `}
        >
            <div className="flex justify-between align-baseline w-full p-4">
                {/* //* Logo */}
                <h1 className="text-2xl">Logo</h1>
            </div>
            <section className="flex flex-col items-center gap-3 font-[500]">
                <ul className="w-[99%]">
                    {" "}
                    <li className="w-full">
                        <Link
                            to={`/store/${SectionAdminSideBar.DASHBOARD}`}
                            className={`text-[18px] h-max p-3 w-full flex justify-center  gap-4   ${
                                section &&
                                section === SectionAdminSideBar.DASHBOARD
                                    ? "border-primary-color border-l-[7px] text-light-primary-color"
                                    : "opacity-50"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`${
                                    section &&
                                    section === SectionAdminSideBar.DASHBOARD
                                        ? "fill-primary-color"
                                        : "fill-white "
                                }`}
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 50 50"
                                width="22px"
                                height="22px"
                            >
                                <polygon points="41,5 41,10.73 35,6.05 35,5 " />
                                <path d="M48.79,20.62C48.59,20.87,48.3,21,48,21c-0.22,0-0.43-0.07-0.62-0.21L46,19.71V46c0,0.55-0.45,1-1,1H31V29H19v18H5c-0.55,0-1-0.45-1-1V19.71l-1.38,1.08c-0.44,0.34-1.07,0.26-1.41-0.17c-0.34-0.44-0.26-1.07,0.17-1.41l23-17.95c0.37-0.28,0.87-0.28,1.24,0l23,17.95C49.05,19.55,49.13,20.18,48.79,20.62z" />
                            </svg>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/store/${SectionAdminSideBar.USER}`}
                            className={`text-[18px] h-max p-3 w-full flex justify-center gap-6  ${
                                section && section === SectionAdminSideBar.USER
                                    ? "border-primary-color border-l-[5px] text-light-primary-color"
                                    : "opacity-50"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 26 26"
                                width="22px"
                                height="22px"
                                className={`${
                                    section &&
                                    section === SectionAdminSideBar.USER
                                        ? "fill-primary-color"
                                        : "fill-white "
                                }`}
                            >
                                <path d="M 2.101563 23 C 2.101563 23 2.101563 21.5 2.101563 21.300781 C 2.101563 19.101563 5.398438 17.101563 9 16.398438 C 9 16.398438 10.101563 15.800781 9.800781 14.699219 C 8.699219 13.300781 8.398438 11.800781 8.398438 11.800781 C 8.199219 11.699219 7.898438 11.5 7.699219 11.300781 C 7.398438 10.898438 7 9.699219 7.101563 8.800781 C 7.199219 8 7.398438 8.300781 7.5 8.101563 C 6.699219 6.300781 7.101563 4 8 2.300781 C 9.898438 -1 13.898438 0 14.5 1.199219 C 18.300781 0.5 18.199219 6.5 17.601563 8 C 17.601563 8 17.898438 8.101563 17.898438 9.5 C 17.800781 11 16.601563 11.898438 16.601563 11.898438 C 16.601563 12.300781 16.101563 13.5 15.300781 14.601563 C 14.601563 16 16 16.300781 16 16.300781 C 19.601563 17 22.898438 19 22.898438 21.199219 C 22.898438 21.398438 22.898438 22.898438 22.898438 22.898438 C 22.898438 24.300781 17.5 25.800781 12.5 25.800781 C 7.601563 25.800781 2.101563 25.300781 2.101563 23 Z" />
                            </svg>
                            <span>User</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/store/${SectionAdminSideBar.PRODUCTS}`}
                            className={`text-[18px] h-max p-3 w-full flex justify-center align-baseline gap-6  ${
                                section &&
                                section === SectionAdminSideBar.PRODUCTS
                                    ? "border-primary-color border-l-[5px] text-light-primary-color"
                                    : "opacity-50"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="22px"
                                height="22px"
                                className={`${
                                    section &&
                                    section === SectionAdminSideBar.PRODUCTS
                                        ? "fill-primary-color"
                                        : "fill-white "
                                }`}
                            >
                                <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z" />
                            </svg>
                            <span>Products</span>
                        </Link>
                    </li>
                </ul>
            </section>
        </aside>
    );
}

export default LateralMenu;
