import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => (
    <a
        href="https://wa.me/971000000000?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
        <FaWhatsapp size={20} />
    </a>
);

export default WhatsAppButton;
