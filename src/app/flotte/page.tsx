import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Notre Flotte · Narval Yachting",
  description:
    "Découvrez le Narval I et le Narval II, deux yachts d'exception entretenus aux plus hauts standards pour une navigation irréprochable en Méditerranée.",
};

const standards = [
  {
    titre: "Entretien annuel complet",
    description: "Révision mécanique, coque, équipements, chaque année sans exception.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4v4M18 28v4M4 18h4M28 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    titre: "Assurance tous risques",
    description: "Couverture complète pour tous nos passagers et l'embarcation.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 5L8 9v11c0 6 5 10 10 12 5-2 10-6 10-12V9L18 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M13 18l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    titre: "Certifications à jour",
    description: "Toutes les certifications réglementaires sont maintenues à jour.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="4" width="24" height="28" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 13h14M11 18h14M11 23h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    titre: "Skipper professionnel",
    description: "Capitaine breveté avec plus de 10 ans de navigation en Méditerranée.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 32c0-5.5 4.9-10 11-10s11 4.5 11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function FlottePage() {
  return (
    <>
      <Navbar />
      <div className="bg-narval-dark pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-5">Les bateaux</p>
          <h1 className="font-display text-white font-light leading-none mb-6" style={{ fontSize: "clamp(48px, 7vw, 96px)" }}>
            Notre flotte
          </h1>
          <div className="divider mb-6" />
          <p className="font-body text-white/70 text-base max-w-xl leading-relaxed">
            Deux yachts d&apos;exception, entretenus aux plus hauts standards, pour une navigation irréprochable en Méditerranée.
          </p>
        </div>
      </div>

      <main>
        {/* Section 1 — Catalogue yachts */}
        <section className="bg-narval-light py-24 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Narval I */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center" data-animate>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&q=85&fit=crop"
                  alt="Narval I"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
                <span className="absolute top-6 left-6 bg-narval-teal text-white text-xs tracking-widest uppercase px-4 py-2 rounded-sm">
                  Le plus demandé
                </span>
              </div>
              <div>
                <p className="section-label mb-3">Yacht à moteur</p>
                <h2 className="font-display text-narval-dark mb-2" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300 }}>
                  NARVAL I
                </h2>
                <div className="divider mb-6" />
                <p className="font-body text-narval-dark/80 leading-relaxed mb-8">
                  Notre fleuron, le Narval I, est un yacht à moteur de 14 mètres alliant performance et confort. Avec son pont soleil aménagé et son salon panoramique, il offre une expérience incomparable en Méditerranée.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-narval-dark/10">
                  {[["Longueur","14 m"],["Capacité","12 pers."],["Vitesse","28 nœuds"],["Année","2019"],["Cabines","3"],["Privatisation","Sur demande"]].map(([label, value]) => (
                    <div key={label}>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate mb-1">{label}</p>
                      <p className="font-body text-sm text-narval-dark font-medium">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mb-8">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate mb-4">Équipements</p>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {["Pont soleil aménagé","Salon panoramique intérieur","Cuisine équipée","Système audio Bose","Bain de soleil arrière","Plateforme de baignade"].map((eq) => (
                      <li key={eq} className="font-body text-sm text-narval-dark/80 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-narval-teal inline-block flex-shrink-0" />
                        {eq}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="/contact" className="btn-dark">Demander une disponibilité</a>
              </div>
            </div>

            {/* Narval II */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-animate data-delay="150">
              <div className="lg:order-2 relative">
                <img
                  src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=85&fit=crop"
                  alt="Narval II"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
                <span className="absolute top-6 left-6 bg-narval-navy text-white text-xs tracking-widest uppercase px-4 py-2 rounded-sm">
                  Expérience voile
                </span>
              </div>
              <div className="lg:order-1">
                <p className="section-label mb-3">Voilier</p>
                <h2 className="font-display text-narval-dark mb-2" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300 }}>
                  NARVAL II
                </h2>
                <div className="divider mb-6" />
                <p className="font-body text-narval-dark/80 leading-relaxed mb-8">
                  Pour ceux qui veulent vivre la navigation dans sa forme la plus pure, le Narval II est un voilier de 11 mètres offrant une connexion authentique avec les éléments. Silencieux, élégant, il glisse sur les eaux méditerranéennes avec une grâce incomparable.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-narval-dark/10">
                  {[["Longueur","11 m"],["Capacité","8 pers."],["Vitesse","12 nœuds"],["Année","2021"],["Cabines","2"],["Privatisation","Sur demande"]].map(([label, value]) => (
                    <div key={label}>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate mb-1">{label}</p>
                      <p className="font-body text-sm text-narval-dark font-medium">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mb-8">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate mb-4">Équipements</p>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {["Voiles récentes","Cockpit spacieux","2 cabines doubles","Cuisine complète","GPS et instruments modernes","Annexe avec moteur"].map((eq) => (
                      <li key={eq} className="font-body text-sm text-narval-dark/80 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-narval-teal inline-block flex-shrink-0" />
                        {eq}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="/contact" className="btn-dark">Demander une disponibilité</a>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2 — Standards + CTA fusionnés */}
        <section className="bg-narval-light py-24 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16">
              <div>
                <p className="section-label mb-4">Nos engagements</p>
                <h2 className="section-title">Les standards Narval</h2>
              </div>
              <a href="/contact" className="btn-dark self-start sm:self-auto">
                Réserver une sortie
              </a>
            </div>

            {/* Standards — liste horizontale */}
            <div className="border-t border-narval-dark/10">
              {standards.map((item) => (
                <div
                  key={item.titre}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 py-7 border-b border-narval-dark/10"
                >
                  <span className="text-narval-dark/40 flex-shrink-0 sm:w-12">
                    {item.icon}
                  </span>
                  <div className="sm:w-56 flex-shrink-0">
                    <p className="font-body text-narval-dark text-sm font-medium tracking-widest uppercase">
                      {item.titre}
                    </p>
                  </div>
                  <p className="font-body text-narval-dark/55 text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
