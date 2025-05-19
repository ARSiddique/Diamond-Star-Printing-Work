import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const slides = [
    {
        image: "/hero/slide1.jpg",
        title: "Premium Commercial Printing",
        subtitle: "Where quality meets creativity in every print",
        // cta: "Get in Touch",
    },
    {
        image: "/hero/slide2.jpg",
        title: "Custom Packaging Solutions",
        subtitle: "Elevate your brand with standout packaging",
        // cta: "Request a Quote",
    },
    {
        image: "/hero/slide3.jpg",
        title: "Professional Print Services",
        subtitle: "Helping your ideas come to life in print",
        // cta: "View Our Work",
    },
];

const Hero = () => {
    return (
        <section className="relative w-full h-[90vh] select-none">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                navigation
                className="h-full"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="w-full h-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/50 z-10" />
                            <div className="relative z-20 h-full flex flex-col justify-center items-start max-w-6xl mx-auto px-6 text-white">
                                <motion.h1
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7 }}
                                    className="text-4xl md:text-6xl font-bold leading-tight mb-4"
                                >
                                    {slide.title}
                                </motion.h1>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="text-lg md:text-xl mb-6 max-w-xl"
                                >
                                    {slide.subtitle}
                                </motion.p>
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="bg-primary hover:bg-accent transition px-6 py-3 rounded-md text-white font-medium"
                                >
                                    {slide.cta}
                                </motion.button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
