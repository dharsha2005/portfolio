import { useState } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            Dharshan B
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
                                aria-label="Toggle Theme"
                            >
                                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
                            aria-label="Toggle Theme"
                        >
                            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 dark:text-gray-300 hover:text-primary p-2 transition-colors"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-dark border-b border-gray-200 dark:border-gray-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-900"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
