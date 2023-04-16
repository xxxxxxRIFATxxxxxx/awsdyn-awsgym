import React from "react";

const BlogSection = () => {
    return (
        <div className="blog-section" id="blog-section">
            <div className="custom-container">
                <h2 className="text-primary heading-2 text-center pb-5">
                    Blogs and Updates
                </h2>

                <p className="normal-text text-center pb-5 md:pb-10">
                    Gymat an unknown printer took a galley of type and scrambled{" "}
                    <br className="hidden md:block" />
                    make a type specimen book.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-5 md:pb-10">
                    <div className="custom-rounded p-4">
                        <div className="relative">
                            <img
                                className="w-full"
                                src="/images/blog-img-1.jpg"
                                alt="image"
                            />

                            <div className="bg-white custom-rounded absolute bottom-5 left-0 right-0 w-[91%] p-4 mx-auto">
                                <h4 className="text-xl font-semibold pb-2">
                                    Blog post-1
                                </h4>

                                <p className="normal-text pb-2">
                                    BlueLight Health Envisions a big World Where
                                    Living a Healthy Envisions a big World
                                    Where.
                                </p>

                                <button className="primary-btn bg-gray-200 text-black border-gray-200 hover:text-white hover:bg-primary w-full">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="custom-rounded p-4">
                        <div className="relative">
                            <img
                                className="w-full"
                                src="/images/blog-img-2.jpg"
                                alt="image"
                            />

                            <div className="bg-white custom-rounded absolute bottom-5 left-0 right-0 w-[91%] p-4 mx-auto">
                                <h4 className="text-xl font-semibold pb-2">
                                    Blog post-1
                                </h4>

                                <p className="normal-text pb-2">
                                    BlueLight Health Envisions a big World Where
                                    Living a Healthy Envisions a big World
                                    Where.
                                </p>

                                <button className="primary-btn bg-gray-200 text-black border-gray-200 hover:text-white hover:bg-primary w-full">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="custom-rounded p-4">
                        <div className="relative">
                            <img
                                className="w-full"
                                src="/images/blog-img-3.jpg"
                                alt="image"
                            />

                            <div className="bg-white custom-rounded absolute bottom-5 left-0 right-0 w-[91%] p-4 mx-auto">
                                <h4 className="text-xl font-semibold pb-2">
                                    Blog post-1
                                </h4>

                                <p className="normal-text pb-2">
                                    BlueLight Health Envisions a big World Where
                                    Living a Healthy Envisions a big World
                                    Where.
                                </p>

                                <button className="primary-btn bg-gray-200 text-black border-gray-200 hover:text-white hover:bg-primary w-full">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button className="primary-btn">View All Blogs</button>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
