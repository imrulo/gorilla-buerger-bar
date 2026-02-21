import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6">
                <header className="max-w-4xl mb-24">
                    <h2 className="text-brand-red font-black uppercase tracking-[0.4em] mb-4 text-sm">Location & Connect</h2>
                    <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter leading-none mb-12">
                        PULL UP TO<br />
                        <span className="text-white">THE HQ</span>
                    </h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Info Side */}
                    <div className="space-y-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <section className="space-y-4">
                                <div className="flex items-center space-x-3 text-brand-red">
                                    <MapPin size={24} />
                                    <h3 className="text-xl font-black uppercase tracking-wider">Address</h3>
                                </div>
                                <p className="text-brand-muted text-lg">
                                    Belgrade, Serbia<br />
                                    11000 Centar
                                </p>
                            </section>

                            <section className="space-y-4">
                                <div className="flex items-center space-x-3 text-brand-red">
                                    <Clock size={24} />
                                    <h3 className="text-xl font-black uppercase tracking-wider">Hours</h3>
                                </div>
                                <p className="text-brand-muted text-lg">
                                    Mon — Sun<br />
                                    12:00 PM — 12:00 AM
                                </p>
                            </section>

                            <section className="space-y-4">
                                <div className="flex items-center space-x-3 text-brand-red">
                                    <Phone size={24} />
                                    <h3 className="text-xl font-black uppercase tracking-wider">Loud Line</h3>
                                </div>
                                <p className="text-brand-muted text-lg">
                                    +381 62 100 100 9
                                </p>
                            </section>

                            <section className="space-y-4">
                                <div className="flex items-center space-x-3 text-brand-red">
                                    <Instagram size={24} />
                                    <h3 className="text-xl font-black uppercase tracking-wider">Direct</h3>
                                </div>
                                <p className="text-brand-muted text-lg hover:text-white transition-colors cursor-pointer">
                                    <a href="https://www.instagram.com/gorillaburgerbar" target="_blank" rel="noopener noreferrer">@gorillaburgerbar</a>
                                </p>
                            </section>
                        </div>

                        <div className="bg-brand-red p-12 text-white">
                            <h3 className="text-3xl font-black uppercase tracking-tight mb-4">WANT IT DELIVERED?</h3>
                            <p className="mb-8 font-medium italic opacity-80">Our official delivery partner in Belgrade is Wolt.</p>
                            <a
                                href="https://wolt.com/sr/srb/belgrade/restaurant/gorila-burger"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-4 bg-black text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                            >
                                Order on Wolt
                            </a>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="relative h-[600px] bg-brand-charcoal overflow-hidden group">
                        <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-all duration-700"></div>
                        <div className="w-full h-full flex items-center justify-center text-center p-12">
                            <div className="space-y-4">
                                <MapPin size={48} className="mx-auto text-brand-red animate-pulse" />
                                <h4 className="text-2xl font-black uppercase tracking-widest">Interactive Map</h4>
                                <p className="text-brand-muted text-sm italic">Connecting to local coordinates...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
