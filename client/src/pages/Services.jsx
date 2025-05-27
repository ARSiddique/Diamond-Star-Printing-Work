import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import videoBg from "../assets/videos/about-hero.mp4"; // replace with your video
import videoBgg from "../assets/videos/factory-tour.mp4"; // replace with your video
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
            "Delivering sharp, vibrant prints on demand using advanced digital technology. Perfect for brochures, business cards, flyers, and short-run prints with quick turnaround. This method ensures consistency and clarity, even with variable data printing. Ideal for businesses that need high-quality marketing materials without bulk orders.",
        image: DPS,
    },
    {
        id: "offset-printing",
        title: "Offset Printing",
        description:
            "Offset printing provides exceptional quality and cost efficiency for large-volume jobs. It’s the go-to solution for magazines, catalogs, posters, and stationery. With precise color control and sharp image reproduction, this traditional method guarantees a professional finish. Best suited for high-quantity, high-quality projects.",
        image: OPS,
    },
    {
        id: "screen-printing",
        title: "Screen Printing",
        description:
            "Our screen printing services cater to packaging, textiles, labels, and promotional materials. Known for its vibrant inks and durability, this technique delivers bold designs on a wide range of surfaces. It’s perfect for large, striking visuals where longevity matters. We ensure consistency across every print run.",
        image: SPS,
    },
    {
        id: "car-wrapping",
        title: "Car Wrapping",
        description:
            "Turn your vehicle into a moving advertisement with our custom car wraps. Designed to be weather-resistant and visually striking, our wraps offer branding on the go. Whether partial or full-body wraps, we use high-quality materials for a sleek, professional finish. Ideal for businesses looking to maximize street-level visibility.",
        image: CWS,
    },
    {
        id: "signboards",
        title: "Signboards",
        description:
            "Make a lasting first impression with our customized signboards, perfect for both indoor and outdoor use. We create signage that stands up to harsh weather and delivers high visual impact. From retail to corporate spaces, our signs boost brand presence. Choose from illuminated, acrylic, metal, or wooden signs tailored to your needs.",
        image: SBS,
    },
    {
        id: "indoor-signages",
        title: "Indoor Signages",
        description:
            "Create visually cohesive and professional interior environments with our indoor signage solutions. From reception signs to directional and promotional displays, we cover it all. Designed to enhance brand identity and user navigation, our signs fit seamlessly into any workspace or showroom. Printed on high-quality substrates with sharp finishes.",
        image: IDSS,
    },
    {
        id: "stickers",
        title: "Stickers",
        description:
            "Stickers are a creative and cost-effective branding tool. We offer custom shapes, finishes, and adhesive strengths suitable for packaging, laptops, events, and giveaways. Available in matte, gloss, and transparent styles to suit your design. Whether for fun or business, our stickers stick with your audience.",
        image: SS,
    },
    {
        id: "banners",
        title: "Banners",
        description:
            "Command attention with our high-impact, large-format banners designed for indoor and outdoor use. Made with durable, weather-resistant materials, they’re perfect for promotions, events, grand openings, or advertising. Choose from roll-up, mesh, vinyl, and fabric banners for a solution that suits your campaign.",
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

            {/* Services Intro Paragraph Section */}
            <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-20 px-6 text-white mt-16 text-center select-none">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-6">Your One-Stop Printing Solution</h2>
                    <p className="text-lg leading-relaxed text-gray-100">
                        At Diamond Star Printing Works, we offer a wide range of printing services tailored to meet the diverse needs of businesses and individuals alike. From high-definition digital prints and large-scale offset jobs to eye-catching banners, wraps, and promotional materials, our solutions combine innovation, quality, and affordability. Whether you're branding your business, launching a campaign, or simply need premium printed products, we've got you covered with precision and care.
                    </p>
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
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-blue-900 mb-4">
                                <Link to={`/services/${service.id}`} className="hover:underline">
                                    {service.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify hyphens-auto">
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
                    <source src={videoBgg} type="video/mp4" />
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
                            <FaCheckCircle className="text-green-400" /> 20+ Years of Experience
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
