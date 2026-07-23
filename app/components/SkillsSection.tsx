'use client'

import { Layout, Server, BarChart3, Wrench, CheckCircle2, Sparkles } from 'lucide-react'
import { skillsCategories } from '../data/skillsData'

export default function SkillsSection() {
  const categoryIcons = [Layout, Server, BarChart3, Wrench]
  const categoryGradients = [
    'from-emerald-500/20 via-teal-500/10 to-transparent',
    'from-blue-500/20 via-indigo-500/10 to-transparent',
    'from-purple-500/20 via-cyan-500/10 to-transparent',
    'from-amber-500/20 via-orange-500/10 to-transparent'
  ]

  return (
    <section id="skills" className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Background glow blobbing */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none opacity-30"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tech Stack & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gradient tracking-tight">
            Skills & Technical Expertise
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Specializing in modern web engineering, custom backend architectures, Python data analytics, and high-fidelity user experience design.
          </p>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillsCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length]
            const bgGrad = categoryGradients[idx % categoryGradients.length]

            return (
              <div
                key={cat.title}
                className="relative p-8 rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl hover:border-emerald-500/40 transition-all duration-500 shadow-2xl space-y-6 group overflow-hidden"
              >
                {/* Accent Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${bgGrad} opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-all duration-300 shadow-lg shadow-emerald-500/10">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block">
                        Domain 0{idx + 1}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-gray-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {cat.skills.length} Skills
                  </span>
                </div>

                {/* Skills Pills Grid */}
                <div className="relative z-10 flex flex-wrap gap-2.5 pt-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-gray-200 hover:border-emerald-500/50 hover:text-white hover:bg-emerald-500/15 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group/pill"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 group-hover/pill:scale-110 transition-transform" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
