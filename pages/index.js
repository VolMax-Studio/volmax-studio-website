import React, { useState } from 'react';
import Head from 'next/head';

const translations = {
  en: {
    nav: {
      services: "Services",
      audit: "Battery ML Audit",
      method: "Method (P10)",
      proof: "Proof",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "Making public claims independently verifiable.",
      subtitle: "Independent verification for energy & battery claims — ML models, vendor datasheets, and public market telemetry. We don't build the model and don't operate the asset; we check whether the evidence supports the claim.",
      desc: "",
      moto: "Because trust should be verifiable.",
      btnMethod: "See the method (P10)",
      btnAudit: "Request an audit"
    },
    problem: {
      title: "Most battery ML models are graded by the team that built them.",
      subtitle: "That is a conflict of interest.",
      desc1: "It is why a model reporting 98% accuracy in the lab can collapse on a cell it has never seen — the result was leakage, an inflated metric, or a curated benchmark, not prediction.",
      desc2: "Buyers, investors, and insurers can't tell a sound model from a flattering one by reading the vendor's own numbers.",
      conclusion: "VolMax is the neutral check. We don't sell a competing model, so we have no incentive to flatter a number. Independence is the product."
    },
    services: {
      title: "Services",
      subtitle: "We don't build your model — we check whether its numbers survive contact with data they haven't seen. Independent audits designed to catch interpretation artifacts.",
      s1: {
        title: "1 · Battery ML Audit",
        desc: "Independent integrity audit of an SOH/RUL model or a vendor's accuracy claim. We check split integrity (cell-level vs cycle-level), preprocessing leakage, metric honesty (full-set error, no dropped cells), and physical consistency. Deliverable: a reproducible report where every number regenerates from one script."
      },
      s2: {
        title: "2 · Independent SOH / RUL Verification",
        desc: "We reproduce a claimed result on a clean, group-aware split and report the gap between the claimed and the verified number — and trace its cause. The honest number is the one that survives a new cell."
      },
      s3: {
        title: "3 · Power Signal & DSP Verification",
        desc: "Verification of measured-signal pipelines (power quality, vibration, MCSA, PV) against physics and the sensor's real resolution — built on a test-covered signal-processing core."
      },
      s4: {
        title: "4 · Public Telemetry Audit (pre-DD screening)",
        desc: "Independent reconstruction of public market telemetry (ERCOT SCED, AEMO NEMWEB) for a specific asset prior to due diligence: dispatch history, demonstrated vs. nameplate capacity, and SoC reconciliation where semantics allow. Deliverable: a reproducible report with a hash chain and pre-registered rules. Target audience: funds, lenders' advisors, insurers."
      },
      deliverable: "What you receive",
      deliverableDesc: "A reproducible audit report; a plain verdict (where the claim holds, where it breaks, the corrected number); the regeneration script.",
      notGuarantee: "What we do NOT guarantee",
      notGuaranteeDesc: "An accuracy number. We are not selling a model, so we make no \"95%\" promise — that is the vendor claim we exist to test. A verifier who guarantees a flattering result has the same conflict of interest as the vendor. We do not build the model under test, and we list no client outcomes we don't have — the proof is the public work below."
    },
    method: {
      title: "The P10 Verification Method",
      desc: "Every finding is produced by a strict procedure built on four non-negotiables. We apply it to our own work first.",
      n1Title: "Pre-registered, frozen rules",
      n1Desc: "Publicly timestamped before we look at the data.",
      n2Title: "Independent evidence",
      n2Desc: "Primary public sources, with a hash captured upon download.",
      n3Title: "Full reproducibility",
      n3Desc: "Open code and data, DOI-archived for persistence.",
      n4Title: "Public failure registry",
      n4Desc: "Our own errors are dated and listed, never deleted.",
      btnLink: "Read the full method →",
      btnFailures: "View public failure registry →"
    },
    proof: {
      title: "Verified work, not promises.",
      subtitle: "The standard we hold your model to, we applied to our own first. These are public, reproducible, test-covered repositories — the credential that replaces a CV.",
      flagship: "flagship",
      marketTitle: "Market Telemetry Audits (ERCOT · NEM)",
      marketDesc: "Three honest verdicts: verified, not verified, or not determinable from public data — the third is a finding, not a failure.",
      cardAnoleTitle: "Anole (ERCOT, 240 MW/480 MWh)",
      cardAnoleDesc: "Primary frozen-rule verdict: 55.2% pass (Inconsistent); exploratory ≥10 MWh stratification: 81.8% (mean 0.98). Both populations labelled.",
      cardBatCaveTitle: "Bat Cave (ERCOT, 100 MW/100 MWh)",
      cardBatCaveDesc: "Primary frozen-rule verdict: 1.22% (mean 0.6339) across all 245 evaluable events; exploratory ≥10 MWh stratification: 1.71% (mean 0.7703). Both populations reported with labels. Verdict: Not determinable from public data — and that is the finding.",
      cardAemoTitle: "AEMO NEM Fleet Dispatch Audit",
      cardAemoDesc: "16 units evaluated; dispatch conformance, generalization gap, and FCAS auditability finding.",
      p1Title: "Battery_Health_Portfolio",
      p1Desc: "NASA PCoE + Severson/Attia, DOI-archived. Honest findings led by their limits: where early prognosis breaks, where impedance is observable vs predictive, capacity-regeneration isolated from true fade. Includes the worked example where the audit caught its own pipeline overclaiming three times. Every number regenerates from reproduce.py.",
      reposTitle: "Other verified domains",
      p2Title: "Power_Signal_Tools",
      p2Desc: "Test-covered signal library (RMS, THD, DWT, Hilbert). The measurement layer the audits stand on.",
      p3Title: "Transformer_Health",
      p3Desc: "Hierarchical DGA fault diagnosis, with tested boundaries.",
      p4Title: "PV_Anomaly_Detection",
      p4Desc: "PV fault detection on real NREL data + injected benchmarks, honestly framed.",
      p5Title: "Data_Center_Efficiency",
      p5Desc: "The \"PUE Loophole\" audit: how PSU conversion losses mask real facility savings.",
      extraDomains: "(+ Power Quality, NILM, MCSA, CWRU, Grid Frequency, VPP — domain breadth.)",
      btnGithub: "View all on GitHub →"
    },
    about: {
      title: "Ivan Nestorov — founder",
      desc1: "25+ years in power electronics and field electrical work, now applying that hardware intuition to independent verification of energy ML. The combination is the point: a pure data scientist doesn't know why a converter loses efficiency at high frequency; a pure hardware engineer doesn't audit a model's train/test split.",
      desc2: "VolMax stands at the intersection — between the measurement and the claim.",
      quote: "Physics doesn't lie. Sensors don't lie. Everything between is interpretation — and that's where I check."
    },
    hardware: {
      title: "Hardware & embedded R&D",
      desc: "Alongside the verification practice, VolMax runs hardware and edge-ML R&D — embedded signal processing on STM32/ESP32, and a hardware safety-interlock concept (analog-to-logic override, sub-2.5µs actuator-interrupt latency, Serbian IPO priority filed). These inform the measurement side of the audits and are in active development."
    },
    contact: {
      title: "Contact",
      sub: "VolMax Studio Lab d.o.o.",
      details: "Independent energy-ML verification · Serbia · EU/remote engagements",
      email: "volmax.core@gmail.com",
      github: "github.com/VolMax-Studio",
      linkedin: "linkedin.com/in/ivan-nestorov-274157371",
      inquiry: "For audit enquiries, include the model type and dataset if possible."
    }
  },
  sr: {
    nav: {
      services: "Usluge",
      audit: "Battery ML Audit",
      method: "Metod (P10)",
      proof: "Dokazi",
      about: "O nama",
      contact: "Kontakt"
    },
    hero: {
      title: "Učiniti javne tvrdnje nezavisno proverljivim.",
      subtitle: "Nezavisna verifikacija energetskih i baterijskih tvrdnji — ML modeli, tehnički listovi proizvođača i javna tržišna telemetrija. Ne gradimo model i ne upravljamo sredstvom; proveravamo da li dokazi podržavaju tvrdnju.",
      desc: "",
      moto: "Jer bi poverenje trebalo da bude proverljivo.",
      btnMethod: "Pogledaj metod (P10)",
      btnAudit: "Zatraži audit"
    },
    problem: {
      title: "Većinu battery ML modela ocenjuje isti tim koji ih je napravio.",
      subtitle: "To je konflikt interesa.",
      desc1: "Zato model sa „98% tačnosti\" u laboratoriji pada na ćeliji koju nije video — rezultat je bio curenje podataka, naduvana metrika ili kurirani benchmark, ne predikcija.",
      desc2: "Kupci, investitori i osiguravači ne mogu da razlikuju ispravan model od ulepšanog čitajući vendorove sopstvene brojeve.",
      conclusion: "VolMax je nezavisna provera. Ne prodajemo konkurentski model, pa nemamo interes da ulepšamo broj. Nezavisnost je proizvod."
    },
    services: {
      title: "Usluge",
      subtitle: "Ne gradimo vaš model — proveravamo da li njegovi brojevi preživljavaju kontakt sa podacima koje nisu videli. Nezavisni auditi dizajnirani da ulove artefakte interpretacije.",
      s1: {
        title: "1 · Battery ML Audit",
        desc: "Nezavisni audit integriteta SOH/RUL modela ili vendorove tvrdnje o tačnosti: integritet particije (po ćeliji, ne po ciklusu), curenje u preprocessing-u, poštenje metrike (puni test set, bez izbačenih ćelija), fizička konzistentnost. Isporuka: reproducibilan izveštaj gde se svaki broj regeneriše iz skripta."
      },
      s2: {
        title: "2 · Nezavisna SOH / RUL verifikacija",
        desc: "Reprodukujemo tvrđeni rezultat na čistoj particiji po grupama i prijavljujemo razliku između tvrđenog i verifikovanog broja, uz uzrok. Pošten broj je onaj koji preživi novu ćeliju."
      },
      s3: {
        title: "3 · Verifikacija power signala & DSP",
        desc: "Provera pipeline-a merenih signala (power quality, vibracije, MCSA, PV) naspram fizike i stvarne rezolucije senzora, na test-pokrivenom jezgru za procesiranje signala."
      },
      s4: {
        title: "4 · Audit javne telemetrije (pre-DD screening)",
        desc: "Nezavisna rekonstrukcija javne tržišne telemetrije (ERCOT SCED, AEMO NEMWEB) za konkretno sredstvo pre due diligence-a: istorija dispatch-a, demonstrirani naspram nominalnog kapaciteta i SoC rekonsilijacija gde semantika to dozvoljava. Isporuka: reproducibilan izveštaj sa heš lancem i pre-registrovanim pravilima. Ciljna publika: fondovi, savetnici poverilaca, osiguravači."
      },
      deliverable: "Šta isporučujemo",
      deliverableDesc: "Reproducibilan izveštaj; jasan verdikt (gde tvrdnja drži, gde puca, korigovan broj); skript za regeneraciju.",
      notGuarantee: "Šta NE garantujemo",
      notGuaranteeDesc: "Broj tačnosti. Ne prodajemo model, pa ne obećavamo „95%“ — to je vendorova tvrdnja koju testiramo. Verifikator koji garantuje ulepšan rezultat ima isti konflikt interesa kao vendor. Ne gradimo model koji se proverava i ne navodimo klijentske rezultate koje nemamo — dokaz je javni rad ispod."
    },
    method: {
      title: "P10 Verifikacioni Metod",
      desc: "Svaki nalaz nastaje po strogoj proceduri izgrađenoj na četiri nepregovaračka stuba. Primenjujemo ga prvo na sopstveni rad.",
      n1Title: "Pre-registrovana, zamrznuta pravila",
      n1Desc: "Javno timestampovana pre nego što pristupimo podacima.",
      n2Title: "Nezavisni dokazi",
      n2Desc: "Primarni javni izvori, sa hešom zabeleženim pri preuzimanju.",
      n3Title: "Potpuna reproducibilnost",
      n3Desc: "Otvoreni kod i podaci, DOI-arhivirani radi trajnosti.",
      n4Title: "Javni registar grešaka",
      n4Desc: "Naše sopstvene greške su datirane i navedene, nikada obrisane.",
      btnLink: "Ceo metod →",
      btnFailures: "Pogledaj javni registar grešaka →"
    },
    proof: {
      title: "Verifikovan rad, ne obećanja.",
      subtitle: "Standard po kom proveravamo vaš model primenili smo prvo na svoj. Javni, reproducibilni, test-pokriveni repozitorijumi — kredencijal koji zamenjuje diplomu.",
      flagship: "glavni projekat",
      marketTitle: "Auditi tržišne telemetrije (ERCOT · NEM)",
      marketDesc: "Tri poštena verdikta: verifikovano, nije verifikovano, ili nije odredivo iz javnih podataka — treće je nalaz, a ne neuspeh.",
      cardAnoleTitle: "Anole (ERCOT, 240 MW/480 MWh)",
      cardAnoleDesc: "Primarni verdikt po zamrznutom pravilu: 55.2% prolaznosti (Nekonsistentno); eksplorativna stratifikacija ≥10 MWh: 81.8% (srednja vrednost 0.98). Obe populacije etiketirane.",
      cardBatCaveTitle: "Bat Cave (ERCOT, 100 MW/100 MWh)",
      cardBatCaveDesc: "Primarni frozen-rule verdikt: 1.22% (srednja vrednost 0.6339) preko svih 245 evaluabilnih događaja; eksplorativna ≥10 MWh stratifikacija: 1.71% (srednja vrednost 0.7703). Obe populacije su navedene sa etiketama. Verdikt: Nije odredivo iz javnih podataka — i to je nalaz.",
      cardAemoTitle: "AEMO NEM Fleet Dispatch Audit",
      cardAemoDesc: "Evaluacija 16 jedinica; odstupanje u dispatch-u, jaz u generalizaciji i FCAS mogućnost audita.",
      p1Title: "Battery_Health_Portfolio",
      p1Desc: "NASA PCoE + Severson/Attia, DOI-arhiviran. Pošteni nalazi vođeni svojim granicama: gde rana prognoza puca, gde je impedansa osmotriva a gde prediktivna, regeneracija kapaciteta izolovana od pravog opadanja. Sadrži worked example gde je audit uhvatio sopstveni pipeline tri puta. Svaki broj se regeneriše iz reproduce.py.",
      reposTitle: "Ostali verifikovani domeni",
      p2Title: "Power_Signal_Tools",
      p2Desc: "Test-pokrivena biblioteka za procesiranje signala (RMS, THD, DWT, Hilbert). Domenski sloj na kome leže auditi.",
      p3Title: "Transformer_Health",
      p3Desc: "Hijerarhijska DGA dijagnostika kvarova na transformatorima, sa testiranim granicama.",
      p4Title: "PV_Anomaly_Detection",
      p4Desc: "Detekcija anomalija i kvarova na solarnim panelima na realnim NREL podacima + injektovani benchmarkovi, pošteno uokvirena.",
      p5Title: "Data_Center_Efficiency",
      p5Desc: "Audit „PUE rupe u zakonu“: kako gubici konverzije napajanja maskiraju stvarne uštede data centra.",
      extraDomains: "(+ Power Quality, NILM, MCSA, CWRU, Grid Frequency, VPP — širina domena.)",
      btnGithub: "Pogledaj sve na GitHub-u →"
    },
    about: {
      title: "Ivan Nestorov — osnivač",
      desc1: "Preko 25 godina u energetskoj elektronici i terenskom radu, sada primenjuje tu hardversku intuiciju na nezavisnu verifikaciju energy ML-a. Kombinacija je poenta: čist data scientist ne zna zašto konverter gubi efikasnost na visokoj frekvenciji; čist hardveraš ne auditira train/test particiju modela.",
      desc2: "VolMax stoji na preseku — između merenja i tvrdnje.",
      quote: "Fizika ne laže. Senzori ne lažu. Sve između je interpretacija — i tu proveravam."
    },
    hardware: {
      title: "Hardver & embedded R&D",
      desc: "Uz verifikacionu praksu, VolMax razvija hardver i edge-ML: embedded procesiranje signala na STM32/ESP32 i koncept hardverskog safety-interlock-a (analog-to-logic override, latencija prekida aktuatora ispod 2.5µs, prijavljen prioritet Serbian IPO). Ovo informiše mernu stranu audita i u aktivnom je razvoju."
    },
    contact: {
      title: "Kontakt",
      sub: "VolMax Studio Lab d.o.o.",
      details: "Nezavisna energy-ML verifikacija · Srbija · EU/remote angažmani",
      email: "volmax.core@gmail.com",
      github: "github.com/VolMax-Studio",
      linkedin: "linkedin.com/in/ivan-nestorov-274157371",
      inquiry: "Za upite za audit, navedite tip modela i skup podataka ako je moguće."
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#080808] text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black">
      <Head>
        <title>VolMax Studio Lab — Independent Energy ML Verification</title>
        <meta name="description" content="Independent verification for energy & battery claims — ML models, vendor datasheets, and public market telemetry. Because trust should be verifiable." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / LinkedIn Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.volmax-studio.rs/" />
        <meta property="og:title" content="VolMax Studio Lab — Independent Energy ML Verification" />
        <meta property="og:description" content="Independent verification for energy & battery claims — ML models, vendor datasheets, and public market telemetry. Because trust should be verifiable." />
        <meta property="og:site_name" content="VolMax Studio Lab" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VolMax Studio Lab — Independent Energy ML Verification" />
        <meta name="twitter:description" content="Independent verification for energy & battery claims — ML models, vendor datasheets, and public market telemetry. Because trust should be verifiable." />
      </Head>

      {/* Decorative Blur Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#080808]/85 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-mono font-bold text-lg tracking-tight">
            <span className="text-emerald-500">&lt;</span>
            <span>VolMax</span>
            <span className="text-zinc-500">StudioLab</span>
            <span className="text-emerald-500">/&gt;</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-zinc-100 transition-colors">{t.nav.services}</a>
            <a href="/audit" className="hover:text-zinc-100 transition-colors">{t.nav.audit}</a>
            <a href="#method" className="hover:text-zinc-100 transition-colors">{t.nav.method}</a>
            <a href="#proof" className="hover:text-zinc-100 transition-colors">{t.nav.proof}</a>
            <a href="#about" className="hover:text-zinc-100 transition-colors">{t.nav.about}</a>
            <a href="#contact" className="hover:text-zinc-100 transition-colors">{t.nav.contact}</a>
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

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide uppercase bg-zinc-100 text-black rounded-lg hover:bg-zinc-200 transition-colors"
            >
              {t.hero.btnAudit}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 max-w-5xl mx-auto px-6">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Independent Energy-ML Verification
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-gradient">
            {t.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 font-medium mb-6 max-w-3xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          {t.hero.moto && (
            <p className="text-sm md:text-base text-zinc-400 italic mb-10 max-w-2xl leading-relaxed">
              {t.hero.moto}
            </p>
          )}

          {t.hero.desc && (
            <p className="text-base md:text-lg text-zinc-500 mb-10 max-w-2xl leading-relaxed">
              {t.hero.desc}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#method"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/15"
            >
              {t.hero.btnMethod}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#121214] border border-zinc-800 text-zinc-300 font-semibold rounded-xl hover:bg-zinc-900 transition-all"
            >
              {t.hero.btnAudit}
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[#0c0c0e] border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">The Structural Flaw</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {t.problem.title}
            </h2>
            <div className="h-1 w-20 bg-cyan-500 mb-8 rounded-full" />
            <p className="text-zinc-300 mb-4 text-lg leading-relaxed">{t.problem.desc1}</p>
            <p className="text-zinc-400 mb-6 leading-relaxed">{t.problem.desc2}</p>
          </div>
          <div className="md:col-span-5 bg-gradient-to-br from-[#121214] to-[#0c0c0e] border border-zinc-800/80 rounded-2xl p-8 glow-cyan relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-2">{t.problem.subtitle}</h3>
            <p className="text-zinc-200 font-medium leading-relaxed">
              {t.problem.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.services.title}</h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Service Card 1 */}
          <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between hover:border-zinc-700 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 font-mono font-bold group-hover:bg-emerald-500 group-hover:text-black transition-all">
                01
              </div>
              <h3 className="text-xl font-bold mb-4">{t.services.s1.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{t.services.s1.desc}</p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between hover:border-zinc-700 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 font-mono font-bold group-hover:bg-cyan-500 group-hover:text-black transition-all">
                02
              </div>
              <h3 className="text-xl font-bold mb-4">{t.services.s2.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{t.services.s2.desc}</p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between hover:border-zinc-700 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 font-mono font-bold group-hover:bg-purple-500 group-hover:text-black transition-all">
                03
              </div>
              <h3 className="text-xl font-bold mb-4">{t.services.s3.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{t.services.s3.desc}</p>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between hover:border-zinc-700 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 font-mono font-bold group-hover:bg-blue-500 group-hover:text-black transition-all">
                04
              </div>
              <h3 className="text-xl font-bold mb-4">{t.services.s4.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{t.services.s4.desc}</p>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-2 gap-8 border-t border-zinc-900 pt-16">
          <div className="bg-[#0c0c0e] border border-zinc-900 rounded-2xl p-8">
            <h4 className="flex items-center gap-2 text-emerald-400 font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {t.services.deliverable}
            </h4>
            <p className="text-zinc-300 text-sm leading-relaxed">{t.services.deliverableDesc}</p>
          </div>
          <div className="bg-[#0c0c0e] border border-zinc-900 rounded-2xl p-8">
            <h4 className="flex items-center gap-2 text-zinc-500 font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-zinc-500" />
              {t.services.notGuarantee}
            </h4>
            <p className="text-zinc-400 text-sm leading-relaxed">{t.services.notGuaranteeDesc}</p>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="method" className="py-24 bg-[#0c0c0e] border-y border-zinc-900 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[100px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4">Operational Doctrine</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            {t.method.title}
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            {t.method.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left mb-12 max-w-3xl mx-auto font-sans">
            <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
              <div className="font-mono text-emerald-400 text-xs mb-2">01</div>
              <h4 className="font-bold mb-2 text-sm text-zinc-100">{t.method.n1Title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{t.method.n1Desc}</p>
            </div>
            <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
              <div className="font-mono text-emerald-400 text-xs mb-2">02</div>
              <h4 className="font-bold mb-2 text-sm text-zinc-100">{t.method.n2Title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{t.method.n2Desc}</p>
            </div>
            <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
              <div className="font-mono text-emerald-400 text-xs mb-2">03</div>
              <h4 className="font-bold mb-2 text-sm text-zinc-100">{t.method.n3Title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{t.method.n3Desc}</p>
            </div>
            <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
              <div className="font-mono text-emerald-400 text-xs mb-2">04</div>
              <h4 className="font-bold mb-2 text-sm text-zinc-100">{t.method.n4Title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{t.method.n4Desc}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/VolMax-Studio/P10-Verification-Method"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-500/30 text-emerald-400 hover:text-black hover:bg-emerald-500 hover:border-emerald-500 rounded-xl transition-all font-semibold"
            >
              {t.method.btnLink}
            </a>
            <a
              href="/failures"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#121214] border border-zinc-800 text-zinc-500 hover:text-zinc-300 rounded-xl transition-all font-mono text-sm font-semibold"
            >
              {t.method.btnFailures}
            </a>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section id="proof" className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">Verification Evidence</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.proof.title}</h2>
          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">{t.proof.subtitle}</p>
        </div>

        {/* Market Telemetry Audits Block */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-zinc-300 font-mono uppercase tracking-wider">{t.proof.marketTitle}</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Card 1: Anole */}
            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group">
              <div>
                <h4 className="font-mono font-bold text-base mb-3 text-zinc-100">{t.proof.cardAnoleTitle}</h4>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">{t.proof.cardAnoleDesc}</p>
              </div>
              <div className="flex flex-col gap-2 font-mono text-xs border-t border-zinc-900 pt-4 mt-auto">
                <a href="https://github.com/VolMax-Studio/volmax-ercot-anole-audit" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  github.com/.../volmax-ercot-anole-audit
                </a>
                <a href="https://doi.org/10.5281/zenodo.21304135" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300">
                  doi: 10.5281/zenodo.21304135
                </a>
              </div>
            </div>

            {/* Card 2: Bat Cave */}
            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group">
              <div>
                <h4 className="font-mono font-bold text-base mb-3 text-zinc-100">{t.proof.cardBatCaveTitle}</h4>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">{t.proof.cardBatCaveDesc}</p>
              </div>
              <div className="flex flex-col gap-2 font-mono text-xs border-t border-zinc-900 pt-4 mt-auto">
                <a href="https://github.com/VolMax-Studio/volmax-ercot-batcave-audit" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  github.com/.../volmax-ercot-batcave-audit
                </a>
                <a href="https://doi.org/10.5281/zenodo.21416615" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300">
                  doi: 10.5281/zenodo.21416615 (v1.0.4)
                </a>
              </div>
            </div>

            {/* Card 3: AEMO */}
            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group">
              <div>
                <h4 className="font-mono font-bold text-base mb-3 text-zinc-100">{t.proof.cardAemoTitle}</h4>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">{t.proof.cardAemoDesc}</p>
              </div>
              <div className="flex flex-col gap-2 font-mono text-xs border-t border-zinc-900 pt-4 mt-auto">
                <a href="https://github.com/VolMax-Studio/volmax-aemo-dispatch-audit" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  github.com/.../volmax-aemo-dispatch-audit
                </a>
                <a href="https://doi.org/10.5281/zenodo.21190094" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300">
                  doi: 10.5281/zenodo.21190094
                </a>
              </div>
            </div>
          </div>
          <p className="text-zinc-500 text-xs font-mono italic">{t.proof.marketDesc}</p>
        </div>

        {/* Flagship Card */}
        <div className="bg-gradient-to-br from-[#121214] to-[#0c0c0e] border border-zinc-800 rounded-3xl p-8 md:p-12 mb-12 glow-green relative overflow-hidden">
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-500 text-black text-xs font-mono font-bold uppercase tracking-wider rounded-bl-2xl">
            {t.proof.flagship}
          </div>
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-mono font-bold mb-4">{t.proof.p1Title}</h3>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8">
              {t.proof.p1Desc}
            </p>
            <a
              href="https://github.com/VolMax-Studio/Battery_Health_Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#080808] border border-zinc-800 text-zinc-300 rounded-xl hover:bg-zinc-900 transition-all text-sm font-semibold"
            >
              github.com/VolMax-Studio/Battery_Health_Portfolio
            </a>
          </div>
        </div>

        {/* Other Repositories */}
        <div className="border-t border-zinc-900 pt-16">
          <h3 className="text-xl font-bold mb-8 text-zinc-400 font-mono uppercase tracking-wider">{t.proof.reposTitle}</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-all">
              <h4 className="font-mono font-bold mb-2 text-zinc-200">{t.proof.p2Title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{t.proof.p2Desc}</p>
            </div>
            <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-all">
              <h4 className="font-mono font-bold mb-2 text-zinc-200">{t.proof.p3Title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{t.proof.p3Desc}</p>
            </div>
            <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-all">
              <h4 className="font-mono font-bold mb-2 text-zinc-200">{t.proof.p4Title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{t.proof.p4Desc}</p>
            </div>
            <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-all">
              <h4 className="font-mono font-bold mb-2 text-zinc-200">{t.proof.p5Title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{t.proof.p5Desc}</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-zinc-500 text-xs mb-6 font-mono">{t.proof.extraDomains}</p>
            <a
              href="https://github.com/VolMax-Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#121214] border border-zinc-800 text-zinc-300 rounded-xl hover:bg-zinc-900 transition-all font-semibold"
            >
              {t.proof.btnGithub}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0c0c0e] border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">Leadership</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.about.title}</h2>
            <div className="space-y-6 text-zinc-300 text-base md:text-lg leading-relaxed">
              <p>{t.about.desc1}</p>
              <p className="text-zinc-400">{t.about.desc2}</p>
            </div>
          </div>
          <div className="md:col-span-5 bg-gradient-to-br from-[#121214] to-[#080808] border border-zinc-800 rounded-2xl p-8 relative">
            <span className="text-5xl text-emerald-500/20 font-serif absolute top-4 left-4">“</span>
            <p className="text-zinc-200 italic font-serif text-lg leading-relaxed relative z-10 pl-6 pt-4 mb-4">
              {t.about.quote}
            </p>
            <div className="h-0.5 w-12 bg-emerald-500 ml-6" />
          </div>
        </div>
      </section>

      {/* Hardware / R&D (Small Bottom Section) */}
      <section className="py-20 max-w-4xl mx-auto px-6 border-b border-zinc-900">
        <div className="bg-[#121214]/40 border border-zinc-900 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-800/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-lg font-mono font-bold uppercase tracking-wider text-zinc-400 mb-4">{t.hardware.title}</h3>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            {t.hardware.desc}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-6 text-center">
        <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4">Get In Touch</div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.contact.title}</h2>
        <p className="text-zinc-400 text-lg mb-10">{t.contact.sub}</p>

        <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-8 mb-10 max-w-xl mx-auto space-y-4 font-mono text-sm">
          <p className="text-zinc-300">{t.contact.details}</p>
          <div className="h-px bg-zinc-800 my-4" />
          <p className="text-emerald-400 font-bold">Email: {t.contact.email}</p>
          <p className="text-zinc-500">
            GitHub: <a href="https://github.com/VolMax-Studio" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 underline">{t.contact.github}</a>
          </p>
          <p className="text-zinc-500">
            LinkedIn: <a href={`https://${t.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 underline">{t.contact.linkedin}</a>
          </p>
        </div>

        <p className="text-zinc-500 text-xs font-mono">{t.contact.inquiry}</p>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900 text-center text-xs text-zinc-600 font-mono flex flex-col sm:flex-row justify-center items-center gap-4">
        <span>&copy; {new Date().getFullYear()} VolMax Studio Lab. All rights reserved.</span>
        <span className="hidden sm:inline text-zinc-800">|</span>
        <a href="/failures" className="hover:text-zinc-400 transition-colors underline">
          {lang === 'en' ? 'Public Failure Registry' : 'Javni registar grešaka'}
        </a>
      </footer>
    </div>
  );
}
