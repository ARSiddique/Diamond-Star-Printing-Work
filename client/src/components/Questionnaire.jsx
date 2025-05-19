import { motion } from "framer-motion"  

const Questionnaire = () => (
    <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 py-20"
    >
        <div className="max-w-3xl mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="text-3xl font-bold text-white text-center mb-12"
            >
                Let’s Get to Know You
            </motion.h2>

            <motion.form
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6 bg-white rounded-xl shadow-lg p-8"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="flex flex-col"
                >
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: false }}
                    className="flex flex-col"
                >
                    <label htmlFor="company" className="text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                        type="text"
                        id="company"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter company name"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false }}
                    className="flex flex-col"
                >
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: false }}
                    className="flex flex-col"
                >
                    <label htmlFor="service" className="text-sm font-medium text-gray-700 mb-1">Service Required</label>
                    <select
                        id="service"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option>Select a service</option>
                        <option>Offset Printing</option>
                        <option>Digital Printing</option>
                        <option>Packaging</option>
                        <option>Custom Design</option>
                    </select>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: false }}
                    className="flex flex-col"
                >
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                        id="message"
                        rows="4"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us more about your requirements..."
                    />
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-md hover:bg-yellow-300 transition duration-300"
                >
                    Submit Inquiry
                </motion.button>
            </motion.form>
        </div>
    </motion.section>
)  

export default Questionnaire  
