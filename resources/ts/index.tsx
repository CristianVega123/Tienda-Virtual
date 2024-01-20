import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
import "./index.css";
import "atropos/atropos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tienda from "./pages/commerce/Tienda";
import Register from "./pages/Register/Register";
import NotFound from "./components/NotFound";
import { NextUIProvider } from "@nextui-org/react";

const root = createRoot(document.getElementById("app") as HTMLElement);

window.addEventListener("DOMContentLoaded", () => {
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/store/:section",
        element: <Tienda />,
    },
    {
        path: "/register",
        children: [
            {
                path: ":modeRegister",
                element: <Register />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);


root.render(
    <React.StrictMode>
        <NextUIProvider>
            <RouterProvider router={router} />

        </NextUIProvider>
    </React.StrictMode>
);
