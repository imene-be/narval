# Narval Yachting — Site vitrine

Site vitrine personnel dédié à la location de yachts haut de gamme en Méditerranée. Projet réalisé par **Imène Bentifraouine** dans le cadre du Mastère Stratégie Digitale, Manager de projets informatiques (RNCP38905).

---

## À propos du projet

**Narval** (du français *narval* — la baleine arctique à la corne spiralée) est une marque fictive de yachting de luxe basée sur la Côte d'Azur. Le site est une vitrine épurée et élégante, sans système de réservation en ligne ni paiement — le contact se fait directement par formulaire ou téléphone.

### Positionnement

- **Marché** : Location de yachts haut de gamme en Méditerranée
- **Cible** : Clientèle upper-middle-class, 35–60 ans, sensible au luxe accessible, à l'élégance sobre et à l'expérience sur-mesure
- **Zone géographique** : Côte d'Azur, Monaco, Saint-Tropez, Corse, Sardaigne, Portofino, Îles Baléares
- **Ton éditorial** : Raffiné, minimaliste, inspiré des codes du luxe français — ni tape-à-l'œil, ni froid
- **Vocation** : Informative uniquement — pas de vocation commerciale directe

---

## Stack technique

| Technologie | Version |
|---|---|
| Next.js (App Router) | 16.2.9 |
| React | 19 |
| TypeScript | — |
| Tailwind CSS | v4 |
| Hébergement | Vercel |

### Typographie

- **Cormorant Garamond** — titres, accroches, éléments display (`font-display`)
- **Raleway** — corps de texte, labels, navigation (`font-body`)

### Images

Photos libres de droit via [Unsplash](https://unsplash.com).

---

## Pages

| Route | Contenu |
|---|---|
| `/` | Page d'accueil — Hero, Pourquoi Narval, CTA, Destinations, Footer |
| `/experiences` | Les 3 formules (Journée, Événement, Week-end) + ce qui est inclus |
| `/flotte` | Narval I (yacht moteur 14m) & Narval II (voilier 11m) + standards |
| `/destinations` | Grille 8 destinations Méditerranée + description éditoriale |
| `/a-propos` | Histoire, valeurs, équipe |
| `/contact` | Formulaire de contact |
| `/mentions-legales` | Mentions légales RGPD |

---

## Design system

Les couleurs, typographies et composants sont définis via Tailwind CSS v4 (`@theme`) et des classes utilitaires personnalisées dans `globals.css`.

### Palette

| Variable | Hex | Usage |
|---|---|---|
| `narval-dark` | `#001A2B` | Fond sombre, texte principal |
| `narval-navy` | `#01354C` | Accents bleu profond |
| `narval-teal` | `#014352` | Accent secondaire |
| `narval-slate` | `#84A0AB` | Labels, textes secondaires |
| `narval-light` | `#F2F2F2` | Fond clair |

### Composants réutilisables

- `Navbar` — navigation fixe avec effet scroll
- `Footer` — logo + liens + contact + légal
- `PageHero` — hero image plein écran (utilisé sur `/destinations`)
- `ScrollAnimations` — animations au défilement (IntersectionObserver)
- `CtaBanner` — bande d'appel à l'action split image/texte
- `Destinations` — grille bord-à-bord avec overlay texte
- `WhyNarval` — 4 cards de promesses
- `Hero` — hero page d'accueil

---

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## Auteure

**Imène Bentifraouine**
Mastère Stratégie Digitale — Manager de projets informatiques (RNCP38905)

- ✉ bentifraouineimene@gmail.com
- 🌐 [imenebe.fr](https://imenebe.fr)
