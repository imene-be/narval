import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mentions légales — Narval Yachting",
  description: "Mentions légales du site Narval Yachting.",
};

const sections = [
  {
    titre: "Qui a fait ce site ?",
    contenu: (
      <>
        <p>
          Ce site a été conçu et développé par <strong className="text-white/90">Imène Bentifraouine</strong>, étudiante en Mastère Stratégie Digitale, Manager de projets informatiques (RNCP38905).
        </p>
        <p>
          Narval Yachting est un site vitrine dédié à la location de yachts haut de gamme en Méditerranée, réalisé dans le cadre d&apos;un projet personnel. Il n&apos;a pas de vocation commerciale directe.
        </p>
        <div className="flex flex-col gap-1 mt-2">
          <span className="text-white/55">✉ bentifraouineimene@gmail.com</span>
          <a href="https://imenebe.fr" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white transition-colors">🌐 imenebe.fr</a>
        </div>
      </>
    ),
  },
  {
    titre: "Hébergement",
    contenu: (
      <>
        <p>
          Ce site est hébergé chez <strong className="text-white/90">Vercel</strong>, une plateforme de déploiement pensée pour les projets web modernes.
        </p>
        <p className="text-white/50">
          Vercel Inc., 340 Pine Street, Suite 700, San Francisco, CA 94104, États-Unis — vercel.com
        </p>
      </>
    ),
  },
  {
    titre: "Propriété du contenu",
    contenu: (
      <>
        <p>
          Les textes, visuels et contenus éditoriaux publiés sur Narval Yachting sont la propriété de leurs auteurs respectifs.
        </p>
        <p>
          Les photographies utilisées proviennent de banques d&apos;images libres de droits (Unsplash). Toute reproduction ou exploitation commerciale du contenu éditorial sans autorisation explicite est interdite.
        </p>
      </>
    ),
  },
  {
    titre: "Données personnelles & RGPD",
    contenu: (
      <>
        <p>
          Le formulaire de contact présent sur ce site collecte uniquement les informations que vous saisissez volontairement (nom, email, message) dans le but de répondre à votre demande. Ces données ne sont ni stockées en base de données, ni revendues, ni utilisées à des fins commerciales.
        </p>
        <p>
          Conformément au règlement européen RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour toute demande :
        </p>
        <span className="text-white/55">bentifraouineimene@gmail.com</span>
      </>
    ),
  },
  {
    titre: "Cookies",
    contenu: (
      <>
        <ul className="flex flex-col gap-2">
          {[
            "Aucun cookie déposé sur votre appareil.",
            "Aucun cookie de tracking ou publicitaire.",
            "Vercel Analytics peut être utilisé pour des statistiques de fréquentation anonymes. Cet outil est privacy-first : aucune donnée personnelle collectée.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-narval-teal mt-0.5 flex-shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-white/50">
          Si cela venait à changer, une bannière de consentement conforme serait mise en place.
        </p>
      </>
    ),
  },
  {
    titre: "Responsabilité",
    contenu: (
      <>
        <p>
          Narval Yachting est un site vitrine à visée informative. Les informations, tarifs et disponibilités présentés sont fournis à titre illustratif et peuvent être modifiés sans préavis. Aucune réservation ni paiement n&apos;est effectué directement sur ce site.
        </p>
        <p>
          L&apos;éditeur ne peut être tenu responsable d&apos;une utilisation du contenu en dehors de ce cadre, ni de tout dommage direct ou indirect lié à l&apos;accès ou à l&apos;utilisation de ce site.
        </p>
        <p>
          Pour tout problème ou signalement :{" "}
          <span className="text-white/55">bentifraouineimene@gmail.com</span>
        </p>
      </>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <div className="bg-narval-dark pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-5">Transparence & légalité</p>
          <h1
            className="font-display text-white font-light leading-none mb-6"
            style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
          >
            Mentions légales
          </h1>
          <div className="divider mb-6" />
          <p className="font-body text-white/70 text-base max-w-xl leading-relaxed">
            Informations légales relatives au site Narval Yachting.
          </p>
        </div>
      </div>

      <main>
        <section className="bg-narval-dark py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="border-t border-white/10">
              {sections.map((section, i) => (
                <div
                  key={section.titre}
                  className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-6 sm:gap-12 py-12 border-b border-white/10"
                >
                  <div className="flex-shrink-0">
                    <span className="font-body text-[11px] tracking-[0.3em] text-narval-slate/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2
                      className="font-display text-white font-light mb-2"
                      style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
                    >
                      {section.titre}
                    </h2>
                    <div className="flex flex-col gap-4 font-body text-white/45 text-sm leading-relaxed">
                      {section.contenu}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-body text-[11px] text-white/20 tracking-wider mt-16 text-right">
              Réalisé par Bentifraouine Imène · Dernière mise à jour : 27 juin 2026
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
