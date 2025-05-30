import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
    {
        src: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=80',
        alt: 'Printing Machine',
        title: 'High-Speed Printing Machine',
        category: 'Machines',
    },
    {
        src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
        alt: 'Printed Brochures',
        title: 'Colorful Brochures',
        category: 'Printed Materials',
    },
    {
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        alt: 'Trade Show Event',
        title: 'Trade Show Event',
        category: 'Events',
    },
];

const categories = ['All', 'Machines', 'Printed Materials', 'Events'];

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredImages =
        selectedCategory === 'All'
            ? images
            : images.filter((img) => img.category === selectedCategory);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const nextImage = () =>
        setCurrentIndex((prev) => (prev + 1) % filteredImages.length);

    const prevImage = () =>
        setCurrentIndex((prev) =>
            prev === 0 ? filteredImages.length - 1 : prev - 1
        );

    return (
        <div className="font-sans text-gray-800">
            {/* 1. Hero Section with Video Background */}
            <section className="relative w-full h-[600px] overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/GalleryVideo.mp4" // 🔁 Replace with your custom video
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="absolute inset-0 bg-black opacity-60 z-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Welcome to Our Visual Experience
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed">
                            Discover the story behind every print. From concept to creation, our journey is
                            crafted with precision, innovation, and passion. Let our visuals speak louder
                            than words.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 1. Intro Section */}
            <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white py-20 px-6 text-center">
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Journey Through Visuals</h1>
                    <p className="text-lg leading-relaxed text-justify hyphens-auto">
                        At Al Bony Press, every image tells a story of precision, dedication,
                        and creativity. From our high-tech machinery to vibrant printed
                        materials, we capture the essence of quality. Our gallery is a window
                        into the world of printing excellence — where vision meets execution.
                    </p>
                </motion.div>
            </section>

            {/* 2. Gallery Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-4 my-10 ">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === cat
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-200 text-gray-800 hover:bg-blue-100'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* 3. Image Gallery */}
            <motion.div
                className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
                {filteredImages.map((img, idx) => (
                    <motion.div
                        key={idx}
                        onClick={() => openLightbox(idx)}
                        className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
                        <div className="bg-gray-100 p-3 text-center font-medium text-gray-700">
                            {img.title}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* 4. Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="relative max-w-4xl max-h-[80vh]"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={filteredImages[currentIndex].src}
                                alt={filteredImages[currentIndex].alt}
                                className="rounded shadow-lg max-h-[80vh] object-contain"
                            />
                            <button className="absolute top-3 right-3 text-white text-3xl" onClick={closeLightbox}>
                                &times;
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 5. Content Section */}
            <section className="py-20 px-6 bg-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">A Tradition of Innovation</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        We believe in innovation through precision. Our advanced printing
                        technologies, coupled with decades of craftsmanship, have empowered
                        us to deliver consistent excellence. From idea to final product, our
                        journey has been about staying ahead while staying grounded.
                    </p>
                </div>
            </section>

            {/* 6. Full Video/Image Section */}
            <section className="w-full">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-[400px] object-cover"
                >
                    <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
                </video>
            </section>

            {/* 7. Statistics Section */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
                    {[
                        { value: '10+', label: 'Years of Experience' },
                        { value: '500+', label: 'Projects Completed' },
                        { value: '100%', label: 'Client Satisfaction' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-8 shadow-lg rounded-xl"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-4xl font-bold text-blue-700 mb-2">{stat.value}</h3>
                            <p className="text-gray-700 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 8. CTA */}
            <section className="text-center py-20 bg-blue-800 text-white">
                <motion.div
                    className="max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold mb-4">Let’s Bring Your Vision to Life</h3>
                    <p className="mb-6 text-lg">
                        Get in touch with us to discuss your project. We’re ready to print your success!
                    </p>
                    <Link to="/contact">
                        <button className="bg-yellow-400 text-blue-900 px-8 py-3 font-semibold rounded shadow hover:bg-yellow-300 transition duration-300">
                            Contact Us
                        </button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Gallery;
