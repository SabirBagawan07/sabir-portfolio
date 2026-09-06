import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Highlight active section based on scroll position
      const sections = portfolioData.navItems.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-950/85 backdrop-blur-md py-3 border-b border-slate-800/80 shadow-lg shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-5 h-5 text-dark-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-teal-400 transition-colors">
                Sabir<span className="text-teal-400">.</span>Bagawan
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                Data & Python
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-slate-800/60">
            {portfolioData.navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-teal-500/15 text-teal-400 font-semibold border border-teal-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Sabir_Mubin_Bagawan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-teal-300 bg-teal-500/10 border border-teal-500/30 hover:bg-teal-500/20 hover:border-teal-400 transition-all duration-200 shadow-sm shadow-teal-950"
            >
              <FileText className="w-4 h-4 text-teal-400" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-dark-800 text-slate-300 hover:text-white hover:bg-dark-700 border border-slate-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-teal-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-2 animate-fadeIn">
          {portfolioData.navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-teal-500/20 text-teal-300 font-semibold border-l-4 border-teal-400'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          
          <div className="pt-3 border-t border-slate-800">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Sabir_Mubin_Bagawan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-semibold text-teal-300 bg-teal-500/15 border border-teal-500/30"
            >
              <FileText className="w-5 h-5 text-teal-400" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
