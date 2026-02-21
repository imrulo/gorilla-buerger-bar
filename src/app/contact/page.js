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
                                    Bulevar Kralja Aleksandra 43<br />
                                    11000 Belgrade, Serbia
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
                    <div className="relative h-[600px] bg-brand-charcoal overflow-hidden border border-white/10 group">
                        <iframe
                            title="Gorilla Burger Bar Location"
                            className="w-full h-full grayscale invert-[0.9] opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=20.465,44.805,20.475,44.811&amp;layer=mapnik&amp;marker=44.8080,20.4700"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                        ></iframe>
                        <div className="absolute top-4 right-4 z-10">
                            <a
                                href="https://www.openstreetmap.org/?mlat=44.8080&amp;mlon=20.4700#map=17/44.8080/20.4700"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-premium px-4 py-2 text-[10px]"
                            >
                                View Larger
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
