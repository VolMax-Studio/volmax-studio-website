import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              <span className="text-teal-400">Vol</span>Max Studio Lab
            </div>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#home" className="hover:text-teal-400 transition-colors">Home</a>
              <a href="#products" className="hover:text-teal-400 transition-colors">Products</a>
              <a href="#vision" className="hover:text-teal-400 transition-colors">Vision</a>
              <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center py-20">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Powering Smarter
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Homes with IoT
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Innovative NILM solutions for energy efficiency and smart living
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              VolMax Studio Lab delivers cutting-edge IoT devices powered by AI, 
              starting with energy monitoring and expanding to smart grids.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
                Discover Our Tech
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg text-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Our IoT Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Smart devices transforming energy management
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* EnergyMonitor */}
            <div className="bg-gradient-to-br from-teal-900/50 to-blue-900/50 rounded-2xl p-8 backdrop-blur border border-white/10">
              <div className="h-48 bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">EnergyMonitor</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">EnergyMonitor</h3>
              <p className="text-gray-300 mb-4">Non-Intrusive Load Monitoring</p>
              <p className="text-gray-400 mb-6">
                AI-powered device (€70) tracks appliance usage, saving 20-30% energy. 
                Ideal for homes with solar or high bills.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-teal-500/30 text-teal-200 rounded-full text-sm">AI Analysis</span>
                <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">Real-Time Data</span>
                <span className="px-3 py-1 bg-green-500/30 text-green-200 rounded-full text-sm">Energy Savings</span>
              </div>
              <div className="text-teal-400 font-semibold">Status: Beta Testing</div>
            </div>

            {/* SmartGrid Hub */}
            <div className="bg-gradient-to-br from-blue-900/50 to-teal-900/50 rounded-2xl p-8 backdrop-blur border border-white/10">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">SmartGrid Hub</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">SmartGrid Hub</h3>
              <p className="text-gray-300 mb-4">Virtual Power Plant Integration</p>
              <p className="text-gray-400 mb-6">
                Future-ready hub for VPPs, connecting homes to smart grids. 
                Enhances energy trading and efficiency.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">VPP Support</span>
                <span className="px-3 py-1 bg-teal-500/30 text-teal-200 rounded-full text-sm">Grid Optimization</span>
                <span className="px-3 py-1 bg-green-500/30 text-green-200 rounded-full text-sm">Scalable Design</span>
              </div>
              <div className="text-blue-400 font-semibold">Status: Concept</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Our IoT Vision</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Pioneering a Sustainable Energy Future
            </p>
          </div>
          <div className="bg-gradient-to-r from-teal-900/30 to-blue-900/30 rounded-2xl p-8 backdrop-blur border border-white/10 mb-12">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h3>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
              VolMax Studio Lab aims to revolutionize energy management with IoT and AI, 
              starting with NILM and expanding to smart grids by 2027.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-800/40 to-teal-600/40 rounded-xl p-6 backdrop-blur border border-teal-400/20">
              <h4 className="text-2xl font-bold text-white mb-4">Phase 1: Prototype</h4>
              <p className="text-teal-200 mb-2">2025-2026</p>
              <p className="text-gray-300">Develop and test EnergyMonitor with 500 beta units.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/40 to-blue-600/40 rounded-xl p-6 backdrop-blur border border-blue-400/20">
              <h4 className="text-2xl font-bold text-white mb-4">Phase 2: Market Entry</h4>
              <p className="text-blue-200 mb-2">2026-2027</p>
              <p className="text-gray-300">Launch 2,000 units, expand to EU markets.</p>
            </div>
            <div className="bg-gradient-to-br from-green-800/40 to-green-600/40 rounded-xl p-6 backdrop-blur border border-green-400/20">
              <h4 className="text-2xl font-bold text-white mb-4">Phase 3: Scale</h4>
              <p className="text-green-200 mb-2">2027+</p>
              <p className="text-gray-300">Integrate VPPs, target €1M+ revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Partner with Us</h2>
          <p className="text-xl text-gray-300 mb-12">
            Let’s innovate smarter energy solutions together.
          </p>
          <div className="bg-gradient-to-r from-teal-900/50 to-blue-900/50 rounded-2xl p-8 backdrop-blur border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">VolMax Studio Lab D.O.O.</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-gray-300 mb-2">
                  <span className="text-teal-400 font-semibold">Email:</span> volmax.core@gmail.com
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="text-teal-400 font-semibold">Phone:</span> +381 62 490 355
                </p>
                <p className="text-gray-300">
                  <span className="text-teal-400 font-semibold">Location:</span> Serbia
                </p>
              </div>
              <div>
                <p className="text-gray-300 mb-2">
                  <span className="text-blue-400 font-semibold">Website:</span> volmax-studio.rs
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="text-blue-400 font-semibold">GitHub:</span> https://github.com/VolMax-Studio/
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="text-blue-400 font-semibold">Status:</span> Registration In Progress
                </p>
                <p className="text-gray-300">
                  <span className="text-blue-400 font-semibold">Focus:</span> IoT Energy Solutions
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
            © 2025 VolMax Studio D.O.O. - Pioneering IoT Energy Innovation
          </p>
        </div>
      </footer>
    </div>
  );
              }
