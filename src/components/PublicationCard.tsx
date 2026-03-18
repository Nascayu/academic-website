"use client";

import { motion } from "framer-motion";
import { ExternalLink, Quote, Copy } from "lucide-react";
import { useState } from "react";

interface PublicationProps {
    title: string;
    authors: string[];
    venue: string;
    year: string;
    abstract: string;
    link: string;
    doi: string;
    index: number;
}

export default function PublicationCard({ title, authors, venue, year, abstract, link, doi, index }: PublicationProps) {
    const [showAbstract, setShowAbstract] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopyCitation = () => {
        navigator.clipboard.writeText(`${authors.join(", ")} (${year}). "${title}". ${venue}. DOI: ${doi}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 mb-6 group"
        >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {title}
                        </a>
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">{authors.join(", ")}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                        <span className="text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">{venue}</span>
                        <span className="text-gray-500">{year}</span>
                        <span className="text-gray-500">DOI: {doi}</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                    <button
                        onClick={() => setShowAbstract(!showAbstract)}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        title="Toggle Abstract"
                    >
                        <Quote size={18} />
                    </button>
                    <button
                        onClick={handleCopyCitation}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors relative"
                        title="Copy Citation"
                    >
                        <Copy size={18} />
                        {copied && <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] px-2 py-1 rounded">Copied!</span>}
                    </button>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
                    >
                        <ExternalLink size={18} />
                    </a>
                </div>
            </div>

            {showAbstract && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-sm text-gray-500 leading-relaxed italic border-l-2 border-blue-500/40 pl-4 py-2"
                >
                    {abstract}
                </motion.div>
            )}
        </motion.div>
    );
}
