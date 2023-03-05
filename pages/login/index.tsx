import Link from "next/link";
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleShowPassord = () => {
        setShowPassword((prevState) => {
            return !prevState;
        });
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="h-screen md:flex md:items-center md:justify-center md:custom-containe">
            <div className="h-fit custom-rounded border border-black p-10 md:p-14">
                <div className="mb-8">
                    <Link href="/">
                        <img
                            className="w-2/5 mx-auto"
                            src="/images/logo-2.svg"
                            alt="image"
                        />
                    </Link>
                </div>

                <h2 className="text-2xl font-semibold text-center mb-8">
                    Login your account
                </h2>

                <form onSubmit={handleLogin}>
                    <fieldset className="border border-secondary rounded-[15px] mb-5 py-1">
                        <legend className="normal-text text-secondary ml-5 px-2">
                            Email address
                        </legend>

                        <input
                            type="email"
                            className="border-0 w-full bg-transparent border-transparent focus:border-transparent focus:ring-0 normal-text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@email.com"
                        />
                    </fieldset>

                    <fieldset className="border border-secondary rounded-[15px] mb-5 py-1">
                        <legend className="normal-text text-secondary ml-5 px-2">
                            Password
                        </legend>

                        <div className="flex justify-between w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="border-0 bg-transparent border-transparent focus:border-transparent focus:ring-0 normal-text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="*************"
                            />

                            <button
                                type="button"
                                className="pr-3"
                                onClick={handleShowPassord}
                            >
                                <i
                                    className={`fa-solid ${
                                        showPassword ? "fa-eye-slash" : "fa-eye"
                                    } text-customSilver`}
                                ></i>
                            </button>
                        </div>
                    </fieldset>

                    <button className="yellow-btn w-full rounded-[15px] py-4 mb-5">
                        Login
                    </button>

                    <div className="text-secondary normal-text text-center mb-5">
                        <Link href="/signup">Create an Account</Link>
                    </div>

                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <svg
                                width="160"
                                height="1"
                                viewBox="0 0 160 1"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    y1="0.5"
                                    x2="160"
                                    y2="0.5"
                                    stroke="#B9C1C9"
                                />
                            </svg>
                        </div>

                        <div className="normal-text font-semibold">OR</div>

                        <div>
                            <svg
                                width="160"
                                height="1"
                                viewBox="0 0 160 1"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    y1="0.5"
                                    x2="160"
                                    y2="0.5"
                                    stroke="#B9C1C9"
                                />
                            </svg>
                        </div>
                    </div>

                    <div>
                        <button className="tertiary-btn border-gray-300 flex items-center justify-center hover:bg-secondary hover:border-secondary w-full mb-5">
                            <img
                                className="w-8 pr-2"
                                src="/images/google-logo.svg"
                                alt="image"
                            />

                            <span>Continue with Google</span>
                        </button>

                        <button className="tertiary-btn border-gray-300 flex items-center justify-center hover:bg-secondary hover:border-secondary w-full mb-5">
                            <img
                                className="w-8 pr-2"
                                src="/images/apple-logo.svg"
                                alt="image"
                            />

                            <span>Continue with Apple</span>
                        </button>

                        <button className="tertiary-btn border-gray-300 flex items-center justify-center hover:bg-secondary hover:border-secondary w-full mb-5">
                            <img
                                className="w-7 pr-2"
                                src="/images/facebook-logo.svg"
                                alt="image"
                            />

                            <span>Continue with Facebook</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
