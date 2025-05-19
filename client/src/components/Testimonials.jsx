import { motion } from "framer-motion"  

const testimonials = [
    {
        name: "Rahman Majid",
        feedback: "All staff have good knowledge about printing and are cooperative.",
    },
    {
        name: "Ayesha Khan",
        feedback: "Excellent service and timely delivery of all my packaging materials.",
    },
    // You can add more here
]  

const Testimonials = () => {
    return (
        <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold text-blue-900 mb-16 tracking-wide"
                >
                    Testimonials
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                        hidden: {},
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="bg-white rounded-xl shadow-lg p-8 cursor-default hover:shadow-xl hover:-translate-y-1 transition-transform duration-500"
                        >
                            <p className="text-gray-700 italic text-lg mb-6 relative before:content-['“'] before:text-4xl before:text-yellow-400 before:absolute before:-left-6 before:-top-3 before:font-serif">
                                {t.feedback}
                            </p>
                            <p className="text-yellow-500 font-semibold text-xl tracking-wide drop-shadow-sm">
                                — {t.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )  
}  

export default Testimonials  
