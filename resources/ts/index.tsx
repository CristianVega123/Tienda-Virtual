import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
import "./index.css";
import "atropos/atropos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tienda from "./components/commerce/Tienda";
import Register from "./components/Register/Register";
import axios from "axios";
import ValidationEmail from "./components/Register/ValidationEmail";

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
        path: "/products",
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
        path: "/verifyEmail",
        element: <ValidationEmail />
    }
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
