const reasons = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1"/>
        <path d="M16 8v8l5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Skipper certifié",
    description:
      "Chaque sortie est menée par un skipper professionnel avec minimum 10 ans d'expérience en navigation côtière.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 20 C8 14 12 10 16 10 C20 10 24 14 28 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <path d="M8 24 C10 20 13 18 16 18 C19 18 22 20 24 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: "Équipements premium",
    description:
      "Bateaux révisés chaque saison, équipés des dernières technologies de navigation et confort à bord.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="8" width="20" height="16" rx="1" stroke="currentColor" strokeWidth="1"/>
        <path d="M11 8V6M21 8V6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <path d="M6 14h20" stroke="currentColor" strokeWidth="1"/>
        <path d="M11 18h4M11 21h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: "Flexibilité totale",
    description:
      "Personnalisez votre itinéraire, vos horaires et vos escales. Chaque sortie est unique et construite avec vous.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L20 12L28 13L22 19L24 28L16 24L8 28L10 19L4 13L12 12L16 4Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Expérience sans faille",
    description:
      "De la réservation au retour au port, une équipe dédiée s'assure que chaque détail est parfait.",
  },
];

export default function WhyNarval() {
  return (
    <section id="pourquoi" className="bg-narval-light py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-16" data-animate>
          <p className="section-label mb-5">Notre promesse</p>
          <h2 className="section-title mb-6">
            Pourquoi
            <br />
            <em className="font-display italic" style={{ color: "#014352" }}>
              choisir Narval ?
            </em>
          </h2>
          <div className="divider mb-6" />
          <p className="font-body text-base text-narval-dark/85 leading-relaxed max-w-xl">
            Narval n&apos;est pas une simple location de bateau. C&apos;est une
            invitation à vivre la mer autrement, avec élégance, sécurité, et
            une attention aux détails qui fait toute la différence.
          </p>
        </div>

        {/* Cards — pleine largeur */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              data-animate
              data-delay={i * 100}
              className="group p-8 border border-narval-dark/10 hover:border-narval-teal/40 transition-colors duration-300 bg-white hover:bg-narval-dark/[0.02]"
            >
              <div className="text-narval-teal mb-6 group-hover:text-narval-dark transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="font-body text-[12px] tracking-[0.15em] uppercase text-narval-dark font-medium mb-3">
                {reason.title}
              </h3>
              <p className="font-body text-sm text-narval-dark/85 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
