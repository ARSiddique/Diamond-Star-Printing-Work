import { motion } from "framer-motion";
import DPH from "../assets/services/DigitalPrintingH.jpg"
import OPH from "../assets/services/OffsetPrintingH.jpg"
import SPH from "../assets/services/ScreenPrintingH.jpg"
import CRH from "../assets/services/CarRappingH.jpg"
import SRH from "../assets/services/SignboardsH.jpg"
import ISH from "../assets/services/IndoorSignagesH.jpg"

const services = [

    {
        title: "Digital Printing",
        desc: "Fast turnaround digital prints with high-quality finish.",
        img: DPH,
    },
    {
        title: "Offset Printing",
        desc: "Banners, posters, and signage for big impact marketing.",
        img: OPH,
    },
    {
        title: "Screen Printing",
        desc: "Embossing, laminating, folding, and perfect binding options.",
        img: SPH,
    },
    {
        title: "Car Wrapping",
        desc: "Professional offset printing for large volumes.",
        img: CRH,
    },
    {
        title: "Signboards",
        desc: "Custom packaging for retail and luxury products.",
        img: SRH,
    },
    {
        title: "Indoor Signages",
        desc: "Custom packaging for retail and luxury products.",
        img: ISH,
    }
];

const OurServices = () => {
    return (
        <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20 text-blue-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="text-4xl font-extrabold mb-16 tracking-wide"
                >
                    Our Services
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.25,
                            },
                        },
                        hidden: {},
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="bg-blue-700 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                        >
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 text-base">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OurServices;
