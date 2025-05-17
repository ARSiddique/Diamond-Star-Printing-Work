import { motion } from "framer-motion";

const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        },
    }),
};

export default function ServiceGallery({ images = [] }) {
    return (
        <div className="mt-10">
            <h3 className="text-2xl font-bold mb-6 text-center">Service Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {images.map((src, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                        className="overflow-hidden rounded-xl shadow-lg group"
                    >
                        <img
                            src={src}
                            alt={`Gallery ${i}`}
                            className="w-full h-56 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
