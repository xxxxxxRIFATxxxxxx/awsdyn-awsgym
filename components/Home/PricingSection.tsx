import React from "react";

const PricingSection = () => {
    return (
        <div className="pricing-section">
            <div className="custom-container">
                <h2 className="text-primary heading-2 text-center pb-5">
                    Simple, easy pricing
                </h2>

                <p className="normal-text text-center pb-5 md:pb-10">
                    Our pricing strategy is uncomplicated, ensuring that you
                    receive <br className="hidden md:block" /> a fair deal
                    without any confusing or complex pricing models
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="pricing-card border custom-rounded p-7 cursor-pointer">
                        <h4 className="pricing-card-title text-2xl font-semibold pb-5 text-center md:text-start">
                            Basic Plan
                        </h4>

                        <div className="flex flex-col md:flex-row items-center justify-between pb-5">
                            <h2 className="text-7xl font-bold mr-0 lg:mr-10 pb-5 lg:pb-0 text-center md:text-start">
                                $10
                            </h2>

                            <div className="text-center md:text-start">
                                <h4 className="font-bold">Per User</h4>
                                <h4 className="font-bold">Per Month</h4>
                            </div>
                        </div>

                        <p className="normal-text pb-5 text-center md:text-start">
                            All the basic features to boost <br /> your
                            freelance career
                        </p>

                        <div className="pb-5">
                            <button className="tertiary-btn w-full pricing-card-btn">
                                Buy Now
                            </button>
                        </div>

                        <div className="text-center md:text-start">
                            <h5 className="text-xl font-semibold pb-5">
                                Features
                            </h5>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    Full Access to Landingfolio
                                </p>

                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pricing-card-info-icon"
                                >
                                    <path
                                        d="M8 5V8M8 11H8.0075M14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8Z"
                                        stroke="#71717A"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    100 GB Free Storage
                                </p>

                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pricing-card-info-icon"
                                >
                                    <path
                                        d="M8 5V8M8 11H8.0075M14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8Z"
                                        stroke="#71717A"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    Unlimited Visitors
                                </p>
                            </div>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    10 Agents
                                </p>
                            </div>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    Live Chat Support
                                </p>

                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pricing-card-info-icon"
                                >
                                    <path
                                        d="M8 5V8M8 11H8.0075M14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8Z"
                                        stroke="#71717A"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-card border custom-rounded p-7 cursor-pointer">
                        <h4 className="pricing-card-title text-2xl font-semibold pb-5 text-center md:text-start">
                            Advance Plan
                        </h4>

                        <div className="flex flex-col md:flex-row items-center justify-between pb-5">
                            <h2 className="text-7xl font-bold mr-0 lg:mr-10 pb-5 lg:pb-0 text-center md:text-start">
                                $49
                            </h2>

                            <div className="text-center md:text-start">
                                <h4 className="font-bold">Per User</h4>
                                <h4 className="font-bold">Per Month</h4>
                            </div>
                        </div>

                        <p className="normal-text pb-5 text-center md:text-start">
                            All the basic features to boost <br /> your
                            freelance career
                        </p>

                        <div className="pb-5">
                            <button className="tertiary-btn w-full pricing-card-btn">
                                Buy Now
                            </button>
                        </div>

                        <div className="text-center md:text-start">
                            <h5 className="text-xl font-semibold pb-5">
                                Features
                            </h5>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    Full Access to Landingfolio
                                </p>

                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pricing-card-info-icon"
                                >
                                    <path
                                        d="M8 5V8M8 11H8.0075M14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8Z"
                                        stroke="#71717A"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    100 GB Free Storage
                                </p>

                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pricing-card-info-icon"
                                >
                                    <path
                                        d="M8 5V8M8 11H8.0075M14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8Z"
                                        stroke="#71717A"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    Unlimited Visitors
                                </p>
                            </div>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    10 Agents
                                </p>
                            </div>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    Live Chat Support
                                </p>

                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pricing-card-info-icon"
                                >
                                    <path
                                        d="M8 5V8M8 11H8.0075M14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8Z"
                                        stroke="#71717A"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-card border custom-rounded p-7 cursor-pointer">
                        <h4 className="pricing-card-title text-2xl font-semibold pb-5 text-center md:text-start">
                            Premium Plan
                        </h4>

                        <div className="flex flex-col md:flex-row items-center justify-between pb-5">
                            <h2 className="text-7xl font-bold mr-0 lg:mr-10 pb-5 lg:pb-0 text-center md:text-start">
                                $99
                            </h2>

                            <div className="text-center md:text-start">
                                <h4 className="font-bold">Per User</h4>
                                <h4 className="font-bold">Per Month</h4>
                            </div>
                        </div>

                        <p className="normal-text pb-5 text-center md:text-start">
                            All the basic features to boost <br /> your
                            freelance career
                        </p>

                        <div className="pb-5">
                            <button className="tertiary-btn w-full pricing-card-btn">
                                Buy Now
                            </button>
                        </div>

                        <div className="text-center md:text-start">
                            <h5 className="text-xl font-semibold pb-5">
                                Features
                            </h5>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    Full Access to Landingfolio
                                </p>

                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pricing-card-info-icon"
                                >
                                    <path
                                        d="M8 5V8M8 11H8.0075M14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8Z"
                                        stroke="#71717A"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    100 GB Free Storage
                                </p>

                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pricing-card-info-icon"
                                >
                                    <path
                                        d="M8 5V8M8 11H8.0075M14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8Z"
                                        stroke="#71717A"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    Unlimited Visitors
                                </p>
                            </div>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    10 Agents
                                </p>
                            </div>

                            <div className="flex items-center pb-3">
                                <i className="fa-solid fa-circle-check text-gray-400 pr-1 md:pr-2"></i>

                                <p className="text-base pr-1 md:pr-2">
                                    Live Chat Support
                                </p>

                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pricing-card-info-icon"
                                >
                                    <path
                                        d="M8 5V8M8 11H8.0075M14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8Z"
                                        stroke="#71717A"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
