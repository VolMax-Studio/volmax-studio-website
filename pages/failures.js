import React, { useState } from 'react';
import Head from 'next/head';

const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      method: "Method (P10)",
      proof: "Proof",
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
        title: "Bat Cave Pre-Registration Mismatch",
        severity: "Low (Documentation / Metadata)",
        status: "Resolved in v1.0.4",
        impact: "The initial pre-registration commit (v1.0.1) in the ERCOT Bat Cave Audit repository pointed to a Zenodo DOI with outdated pilot-stage tag metadata. The reported mean dispatch conformance tag differed from the correct computed value on the frozen dataset.",
        resolution: "All discrepancies were reconciled, the verification pipeline was re-run, and the correct metadata was frozen under tag v1.0.4. Zenodo DOI reference has been updated to 10.5281/zenodo.21416615.",
        links: [
          { label: "Bat Cave Repo", url: "https://github.com/VolMax-Studio/volmax-ercot-batcave-audit" },
          { label: "Zenodo DOI", url: "https://doi.org/10.5281/zenodo.21416615" }
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
      method: "Metod (P10)",
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
        title: "Bat Cave pre-registraciono odstupanje",
        severity: "Niska (Dokumentacija / Metapodaci)",
        status: "Rešeno u v1.0.4",
        impact: "Inicijalni pre-registracioni commit (v1.0.1) u ERCOT Bat Cave Audit repozitorijumu je ukazivao na Zenodo DOI sa zastarelim metapodacima iz pilot faze. Prijavljena srednja vrednost usklađenosti dispatch-a razlikovala se od tačne izračunate vrednosti na zamrznutom skupu podataka.",
        resolution: "Sva odstupanja su usaglašena, pipeline za verifikaciju je ponovo pokrenut, i ispravni metapodaci su zamrznuti pod tagom v1.0.4. Zenodo DOI referenca je ažurirana na 10.5281/zenodo.21416615.",
        links: [
          { label: "Bat Cave repozitorijum", url: "https://github.com/VolMax-Studio/volmax-ercot-batcave-audit" },
          { label: "Zenodo DOI", url: "https://doi.org/10.5281/zenodo.21416615" }
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
    <div className="min-h-screen bg-[#080808] text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black">
      <Head>
        <title>{`${t.hero.title} — VolMax Studio Lab`}</title>
        <meta name="description" content="Public failure registry documenting mistakes, corrections, and resolved discrepancies in our energy-ML verification audits." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Decorative Blur Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#080808]/85 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-mono font-bold text-lg tracking-tight">
            <span className="text-emerald-500">&lt;</span>
            <span>VolMax</span>
            <span className="text-zinc-500">StudioLab</span>
            <span className="text-emerald-500">/&gt;</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="/" className="hover:text-zinc-100 transition-colors">{t.nav.home}</a>
            <a href="/audit" className="hover:text-zinc-100 transition-colors">{t.nav.services}</a>
            <a href="/#method" className="hover:text-zinc-100 transition-colors">{t.nav.method}</a>
            <a href="/#proof" className="hover:text-zinc-100 transition-colors">{t.nav.proof}</a>
            <a href="/#about" className="hover:text-zinc-100 transition-colors">{t.nav.about}</a>
            <a href="/#contact" className="hover:text-zinc-100 transition-colors">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="bg-[#121214] border border-zinc-800 rounded-lg p-0.5 flex">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  lang === 'en' ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/10' : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('sr')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  lang === 'sr' ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/10' : 'text-zinc-400 hover:text-zinc-100'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/20 border border-red-500/20 text-red-400 text-xs font-semibold mb-6 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            DO NOT ERASE · DATE EVERY ERROR
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 text-gradient bg-gradient-to-r from-zinc-100 via-zinc-300 to-red-400">
            {t.hero.title}
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 font-medium mb-6 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <p className="text-sm md:text-base text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            {t.hero.desc}
          </p>
        </header>

        {/* Failures List */}
        <section className="space-y-8 mb-24">
          {t.failures.map((fail) => (
            <div key={fail.id} className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-700 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-red-950/40 border-l border-b border-zinc-800 text-red-400 text-xs font-mono font-bold">
                {fail.status}
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                <span className="text-xs font-mono text-zinc-500 bg-[#080808] px-2.5 py-1 rounded border border-zinc-900">
                  {fail.date}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Severity: <span className="text-red-400/90">{fail.severity}</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-100 mb-4">{fail.title}</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">Impact</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">{fail.impact}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">Resolution</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{fail.resolution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-900 font-mono text-xs">
                {fail.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline hover:text-emerald-300 transition-colors"
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
      <footer className="py-24 border-t border-zinc-900 bg-[#0c0c0e]/50 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-4">{t.footer.tagline}</h2>
          <p className="text-zinc-500 text-sm mb-10">volmax.core@gmail.com</p>

          <div className="flex justify-center flex-wrap gap-8 mb-8 text-sm font-semibold">
            <a href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors underline">{t.footer.backLink}</a>
            <a href="https://github.com/VolMax-Studio" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/ivan-nestorov-274157371" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">LinkedIn</a>
          </div>

          <p className="text-zinc-600 text-xs font-mono">&copy; 2026 VolMax Studio Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
