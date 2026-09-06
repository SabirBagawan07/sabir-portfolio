import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative bg-dark-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & <span className="gradient-text">Practical Work</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Hands-on technical projects ranging from Web Applications to Machine Learning and Data Analytics.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-3xl p-6 border border-slate-800 glass-panel-hover flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag & Folder Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800/80 text-teal-300 border border-slate-700/80">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1 mb-3">
                  {project.category}
                </p>

                {/* Short Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-badge text-[11px]">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] text-slate-400 font-mono px-2 py-0.5 rounded-full bg-slate-800">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-teal-300 bg-teal-500/10 border border-teal-500/30 hover:bg-teal-500/20 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-dark-850 hover:bg-slate-800 border border-slate-800 transition-all"
                    title="GitHub Link Placeholder"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-teal-400" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Popup */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
