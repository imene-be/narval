import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-narval-dark pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image src="/logo-narval.svg" alt="Narval" width={200} height={108} className="brightness-0 invert opacity-70" />
            <p className="font-body text-sm text-white/40 leading-relaxed mt-6 max-w-xs">
              Location de yachts haut de gamme en Méditerranée.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-narval-slate mb-6">
              Pages
            </p>
            <ul className="flex flex-col gap-4">
              {[
                ["Accueil", "/"],
                ["Expériences", "/experiences"],
                ["Notre flotte", "/flotte"],
                ["Destinations", "/destinations"],
                ["À propos", "/a-propos"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Légal */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-narval-slate mb-6">
                Contact
              </p>
              <ul className="flex flex-col gap-4">
                <li className="font-body text-sm text-white/50">
                  +33 6 00 00 00 00
                </li>
                <li className="font-body text-sm text-white/50">
                  contact@narval-yachting.fr
                </li>
                <li className="font-body text-sm text-white/50">
                  Méditerranée · France
                </li>
              </ul>
            </div>

            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-narval-slate mb-6">
                Légal
              </p>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="/mentions-legales"
                    className="font-body text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] text-white/25 tracking-wider">
            © {new Date().getFullYear()} Narval Yachting. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="/mentions-legales" className="font-body text-[11px] text-white/25 hover:text-white/50 transition-colors tracking-wider">
              Mentions légales
            </a>
            <a href="#" className="font-body text-[11px] text-white/25 hover:text-white/50 transition-colors tracking-wider">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
