import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiPytorch, SiTensorflow } from 'react-icons/si';

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend",
            skills: [
                { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
                { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
                { name: "React", icon: <FaReact className="text-blue-400" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Express", icon: <SiExpress className="text-gray-500 dark:text-gray-300" /> },
                { name: "Java", icon: <FaJava className="text-red-500" /> },
                { name: "Python", icon: <FaPython className="text-blue-500" /> },
            ]
        },
        {
            category: "Database",
            skills: [
                { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            ]
        },
        {
            category: "AI & Tools",
            skills: [
                { name: "Machine Learning", icon: <SiTensorflow className="text-orange-500" /> },
                { name: "Data Analysis", icon: <FaDatabase className="text-gray-500" /> },
                { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
                { name: "GitHub", icon: <FaGithub className="text-gray-700 dark:text-gray-100" /> },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-dark/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center text-primary">{category.category}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                                        <span className="text-3xl mb-2 transform group-hover:scale-110 transition-transform">
                                            {skill.icon}
                                        </span>
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
