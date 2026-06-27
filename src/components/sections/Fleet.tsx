const yachts = [
  {
    name: "Narval I",
    type: "Yacht à moteur",
    length: "14 m",
    capacity: "12 pers.",
    speed: "28 nœuds",
    description:
      "Notre fleuron. Élégant et puissant, le Narval I offre un espace de vie exceptionnel sur deux niveaux avec terrasse de soleil et salon panoramique.",
    image:
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=900&q=80&fit=crop",
    tag: "Le plus demandé",
  },
  {
    name: "Narval II",
    type: "Yacht à voile",
    length: "11 m",
    capacity: "8 pers.",
    speed: "12 nœuds",
    description:
      "Pour les amoureux de la navigation traditionnelle. Le Narval II vous offre une expérience authentique, dans le silence et la grâce du vent.",
    image:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=900&q=80&fit=crop",
    tag: "Expérience voile",
  },
];

export default function Fleet() {
  return (
    <section id="flotte" className="bg-narval-dark py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <p className="section-label mb-5">Les bateaux</p>
          <h2 className="section-title-light mb-6">Notre flotte</h2>
          <div className="divider" />
        </div>

        {/* Fleet */}
        <div className="flex flex-col gap-20">
          {yachts.map((yacht, i) => (
            <div
              key={yacht.name}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className={`overflow-hidden relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="overflow-hidden h-[320px] md:h-[420px] rounded-2xl">
                  <img
                    src={yacht.image}
                    alt={yacht.name}
                    className="img-overlay w-full h-full object-cover"
                  />
                </div>
                {/* Tag */}
                <div className="absolute top-6 left-6 bg-narval-teal/90 backdrop-blur-sm px-4 py-2">
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white">
                    {yacht.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="section-label mb-4">{yacht.type}</p>
                <h3 className="font-display text-white mb-6"
                  style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300 }}>
                  {yacht.name}
                </h3>
                <p className="font-body text-white/85 text-base leading-relaxed mb-10">
                  {yacht.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-6 mb-10 border-t border-white/10 pt-8">
                  {[
                    { label: "Longueur", value: yacht.length },
                    { label: "Capacité", value: yacht.capacity },
                    { label: "Vitesse", value: yacht.speed },
                  ].map((spec) => (
                    <div key={spec.label}>
                      <p className="font-display text-white mb-1"
                        style={{ fontSize: "28px", fontWeight: 400 }}>
                        {spec.value}
                      </p>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate">
                        {spec.label}
                      </p>
                    </div>
                  ))}
                </div>

                <a href="/contact" className="btn-primary w-fit">
                  Demander une disponibilité
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
