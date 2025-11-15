import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [lang, setLang] = useState('sr');

  const translations = {
    sr: {
      nav: {
        home: 'Početna',
        products: 'Proizvodi',
        about: 'O Nama',
        vision: 'Vizija',
        contact: 'Kontakt'
      },
      hero: {
        title1: 'Pametna Rešenja za',
        title2: 'Energetsku Efikasnost',
        subtitle: 'IoT i AI tehnologija za optimizaciju potrošnje električne energije',
        description: 'VolMax Studio Lab razvija napredne NILM (Non-Intrusive Load Monitoring) uređaje koji koriste veštačku inteligenciju za praćenje i optimizaciju potrošnje energije u realnom vremenu.',
        btnPrimary: 'Saznaj Više',
        btnSecondary: 'Kontaktiraj Nas'
      },
      products: {
        title: 'Naša IoT Rešenja',
        subtitle: 'Pametni uređaji koji transformišu upravljanje energijom',
        energyMonitor: {
          title: 'EnergyMonitor',
          tagline: 'Non-Intrusive Load Monitoring',
          description: 'AI uređaj za praćenje potrošnje energije koji automatski prepoznaje uređaje i optimizuje vašu potrošnju. Idealan za domove sa solarnim panelima ili visokim računima.',
          tag1: 'AI Analiza',
          tag2: 'Real-Time Podaci',
          tag3: 'Ušteda 20-30%',
          status: 'Status: Aktivni Razvoj'
        },
        smartGrid: {
          title: 'SmartGrid Hub',
          tagline: 'Virtual Power Plant Integracija',
          description: 'Buduća platforma za povezivanje domaćinstava sa pametnim mrežama. Omogućava trgovinu energijom i učešće u VPP ekosistemu.',
          tag1: 'VPP Podrška',
          tag2: 'Grid Optimizacija',
          tag3: 'Skalabilnost',
          status: 'Status: Koncept'
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
        exp4: 'AR i Smart Home tehnologije',
        quote: 'Kombinujem 20 godina električarskog iskustva sa modernim tehnologijama da rešim realne energetske izazove.',
        research: 'Dodatna Istraživanja',
        researchDesc: 'Pored praćenja energije, istražujemo primene u proširenoj stvarnosti (AR) za vizualizaciju elektro sistema i AI ekosistemima. Ovi projekti ostaju u fazi istraživanja dok fokusiramo resurse na razvoj EnergyMonitor uređaja.'
      },
      vision: {
        title: 'Naša Vizija',
        subtitle: 'Put ka održivoj energetskoj budućnosti',
        mission: 'Naša Misija',
        missionText: 'VolMax Studio Lab ima za cilj revolucionisanje upravljanja energijom kombinacijom IoT i AI tehnologija. Počinjemo sa NILM monitoringom i širimo se ka smart grid integraciji do 2027. godine.',
        phase1Title: 'Faza 1: Prototip',
        phase1Time: '2025-2026',
        phase1Desc: 'Razvoj i testiranje EnergyMonitor sa 500 beta jedinica.',
        phase2Title: 'Faza 2: Lansiranje',
        phase2Time: '2026-2027',
        phase2Desc: 'Proizvodnja 2,000 jedinica, ekspanzija na EU tržište.',
        phase3Title: 'Faza 3: Skaliranje',
        phase3Time: '2027+',
        phase3Desc: 'VPP integracija, cilj €1M+ prihoda.'
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
        statusValue: 'Registracija u toku',
        focusValue: 'IoT Energetska Rešenja'
      },
      footer: {
        copyright: '© 2025 VolMax Studio Lab d.o.o. - Pioniri IoT Energetske Inovacije'
      }
    },
    en: {
      nav: {
        home: 'Home',
        products: 'Products',
        about: 'About',
        vision: 'Vision',
        contact: 'Contact'
      },
      hero: {
        title1: 'Smart Solutions for',
        title2: 'Energy Efficiency',
        subtitle: 'IoT and AI technology for electrical energy consumption optimization',
        description: 'VolMax Studio Lab develops advanced NILM (Non-Intrusive Load Monitoring) devices that use artificial intelligence to track and optimize energy consumption in real-time.',
        btnPrimary: 'Learn More',
        btnSecondary: 'Contact Us'
      },
      products: {
        title: 'Our IoT Solutions',
        subtitle: 'Smart devices transforming energy management',
        energyMonitor: {
          title: 'EnergyMonitor',
          tagline: 'Non-Intrusive Load Monitoring',
          description: 'AI-powered device for energy monitoring that automatically recognizes appliances and optimizes your consumption. Ideal for homes with solar panels or high bills.',
          tag1: 'AI Analysis',
          tag2: 'Real-Time Data',
          tag3: 'Save 20-30%',
          status: 'Status: Active Development'
        },
        smartGrid: {
          title: 'SmartGrid Hub',
          tagline: 'Virtual Power Plant Integration',
          description: 'Future platform for connecting households to smart grids. Enables energy trading and participation in VPP ecosystem.',
          tag1: 'VPP Support',
          tag2: 'Grid Optimization',
          tag3: 'Scalability',
          status: 'Status: Concept'
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
        exp4: 'AR and Smart Home Technologies',
        quote: 'Combining 20 years of electrical expertise with modern technology to solve real-world energy challenges.',
        research: 'Additional Research',
        researchDesc: 'Beyond energy monitoring, we explore applications in augmented reality (AR) for electrical system visualization and AI ecosystems. These projects remain in exploratory phases as we focus resources on delivering EnergyMonitor.'
      },
      vision: {
        title: 'Our Vision',
        subtitle: 'Path to sustainable energy future',
        mission: 'Our Mission',
        missionText: 'VolMax Studio Lab aims to revolutionize energy management by combining IoT and AI technologies. We start with NILM monitoring and expand to smart grid integration by 2027.',
        phase1Title: 'Phase 1: Prototype',
        phase1Time: '2025-2026',
        phase1Desc: 'Develop and test EnergyMonitor with 500 beta units.',
        phase2Title: 'Phase 2: Launch',
        phase2Time: '2026-2027',
        phase2Desc: 'Production of 2,000 units, EU market expansion.',
        phase3Title: 'Phase 3: Scale',
        phase3Time: '2027+',
        phase3Desc: 'VPP integration, target €1M+ revenue.'
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
        statusValue: 'Registration In Progress',
        focusValue: 'IoT Energy Solutions'
      },
      footer: {
        copyright: '© 2025 VolMax Studio Lab d.o.o. - Pioneering IoT Energy Innovation'
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
          <div className="grid md:grid-cols-2 gap-12">
            {/* EnergyMonitor */}
            <div className="bg-gradient-to-br from-teal-900/50 to-blue-900/50 rounded-2xl p-8 backdrop-blur border border-white/10 hover:border-teal-400/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{t.products.energyMonitor.title}</span>
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
            <div className="bg-gradient-to-br from-blue-900/50 to-teal-900/50 rounded-2xl p-8 backdrop-blur border border-white/10 hover:border-blue-400/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{t.products.smartGrid.title}</span>
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
