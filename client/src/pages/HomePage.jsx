import Hero from "../components/Hero";
import Questionnaire from "../components/Questionnaire";
import Services from "../components/Services";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection ";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <AboutSection/>
            <Questionnaire />
            <Services />
            <Products />
            <Testimonials />

        </div>
    );
};

export default HomePage;
