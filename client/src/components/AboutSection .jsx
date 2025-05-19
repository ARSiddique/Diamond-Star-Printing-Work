import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-24"> {/* Increased vertical padding */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16"> {/* Increased gap */}

                {/* Image with slide & fade animation */}
                <motion.div
                    className="md:w-1/2 rounded-lg shadow-xl overflow-hidden"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }}
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
                    viewport={{ once: false }}
                >
                    <h2 className="text-4xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-400 pl-4">
                        Who We Are
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Diamond Star Printing Works Press is a leading commercial printing company providing exceptional services across the UAE.
                        Our mission is to deliver high-quality print solutions that help businesses stand out.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
