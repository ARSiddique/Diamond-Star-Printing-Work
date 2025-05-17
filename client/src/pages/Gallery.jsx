import React, { useState } from 'react'
import { motion } from 'framer-motion'

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
    {
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        alt: 'Other Machine',
        title: 'Offset Printing Machine',
        category: 'Machines',
    },
]

const categories = ['All', 'Machines', 'Printed Materials', 'Events']

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const filteredImages =
        selectedCategory === 'All'
            ? images
            : images.filter((img) => img.category === selectedCategory)

    // Lightbox handlers
    const openLightbox = (index) => {
        setCurrentIndex(index)
        setLightboxOpen(true)
    }
    const closeLightbox = () => setLightboxOpen(false)
    const nextImage = () =>
        setCurrentIndex((prev) => (prev + 1) % filteredImages.length)
    const prevImage = () =>
        setCurrentIndex((prev) =>
            prev === 0 ? filteredImages.length - 1 : prev - 1
        )

    return (
        <div className="font-sans text-gray-800">
            {/* Hero Section with dark blue background */}
            <section
                className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1470&q=80')",
                }}
            >
                <div className="aabsolute inset-0 bg-black/100" />
                <motion.div
                    className="relative z-10 text-center px-6 max-w-3xl text-white"
                    initial={{ opacity: 0, y: -30 }} // upar se animate karna
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl font-bold drop-shadow-lg mb-6">
                        Our Gallery
                    </h1>
                    <motion.p
                        className="text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        Showcasing our best machines, printed materials, and events over the
                        years.
                    </motion.p>
                </motion.div>
            </section>

            {/* Category Filter */}
            <motion.div
                className="flex justify-center space-x-4 mt-12 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300
              ${selectedCategory === cat
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>

            {/* Image Grid with fade + scale animation on viewport enter */}
            <motion.div
                className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                {filteredImages.map((img, idx) => (
                    <motion.div
                        key={idx}
                        className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-transform duration-300"
                        onClick={() => openLightbox(idx)}
                        variants={{
                            hidden: { opacity: 0, y: 40, scale: 0.9 },
                            visible: { opacity: 1, y: 0, scale: 1 },
                        }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true, amount: 0.3 }} // animate once on viewport entry
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-64 object-cover"
                            loading="lazy"
                        />
                        <div className="bg-gray-100 p-3 text-center text-sm font-medium text-gray-700">
                            {img.title}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Lightbox */}
            {lightboxOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={closeLightbox}
                >
                    <motion.div
                        className="relative max-w-4xl max-h-[80vh]"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={filteredImages[currentIndex].src}
                            alt={filteredImages[currentIndex].alt}
                            className="rounded shadow-lg max-h-[80vh] object-contain"
                        />
                        <button
                            onClick={closeLightbox}
                            className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-red-500"
                            aria-label="Close"
                        >
                            &times
                        </button>
                        <button
                            onClick={prevImage}
                            className="absolute top-1/2 left-3 -translate-y-1/2 text-white text-4xl font-bold hover:text-blue-500"
                            aria-label="Previous"
                        >
                            &#8592
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute top-1/2 right-3 -translate-y-1/2 text-white text-4xl font-bold hover:text-blue-500"
                            aria-label="Next"
                        >
                            &#8594
                        </button>
                    </motion.div>
                </motion.div>
            )}

            {/* Stats Section */}
            <motion.section
                className="max-w-6xl mx-auto mt-20 px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div>
                    <h3 className="text-4xl font-bold text-blue-600">500+</h3>
                    <p className="text-gray-600 mt-2">Projects Completed</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-blue-600">25</h3>
                    <p className="text-gray-600 mt-2">Years in Business</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-blue-600">300+</h3>
                    <p className="text-gray-600 mt-2">Happy Clients</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-blue-600">50</h3>
                    <p className="text-gray-600 mt-2">Machines Installed</p>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="mt-16 mb-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-xl mb-4 font-semibold">
                    Interested in seeing more? Reach out to us for details!
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-yellow-500 hover:text-blue-800 transition duration-300 shadow-lg">
                    Contact Us
                </button>
            </motion.section>
        </div>
    )
}

export default Gallery 
