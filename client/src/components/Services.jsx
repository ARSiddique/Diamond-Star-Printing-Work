import { motion } from "framer-motion"
import DPH from "../assets/services/DigitalPrintingH.jpg"
import OPH from "../assets/services/OffsetPrintingH.jpg"
import SPH from "../assets/services/ScreenPrintingH.jpg"
import CRH from "../assets/services/CarRappingH.jpg"
import SRH from "../assets/services/SignboardsH.jpg"
import ISH from "../assets/services/IndoorSignagesH.jpg"

const services = [
    {
        title: "Digital Printing",
        desc: "Fast turnaround digital prints with high-resolution output. Ideal for short runs and urgent jobs. We deliver vibrant colors and crisp detail on every piece.",
        img: DPH,
    },
    {
        title: "Offset Printing",
        desc: "Perfect for bulk printing with consistent, high-quality results. From brochures to magazines, our offset prints ensure professional-grade output every time.",
        img: OPH,
    },
    {
        title: "Screen Printing",
        desc: "Ideal for apparel and merchandise with bold, lasting prints. We offer custom finishes including embossing, laminating, and more to enhance your brand.",
        img: SPH,
    },
    {
        title: "Car Wrapping",
        desc: "Transform your vehicle into a mobile billboard with our precision car wraps. Full and partial wraps available with UV protection and custom graphics.",
        img: CRH,
    },
    {
        title: "Signboards",
        desc: "Make a lasting impression with custom indoor and outdoor signboards. Designed to attract attention and communicate your brand effectively, day or night.",
        img: SRH,
    },
    {
        title: "Indoor Signages",
        desc: "Enhance interior spaces with directional, promotional, or branding signages. Our solutions combine aesthetics and clarity for a professional environment.",
        img: ISH,
    }
]


const OurServices = () => {
    return (
        <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20 text-blue-900 select-none">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold mb-16 tracking-wide"
                >
                    Our Services
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.25,
                            },
                        },
                        hidden: {},
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 select-none"
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="bg-blue-700 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-transform duration-500 select-none"
                        >
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-48 object-cover select-none"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-3 text-yellow-400 select-none">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 text-base text-justify hyphens-auto select-none">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default OurServices  
