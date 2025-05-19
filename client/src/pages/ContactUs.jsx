import React, { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Thank you! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <div
                className="relative w-full h-[90vh] bg-cover bg-center"
                style={{
                    backgroundImage: "url('/contact-hero.jpg')", // place image in /public
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg max-w-xl">
                        We’d love to hear from you. Reach out using the form below or the contact details.
                    </p>
                </div>
            </div>


            {/* Form & Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mx-6 md:mx-20 mb-20">
                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#0f1e44] text-white p-8 rounded-xl shadow-lg space-y-6 transition-all duration-500"
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
                            <p>+92 300 1234567</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <Mail className="text-blue-600" />
                        <div>
                            <h3 className="font-bold text-lg">Email</h3>
                            <p>info@albonypress.com</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <MapPin className="text-blue-600" />
                        <div>
                            <h3 className="font-bold text-lg">Address</h3>
                            <p>123 Printing Street, Lahore, Pakistan</p>
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
                    title="Diamond Star Printing Works Press Location"
                    src="https://www.google.com/maps/embed?pb=..."
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
