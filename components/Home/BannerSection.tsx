import React from "react";

const BannerSection = () => {
    return (
        <div className="banner-section relative">
            <img src="/images/banner-img.svg" className="w-full" alt="image" />

            <div className="absolute h-fit top-0 bottom-0 my-auto custom-container">
                <h2 className="text-primary heading-2 pb-2 lg:pb-5 text-center lg:text-start">
                    Get Our Membership
                </h2>

                <p className="normal-text text-white pb-2 lg:pb-5 w-full lg:w-3/5 text-center lg:text-justify">
                    That's why we have gathered a team of expert trainers and
                    invested in top-of-the-line equipment and facilities.
                </p>

                <div className="text-center lg:text-start">
                    <button className="primary-btn w-fit">
                        Join Membership
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
