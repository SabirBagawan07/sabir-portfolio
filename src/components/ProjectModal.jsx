import React from 'react';
import { X, ExternalLink, CheckCircle, Code2, Tag } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-dark-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto pr-1 space-y-6">
          {/* Header Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
            <Tag className="w-3.5 h-3.5" />
            <span>{project.badge}</span>
          </div>

          {/* Title */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-xs text-teal-400 font-mono mt-1">
              {project.category}
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>

          {/* Technologies Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-teal-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Key Features & Capabilities
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 mt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400 italic">
            * GitHub & Demo links can be updated in <code className="text-teal-400">portfolioData.js</code>
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-dark-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-teal-400" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
