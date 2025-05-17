import React from 'react';
import { useParams, Link } from 'react-router-dom';

const services = [
    {
        id: "digital-printing",
        title: "Digital Printing",
        description: "High-resolution digital prints for brochures, flyers, business cards, and more.",
        image: "/images/services/digital.jpg",
        heroImage: "/images/services/digital-hero.jpg",
        details: "Our digital printing technology delivers vibrant colors and sharp details. Ideal for short runs and quick turnaround times.",
        sections: [
            {
                heading: "Why Choose Digital Printing?",
                content: "Digital printing offers flexibility, quick proofing, and cost-effective short-run prints with high quality."
            },
            {
                heading: "Applications",
                content: "Brochures, flyers, posters, business cards, and customized marketing materials."
            },
            {
                heading: "Our Process",
                content: "We use the latest digital printers to ensure color accuracy and fast delivery."
            }
        ]
    },
    {
        id: "offset-printing",
        title: "Offset Printing",
        description: "Perfect for large volume print jobs with consistent quality and vibrant color reproduction.",
        image: "/images/services/offset.jpg",
        heroImage: "/images/services/offset-hero.jpg",
        details: "Offset printing is ideal for large-scale print runs offering excellent color fidelity and cost efficiency.",
        sections: [
            {
                heading: "Advantages of Offset Printing",
                content: "Superior image quality, cost efficiency for large quantities, and versatility on various substrates."
            },
            {
                heading: "Ideal For",
                content: "Magazines, newspapers, books, brochures, and packaging."
            },
            {
                heading: "Quality Assurance",
                content: "Our team ensures rigorous quality checks at every stage of the print process."
            }
        ]
    },
    {
        id: "screen-printing",
        title: "Screen Printing",
        description: "Reliable screen printing solutions for packaging, apparel, and industrial applications.",
        image: "/images/services/screen.jpg",
        heroImage: "/images/services/screen-hero.jpg",
        details: "Screen printing provides excellent color vibrancy and durability, ideal for printing on various surfaces.",
        sections: [
            {
                heading: "Benefits of Screen Printing",
                content: "Long-lasting prints, rich color output, and suitable for irregular surfaces."
            },
            {
                heading: "Use Cases",
                content: "T-shirts, bags, bottles, signage, packaging, and promotional items."
            },
            {
                heading: "Technology We Use",
                content: "We use both manual and automated screen presses to meet your quantity and quality needs."
            }
        ]
    },
    {
        id: "car-wrapping",
        title: "Car Wrapping",
        description: "Transform your vehicles into powerful moving advertisements with our custom wraps.",
        image: "/images/services/carwrap.jpg",
        heroImage: "/images/services/carwrap-hero.jpg",
        details: "Car wraps are a cost-effective way to advertise while protecting your vehicle’s paint.",
        sections: [
            {
                heading: "Why Wrap Your Vehicle?",
                content: "Car wraps act as mobile billboards, increasing brand exposure on the go."
            },
            {
                heading: "Customization Options",
                content: "Full wraps, partial wraps, decals, matte, gloss, and textured finishes available."
            },
            {
                heading: "Durability & Maintenance",
                content: "Our wraps last for years with proper care and can be safely removed anytime."
            }
        ]
    },
    {
        id: "signboards",
        title: "Signboards",
        description: "We create bold, durable signboards for both indoor and outdoor use.",
        image: "/images/services/signboard.jpg",
        heroImage: "/images/services/signboard-hero.jpg",
        details: "Signboards are essential for visibility and branding. We design and produce boards that last in all conditions.",
        sections: [
            {
                heading: "Types of Signboards",
                content: "Acrylic, LED-lit, metal, flex, and 3D letter signboards tailored to your brand."
            },
            {
                heading: "Installation Services",
                content: "Professional on-site installation for optimal positioning and safety."
            },
            {
                heading: "Weather Resistance",
                content: "All signboards are made with UV and water-resistant materials for long-term outdoor use."
            }
        ]
    },
    {
        id: "indoor-signages",
        title: "Indoor Signages",
        description: "Sleek and professional indoor signs for offices, exhibitions, and shops.",
        image: "/images/services/indoor.jpg",
        heroImage: "/images/services/indoor-hero.jpg",
        details: "Our indoor signages enhance your workspace with professional and informative visuals.",
        sections: [
            {
                heading: "Signage Types",
                content: "Wall signs, name plates, directional signage, illuminated signs, and branding panels."
            },
            {
                heading: "Design & Branding",
                content: "Tailored designs that reflect your business identity and interior aesthetics."
            },
            {
                heading: "Applications",
                content: "Offices, retail outlets, clinics, showrooms, and event venues."
            }
        ]
    },
    {
        id: "stickers",
        title: "Stickers",
        description: "Custom-cut stickers for branding, promotions, packaging, and more.",
        image: "/images/services/stickers.jpg",
        heroImage: "/images/services/stickers-hero.jpg",
        details: "We offer custom stickers in all shapes and sizes with vibrant print and strong adhesive.",
        sections: [
            {
                heading: "Sticker Materials",
                content: "Paper, vinyl, transparent, waterproof, glossy, matte, and more."
            },
            {
                heading: "Custom Shapes & Sizes",
                content: "Die-cut, kiss-cut, square, round — fully customizable as per your needs."
            },
            {
                heading: "Use Cases",
                content: "Product labeling, packaging, event giveaways, window decals, and more."
            }
        ]
    },
    {
        id: "banners",
        title: "Banners",
        description: "Weather-resistant banners for events, promotions, and business advertising.",
        image: "/images/services/banners.jpg",
        heroImage: "/images/services/banners-hero.jpg",
        details: "Our banners are designed for durability, clarity, and visibility in all environments.",
        sections: [
            {
                heading: "Banner Types",
                content: "Flex banners, mesh banners, roll-up stands, backdrop banners, and hanging banners."
            },
            {
                heading: "Printing Features",
                content: "High-resolution large format printing with UV-resistant inks."
            },
            {
                heading: "Perfect For",
                content: "Outdoor promotions, trade shows, shop fronts, and events."
            }
        ]
    }
];


const SerDetail = () => {
    const { id } = useParams();
    const service = services.find(s => s.id === id);

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
                <h2 className="text-3xl font-bold mb-4 text-red-600">Service Not Found</h2>
                <Link to="/service" className="text-blue-600 underline hover:text-blue-800">
                    Back to Services
                </Link>
            </div>
        );
    }

    return (
        <div className="font-sans">
            {/* Hero Section */}
            <section
                className="relative h-[60vh] flex items-center justify-center text-white"
                style={{
                    backgroundImage: `url(${service.heroImage || service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">{service.title}</h1>
                    <p className="text-xl max-w-3xl mx-auto drop-shadow-md">{service.description}</p>
                </div>
            </section>

            {/* Main content wrapper */}
            <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
                {/* Overview Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-6 text-blue-900">{service.title} Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{service.details}</p>
                </section>

                {/* Dynamic sections from service.sections */}
                {service.sections.map((sec, i) => (
                    <section key={i} className="bg-blue-50 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-3 text-blue-800">{sec.heading}</h3>
                        <p className="text-gray-700 leading-relaxed">{sec.content}</p>
                    </section>
                ))}

                {/* Back to Services Link */}
                <div className="text-center">
                    <Link
                        to="/services"
                        className="inline-block px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                    >
                        ← Back to Services
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default SerDetail;
