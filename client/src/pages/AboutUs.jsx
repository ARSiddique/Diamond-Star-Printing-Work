import { motion } from 'framer-motion'
import aboutHero from '../assets/services/BS.jpg'   // make sure image is here
import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className="font-sans text-gray-800">

            {/* Hero Section (Dark Background) */}
            <section
                className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${aboutHero})` }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <motion.div
                    className="relative z-10 text-center px-6 text-white"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.9 }}
                >
                    <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
                        About Diamond Star Printing Works Printing Press
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Serving the UAE with world-class printing for over 25 years.
                    </p>
                </motion.div>
            </section>

            {/* Light Section */}
            <motion.section
                className="py-20 px-6 max-w-6xl mx-auto text-center bg-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-bold mb-6 text-[#0a2540]">Who We Are</h2>
                <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-600">
                    Diamond Star Printing Works Printing Press LLC is a pioneer in the printing industry in the UAE, trusted by clients for quality,
                    reliability, and innovation. With a passionate team and cutting-edge equipment, we bring designs to life.
                </p>
            </motion.section>

            {/* Vision & Mission Section (Dark Background) */}
            <section className="py-20 px-6 bg-[#0a2540] text-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                    {[
                        {
                            title: 'Our Vision',
                            desc: 'To become the region’s most innovative, reliable, and quality-driven printing solution.',
                            color: 'from-blue-600 to-blue-800',
                        },
                        {
                            title: 'Our Mission',
                            desc: 'To exceed expectations through modern technology and exceptional service.',
                            color: 'from-yellow-500 to-yellow-700',
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/10 p-8 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Light Section - Team */}
            <motion.section
                className="py-20 bg-white text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9 }}
            >
                <h2 className="text-4xl font-bold text-[#0a2540] mb-8">Meet Our Management Team</h2>
                <div className="max-w-6xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80"
                        alt="Team"
                        className="rounded-lg shadow-lg w-full hover:scale-[1.02] transition-transform duration-300"
                    />
                    <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-600">
                        Our core leadership team brings expertise, vision, and dedication to every client and project we serve.
                    </p>
                </div>
            </motion.section>

            {/* Dark Section - Why Choose Us */}
            <motion.section
                className="py-20 bg-[#0a2540] text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10">Why Choose Diamond Star Printing Works?</h2>
                    <div className="grid md:grid-cols-3 gap-10 text-left">
                        {[
                            ['Premium Quality', 'Only the best materials and latest machines used.'],
                            ['Quick Turnaround', 'Fast and reliable delivery for all orders.'],
                            ['25+ Years Experience', 'Deep industry knowledge and client care.'],
                        ].map(([title, desc], i) => (
                            <motion.div
                                key={i}
                                className="bg-white/10 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300 hover:scale-105"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                            >
                                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                                <p>{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Light Section - CTA */}
            <motion.section
                className="py-16 bg-white text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
            >
                <Link to="/contact">
                    <button className="bg-[#0a2540] text-white px-10 py-4 rounded shadow-md hover:bg-yellow-500 hover:text-[#0a2540] transition duration-300">
                        Get in Touch
                    </button>
                </Link>

            </motion.section>
        </div>
    )
}

export default AboutUs  
