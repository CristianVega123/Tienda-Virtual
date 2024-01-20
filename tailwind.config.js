import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./resources/**/*.ts",
        "./resources/**/*.tsx",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-dark-color": "var(--primary-dark-color)",
                "primary-color": "var(--primary-color)",
                "light-primary-color": "var(--light-primary-color)",
                "white-mixed-primary-color": "var(--white-mixed-primary-color)",
                "lateral-color": "var(--lateral-color)",
                "text-primary-color": "",
            },
        },
    },

    darkMode: "class",

    plugins: [nextui()],
};
