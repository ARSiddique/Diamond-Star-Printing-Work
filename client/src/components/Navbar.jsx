import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    // { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMenu = () => setIsMobileOpen(!isMobileOpen);

    return (
        <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white sticky top-0 z-50 shadow-lg py-4">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer select-none">
                    <img
                        src="/logo.png"
                        alt="Diamond Star Printing Works Logo"
                        className="h-10"
                    />
                    <span className="text-lg md:text-xl font-bold tracking-wide">
                        Diamond Star Printing Works
                    </span>
                </div>

                {/* Hamburger Menu */}
                <button
                    className="md:hidden text-3xl focus:outline-none"
                    onClick={toggleMenu}
                    aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                >
                    {isMobileOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-6 text-sm font-semibold">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative pb-1 transition-all duration-300 select-none cursor-pointer ${isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                                    } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-yellow-300 after:transition-all`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Nav */}
            {isMobileOpen && (
                <ul className="md:hidden flex flex-col gap-4 bg-blue-800 px-6 py-4 mt-2 text-sm font-semibold">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                onClick={() => setIsMobileOpen(false)}
                                className={({ isActive }) =>
                                    `block py-1 ${isActive ? 'text-yellow-300' : 'hover:text-yellow-300 text-white'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
