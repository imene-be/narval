export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=85&fit=crop"
          alt="Yacht en mer"
          className="w-full h-full object-cover" style={{ filter: "grayscale(30%) saturate(0.75)" }}
        />
        <div className="absolute inset-0 bg-narval-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-narval-dark/25 via-transparent to-narval-dark/65" />
      </div>

      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/30 z-10" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto" style={{ textShadow: "0 2px 24px rgba(0,10,20,0.55)" }}>
        <p className="animate-fade-up font-body text-[11px] tracking-[0.35em] uppercase text-white font-bold mb-8">
          Location de yacht · Méditerranée
        </p>

        <h1 className="animate-fade-up-delay-1 font-display text-white leading-none mb-6"
          style={{ fontSize: "clamp(52px, 9vw, 120px)", fontWeight: 300 }}
        >
          L&apos;élégance
          <br />
          <em style={{ fontStyle: "italic" }}>en mer</em>
        </h1>

        <div className="animate-fade-up-delay-2 divider mx-auto mb-8" />

        <p className="animate-fade-up-delay-2 font-body text-white/70 text-sm tracking-widest max-w-md mx-auto mb-12">
          Des expériences maritimes d&apos;exception, accessibles à ceux qui osent
          vivre le grand large.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#experiences" className="btn-primary">
            Découvrir nos expériences
          </a>
          <a href="#flotte" className="font-body text-[11px] tracking-[0.2em] uppercase text-white font-bold hover:text-white/70 transition-colors duration-200">
            Notre flotte →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white/40" />
        <div className="w-4 h-6 border border-white/30 rounded-full flex items-start justify-center pt-1">
          <div className="scroll-dot w-0.5 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
