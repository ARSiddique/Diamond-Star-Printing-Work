import React from "react";
import { Link } from "react-router-dom";

const services = [
    {
        id: "digital-printing",
        title: "Digital Printing",
        description: "High-resolution digital prints for brochures, flyers, business cards, and more.",
        image: "/images/services/digital.jpg",
        details: "Digital printing is a process of printing from a digital-based image directly to a variety of media. It allows for quick turnaround and customization...",
    },
    {
        id: "offset-printing",
        title: "Offset Printing",
        description: "Perfect for large volume print jobs with consistent quality and vibrant color reproduction.",
        image: "/images/services/offset.jpg",
        details: "Offset printing involves transferring an inked image from a plate to a rubber blanket, then to the printing surface. Ideal for high-volume runs...",
    },
    {
        id: "Screen Printing",
        title: "Screen Printing",
        description: "Reliable screen printing solutions for packaging, apparel, and industrial applications.",
        image: "/images/services/offset.jpg",
        details: "Reliable screen printing solutions for packaging, apparel, and industrial applications.",
    },
    {
        id: "Car Wrapping",
        title: "Car Wrapping",
        description: "Transform your vehicles into powerful moving advertisements with our custom wraps.",
        image: "/images/services/offset.jpg",
        details: "Transform your vehicles into powerful moving advertisements with our custom wraps.",
    },
    {
        id: "Signboards",
        title: "Signboards",
        description: "We create bold, durable signboards for both indoor and outdoor use.",
        image: "/images/services/offset.jpg",
        details: "We create bold, durable signboards for both indoor and outdoor use.",
    },
    {
        id: "Indoor Signages",
        title: "Indoor Signages",
        description: "Sleek and professional indoor signs for offices, exhibitions, and shops.",
        image: "/images/services/offset.jpg",
        details: "Sleek and professional indoor signs for offices, exhibitions, and shops.",
    },
    {
        id: "Stickers",
        title: "Stickers",
        description: "Custom-cut stickers for branding, promotions, packaging, and more.",
        image: "/images/services/offset.jpg",
        details: "Custom-cut stickers for branding, promotions, packaging, and more.",
    },
    {
        id: "Banners",
        title: "Banners",
        description: "Weather-resistant banners for events, promotions, and business advertising.",
        image: "/images/services/offset.jpg",
        details: "Weather-resistant banners for events, promotions, and business advertising.",
    }

];

const ServicesList = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-8">Our Services</h1>
            <div className="grid md:grid-cols-2 gap-10">
                {services.map((service) => (
                    <div key={service.id} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 object-cover rounded mb-4"
                        />
                        <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                        <p className="text-gray-700 mb-4">{service.description}</p>
                        <Link
                            to={`/services/${service.id}`}
                            className="text-blue-600 hover:underline"
                        >
                            Read More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesList;
