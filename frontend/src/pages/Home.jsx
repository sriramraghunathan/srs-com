// src/pages/Home.jsx
import React from "react";
import Carousel from "../components/Carousel";

function Home() {

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center px-6 py-10 md:py-16 bg-gray-100">
                {/* Left section: Text */}
                <div className="max-w-xl text-center md:text-left space-y-6">
                    <p className="text-sm md:text-base text-black uppercase tracking-wide">
                        Computers • Laptops • Accessories
                    </p>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        All INDIA SHIPPING{" "} 
                        <span className="text-blue-500">Sriram Systems</span>
                    </h2>

                    <p className="text-gray-700 text-sm md:text-base">
                        We provide high-performance computers, laptops, and IT solutions for
                        students, gamers, and professionals. Reliable builds, expert support,
                        and affordable pricing in one place.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm md:text-base">
                            Shop Laptops
                        </button>
                        <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md text-sm md:text-base">
                            View Services
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center md:justify-start pt-4 text-sm md:text-base">
                        <div>
                            <p className="font-bold text-gray-900">200+</p>
                            <p className="text-gray-600">Products</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">500+</p>
                            <p className="text-gray-600">Happy Clients</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">24/7</p>
                            <p className="text-gray-600">Tech Support</p>
                        </div>
                    </div>
                </div>

                {/* Right section: simple gradient box instead of image (mobile friendly, no image file needed) */}
                <div className="mt-10 md:mt-0 md:ml-10 w-full max-w-sm">
                    <div className="w-full h-52 md:h-80 rounded-2xl shadow-lg bg-gradient-to-br from-gray-900 via-gray-800 to-blue-700 flex items-center justify-center">
                        <div className="text-center text-white px-4">
                            <p className="text-sm md:text-base text-gray-300">
                                Custom PC & Laptop Solutions
                            </p>
                            <p className="text-lg md:text-2xl font-semibold mt-2">
                                Build • Upgrade • Repair
                            </p>
                            <p className="text-xs md:text-sm text-gray-300 mt-3">
                                Optimized for performance, designed for your needs.
                            </p><br />
                            <p>
                                <ul>
                                    <span>Contact : </span><br />
                                    <span>9382688896</span><br />
                                    <span>9884688896</span>
                                </ul>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel />
        </>
    );
}

export default Home;
