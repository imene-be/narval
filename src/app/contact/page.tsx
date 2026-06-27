"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    experience: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <div className="bg-narval-dark pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-5">Parlons-en</p>
          <h1 className="font-display text-white font-light leading-none mb-6" style={{ fontSize: "clamp(48px, 7vw, 96px)" }}>
            Contactez-nous
          </h1>
          <div className="divider mb-6" />
          <p className="font-body text-white/70 text-base max-w-xl leading-relaxed">
            Notre équipe vous répond sous 24h avec une offre personnalisée.
          </p>
        </div>
      </div>

      <main>
        <section className="bg-narval-light py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left */}
              <div className="flex flex-col justify-center">
                <p className="section-label mb-5">Parlons-en</p>
                <h2 className="section-title mb-6">
                  Réservez
                  <br />
                  <em className="font-display italic" style={{ color: "#014352" }}>
                    votre expérience
                  </em>
                </h2>
                <div className="divider mb-8" />
                <p className="font-body text-base text-narval-dark/85 leading-relaxed mb-10 max-w-sm">
                  Décrivez-nous votre projet. Notre équipe vous répond sous 24h
                  avec les disponibilités et une offre personnalisée.
                </p>

                {/* Contact details */}
                <div className="flex flex-col gap-6">
                  <a href="tel:+33600000000" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-narval-dark/20 flex items-center justify-center group-hover:bg-narval-dark group-hover:border-narval-dark transition-all duration-300">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-narval-dark group-hover:text-white transition-colors">
                        <path d="M2 2.5C2 2.5 3.5 1 5 2.5L6.5 4C7 4.5 7 5.5 6.5 6L6 6.5C6 6.5 7 8 10 10L10.5 9.5C11 9 12 9 12.5 9.5L14 11C15.5 12.5 14 14 14 14C14 14 11 16 6 10C0 4 2 2.5 2 2.5Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate mb-1">Téléphone</p>
                      <p className="font-body text-sm text-narval-dark">+33 6 00 00 00 00</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/33600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 border border-narval-dark/20 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-narval-dark group-hover:text-white transition-colors">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.93.56 3.73 1.53 5.25L2 22l4.75-1.53A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.93 14.07c-.2.56-1.18 1.1-1.63 1.17-.41.06-.94.09-1.51-.09-.35-.11-.79-.25-1.37-.5-2.4-1.04-3.97-3.44-4.09-3.6-.12-.16-.97-1.29-.97-2.46 0-1.17.61-1.75.83-1.99.2-.22.44-.28.59-.28h.43c.14 0 .32-.05.5.38.2.47.67 1.63.73 1.75.06.12.1.26.02.42-.08.16-.12.26-.23.4-.12.14-.24.31-.35.42-.12.12-.24.24-.1.48.14.24.61 1.01 1.31 1.63.9.8 1.66 1.05 1.9 1.17.24.12.38.1.52-.06.14-.16.59-.69.75-.93.16-.24.32-.2.54-.12.22.08 1.37.65 1.61.77.24.12.4.18.46.28.06.1.06.56-.14 1.12z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate mb-1">WhatsApp</p>
                      <p className="font-body text-sm text-narval-dark">Réponse rapide garantie</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-narval-dark/20 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-narval-dark">
                        <rect x="1" y="3" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1"/>
                        <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate mb-1">Email</p>
                      <p className="font-body text-sm text-narval-dark">contact@narval-yachting.fr</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="bg-white p-6 sm:p-10 shadow-sm">
                {sent ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-16">
                    <div className="w-16 h-16 border border-narval-teal rounded-full flex items-center justify-center mb-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l4 4L19 7" stroke="#014352" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="font-display text-narval-dark mb-3" style={{ fontSize: "28px", fontWeight: 400 }}>
                      Message envoyé
                    </h3>
                    <p className="font-body text-sm text-narval-dark/60">
                      Notre équipe vous répond dans les 24 heures.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate">
                          Prénom
                        </label>
                        <input
                          type="text"
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleChange}
                          required
                          className="border-b border-narval-dark/20 focus:border-narval-teal outline-none py-3 bg-transparent font-body text-sm text-narval-dark placeholder:text-narval-dark/30 transition-colors duration-200"
                          placeholder="Sophie"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate">
                          Nom
                        </label>
                        <input
                          type="text"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          required
                          className="border-b border-narval-dark/20 focus:border-narval-teal outline-none py-3 bg-transparent font-body text-sm text-narval-dark placeholder:text-narval-dark/30 transition-colors duration-200"
                          placeholder="Dupont"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-b border-narval-dark/20 focus:border-narval-teal outline-none py-3 bg-transparent font-body text-sm text-narval-dark placeholder:text-narval-dark/30 transition-colors duration-200"
                        placeholder="sophie@email.com"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="border-b border-narval-dark/20 focus:border-narval-teal outline-none py-3 bg-transparent font-body text-sm text-narval-dark placeholder:text-narval-dark/30 transition-colors duration-200"
                        placeholder="+33 6 00 00 00 00"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate">
                        Type d&apos;expérience
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="border-b border-narval-dark/20 focus:border-narval-teal outline-none py-3 bg-transparent font-body text-sm text-narval-dark transition-colors duration-200 cursor-pointer"
                      >
                        <option value="">Choisir une expérience</option>
                        <option value="journee">Journée en mer</option>
                        <option value="evenement">Événement privé</option>
                        <option value="weekend">Week-end croisière</option>
                        <option value="autre">Autre / Sur mesure</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-body text-[10px] tracking-[0.2em] uppercase text-narval-slate">
                        Votre projet
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="border-b border-narval-dark/20 focus:border-narval-teal outline-none py-3 bg-transparent font-body text-sm text-narval-dark placeholder:text-narval-dark/30 transition-colors duration-200 resize-none"
                        placeholder="Décrivez-nous votre projet, le nombre de personnes, la date souhaitée..."
                      />
                    </div>

                    <button type="submit" className="btn-dark mt-2 w-full justify-center">
                      Envoyer ma demande
                    </button>

                    <p className="font-body text-[10px] text-center text-narval-dark/40 tracking-wider">
                      Réponse garantie sous 24h — Devis sans engagement
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
