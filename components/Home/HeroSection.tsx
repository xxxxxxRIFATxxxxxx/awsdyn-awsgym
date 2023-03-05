import Link from "next/link";
import React from "react";
import Header from "../Layout/Header";

const HeroSection = () => {
    return (
        <div className="hero-section h-screen relative">
            <div className="px-10 pt-10 md:px-20 lg:px-40 fixed w-full z-20 top-0 left-0 lg:static">
                <Header />
            </div>

            <Link
                href="signup"
                className="primary-btn fixed bottom-40 right-10 md:right-20 lg:right-40 z-20"
            >
                Register Today
            </Link>

            <div className="flex items-center h-screen lg:h-[85vh]">
                <div className="custom-container">
                    <h1 className="text-white heading-1 text-center md:text-start pb-5">
                        Empower Your Life Through{" "}
                        <br className="hidden md:block" /> Fitness & Wellness
                    </h1>

                    <p className="normal-text text-customWhite text-center md:text-start pb-5">
                        BlueLight Health Envisions a World Where Living a
                        Healthy <br className="hidden md:block" />
                        Lifestyle Comes Naturally. You, as Part of Bluelight{" "}
                        <br className="hidden md:block" /> Health Can Make That
                        Happen
                    </p>

                    <div className="pb-5 text-center md:text-start">
                        <Link
                            href="/signup"
                            type="button"
                            className="primary-btn mr-3"
                        >
                            Join Fitness
                        </Link>

                        <Link
                            href="/#product-section"
                            type="button"
                            className="secondary-btn"
                        >
                            Buy Gym Item
                        </Link>
                    </div>

                    <div className="flex item-center justify-center md:justify-start">
                        <div className="text-center mr-10">
                            <h4 className="text-white font-semibold text-lg">
                                500+
                            </h4>
                            <p className="normal-text text-customWhite">
                                Active Training
                            </p>
                        </div>

                        <div className="text-center mr-10">
                            <h4 className="text-white font-semibold text-lg">
                                600+
                            </h4>
                            <p className="normal-text text-customWhite">
                                Equipment
                            </p>
                        </div>

                        <div className="text-center">
                            <h4 className="text-white font-semibold text-lg">
                                2500+
                            </h4>
                            <p className="normal-text text-customWhite">
                                Trained
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
