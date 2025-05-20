import React, { useState } from "react";
import axios from "axios";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from "lucide-react";

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
            {/* Hero Section */}
            <div className="relative w-full h-[90vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/contact-hero.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg max-w-xl">
                        We'd love to hear from you. Reach out using the form below or the contact details.
                    </p>
                </div>
            </div>

            {/* Form and Info Section */}
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
                            <h3 className="font-bold text-lg">Phone</h3>
                            <p>Ms. Tasneem - 054 4511100</p>
                            <p>Mohammad Rashid - 050 581 0345 / 055 9451345</p>
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

                    <div className="flex gap-6 pt-4 text-blue-600 text-xl">
                        <a href="#"><Facebook /></a>
                        <a href="#"><Twitter /></a>
                        <a href="#"><Instagram /></a>
                        <a href="#"><Linkedin /></a>
                    </div>
                </div>
            </div>

            {/* Map */}
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
