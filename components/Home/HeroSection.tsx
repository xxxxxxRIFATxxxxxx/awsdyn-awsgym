import React from "react";
import Header from "../Layout/Header";

const HeroSection = () => {
    return (
        <div className="hero-section h-screen relative">
            <div className="darken-box h-screen absolute top-0 left-0 w-full block md:hidden"></div>

            <div className="flex items-center h-screen">
                <div className="p-10 md:p-20 lg:p-40">
                    <h1 className="text-white heading-1 text-center md:text-start pb-5">
                        Empower Your Life Through{" "}
                        <br className="hidden md:block" /> Fitness & Wellness
                    </h1>

                    <p className="normal-white-text text-center md:text-start pb-5">
                        BlueLight Health Envisions a World Where Living a
                        Healthy <br className="hidden md:block" />
                        Lifestyle Comes Naturally. You, as Part of Bluelight{" "}
                        <br className="hidden md:block" /> Health Can Make That
                        Happen
                    </p>

                    <div className="pb-5 text-center md:text-start">
                        <button type="button" className="primary-btn mr-3">
                            Join Fitness
                        </button>

                        <button type="button" className="secondary-btn">
                            Buy Gym Item
                        </button>
                    </div>

                    <div className="flex item-center justify-center md:justify-start">
                        <div className="text-center mr-10">
                            <h4 className="text-white font-semibold text-lg">
                                500+
                            </h4>
                            <p className="normal-white-text">Active Training</p>
                        </div>

                        <div className="text-center mr-10">
                            <h4 className="text-white font-semibold text-lg">
                                600+
                            </h4>
                            <p className="normal-white-text">Equipment</p>
                        </div>

                        <div className="text-center">
                            <h4 className="text-white font-semibold text-lg">
                                2500+
                            </h4>
                            <p className="normal-white-text">Trained</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
