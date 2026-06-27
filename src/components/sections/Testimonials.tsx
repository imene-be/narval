const testimonials = [
  {
    quote:
      "Une journée absolument magique. Le skipper était aux petits soins, les criques étaient à couper le souffle. On a déjà réservé pour l'année prochaine.",
    name: "Sophie & Marc D.",
    detail: "Journée en mer · Juillet 2024",
    avatar: "SM",
  },
  {
    quote:
      "On a organisé notre EVJF à bord du Narval I. Champagne, musique, soleil. Tout était parfait, rien à redire. L'équipe a pensé à tout.",
    name: "Camille R.",
    detail: "Événement privé · Août 2024",
    avatar: "CR",
  },
  {
    quote:
      "Le week-end croisière est une expérience à part entière. Se réveiller en mer, le silence, les couleurs du ciel... Inimitable. Merci Narval.",
    name: "Thomas L.",
    detail: "Week-end croisière · Juin 2024",
    avatar: "TL",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-narval-navy py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <p className="section-label mb-5">Ils nous font confiance</p>
          <h2 className="section-title-light mb-6">Témoignages</h2>
          <div className="divider" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="bg-white/5 border border-white/10 p-8 flex flex-col gap-6 hover:bg-white/[0.08] transition-colors duration-300"
            >
              {/* Quote mark */}
              <span className="font-display text-narval-slate/40"
                style={{ fontSize: "64px", lineHeight: 1, fontWeight: 300 }}>
                &ldquo;
              </span>

              <p className="font-display text-white/90 italic leading-relaxed flex-1"
                style={{ fontSize: "20px", fontWeight: 300 }}>
                {t.quote}
              </p>

              <div className="border-t border-white/10 pt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-narval-teal flex items-center justify-center">
                  <span className="font-body text-[11px] text-white tracking-wider">
                    {t.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-body text-[12px] text-white font-medium tracking-wide">
                    {t.name}
                  </p>
                  <p className="font-body text-[11px] text-white/40 tracking-wider">
                    {t.detail}
                  </p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
