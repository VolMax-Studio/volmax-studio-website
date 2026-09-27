import React, { useState } from 'react';
import Head from 'next/head';

const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      method: "P10",
      proof: "Evidence",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "Public Failure Registry",
      subtitle: "The standard we test others against, applied to ourselves. Errors are not deleted here — they are dated.",
      desc: "In audit work, credibility is binary. If we cover up our own validation errors or documentation mismatches, we lose the right to check anyone else's models. This registry documents every mistake caught in our pipelines or pre-registration plans."
    },
    failures: [
      {
        id: "fail-01",
        date: "2026-07-17",
        title: "Bat Cave: Non-Existent Number in Pre-Registration (L0 Scoping Error)",
        severity: "Substantive (voided a pre-registered hypothesis)",
        status: "F4 Deferred",
        impact: "The pre-registration froze the F4 hypothesis around a 76.8 MWh telemetry threshold for April 1, 2026. That number does not exist in the raw data (actual max_soc: 102.57 MWh; soc: 73.77 MWh). The scoping error passed the L0 gate into the frozen protocol, voiding the pre-registered F4 test.",
        resolution: "The error is documented in audits/US-TX-BATC-001/failures.md. The F4 verdict is Deferred pending official ERCOT column schemas — no post-hoc reframing was used to rescue the hypothesis. The rules stayed frozen; the mistake stays visible.",
        links: [
          { label: "Bat Cave Repo", url: "https://github.com/VolMax-Studio/volmax-ercot-batcave-audit" },
          { label: "Zenodo DOI", url: "https://doi.org/10.5281/zenodo.21401795" }
        ]
      }
    ],
    footer: {
      tagline: "Verification requires complete transparency.",
      backLink: "Back to Home"
    }
  },
  sr: {
    nav: {
      home: "Početna",
      services: "Usluge",
      method: "P10",
      proof: "Dokazi",
      about: "O nama",
      contact: "Kontakt"
    },
    hero: {
      title: "Javni registar grešaka",
      subtitle: "Standard koji primenjujemo na drugima, primenjen i na nas same. Greške se ovde ne brišu — one se datiraju.",
      desc: "U auditu, kredibilitet je binaran. Ako prikrivamo sopstvene validacione greške ili odstupanja u dokumentaciji, gubimo pravo da proveravamo tuđe modele. Ovaj registar dokumentuje svaku grešku uočenu u našim pipeline-ovima ili planovima pre-registracije."
    },
    failures: [
      {
        id: "fail-01",
        date: "17. jul 2026.",
        title: "Bat Cave: Nepostojeći broj u pre-registraciji (L0 scoping greška)",
        severity: "Suštinska (poništena pre-registrovana hipoteza)",
        status: "F4 Odloženo",
        impact: "Pre-registracija je zamrzla F4 hipotezu oko praga telemetrije od 76.8 MWh za 1. april 2026. Taj broj ne postoji u sirovim podacima (stvarni max_soc: 102.57 MWh; soc: 73.77 MWh). Scoping greška je prošla L0 kapiju u zamrznuti protokol, poništavajući pre-registrovani F4 test.",
        resolution: "Greška je dokumentovana u audits/US-TX-BATC-001/failures.md. F4 verdikt je Odložen (Deferred) do dobijanja zvaničnih ERCOT shema kolona — nikakvo post-hoc reframiranje nije korišćeno za spašavanje hipoteze. Pravila su ostala zamrznuta; greška ostaje vidljiva.",
        links: [
          { label: "Bat Cave repozitorijum", url: "https://github.com/VolMax-Studio/volmax-ercot-batcave-audit" },
          { label: "Zenodo DOI", url: "https://doi.org/10.5281/zenodo.21401795" }
        ]
      }
    ],
    footer: {
      tagline: "Verifikacija zahteva potpunu transparentnost.",
      backLink: "Nazad na početnu"
    }
  }
};

export default function Failures() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-200 selection:text-slate-900">
      <Head>
        <title>{`${t.hero.title} — VolMax Studio Lab`}</title>
        <meta name="description" content="Public failure registry documenting mistakes, corrections, and resolved discrepancies in our verification audits." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-minimal.jpg" />

        {/* Open Graph / LinkedIn Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.volmax-studio.rs/failures" />
        <meta property="og:title" content="Public Failure Registry — VolMax Studio Lab" />
        <meta property="og:description" content="Public failure registry documenting mistakes, corrections, and resolved discrepancies in our verification audits." />
        <meta property="og:site_name" content="VolMax Studio Lab" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Public Failure Registry — VolMax Studio Lab" />
        <meta name="twitter:description" content="Public failure registry documenting mistakes, corrections, and resolved discrepancies in our verification audits." />
      </Head>

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-slate-900">
            <img src="/logo-3d-light.png" alt="" className="w-8 h-8 rounded-md object-cover" />
            <span>VolMax</span>
            <span className="text-slate-400 font-medium hidden sm:inline">Studio Lab</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="/" className="hover:text-slate-900 transition-colors">{t.nav.home}</a>
            <a href="/audit" className="hover:text-slate-900 transition-colors">{t.nav.services}</a>
            <a href="/#method" className="hover:text-slate-900 transition-colors">{t.nav.method}</a>
            <a href="/#evidence" className="hover:text-slate-900 transition-colors">{t.nav.proof}</a>
            <a href="/#about" className="hover:text-slate-900 transition-colors">{t.nav.about}</a>
            <a href="/#contact" className="hover:text-slate-900 transition-colors">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-0.5 flex">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  lang === 'en' ? 'bg-teal-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('sr')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  lang === 'sr' ? 'bg-teal-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                SR
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold mb-6 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            DO NOT ERASE · DATE EVERY ERROR
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
            {t.hero.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-700 font-medium mb-6 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {t.hero.desc}
          </p>
        </header>

        {/* Failures List */}
        <section className="space-y-8 mb-24">
          {t.failures.map((fail) => (
            <div key={fail.id} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-slate-300 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-red-50 border-l border-b border-slate-200 text-red-700 text-xs font-mono font-bold">
                {fail.status}
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                <span className="text-xs font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
                  {fail.date}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Severity: <span className="text-red-700/90">{fail.severity}</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">{fail.title}</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Impact</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">{fail.impact}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Resolution</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{fail.resolution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100 font-mono text-xs">
                {fail.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 hover:underline hover:text-teal-600 transition-colors"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="py-24 border-t border-slate-200 bg-slate-50 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">{t.footer.tagline}</h2>
          <p className="text-slate-500 text-sm mb-10">volmax.core@gmail.com</p>

          <div className="flex justify-center flex-wrap gap-8 mb-8 text-sm font-semibold">
            <a href="/" className="text-teal-700 hover:text-teal-600 transition-colors underline">{t.footer.backLink}</a>
            <a href="https://github.com/VolMax-Studio" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/ivan-nestorov-274157371" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">LinkedIn</a>
          </div>

          <p className="text-slate-400 text-xs font-mono">&copy; {new Date().getFullYear()} VolMax Studio Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
