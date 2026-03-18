"use client";

import { motion } from "framer-motion";
import { FileText, Github, Mail, User } from "lucide-react";
import NavBar from "../components/NavBar";
import Timeline from "../components/Timeline";
import PublicationCard from "../components/PublicationCard";

const publications = [
  {
    title: "Generative AI in Human-Computer Interaction: A Contextual Analysis",
    authors: ["Z. YourName", "A. Supervisor"],
    venue: "ACM CHI",
    year: "2025",
    doi: "10.1145/example123",
    link: "https://doi.org/10.1145/example123",
    abstract: "This paper explores the intersection of Generative AI and HCI, proposing a new framework for context-aware interfaces. We present empirical findings from a 6-month study demonstrating a 40% reduction in user friction."
  },
  {
    title: "Latent Diffusion Models for Predictive Design Systems",
    authors: ["Z. YourName", "J. Doe", "A. Supervisor"],
    venue: "NeurIPS",
    year: "2024",
    doi: "10.48550/example456",
    link: "https://arxiv.org/abs/example",
    abstract: "We introduce a novel architecture based on latent diffusion models capable of generating dynamic design systems in real-time. Our model outperforms state-of-the-art approaches in both efficiency and aesthetic evaluation metrics."
  }
];

export default function Home() {
  return (
    <>
      <NavBar />

      <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 pt-32">
        {/* Background decorations */}
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

        <main className="z-10 flex flex-col items-center text-center max-w-4xl w-full mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            id="about"
            className="glass-card px-8 py-4 mb-8 inline-flex items-center gap-3"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium tracking-wide uppercase text-gray-300">
              Available for Research Collaborations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Advancing <span className="gradient-text">Scientific Frontiers</span> <br className="hidden md:block" />
            Through Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
          >
            Ph.D. Researcher specializing in Artificial Intelligence and Human-Computer Interaction.
            Dedicated to crafting elegant solutions to complex algorithmic challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#journey" className="glass hover:bg-white/10 transition-all duration-300 px-6 py-3 rounded-full flex items-center gap-2 text-white font-medium">
              <User size={18} />
              My Journey
            </a>
            <a href="#publications" className="glass hover:bg-white/10 transition-all duration-300 px-6 py-3 rounded-full flex items-center gap-2 text-white font-medium">
              <FileText size={18} />
              Publications
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="glass hover:bg-white/10 transition-all duration-300 p-3 rounded-full text-white">
              <Github size={20} />
            </a>
            <a href="mailto:contact@example.com" className="glass hover:bg-white/10 transition-all duration-300 p-3 rounded-full text-white">
              <Mail size={20} />
            </a>
          </motion.div>
        </main>
      </div>

      {/* Timeline Section */}
      <Timeline />

      {/* Publications Section */}
      <section id="publications" className="py-24 px-6 max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          Selected <span className="gradient-text">Publications</span>
        </motion.h2>

        <div className="flex flex-col">
          {publications.map((pub, index) => (
            <PublicationCard key={index} {...pub} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 mt-24 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2026 Z. YourName. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Framer Motion & Tailwind CSS.</p>
      </footer>
    </>
  );
}
