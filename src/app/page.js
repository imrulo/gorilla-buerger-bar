export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Immersive Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none filter brightness-[0.4]"
        >
          <source src="/assets/gorillaburgerbar.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 text-center px-6">
          <h2 className="text-brand-red text-xs md:text-sm font-black uppercase tracking-[0.5em] mb-6 animate-fade-in">
            Belgrade's Premium Urban Grill
          </h2>
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter leading-none mb-8 shadow-2xl">
            UNLEASH<br />
            <span className="text-white">THE GORILLA</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="https://wolt.com/sr/srb/belgrade/restaurant/gorila-burger" target="_blank" rel="noopener noreferrer" className="btn-premium">
              Order Online
            </a>
            <a href="/gallery" className="btn-outline">
              The Experience
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
          <span className="text-[8px] font-black uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-red animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* Narrative Section 1 - Quality */}
      <section className="py-32 bg-brand-black relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <img
                src="/assets/SaveInsta.to_621254607_18036481310751873_7051145870031801467_n.jpg"
                alt="Gourmet Burger Craft"
                className="grayscale group-hover:grayscale-0 transition-all duration-700 aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-red p-12 hidden md:block">
                <p className="text-4xl font-black italic leading-none">EST.<br />2024</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl">RAW<br /><span className="text-brand-red">QUALITY.</span></h2>
              <div className="h-1 w-24 bg-brand-red"></div>
              <p className="text-brand-muted text-lg leading-relaxed">
                We didn't come here to play safe. Gorilla Burger Bar is about the intersection of
                high-end gourmet craft and raw urban energy. Every patty is handcrafted from the
                finest local cuts, flame-grilled to order, and served in our signature brioche.
              </p>
              <ul className="space-y-4 font-black uppercase tracking-widest text-xs">
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-brand-red"></span>
                  <span>Daily Ground Local Beef</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-brand-red"></span>
                  <span>Signature Secret Sauces</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-brand-red"></span>
                  <span>Urban Culture First</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section - Video Integration */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter brightness-[0.2] grayscale"
          >
            <source src="/assets/gorillaburgerbarbelgrade.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
          <h2 className="text-5xl md:text-8xl">BORN IN THE <span className="text-brand-gold">STREETS</span></h2>
          <p className="max-w-2xl mx-auto text-xl text-brand-muted italic">
            "More than a burger shop, a Belgrade institution in the making.
            Late nights, loud music, and the best fuel in the city."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 text-left">
            {[
              { title: "THE VIBE", desc: "Industrial aesthetics meet high-octane Belgrade energy." },
              { title: "THE CRAFT", desc: "Technique first. We source local, we build bold." },
              { title: "THE HOURS", desc: "Fueling the city until the early hours. Always open." },
            ].map((item, idx) => (
              <div key={idx} className="glass-card">
                <h3 className="text-brand-red text-xl mb-4">{item.title}</h3>
                <p className="text-brand-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery CTA */}
      <section className="py-24 bg-brand-red">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <h2 className="text-5xl md:text-7xl text-white mb-4">WANT IT NOW?</h2>
            <p className="text-black/60 font-black uppercase tracking-widest">Official Delivery Partner: Wolt</p>
          </div>
          <a
            href="https://wolt.com/sr/srb/belgrade/restaurant/gorila-burger"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 bg-black text-white font-black uppercase tracking-[0.2em] transform -rotate-2 hover:rotate-0 transition-all duration-300"
          >
            Order on Wolt
          </a>
        </div>
      </section>
    </div>
  );
}
