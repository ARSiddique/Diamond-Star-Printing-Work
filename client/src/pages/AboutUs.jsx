import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import bgImage1 from '../assets/about-img.jpg'
import contentImg1 from '../assets/about-img.jpg'
import contentImg2 from '../assets/about-imgg.jpg'
import videoPreview from '../assets/about-heroo.mp4'

const AboutUs = () => {
    return (
        <div className="font-sans text-gray-800">

            {/* HERO SECTION WITH VIDEO */}
            <section className="relative h-[90vh] w-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                    src={videoPreview}
                />
                <div className="absolute inset-0 bg-black/60" />
                <motion.div
                    className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl font-bold drop-shadow-lg">Crafting Impressions That Last</h1>
                    <p className="text-xl mt-4 max-w-2xl">
                        At Diamond Star Printing Works, we blend passion and precision to redefine print excellence.
                    </p>
                </motion.div>
            </section>

            {/* WHO WE ARE */}
            <motion.section
                className="py-20 px-6 bg-[#0a2540] text-white text-justify mt-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
            >
                <h2 className="text-4xl font-bold mb-6 text-center">Reimagining Print Excellence</h2>
                <p className="text-lg max-w-5xl mx-auto leading-relaxed text-center">
                    For over a decade, Diamond Star Printing Works has led the UAE’s printing revolution with unwavering dedication to quality and innovation. We specialize in a wide range of services including packaging, promotional materials, commercial printing, and bespoke solutions tailored to meet unique client needs. Our commitment to eco-conscious practices combined with cutting-edge technology allows us to deliver products that not only impress but also support sustainable growth. Every project is treated with meticulous care by our experienced team, ensuring precision, vibrant color fidelity, and durability. With a focus on speed and reliability, we transform ideas into compelling printed narratives that help brands stand out in competitive markets.
                </p>
            </motion.section>



            {/* SECTION: IMAGE + TEXT */}
            <motion.section
                className="py-20 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                    <img
                        src={contentImg1}
                        alt="Technology"
                        className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
                    />
                    <div>
                        <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Craftsmanship Meets Technology</h2>
                        <p className="text-lg text-gray-600 leading-relaxed text-justify hyphens-auto">
                            Combining skilled craftsmanship with advanced technology, we use top-tier machines like Heidelberg and Ricoh presses to deliver sharp, vibrant, and flawless prints. Each project receives meticulous attention to detail, ensuring quality and precision that bring your ideas vividly to life.
                        </p>
                    </div>
                </div>
            </motion.section>



            {/* SECTION: CONTENT WITH VIDEO BG */}
            <section className="relative py-28 text-white">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
                    src={videoPreview}
                />
                <div className="absolute inset-0 bg-[#0a2540]/80 z-10" />
                <motion.div
                    className="relative z-20 max-w-5xl mx-auto text-center px-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-bold mb-6">Where Innovation Meets Imagination</h2>
                    <p className="text-lg leading-relaxed text-justify hyphens-auto">
                        Our press floor is a vibrant and dynamic hub where cutting-edge digital and offset printing technologies come together seamlessly. Equipped with state-of-the-art machinery, we tackle every creative challenge — whether it's intricate brochures, eye-catching flyers, or large-scale promotional materials. Every print is crafted with precision to tell your brand’s unique story with bold colors, sharp details, and lasting impact. We continually push the boundaries of print innovation to ensure your ideas come to life exactly as you envision them, transforming imagination into tangible reality.


                    </p>
                </motion.div>
            </section>

          

            {/* SECTION: IMAGE + TEXT (REVERSED) */}
            <motion.section
                className="py-20 bg-[#f9f9f9]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Material Matters</h2>
                        <p className="text-lg text-gray-600 leading-relaxed text-justify hyphens-auto">
                            We believe the feel of your print is just as powerful as its design. That’s why we offer a wide selection of materials—from premium card stocks to eco-conscious papers—chosen to suit every tone and message. Whether you want a glossy finish for visual impact or a matte texture for refined elegance, our substrates are selected for quality, durability, and presentation. With the right material, your message doesn’t just get seen—it gets remembered.
                        </p>
                    </div>
                    <img
                        src={contentImg2}
                        alt="Material"
                        className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
                    />
                </div>
            </motion.section>

            {/* SECTION: CTA */}
            <motion.section
                className="py-16 bg-[#0a2540] text-center text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
            >
                <h2 className="text-3xl font-semibold mb-4">Start Your Print Journey With Us</h2>
                <p className="mb-6 text-lg max-w-xl mx-auto">
                    Ready to transform your ideas into high-impact prints? Let’s talk about your next project.
                </p>
                <Link to="/contact">
                    <button className="bg-yellow-500 text-[#0a2540] font-semibold px-8 py-3 rounded shadow-md hover:bg-yellow-400 transition">
                        Contact Us
                    </button>
                </Link>
            </motion.section>
        </div>
    );
};

export default AboutUs;
