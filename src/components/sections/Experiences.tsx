const experiences = [
  {
    number: "01",
    title: "Journée en mer",
    subtitle: "De l'aube au coucher du soleil",
    description:
      "Partez à l'aventure pour une journée complète en mer. Ancrage dans des criques secrètes, baignade, déjeuner à bord. Le tout avec votre skipper dédié.",
    duration: "8h — 10h",
    capacity: "Jusqu'à 12 personnes",
    from: "À partir de 890 €",
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80&fit=crop",
  },
  {
    number: "02",
    title: "Événement privé",
    subtitle: "Anniversaires · EVJF · Séminaires",
    description:
      "Transformez votre événement en souvenir inoubliable. Champagne, décoration sur mesure, restauration premium. La mer comme cadre unique.",
    duration: "4h — 12h",
    capacity: "Jusqu'à 20 personnes",
    from: "À partir de 1 490 €",
    image:
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80&fit=crop",
  },
  {
    number: "03",
    title: "Week-end croisière",
    subtitle: "Deux jours d'exception",
    description:
      "Passez la nuit à bord et réveillez-vous en pleine mer. Deux jours de navigation, escales, et moments suspendus entre ciel et eau.",
    duration: "2 jours / 1 nuit",
    capacity: "Jusqu'à 8 personnes",
    from: "À partir de 2 490 €",
    image:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80&fit=crop",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="bg-narval-light py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <p className="section-label mb-5">Ce que nous proposons</p>
          <h2 className="section-title mb-6">
            Nos expériences
          </h2>
          <div className="divider" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {experiences.map((exp) => (
            <article
              key={exp.number}
              className="card-hover bg-white flex flex-col group overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden h-64">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="img-overlay w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <span className="font-body text-[10px] tracking-[0.3em] text-narval-slate mb-4">
                  {exp.number}
                </span>
                <h3 className="font-display text-narval-dark mb-1"
                  style={{ fontSize: "28px", fontWeight: 400 }}>
                  {exp.title}
                </h3>
                <p className="font-body text-[11px] tracking-[0.15em] uppercase text-narval-slate mb-5">
                  {exp.subtitle}
                </p>
                <p className="font-body text-base text-narval-dark/85 leading-relaxed mb-8 flex-1">
                  {exp.description}
                </p>

                {/* Details */}
                <div className="border-t border-narval-dark/10 pt-6 mb-6 grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate mb-1">
                      Durée
                    </p>
                    <p className="font-body text-[12px] text-narval-dark">
                      {exp.duration}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate mb-1">
                      Capacité
                    </p>
                    <p className="font-body text-[12px] text-narval-dark">
                      {exp.capacity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-display text-narval-teal"
                    style={{ fontSize: "18px", fontWeight: 500 }}>
                    {exp.from}
                  </span>
                  <a href="/contact" className="btn-outline text-[10px] py-3 px-5">
                    Réserver
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
