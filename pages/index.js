import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
export default function Home() {
  const [lang, setLang] = useState('sr');

  const translations = {
    sr: {
      nav: {
        home: 'Početna',
        products: 'Proizvodi',
        portfolio: 'Portfolio',
        about: 'O Nama',
        vision: 'Vizija',
        contact: 'Kontakt'
      },
      hero: {
        title1: 'Pametna Rešenja za',
        title2: 'Energetsku Efikasnost',
        subtitle: 'IoT i AI tehnologija za optimizaciju potrošnje električne energije',
        description: 'VolMax Studio Lab razvija napredne NILM (Non-Intrusive Load Monitoring) uređaje i algoritme koji koriste mašinsko učenje za praćenje i optimizaciju potrošnje energije.',
        btnPrimary: 'Otvoreni Portfolio',
        btnSecondary: 'Kontakt'
      },
      products: {
        title: 'Naša IoT Rešenja',
        subtitle: 'Pametni uređaji koji transformišu upravljanje energijom',
        energyMonitor: {
          title: 'P1: EnergyMonitor',
          tagline: 'Non-Intrusive Load Monitoring',
          description: 'AI-powered sistem za praćenje potrošnje energije koji automatski prepoznaje uređaje i optimizuje potrošnju. Cilj: 20-30% smanjenje potrošnje na bazi NILM benchmark studija.',
          tag1: 'AI Analiza',
          tag2: 'Real-Time Podaci',
          tag3: 'Simulacione Analize',
          status: 'Status: Aktivni Razvoj'
        },
        smartGrid: {
          title: 'SmartGrid Monitor',
          tagline: 'VPP-ready arhitektura — priprema za buduće integracije',
          description: 'Monitoring energetske efikasnosti i detekcija anomalija u mreži. Kompatibilno sa ENTSO-E CE FCR/aFRR specifikacijama (simulacija).',
          tag1: 'VPP Ready',
          tag2: 'Grid Monitoring',
          tag3: 'Algoritamski R&D',
          status: 'Status: R&D koncept, zavisi od regulatornog razvoja tržišta'
        },
        p2Agri: {
          title: 'P2: Smart Agriculture',
          tagline: 'Autonomna Kontrola Navodnjavanja',
          description: 'Primena P4 kernela za preciznu kontrolu pumpi i sistema za navodnjavanje. Optimizovano za solarne panele i uštedu vode na udaljenim lokacijama.',
          tag1: 'Solar Ready',
          tag2: 'Pump Control',
          tag3: 'Ušteda Vode',
          status: 'Status: R&D Koncept'
        },
        p4Chip: {
          title: 'P4 Hardware Safety Arbiter',
          tagline: 'Hardverski interlock & Arbitrator',
          description: 'LM339 komparator + 74HC74 SR latch hardverski interlock sa osciloskopski verifikovanom latencijom prekida: 1.02µs ±0.1µs preko 1,000 testova.',
          tag1: 'Latencija 1.02µs',
          tag2: 'Serbian IPO',
          tag3: 'Hardverski Interlock',
          status: 'Status: Prijavljen prioritet (Serbian IPO)'
        }
      },
      portfolio: {
        title: 'Otvoreni Portfolio',
        subtitle: 'Verifikovani i javno dostupni ML & DSP repozitorijumi sa 100% prolaznim testovima',
        repo: 'Repozitorijum',
        desc: 'Opis',
        status: 'Status',
        viewCode: 'Pogledaj Kod',
        repos: {
          pq: '17-class IEC 61000 disturbance classifier, ~78% acc',
          nilm: 'Energy disaggregation on REDD benchmark data',
          battery: 'SoH / RUL / thermal anomaly on NASA PCoE data',
          tools: 'Importable Python library: RMS, THD, FFT, wavelet, z-score',
          leakage: 'WDN leak detection — DWT + RF + sensitivity matrix',
          mcsa: 'MCSA diagnostics for 3-phase induction motor faults: BRB, bearing defects, stator short circuits',
          cwru: 'CWRU bearing defect diagnostics (BPFO, BPFI, BSF, FTF) using Squared Envelope Spectrum',
          grid: 'CE grid frequency dynamics analysis — Swing Equation simulation & EN 50160 compliance',
          pv: 'PV system anomaly detection & MPPT cloud transient tracking using NREL TMY3 data',
          transformer: 'Transformer health assessment: IEC 60076-7 thermal model, Arrhenius aging, and DGA Duval triangle',
          vpp: 'VPP active frequency regulation: primary (FCR) and secondary (AGC) control loops with BESS/PV/FlexLoad dispatch'
        }
      },
      about: {
        title: 'O Projektu',
        subtitle: 'Gde praksa susreće inovaciju',
        founder: 'Ivan Nestorov',
        role: 'Osnivač i Programer',
        exp1: 'Električar sa 20+ godina praktičnog iskustva',
        exp2: 'Web Development (profesionalna obuka)',
        exp3: 'Python & AI istraživanje',
        exp4: 'Smart Home i energetski sistemi',
        quote: 'Kombinujem 20 godina električarskog iskustva sa modernim tehnologijama da rešim realne energetske izazove.',
        research: 'Dodatna Istraživanja',
        researchDesc: 'Istražujemo napredne algoritme procesiranja signala na mikrokontrolerima i prenosne filterske banke. Fokus ostaje na razvoju EnergyMonitor i Hardware Safety Arbiter modula.'
      },
      vision: {
        title: 'Naša Vizija',
        subtitle: 'Put ka održivoj energetskoj budućnosti',
        mission: 'Naša Misija',
        missionText: 'VolMax Studio Lab ima za cilj optimizaciju upravljanja energijom kombinacijom IoT i AI tehnologija.',
        phase1Title: 'Faza 1: Otvoreni Portfolio',
        phase1Time: '2025-2026',
        phase1Desc: 'Razvoj i verifikacija 11 ključnih ML/DSP portfolija (Power Quality, NILM, Battery Health, Signal Tools, Leakage Detection, MCSA, CWRU Bearing, Grid Frequency, PV Anomaly, Transformer Health, VPP Regulation).',
        phase2Title: 'Faza 2: Pilot Projekti',
        phase2Time: '2026',
        phase2Desc: 'Implementacija i testiranje algoritama na realnim STM32G4 platformama.',
        phase3Title: 'Faza 3: Integracija',
        phase3Time: '2026+',
        phase3Desc: 'Integracija edge ML rešenja sa industrijskim partnerima i VPP provajderima.'
      },
      contact: {
        title: 'Kontaktirajte Nas',
        subtitle: 'Hajde da kreiramo pametna rešenja zajedno',
        company: 'VolMax Studio Lab d.o.o.',
        email: 'Email',
        phone: 'Telefon',
        location: 'Lokacija',
        website: 'Web',
        github: 'GitHub',
        status: 'Status',
        focus: 'Fokus',
        statusValue: 'Prijave prioriteta: P1, P4 (Serbian IPO)',
        focusValue: 'IoT Energetska Rešenja'
      },
      footer: {
        copyright: '© 2025-2026 VolMax Studio Lab d.o.o.'
      }
    },
    en: {
      nav: {
        home: 'Home',
        products: 'Products',
        portfolio: 'Portfolio',
        about: 'About',
        vision: 'Vision',
        contact: 'Contact'
      },
      hero: {
        title1: 'Smart Solutions for',
        title2: 'Energy Efficiency',
        subtitle: 'IoT and AI technology for electrical energy consumption optimization',
        description: 'VolMax Studio Lab develops advanced NILM (Non-Intrusive Load Monitoring) devices and algorithms using machine learning to track and optimize energy consumption.',
        btnPrimary: 'Open Portfolio',
        btnSecondary: 'Contact'
      },
      products: {
        title: 'Our IoT Solutions',
        subtitle: 'Smart devices transforming energy management',
        energyMonitor: {
          title: 'P1: EnergyMonitor',
          tagline: 'Non-Intrusive Load Monitoring',
          description: 'AI-powered energy monitoring system that automatically recognizes appliances and optimizes consumption. Target: 20-30% reduction based on NILM benchmark studies.',
          tag1: 'AI Analysis',
          tag2: 'Real-Time Data',
          tag3: 'Simulation Analysis',
          status: 'Status: Active Development'
        },
        smartGrid: {
          title: 'SmartGrid Monitor',
          tagline: 'VPP-ready architecture — preparing for future integrations',
          description: 'Energy efficiency monitoring and grid anomaly detection. Compatible with ENTSO-E CE FCR/aFRR specifications (simulation).',
          tag1: 'VPP Ready',
          tag2: 'Grid Monitoring',
          tag3: 'Algorithmic R&D',
          status: 'Status: R&D concept, subject to regulatory market development'
        },
        p2Agri: {
          title: 'P2: Smart Agriculture',
          tagline: 'Autonomous Irrigation Control',
          description: 'Application of the P4 kernel for precision pump and irrigation control. Optimized for solar panels and water saving at remote locations.',
          tag1: 'Solar Ready',
          tag2: 'Pump Control',
          tag3: 'Water Saving',
          status: 'Status: R&D Concept'
        },
        p4Chip: {
          title: 'P4 Hardware Safety Arbiter',
          tagline: 'Hardware interlock & Arbiter',
          description: 'LM339 comparator + 74HC74 SR latch hardware interlock with oscilloscope-validated interrupt latency: 1.02µs ±0.1µs over 1,000 tests.',
          tag1: '1.02µs Latency',
          tag2: 'Serbian IPO',
          tag3: 'Hardware Interlock',
          status: 'Status: Priority Filed (Serbian IPO)'
        }
      },
      portfolio: {
        title: 'Open Portfolio',
        subtitle: 'Verified and open-source ML & DSP repositories with 100% passing tests',
        repo: 'Repository',
        desc: 'Description',
        status: 'Status',
        viewCode: 'View Code',
        repos: {
          pq: '17-class IEC 61000 disturbance classifier, ~78% acc',
          nilm: 'Energy disaggregation on REDD benchmark data',
          battery: 'SoH / RUL / thermal anomaly on NASA PCoE data',
          tools: 'Importable Python library: RMS, THD, FFT, wavelet, z-score',
          leakage: 'WDN leak detection — DWT + RF + sensitivity matrix',
          mcsa: 'MCSA diagnostics for 3-phase induction motor faults: BRB, bearing defects, stator short circuits',
          cwru: 'CWRU bearing defect diagnostics (BPFO, BPFI, BSF, FTF) using Squared Envelope Spectrum',
          grid: 'CE grid frequency dynamics analysis — Swing Equation simulation & EN 50160 compliance',
          pv: 'PV system anomaly detection & MPPT cloud transient tracking using NREL TMY3 data',
          transformer: 'Transformer health assessment: IEC 60076-7 thermal model, Arrhenius aging, and DGA Duval triangle',
          vpp: 'VPP active frequency regulation: primary (FCR) and secondary (AGC) control loops with BESS/PV/FlexLoad dispatch'
        }
      },
      about: {
        title: 'About the Project',
        subtitle: 'Where practice meets innovation',
        founder: 'Ivan Nestorov',
        role: 'Founder & Developer',
        exp1: 'Electrician with 20+ years hands-on experience',
        exp2: 'Web Development (professional training)',
        exp3: 'Python & AI Research',
        exp4: 'Smart Home and power systems',
        quote: 'Combining 20 years of electrical expertise with modern technology to solve real-world energy challenges.',
        research: 'Additional Research',
        researchDesc: 'We explore advanced signal processing algorithms on microcontrollers and portable filter banks. Focus remains on developing the EnergyMonitor and Hardware Safety Arbiter modules.'
      },
      vision: {
        title: 'Our Vision',
        subtitle: 'Path to sustainable energy future',
        mission: 'Our Mission',
        missionText: 'VolMax Studio Lab aims to optimize energy management by combining IoT and AI technologies.',
        phase1Title: 'Phase 1: Open Portfolio',
        phase1Time: '2025-2026',
        phase1Desc: 'Development and validation of 11 key ML/DSP portfolios (Power Quality, NILM, Battery Health, Signal Tools, Leakage Detection, MCSA, CWRU Bearing, Grid Frequency, PV Anomaly, Transformer Health, VPP Regulation).',
        phase2Title: 'Phase 2: Pilot Projects',
        phase2Time: '2026',
        phase2Desc: 'Algorithm implementation and testing on real STM32G4 platforms.',
        phase3Title: 'Phase 3: Integration',
        phase3Time: '2026+',
        phase3Desc: 'Integration of edge ML solutions with industrial partners and VPP providers.'
      },
      contact: {
        title: 'Contact Us',
        subtitle: "Let's create smart solutions together",
        company: 'VolMax Studio Lab d.o.o.',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        website: 'Website',
        github: 'GitHub',
        status: 'Status',
        focus: 'Focus',
        statusValue: 'Patent filings: P1, P4 (Serbian IPO)',
        focusValue: 'IoT Energy Solutions'
      },
      footer: {
        copyright: '© 2025-2026 VolMax Studio Lab d.o.o.'
      }
    }
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900">
      <Head>
        <title>VolMax Studio Lab - {t.hero.title2}</title>
        <meta name="description" content={t.hero.subtitle} />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              <span className="text-teal-400">Vol</span>Max Studio Lab
            </div>
            <div className="hidden md:flex space-x-8 text-white items-center">
              <a href="#home" className="hover:text-teal-400 transition-colors">{t.nav.home}</a>
              <a href="#products" className="hover:text-teal-400 transition-colors">{t.nav.products}</a>
              <a href="#portfolio" className="hover:text-teal-400 transition-colors">{t.nav.portfolio}</a>
              <a href="#about" className="hover:text-teal-400 transition-colors">{t.nav.about}</a>
              <a href="#vision" className="hover:text-teal-400 transition-colors">{t.nav.vision}</a>
              <a href="#contact" className="hover:text-teal-400 transition-colors">{t.nav.contact}</a>
              
              {/* Language Switcher */}
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => setLang('sr')}
                  className={`px-3 py-1 rounded-md font-semibold text-sm transition-all ${
                    lang === 'sr' 
                      ? 'bg-teal-500 text-white' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  SR
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-md font-semibold text-sm transition-all ${
                    lang === 'en' 
                      ? 'bg-teal-500 text-white' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center py-20">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              {t.hero.title1}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                {t.hero.title2}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#products" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
                {t.hero.btnPrimary}
              </a>
              <a href="#contact" className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg text-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors">
                {t.hero.btnSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

     {/* Products Section */}
      <section id="products" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">{t.products.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16">
            
            {/* EnergyMonitor */}
            <div className="bg-gradient-to-br from-teal-900/50 to-blue-900/50 rounded-2xl p-8 backdrop-blur border border-white/10 hover:border-teal-400/50 transition-all group">
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-teal-500/20">
                <Image 
                  src="/device.png" 
                  alt="EnergyMonitor Device"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{t.products.energyMonitor.title}</h3>
              <p className="text-gray-300 mb-4">{t.products.energyMonitor.tagline}</p>
              <p className="text-gray-400 mb-6">
                {t.products.energyMonitor.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-teal-500/30 text-teal-200 rounded-full text-sm">{t.products.energyMonitor.tag1}</span>
                <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">{t.products.energyMonitor.tag2}</span>
                <span className="px-3 py-1 bg-green-500/30 text-green-200 rounded-full text-sm">{t.products.energyMonitor.tag3}</span>
              </div>
              <div className="text-teal-400 font-semibold">{t.products.energyMonitor.status}</div>
            </div>

            {/* SmartGrid Hub */}
            <div className="bg-gradient-to-br from-blue-900/50 to-teal-900/50 rounded-2xl p-8 backdrop-blur border border-white/10 hover:border-blue-400/50 transition-all group">
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20">
                <Image 
                  src="/grid.png" 
                  alt="SmartGrid Hub"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{t.products.smartGrid.title}</h3>
              <p className="text-gray-300 mb-4">{t.products.smartGrid.tagline}</p>
              <p className="text-gray-400 mb-6">
                {t.products.smartGrid.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">{t.products.smartGrid.tag1}</span>
                <span className="px-3 py-1 bg-teal-500/30 text-teal-200 rounded-full text-sm">{t.products.smartGrid.tag2}</span>
                <span className="px-3 py-1 bg-green-500/30 text-green-200 rounded-full text-sm">{t.products.smartGrid.tag3}</span>
              </div>
              <div className="text-blue-400 font-semibold">{t.products.smartGrid.status}</div>
            </div>

            {/* P2 Smart Agriculture */}
            <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 rounded-2xl p-8 backdrop-blur border border-white/10 hover:border-green-400/50 transition-all group">
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-green-500/20">
                <Image 
                  src="/agri.png" 
                  alt="P2 Smart Agriculture"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{t.products.p2Agri.title}</h3>
              <p className="text-gray-300 mb-4">{t.products.p2Agri.tagline}</p>
              <p className="text-gray-400 mb-6">
                {t.products.p2Agri.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-green-500/30 text-green-200 rounded-full text-sm">{t.products.p2Agri.tag1}</span>
                <span className="px-3 py-1 bg-teal-500/30 text-teal-200 rounded-full text-sm">{t.products.p2Agri.tag2}</span>
                <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">{t.products.p2Agri.tag3}</span>
              </div>
              <div className="text-green-400 font-semibold">{t.products.p2Agri.status}</div>
            </div>

            {/* P4 Neuromorphic Kernel */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 backdrop-blur border border-white/10 hover:border-purple-400/50 transition-all group">
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20">
                <Image 
                  src="/p4chip.png" 
                  alt="P4 Neuromorphic Kernel"
                  fill
                  className="object-contain p-4 transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none"></div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{t.products.p4Chip.title}</h3>
              <p className="text-gray-300 mb-4">{t.products.p4Chip.tagline}</p>
              <p className="text-gray-400 mb-6">
                {t.products.p4Chip.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm">{t.products.p4Chip.tag1}</span>
                <span className="px-3 py-1 bg-pink-500/30 text-pink-200 rounded-full text-sm">{t.products.p4Chip.tag2}</span>
                <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">{t.products.p4Chip.tag3}</span>
              </div>
              <div className="text-amber-400 font-semibold">{t.products.p4Chip.status}</div>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">{t.portfolio.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.portfolio.subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { id: 'pq', title: 'PowerQuality_Classifier_Portfolio', url: 'https://github.com/VolMax-Studio/PowerQuality_Classifier_Portfolio', desc: t.portfolio.repos.pq },
              { id: 'nilm', title: 'NILM_Disaggregation_Portfolio', url: 'https://github.com/VolMax-Studio/NILM_Disaggregation_Portfolio', desc: t.portfolio.repos.nilm },
              { id: 'battery', title: 'Battery_Health_Portfolio', url: 'https://github.com/VolMax-Studio/Battery_Health_Portfolio', desc: t.portfolio.repos.battery },
              { id: 'tools', title: 'Power_Signal_Tools_Portfolio', url: 'https://github.com/VolMax-Studio/Power_Signal_Tools_Portfolio', desc: t.portfolio.repos.tools },
              { id: 'leakage', title: 'Fluid_Leakage_Detection_Portfolio', url: 'https://github.com/VolMax-Studio/Fluid_Leakage_Detection_Portfolio', desc: t.portfolio.repos.leakage },
              { id: 'mcsa', title: 'MCSA_Fault_Diagnostics_Portfolio', url: 'https://github.com/VolMax-Studio/MCSA_Fault_Diagnostics_Portfolio', desc: t.portfolio.repos.mcsa },
              { id: 'cwru', title: 'CWRU_Bearing_Diagnostics', url: 'https://github.com/VolMax-Studio/CWRU_Bearing_Diagnostics', desc: t.portfolio.repos.cwru },
              { id: 'grid', title: 'Grid_Frequency_Analysis', url: 'https://github.com/VolMax-Studio/Grid_Frequency_Analysis', desc: t.portfolio.repos.grid },
              { id: 'pv', title: 'PV_Anomaly_Detection', url: 'https://github.com/VolMax-Studio/PV_Anomaly_Detection', desc: t.portfolio.repos.pv },
              { id: 'transformer', title: 'Transformer_Health_Portfolio', url: 'https://github.com/VolMax-Studio/Transformer_Health_Portfolio', desc: t.portfolio.repos.transformer },
              { id: 'vpp', title: 'VPP_Frequency_Regulation', url: 'https://github.com/VolMax-Studio/VPP_Frequency_Regulation', desc: t.portfolio.repos.vpp }
            ].map((repo) => (
              <div key={repo.id} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-white/10 hover:border-teal-400/50 transition-all flex flex-col justify-between group">
                <div>
                  <h3 className="text-lg font-bold text-white mb-3 break-all group-hover:text-teal-400 transition-colors">
                    {repo.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {repo.desc}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs px-2.5 py-1 bg-teal-500/20 text-teal-300 rounded-full font-medium border border-teal-500/10">
                    Live
                  </span>
                  <a 
                    href={repo.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1"
                  >
                    {t.portfolio.viewCode} &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">{t.about.title}</h2>
            <p className="text-xl text-gray-300">
              {t.about.subtitle}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 rounded-2xl p-8 backdrop-blur border border-white/10 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold text-white mr-6">
                  IN
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{t.about.founder}</h3>
                  <p className="text-teal-400 text-lg">{t.about.role}</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <span className="text-teal-400 mr-3 mt-1">✓</span>
                  <span>{t.about.exp1}</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <span>{t.about.exp2}</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-teal-400 mr-3 mt-1">✓</span>
                  <span>{t.about.exp3}</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <span>{t.about.exp4}</span>
                </li>
              </ul>

              <blockquote className="border-l-4 border-teal-500 pl-6 italic text-gray-300 text-lg">
                "{t.about.quote}"
              </blockquote>
            </div>

            {/* Research Section */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-8 backdrop-blur border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">{t.about.research}</h3>
              <p className="text-gray-300">
                {t.about.researchDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">{t.vision.title}</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              {t.vision.subtitle}
            </p>
          </div>
          <div className="bg-gradient-to-r from-teal-900/30 to-blue-900/30 rounded-2xl p-8 backdrop-blur border border-white/10 mb-12">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">{t.vision.mission}</h3>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
              {t.vision.missionText}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-800/40 to-teal-600/40 rounded-xl p-6 backdrop-blur border border-teal-400/20 hover:border-teal-400/60 transition-all">
              <h4 className="text-2xl font-bold text-white mb-4">{t.vision.phase1Title}</h4>
              <p className="text-teal-200 mb-2">{t.vision.phase1Time}</p>
              <p className="text-gray-300">{t.vision.phase1Desc}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/40 to-blue-600/40 rounded-xl p-6 backdrop-blur border border-blue-400/20 hover:border-blue-400/60 transition-all">
              <h4 className="text-2xl font-bold text-white mb-4">{t.vision.phase2Title}</h4>
              <p className="text-blue-200 mb-2">{t.vision.phase2Time}</p>
              <p className="text-gray-300">{t.vision.phase2Desc}</p>
            </div>
            <div className="bg-gradient-to-br from-green-800/40 to-green-600/40 rounded-xl p-6 backdrop-blur border border-green-400/20 hover:border-green-400/60 transition-all">
              <h4 className="text-2xl font-bold text-white mb-4">{t.vision.phase3Title}</h4>
              <p className="text-green-200 mb-2">{t.vision.phase3Time}</p>
              <p className="text-gray-300">{t.vision.phase3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">{t.contact.title}</h2>
          <p className="text-xl text-gray-300 mb-12">
            {t.contact.subtitle}
          </p>
          <div className="bg-gradient-to-r from-teal-900/50 to-blue-900/50 rounded-2xl p-8 backdrop-blur border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">{t.contact.company}</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-gray-300 mb-2">
                  <span className="text-teal-400 font-semibold">{t.contact.email}:</span> volmax.core@gmail.com
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="text-teal-400 font-semibold">{t.contact.phone}:</span> +381 62 490 355
                </p>
                <p className="text-gray-300">
                  <span className="text-teal-400 font-semibold">{t.contact.location}:</span> Titel, Serbia
                </p>
              </div>
              <div>
                <p className="text-gray-300 mb-2">
                  <span className="text-blue-400 font-semibold">{t.contact.website}:</span> volmax-studio.rs
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="text-blue-400 font-semibold">{t.contact.github}:</span> github.com/VolMax-Studio
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="text-blue-400 font-semibold">{t.contact.status}:</span> {t.contact.statusValue}
                </p>
                <p className="text-gray-300">
                  <span className="text-blue-400 font-semibold">{t.contact.focus}:</span> {t.contact.focusValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
