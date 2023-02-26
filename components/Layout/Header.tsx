import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [active, setActive] = useState("Home");
    const [showNav, setShowNav] = useState(false);

    const handleActive = (name: string) => {
        setActive(name);
        console.log(name);
    };

    const handleShowNav = () => {
        setShowNav((prevState) => {
            return !prevState;
        });
    };

    return (
        <div className="header-section">
            <nav className="bg-transparent">
                <div className="flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/images/logo.png"
                            className="w-full"
                            alt="logo"
                        />
                    </Link>

                    <div className="flex lg:order-2">
                        <Link
                            href="/login"
                            className="secondary-btn px-8 mr-3 hidden md:block"
                        >
                            Log In
                        </Link>

                        <Link
                            href="/contact"
                            className="primary-btn mr-3 lg:mr-0"
                        >
                            Contact Us
                        </Link>

                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={handleShowNav}
                        >
                            <span className="sr-only">Open main menu</span>

                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
                            showNav ? "block" : "hidden"
                        }`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-transparent">
                            <li
                                className="mb-3 lg:mb-0"
                                onClick={() => handleActive("Home")}
                            >
                                <Link
                                    href="/"
                                    className={`block py-2 pl-3 pr-4 rounded lg:p-0 font-semibold ${
                                        active === "Home"
                                            ? "lg:text-primary bg-primary lg:bg-transparent text-white"
                                            : "lg:text-white text-primary"
                                    }`}
                                >
                                    Home
                                </Link>
                            </li>

                            <li
                                className="mb-3 lg:mb-0"
                                onClick={() => handleActive("Facilities")}
                            >
                                <Link
                                    href="/#feature-section"
                                    className={`block py-2 pl-3 pr-4 rounded lg:p-0 font-semibold ${
                                        active === "Facilities"
                                            ? "lg:text-primary bg-primary lg:bg-transparent text-white"
                                            : "lg:text-white text-primary"
                                    }`}
                                >
                                    Facilities
                                </Link>
                            </li>

                            <li
                                className="mb-3 lg:mb-0"
                                onClick={() => handleActive("Class")}
                            >
                                <Link
                                    href="/"
                                    className={`block py-2 pl-3 pr-4 rounded lg:p-0 font-semibold ${
                                        active === "Class"
                                            ? "lg:text-primary bg-primary lg:bg-transparent text-white"
                                            : "lg:text-white text-primary"
                                    }`}
                                >
                                    Class
                                </Link>
                            </li>

                            <li
                                className="mb-3 lg:mb-0"
                                onClick={() => handleActive("Shop")}
                            >
                                <Link
                                    href="/#product-section"
                                    className={`block py-2 pl-3 pr-4 rounded lg:p-0 font-semibold ${
                                        active === "Shop"
                                            ? "lg:text-primary bg-primary lg:bg-transparent text-white"
                                            : "lg:text-white text-primary"
                                    }`}
                                >
                                    Shop
                                </Link>
                            </li>

                            <li
                                className="mb-3 lg:mb-0"
                                onClick={() => handleActive("Gallery")}
                            >
                                <Link
                                    href="/#blog-section"
                                    className={`block py-2 pl-3 pr-4 rounded lg:p-0 font-semibold ${
                                        active === "Gallery"
                                            ? "lg:text-primary bg-primary lg:bg-transparent text-white"
                                            : "lg:text-white text-primary"
                                    }`}
                                >
                                    Gallery
                                </Link>
                            </li>

                            <li
                                className="block md:hidden"
                                onClick={() => handleActive("Login")}
                            >
                                <Link
                                    href="/login"
                                    className={`block py-2 pl-3 pr-4 rounded lg:p-0 font-semibold ${
                                        active === "Login"
                                            ? "lg:text-primary bg-primary lg:bg-transparent text-white"
                                            : "lg:text-white text-primary"
                                    }`}
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
