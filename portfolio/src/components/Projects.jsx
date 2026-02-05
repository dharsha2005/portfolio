import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const manualProjects = [
        {
            id: 'manual-1',
            name: "Perundurai Rentals",
            description: "A comprehensive rental management platform.",
            html_url: "https://github.com/dharsha2005",
            homepage: "https://perundurai-rentals-3.onrender.com/",
            language: "React",
            stargazers_count: 5,
            forks_count: 2,
            updated_at: new Date().toISOString()
        },
        {
            id: 'manual-2',
            name: "Qrganic",
            description: "Organic product tracking and management system.",
            html_url: "https://github.com/dharsha2005",
            homepage: "https://qrganic-1i1f.onrender.com/fpo",
            language: "React",
            stargazers_count: 4,
            forks_count: 1,
            updated_at: new Date().toISOString()
        }
    ];

    const fallbackProjects = [
        {
            id: 1,
            name: "Complaint Management System",
            description: "A comprehensive system for tracking and resolving user complaints efficiently.",
            html_url: "https://github.com/dharsha2005",
            language: "Java",
            stargazers_count: 5,
            forks_count: 2
        }
    ];

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/dharsha2005/repos');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();

                // Sort by Updated Date (newest first)
                const sorted = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

                // Combine manual projects with GitHub projects
                // We use a Set to avoid duplicates if the repo exists in both (though IDs differ here)
                // Since manual IDs are strings, they won't clash with GitHub numeric IDs
                const combined = [...manualProjects, ...sorted];

                setProjects(combined);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setProjects([...manualProjects, ...fallbackProjects]);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">
                        A selection of my work from GitHub and Live Deployments
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col"
                            >
                                <div className="p-6 flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
                                            {project.name.replace(/-/g, ' ')}
                                        </h3>
                                        <a
                                            href={project.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-primary transition-colors"
                                        >
                                            <FaGithub size={22} />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 text-sm">
                                        {project.description || "No description available for this project."}
                                    </p>

                                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-auto">
                                        {project.language && (
                                            <span className="flex items-center gap-1">
                                                <span className="w-3 h-3 rounded-full bg-primary"></span>
                                                {project.language}
                                            </span>
                                        )}
                                        <span className="flex items-center gap-1">
                                            <FaStar className="text-yellow-400" />
                                            {project.stargazers_count}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaCodeBranch />
                                            {project.forks_count}
                                        </span>
                                    </div>
                                </div>
                                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700 flex gap-4">
                                    <a
                                        href={project.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 text-primary font-medium hover:underline"
                                    >
                                        View Code <FaExternalLinkAlt size={14} />
                                    </a>
                                    {project.homepage && (
                                        <a
                                            href={project.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 text-secondary font-medium hover:underline"
                                        >
                                            Live Demo <FaExternalLinkAlt size={14} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
