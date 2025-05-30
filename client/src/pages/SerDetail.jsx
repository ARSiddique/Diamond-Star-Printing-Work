import React from 'react'  
import { useParams, Link } from 'react-router-dom'  
import { motion } from "framer-motion";

const services = [
    {
        id: "digital-printing",
        title: "Digital Printing",
        description: "High-resolution digital prints for brochures, flyers, business cards, and more.",
        image: "/images/services/digital.jpg",
        heroImage: "/videos/digital-printing-hero.mp4",
        details: "Our digital printing technology delivers vibrant colors and sharp details, ideal for short runs and quick turnaround times.",
        sections: [
            {
                heading: "Why Choose Digital Printing?",
                content: "Digital printing offers fast proofing, minimal setup, and vibrant output for small batches.",
                video: "/videos/digital-why.mp4"
            },
            {
                heading: "Applications",
                content: "Perfect for brochures, flyers, business cards, posters, and personalized stationery.",
                image: "/images/services/digital-applications.jpg"
            },
            {
                heading: "Our Process",
                content: "We utilize state-of-the-art digital presses to ensure accurate colors and sharp resolution.",
                image: "/images/services/digital-process.jpg"
            }
        ]
    },
    {
        id: "offset-printing",
        title: "Offset Printing",
        description: "Perfect for large volume print jobs with consistent quality and vibrant color reproduction.",
        image: "/images/services/offset.jpg",
        heroImage: "/videos/offset-hero.mp4",
        details: "Offset printing is ideal for high-volume production with exceptional image quality and cost-efficiency.",
        sections: [
            {
                heading: "Advantages of Offset Printing",
                content: "Offers consistent color, precision detail, and is cost-effective for large runs.",
                video: "/videos/offset-advantages.mp4"
            },
            {
                heading: "Ideal Use Cases",
                content: "Magazines, catalogs, books, and packaging with bulk requirements.",
                image: "/images/services/offset-uses.jpg"
            },
            {
                heading: "Press Setup & Quality Control",
                content: "Our expert technicians ensure accurate plate alignment and ink density.",
                image: "/images/services/offset-setup.jpg"
            }
        ]
    },
    {
        id: "screen-printing",
        title: "Screen Printing",
        description: "Reliable screen printing solutions for packaging, apparel, and industrial applications.",
        image: "/images/services/screen.jpg",
        heroImage: "/videos/screen-hero.mp4",
        details: "Screen printing provides long-lasting, vibrant prints ideal for surfaces of various materials.",
        sections: [
            {
                heading: "Benefits of Screen Printing",
                content: "Durable ink application and high vibrancy on textiles and flat surfaces.",
                video: "/videos/screen-benefits.mp4"
            },
            {
                heading: "Product Types",
                content: "T-shirts, tote bags, bottles, and industrial labeling.",
                image: "/images/services/screen-products.jpg"
            },
            {
                heading: "Our Technology",
                content: "Automated and manual screen presses to meet your scale and precision needs.",
                image: "/images/services/screen-technology.jpg"
            }
        ]
    },
    {
        id: "car-wrapping",
        title: "Car Wrapping",
        description: "Transform your vehicles into moving billboards with our custom vinyl wraps.",
        image: "/images/services/carwrap.jpg",
        heroImage: "/videos/carwrap-hero.mp4",
        details: "Car wraps are perfect for mobile branding, allowing style and protection in one solution.",
        sections: [
            {
                heading: "Why Wrap Your Vehicle?",
                content: "Get high brand visibility and protect your vehicle’s paint from scratches and UV rays.",
                video: "/videos/carwrap-benefits.mp4"
            },
            {
                heading: "Design Customization",
                content: "Matte, gloss, color shift, and printed wraps customized to fit your brand.",
                image: "/images/services/carwrap-designs.jpg"
            },
            {
                heading: "Application Process",
                content: "Our professionals ensure bubble-free installation with edge sealing for durability.",
                image: "/images/services/carwrap-process.jpg"
            }
        ]
    },
    {
        id: "signboards",
        title: "Signboards",
        description: "We craft bold, weatherproof signboards for indoor and outdoor use.",
        image: "/images/services/signboard.jpg",
        heroImage: "/videos/signboard-hero.mp4",
        details: "Durable signboards made from premium materials that withstand weather and UV exposure.",
        sections: [
            {
                heading: "Types We Offer",
                content: "LED-lit boards, acrylic signs, flex boards, metal panels, and 3D lettering.",
                image: "/images/services/signboard-types.jpg"
            },
            {
                heading: "Professional Installation",
                content: "We ensure proper alignment, safe mounting, and long-lasting visibility.",
                video: "/videos/signboard-installation.mp4"
            },
            {
                heading: "Custom Designs",
                content: "Tailored to your business needs with brand colors and unique finishes.",
                image: "/images/services/signboard-designs.jpg"
            }
        ]
    },
    {
        id: "indoor-signages",
        title: "Indoor Signages",
        description: "Modern indoor signs for offices, retail spaces, and showrooms.",
        image: "/images/services/indoor.jpg",
        heroImage: "/videos/indoor-hero.mp4",
        details: "Elevate your space with stylish signage solutions that reflect your branding.",
        sections: [
            {
                heading: "Signage Styles",
                content: "Nameplates, directory boards, lightboxes, acrylic panels, and vinyl graphics.",
                image: "/images/services/indoor-types.jpg"
            },
            {
                heading: "Brand Integration",
                content: "We align signage aesthetics with your brand’s color and tone.",
                video: "/videos/indoor-branding.mp4"
            },
            {
                heading: "Easy Maintenance",
                content: "We use smudge-proof and easy-to-clean materials for longevity.",
                image: "/images/services/indoor-maintenance.jpg"
            }
        ]
    },
    {
        id: "stickers",
        title: "Stickers",
        description: "High-quality stickers for packaging, branding, and promotional use.",
        image: "/images/services/stickers.jpg",
        heroImage: "/videos/stickers-hero.mp4",
        details: "Vibrant, adhesive-backed stickers available in various shapes and materials.",
        sections: [
            {
                heading: "Material Options",
                content: "Choose from waterproof vinyl, paper, clear film, or foil.",
                image: "/images/services/stickers-materials.jpg"
            },
            {
                heading: "Custom Shapes",
                content: "Circle, square, die-cut, kiss-cut – all shapes supported.",
                video: "/videos/stickers-cutting.mp4"
            },
            {
                heading: "Ideal Uses",
                content: "Labeling, event giveaways, product branding, and wall decals.",
                image: "/images/services/stickers-uses.jpg"
            }
        ]
    },
    {
        id: "banners",
        title: "Banners",
        description: "Durable banners for outdoor advertising, exhibitions, and store promotions.",
        image: "/images/services/banners.jpg",
        heroImage: "/videos/banner-hero.mp4",
        details: "Printed using UV-resistant inks on weatherproof material for vibrant outdoor messaging.",
        sections: [
            {
                heading: "Banner Types",
                content: "Flex, mesh, retractable stands, backdrops, and pole banners.",
                image: "/images/services/banner-types.jpg"
            },
            {
                heading: "Print Technology",
                content: "We use high-res large format printers for crisp text and graphics.",
                video: "/videos/banner-printing.mp4"
            },
            {
                heading: "Applications",
                content: "Retail events, exhibitions, store fronts, trade shows, and community fairs.",
                image: "/images/services/banner-usecases.jpg"
            }
        ]
    }
];
   


const SerDetail = () => {
    const { id } = useParams();
    const service = services.find((item) => item.id === id);

    if (!service) {
        return <div className="text-center text-red-500 mt-10">Service not found.</div>;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Hero Section */}
            <motion.div
                className="w-full mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <video
                    src={service.heroImage}
                    className="w-full h-72 object-cover rounded-2xl shadow-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </motion.div>

            {/* Title and Description */}
            <motion.div
                className="mb-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{service.title}</h1>
                <p className="text-lg text-gray-600">{service.details}</p>
            </motion.div>

            {/* Sections */}
            <div className="space-y-16 mt-10">
                {service.sections.map((section, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col md:flex-row items-center gap-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Media */}
                        <div className="w-full md:w-1/2">
                            {section.video ? (
                                <video
                                    src={section.video}
                                    className="w-full h-64 rounded-xl object-cover shadow-md"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            ) : (
                                <img
                                    src={section.image}
                                    alt={section.heading}
                                    className="w-full h-64 object-cover rounded-xl shadow-md"
                                    loading="lazy"
                                />
                            )}
                        </div>

                        {/* Text */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.heading}</h2>
                            <p className="text-gray-600 text-base leading-relaxed">{section.content}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SerDetail;
