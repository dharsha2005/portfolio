import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="aspect-square rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden"
                    >
                        <img
                            src="/profile.jpg"
                            alt="Dharshan B"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            I am a dedicated Full Stack Developer with a keen interest in Artificial Intelligence and Machine Learning.
                            My journey involves building scalable web applications and exploring the potential of AI to solve complex problems.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            With a strong foundation in both frontend and backend technologies, I strive to create seamless user experiences
                            backed by robust architecture. I am always eager to learn new tools and frameworks to stay ahead in the
                            ever-evolving tech landscape.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                            Goal: To become a skilled software engineer and contribute to impactful products.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
