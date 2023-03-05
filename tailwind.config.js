/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#da2348",
                secondary: "#EC9412",
                secondaryHover: "#f5a42c",
                primaryHover: "rgba(249, 35, 72, 1)",
                customWhite: "#fdfdfd",
                customBlack: "#100000",
                customBlack2: "#231401",
                customSilver: "#d7d7d7",
                customSilver2: "#DCDFE6",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
