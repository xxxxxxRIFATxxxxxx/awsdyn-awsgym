import { useState } from "react";

const FeatureSection = () => {
    const [btnIsShown, setBtnIsShown] = useState(false);
    const mouseEnterHandler = () => {
        setBtnIsShown(true);
    };

    return (
        <div className="feature-section" id="feature-section">
            <div className="custom-container">
                <h2 className="text-primary heading-2 text-center pb-5">
                    We are Offering Best Features
                </h2>

                <p className="normal-text text-center pb-5 md:pb-10">
                    BlueLight Health Envisions a World Where Living a Healthy{" "}
                    <br className="hidden md:block" /> Lifestyle Comes
                    Naturally. You, as Part of Bluelight
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="feature-card relative overflow-hidden">
                        <img
                            className="w-full block h-auto"
                            src="/images/feature-card-img-1.png"
                            alt="image"
                        />

                        <div className="feature-card-text-box relative">
                            <div className="bg-white w-full absolute left-0 right-0 py-5 overflow-hidden custom-rounded feature-card-text">
                                <img
                                    className="w-14 h-12 pb-2 absolute top-2 lg:top-1 xl:top-2 2xl:top-7 left-2 lg:left-4 rotate-back"
                                    src="/images/body-icon.svg"
                                    alt="image"
                                />

                                <h4 className="text-xl font-semibold pb-1 ml-[21px] lg:ml-[21.5px] rotate-back">
                                    Cycling
                                </h4>

                                <p className="normal-text pb-5 ml-8 rotate-back">
                                    Perfect features for fitness & gym...
                                </p>

                                <button className="primary-btn rotate-back w-[62%] md:w-[67%] lg:w-[67%] xl:w-[70%] 2xl:w-[80%] ml-10">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="feature-card relative overflow-hidden">
                        <img
                            className="w-full block h-auto"
                            src="/images/feature-card-img-2.png"
                            alt="image"
                        />

                        <div className="feature-card-text-box relative">
                            <div className="bg-white w-full absolute left-0 right-0 py-5 overflow-hidden custom-rounded feature-card-text">
                                <img
                                    className="w-14 h-12 pb-2 absolute top-2 lg:top-1 xl:top-2 2xl:top-7 left-2 lg:left-4 rotate-back"
                                    src="/images/body-icon.svg"
                                    alt="image"
                                />

                                <h4 className="text-xl font-semibold pb-1 ml-[21px] lg:ml-[21.5px] rotate-back">
                                    Cycling
                                </h4>

                                <p className="normal-text pb-5 ml-8 rotate-back">
                                    Perfect features for fitness & gym...
                                </p>

                                <button className="primary-btn rotate-back w-[62%] md:w-[67%] lg:w-[67%] xl:w-[70%] 2xl:w-[80%] ml-10">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="feature-card relative overflow-hidden">
                        <img
                            className="w-full block h-auto"
                            src="/images/feature-card-img-3.png"
                            alt="image"
                        />

                        <div className="feature-card-text-box relative">
                            <div className="bg-white w-full absolute left-0 right-0 py-5 overflow-hidden custom-rounded feature-card-text">
                                <img
                                    className="w-14 h-12 pb-2 absolute top-2 lg:top-1 xl:top-2 2xl:top-7 left-2 lg:left-4 rotate-back"
                                    src="/images/body-icon.svg"
                                    alt="image"
                                />

                                <h4 className="text-xl font-semibold pb-1 ml-[21px] lg:ml-[21.5px] rotate-back">
                                    Cycling
                                </h4>

                                <p className="normal-text pb-5 ml-8 rotate-back">
                                    Perfect features for fitness & gym...
                                </p>

                                <button className="primary-btn rotate-back w-[62%] md:w-[67%] lg:w-[67%] xl:w-[70%] 2xl:w-[80%] ml-10">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="feature-card relative overflow-hidden">
                        <img
                            className="w-full block h-auto"
                            src="/images/feature-card-img-4.png"
                            alt="image"
                        />

                        <div className="feature-card-text-box relative">
                            <div className="bg-white w-full absolute left-0 right-0 py-5 overflow-hidden custom-rounded feature-card-text">
                                <img
                                    className="w-14 h-12 pb-2 absolute top-2 lg:top-1 xl:top-2 2xl:top-7 left-2 lg:left-4 rotate-back"
                                    src="/images/body-icon.svg"
                                    alt="image"
                                />

                                <h4 className="text-xl font-semibold pb-1 ml-[21px] lg:ml-[21.5px] rotate-back">
                                    Cycling
                                </h4>

                                <p className="normal-text pb-5 ml-8 rotate-back">
                                    Perfect features for fitness & gym...
                                </p>

                                <button className="primary-btn rotate-back w-[62%] md:w-[67%] lg:w-[67%] xl:w-[70%] 2xl:w-[80%] ml-10">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="feature-card relative overflow-hidden">
                        <img
                            className="w-full block h-auto"
                            src="/images/feature-card-img-5.png"
                            alt="image"
                        />

                        <div className="feature-card-text-box relative">
                            <div className="bg-white w-full absolute left-0 right-0 py-5 overflow-hidden custom-rounded feature-card-text">
                                <img
                                    className="w-14 h-12 pb-2 absolute top-2 lg:top-1 xl:top-2 2xl:top-7 left-2 lg:left-4 rotate-back"
                                    src="/images/body-icon.svg"
                                    alt="image"
                                />

                                <h4 className="text-xl font-semibold pb-1 ml-[21px] lg:ml-[21.5px] rotate-back">
                                    Cycling
                                </h4>

                                <p className="normal-text pb-5 ml-8 rotate-back">
                                    Perfect features for fitness & gym...
                                </p>

                                <button className="primary-btn rotate-back w-[62%] md:w-[67%] lg:w-[67%] xl:w-[70%] 2xl:w-[80%] ml-10">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="feature-card relative overflow-hidden">
                        <img
                            className="w-full block h-auto"
                            src="/images/feature-card-img-6.png"
                            alt="image"
                        />

                        <div className="feature-card-text-box relative">
                            <div className="bg-white w-full absolute left-0 right-0 py-5 overflow-hidden custom-rounded feature-card-text">
                                <img
                                    className="w-14 h-12 pb-2 absolute top-2 lg:top-1 xl:top-2 2xl:top-7 left-2 lg:left-4 rotate-back"
                                    src="/images/body-icon.svg"
                                    alt="image"
                                />

                                <h4 className="text-xl font-semibold pb-1 ml-[21px] lg:ml-[21.5px] rotate-back">
                                    Cycling
                                </h4>

                                <p className="normal-text pb-5 ml-8 rotate-back">
                                    Perfect features for fitness & gym...
                                </p>

                                <button className="primary-btn rotate-back w-[62%] md:w-[67%] lg:w-[67%] xl:w-[70%] 2xl:w-[80%] ml-10">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
