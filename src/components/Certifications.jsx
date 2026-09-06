import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 relative bg-dark-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Learning & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="gradient-text">Upskilling</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Continuous skill advancement in Data Analytics, SQL, and Python.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-slate-800 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-teal-300 border border-slate-700">
                    {cert.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 mb-4 font-mono">
                  {cert.issuer}
                </p>

                {/* Skills Covered */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Core Skills Covered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill) => (
                      <span key={skill} className="tech-badge text-[10px]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Placeholder */}
              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 glass-panel hover:bg-slate-800 hover:text-teal-300 border border-slate-700/80 transition-all"
                  title="Certificate Link Placeholder - Replace in portfolioData.js"
                >
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-teal-400" />
                    <span>View Credential Placeholder</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
