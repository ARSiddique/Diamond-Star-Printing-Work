import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "", email: "", subject: "", message: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); setStatus(null);
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/contact`, formData);
            if (res.status === 200) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("Something went wrong.");
            }
        } catch {
            setStatus("Error sending message.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden">
            {/* Light Particles or Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="w-[500px] h-[500px] bg-pink-500 rounded-full blur-[200px] opacity-20 absolute -top-48 -left-32 animate-pulse"></div>
                <div className="w-[400px] h-[400px] bg-blue-500 rounded-full blur-[180px] opacity-20 absolute -bottom-48 right-0 animate-pulse"></div>
            </div>

            {/* Hero */}
            <motion.section
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center pt-28 pb-12 relative z-10"
            >
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                    Let's Connect
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                    Send us a message or connect with us on social media.
                </p>
            </motion.section>

            {/* Contact Form + Info */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    onSubmit={handleSubmit}
                    className="bg-white/10 backdrop-blur-lg p-10 rounded-xl shadow-xl border border-white/20 space-y-6"
                >
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Drop us a message
                    </h2>

                    {["name", "email", "subject", "message"].map((field, idx) => (
                        <div key={idx} className="relative">
                            {field !== "message" ? (
                                <input
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    required={field !== "subject"}
                                    className="peer w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-transparent outline-none border border-white/20 focus:border-pink-400"
                                    placeholder={field[0].toUpperCase() + field.slice(1)}
                                />
                            ) : (
                                <textarea
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="peer w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-transparent outline-none border border-white/20 focus:border-pink-400"
                                    placeholder="Message"
                                />
                            )}
                            <label
                                htmlFor={field}
                                className="absolute left-4 top-2 text-sm text-white/70 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 transition-all"
                            >
                                {field[0].toUpperCase() + field.slice(1)}
                            </label>
                        </div>
                    ))}

                    {status && (
                        <p className="text-sm text-center text-green-400 font-medium">
                            {status}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold tracking-wide transition"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </motion.form>

                {/* Info */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-10"
                >
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">
                            Contact Info
                        </h3>
                        <div className="flex items-start gap-4 text-white/90">
                            <Phone size={28} className="text-pink-400" />
                            <div>
                                <p>+971 50 5810345</p>
                                <p>+971 2 5538731</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-white/90">
                            <Mail size={28} className="text-blue-400" />
                            <p>diamoond.star@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-4 text-white/90">
                            <MapPin size={28} className="text-green-400" />
                            <p>Musaffah M14, Abu Dhabi, UAE</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-white">Socials</h3>
                        <div className="flex space-x-6 text-2xl">
                            <a
                                href="https://www.facebook.com/dspw2006/"
                                className="text-white hover:text-blue-500 transition duration-300"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.instagram.com/diamondstar_printingworks/"
                                className="text-white hover:text-pink-400 transition duration-300"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/diamondstar2001/"
                                className="text-white hover:text-blue-400 transition duration-300"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Optional Map */}
            <div className="max-w-6xl mx-auto px-6 pb-20">
                <iframe
                    className="rounded-xl shadow-lg w-full h-[350px] border-0"
                    title="Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.173964046358!2d54.510966274435525!3d24.334673063172547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e3bc5af47835f%3A0x3f8c18b6fc6e3cb0!2sMusaffah%20M-14%20-%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1716222200000!5m2!1sen!2sae"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;
