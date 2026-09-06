import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Brain, Search, Code, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { highlights } = portfolioData;

  const cards = [
    {
      icon: GraduationCap,
      title: "MCA Student",
      subtitle: "Currently Pursuing",
      desc: "Chhatrapati Shahu Institute of Business Education and Research (CSIBER), Kolhapur",
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "border-teal-500/30"
    },
    {
      icon: Award,
      title: "BCS Graduate",
      subtitle: "CGPA 8.86 / 10",
      desc: "New College, Kolhapur — Strong academic record in computer science fundamentals.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30"
    },
    {
      icon: Brain,
      title: "Data Analytics Enthusiast",
      subtitle: "Insights & Visualization",
      desc: "Exploratory data analysis, SQL querying, and Power BI interactive dashboard creation.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30"
    },
    {
      icon: Code,
      title: "Python Developer",
      subtitle: "Pandas & Data Wrangling",
      desc: "Building data pipelines, statistical analysis, and basic machine learning experiments.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30"
    },
    {
      icon: Search,
      title: "Problem Solver",
      subtitle: "Analytical Mindset",
      desc: "Dedicated to solving real-world challenges through logic, data cleanups, and structured code.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-dark-900/60 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Aspiring Data Analyst & <span className="gradient-text">Python Enthusiast</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A fresher dedicated to mastering data analytics, Python scripting, and database management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Detailed Biography Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 glass-panel rounded-3xl p-8 border border-slate-800 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-3 h-8 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-full" />
                Background & Career Direction
              </h3>

              <p className="text-slate-300 leading-relaxed text-base">
                I am an MCA student and an aspiring <strong className="text-teal-300">Data Analyst / Python Developer</strong>. I enjoy working with data, solving problems, learning new technologies, and building practical projects.
              </p>

              <p className="text-slate-300 leading-relaxed text-base">
                My current focus is developing strong skills in <span className="text-cyan-300 font-semibold">Python</span>, <span className="text-teal-300 font-semibold">SQL</span>, <span className="text-emerald-300 font-semibold">Power BI</span>, and data analysis while continuously improving my programming and analytical abilities.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>Targeting entry-level Data Analyst, Python Developer, & Data/AI roles</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>BCS Graduate with distinction (8.86 CGPA)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>Proficient in Data Analytics, EDA, Pandas & SQL Querying</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-4 pt-8 mt-8 border-t border-slate-800/80">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-dark-850 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium">{item.label}</div>
                  <div className="text-lg font-bold text-teal-300 mt-0.5">{item.value}</div>
                  <div className="text-[11px] text-slate-500">{item.subtext}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlight Cards Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className={`glass-panel p-6 rounded-2xl border ${card.border} glass-panel-hover flex flex-col justify-between ${idx === 4 ? 'sm:col-span-2' : ''}`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center ${card.color} mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{card.title}</h4>
                    <span className={`text-xs font-semibold ${card.color} block mt-0.5 mb-2`}>
                      {card.subtitle}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
