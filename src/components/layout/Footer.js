import Link from "next/link";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-black border-t border-white/5 pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black italic tracking-tighter">
                            GORILLA<span className="text-brand-red">BURGER</span>
                        </h2>
                        <p className="text-brand-muted max-width-[300px]">
                            The official digital home of Belgrade's premium urban burger experience.
                            Gourmet ingredients, street culture, and flavor without compromise.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/gorillaburgerbar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-black uppercase tracking-widest text-brand-red">Navigate</h3>
                        <ul className="space-y-4">
                            {["Home", "Story", "Gallery", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                        className="text-brand-muted hover:text-white transition-all font-black uppercase tracking-widest text-xs"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="https://wolt.com/sr/srb/belgrade/restaurant/gorila-burger"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-gold hover:text-white transition-all font-black uppercase tracking-widest text-xs"
                                >
                                    Order on Wolt
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-black uppercase tracking-widest text-brand-red">HQ</h3>
                        <ul className="space-y-4 text-brand-muted text-sm font-medium">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-white mt-1 shrink-0" />
                                <span>Belgrade, Serbia</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Clock size={18} className="text-white mt-1 shrink-0" />
                                <span>Mon — Sun: 12:00 — 00:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar - Visible developer credit */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted">
                    <p>© {new Date().getFullYear()} GORILLA BURGER BAR BELGRADE</p>

                    <a
                        href="https://wa.link/6difl3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors flex items-center gap-1"
                    >
                        Made with L🍔ve by <span className="text-brand-red">imrulo.eth</span>
                    </a>

                    <p>ESTABLISHED IN SERBIA</p>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="hover:text-white transition-all">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-all">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
