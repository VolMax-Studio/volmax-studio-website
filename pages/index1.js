import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              <span className="text-cyan-400">Vol</span>Max Studio Lab
            </div>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#products" className="hover:text-cyan-400 transition-colors">Products</a>
              <a href="#vision" className="hover:text-cyan-400 transition-colors">Vision</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center py-20">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Building Tomorrow's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                AR Reality
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              From FitAR to ShadowRock - Creating the Future of Immersive Technology
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              VolMax Studio is developing revolutionary AR solutions powered by advanced AI, 
              starting with fashion and expanding across every industry vertical.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
                Explore Our Vision
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg text-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors">
                View Current Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Current Products</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary AR applications that are reshaping industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* FitAR */}
            <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl p-8 backdrop-blur border border-white/10">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">FitAR</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">FitAR</h3>
              <p className="text-gray-300 mb-4">Revolutionary AR Fashion Experience</p>
              <p className="text-gray-400 mb-6">
                First AR app that lets you try clothes directly in store by scanning barcodes. 
                Advanced 3D body modeling and size prediction AI.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm">Instant AR Try-On</span>
                <span className="px-3 py-1 bg-cyan-500/30 text-cyan-200 rounded-full text-sm">Barcode Scanning</span>
                <span className="px-3 py-1 bg-green-500/30 text-green-200 rounded-full text-sm">3D Body Modeling</span>
              </div>
              <div className="text-cyan-400 font-semibold">Status: MVP Development</div>
            </div>

            {/* ElectricAR */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-purple-900/50 rounded-2xl p-8 backdrop-blur border border-white/10">
              <div className="h-48 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">ElectricAR</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">ElectricAR</h3>
              <p className="text-gray-300 mb-4">Interactive Physics Visualization</p>
              <p className="text-gray-400 mb-6">
                Advanced AR application for visualizing electrical fields and physics concepts. 
                Real-time simulation with educational interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-cyan-500/30 text-cyan-200 rounded-full text-sm">Physics Simulation</span>
                <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm">Educational AR</span>
                <span className="px-3 py-1 bg-green-500/30 text-green-200 rounded-full text-sm">3D Visualization</span>
              </div>
              <div className="text-purple-400 font-semibold">Status: Prototype</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">The ShadowRock Initiative</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Building the World's First Comprehensive AR Ecosystem
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 backdrop-blur border border-white/10 mb-12">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h3>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
              VolMax Studio Lab is developing ShadowRock - an advanced AI system that will power 
              a network of specialized AR applications across every industry vertical. 
              By 2027, we aim to establish the world's most comprehensive AR ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-800/40 to-purple-600/40 rounded-xl p-6 backdrop-blur border border-purple-400/20">
              <h4 className="text-2xl font-bold text-white mb-4">Phase 1: Foundation</h4>
              <p className="text-purple-200 mb-2">Timeline: 2025</p>
              <p className="text-gray-300">FitAR & ElectricAR as flagship products. Establish core AR technology and market presence.</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-800/40 to-cyan-600/40 rounded-xl p-6 backdrop-blur border border-cyan-400/20">
              <h4 className="text-2xl font-bold text-white mb-4">Phase 2: Expansion</h4>
              <p className="text-cyan-200 mb-2">Timeline: 2026</p>
              <p className="text-gray-300">ShadowRock AI development + 10 specialized AR agents. Create interconnected ecosystem.</p>
            </div>

            <div className="bg-gradient-to-br from-green-800/40 to-green-600/40 rounded-xl p-6 backdrop-blur border border-green-400/20">
              <h4 className="text-2xl font-bold text-white mb-4">Phase 3: Ecosystem</h4>
              <p className="text-green-200 mb-2">Timeline: 2027</p>
              <p className="text-gray-300">50+ AR applications across all industries. Complete digital mapping of reality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join us in creating tomorrow's AR reality. Let's discuss your vision.
          </p>
          
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-2xl p-8 backdrop-blur border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">VolMax Studio Lab D.O.O.</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-gray-300 mb-2">
                  <span className="text-cyan-400 font-semibold">Email:</span> volmax.core@gmail.com
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="text-cyan-400 font-semibold">Phone:</span> 062490355
                </p>
                <p className="text-gray-300">
                  <span className="text-cyan-400 font-semibold">Location:</span> Serbia
                </p>
              </div>
              <div>
                <p className="text-gray-300 mb-2">
                  <span className="text-purple-400 font-semibold">Website:</span> volmax-studio.rs
                </p>
                 <p className="text-gray-300 mb-2">
                  <span className="text-purple-400 font-semibold">Github:</span> https://github.com/VolMax-Studio/
                </p>

                <p className="text-gray-300 mb-2">
                  <span className="text-purple-400 font-semibold">Status:</span> VolMax Studio Lab D.O.O. Registration In Progress
                </p>
                <p className="text-gray-300">
                  <span className="text-purple-400 font-semibold">Focus:</span> AR/AI Innovation
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
            © 2025 VolMax Studio D.O.O. - Building Tomorrow's AR Reality
          </p>
        </div>
      </footer>
    </div>
  );
}
