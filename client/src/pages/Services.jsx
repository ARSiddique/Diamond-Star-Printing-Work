import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import videoBg from "../assets/videos/about-hero.mp4"; // replace with your video
import DPS from "../assets/services/DPS.jpg";
import OPS from "../assets/services/OPS.jpg";
import SPS from "../assets/services/SPS.jpg";
import CWS from "../assets/services/CWS.jpg";
import SBS from "../assets/services/SBS.jpg";
import IDSS from "../assets/services/IDSS.jpg";
import SS from "../assets/services/SS.jpg";
import BS from "../assets/services/BS.jpg";

const services = [
    {
        id: "digital-printing",
        title: "Digital Printing",
        description:
            "Delivering sharp, vibrant prints on demand. Ideal for small to medium runs with fast turnaround. From brochures to flyers and cards, digital printing ensures precision and clarity.",
        image: DPS,
    },
    {
        id: "offset-printing",
        title: "Offset Printing",
        description:
            "Cost-effective and premium quality for bulk jobs. Offset printing delivers consistent results with vivid colors and excellent sharpness—perfect for magazines, catalogs, and large-scale material.",
        image: OPS,
    },
    {
        id: "screen-printing",
        title: "Screen Printing",
        description:
            "Ideal for packaging, textiles, and industrial materials. Our screen printing brings durability and striking visuals—great for high-impact visuals on a variety of surfaces.",
        image: SPS,
    },
    {
        id: "car-wrapping",
        title: "Car Wrapping",
        description:
            "Advertise while you move. Our car wraps turn any vehicle into a mobile billboard with attention-grabbing designs that last.",
        image: CWS,
    },
    {
        id: "signboards",
        title: "Signboards",
        description:
            "Stand out with our custom signboards. Built for all environments, our boards command attention in both indoor and outdoor settings.",
        image: SBS,
    },
    {
        id: "indoor-signages",
        title: "Indoor Signages",
        description:
            "Professional and sleek interior signage. Perfect for office branding, exhibitions, and promotional displays.",
        image: IDSS,
    },
    {
        id: "stickers",
        title: "Stickers",
        description:
            "Fun, functional, and fully customizable. Our stickers are perfect for branding, packaging, or promotional giveaways.",
        image: SS,
    },
    {
        id: "banners",
        title: "Banners",
        description:
            "Large-format banners designed to impress. Durable, weather-resistant, and perfect for events, sales, and promotions.",
        image: BS,
    },
];

const Services = () => {
    return (
        <div className="text-gray-800 font-sans">

            {/* Hero Section with Background Video */}
            <section className="relative min-h-[90vh] flex items-center justify-center text-white text-center px-6 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src={videoBg} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
                    <p className="text-lg md:text-xl">Excellence in every print we deliver</p>
                </motion.div>
            </section>

            {/* Services Section */}
            {services.map((service, index) => (
                <section
                    key={service.id}
                    className={`py-16 px-6 ${index % 2 === 0 ? "bg-white" : "bg-blue-50"
                        }`}
                >
                    <div
                        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image */}
                        <motion.div
                            className="w-full md:w-1/2 group overflow-hidden rounded-lg shadow-lg"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            className="w-full md:w-1/2 text-center md:text-left"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-blue-900 mb-4">
                                <Link to={`/services/${service.id}`} className="hover:underline">
                                    {service.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {service.description}
                            </p>
                            <Link
                                to={`/services/${service.id}`}
                                className="inline-block mt-4 text-blue-700 font-semibold hover:underline"
                            >
                                Read More →
                            </Link>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* Why Choose Us */}
            <section className="relative h-auto mb-20 py-20 px-6 overflow-hidden text-white">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src={videoBg} type="video/mp4" />
                </video>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

                {/* Content */}
                <motion.div
                    className="relative z-20 max-w-5xl mx-auto text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Diamond Star Printing Works?</h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                        With decades of experience, cutting-edge equipment, and a team committed to perfection,
                        we ensure your printing needs are handled with care and creativity.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4 text-left text-white max-w-xl mx-auto text-lg">
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-400" /> 25+ Years of Experience
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-400" /> Custom Design Services
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-400" /> Fast Turnaround
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-400" /> Affordable Pricing
                        </li>
                    </ul>
                </motion.div>
            </section>
        </div>
    );
};

export default Services;
