import React, { useState } from 'react';
import Head from 'next/head';

const translations = {
  en: {
    nav: {
      research: "Research",
      services: "Services",
      evidence: "Evidence",
      method: "P10",
      about: "About",
      contact: "Contact"
    },
    hero: {
      badge: "Independent Verification of Technical & Scientific Claims",
      title: "Independent Verification of Technical & Scientific Claims",
      subtitle: "Frozen rules. Reproducible evidence. Bounded conclusions.",
      desc: "VolMax Studio Lab builds verification methods and applies them to real technical claims — from energy-system telemetry and battery performance to computational research and formal mathematics. We separate what the evidence demonstrates from what it does not.",
      moto: "We verify the chain from claim to conclusion — and make the stopping point explicit.",
      btnMethod: "Explore the research",
      btnAudit: "Request verification"
    },
    problem: {
      eyebrow: "The Structural Gap",
      title: "Technical and scientific claims are usually evaluated by the team that produced them.",
      subtitle: "That is a structural conflict of interest.",
      desc1: "In battery and scientific ML, strong reported metrics can fail to transfer when evaluation allows leakage, correlated train/test samples, protocol overlap, or benchmark-specific tuning. In formal mathematics, a machine-checked proof can be valid and still not mean what the abstract claims, if the formal statement doesn't faithfully capture the original claim.",
      desc2: "Buyers, investors, insurers, and readers of a paper can't always tell a sound result from a well-presented one by reading the producer's own numbers.",
      conclusion: "VolMax is the neutral check. We don't sell a competing model and don't co-author the claim under test, so we have no incentive to flatter a number. Independence is the product."
    },
    work: {
      eyebrow: "What We Do",
      title: "Two tracks, one methodology.",
      subtitle: "Research builds the verification tools. Applied work uses them on real claims. Both run under the same frozen-rule discipline.",
      researchTitle: "Verification Research",
      research: [
        { name: "P10 Core", desc: "Certificate-carrying verification protocol with explicit trust boundaries — frozen milestones, Lean-checked." },
        { name: "P10 Underdetermination Profile", desc: "A frozen binding for claims that the evidence genuinely cannot settle.", status: "Release candidate (v0.1.1)" },
        { name: "Representation Lifting S1", desc: "Preregistered Lean 4 case study on whether a representation-first proof strategy transfers across blind theorem families.", status: "Preregistered — blind evaluation pending" },
        { name: "Formal mathematics (Lean 4)", desc: "Machine-checked artifacts that separate derivability from interpretation." },
        { name: "Scientific reproduction", desc: "Independent reconstruction of bounded claims from published computational work and public datasets." }
      ],
      appliedTitle: "Applied Verification",
      applied: [
        { name: "Battery & energy-ML claims", desc: "SOH/RUL model audits against held-out data and physical law." },
        { name: "Public market telemetry audits", desc: "ERCOT, AEMO, Elexon/BMRS dispatch and capacity claims, reconstructed from primary sources." },
        { name: "Power-signal & DSP verification", desc: "Measured-signal pipelines checked against physics and real sensor resolution." },
        { name: "Technical due-diligence support", desc: "Pre-DD screening for funds, lenders' advisors, and insurers." }
      ]
    },
    evidence: {
      eyebrow: "Verification Evidence",
      title: "Public work, inspectable evidence.",
      subtitle: "The standard we hold every claim to — including our own — is public and inspectable. These are public, version-pinned, reproducible repositories: the credential that replaces a CV.",
      flagshipsTitle: "Flagship artifacts",
      flagships: [
        {
          title: "P10 Underdetermination Profile",
          status: "Release candidate",
          desc: "A frozen protocol for when two witness worlds are compatible with the same closed evidence and produce different values for the same claim — v0.1.1, Lean-checked witness kernel.",
          url: "https://github.com/VolMax-Studio/p10-underdetermination-profile"
        },
        {
          title: "Representation Lifting S1",
          status: "Preregistered — blind evaluation pending",
          desc: "Formal case study testing whether a representation-first formalization strategy discovers reusable structure on blind theorem families.",
          url: "https://github.com/VolMax-Studio/representation-lifting-s1"
        },
        {
          title: "Primitive Composition (Square Content, S1)",
          status: "Machine-checked",
          desc: "Lean 4 result on primitive Pythagorean triples: literal integer divisibility, no smuggled parity or positivity assumptions.",
          url: "https://github.com/VolMax-Studio/primitive-composition-square-content-s1"
        },
        {
          title: "ERCOT Contrast — Anole vs. Bat Cave",
          status: "Applied / telemetry",
          desc: "The same frozen protocol applied to two BESS assets returns two different outcomes — one bounded by SCED limits, one not resolvable from public telemetry alone.",
          url: "https://github.com/VolMax-Studio"
        }
      ],
      marketTitle: "Market Telemetry Audits (ERCOT · NEM)",
      marketDesc: "Verdicts are reported exactly as the frozen protocol renders them — not compressed into a single headline number.",
      cardAnoleTitle: "Anole (ERCOT, 240 MW/480 MWh)",
      cardAnoleDesc: "F1 power & F2 energy: Demonstrated at SCED limits. F3 SoC consistency: Inconsistent under the strict 80% rule (55.2% pass, 330 events); rises to 81.8% in an exploratory, non-pre-registered filter on major events (≥10 MWh). F4 SoC field interpretation: Deferred pending ERCOT column definitions.",
      cardBatCaveTitle: "Bat Cave (ERCOT, 100 MW/100 MWh)",
      cardBatCaveDesc: "F1 power: Bounded (peak 72.61 MW under SCED, HSL confirms 100 MW model capacity). F2 energy: Not Verified. F3 SoC consistency: Inconsistent (1.2% pass, 245 events, mean ratio 0.63). F4 SoC field interpretation: Deferred. Each finding is reported separately — not collapsed into one verdict.",
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
    method: {
      title: "The P10 Verification Method",
      desc: "Every finding is produced by a strict procedure built on four non-negotiables. We apply it to our own work first.",
      chain: ["Claim", "Frozen rules", "Evidence", "Execution", "Bounded verdict", "Receipt"],
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
    trust: {
      eyebrow: "Trust Boundaries",
      title: "What our evidence does not claim.",
      subtitle: "This is the differentiator most verification work leaves implicit. We state it directly.",
      items: [
        { term: "Formal proof ≠ semantic truth", desc: "A Lean proof shows a theorem follows from stated axioms. It does not show the formal statement faithfully captures the original claim." },
        { term: "Hash ≠ correctness", desc: "A SHA-256 hash fixes which bytes we analyzed. It says nothing about whether the analysis of those bytes is right." },
        { term: "Public telemetry ≠ ground truth", desc: "Public market data lets us reconstruct dispatch behavior. It is not a substitute for an asset's own physical instrumentation." },
        { term: "Reproduction ≠ validation of the surrounding theory", desc: "Reproducing a published result's numbers confirms the computation. It does not confirm the theory that motivated it." }
      ]
    },
    services: {
      title: "Applied Verification — Engagements",
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
      notGuaranteeDesc: "An accuracy number. We are not selling a model, so we make no \"95%\" promise — that is the vendor claim we exist to test. A verifier who guarantees a flattering result has the same conflict of interest as the vendor. We do not build the model under test, and we list no client outcomes we don't have — the proof is the public work above."
    },
    about: {
      title: "Ivan Nestorov — founder",
      desc1: "25+ years in power electronics and field electrical work, now applying that hardware intuition to independent verification — of energy ML, and increasingly of formal and computational claims. The combination is the point: a pure data scientist doesn't know why a converter loses efficiency at high frequency; a pure hardware engineer doesn't audit a model's train/test split; and neither, on their own, questions whether a formal statement still means what the original claim meant.",
      desc2: "VolMax stands at the intersection — between the measurement and the claim.",
      quote: "A measurement is not a conclusion. The chain between them has to be inspectable."
    },
    hardware: {
      title: "Hardware & embedded R&D",
      desc: "Alongside the verification practice, VolMax runs hardware and edge-ML R&D — embedded signal processing on STM32/ESP32, and a hardware safety-interlock concept (analog-to-logic override, sub-2.5µs actuator-interrupt latency, Serbian IPO priority filed). These inform the measurement side of the audits and are in active development."
    },
    contact: {
      title: "Contact",
      sub: "VolMax Studio Lab d.o.o.",
      details: "Independent verification of technical & scientific claims · Serbia · EU/remote engagements",
      email: "volmax.core@gmail.com",
      github: "github.com/VolMax-Studio",
      linkedin: "linkedin.com/in/ivan-nestorov-274157371",
      inquiry: "For an enquiry, include the claim type and the relevant dataset, model, or artifact if possible."
    }
  },
  sr: {
    nav: {
      research: "Istraživanje",
      services: "Usluge",
      evidence: "Dokazi",
      method: "P10",
      about: "O nama",
      contact: "Kontakt"
    },
    hero: {
      badge: "Nezavisna verifikacija tehničkih i naučnih tvrdnji",
      title: "Nezavisna verifikacija tehničkih i naučnih tvrdnji",
      subtitle: "Zamrznuta pravila. Reproducibilni dokazi. Ograničeni zaključci.",
      desc: "VolMax Studio Lab razvija metode verifikacije i primenjuje ih na stvarne tehničke tvrdnje — od energetske telemetrije i performansi baterija do računarskih istraživanja i formalne matematike. Razdvajamo ono što dokazi pokazuju od onoga što ne pokazuju.",
      moto: "Verifikujemo lanac od tvrdnje do zaključka — i eksplicitno navodimo gde se taj lanac zaustavlja.",
      btnMethod: "Istraži istraživanje",
      btnAudit: "Zatraži verifikaciju"
    },
    problem: {
      eyebrow: "Strukturni jaz",
      title: "Tehničke i naučne tvrdnje obično ocenjuje isti tim koji ih je proizveo.",
      subtitle: "To je strukturni konflikt interesa.",
      desc1: "U battery i naučnom ML-u, snažno prijavljene metrike mogu da ne prežive prenos kada evaluacija dozvoljava curenje podataka, korelisane trening/test uzorke, preklapanje protokola ili podešavanje specifično za benchmark. U formalnoj matematici, mašinski proveren dokaz može biti validan, a da ipak ne znači ono što tvrdi apstrakt — ako formalna izjava verno ne odražava originalnu tvrdnju.",
      desc2: "Kupci, investitori, osiguravači i čitaoci rada ne mogu uvek da razlikuju čvrst rezultat od dobro predstavljenog čitajući brojeve samog proizvođača.",
      conclusion: "VolMax je nezavisna provera. Ne prodajemo konkurentski model i nismo koautori tvrdnje koja se testira, pa nemamo interes da ulepšamo broj. Nezavisnost je proizvod."
    },
    work: {
      eyebrow: "Šta radimo",
      title: "Dve trake, jedna metodologija.",
      subtitle: "Istraživanje gradi alate za verifikaciju. Primenjeni rad ih koristi na stvarnim tvrdnjama. Oboje funkcioniše pod istom disciplinom zamrznutih pravila.",
      researchTitle: "Verifikaciono istraživanje",
      research: [
        { name: "P10 Core", desc: "Verifikacioni protokol sa sertifikatima i eksplicitnim granicama poverenja — zamrznuti milestone-ovi, proveren u Lean-u." },
        { name: "P10 Underdetermination Profile", desc: "Zamrznuti binding za tvrdnje koje dokazi zaista ne mogu da reše.", status: "Release candidate (v0.1.1)" },
        { name: "Representation Lifting S1", desc: "Pre-registrovana Lean 4 studija slučaja o tome da li se representation-first strategija dokazivanja prenosi na slepe (blind) porodice teorema.", status: "Pre-registrovano — blind evaluacija u toku pripreme" },
        { name: "Formalna matematika (Lean 4)", desc: "Mašinski provereni artefakti koji razdvajaju izvodivost od interpretacije." },
        { name: "Naučna reprodukcija", desc: "Nezavisna rekonstrukcija ograničenih tvrdnji iz objavljenog računarskog rada i javnih skupova podataka." }
      ],
      appliedTitle: "Primenjena verifikacija",
      applied: [
        { name: "Battery & energy-ML tvrdnje", desc: "Audit SOH/RUL modela naspram skrivenih podataka i fizičkih zakona." },
        { name: "Auditi javne tržišne telemetrije", desc: "ERCOT, AEMO, Elexon/BMRS tvrdnje o dispatch-u i kapacitetu, rekonstruisane iz primarnih izvora." },
        { name: "Verifikacija power signala & DSP", desc: "Pipeline-ovi merenih signala provereni naspram fizike i stvarne rezolucije senzora." },
        { name: "Podrška tehničkom due diligence-u", desc: "Pre-DD screening za fondove, savetnike poverilaca i osiguravače." }
      ]
    },
    evidence: {
      eyebrow: "Dokazi verifikacije",
      title: "Javni rad, proverljivi dokazi.",
      subtitle: "Standard po kom proveravamo svaku tvrdnju — uključujući sopstvenu — je javan i proverljiv. Ovo su javni, verzionisani, reproducibilni repozitorijumi — kredencijal koji zamenjuje diplomu.",
      flagshipsTitle: "Vodeći artefakti",
      flagships: [
        {
          title: "P10 Underdetermination Profile",
          status: "Release candidate",
          desc: "Zamrznuti protokol za slučaj kada su dva sveta-svedoka kompatibilna sa istim zatvorenim dokazima, a daju različite vrednosti za istu tvrdnju — v0.1.1, Lean-proveren witness kernel.",
          url: "https://github.com/VolMax-Studio/p10-underdetermination-profile"
        },
        {
          title: "Representation Lifting S1",
          status: "Pre-registrovano — blind evaluacija u pripremi",
          desc: "Formalna studija slučaja koja testira da li representation-first strategija formalizacije otkriva ponovo upotrebljivu strukturu na slepim porodicama teorema.",
          url: "https://github.com/VolMax-Studio/representation-lifting-s1"
        },
        {
          title: "Primitive Composition (Square Content, S1)",
          status: "Mašinski provereno",
          desc: "Lean 4 rezultat o primitivnim Pitagorinim trojkama: doslovna celobrojna deljivost, bez prokrijumčarenih pretpostavki o parnosti ili pozitivnosti.",
          url: "https://github.com/VolMax-Studio/primitive-composition-square-content-s1"
        },
        {
          title: "ERCOT kontrast — Anole naspram Bat Cave",
          status: "Primenjeno / telemetrija",
          desc: "Isti zamrznuti protokol primenjen na dva BESS sredstva daje dva različita ishoda — jedan ograničen SCED limitima, drugi nerešiv samo iz javne telemetrije.",
          url: "https://github.com/VolMax-Studio"
        }
      ],
      marketTitle: "Auditi tržišne telemetrije (ERCOT · NEM)",
      marketDesc: "Verdikti su prijavljeni tačno onako kako ih zamrznuti protokol generiše — ne sabijeni u jedan naslovni broj.",
      cardAnoleTitle: "Anole (ERCOT, 240 MW/480 MWh)",
      cardAnoleDesc: "F1 snaga & F2 energija: Demonstrirano na SCED limitima. F3 konzistentnost SoC: Nekonsistentno pod strogim pravilom od 80% (55.2% prolaznosti, 330 događaja); raste na 81.8% u eksplorativnom, ne-pre-registrovanom filteru velikih događaja (≥10 MWh). F4 interpretacija SoC polja: Odloženo do zvaničnih ERCOT definicija kolona.",
      cardBatCaveTitle: "Bat Cave (ERCOT, 100 MW/100 MWh)",
      cardBatCaveDesc: "F1 snaga: Ograničeno (vrh 72.61 MW pod SCED-om, HSL potvrđuje 100 MW model kapaciteta). F2 energija: Nije verifikovano. F3 konzistentnost SoC: Nekonsistentno (1.2% prolaznosti, 245 događaja, srednji odnos 0.63). F4 interpretacija SoC polja: Odloženo. Svaki nalaz je prijavljen posebno — nije sabijen u jedan verdikt.",
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
    method: {
      title: "P10 Verifikacioni Metod",
      desc: "Svaki nalaz nastaje po strogoj proceduri izgrađenoj na četiri nepregovaračka stuba. Primenjujemo ga prvo na sopstveni rad.",
      chain: ["Tvrdnja", "Zamrznuta pravila", "Dokazi", "Izvršenje", "Ograničen verdikt", "Receipt"],
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
    trust: {
      eyebrow: "Granice poverenja",
      title: "Šta naši dokazi ne tvrde.",
      subtitle: "Ovo je diferencijator koji većina verifikacionog rada ostavlja neizrečenim. Mi ga navodimo direktno.",
      items: [
        { term: "Formalni dokaz ≠ semantička istina", desc: "Lean dokaz pokazuje da teorema sledi iz navedenih aksioma. Ne pokazuje da formalna izjava verno odražava originalnu tvrdnju." },
        { term: "Heš ≠ ispravnost", desc: "SHA-256 heš fiksira koje smo bajtove analizirali. Ne govori ništa o tome da li je analiza tih bajtova ispravna." },
        { term: "Javna telemetrija ≠ osnovna istina", desc: "Javni tržišni podaci nam omogućavaju da rekonstruišemo ponašanje dispatch-a. To nije zamena za sopstvenu fizičku instrumentaciju sredstva." },
        { term: "Reprodukcija ≠ validacija okolne teorije", desc: "Reprodukovanje brojeva objavljenog rezultata potvrđuje računicu. Ne potvrđuje teoriju koja ju je motivisala." }
      ]
    },
    services: {
      title: "Primenjena verifikacija — Angažmani",
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
      notGuaranteeDesc: "Broj tačnosti. Ne prodajemo model, pa ne obećavamo „95%“ — to je vendorova tvrdnja koju testiramo. Verifikator koji garantuje ulepšan rezultat ima isti konflikt interesa kao vendor. Ne gradimo model koji se proverava i ne navodimo klijentske rezultate koje nemamo — dokaz je javni rad iznad."
    },
    about: {
      title: "Ivan Nestorov — osnivač",
      desc1: "Preko 25 godina u energetskoj elektronici i terenskom radu, sada primenjuje tu hardversku intuiciju na nezavisnu verifikaciju — energy ML-a, a sve više i formalnih i računarskih tvrdnji. Kombinacija je poenta: čist data scientist ne zna zašto konverter gubi efikasnost na visokoj frekvenciji; čist hardveraš ne auditira train/test particiju modela; a nijedan od njih, sam, ne preispituje da li formalna izjava i dalje znači ono što je originalna tvrdnja značila.",
      desc2: "VolMax stoji na preseku — između merenja i tvrdnje.",
      quote: "Merenje nije zaključak. Lanac između njih mora biti proverljiv."
    },
    hardware: {
      title: "Hardver & embedded R&D",
      desc: "Uz verifikacionu praksu, VolMax razvija hardver i edge-ML: embedded procesiranje signala na STM32/ESP32 i koncept hardverskog safety-interlock-a (analog-to-logic override, latencija prekida aktuatora ispod 2.5µs, prijavljen prioritet Serbian IPO). Ovo informiše mernu stranu audita i u aktivnom je razvoju."
    },
    contact: {
      title: "Kontakt",
      sub: "VolMax Studio Lab d.o.o.",
      details: "Nezavisna verifikacija tehničkih i naučnih tvrdnji · Srbija · EU/remote angažmani",
      email: "volmax.core@gmail.com",
      github: "github.com/VolMax-Studio",
      linkedin: "linkedin.com/in/ivan-nestorov-274157371",
      inquiry: "Za upit, navedite tip tvrdnje i relevantni skup podataka, model ili artefakt ako je moguće."
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-200 selection:text-slate-900">
      <Head>
        <title>VolMax Studio Lab — Independent Verification of Technical & Scientific Claims</title>
        <meta name="description" content="Independent verification for technical and scientific claims — energy & battery ML, public market telemetry, formal mathematics, and scientific reproduction. Frozen rules. Reproducible evidence. Bounded conclusions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-minimal.jpg" />

        {/* Open Graph / LinkedIn Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.volmax-studio.rs/" />
        <meta property="og:title" content="VolMax Studio Lab — Independent Verification of Technical & Scientific Claims" />
        <meta property="og:description" content="Frozen rules. Reproducible evidence. Bounded conclusions. Independent verification for energy-ML, public market telemetry, and formal mathematics." />
        <meta property="og:site_name" content="VolMax Studio Lab" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VolMax Studio Lab — Independent Verification of Technical & Scientific Claims" />
        <meta name="twitter:description" content="Frozen rules. Reproducible evidence. Bounded conclusions." />
      </Head>

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-slate-900">
            <img src="/logo-3d-light.png" alt="" className="w-8 h-8 rounded-md object-cover" />
            <span>VolMax</span>
            <span className="text-slate-400 font-medium hidden sm:inline">Studio Lab</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#work" className="hover:text-slate-900 transition-colors">{t.nav.research}</a>
            <a href="#services" className="hover:text-slate-900 transition-colors">{t.nav.services}</a>
            <a href="#evidence" className="hover:text-slate-900 transition-colors">{t.nav.evidence}</a>
            <a href="#method" className="hover:text-slate-900 transition-colors">{t.nav.method}</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">{t.nav.about}</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">{t.nav.contact}</a>
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

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide uppercase bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition-colors"
            >
              {t.hero.btnAudit}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 max-w-5xl mx-auto px-6 overflow-hidden">
        <div className="absolute top-10 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="text-center md:text-left relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
            {t.hero.badge}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 text-slate-900">
            {t.hero.subtitle}
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 font-medium mb-6 max-w-3xl leading-relaxed">
            {t.hero.desc}
          </p>

          {t.hero.moto && (
            <p className="text-sm md:text-base text-slate-500 italic mb-10 max-w-2xl leading-relaxed">
              {t.hero.moto}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-teal-700 text-white font-semibold rounded-xl hover:bg-teal-600 transition-all shadow-lg shadow-teal-700/15"
            >
              {t.hero.btnMethod}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all"
            >
              {t.hero.btnAudit}
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="text-teal-700 font-mono text-xs uppercase tracking-widest mb-3">{t.problem.eyebrow}</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">
              {t.problem.title}
            </h2>
            <div className="h-1 w-20 bg-teal-600 mb-8 rounded-full" />
            <p className="text-slate-700 mb-4 text-lg leading-relaxed">{t.problem.desc1}</p>
            <p className="text-slate-500 mb-6 leading-relaxed">{t.problem.desc2}</p>
          </div>
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
            <h3 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">{t.problem.subtitle}</h3>
            <p className="text-slate-800 font-medium leading-relaxed">
              {t.problem.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* What We Do — Verification Research / Applied Verification */}
      <section id="work" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-teal-700 font-mono text-xs uppercase tracking-widest mb-3">{t.work.eyebrow}</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">{t.work.title}</h2>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">{t.work.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Verification Research column */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              {t.work.researchTitle}
            </h3>
            <ul className="space-y-5">
              {t.work.research.map((item, idx) => (
                <li key={idx} className="border-b border-slate-100 last:border-b-0 pb-5 last:pb-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-semibold text-slate-800 text-sm">{item.name}</span>
                    {item.status && (
                      <span className="font-mono text-[10px] uppercase tracking-wide px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        {item.status}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Applied Verification column */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              {t.work.appliedTitle}
            </h3>
            <ul className="space-y-5">
              {t.work.applied.map((item, idx) => (
                <li key={idx} className="border-b border-slate-100 last:border-b-0 pb-5 last:pb-0">
                  <div className="font-semibold text-slate-800 text-sm mb-1">{item.name}</div>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Evidence Section */}
      <section id="evidence" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-teal-700 font-mono text-xs uppercase tracking-widest mb-3">{t.evidence.eyebrow}</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">{t.evidence.title}</h2>
            <p className="text-slate-500 text-lg max-w-3xl leading-relaxed">{t.evidence.subtitle}</p>
          </div>

          {/* Flagship artifacts */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 text-slate-700 font-mono uppercase tracking-wider text-sm">{t.evidence.flagshipsTitle}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {t.evidence.flagships.map((f, idx) => (
                <a
                  key={idx}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-300 hover:shadow-sm transition-all"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h4 className="font-bold text-base text-slate-900">{f.title}</h4>
                      <span className="font-mono text-[10px] uppercase tracking-wide px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                        {f.status}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Market Telemetry Audits Block */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 text-slate-700 font-mono uppercase tracking-wider text-sm">{t.evidence.marketTitle}</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Card 1: Anole */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 transition-all">
                <div>
                  <h4 className="font-mono font-bold text-base mb-3 text-slate-900">{t.evidence.cardAnoleTitle}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">{t.evidence.cardAnoleDesc}</p>
                </div>
                <div className="flex flex-col gap-2 font-mono text-xs border-t border-slate-100 pt-4 mt-auto">
                  <a href="https://github.com/VolMax-Studio/volmax-ercot-anole-audit" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                    github.com/.../volmax-ercot-anole-audit
                  </a>
                  <a href="https://doi.org/10.5281/zenodo.21304135" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600">
                    doi: 10.5281/zenodo.21304135
                  </a>
                </div>
              </div>

              {/* Card 2: Bat Cave */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 transition-all">
                <div>
                  <h4 className="font-mono font-bold text-base mb-3 text-slate-900">{t.evidence.cardBatCaveTitle}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">{t.evidence.cardBatCaveDesc}</p>
                </div>
                <div className="flex flex-col gap-2 font-mono text-xs border-t border-slate-100 pt-4 mt-auto">
                  <a href="https://github.com/VolMax-Studio/volmax-ercot-batcave-audit" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                    github.com/.../volmax-ercot-batcave-audit
                  </a>
                  <a href="https://doi.org/10.5281/zenodo.21401795" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600">
                    doi: 10.5281/zenodo.21401795
                  </a>
                </div>
              </div>

              {/* Card 3: AEMO */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 transition-all">
                <div>
                  <h4 className="font-mono font-bold text-base mb-3 text-slate-900">{t.evidence.cardAemoTitle}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">{t.evidence.cardAemoDesc}</p>
                </div>
                <div className="flex flex-col gap-2 font-mono text-xs border-t border-slate-100 pt-4 mt-auto">
                  <a href="https://github.com/VolMax-Studio/volmax-aemo-dispatch-audit" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                    github.com/.../volmax-aemo-dispatch-audit
                  </a>
                  <a href="https://doi.org/10.5281/zenodo.21190094" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600">
                    doi: 10.5281/zenodo.21190094
                  </a>
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-xs font-mono italic">{t.evidence.marketDesc}</p>
          </div>

          {/* Flagship Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 mb-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-teal-700 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-bl-2xl">
              flagship
            </div>
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-mono font-bold mb-4 text-slate-900">{t.evidence.p1Title}</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                {t.evidence.p1Desc}
              </p>
              <a
                href="https://github.com/VolMax-Studio/Battery_Health_Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-100 transition-all text-sm font-semibold"
              >
                github.com/VolMax-Studio/Battery_Health_Portfolio
              </a>
            </div>
          </div>

          {/* Other Repositories */}
          <div className="border-t border-slate-200 pt-16">
            <h3 className="text-xl font-bold mb-8 text-slate-600 font-mono uppercase tracking-wider text-sm">{t.evidence.reposTitle}</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-all">
                <h4 className="font-mono font-bold mb-2 text-slate-800">{t.evidence.p2Title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{t.evidence.p2Desc}</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-all">
                <h4 className="font-mono font-bold mb-2 text-slate-800">{t.evidence.p3Title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{t.evidence.p3Desc}</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-all">
                <h4 className="font-mono font-bold mb-2 text-slate-800">{t.evidence.p4Title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{t.evidence.p4Desc}</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-all">
                <h4 className="font-mono font-bold mb-2 text-slate-800">{t.evidence.p5Title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{t.evidence.p5Desc}</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-slate-400 text-xs mb-6 font-mono">{t.evidence.extraDomains}</p>
              <a
                href="https://github.com/VolMax-Studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-all font-semibold"
              >
                {t.evidence.btnGithub}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="method" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-teal-700 font-mono text-xs uppercase tracking-widest mb-4">Operational Doctrine</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">
            {t.method.title}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            {t.method.desc}
          </p>

          {/* Claim chain */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-mono text-xs">
            {t.method.chain.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                  {step}
                </span>
                {idx < t.method.chain.length - 1 && <span className="text-slate-300">→</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 text-left mb-12 max-w-3xl mx-auto font-sans">
            <div className="bg-white border border-slate-200 p-6 rounded-xl">
              <div className="font-mono text-teal-700 text-xs mb-2">01</div>
              <h4 className="font-bold mb-2 text-sm text-slate-900">{t.method.n1Title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{t.method.n1Desc}</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-xl">
              <div className="font-mono text-teal-700 text-xs mb-2">02</div>
              <h4 className="font-bold mb-2 text-sm text-slate-900">{t.method.n2Title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{t.method.n2Desc}</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-xl">
              <div className="font-mono text-teal-700 text-xs mb-2">03</div>
              <h4 className="font-bold mb-2 text-sm text-slate-900">{t.method.n3Title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{t.method.n3Desc}</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-xl">
              <div className="font-mono text-teal-700 text-xs mb-2">04</div>
              <h4 className="font-bold mb-2 text-sm text-slate-900">{t.method.n4Title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{t.method.n4Desc}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/VolMax-Studio/P10-Verification-Method"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-teal-600 text-teal-700 hover:text-white hover:bg-teal-700 rounded-xl transition-all font-semibold"
            >
              {t.method.btnLink}
            </a>
            <a
              href="/failures"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-300 text-slate-500 hover:text-slate-700 rounded-xl transition-all font-mono text-sm font-semibold"
            >
              {t.method.btnFailures}
            </a>
          </div>
        </div>
      </section>

      {/* Trust Boundaries Section */}
      <section className="py-24 bg-slate-900 text-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-teal-400 font-mono text-xs uppercase tracking-widest mb-3">{t.trust.eyebrow}</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.trust.title}</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">{t.trust.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {t.trust.items.map((item, idx) => (
              <div key={idx} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
                <h3 className="font-mono font-bold text-teal-400 text-sm mb-3">{item.term}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Engagements Section */}
      <section id="services" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">{t.services.title}</h2>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Service Card 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-300 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 mb-6 font-mono font-bold group-hover:bg-teal-700 group-hover:text-white transition-all">
                01
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{t.services.s1.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{t.services.s1.desc}</p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-300 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 mb-6 font-mono font-bold group-hover:bg-cyan-700 group-hover:text-white transition-all">
                02
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{t.services.s2.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{t.services.s2.desc}</p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-300 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700 mb-6 font-mono font-bold group-hover:bg-purple-700 group-hover:text-white transition-all">
                03
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{t.services.s3.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{t.services.s3.desc}</p>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-300 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 mb-6 font-mono font-bold group-hover:bg-blue-700 group-hover:text-white transition-all">
                04
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{t.services.s4.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{t.services.s4.desc}</p>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-2 gap-8 border-t border-slate-200 pt-16">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h4 className="flex items-center gap-2 text-teal-700 font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              {t.services.deliverable}
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">{t.services.deliverableDesc}</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h4 className="flex items-center gap-2 text-slate-500 font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              {t.services.notGuarantee}
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">{t.services.notGuaranteeDesc}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="text-teal-700 font-mono text-xs uppercase tracking-widest mb-3">Leadership</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">{t.about.title}</h2>
            <div className="flex items-start gap-6 mb-6">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-600 to-slate-700 flex items-center justify-center shrink-0 shadow-md">
                <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold font-mono z-0">IN</span>
                <img
                  src="/ivan-nestorov.png"
                  alt="Ivan Nestorov"
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>{t.about.desc1}</p>
              </div>
            </div>
            <p className="text-slate-500">{t.about.desc2}</p>
          </div>
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-2xl p-8 relative shadow-sm">
            <span className="text-5xl text-teal-600/20 font-serif absolute top-4 left-4">&ldquo;</span>
            <p className="text-slate-800 italic font-serif text-lg leading-relaxed relative z-10 pl-6 pt-4 mb-4">
              {t.about.quote}
            </p>
            <div className="h-0.5 w-12 bg-teal-600 ml-6" />
          </div>
        </div>
      </section>

      {/* Hardware / R&D (Small Bottom Section) */}
      <section className="py-20 max-w-4xl mx-auto px-6 border-b border-slate-200">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 relative overflow-hidden">
          <h3 className="text-lg font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">{t.hardware.title}</h3>
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
            {t.hardware.desc}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-6 text-center">
        <div className="text-teal-700 font-mono text-xs uppercase tracking-widest mb-4">Get In Touch</div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">{t.contact.title}</h2>
        <p className="text-slate-500 text-lg mb-10">{t.contact.sub}</p>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-10 max-w-xl mx-auto space-y-4 font-mono text-sm shadow-sm">
          <p className="text-slate-700">{t.contact.details}</p>
          <div className="h-px bg-slate-100 my-4" />
          <p className="text-teal-700 font-bold">Email: {t.contact.email}</p>
          <p className="text-slate-400">
            GitHub: <a href="https://github.com/VolMax-Studio" target="_blank" rel="noopener noreferrer" className="hover:text-slate-700 underline">{t.contact.github}</a>
          </p>
          <p className="text-slate-400">
            LinkedIn: <a href={`https://${t.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-slate-700 underline">{t.contact.linkedin}</a>
          </p>
        </div>

        <p className="text-slate-400 text-xs font-mono">{t.contact.inquiry}</p>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 text-center text-xs text-slate-400 font-mono flex flex-col sm:flex-row justify-center items-center gap-4">
        <span>&copy; {new Date().getFullYear()} VolMax Studio Lab. All rights reserved.</span>
        <span className="hidden sm:inline text-slate-300">|</span>
        <a href="/failures" className="hover:text-slate-600 transition-colors underline">
          {lang === 'en' ? 'Public Failure Registry' : 'Javni registar grešaka'}
        </a>
      </footer>
    </div>
  );
}
