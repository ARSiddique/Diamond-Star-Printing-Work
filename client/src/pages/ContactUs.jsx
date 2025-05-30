import React, { useState } from "react";
import axios from "axios";
import {
    Mail,
    Phone,
    MapPin,
    Smile,
    Headphones,
    MessageCircle
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/contact`,
                formData
            );
            if (response.status === 200) {
                setStatus("Thank you! We'll get back to you soon.");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("An error occurred. Please try again.");
        }
    };

    return (
        <div className="w-full">
            {/* Hero Section with Video */}
            <div className="relative w-full h-[90vh] overflow-hidden">
                <video
                    className="absolute w-full h-full object-cover"
                    src="/contact-hero.mp4"
                    autoPlay
                    muted
                    loop
                ></video>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg max-w-xl">
                        Reach out anytime — we’re here to help and support your journey.
                    </p>
                </div>
            </div>

            {/* Why Contact Us Section */}
            <section className="py-20 px-6 md:px-20 bg-white text-gray-800 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Reach Out to Us?</h2>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center">
                        <Smile className="text-blue-600 mb-4" size={40} />
                        <h3 className="font-bold text-xl">Friendly Support</h3>
                        <p>Our team is ready to help with warmth and patience — every time.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Headphones className="text-blue-600 mb-4" size={40} />
                        <h3 className="font-bold text-xl">Quick Responses</h3>
                        <p>We aim to respond within 24 hours on business days.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <MessageCircle className="text-blue-600 mb-4" size={40} />
                        <h3 className="font-bold text-xl">Expert Guidance</h3>
                        <p>Get answers from people who know our services inside and out.</p>
                    </div>
                </div>
            </section>

            {/* Contact Form and Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mx-6 md:mx-20 mb-20">
                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#0f1e44] text-white p-8 rounded-xl shadow-lg space-y-6"
                >
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="w-full px-4 py-2 bg-white/10 border border-blue-500 rounded focus:outline-none placeholder-gray-300"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 bg-white/10 border border-blue-500 rounded focus:outline-none placeholder-gray-300"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Subject</label>
                        <input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="w-full px-4 py-2 bg-white/10 border border-blue-500 rounded focus:outline-none placeholder-gray-300"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Write your message here..."
                            className="w-full px-4 py-2 bg-white/10 border border-blue-500 rounded focus:outline-none placeholder-gray-300 resize-none"
                        />
                    </div>
                    {status && <p className="text-green-400">{status}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Info */}
                <div className="space-y-8 text-gray-800">
                    <div className="flex gap-4 items-start">
                        <Phone className="text-blue-600" />
                        <div>
                            <h3 className="font-bold text-lg">Phone</h3><br />
                            <p>Ms. Tasneem <br /> +971 54 4511100</p><br />
                            <p>Mohammad Rashid <br /> +971 50 581 0345 <br /> +971 55 9451345</p><br />
                            <p>Office Tel: +971 2 5538731</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <Mail className="text-blue-600" />
                        <div>
                            <h3 className="font-bold text-lg">Email</h3>
                            <p>diamoond.star@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <MapPin className="text-blue-600" />
                        <div>
                            <h3 className="font-bold text-lg">Address</h3>
                            <p>Musaffah M14, Abu Dhabi, UAE</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-5 text-gray-300 text-2xl">
                            <a href="https://www.facebook.com/dspw2006/" target="_blank" aria-label="Facebook" className="text-blue-600 hover:text-blue-300">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/diamondstar_printingworks/" target="_blank" aria-label="Instagram" className="text-blue-600 hover:text-pink-500">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/diamondstar2001/" target="_blank" aria-label="LinkedIn" className="text-blue-600 hover:text-blue-400">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg mb-20">
                <iframe
                    title="Diamond Star Printing Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.173964046358!2d54.510966274435525!3d24.334673063172547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e3bc5af47835f%3A0x3f8c18b6fc6e3cb0!2sMusaffah%20M-14%20-%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1716222200000!5m2!1sen!2sae"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;
