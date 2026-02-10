import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto flex justify-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8 w-full max-w-lg"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Contact Information</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-center">
                            Feel free to reach out through any of these platforms:
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:baladharshan1972@gmail.com" className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">baladharshan1972@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://github.com/dharsha2005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-white">
                                    <FaGithub size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">GitHub</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">dharsha2005</p>
                                </div>
                            </a>

                            <a href="https://leetcode.com/u/Dharshanbala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center text-yellow-600">
                                    <SiLeetcode size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">LeetCode</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Dharshanbala</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/dharshan-b-523468291/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600">
                                    <FaLinkedin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">LinkedIn</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Dharshan B</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
