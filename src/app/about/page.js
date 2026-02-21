export default function StoryPage() {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-4xl mb-32">
                    <h2 className="text-brand-red font-black uppercase tracking-[0.4em] mb-4">The DNA</h2>
                    <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter leading-none mb-12">
                        BORN IN<br />
                        <span className="text-white">BELGRADE</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-brand-muted italic leading-relaxed">
                        "We didn't just open a burger shop. We started a movement
                        dedicated to the raw energy of urban grill culture."
                    </p>
                </div>

                {/* Narrative Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-48 items-center">
                    <div className="space-y-8 order-2 md:order-1">
                        <h2 className="text-4xl md:text-6xl text-brand-red">NO COMPROMISE.</h2>
                        <p className="text-brand-muted text-lg leading-relaxed">
                            At Gorilla Burger Bar, the mission is simple: serve the best burger in the city,
                            without the fine-dining pretension. We embrace the chaos of the streets and
                            the precision of the kitchen.
                        </p>
                        <div className="grid grid-cols-2 gap-8 text-xs font-black uppercase tracking-widest">
                            <div className="space-y-2 border-l-2 border-brand-red pl-4">
                                <p className="text-white">Fresh Meat</p>
                                <p className="text-brand-muted">Ground Daily</p>
                            </div>
                            <div className="space-y-2 border-l-2 border-brand-red pl-4">
                                <p className="text-white">Local Produce</p>
                                <p className="text-brand-muted">Serbian Farms</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative order-1 md:order-2">
                        <div className="absolute inset-0 bg-brand-red translate-x-4 translate-y-4 -z-10"></div>
                        <img
                            src="/assets/SaveInsta.to_623884018_18089214005279471_8062549302544383822_n.jpg"
                            alt="Inside Gorilla"
                            className="grayscale object-cover w-full h-[600px]"
                        />
                    </div>
                </div>

                {/* Philosophy Section */}
                <div className="bg-brand-red p-12 md:p-24 transform -rotate-1 group hover:rotate-0 transition-all duration-700 mb-48">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-4xl md:text-8xl text-white">THE PHILOSOPHY</h2>
                        <p className="text-black text-xl md:text-2xl font-black uppercase tracking-tight">
                            Gourmet isn't a price point. It's a standard.
                            Urban isn't a style. It's an attitude.
                        </p>
                        <div className="h-0.5 w-full bg-black/20"></div>
                        <p className="text-black/60 font-medium italic">
                            Whether you're finishing a shift or starting a night, we provide the fuel
                            that matches the intensity of the city we love.
                        </p>
                    </div>
                </div>

                {/* Final Brand Statement */}
                <div className="text-center py-24">
                    <h2 className="text-5xl md:text-8xl mb-12">READY TO<br /><span className="text-brand-red">JOIN THE TROOP?</span></h2>
                    <div className="flex justify-center gap-6">
                        <a href="https://wolt.com/sr/srb/belgrade/restaurant/gorila-burger" target="_blank" rel="noopener noreferrer" className="btn-premium">
                            Order Online
                        </a>
                        <a href="/contact" className="btn-outline">
                            Visit Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
