import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "À propos — Narval Yachting",
  description:
    "L'histoire de Narval Yachting, notre passion pour la mer et notre exigence pour l'excellence en Méditerranée.",
};

const valeurs = [
  {
    titre: "Excellence",
    description:
      "Chaque détail est soigné, chaque prestation est pensée pour dépasser vos attentes. De l'entretien de nos yachts à l'accueil à bord, nous n'acceptons aucun compromis sur la qualité.",
  },
  {
    titre: "Authenticité",
    description:
      "Chez Narval, nous croyons que les meilleures expériences naissent de rencontres vraies. Notre équipe partage avec vous une passion sincère pour la mer et la navigation.",
  },
  {
    titre: "Sécurité",
    description:
      "La sécurité de nos passagers est notre priorité absolue. Nos équipements sont régulièrement contrôlés, nos skippers sont certifiés et notre assistance est disponible 24h/24.",
  },
];

const equipe = [
  {
    nom: "Julien Moreau",
    role: "Skipper en chef",
    bio: "Passionné de navigation depuis l'enfance, Julien a parcouru plus de 50 000 miles nautiques en Méditerranée. Breveté capitaine 200, il connaît chaque recoin de la côte et met son expertise au service de votre sécurité et de votre plaisir.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=85&fit=crop&crop=faces",
  },
  {
    nom: "Camille Faure",
    role: "Responsable réservations",
    bio: "Avec 8 ans d'expérience dans le secteur du tourisme de luxe, Camille gère chaque demande avec attention et personnalisation. Elle est votre premier contact et veille à ce que chaque sortie corresponde exactement à vos souhaits.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=85&fit=crop&crop=faces",
  },
];

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <div className="bg-narval-dark pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-5">Notre histoire</p>
          <h1 className="font-display text-white font-light leading-none mb-6" style={{ fontSize: "clamp(48px, 7vw, 96px)" }}>
            À propos de Narval
          </h1>
          <div className="divider mb-6" />
          <p className="font-body text-white/70 text-base max-w-xl leading-relaxed">
            Une passion pour la mer, une exigence pour l&apos;excellence.
          </p>
        </div>
      </div>

      <main>
        {/* Section — Notre histoire */}
        <section className="bg-narval-light py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=85&fit=crop"
                  alt="Yacht Narval en Méditerranée"
                  className="w-full h-[560px] object-cover img-overlay"
                />
              </div>

              <div>
                <p className="section-label mb-4">Notre histoire</p>
                <h2 className="section-title mb-4">
                  Nés de<br />
                  <em className="font-display italic text-narval-teal">la passion</em>
                </h2>
                <div className="divider mb-8" />
                <div className="flex flex-col gap-6 font-body text-narval-dark/80 text-base leading-relaxed">
                  <p>
                    Narval Yachting est né d&apos;une conviction simple : la mer Méditerranée mérite d&apos;être vécue autrement. Non pas depuis une plage bondée ou un hôtel climatisé, mais depuis le pont d&apos;un yacht, au plus près des éléments, dans un espace de liberté et de beauté.
                  </p>
                  <p>
                    Fondée par des passionnés de navigation, notre société a vu le jour sur la Côte d&apos;Azur avec un premier yacht et une idée fixe : offrir des expériences en mer d&apos;une qualité irréprochable, accessibles à ceux qui cherchent l&apos;exceptionnel sans les codes parfois froids du yachting traditionnel.
                  </p>
                  <p>
                    Au fil des années, nous avons affiné notre approche. Chaque sortie est pensée comme une invitation à ralentir, à regarder, à ressentir. Nos skippers ne sont pas des prestataires — ils sont des guides, des complices de vos meilleurs souvenirs.
                  </p>
                  <p>
                    Aujourd&apos;hui, avec deux yachts et une équipe soudée, Narval continue de naviguer avec la même exigence du premier jour : vous offrir le meilleur de la Méditerranée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section — Nos valeurs */}
        <section className="bg-narval-dark py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title-light text-center mb-16">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valeurs.map((valeur) => (
                <div key={valeur.titre} className="bg-white/5 border border-white/10 rounded-2xl p-10">
                  <h3 className="font-display text-white mb-4" style={{ fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 300 }}>
                    {valeur.titre}
                  </h3>
                  <div className="divider mb-6" />
                  <p className="font-body text-white/70 text-sm leading-relaxed">{valeur.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section — Notre équipe */}
        <section className="bg-narval-light py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="section-label text-center mb-4">Notre équipe</p>
            <h2 className="section-title text-center mb-16">
              Des visages<br />
              <em className="font-display italic text-narval-teal">derrière chaque sortie</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              {equipe.map((membre) => (
                <div key={membre.nom} className="flex flex-col gap-6">
                  <div className="w-full h-[380px] overflow-hidden rounded-xl">
                    <img
                      src={membre.image}
                      alt={membre.nom}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-display text-narval-dark text-2xl mb-1">{membre.nom}</p>
                    <p className="section-label mb-4">{membre.role}</p>
                    <p className="font-body text-narval-dark/75 text-sm leading-relaxed">{membre.bio}</p>
                  </div>
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
