import React from "react";

const FeatureSection = () => {
    return (
        <div className="feature-section">
            <div className="custom-container">
                <h1 className="text-primary heading-2 text-center pb-5">
                    We are Offering Best Features
                </h1>

                <p className="normal-black-text text-center pb-5">
                    BlueLight Health Envisions a World Where Living a Healthy{" "}
                    <br />
                    Lifestyle Comes Naturally. You, as Part of Bluelight
                </p>

                <div className="grid grid-cols-3 gap-8">
                    <div className="feature-card h-[544px] rounded-xl relative">
                        <div className="bg-white absolute bottom-0 w-full mx-auto rounded-xl p-10 feature-card-text">
                            <img
                                className="w-[50px] pb-1"
                                src="/images/body-icon.svg"
                                alt="image"
                            />

                            <h6 className="text-xl font-semibold pb-1">
                                Cycling
                            </h6>

                            <p className="normal-text">
                                Perfect features for fitness & gym...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
