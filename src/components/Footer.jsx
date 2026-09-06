import React from 'react';
import { Mail, ArrowUp, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const { personal, navItems } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center text-slate-950 font-bold">
                <Code2 className="w-4 h-4 text-dark-950" />
              </div>
              <span className="font-bold text-lg text-white">
                {personal.name}
              </span>
            </a>
            <p className="text-xs text-slate-400 font-mono">
              {personal.role}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-teal-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-dark-850 hover:bg-slate-800 text-slate-400 hover:text-teal-400 border border-slate-800 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-dark-850 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.socials.email}`}
              className="p-2 rounded-xl bg-dark-850 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/30 transition-all ml-2"
              aria-label="Back to Top"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright Notice */}
        <div className="pt-6 text-center text-xs text-slate-500">
          <p>Copyright © 2026 {personal.name}. All rights reserved.</p>
          <p className="mt-1 text-[11px] text-slate-600">Designed & Positioned for Data Analyst & Python Developer Careers.</p>
        </div>

      </div>
    </footer>
  );
}
