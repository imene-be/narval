const destinations = [
  {
    name: "Côte d'Azur",
    subtitle: "France · Méditerranée",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80&fit=crop",
  },
  {
    name: "Monaco",
    subtitle: "Monaco · Méditerranée",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80&fit=crop",
  },
  {
    name: "Corse",
    subtitle: "France · Méditerranée",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&q=80&fit=crop",
  },
  {
    name: "Sardaigne",
    subtitle: "Italie · Méditerranée",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=700&q=80&fit=crop",
  },
];

export default function Destinations() {
  return (
    <section className="bg-narval-dark pt-28 overflow-hidden">

      {/* Header centré */}
      <div className="text-center px-6 mb-12" data-animate>
        <p className="section-label mb-5">Où naviguer</p>
        <h2 className="section-title-light mb-8">Les destinations les plus prisées</h2>
        <a href="/contact" className="btn-primary">
          Discuter de votre itinéraire
        </a>
      </div>

      {/* Grille pleine largeur — bord à bord */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((dest) => (
          <a
            key={dest.name}
            href="/destinations"
            data-animate
            data-delay={destinations.indexOf(dest) * 80}
            className="group relative overflow-hidden block h-[260px] sm:h-[320px] lg:h-[420px]"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div
              className="absolute bottom-0 left-0 right-0 p-5 sm:p-6"
              style={{ textShadow: "0 2px 16px rgba(0,10,20,0.6)" }}
            >
              <p className="font-display text-white font-normal mb-1" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
                {dest.name}
              </p>
              <p className="font-body text-white/65 text-[10px] tracking-widest uppercase">
                {dest.subtitle}
              </p>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
