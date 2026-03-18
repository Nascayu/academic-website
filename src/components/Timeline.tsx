"use client";

import { motion } from "framer-motion";

const milestones = [
    {
        year: "2024 - Present",
        title: "Ph.D. Candidate in CS",
        institution: "Stanford University",
        description: "Focusing on Artificial Intelligence and its applications in human-computer interaction.",
    },
    {
        year: "2022 - 2024",
        title: "Master of Science",
        institution: "MIT",
        description: "Specialized in Machine Learning and Computer Vision. Thesis on generative models.",
    },
    {
        year: "2018 - 2022",
        title: "Bachelor of Engineering",
        institution: "Tsinghua University",
        description: "Graduated with honors. Led the robotics team to a national championship.",
    }
];

export default function Timeline() {
    return (
        <section id="journey" className="py-24 px-6 max-w-4xl mx-auto relative">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-16 text-center"
            >
                Academic <span className="gradient-text">Journey</span>
            </motion.h2>

            <div className="relative border-l border-white/10 ml-4 md:ml-0 md:mx-auto md:w-full md:grid md:grid-cols-2 md:border-none">
                {milestones.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.2 }}
                        className={`mb-12 relative pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right md:justify-self-end md:border-r border-white/10" : "md:col-start-2 md:pl-12 md:mt-24"
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className={`absolute top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] ${index % 2 === 0 ? "-left-[9px] md:auto md:-right-[9px]" : "-left-[9px] md:-left-[9px]"
                            }`} />

                        <div className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300">
                            <span className="text-blue-400 font-mono text-sm block mb-2">{item.year}</span>
                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                            <h4 className="text-gray-400 font-medium mb-4">{item.institution}</h4>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
