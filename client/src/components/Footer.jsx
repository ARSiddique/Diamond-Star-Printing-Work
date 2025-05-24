import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const LocationMarker = () => {
    const position = [24.3346, 54.5135]; // Musaffah M14, Abu Dhabi
    return (
        <Marker position={position}>
            <Popup>Diamond Star Printing - Musaffah M14</Popup>
        </Marker>
    );
};

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
                {/* Logo & About */}
                <div>
                    <img src="/logo.png" alt="Company Logo" className="h-10 mb-4" />
                    <span className="text-lg md:text-lg font-bold tracking-wide">
                        Diamond Star Printing Works
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        We are a leading printing solutions provider with over 10 years of
                        experience delivering quality products and services worldwide.
                        Your trusted partner for all printing and packaging needs.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="mb-2">Musaffah M14, Abu Dhabi, UAE</p>
                    <p className="mb-2">Mobile Numbers: <br /> Ms. Tasneem <br /> +971 54 4511100</p>
                    <p className="mb-2"> Mohammad Rashid <br />(+971) 50 581 0345 <br />(+971) 55 9451345</p>
                    <p className="mb-2">Office Tel: (+971) 2 5538731</p>
                    <p className="mb-2">Email: diamoond.star@gmail.com</p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-5 text-gray-300 text-2xl">
                        <a href="#" aria-label="Facebook" className="hover:text-blue-500">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                            <FaTwitter />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                            <FaInstagram />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Map */}
                <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                    <MapContainer
                        center={[24.3346, 54.5135]}
                        zoom={13}
                        scrollWheelZoom={false}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationMarker />
                    </MapContainer>
                </div>
            </div>

            <div className="text-center mt-10 text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Diamond Star Printing. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
