import Link from "next/link";
import { useState } from "react";

const Dashboard = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeSchedule, setActiveSchedule] = useState("Sunday");

    const handleShowDropdown = () => {
        setShowDropdown((prevState) => {
            return !prevState;
        });
    };

    const handleActiveSchedule = (scheduleDay: string) => {
        setActiveSchedule(scheduleDay);
    };

    return (
        <div className="bg-customSilver2 grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 md:p-8 lg:p-16">
            {/* Sidebar */}
            <div className="lg:col-span-3 bg-white custom-rounded p-8 relative h-[90vh]">
                <div className="flex items-center justify-between mb-8">
                    <div className="relative">
                        <img
                            className="w-14"
                            src="/images/profile-picture-small.png"
                            alt="image"
                        />

                        <div className="bg-green-500 rounded-full h-3 w-3 border border-white absolute bottom-0 right-1"></div>
                    </div>

                    <div className="relative">
                        <button
                            className="text-black font-medium text-sm px-4 py-2.5 text-center inline-flex items-center"
                            type="button"
                            onClick={handleShowDropdown}
                        >
                            Md Mahbub Alam{" "}
                            <svg
                                className="w-4 h-4 ml-2"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>

                        <div
                            className={`z-10 ${
                                showDropdown ? "block" : "hidden"
                            } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute w-[99.5%] mx-auto`}
                        >
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                            >
                                <li>
                                    <button className="block px-4 py-2 normal-text w-full">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h6 className="normal-text font-semibold mb-4">
                        Your Goal
                    </h6>

                    <div className="bg-[#EAF5FE] rounded-full mb-4">
                        <div className="bg-[#1A8DFA] p-5 rounded-full w-[37%]"></div>
                    </div>

                    <p className="normal-text">Reached 37% of your target</p>
                </div>

                <div className="mb-8 flex items-center justify-between">
                    <div className="border custom-rounded p-3 text-center w-full mr-4">
                        <p className="normal-text mb-2">Current Balance</p>
                        <h4 className="text-[#5EC563] heading-2">1,000৳</h4>
                    </div>

                    <div className="border custom-rounded p-3 text-center w-full">
                        <p className="normal-text mb-2">Pending Balance</p>
                        <h4 className="text-[#FA3963] heading-2">5,000৳</h4>
                    </div>
                </div>

                <div className="mb-8">
                    <h6 className="normal-text font-semibold mb-4">Feature</h6>

                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="custom-rounded p-3 bg-[#F8F8F8] border text-center w-full mr-4"
                        >
                            <i className="fa-solid fa-calendar-days"></i>
                            <p className="normal-text">Calender</p>
                        </Link>

                        <Link
                            href="/"
                            className="custom-rounded p-3 bg-[#F8F8F8] border text-center w-full mr-4"
                        >
                            <i className="fa-solid fa-dumbbell"></i>
                            <p className="normal-text">Equipment</p>
                        </Link>

                        <Link
                            href="/"
                            className="custom-rounded p-3 bg-[#F8F8F8] border text-center w-full"
                        >
                            <i className="fa-solid fa-gift"></i>
                            <p className="normal-text">Package</p>
                        </Link>
                    </div>
                </div>

                <div className="border-t flex justify-between pt-5 absolute bottom-10 right-0 left-0 mx-auto w-[85%]">
                    <button className="w-full text-gray-600 hover:text-secondary">
                        <i className="fa-solid fa-gear text-lg"></i>
                    </button>

                    <button className="w-full text-gray-600 hover:text-secondary">
                        <i className="fa-solid fa-comment-dots text-lg"></i>
                    </button>

                    <button className="w-full text-gray-600 hover:text-secondary">
                        <i className="fa-solid fa-bell text-lg"></i>
                    </button>

                    <button className="w-full text-gray-600 hover:text-secondary">
                        <i className="fa-solid fa-sun text-lg"></i>
                    </button>
                </div>
            </div>

            <div className="lg:col-span-9">
                {/* Header */}
                <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-start mb-4 md:mb-0">
                        <h2 className="heading-2 mb-1">Hello, Mahbub Alam</h2>
                        <p className="text-sm text-gray-500">
                            Welcome to Awsgym.
                        </p>
                    </div>

                    <div>
                        <Link href="/">
                            <img
                                className="w-[15rem]"
                                src="/images/logo-2.svg"
                                alt="image"
                            />
                        </Link>
                    </div>
                </div>

                {/* Profile Info */}
                <div className="bg-white custom-rounded p-8 mb-8 flex flex-col md:flex-row justify-center md:justify-start items-center">
                    <div className="mr-0 md:mr-16 mb-4 md:mb-0">
                        <img
                            className="w-[30rem] custom-rounded"
                            src="/images/profile-picture.png"
                            alt="image"
                        />
                    </div>

                    <div className="mr-0 md:mr-16 mb-4 md:mb-0">
                        <h4 className="text-xl font-semibold mb-4">
                            Mahbub Alam
                        </h4>

                        <div className="normal-text flex items-center">
                            <i className="fa-solid fa-envelope text-xl mr-2 text-gray-600"></i>
                            <p>mahbubalam12@gmail.com</p>
                        </div>

                        <div className="normal-text flex items-center">
                            <i className="fa-solid fa-phone text-xl mr-2 text-gray-600"></i>
                            <p>+88 01234 567890</p>
                        </div>

                        <div className="normal-text flex items-center">
                            <i className="fa-solid fa-gift text-xl mr-2 text-gray-600"></i>
                            <p>6 months Package</p>
                        </div>

                        <div className="normal-text flex items-center">
                            <i className="fa-solid fa-location-dot text-xl mr-2 text-gray-600"></i>
                            <p>Banasree, Dhaka</p>
                        </div>
                    </div>

                    <div className="w-full h-full">
                        <button className="yellow-btn flex items-center w-full md:w-fit md:ml-auto justify-center">
                            <i className="fa-solid fa-pen mr-2"></i>
                            <span>Edit profile</span>
                        </button>
                    </div>
                </div>

                {/* Gym Schedule */}
                <div className="bg-white custom-rounded p-8 mb-8">
                    <h2 className="heading-2 mb-8">Gym Schedule</h2>

                    <div className="flex flex-col md:flex-row items-center mb-8">
                        <button
                            onClick={() => handleActiveSchedule("Sunday")}
                            className={`border normal-text hover:text-white hover:bg-secondary rounded-xl p-3 mb-4 md:mr-4 w-full ${
                                activeSchedule === "Sunday"
                                    ? "bg-secondary text-white"
                                    : "bg-[#F8F8F8]"
                            }`}
                        >
                            Sunday
                        </button>

                        <button
                            onClick={() => handleActiveSchedule("Monday")}
                            className={`border normal-text hover:text-white hover:bg-secondary rounded-xl p-3 mb-4 md:mr-4 w-full ${
                                activeSchedule === "Monday"
                                    ? "bg-secondary text-white"
                                    : "bg-[#F8F8F8]"
                            }`}
                        >
                            Monday
                        </button>

                        <button
                            onClick={() => handleActiveSchedule("Tuesday")}
                            className={`border normal-text hover:text-white hover:bg-secondary rounded-xl p-3 mb-4 md:mr-4 w-full ${
                                activeSchedule === "Tuesday"
                                    ? "bg-secondary text-white"
                                    : "bg-[#F8F8F8]"
                            }`}
                        >
                            Tuesday
                        </button>

                        <button
                            onClick={() => handleActiveSchedule("Wednesday")}
                            className={`border normal-text hover:text-white hover:bg-secondary rounded-xl p-3 mb-4 md:mr-4 w-full ${
                                activeSchedule === "Wednesday"
                                    ? "bg-secondary text-white"
                                    : "bg-[#F8F8F8]"
                            }`}
                        >
                            Wednesday
                        </button>

                        <button
                            onClick={() => handleActiveSchedule("Thursday")}
                            className={`border normal-text hover:text-white hover:bg-secondary rounded-xl p-3 mb-4 md:mr-4 w-full ${
                                activeSchedule === "Thursday"
                                    ? "bg-secondary text-white"
                                    : "bg-[#F8F8F8]"
                            }`}
                        >
                            Thursday
                        </button>

                        <button
                            onClick={() => handleActiveSchedule("Friday")}
                            className={`border normal-text hover:text-white hover:bg-secondary rounded-xl p-3 mb-4 md:mr-4 w-full ${
                                activeSchedule === "Friday"
                                    ? "bg-secondary text-white"
                                    : "bg-[#F8F8F8]"
                            }`}
                        >
                            Friday
                        </button>

                        <button
                            onClick={() => handleActiveSchedule("Saturday")}
                            className={`border normal-text hover:text-white hover:bg-secondary rounded-xl p-3 mb-4 w-full ${
                                activeSchedule === "Saturday"
                                    ? "bg-secondary text-white"
                                    : "bg-[#F8F8F8]"
                            }`}
                        >
                            Saturday
                        </button>
                    </div>

                    <div
                        className={`${
                            activeSchedule === "Sunday" ? "block" : "hidden"
                        }`}
                    >
                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Push up</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>

                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Cycling</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>

                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Push up</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${
                            activeSchedule === "Monday" ? "block" : "hidden"
                        }`}
                    >
                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Cycling</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>

                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Push up</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>

                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Push up</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${
                            activeSchedule === "Tuesday" ? "block" : "hidden"
                        }`}
                    >
                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Push up</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>

                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Cycling</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>
                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Push up</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${
                            activeSchedule === "Wednesday" ? "block" : "hidden"
                        }`}
                    >
                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Cycling</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>
                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Push up</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>
                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Push up</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${
                            activeSchedule === "Thursday" ? "block" : "hidden"
                        }`}
                    >
                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Push up</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>

                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Cycling</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>
                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Push up</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${
                            activeSchedule === "Friday" ? "block" : "hidden"
                        }`}
                    >
                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Cycling</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>
                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Push up</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>
                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Push up</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${
                            activeSchedule === "Saturday" ? "block" : "hidden"
                        }`}
                    >
                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Push up</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>

                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Cycling</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>
                        <div className="border custom-rounded bg-[#F8F8F8] p-8 flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className=" mb-4 text-center md:text-start">
                                <h6 className="text-gray-500 text-sm">
                                    Event Name
                                </h6>

                                <p className="text-lg">Push up</p>
                            </div>

                            <div className="text-center mb-4">
                                <h6 className="text-gray-500 text-sm">Time</h6>

                                <p className="text-lg">10:00am - 11:00pm</p>
                            </div>

                            <div className="text-center">
                                <p className="text-lg">10 Times (2 round)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Course List */}
                <div className="custom-rounded p-8">
                    <h2 className="heading-2 mb-8">Course List</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white custom-rounded p-8">
                            <div className="pb-4">
                                <img
                                    className="w-full custom-rounded"
                                    src="/images/course-1.png"
                                    alt="image"
                                />
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold pb-2">
                                    Course - 1
                                </h4>

                                <p className="normal-text">
                                    BlueLight Health Envisions a big World Where
                                    Living a Healthy
                                </p>
                            </div>
                        </div>

                        <div className="bg-white custom-rounded p-8">
                            <div className="pb-4">
                                <img
                                    className="w-full custom-rounded"
                                    src="/images/course-2.png"
                                    alt="image"
                                />
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold pb-2">
                                    Course - 2
                                </h4>

                                <p className="normal-text">
                                    BlueLight Health Envisions a big World Where
                                    Living a Healthy
                                </p>
                            </div>
                        </div>

                        <div className="bg-white custom-rounded p-8">
                            <div className="pb-4">
                                <img
                                    className="w-full custom-rounded"
                                    src="/images/course-1.png"
                                    alt="image"
                                />
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold pb-2">
                                    Course - 1
                                </h4>

                                <p className="normal-text">
                                    BlueLight Health Envisions a big World Where
                                    Living a Healthy
                                </p>
                            </div>
                        </div>

                        <div className="bg-white custom-rounded p-8">
                            <div className="pb-4">
                                <img
                                    className="w-full custom-rounded"
                                    src="/images/course-2.png"
                                    alt="image"
                                />
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold pb-2">
                                    Course - 2
                                </h4>

                                <p className="normal-text">
                                    BlueLight Health Envisions a big World Where
                                    Living a Healthy
                                </p>
                            </div>
                        </div>

                        <div className="bg-white custom-rounded p-8">
                            <div className="pb-4">
                                <img
                                    className="w-full custom-rounded"
                                    src="/images/course-1.png"
                                    alt="image"
                                />
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold pb-2">
                                    Course - 1
                                </h4>

                                <p className="normal-text">
                                    BlueLight Health Envisions a big World Where
                                    Living a Healthy
                                </p>
                            </div>
                        </div>

                        <div className="bg-white custom-rounded p-8">
                            <div className="pb-4">
                                <img
                                    className="w-full custom-rounded"
                                    src="/images/course-2.png"
                                    alt="image"
                                />
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold pb-2">
                                    Course - 2
                                </h4>

                                <p className="normal-text">
                                    BlueLight Health Envisions a big World Where
                                    Living a Healthy
                                </p>
                            </div>
                        </div>

                        <div className="bg-white custom-rounded p-8">
                            <div className="pb-4">
                                <img
                                    className="w-full custom-rounded"
                                    src="/images/course-1.png"
                                    alt="image"
                                />
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold pb-2">
                                    Course - 1
                                </h4>

                                <p className="normal-text">
                                    BlueLight Health Envisions a big World Where
                                    Living a Healthy
                                </p>
                            </div>
                        </div>

                        <div className="bg-white custom-rounded p-8">
                            <div className="pb-4">
                                <img
                                    className="w-full custom-rounded"
                                    src="/images/course-2.png"
                                    alt="image"
                                />
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold pb-2">
                                    Course - 2
                                </h4>

                                <p className="normal-text">
                                    BlueLight Health Envisions a big World Where
                                    Living a Healthy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
