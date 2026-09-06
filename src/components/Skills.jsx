import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, BarChart3, FileSpreadsheet, Table, Binary, 
  LineChart, PieChart, FileCode, Globe, Layout, Server, 
  Layers, GitBranch, Terminal, Cpu, Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

// Icon Map
const iconMap = {
  Code2, Database, BarChart3, FileSpreadsheet, Table, Binary, 
  LineChart, PieChart, FileCode, Globe, Layout, Server, 
  Layers, GitBranch, Github: GithubIcon, Terminal, Cpu
};

export default function Skills() {
  const { skillsCategories } = portfolioData;

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Tool Stack</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Organized proficiency across Data Analytics, Python Development, Databases, and Tools.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                    {cat.category}
                  </h3>
                  <span className="text-xs text-teal-400/80 font-mono">
                    {cat.skills.length} Technologies
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  {cat.description}
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cat.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="p-3 rounded-2xl bg-dark-850 border border-slate-800/80 hover:border-teal-500/40 hover:bg-dark-800 transition-all group flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-400 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-semibold text-slate-400 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700/60">
                            {skill.level}
                          </span>
                        </div>
                        <div className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                          {skill.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
