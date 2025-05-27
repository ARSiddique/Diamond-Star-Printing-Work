import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
                {/* Image with slide & fade animation */}
                <motion.div
                    className="md:w-1/2 rounded-lg shadow-xl overflow-hidden"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/about-img.jpg"
                        alt="Who We Are"
                        className="w-full h-auto object-cover"
                    />
                </motion.div>

                {/* Text Content with fade & slight slide */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-400 pl-4">
                        Who We Are
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify hyphens-auto">
                        Diamond Star Printing Works Press is a premier commercial printing company based in the UAE. With years of experience in the industry, we specialize in producing high-quality print materials tailored to the needs of businesses across various sectors.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed text-justify hyphens-auto">
                        From brochures and business cards to packaging and promotional items, we combine cutting-edge technology with expert craftsmanship to deliver impactful print solutions. Our mission is to empower your brand through precision, quality, and reliability.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
