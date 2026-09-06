import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown, FileText, Sparkles, Database, BarChart3, Code2, LineChart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status / Role Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
              <span>Data Analyst | Python Developer</span>
            </div>

            {/* Main Greeting Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="gradient-text">{personal.name}</span>
            </h1>

            {/* Description Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Passionate about transforming data into meaningful insights and building practical solutions using <span className="text-teal-300 font-semibold">Python</span>, <span className="text-cyan-300 font-semibold">SQL</span>, and modern data analytics tools.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-lg shadow-teal-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Sabir_Mubin_Bagawan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-200 glass-panel hover:bg-slate-800/80 hover:text-white border border-slate-700/80 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5 text-teal-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-slate-400">
              <span className="text-sm font-medium text-slate-400">Connect with me:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-dark-850 hover:bg-slate-800 text-slate-300 hover:text-teal-400 border border-slate-800 hover:border-teal-500/40 transition-all"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-dark-850 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personal.socials.email}`}
                  aria-label="Email Contact"
                  className="p-2.5 rounded-xl bg-dark-850 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 hover:border-emerald-500/40 transition-all"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Graphic / Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-square">
              
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-500/20 via-cyan-500/20 to-purple-500/20 blur-xl animate-pulse-slow" />

              {/* Main Photo / Avatar Card */}
              <div className="relative w-full h-full glass-panel rounded-3xl p-4 border border-slate-700/60 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover rounded-2xl border border-slate-800/80"
                />
              </div>

              {/* Floating Tech Badges around Profile Image */}
              
              {/* Floating Badge 1: Python */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 glass-panel px-3.5 py-2 rounded-2xl border border-teal-500/30 shadow-lg flex items-center gap-2"
              >
                <div className="p-1.5 rounded-lg bg-teal-500/20 text-teal-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Python</div>
                  <div className="text-[10px] text-slate-400">Core Stack</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: SQL */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-2 glass-panel px-3.5 py-2 rounded-2xl border border-cyan-500/30 shadow-lg flex items-center gap-2"
              >
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">SQL & MySQL</div>
                  <div className="text-[10px] text-slate-400">Queries & Data</div>
                </div>
              </motion.div>

              {/* Floating Badge 3: Power BI */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-2 -right-4 glass-panel px-3.5 py-2 rounded-2xl border border-emerald-500/30 shadow-lg flex items-center gap-2"
              >
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Power BI</div>
                  <div className="text-[10px] text-slate-400">Dashboards</div>
                </div>
              </motion.div>

              {/* Floating Badge 4: Pandas / Analysis */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-3 -right-3 glass-panel px-3.5 py-2 rounded-2xl border border-purple-500/30 shadow-lg flex items-center gap-2"
              >
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                  <LineChart className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Pandas & EDA</div>
                  <div className="text-[10px] text-slate-400">Data Analytics</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
