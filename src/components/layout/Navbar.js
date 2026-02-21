"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Instagram, Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Story", href: "/about" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? "bg-brand-black/90 backdrop-blur-xl border-b border-white/5 py-4"
                    : "bg-transparent py-8"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="group">
                    <h1 className="text-2xl font-black italic tracking-tighter">
                        GORILLA<span className="text-brand-red group-hover:text-white transition-colors">BURGER</span>
                    </h1>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-black uppercase tracking-widest hover:text-brand-red transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://www.instagram.com/gorillaburgerbar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-brand-red transition-all"
                        aria-label="Follow us on Instagram"
                    >
                        <Instagram size={20} />
                    </a>
                    <a
                        href="https://wolt.com/sr/srb/belgrade/restaurant/gorila-burger"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium px-6 py-3 text-xs"
                    >
                        Order on Wolt
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                    }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-4xl font-black uppercase tracking-tighter hover:text-brand-red transition-all"
                    >
                        {link.name}
                    </Link>
                ))}
                <div className="pt-8 flex flex-col items-center space-y-6">
                    <a
                        href="https://www.instagram.com/gorillaburgerbar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-brand-red font-black uppercase tracking-widest"
                    >
                        <Instagram size={24} />
                        <span>@gorillaburgerbar</span>
                    </a>
                    <a
                        href="https://wolt.com/sr/srb/belgrade/restaurant/gorila-burger"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium w-full text-center"
                    >
                        Order Online
                    </a>
                </div>
            </div>
        </nav>
    );
}
