import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Solid foundation in Computer Science and Application Development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-slate-800 -translate-x-1/2 opacity-30" />

          <div className="space-y-8">
            {education.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Badge/Dot */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-dark-900 border-2 border-teal-400 items-center justify-center text-teal-300 shadow-lg shadow-teal-500/20 z-10">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  {/* Card Box */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ${isEven ? 'sm:text-right' : ''}`}>
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 glass-panel-hover">
                      
                      {/* Status Tag */}
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        item.current
                          ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.status}</span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <h4 className="text-sm font-semibold text-teal-400 mt-1">
                        {item.institution}
                      </h4>

                      {/* Location & Grade */}
                      <div className={`flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-2 ${
                        isEven ? 'sm:justify-end' : ''
                      }`}>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          {item.location}
                        </span>
                        {item.grade && (
                          <span className="flex items-center gap-1 font-bold text-teal-300 px-2 py-0.5 rounded-md bg-teal-500/10 border border-teal-500/30">
                            <Award className="w-3.5 h-3.5 text-teal-400" />
                            {item.grade}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-400 leading-relaxed mt-4 pt-4 border-t border-slate-800/80">
                        {item.description}
                      </p>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
