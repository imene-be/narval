import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nos Destinations · Narval Yachting",
  description:
    "Côte d'Azur, Monaco, Saint-Tropez, Corse, Sardaigne, Portofino... Découvrez les destinations Méditerranée accessibles depuis notre base.",
};

const destinations = [
  {
    nom: "Côte d'Azur",
    pays: "France",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85&fit=crop",
  },
  {
    nom: "Monaco",
    pays: "Monaco",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85&fit=crop",
  },
  {
    nom: "Saint-Tropez",
    pays: "France",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=85&fit=crop",
  },
  {
    nom: "Antibes",
    pays: "France",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=1200&q=85&fit=crop",
  },
  {
    nom: "Corse",
    pays: "France",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=85&fit=crop",
  },
  {
    nom: "Sardaigne",
    pays: "Italie",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=85&fit=crop",
  },
  {
    nom: "Portofino",
    pays: "Italie",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&q=85&fit=crop",
  },
  {
    nom: "Îles Baléares",
    pays: "Espagne",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85&fit=crop",
  },
];


export default function DestinationsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Où naviguer"
        title="Nos destinations"
        image="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=85&fit=crop"
        subtitle="La Méditerranée offre des paysages exceptionnels à quelques heures de navigation."
      />

      <main>
        {/* Section 1 — 8 destinations */}
        <section className="bg-narval-dark overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {destinations.map((dest) => (
                <a key={dest.nom} href="/contact" className="group relative overflow-hidden block h-[260px] sm:h-[320px] lg:h-[420px]">
                  <img
                    src={dest.image}
                    alt={dest.nom}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 sm:p-6"
                    style={{ textShadow: "0 2px 16px rgba(0,10,20,0.6)" }}
                  >
                    <p className="font-display text-white font-normal mb-1" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
                      {dest.nom}
                    </p>
                    <p className="font-body text-white/65 text-[10px] tracking-widest uppercase">
                      {dest.pays}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </section>

        {/* Section 2 — Description */}
        <section className="bg-narval-dark py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="section-title-light mb-4">
                La Méditerranée,<br />
                <em className="font-display italic">votre terrain de jeu</em>
              </h2>
              <div className="divider mb-8" />
              <div className="flex flex-col gap-5 font-body text-white/75 text-base leading-relaxed">
                <p>
                  Depuis notre base sur la Côte d&apos;Azur, nous pouvons vous emmener explorer les plus beaux mouillages de la région : les calanques provençales, les baies encaissées de Corse, les eaux turquoise de Sardaigne ou encore les ports mythiques de Monaco et Saint-Tropez.
                </p>
                <p>
                  Chaque destination est accessible à la journée ou sur plusieurs jours. Notre skipper connaît les itinéraires secrets et les spots préservés que seuls les locaux connaissent.
                </p>
              </div>
            </div>

            {/* Facts */}
            <div className="border-t border-white/10 grid grid-cols-2 lg:grid-cols-4">
              {[
                { chiffre: "3h", label: "de navigation max entre destinations" },
                { chiffre: "350+", label: "jours de soleil par an" },
                { chiffre: "20°C", label: "température mer en été" },
                { chiffre: "15+", label: "escales possibles" },
              ].map((fact, i) => (
                <div
                  key={fact.chiffre}
                  className={`py-5 px-4 sm:py-6 sm:px-8 ${
                    i % 2 === 1 ? "border-l border-white/10" : i === 2 ? "lg:border-l lg:border-white/10" : ""
                  }`}
                >
                  <p className="font-display text-white font-light mb-1" style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}>
                    {fact.chiffre}
                  </p>
                  <p className="section-label">{fact.label}</p>
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
