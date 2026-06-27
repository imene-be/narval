import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nos Expériences · Narval Yachting",
  description:
    "Découvrez nos expériences en mer : journée en mer, événement privé ou week-end croisière en Méditerranée. Skippers certifiés, tout inclus.",
};

const experiences = [
  {
    number: "01",
    title: "Journée en mer",
    subtitle: "De l'aube au coucher du soleil",
    description:
      "Une journée complète à bord du Narval I. Appareillage au lever du soleil, navigation vers les criques les plus secrètes de la côte, baignade en mer cristalline, déjeuner à bord préparé par notre équipage. Retour en soirée avec un coucher de soleil inoubliable.",
    duree: "8h – 10h",
    capacite: "Jusqu'à 12 personnes",
    inclus: ["Skipper certifié", "Carburant", "Équipement sécurité"],
    prix: "890 €",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=85&fit=crop",
  },
  {
    number: "02",
    title: "Événement privé",
    subtitle: "Anniversaires · EVJF · Séminaires d'entreprise",
    description:
      "Transformez votre événement en souvenir inoubliable. Le yacht Narval I est entièrement privatisé pour vous : champagne à l'embarquement, décoration florale sur mesure, restauration traiteur premium, musique d'ambiance. Notre équipe s'occupe de chaque détail.",
    duree: "4h – 12h",
    capacite: "Jusqu'à 20 personnes",
    inclus: ["Skipper certifié", "Carburant", "Équipement sécurité"],
    prix: "1 490 €",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&q=85&fit=crop",
  },
  {
    number: "03",
    title: "Week-end croisière",
    subtitle: "Deux jours d'exception",
    description:
      "Partez pour 48h de navigation en mer Méditerranée. Premier soir au mouillage dans une crique isolée, nuit à bord sous les étoiles, petit-déjeuner face à la mer, deuxième jour d'exploration libre. Une expérience à part entière qui change le regard sur la mer.",
    duree: "2 jours / 1 nuit",
    capacite: "Jusqu'à 8 personnes",
    inclus: ["Skipper certifié", "Carburant", "Équipement sécurité"],
    prix: "2 490 €",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=85&fit=crop",
  },
];

const inclus = [
  {
    titre: "Skipper certifié",
    description: "10+ ans d'expérience en navigation côtière",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 26c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    titre: "Carburant inclus",
    description: "Aucune surprise à l'arrivée",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 12h2a2 2 0 012 2v4a2 2 0 01-2 2h-2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 11h6M10 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    titre: "Équipement sécurité",
    description: "Gilets, balises, trousse de secours",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 4L6 8v9c0 5 4.5 8.5 9 10 4.5-1.5 9-5 9-10V8L15 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 15l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    titre: "Équipement snorkeling",
    description: "Masques, tubas, palmes pour tous",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 18c3-6 10-10 16-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="22" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 22c5 0 8-2 11-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    titre: "Glacières & boissons fraîches",
    description: "Eau, sodas, jus de fruits",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6h14l-2 18H10L8 6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M6 6h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 10v8M17 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    titre: "Assistance 24h",
    description: "Joignable en permanence depuis le bord",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15 9v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function ExperiencesPage() {
  return (
    <>
      <Navbar />
      <div className="bg-narval-dark pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-5">Ce que nous proposons</p>
          <h1 className="font-display text-white font-light leading-none mb-6" style={{ fontSize: "clamp(48px, 7vw, 96px)" }}>
            Nos expériences
          </h1>
          <div className="divider mb-6" />
          <p className="font-body text-white/70 text-base max-w-xl leading-relaxed">
            Des sorties en mer pensées pour chaque occasion, menées par des skippers certifiés en Méditerranée.
          </p>
        </div>
      </div>

      <main>
        {/* Section 1 — Les 3 expériences */}
        <section className="bg-narval-light py-14 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experiences.map((exp, i) => (
                <div key={exp.number} data-animate data-delay={i * 100} className="bg-white rounded-2xl overflow-hidden card-hover">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover img-overlay"
                    />
                  </div>
                  <div className="p-8">
                    <p className="section-label mb-3">{exp.number}</p>
                    <h2 className="font-display text-2xl text-narval-dark mb-2">{exp.title}</h2>
                    <p className="font-body text-sm text-narval-slate uppercase tracking-widest italic mb-4">
                      {exp.subtitle}
                    </p>
                    <p className="font-body text-sm text-narval-dark/80 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-narval-dark/10">
                      <div>
                        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate mb-1">Durée</p>
                        <p className="font-body text-sm text-narval-dark">{exp.duree}</p>
                      </div>
                      <div>
                        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate mb-1">Capacité</p>
                        <p className="font-body text-sm text-narval-dark">{exp.capacite}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate mb-2">Inclus</p>
                        <ul className="flex flex-col gap-1">
                          {exp.inclus.map((item) => (
                            <li key={item} className="font-body text-sm text-narval-dark/80 flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-narval-teal inline-block" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="font-display text-narval-teal text-xl mb-6">
                      À partir de {exp.prix}
                    </p>
                    <a href="/contact" className="btn-dark w-full justify-center">
                      Réserver cette expérience
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 — Ce qui est inclus */}
        <section className="bg-narval-dark py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title-light text-center mb-4">Ce qui est inclus</h2>
            <div className="divider mx-auto mb-14" />

            <div className="border-t border-white/10">
              {inclus.map((item) => (
                <div
                  key={item.titre}
                  className="flex items-center gap-8 py-6 border-b border-white/10"
                >
                  <span className="text-white/40 flex-shrink-0">
                    {item.icon}
                  </span>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8">
                    <p className="font-body text-white text-sm font-medium tracking-widest uppercase flex-shrink-0">
                      {item.titre}
                    </p>
                    <p className="font-body text-white/45 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — CTA */}
        <section className="bg-narval-light py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-4">Prêt à vivre l&apos;expérience ?</h2>
            <div className="divider mx-auto mb-8" />
            <p className="font-body text-narval-dark/85 mb-10 leading-relaxed">
              Notre équipe est disponible pour répondre à toutes vos questions et construire avec vous la sortie en mer parfaite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact" className="btn-dark">
                Demander un devis
              </a>
              <a
                href="/flotte"
                className="font-body text-[11px] tracking-[0.2em] uppercase text-narval-dark/70 hover:text-narval-dark transition-colors"
              >
                Voir notre flotte →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
