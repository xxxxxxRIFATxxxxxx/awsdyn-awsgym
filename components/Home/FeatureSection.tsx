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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <div
                        className="relative overflow-hidden"
                        style={{ width: "391px", height: "546px" }}
                    >
                        <img
                            className="absolute left-0 top-0 custom-rounded overflow-hidden"
                            style={{ width: "390px", height: "542px" }}
                            src="/images/feature-card-img-1.png"
                        />

                        <div
                            className="relative bg-white custom-rounded overflow-hidden"
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
                    </div> */}

                    {/* <div
                        className="relative overflow-hidden h-[400px] lg:h-[546px]"
                        style={{ width: "100%" }}
                    >
                        <img
                            className="absolute left-0 top-0 custom-rounded overflow-hidden h-[300px] lg:h-[542px]"
                            style={{ width: "100%" }}
                            src="/images/feature-card-img-1.png"
                        />

                        <div
                            className="relative bg-white custom-rounded overflow-hidden top-[150px] lg:top-[350px] h-[200px] lg:h-[250px]"
                            style={{
                                width: "100%",
                                transform: "rotate(18deg)",
                                left: 14,
                                outline: "10px solid rgba(253, 253, 253, 0.5)",
                            }}
                        >
                            <div
                                className="inline-flex flex-col space-y-2 items-start justify-start w-72 h-28 absolute bottom-20 left-5 lg:left-10 mb-[20px] lg:mb-[50px]"
                                style={{
                                    transform: "rotate(-18deg)",
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
                    </div> */}

                    <div className="relative">
                        <img
                            className="w-full"
                            src="/images/feature-card-img-1.png"
                            alt="image"
                        />

                        {/* <svg
                            className="absolute w-full bottom-0"
                            viewBox="0 0 391 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.84556 161.776C-2.24164 188.327 17.5985 189.75 44.5607 188.327C143.931 188.327 347.352 188.232 366.072 187.853C389.474 187.379 391 173.155 391 162.724V88.7594C391 65.5269 381.334 62.6821 359.968 58.8891C338.602 55.096 103.572 8.63105 71.523 1.99319C39.4736 -4.64466 35.9126 6.26039 32.8603 20.4844C29.8079 34.7083 7.93277 135.224 2.84556 161.776Z"
                                fill="#FDFDFD"
                                fill-opacity="0.5"
                            />
                            <path
                                d="M0.802892 173.075C-4.31109 199.626 15.6334 201.049 42.7376 199.626C142.631 199.626 347.122 199.532 365.941 199.152C389.466 198.678 391 184.454 391 174.023V100.059C391 76.8262 381.283 73.9814 359.805 70.1884C338.326 66.3953 102.06 19.9304 69.8418 13.2925C37.6237 6.65466 34.0439 17.5597 30.9756 31.7837C27.9072 46.0076 5.91688 146.524 0.802892 173.075Z"
                                fill="#FDFDFD"
                            />

                            <foreignObject width="100%" height="100%">
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
                            </foreignObject>
                        </svg> */}

                        <div className="feature-card-svg-container absolute top-0">
                            <svg
                                className="feature-card-svg-content"
                                viewBox="0 0 391 200"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.84556 161.776C-2.24164 188.327 17.5985 189.75 44.5607 188.327C143.931 188.327 347.352 188.232 366.072 187.853C389.474 187.379 391 173.155 391 162.724V88.7594C391 65.5269 381.334 62.6821 359.968 58.8891C338.602 55.096 103.572 8.63105 71.523 1.99319C39.4736 -4.64466 35.9126 6.26039 32.8603 20.4844C29.8079 34.7083 7.93277 135.224 2.84556 161.776Z"
                                    fill="#FDFDFD"
                                    fill-opacity="0.5"
                                />
                                <path
                                    d="M0.802892 173.075C-4.31109 199.626 15.6334 201.049 42.7376 199.626C142.631 199.626 347.122 199.532 365.941 199.152C389.466 198.678 391 184.454 391 174.023V100.059C391 76.8262 381.283 73.9814 359.805 70.1884C338.326 66.3953 102.06 19.9304 69.8418 13.2925C37.6237 6.65466 34.0439 17.5597 30.9756 31.7837C27.9072 46.0076 5.91688 146.524 0.802892 173.075Z"
                                    fill="#FDFDFD"
                                />

                                <object
                                    type="image/svg+xml"
                                    data="/images/feature-card-curve.svg"
                                    width="100%"
                                    height="100%"
                                    className="feature-card-svg-content"
                                ></object>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
