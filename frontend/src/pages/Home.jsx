// src/pages/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Carousel from "../components/Carousel";
import Products from "../pages/Products.jsx";
import VideosRow from "../components/VideosRow";

function Home() {
    const navigate = useNavigate();
    const [showServices, setShowServices] = useState(false);

    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
    };

    const popIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    };

    const dropDown = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    };

    return (
        <>
            {/* HERO SECTION */}
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 py-8 md:py-1"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.15 },
                    },
                }}
            >
                {/* LEFT SIDE */}
                <motion.div className="w-full max-w-lg text-center md:text-left space-y-3">
                    <motion.p
                        variants={fadeUp}
                        className="text-xs sm:text-sm text-black uppercase tracking-wide"
                    >
                        Computers • Laptops • Accessories
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
                    >
                        <span className="text-blue-500">SRS Smart Tech</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="text-gray-700 text-xs sm:text-sm md:text-base"
                    >
                        We provide high-performance computers, laptops, and IT solutions for
                        students, gamers, and professionals. Reliable builds, expert support,
                        and affordable pricing in one place.
                    </motion.p>

                    {/* BUTTONS */}
                    <motion.div
                        variants={fadeIn}
                        className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center md:items-start"
                    >
                        <motion.button
                            variants={popIn}
                            onClick={() => navigate("/products")}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-xs sm:text-sm md:text-base w-full sm:w-auto"
                        >
                            Shop Laptops
                        </motion.button>

                        {/* SERVICES BUTTON */}
                        <motion.div
                            variants={popIn}
                            className="relative w-full sm:w-auto"
                            onMouseEnter={() => setShowServices(true)}
                            onMouseLeave={() => setShowServices(false)}
                        >
                            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-md text-xs sm:text-sm md:text-base w-full sm:w-auto">
                                View Services
                            </button>

                            {/* SERVICES DROPDOWN */}
                            <AnimatePresence>
                                {showServices && (
                                    <motion.div
                                        variants={dropDown}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="absolute top-full mt-2 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-56 sm:w-64 p-4 rounded-xl shadow-xl border border-white/40 bg-white/90 backdrop-blur-md z-50 text-left"
                                    >
                                        <h4 className="font-bold text-gray-800 border-b border-gray-400 pb-1 mb-2">
                                            Our Services
                                        </h4>

                                        <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                                            <li>• Chip Level Service</li>
                                            <li>• Data Recovery</li>
                                            <li>• OS Installation</li>
                                            <li>• Broken Screen Fix</li>
                                            <li>• Networking Support</li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>

                    {/* STATS */}
                    <motion.div
                        variants={fadeIn}
                        className="flex flex-row sm:flex-row gap-6 justify-center md:justify-start pt-4 text-center sm:text-left"
                    >
                        {[
                            { label: "Products", value: "200+" },
                            { label: "Happy Clients", value: "50k+" },
                            { label: "Tech Support", value: "Life Time" },
                            { label: "In Industry", value: "25+ Years" },

                        ].map((item, id) => (
                            <motion.div key={id} variants={fadeUp}>
                                <p className="font-bold text-gray-900 text-lg sm:text-xl">{item.value}</p>
                                <p className="text-gray-600 text-xs sm:text-sm">{item.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    variants={fadeIn}
                    className="mt-8 md:mt-0 md:ml-10 w-full max-w-xs sm:max-w-sm"
                >
                    <motion.div
                        variants={popIn}
                        className="w-full h-44 sm:h-52 md:h-80 rounded-2xl shadow-lg bg-blue-500 flex items-center justify-center p-4"
                    >
                        <div className="text-center text-white">
                            <p className="text-xs sm:text-sm text-gray-300">Custom PC & Laptop Solutions</p>
                            <p className="text-base sm:text-lg md:text-2xl font-semibold mt-2">
                                Build • Upgrade • Repair
                            </p>
                            <p className="text-xs sm:text-sm text-gray-300 mt-3">
                                Optimized for performance, designed for your needs.
                            </p>
                            <br />
                            <p className="text-sm font-semibold">Contact:</p>
                            <p className="text-xs sm:text-sm">9382688896</p>
                            <p className="text-xs sm:text-sm">9884688896</p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* VIDEOS ROW */}
            <VideosRow />

            {/* PRODUCTS */}
            <Products />

            {/* CAROUSEL */}
            <Carousel />
        </>
    );
}

export default Home;
