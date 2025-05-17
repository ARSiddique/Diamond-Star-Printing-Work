import React from "react";
import { Link } from "react-router-dom";

const services = [
    {
        id: "digital-printing",
        title: "Digital Printing",
        description: "High-resolution digital prints for brochures, flyers, business cards, and more.",
        image: "/images/services/digital.jpg",
    },
    {
        id: "offset-printing",
        title: "Offset Printing",
        description: "Perfect for large volume print jobs with consistent quality and vibrant color reproduction.",
        image: "/images/services/offset.jpg",
    },
    {
        id: "screen-printing",
        title: "Screen Printing",
        description: "Reliable screen printing solutions for packaging, apparel, and industrial applications.",
        image: "/images/services/screen.jpg",
    },
    {
        id: "car-wrapping",
        title: "Car Wrapping",
        description: "Transform your vehicles into powerful moving advertisements with our custom wraps.",
        image: "/images/services/carwrap.jpg",
    },
    {
        id: "signboards",
        title: "Signboards",
        description: "We create bold, durable signboards for both indoor and outdoor use.",
        image: "/images/services/signboard.jpg",
    },
    {
        id: "indoor-signages",
        title: "Indoor Signages",
        description: "Sleek and professional indoor signs for offices, exhibitions, and shops.",
        image: "/images/services/indoor.jpg",
    },
    {
        id: "stickers",
        title: "Stickers",
        description: "Custom-cut stickers for branding, promotions, packaging, and more.",
        image: "/images/services/stickers.jpg",
    },
    {
        id: "banners",
        title: "Banners",
        description: "Weather-resistant banners for events, promotions, and business advertising.",
        image: "/images/services/banners.jpg",
    },
];

const Services = () => {
    return (
        <div className="text-gray-800 font-sans">

            {/* Hero Section */}
            <section className="min-h-[90vh] bg-black flex items-center justify-center text-white text-center px-6">
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
                    <p className="text-lg md:text-xl">Excellence in every print we deliver</p>
                </div>
            </section>

            {/* Service Sections */}
            {services.map((service, index) => (
                <section
                    key={service.id}
                    className={`py-16 px-6 ${index % 2 === 0 ? "bg-white" : "bg-blue-50"}`}
                >
                    <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                        {/* Image */}
                        <div className="w-full md:w-1/2">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="rounded-lg shadow-lg w-full h-72 object-cover"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-blue-900 mb-4">
                                <Link to={`/services/${service.id}`} className="hover:underline">
                                    {service.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                            <Link
                                to={`/services/${service.id}`}
                                className="inline-block mt-4 text-blue-700 font-semibold hover:underline"
                            >
                                Read More →
                            </Link>
                        </div>
                    </div>
                </section>
            ))}

            {/* Extra Section: Why Choose Us */}
            <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Why Choose Al Bony?</h2>
                    <p className="text-lg max-w-3xl mx-auto mb-6">
                        With decades of experience, cutting-edge equipment, and a team committed to perfection,
                        we ensure your printing needs are handled with care and creativity.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4 text-left text-white max-w-xl mx-auto text-lg">
                        <li>✔️ 25+ Years of Experience</li>
                        <li>✔️ Custom Design Services</li>
                        <li>✔️ Fast Turnaround</li>
                        <li>✔️ Affordable Pricing</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Services;
