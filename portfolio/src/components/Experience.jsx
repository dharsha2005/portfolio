import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaCertificate } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            type: "education",
            role: "Student",
            title: "Academic Journey",
            period: "Present",
            description: "Currently pursuing studies with a focus on Computer Science, AI, and Machine Learning.",
            icon: <FaGraduationCap className="text-white" />
        },
        {
            id: 2,
            type: "project",
            role: "Full Stack Developer",
            title: "Complaint Management System",
            period: "Project",
            description: "Developed a comprehensive system using Java and MySQL to handle user complaints efficiently.",
            icon: <FaLaptopCode className="text-white" />
        },
        {
            id: 3,
            type: "learning",
            role: "Self-Learner",
            title: "AI & ML Enthusiast",
            period: "Ongoing",
            description: "Deep diving into Machine Learning algorithms, Data Analysis, and building predictive models.",
            icon: <FaCertificate className="text-white" />
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-dark/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Experience & Learning</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 md:ml-0 space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative pl-12 md:pl-0"
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-[-9px] top-0 w-6 h-6 rounded-full border-4 border-white dark:border-dark flex items-center justify-center
                  ${exp.type === 'education' ? 'bg-blue-500' : exp.type === 'project' ? 'bg-green-500' : 'bg-purple-500'}
                  md:left-1/2 md:-translate-x-1/2 md:top-0 z-10 shadow-md`}>
                                </div>

                                {/* Content Card */}
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                                        <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-primary bg-blue-50 dark:bg-blue-900/20 rounded-full">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                                        <h4 className="text-md font-medium text-gray-600 dark:text-gray-400 mb-2">{exp.role}</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
