import React from "react";

const ProductSection = () => {
    return (
        <div className="product-section" id="product-section">
            <div className="custom-container">
                <h2 className="text-primary heading-2 text-center pb-5">
                    Buy Gym Equipment
                </h2>

                <p className="normal-text text-center pb-5 md:pb-10">
                    Gymat an unknown printer took a galley of type and scrambled{" "}
                    <br className="hidden md:block" />
                    make a type specimen book.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-5 md:pb-10">
                    <div className="product-card custom-rounded border border-gray-400 p-4">
                        <div>
                            <div className="pb-4 relative">
                                <img
                                    className="w-full custom-rounded"
                                    src="/images/product-1.jpg"
                                    alt="image"
                                />

                                <div className="product-card-btn-container flex items-center absolute top-5 right-5">
                                    <button className="bg-primary rounded mr-2 p-2">
                                        <i className="fa-solid fa-cart-shopping text-white text-lg"></i>
                                    </button>

                                    <button className="bg-primary rounded p-2">
                                        <i className="fa-solid fa-heart text-white text-lg"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pb-2">
                                <h4 className="text-xl font-semibold">
                                    Gym product
                                </h4>

                                <h4 className="text-xl font-semibold text-primary">
                                    $55.00
                                </h4>
                            </div>

                            <p className="normal-text pb-4">
                                BlueLight Health Envisions a big World Where
                                Living a Healthy
                            </p>

                            <button className="primary-btn w-full">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="product-card custom-rounded border border-gray-400 p-4">
                        <div>
                            <div className="pb-4 relative">
                                <img
                                    className="w-full custom-rounded"
                                    src="/images/product-2.jpg"
                                    alt="image"
                                />

                                <div className="product-card-btn-container flex items-center absolute top-5 right-5">
                                    <button className="bg-primary rounded mr-2 p-2">
                                        <i className="fa-solid fa-cart-shopping text-white text-lg"></i>
                                    </button>

                                    <button className="bg-primary rounded p-2">
                                        <i className="fa-solid fa-heart text-white text-lg"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pb-2">
                                <h4 className="text-xl font-semibold">
                                    Gym product
                                </h4>

                                <h4 className="text-xl font-semibold text-primary">
                                    $55.00
                                </h4>
                            </div>

                            <p className="normal-text pb-4">
                                BlueLight Health Envisions a big World Where
                                Living a Healthy
                            </p>

                            <button className="primary-btn w-full">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="product-card custom-rounded border border-gray-400 p-4">
                        <div>
                            <div className="pb-4 relative">
                                <img
                                    className="w-full custom-rounded"
                                    src="/images/product-1.jpg"
                                    alt="image"
                                />

                                <div className="product-card-btn-container flex items-center absolute top-5 right-5">
                                    <button className="bg-primary rounded mr-2 p-2">
                                        <i className="fa-solid fa-cart-shopping text-white text-lg"></i>
                                    </button>

                                    <button className="bg-primary rounded p-2">
                                        <i className="fa-solid fa-heart text-white text-lg"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pb-2">
                                <h4 className="text-xl font-semibold">
                                    Gym product
                                </h4>

                                <h4 className="text-xl font-semibold text-primary">
                                    $55.00
                                </h4>
                            </div>

                            <p className="normal-text pb-4">
                                BlueLight Health Envisions a big World Where
                                Living a Healthy
                            </p>

                            <button className="primary-btn w-full">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="product-card custom-rounded border border-gray-400 p-4">
                        <div>
                            <div className="pb-4 relative">
                                <img
                                    className="w-full custom-rounded"
                                    src="/images/product-2.jpg"
                                    alt="image"
                                />

                                <div className="product-card-btn-container flex items-center absolute top-5 right-5">
                                    <button className="bg-primary rounded mr-2 p-2">
                                        <i className="fa-solid fa-cart-shopping text-white text-lg"></i>
                                    </button>

                                    <button className="bg-primary rounded p-2">
                                        <i className="fa-solid fa-heart text-white text-lg"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pb-2">
                                <h4 className="text-xl font-semibold">
                                    Gym product
                                </h4>

                                <h4 className="text-xl font-semibold text-primary">
                                    $55.00
                                </h4>
                            </div>

                            <p className="normal-text pb-4">
                                BlueLight Health Envisions a big World Where
                                Living a Healthy
                            </p>

                            <button className="primary-btn w-full">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button className="primary-btn">View All Product</button>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
