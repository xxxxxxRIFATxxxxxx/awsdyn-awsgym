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
                    {/* <div className="relative overflow-auto">
                        <img
                            className="w-4/5 mx-auto overflow-hidden"
                            src="/images/feature-card-img-1.png"
                            alt="image"
                        />

                        <div className="bg-white rounded-2xl p-5 relative bottom-48 rotate-12">
                            <img
                                className="w-18"
                                src="/images/body-icon.svg"
                                alt="image"
                            />

                            <div>
                                <h4 className="text-xl font-semibold">
                                    Cycling
                                </h4>

                                <p className="normal-text pb-4">
                                    Perfect features for fitness & gym
                                </p>

                                <button className="primary-btn w-full">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div> */}

                    <div
                        className="relative overflow-hidden"
                        style={{ width: "391px", height: "546px" }}
                    >
                        <img
                            className="absolute left-0 top-0 rounded-2xl overflow-hidden"
                            style={{ width: "390px", height: "542px" }}
                            src="/images/feature-card-img-1.png"
                        />

                        <div
                            className="relative bg-white rounded-2xl overflow-hidden"
                            style={{
                                width: "100%",
                                height: "250px",
                                transform: "rotate(18deg)",
                                left: 14,
                                top: "350px",
                                outline: "10px solid rgba(253, 253, 253, 0.5)",
                            }}
                        >
                            <div
                                className="inline-flex flex-col space-y-2 items-start justify-start w-72 h-28 absolute bottom-20 left-10"
                                style={{
                                    transform: "rotate(-18deg)",
                                    marginBottom: "50px",
                                }}
                            >
                                <div>
                                    <img
                                        className="w-14 h-12 pb-2"
                                        src="/images/body-icon.svg"
                                        alt="image"
                                    />

                                    <h4 className="text-xl font-semibold">
                                        Cycling
                                    </h4>

                                    <p className="normal-text pb-2">
                                        Perfect features for fitness & gym...
                                    </p>

                                    <button className="primary-btn w-full">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
