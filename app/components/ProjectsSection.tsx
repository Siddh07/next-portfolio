'use client'

import { useState } from 'react'
import { Sparkles, Globe, ExternalLink, X, Code2, Terminal, BarChart3, Database, Layers } from 'lucide-react'
import { projectsData, Project } from '../data/projectsData'

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ['All', 'Full-Stack', 'Front-End', 'Data Analysis', 'Web']

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory || p.tags?.includes(activeCategory))

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Data Analysis':
        return BarChart3
      case 'Full-Stack':
        return Database
      case 'Front-End':
        return Code2
      default:
        return Layers
    }
  }

  return (
    <section id="projects" className="py-24 bg-neutral-950/80 border-t border-white/5 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
      <div className="absolute -bottom-20 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Creations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gradient tracking-tight">
            Recent Projects & Systems
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Explore web applications, data analytics pipelines, and full-stack software systems engineered with React, TypeScript & Python.
          </p>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 capitalize ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-neutral-950 shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:border-emerald-500/40 hover:text-emerald-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid (No Images) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = getCategoryIcon(project.category)

            return (
              <div
                key={project.id}
                className="group rounded-3xl border border-white/10 bg-neutral-900/40 hover:border-emerald-500/40 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 backdrop-blur-md p-6 sm:p-7 space-y-6"
              >
                {/* Header Bar */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[11px] font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors cursor-pointer leading-snug"
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 font-normal">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Pills & Actions */}
                <div className="space-y-5 pt-4 border-t border-white/5">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2.5 px-4 rounded-xl border border-white/10 hover:border-emerald-500/40 bg-white/5 hover:bg-emerald-500/10 text-gray-200 hover:text-emerald-400 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Details</span>
                    </button>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-white/10 hover:border-emerald-500/40 bg-white/5 hover:bg-emerald-500/10 text-gray-300 hover:text-emerald-400 text-xs font-semibold transition-all flex items-center justify-center"
                        aria-label="View Repository"
                      >
                        <GithubIcon />
                      </a>
                    )}

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1.5"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Site</span>
                    </a>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>

      {/* Project Details Modal (No Images) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-neutral-900 border border-white/10 rounded-3xl shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  {selectedProject.category} Project Overview
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Full Description */}
            <div className="space-y-3 text-gray-300 text-base leading-relaxed">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                System Overview & Architecture
              </h4>
              <p className="text-sm leading-relaxed">
                {selectedProject.fullDescription || selectedProject.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action Links */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3 justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl border border-white/10 text-gray-300 hover:text-white text-xs font-semibold"
              >
                Close
              </button>

              {selectedProject.repoUrl && (
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center gap-2"
                >
                  <GithubIcon />
                  <span>GitHub Repository</span>
                </a>
              )}

              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Project</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}
