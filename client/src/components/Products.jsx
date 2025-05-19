import { motion } from "framer-motion"  
import DPPH from "../assets/products/DPPH.jpg"
import CPH from "../assets/products/CPH.jpg"
import PPH from "../assets/products/PPH.jpg"

const products = [
    {
        title: "Commercial Products",
        desc: "Books, brochures, cards, calendars & more for business use.",
        img: CPH,
    },
    {
        title: "Packaging Products",
        desc: "Rigid boxes, shopping bags, luxury packaging solutions.",
        img: PPH,
    },
    {
        title: "Digital Printing",
        desc: "Posters, banners, window graphics, floor graphics & more.",
        img: DPPH,
    },
]  

const Products = () => {
    return (
        <section className="bg-blue-900 py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold text-center text-yellow-400 mb-16 tracking-wide"
                >
                    Our Products
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-blue-800 rounded-2xl shadow-lg hover:shadow-yellow-400/50 hover:scale-[1.03] transition-transform duration-500 cursor-pointer overflow-hidden"
                        >
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-56 object-cover rounded-t-2xl"
                            />
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                                    {product.title}
                                </h3>
                                <p className="text-gray-300 text-base leading-relaxed">
                                    {product.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )  
}  

export default Products  
