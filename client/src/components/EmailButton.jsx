import { FaEnvelope } from "react-icons/fa";

const EmailButton = () => (
    <a
        href="mailto:info@albonypress.com"
        className="fixed bottom-20 left-4 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
    >
        <FaEnvelope size={20} />
    </a>
);

export default EmailButton;
