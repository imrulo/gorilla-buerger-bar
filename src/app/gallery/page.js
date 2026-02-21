export default function GalleryPage() {
    const assets = [
        { type: 'video', src: '/assets/gorillaburgerbar.mp4', label: 'The Craft' },
        { type: 'image', src: '/assets/SaveInsta.to_621254607_18036481310751873_7051145870031801467_n.jpg', label: 'Urban Gourmet' },
        { type: 'video', src: '/assets/gorillaburgerbarbelgrade.mp4', label: 'Belgrade Energy' },
        { type: 'image', src: '/assets/SaveInsta.to_623884018_18089214005279471_8062549302544383822_n.jpg', label: 'Atmosphere' },
        { type: 'image', src: '/assets/SaveInsta.to_626424049_18082479973952699_5060627047892586301_n.jpg', label: 'Signature Bites' },
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6">
                <header className="mb-24">
                    <h2 className="text-brand-red font-black uppercase tracking-[0.4em] mb-4 text-sm">Visual Identity</h2>
                    <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter leading-none">
                        GALLERY<br />
                        <span className="text-white">OF FLAVOR</span>
                    </h1>
                </header>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-1 space-y-1">
                    {assets.map((asset, idx) => (
                        <div key={idx} className="relative group overflow-hidden bg-brand-black">
                            {asset.type === 'video' ? (
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full object-cover filter brightness-[0.6] group-hover:brightness-100 transition-all duration-700"
                                >
                                    <source src={asset.src} type="video/mp4" />
                                </video>
                            ) : (
                                <img
                                    src={asset.src}
                                    alt={asset.label}
                                    className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            )}

                            {/* Overlay Overlay */}
                            <div className="absolute inset-0 flex items-end justify-start p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-white font-black uppercase tracking-widest text-xs border-l-2 border-brand-red pl-3">
                                    {asset.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Experience Footer */}
                <div className="mt-32 border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-end gap-12">
                    <p className="max-w-md text-brand-muted text-lg italic">
                        "Every frame is a testament to our commitment to the urban grill craft."
                    </p>
                    <a href="https://www.instagram.com/gorillaburgerbar" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center space-x-3">
                        <span>Follow the Journey</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
