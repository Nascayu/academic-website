"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="font-bold text-xl tracking-tighter">
                    Nascayu<span className="text-blue-500">.</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
                    <Link href="#about" className="hover:text-white transition-colors">About</Link>
                    <Link href="#journey" className="hover:text-white transition-colors">Journey</Link>
                    <Link href="#publications" className="hover:text-white transition-colors">Publications</Link>
                    <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
                </div>
                <Link
                    href="#contact"
                    className="glass-card px-5 py-2 text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                    Contact Me
                </Link>
            </div>
        </motion.nav>
    );
}
