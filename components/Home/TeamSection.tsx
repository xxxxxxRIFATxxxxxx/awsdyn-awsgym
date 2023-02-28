import Link from "next/link";

const TeamSection = () => {
    return (
        <div className="team-section custom-container">
            <h1 className="text-primary heading-2 text-center pb-5">
                Team Expert Coaches
            </h1>

            <p className="normal-text text-center pb-5 md:pb-10">
                BlueLight Health Envisions a World Where Living a Healthy
                Lifestyle Comes Naturally. <br className="hidden md:block" />{" "}
                You, as Part of Blue light
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="team-card relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                        className="object-cover w-full"
                        src="/images/team-1.png"
                        alt="image"
                    />

                    <div className="team-card-social-icons absolute h-fit top-0 bottom-0 my-auto left-0 p-6">
                        <Link
                            href="/"
                            className="block border border-gray-300 rounded p-1 mb-3"
                        >
                            <img
                                className="w-full"
                                src="/images/facebook-icon.svg"
                                alt="image"
                            />
                        </Link>

                        <Link
                            href="/"
                            className="block border border-gray-300 rounded p-1 mb-3"
                        >
                            <img
                                className="w-full"
                                src="/images/linkedin-icon.svg"
                                alt="image"
                            />
                        </Link>

                        <Link
                            href="/"
                            className="block border border-gray-300 rounded p-1 mb-3"
                        >
                            <img
                                className="w-full"
                                src="/images/whatsapp-icon.svg"
                                alt="image"
                            />
                        </Link>
                    </div>

                    <div className="absolute bottom-0 left-0 p-6">
                        <h4 className="text-xl font-semibold text-white">
                            Gym Trainer
                        </h4>

                        <p className="normal-text text-white">
                            BlueLight Health Envisions a World <br /> Where
                            Living a Healthy
                        </p>
                    </div>
                </div>

                <div className="team-card relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                        className="object-cover w-full"
                        src="/images/team-2.png"
                        alt="image"
                    />

                    <div className="team-card-social-icons absolute h-fit top-0 bottom-0 my-auto left-0 p-6">
                        <Link
                            href="/"
                            className="block border border-gray-300 rounded p-1 mb-3"
                        >
                            <img
                                className="w-full"
                                src="/images/facebook-icon.svg"
                                alt="image"
                            />
                        </Link>

                        <Link
                            href="/"
                            className="block border border-gray-300 rounded p-1 mb-3"
                        >
                            <img
                                className="w-full"
                                src="/images/linkedin-icon.svg"
                                alt="image"
                            />
                        </Link>

                        <Link
                            href="/"
                            className="block border border-gray-300 rounded p-1 mb-3"
                        >
                            <img
                                className="w-full"
                                src="/images/whatsapp-icon.svg"
                                alt="image"
                            />
                        </Link>
                    </div>

                    <div className="absolute bottom-0 left-0 p-6">
                        <h4 className="text-xl font-semibold text-white">
                            Gym Trainer
                        </h4>

                        <p className="normal-text text-white">
                            BlueLight Health Envisions a World <br /> Where
                            Living a Healthy
                        </p>
                    </div>
                </div>

                <div className="team-card relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                        className="object-cover w-full"
                        src="/images/team-3.png"
                        alt="image"
                    />

                    <div className="team-card-social-icons absolute h-fit top-0 bottom-0 my-auto left-0 p-6">
                        <Link
                            href="/"
                            className="block border border-gray-300 rounded p-1 mb-3"
                        >
                            <img
                                className="w-full"
                                src="/images/facebook-icon.svg"
                                alt="image"
                            />
                        </Link>

                        <Link
                            href="/"
                            className="block border border-gray-300 rounded p-1 mb-3"
                        >
                            <img
                                className="w-full"
                                src="/images/linkedin-icon.svg"
                                alt="image"
                            />
                        </Link>

                        <Link
                            href="/"
                            className="block border border-gray-300 rounded p-1 mb-3"
                        >
                            <img
                                className="w-full"
                                src="/images/whatsapp-icon.svg"
                                alt="image"
                            />
                        </Link>
                    </div>

                    <div className="absolute bottom-0 left-0 p-6">
                        <h4 className="text-xl font-semibold text-white">
                            Gym Trainer
                        </h4>

                        <p className="normal-text text-white">
                            BlueLight Health Envisions a World <br /> Where
                            Living a Healthy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
