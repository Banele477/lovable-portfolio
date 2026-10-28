import React, { useState } from 'react';
import { Terminal, Briefcase, GraduationCap, Code2, ExternalLink, Mail, Phone, Github, MapPin, CheckCircle, Moon, Sun, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-80 border-b border-slate-800/80 px-6 py-4 flex justify-between items-center max-w-6xl left-1/2 -translate-x-1/2">
        <span className="text-xl font-bold tracking-tight text-blue-500">BG<span className="text-slate-400">.dev</span></span>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-blue-500 transition">About</a>
          <a href="#projects" className="text-sm font-medium hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="text-sm font-medium hover:text-blue-500 transition">Contact</a>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
          <CheckCircle size={14} /> Available for Full-Stack & Systems Contracts
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
          Engineered Business Systems & <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Full-Stack Apps</span>
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl font-medium">
          Diplomate in Management Sciences (Business Administration) & Software Systems Developer.
        </p>
        <p className="mt-2 text-sm text-slate-500 max-w-xl">
          Bridging operations management with Python/Kivy development, API workflows, and Linux/Termux command-line deployments.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#projects" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white transition flex items-center gap-2">
            View Projects <ArrowUpRight size={18} />
          </a>
          <a href="#contact" className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 font-semibold transition">
            Contact
          </a>
        </div>
      </section>

      {/* Core Pillars */}
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-800/60">
        <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Dual Competency Architecture</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
            <GraduationCap className="text-blue-400 mb-4" size={28} />
            <h3 className="text-lg font-bold mb-2">Business Administration & Financial Control</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Majoring in Management, Financial Management, Operations, and Administrative Systems at Durban University of Technology. Specialized in organizational efficiency and strategic resource allocation.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
            <Terminal className="text-blue-400 mb-4" size={28} />
            <h3 className="text-lg font-bold mb-2">Software Systems & CLI Architecture</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Experienced in Python backend logic, Kivy mobile interfaces, Git version control, REST APIs, and automated deployments executed straight from Android via Termux.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-800/60">
        <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Lovable App</span>
              <h3 className="text-lg font-bold mt-2 mb-2">Hello & Curriculum Web App</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Dynamic curriculum web application engineered for dynamic planning and automated deployment workflows.
              </p>
            </div>
            <a href="https://hello-and-curriculum.lovable.app" target="_blank" className="text-xs font-semibold text-blue-400 hover:underline flex items-center gap-1">
              Visit Live App <ExternalLink size={12} />
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">AI & Cloud</span>
              <h3 className="text-lg font-bold mt-2 mb-2">AI Disaster Response Assistant</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Hackathon project integrating AI services deployed on Google Cloud Run and Vercel for emergency mitigation.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Agency Platform</span>
              <h3 className="text-lg font-bold mt-2 mb-2">Mbango VA Digital Platform</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Digital hub providing virtual assistance, automated administration, and operational consulting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-800/60 text-center">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Direct Verification & Contact</h2>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
          <div className="flex items-center gap-2"><Mail size={16} className="text-blue-400"/> somkhandabanele8@gmail.com</div>
          <div className="flex items-center gap-2"><Phone size={16} className="text-blue-400"/> 062 587 3479</div>
          <a href="https://github.com/Banele477" target="_blank" className="flex items-center gap-2 hover:text-blue-400"><Github size={16} className="text-blue-400"/> github.com/Banele477</a>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-slate-600 border-t border-slate-800/40">
        © 2026 Banele Gumbi. Engineered with React, Tailwind CSS, & Termux CLI.
      </footer>
    </div>
  );
}
