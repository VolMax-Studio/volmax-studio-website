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
      title: "Battery ML Audit",
      subtitle: "Independent verification of battery SOH & RUL models.",
      desc: "I don't build your model — I audit it against held-out data and physical law, with every number regenerating from a script you keep."
    },
    problem: {
      title: "The Problem This Solves",
      desc1: "The party that builds a battery SOH/RUL model usually also reports its accuracy. That is a structural conflict of interest — and it is why \"98% accuracy\" claims so often collapse on a cell the model has never seen. You have to trust a vendor's number, but you have no neutral way to check it.",
      desc2: "This audit is the neutral check. I did not build your model, I am not selling you a competing one, and I have no incentive to flatter the result. The only product is an honest verdict on whether the claim survives contact with data it has never seen."
    },
    checks: {
      title: "What I Check — Seven Things, Each with a Concrete Output",
      c1: {
        title: "1 · Split Integrity",
        desc: "Was the model validated cell-wise, or did consecutive cycles from one cell leak across train and test? Cycle-wise splits inflate accuracy because the model recognizes the cell instead of predicting.",
        output: "→ Output: Leakage present (yes/no) + corrected accuracy under a group-aware split"
      },
      c2: {
        title: "2 · Preprocessing-Leakage Trace",
        desc: "Was any scaler or normalization fit on the full dataset before the split, leaking test-cell statistics upstream into training?",
        output: "→ Output: Every point where a learned transform crosses the split boundary"
      },
      c3: {
        title: "3 · Metric Honesty",
        desc: "Is the reported error the full-set error, or was a hard cell quietly dropped to match a benchmark?",
        output: "→ Output: Full-set error vs. reported error, with any excluded cells named"
      },
      c4: {
        title: "4 · Physical Consistency",
        desc: "Does the model respect physics — monotonic aging, no impossible capacity \"recovery\", internal resistance within real bounds — or does it quietly violate conservation?",
        output: "→ Output: List of physical-law violations, if any"
      },
      c5: {
        title: "5 · Concurrence vs. Prediction",
        desc: "Does a claimed \"predictor\" actually forecast degradation early enough to act on, or does it only track degradation that is already happening?",
        output: "→ Output: Whether the feature is genuinely predictive or merely concurrent"
      },
      c6: {
        title: "6 · Uncertainty Quantification",
        desc: "Does the model know how much it doesn't know — calibrated confidence intervals — or does it deliver a single bare number that hides its own error?",
        output: "→ Output: Whether uncertainty is present, and whether it is actually calibrated"
      },
      c7: {
        title: "7 · Reproducibility Package",
        desc: "Every number I report regenerates from a single script I hand you. If I can't regenerate it, I don't claim it.",
        output: "→ Output: The regeneration path — you can re-run the entire audit yourself"
      }
    },
    verdicts: {
      title: "The Verdict",
      v1: {
        title: "Supported",
        desc: "Survives held-out data and physical law; the number is the honest number."
      },
      v2: {
        title: "Artifact",
        desc: "The effect is leakage, inflation, or curation; the corrected number differs, and I show by how much and why."
      },
      v3: {
        title: "Unfalsifiable",
        desc: "The claim cannot be tested as written; I specify what would make it testable."
      }
    },
    guarantees: {
      title: "What I Guarantee",
      g1: "Every number in the report regenerates from source. No hand-copied metrics.",
      g2: "I state the method, the split, and the limitations of my own analysis.",
      g3: "I report negative results plainly. If your model is sound, I say so. If the gap is in my own check, I say that too.",
      notTitle: "What I Deliberately Do Not",
      ng1: "An accuracy number. I am not selling a model, so I make no \"95%\" promise — that is the vendor claim this audit exists to test.",
      ng2: "That your model will pass. The value is the honest verdict, not a flattering one."
    },
    credentials: {
      title: "The Credential",
      desc: "I hold my own work to the standard I sell. The public, DOI-archived portfolio is itself a worked example of every check above — applied to my own analyses first, catching my own errors before anyone else could:",
      p1: {
        title: "EKF Dynamic Sampling Audit",
        desc: "Reproduced a 99.65% sample-reduction claim, confirmed it on quasi-static profile, and showed it does not transfer to dynamic load (24.84% SOC error)."
      },
      p2: {
        title: "VolMax HALO Optimizer",
        desc: "Gradient-free local adaptation of frozen INT4 networks with O(1)-in-depth memory scaling and rigorous boundary failure analysis."
      },
      p3: {
        title: "Battery Health Portfolio",
        desc: "Li-ion battery prognostic predictability boundaries, impedance observability study and early predictions on NASA PCoE dataset."
      }
    },
    audience: {
      title: "Who This Is For",
      desc: "BESS operators, second-life firms, battery startups, and BESS investors / independent engineers who must trust a vendor's SOH/RUL number but have no neutral party to check it. The EU Battery Regulation's digital battery passport (mandatory 2027) is creating a wave of SOH documentation that will need exactly this kind of independent check."
    },
    cta: {
      title: "Ready for a Neutral Check?",
      subtitle: "Physics doesn't lie. Sensors don't lie. The audit stands at the gap between the measurement and the claim, and checks the rest.",
      btn: "Book a Battery ML Audit"
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
      title: "Battery ML Audit",
      subtitle: "Nezavisna verifikacija battery SOH & RUL modela.",
      desc: "Ne gradim vaš model — auditiram ga naspram skrivenih podataka i fizičkih zakona, uz isporuku skripta za automatsku regeneraciju svih rezultata."
    },
    problem: {
      title: "Problem koji rešavamo",
      desc1: "Strana koja razvija battery SOH/RUL model obično sama izveštava o njegovoj tačnosti. To predstavlja strukturni konflikt interesa — i razlog je zašto tvrdnje o „98% tačnosti\" propadaju na ćelijama koje model nikada ranije nije video. Prinuđeni ste da verujete brojevima vendora, a nemate neutralan način da ih proverite.",
      desc2: "Ovaj audit je neutralna provera. Nisam razvio vaš model, ne prodajem konkurentski model i nemam interes da ulepšavam rezultate. Jedini proizvod je pošten verdikt o tome da li tvrdnja preživljava kontakt sa novim podacima."
    },
    checks: {
      title: "Šta proveravam — Sedam provera, svaka sa jasnim ishodom",
      c1: {
        title: "1 · Integritet particije (Split)",
        desc: "Da li je model validiran po ćelijama, ili su uzastopni ciklusi iste ćelije procureli kroz trening i test set? Particionisanje po ciklusima veštački naduvava tačnost jer model prepoznaje ćeliju umesto da predviđa.",
        output: "→ Ishod: Prisustvo curenja (da/ne) + korigovana tačnost pod group-aware particijom"
      },
      c2: {
        title: "2 · Curenje u pred-procesiranju (Preprocessing Leakage)",
        desc: "Da li je skaler ili normalizacija prilagođena celom setu pre podele podataka, čime su statistike test-ćelije procurele u trening?",
        output: "→ Ishod: Mapiranje svih tačaka gde transformacija prelazi granicu particije"
      },
      c3: {
        title: "3 · Poštenje metrike",
        desc: "Da li je prijavljena greška za ceo set, ili su teške ćelije tiho uklonjene da bi se postigao bolji benchmark?",
        output: "→ Ishod: Greška celog seta vs. prijavljena greška, sa spiskom svih izostavljenih ćelija"
      },
      c4: {
        title: "4 · Fizička konzistentnost",
        desc: "Da li model poštuje zakone fizike — monotonost starenja, odsustvo nemoguće regeneracije kapaciteta, realne granice unutrašnjeg otpora — ili tiho krši zakone održanja?",
        output: "→ Ishod: Spisak registrovanih kršenja fizičkih zakona"
      },
      c5: {
        title: "5 · Konkurentnost vs. Predikcija",
        desc: "Da li tvrđeni „prediktor\" stvarno prognozira degradaciju dovoljno rano da se može reagovati, ili samo prati degradaciju koja se već dogodila?",
        output: "→ Ishod: Verdikt da li je svojstvo zaista prediktivno ili samo konkurentno"
      },
      c6: {
        title: "6 · Kvantifikacija nesigurnosti",
        desc: "Da li model zna šta ne zna — kalibrisani intervali poverenja — ili isporučuje samo jedan ogoljen broj koji krije sopstvenu grešku?",
        output: "→ Ishod: Prisustvo nesigurnosti i provera njene kalibracije"
      },
      c7: {
        title: "7 · Paket za reprodukciju",
        desc: "Svaki broj koji navedem u izveštaju se automatski regeneriše iz jednog skripta. Ako se ne može reproducirati, ne tvrdim ga.",
        output: "→ Ishod: Putanja za regeneraciju — možete sami ponovo pokrenuti ceo audit"
      }
    },
    verdicts: {
      title: "Verdikt",
      v1: {
        title: "Supported (Podržano)",
        desc: "Preživljava test na novim podacima i fizičke zakone; broj je pošten."
      },
      v2: {
        title: "Artifact (Artefakt)",
        desc: "Rezultat je posledica curenja ili kuracije; korigovani broj se razlikuje, uz objašnjenje zašto."
      },
      v3: {
        title: "Unfalsifiable (Neoborivo)",
        desc: "Tvrdnja se ne može testirati u ovom obliku; navodim šta je potrebno da postane testabilna."
      }
    },
    guarantees: {
      title: "Šta garantujem",
      g1: "Svaki broj u izveštaju se regeneriše iz izvora. Nema ručnog prepisivanja metrika.",
      g2: "Navodim metod, podelu podataka i ograničenja sopstvene analize.",
      g3: "Negativne rezultate saopštavam direktno. Ako je model ispravan, kažem to. Ako je problem u mom auditu, navodim i to.",
      notTitle: "Šta svesno NE garantujem",
      ng1: "Unapred obećanu tačnost. Ne prodajem model, pa ne obećavam „95%“ — to je tvrdnja vendora koju moj audit proverava.",
      ng2: "Da će vaš model proći. Vrednost je u poštenom verdiktu, a ne u laskavom."
    },
    credentials: {
      title: "Kredencijali",
      desc: "Svoj rad držim standarda koje prodajem. Javni, DOI-arhivirani portfolio je primer svake od gornjih provera primenjenih prvo na moj rad, hvatajući sopstvene greške pre nego što ih iko drugi primeti:",
      p1: {
        title: "EKF Dynamic Sampling Audit",
        desc: "Reprodukovana tvrdnja o smanjenju uzorkovanja za 99.65% na kvazi-statičkom profilu, uz dokaz da se ne prenosi na dinamičko opterećenje (24.84% SOC greške)."
      },
      p2: {
        title: "VolMax HALO Optimizer",
        desc: "Lokalna adaptacija zamrznutih INT4 mreža bez gradijenata sa O(1) memorijskim skaliranjem i rigoroznom analizom otkaza na granicama."
      },
      p3: {
        title: "Battery Health Portfolio",
        desc: "Granice predvidivosti prognoze Li-ion baterija, studija osmotrivosti impedanse i rane predikcije na NASA PCoE setu podataka."
      }
    },
    audience: {
      title: "Kome je namenjeno",
      desc: "BESS operatorima, firmama za second-life baterije, battery startupovima i investitorima koji moraju da veruju vendorovom SOH/RUL broju, a nemaju neutralnu stranu za proveru. EU regulativa o baterijama (digitalni pasoš baterije, obavezan od 2027) stvara talas dokumentacije koji će zahtevati upravo ovakve nezavisne provere."
    },
    cta: {
      title: "Spremni za neutralnu proveru?",
      subtitle: "Fizika ne laže. Senzori ne laže. Audit stoji na preseku između merenja i tvrdnje, i proverava ostatak.",
      btn: "Zakaži Battery ML Audit"
    }
  }
};

export default function Audit() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#080808] text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black">
      <Head>
        <title>Battery ML Audit — Independent SOH & RUL Verification</title>
        <meta name="description" content="Independent verification of battery SOH & RUL models against physical law and raw held-out data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Decorative Blur Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

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
            <a href="/audit" className="text-zinc-100 transition-colors">{t.hero.title}</a>
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

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide uppercase bg-zinc-100 text-black rounded-lg hover:bg-zinc-200 transition-colors"
            >
              {t.cta.btn}
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-gradient">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 font-medium mb-6 leading-relaxed max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            {t.hero.desc}
          </p>
        </header>

        {/* Problem Box */}
        <section className="bg-gradient-to-br from-[#121214] to-[#0c0c0e] border border-zinc-800 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          <h2 className="text-2xl font-bold text-emerald-400 mb-6">{t.problem.title}</h2>
          <p className="text-zinc-300 mb-4 text-base md:text-lg leading-relaxed">{t.problem.desc1}</p>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">{t.problem.desc2}</p>
        </section>

        {/* Seven Checks Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">{t.checks.title}</h2>
          <div className="space-y-6">
            
            {/* Check 1 */}
            <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 md:p-8 flex gap-6 items-start hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono font-bold shrink-0">
                01
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-zinc-100">{t.checks.c1.title}</h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{t.checks.c1.desc}</p>
                <div className="font-mono text-xs text-emerald-400 bg-[#080808]/60 px-3 py-1.5 rounded-lg border border-zinc-800 inline-block">
                  {t.checks.c1.output}
                </div>
              </div>
            </div>

            {/* Check 2 */}
            <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 md:p-8 flex gap-6 items-start hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono font-bold shrink-0">
                02
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-zinc-100">{t.checks.c2.title}</h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{t.checks.c2.desc}</p>
                <div className="font-mono text-xs text-emerald-400 bg-[#080808]/60 px-3 py-1.5 rounded-lg border border-zinc-800 inline-block">
                  {t.checks.c2.output}
                </div>
              </div>
            </div>

            {/* Check 3 */}
            <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 md:p-8 flex gap-6 items-start hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono font-bold shrink-0">
                03
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-zinc-100">{t.checks.c3.title}</h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{t.checks.c3.desc}</p>
                <div className="font-mono text-xs text-emerald-400 bg-[#080808]/60 px-3 py-1.5 rounded-lg border border-zinc-800 inline-block">
                  {t.checks.c3.output}
                </div>
              </div>
            </div>

            {/* Check 4 */}
            <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 md:p-8 flex gap-6 items-start hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono font-bold shrink-0">
                04
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-zinc-100">{t.checks.c4.title}</h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{t.checks.c4.desc}</p>
                <div className="font-mono text-xs text-emerald-400 bg-[#080808]/60 px-3 py-1.5 rounded-lg border border-zinc-800 inline-block">
                  {t.checks.c4.output}
                </div>
              </div>
            </div>

            {/* Check 5 */}
            <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 md:p-8 flex gap-6 items-start hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono font-bold shrink-0">
                05
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-zinc-100">{t.checks.c5.title}</h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{t.checks.c5.desc}</p>
                <div className="font-mono text-xs text-emerald-400 bg-[#080808]/60 px-3 py-1.5 rounded-lg border border-zinc-800 inline-block">
                  {t.checks.c5.output}
                </div>
              </div>
            </div>

            {/* Check 6 */}
            <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 md:p-8 flex gap-6 items-start hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono font-bold shrink-0">
                06
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-zinc-100">{t.checks.c6.title}</h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{t.checks.c6.desc}</p>
                <div className="font-mono text-xs text-emerald-400 bg-[#080808]/60 px-3 py-1.5 rounded-lg border border-zinc-800 inline-block">
                  {t.checks.c6.output}
                </div>
              </div>
            </div>

            {/* Check 7 */}
            <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 md:p-8 flex gap-6 items-start hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono font-bold shrink-0">
                07
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-zinc-100">{t.checks.c7.title}</h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{t.checks.c7.desc}</p>
                <div className="font-mono text-xs text-emerald-400 bg-[#080808]/60 px-3 py-1.5 rounded-lg border border-zinc-800 inline-block">
                  {t.checks.c7.output}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Verdict Box */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">{t.verdicts.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Verdict 1 */}
            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 border-t-4 border-t-teal-500">
              <h3 className="text-lg font-extrabold uppercase text-teal-400 mb-3">{t.verdicts.v1.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{t.verdicts.v1.desc}</p>
            </div>

            {/* Verdict 2 */}
            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 border-t-4 border-t-amber-500">
              <h3 className="text-lg font-extrabold uppercase text-amber-500 mb-3">{t.verdicts.v2.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{t.verdicts.v2.desc}</p>
            </div>

            {/* Verdict 3 */}
            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 border-t-4 border-t-purple-500">
              <h3 className="text-lg font-extrabold uppercase text-purple-400 mb-3">{t.verdicts.v3.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{t.verdicts.v3.desc}</p>
            </div>

          </div>
        </section>

        {/* Guarantees Box */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#0c0c0e] border border-zinc-900 rounded-2xl p-8">
            <h3 className="flex items-center gap-2 text-emerald-400 font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {t.guarantees.title}
            </h3>
            <ul className="space-y-4 text-zinc-300 text-sm leading-relaxed list-none">
              <li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-emerald-400 before:font-bold">
                {t.guarantees.g1}
              </li>
              <li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-emerald-400 before:font-bold">
                {t.guarantees.g2}
              </li>
              <li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-emerald-400 before:font-bold">
                {t.guarantees.g3}
              </li>
            </ul>
          </div>

          <div className="bg-[#0c0c0e] border border-zinc-900 rounded-2xl p-8">
            <h3 className="flex items-center gap-2 text-zinc-500 font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-zinc-500" />
              {t.guarantees.notTitle}
            </h3>
            <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed list-none">
              <li className="relative pl-6 before:content-['✕'] before:absolute before:left-0 before:text-zinc-600 before:font-bold">
                {t.guarantees.ng1}
              </li>
              <li className="relative pl-6 before:content-['✕'] before:absolute before:left-0 before:text-zinc-600 before:font-bold">
                {t.guarantees.ng2}
              </li>
            </ul>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="bg-[#121214] border border-zinc-800 rounded-2xl p-8 md:p-10 mb-20">
          <h2 className="text-2xl font-bold mb-4">{t.credentials.title}</h2>
          <p className="text-zinc-400 text-base mb-8 leading-relaxed">{t.credentials.desc}</p>
          
          <div className="space-y-4">
            
            <a href="https://github.com/VolMax-Studio/ekf-dynamic-sampling-audit" target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-[#080808]/80 border border-zinc-800 rounded-xl hover:border-emerald-500/40 hover:bg-[#0c0c0e] transition-all">
              <div>
                <h4 className="font-bold text-zinc-100 mb-1">{t.credentials.p1.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">{t.credentials.p1.desc}</p>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 bg-emerald-950/20 text-emerald-400 border border-emerald-900/30 rounded-md shrink-0 self-start md:self-auto">
                DOI 10.5281/zenodo.21009974
              </span>
            </a>

            <a href="https://github.com/VolMax-Studio/VolMax_HALO_Optimizer" target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-[#080808]/80 border border-zinc-800 rounded-xl hover:border-emerald-500/40 hover:bg-[#0c0c0e] transition-all">
              <div>
                <h4 className="font-bold text-zinc-100 mb-1">{t.credentials.p2.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">{t.credentials.p2.desc}</p>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 bg-emerald-950/20 text-emerald-400 border border-emerald-900/30 rounded-md shrink-0 self-start md:self-auto">
                DOI 10.5281/zenodo.21010289
              </span>
            </a>

            <a href="https://github.com/VolMax-Studio/Battery_Health_Portfolio" target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-[#080808]/80 border border-zinc-800 rounded-xl hover:border-emerald-500/40 hover:bg-[#0c0c0e] transition-all">
              <div>
                <h4 className="font-bold text-zinc-100 mb-1">{t.credentials.p3.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">{t.credentials.p3.desc}</p>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 bg-emerald-950/20 text-emerald-400 border border-emerald-900/30 rounded-md shrink-0 self-start md:self-auto">
                DOI 10.5281/zenodo.20752869
              </span>
            </a>

          </div>
        </section>

        {/* Audience Box */}
        <section className="bg-gradient-to-br from-[#121214] to-[#0c0c0e] border border-zinc-800 rounded-3xl p-8 md:p-10 mb-20 text-center relative overflow-hidden">
          <h2 className="text-2xl font-bold mb-4">{t.audience.title}</h2>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">{t.audience.desc}</p>
        </section>

      </div>

      {/* Footer / Contact */}
      <footer id="contact" className="py-24 border-t border-zinc-900 bg-[#0c0c0e]/50 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.cta.title}</h2>
          <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">{t.cta.subtitle}</p>
          
          <a
            href="mailto:volmax.core@gmail.com?subject=Battery%20ML%20Audit%20Inquiry"
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-black font-bold rounded-full hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/15 mb-12 text-sm uppercase tracking-wide"
          >
            {t.cta.btn}
          </a>

          <div className="flex justify-center gap-8 mb-8 text-sm font-semibold">
            <a href="https://github.com/VolMax-Studio" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">GitHub Profile</a>
            <a href="mailto:volmax.core@gmail.com" className="text-zinc-500 hover:text-zinc-100 transition-colors">Email Contact</a>
          </div>

          <p className="text-zinc-600 text-xs font-mono">&copy; 2026 VolMax Studio Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
