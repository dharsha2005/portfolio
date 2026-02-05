import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-[calc(100vh-64px)] flex items-center justify-center py-20">
            <div className="text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Dharshan B
                    </h1>
                    <h3 className="text-2xl md:text-4xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        Full Stack Developer | <span className="text-secondary">AIML</span>
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        I am a passionate Full Stack Developer with strong interest in AI & Machine Learning.
                        I enjoy building real-world applications and solving practical problems using modern technologies.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-colors shadow-lg shadow-blue-500/20"
                    >
                        View Projects
                    </a>
                    <a
                        href="/resume.pdf"
                        className="px-8 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary rounded-full font-medium transition-colors"
                        download
                    >
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
