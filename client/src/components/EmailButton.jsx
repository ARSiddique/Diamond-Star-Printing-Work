import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmailButton = () => (
    <Link
        to="/contact"
        className="fixed bottom-20 left-4 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition z-50"
        aria-label="Go to Contact Page"
    >
        <FaEnvelope size={20} />
    </Link>
);

export default EmailButton;
