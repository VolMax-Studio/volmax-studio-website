import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [lang, setLang] = useState('sr'); // default srpski

  const content = {
    sr: {
      hero: {
        title: "Pametno Praćenje Energije",
        subtitle: "IoT rešenje za optimizaciju potrošnje električne energije",
      },
      about: {
        title: "O Projektu",
        founder: "Osnivač i Programer",
        experience: [
          "Električar sa 20+ godina iskustva",
          "Web Development",
          "Python i AI istraživanje",
          "AR i Smart Home tehnologije"
        ],
        quote: "Kombinujem praktično elektro iskustvo sa modernom tehnologijom."
      }
    },
    en: {
      hero: {
        title: "Smart Energy Monitoring",
        subtitle: "IoT solution for residential energy optimization",
      },
      about: {
        title: "About the Project",
        founder: "Founder & Developer",
        experience: [
          "Electrician with 20+ years experience",
          "Web Development",
          "Python & AI Research",
          "AR & Smart Home Technology"
        ],
        quote: "Combining practical electrical expertise with modern technology."
      }
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>VolMax Studio Lab - {t.hero.title}</title>
      </Head>

      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setLang('sr')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            lang === 'sr' 
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
              : 'bg-slate-700 text-gray-300'
          }`}
        >
          SR
        </button>
        <button
          onClick={() => setLang('en')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            lang === 'en' 
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
              : 'bg-slate-700 text-gray-300'
          }`}
        >
          EN
        </button>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          {t.hero.title}
        </h1>
        <p className="text-xl text-gray-300">{t.hero.subtitle}</p>
      </section>

      {/* About */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold mb-6 text-white">{t.about.title}</h2>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Ivan Nestorov</h3>
          <p className="text-gray-400 mb-4">{t.about.founder}</p>
          <ul className="space-y-2 mb-6">
            {t.about.experience.map((exp, i) => (
              <li key={i} className="text-gray-300">• {exp}</li>
            ))}
          </ul>
          <p className="italic text-gray-400 border-l-4 border-cyan-500 pl-4">"{t.about.quote}"</p>
        </div>
      </section>
    </div>
  );
}
