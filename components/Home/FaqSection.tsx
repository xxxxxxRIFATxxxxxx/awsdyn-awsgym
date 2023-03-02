import React, { useState } from "react";

const FaqItem = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow((prevState) => {
            return !prevState;
        });
    };

    return (
        <div className="mb-4">
            <h2 id="accordion-collapse-heading-1" onClick={handleShow}>
                <button
                    type="button"
                    className={`${
                        show
                            ? "bg-primary text-white"
                            : "bg-white text-gray-500"
                    } flex items-center justify-between w-full p-5 font-medium text-left custom-rounded shadow transition-all duration-500 ease-in-out relative z-20`}
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                >
                    <span>{title}</span>

                    <svg
                        data-accordion-icon
                        className={`w-6 h-6 ${
                            show ? "rotate-180" : "rotate-0 "
                        } shrink-0 transition-all duration-500 ease-in-out`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </h2>

            <div
                id="accordion-collapse-body-1"
                className={`${
                    show
                        ? "opacity-100 h-fit transition-all duration-500 ease-in-out"
                        : "opacity-0 h-0 transition-all duration-500 ease-in-out "
                } transition-all duration-500 ease-in-out h-fit`}
                aria-labelledby="accordion-collapse-heading-1"
            >
                <div className="p-5 font-light text-gray-500 shadow custom-rounded bg-white mt-2">
                    {description}
                </div>
            </div>
        </div>
    );
};

const FaqSection = () => {
    return (
        <div className="faq-section">
            <div className="custom-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-primary heading-2 pb-5 text-center md:text-start">
                            Frequently Asked <br /> Question
                        </h2>

                        <p className="normal-text w-full text-center md:text-justify lg:w-4/5">
                            How I get a quotation my project?
                        </p>
                    </div>

                    <div
                        className="h-[500px] transition-all duration-700 ease-in-out overflow-y-auto faq-item-container"
                        id="accordion-collapse"
                        data-accordion="collapse"
                    >
                        <FaqItem
                            title="How I get a quotation my project?"
                            description=" Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more."
                        />

                        <FaqItem
                            title="How I get a quotation my project?"
                            description=" Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more."
                        />

                        <FaqItem
                            title="How I get a quotation my project?"
                            description=" Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more."
                        />

                        <FaqItem
                            title="How I get a quotation my project?"
                            description=" Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more."
                        />

                        <FaqItem
                            title="How I get a quotation my project?"
                            description=" Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more."
                        />

                        <FaqItem
                            title="How I get a quotation my project?"
                            description=" Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
