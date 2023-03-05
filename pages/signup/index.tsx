import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleShowPassord = () => {
        setShowPassword((prevState) => {
            return !prevState;
        });
    };

    const handleShowPassord2 = () => {
        setShowPassword2((prevState) => {
            return !prevState;
        });
    };

    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="h-screen md:flex md:items-center md:justify-center md:custom-container">
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

                <h2 className="text-2xl font-semibold text-center mb-2">
                    Create your account
                </h2>

                <p className="normal-text text-center mb-8">
                    Please note that phone verification is required for signup.
                    Your number <br className="hidden md:block" /> will only be
                    used to verify your identity for security purposes.
                </p>

                <form onSubmit={handleSignUp}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                        <fieldset className="border border-secondary rounded-[15px] mb-5 py-1">
                            <legend className="normal-text text-secondary ml-5 px-2">
                                First name
                            </legend>

                            <input
                                type="text"
                                className="border-0 w-full bg-transparent border-transparent focus:border-transparent focus:ring-0 normal-text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First name"
                            />
                        </fieldset>

                        <fieldset className="border border-secondary rounded-[15px] mb-5 py-1">
                            <legend className="normal-text text-secondary ml-5 px-2">
                                Last name
                            </legend>

                            <input
                                type="text"
                                className="border-0 w-full bg-transparent border-transparent focus:border-transparent focus:ring-0 normal-text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last name"
                            />
                        </fieldset>
                    </div>

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
                            Mobile number
                        </legend>

                        <input
                            type="text"
                            className="border-0 w-full bg-transparent border-transparent focus:border-transparent focus:ring-0 normal-text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+8801000000000"
                        />
                    </fieldset>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                        <fieldset className="border border-secondary rounded-[15px] mb-5 py-1">
                            <legend className="normal-text text-secondary ml-5 px-2">
                                Password
                            </legend>

                            <div className="flex justify-between w-full">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="border-0 bg-transparent border-transparent focus:border-transparent focus:ring-0 normal-text"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="*************"
                                />

                                <button
                                    type="button"
                                    className="pr-3"
                                    onClick={handleShowPassord}
                                >
                                    <i
                                        className={`fa-solid ${
                                            showPassword
                                                ? "fa-eye-slash"
                                                : "fa-eye"
                                        } text-customSilver`}
                                    ></i>
                                </button>
                            </div>
                        </fieldset>

                        <fieldset className="border border-secondary rounded-[15px] mb-5 py-1">
                            <legend className="normal-text text-secondary ml-5 px-2">
                                Confirm Password
                            </legend>

                            <div className="flex justify-between w-full">
                                <input
                                    type={showPassword2 ? "text" : "password"}
                                    className="border-0 bg-transparent border-transparent focus:border-transparent focus:ring-0 normal-text"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    placeholder="*************"
                                />

                                <button
                                    type="button"
                                    className="pr-3"
                                    onClick={handleShowPassord2}
                                >
                                    <i
                                        className={`fa-solid ${
                                            showPassword2
                                                ? "fa-eye-slash"
                                                : "fa-eye"
                                        } text-customSilver`}
                                    ></i>
                                </button>
                            </div>
                        </fieldset>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="normal-text mb-5 md:mb-0">
                            Already have an account?{" "}
                            <Link className="text-primary" href="/login">
                                Log in
                            </Link>
                        </p>

                        <button className="yellow-btn w-full md:w-fit rounded-[15px] py-4 px-8">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
