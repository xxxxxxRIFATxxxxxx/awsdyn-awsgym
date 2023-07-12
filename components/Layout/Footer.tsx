import Link from "next/link";

const Footer = () => {
    return (
        <div className="footer-section bg-customBlack2">
            <div className="p-10 md:p-20 lg:px-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-5 md:pb-10">
                    <div>
                        <div className="pb-4">
                            <Link href="/">
                                <img
                                    className="w-20 mx-auto md:mx-0"
                                    src="/images/logo.png"
                                    alt="logo"
                                />
                            </Link>
                        </div>

                        <p className="normal-text text-white pb-4 text-center md:text-start">
                            we are passionate about helping people transform
                            their bodies and minds through fitness. our vision
                            is to create a welcoming and supportive
                        </p>

                        <div className="flex items-center pb-4 justify-center md:justify-start">
                            <i className="fa-sharp fa-solid fa-location-dot text-white text-2xl pr-2"></i>

                            <p className="text-white normal-text">
                                50 Rokland Lane Brookyl, NY 1122
                            </p>
                        </div>

                        <div className="text-center md:text-start">
                            <Link href="/">
                                <i className="fa-brands fa-facebook text-white text-2xl pr-4 hover:text-primary"></i>
                            </Link>

                            <Link href="/">
                                <i className="fa-brands fa-whatsapp text-white text-2xl pr-4 hover:text-primary"></i>
                            </Link>

                            <Link href="/">
                                <i className="fa-brands fa-linkedin text-white text-2xl pr-4 hover:text-primary"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="text-center md:text-start">
                        <div className="pb-4">
                            <h3 className="text-white text-2xl font-semibold">
                                Services
                            </h3>
                        </div>

                        <div>
                            <Link
                                href="/"
                                className="text-white hover:text-primary normal-text block pb-5"
                            >
                                <i className="fa-solid fa-caret-right pr-2"></i>
                                <span>Fitness</span>
                            </Link>

                            <Link
                                href="/"
                                className="text-white hover:text-primary normal-text block pb-5"
                            >
                                <i className="fa-solid fa-caret-right pr-2"></i>
                                <span>Meditation</span>
                            </Link>

                            <Link
                                href="/"
                                className="text-white hover:text-primary normal-text block pb-5"
                            >
                                <i className="fa-solid fa-caret-right pr-2"></i>
                                <span>Workout</span>
                            </Link>

                            <Link
                                href="/"
                                className="text-white hover:text-primary normal-text block pb-5"
                            >
                                <i className="fa-solid fa-caret-right pr-2"></i>
                                <span>Exercise</span>
                            </Link>

                            <Link
                                href="/"
                                className="text-white hover:text-primary normal-text block pb-5"
                            >
                                <i className="fa-solid fa-caret-right pr-2"></i>
                                <span>Yoga</span>
                            </Link>
                        </div>
                    </div>

                    <div className="text-center md:text-start">
                        <div className="pb-4">
                            <h3 className="text-white text-2xl font-semibold">
                                Quick Links
                            </h3>
                        </div>

                        <div>
                            <Link
                                href="/"
                                className="text-white hover:text-primary normal-text block pb-5"
                            >
                                <i className="fa-solid fa-caret-right pr-2"></i>
                                <span>Blogs</span>
                            </Link>

                            <Link
                                href="/"
                                className="text-white hover:text-primary normal-text block pb-5"
                            >
                                <i className="fa-solid fa-caret-right pr-2"></i>
                                <span>Pricing</span>
                            </Link>

                            <Link
                                href="/"
                                className="text-white hover:text-primary normal-text block pb-5"
                            >
                                <i className="fa-solid fa-caret-right pr-2"></i>
                                <span>Equipment</span>
                            </Link>

                            <Link
                                href="/"
                                className="text-white hover:text-primary normal-text block pb-5"
                            >
                                <i className="fa-solid fa-caret-right pr-2"></i>
                                <span>FAQ</span>
                            </Link>

                            <Link
                                href="/"
                                className="text-white hover:text-primary normal-text block pb-5"
                            >
                                <i className="fa-solid fa-caret-right pr-2"></i>
                                <span>Gym Trainers</span>
                            </Link>
                        </div>
                    </div>

                    <div className="text-center md:text-start">
                        <div className="pb-4">
                            <h3 className="text-white text-2xl font-semibold">
                                Newsletter
                            </h3>
                        </div>

                        <p className="text-white normal-text pb-4">
                            Gymat an unknown printer took a gallery of type and
                            scrambled make a
                        </p>

                        <div>
                            <input
                                type="email"
                                className="bg-transparent placeholder-white border border-gray-300 text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2 md:p-2.5 lg:p-3 mb-2"
                                placeholder="Your Email Address"
                                required
                            />
                            <button className="primary-btn w-full">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black normal-text text-white text-center p-5 md:p-10">
                Designed By <a className="underline" target="_blank" href="https://www.theyolostudio.com/">The Yolo Studio</a> And Developed By <a className="underline" target="_blank" href="https://awsdyn.com/">AWSDYN</a>. All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;
