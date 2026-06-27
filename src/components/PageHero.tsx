interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageHero({ label, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[65vh] min-h-[520px] overflow-hidden">
      {/* Background image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-narval-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-narval-dark/90 via-narval-dark/30 to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16 pt-24" style={{ textShadow: "0 2px 24px rgba(0,10,20,0.55)" }}>
        <p className="section-label text-white mb-4">{label}</p>
        <h1
          className="font-display text-white font-light leading-none mb-4"
          style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-white/75 text-base max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
