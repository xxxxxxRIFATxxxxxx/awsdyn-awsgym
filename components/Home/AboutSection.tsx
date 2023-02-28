import React from "react";

const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="custom-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24">
                    <div>
                        <img
                            className="w-full"
                            src="/images/about-img.png"
                            alt="image"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-primary heading-2 pb-5">
                            About us
                        </h2>

                        <p className="normal-text pb-5 w-full text-justify lg:w-3/5">
                            we are passionate about helping people transform
                            their bodies and minds through fitness. our vision
                            is to create a welcoming and supportive environment
                            where everyone can achieve their fitness goals, no
                            matter their starting point.
                        </p>

                        <p className="normal-text pb-5 w-full text-justify lg:w-3/5">
                            That's why we have gathered a team of expert
                            trainers and invested in top-of-the-line equipment
                            and facilities.
                        </p>

                        <button className="primary-btn w-fit">
                            Read Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
