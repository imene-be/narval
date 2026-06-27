export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden flex min-h-[32vh]">
      {/* Panneau gauche — teal sombre */}
      <div className="bg-narval-dark w-full lg:w-[52%] flex flex-col justify-center py-16 px-8 sm:px-14 lg:px-20 gap-10" data-animate>
        <div>
          <p className="section-label mb-5">Embarquement</p>
          <h2
            className="font-display text-white font-light leading-[0.95]"
            style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
          >
            L&apos;exception
            <br />
            <em className="italic">n&apos;attend&nbsp;pas.</em>
          </h2>
        </div>

        <div className="flex flex-wrap gap-5 items-center">
          <a href="/contact" className="btn-primary">
            Réserver
          </a>
          <a
            href="/flotte"
            className="font-body text-[10px] tracking-[0.25em] uppercase text-white/45 hover:text-white transition-colors duration-300"
          >
            Notre flotte →
          </a>
        </div>

      </div>

      {/* Panneau droit — image */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[52%]">
        <img
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1400&q=85&fit=crop&crop=top"
          alt="Yacht Narval"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </section>
  );
}
