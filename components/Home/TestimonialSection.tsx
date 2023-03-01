import React from "react";

const TestimonialSection = () => {
    return (
        <div className="testimonial-section">
            <div className="custom-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-primary heading-2 pb-5 text-center md:text-start">
                            Testimonial
                        </h2>

                        <p className="normal-text pb-5 w-full text-center md:text-justify lg:w-4/5">
                            we are passionate about helping people transform
                            their bodies and minds through fitness. our vision
                            is to create a welcoming and supportive environment
                            where everyone can achieve their fitness goals, no
                            matter their starting point.
                        </p>

                        <p className="normal-text w-full text-center md:text-justify lg:w-4/5">
                            That's why we have gathered a team of expert
                            trainers and invested in top-of-the-line equipment
                            and facilities.
                        </p>
                    </div>

                    <div>
                        <div className="testimonial-card relative right-0 hover:right-10 transition-all duration-700 ease-in-out custom-rounded cursor-pointer border border-l-[28px] border-l-gray hover:border-l-primary flex flex-col md:flex-row items-center justify-center md:justify-between p-5 mb-5">
                            <div className="mr-5">
                                <img
                                    className="w-full md:w-40 mx-auto pb-5 md:pb-0"
                                    src="/images/testimonial-img-1.png"
                                    alt="image"
                                />
                            </div>

                            <div className="testimonial-text text-center md:text-start pb-5 md:pb-0 mr-4 lg:mr-0">
                                <h4 className="text-base lg:text-xl font-semibold">
                                    Elizabeth Jeff
                                </h4>

                                <p className="text-xs lg:normal-text">
                                    we are passionate about helping people tran
                                    sform their bodies and minds through fitne
                                    s. our vision is to create
                                </p>
                            </div>

                            <img
                                className="w-14 mx-auto testimonial-icon"
                                src="/images/testimonial-icon.svg"
                                alt="image"
                            />
                        </div>

                        <div className="testimonial-card relative right-0 hover:right-10 transition-all duration-700 ease-in-out custom-rounded cursor-pointer border border-l-[28px] border-l-gray hover:border-l-primary flex flex-col md:flex-row items-center justify-center md:justify-between p-5 mb-5">
                            <div className="mr-5">
                                <img
                                    className="w-full md:w-40 mx-auto pb-5 md:pb-0"
                                    src="/images/testimonial-img-2.png"
                                    alt="image"
                                />
                            </div>

                            <div className="testimonial-text text-center md:text-start pb-5 md:pb-0 mr-4 lg:mr-0">
                                <h4 className="text-base lg:text-xl font-semibold">
                                    Albert Hazard
                                </h4>

                                <p className="text-xs lg:normal-text">
                                    we are passionate about helping people tran
                                    sform their bodies and minds through fitne
                                    s. our vision is to create
                                </p>
                            </div>

                            <img
                                className="w-14 mx-auto testimonial-icon"
                                src="/images/testimonial-icon.svg"
                                alt="image"
                            />
                        </div>

                        <div className="testimonial-card relative right-0 hover:right-10 transition-all duration-700 ease-in-out custom-rounded cursor-pointer border border-l-[28px] border-l-gray hover:border-l-primary flex flex-col md:flex-row items-center justify-center md:justify-between p-5 mb-5">
                            <div className="mr-5">
                                <img
                                    className="w-full md:w-40 mx-auto pb-5 md:pb-0"
                                    src="/images/testimonial-img-3.png"
                                    alt="image"
                                />
                            </div>

                            <div className="testimonial-text text-center md:text-start pb-5 md:pb-0 mr-4 lg:mr-0">
                                <h4 className="text-base lg:text-xl font-semibold">
                                    Nathan lee
                                </h4>

                                <p className="text-xs lg:normal-text">
                                    we are passionate about helping people tran
                                    sform their bodies and minds through fitne
                                    s. our vision is to create
                                </p>
                            </div>

                            <img
                                className="w-14 mx-auto testimonial-icon"
                                src="/images/testimonial-icon.svg"
                                alt="image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
