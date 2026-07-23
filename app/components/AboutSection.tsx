'use client'

import Link from 'next/link'
import { Star, FileText, Award, Laptop, BarChart, Code2, Palette } from 'lucide-react'

export default function AboutSection() {
  const roles = [
    { title: 'Web Developer', icon: Code2 },
    { title: 'Full-Stack Dev', icon: Palette },
    { title: 'Data Analyst', icon: BarChart }
  ]

  return (
    <section id="about" className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Glow Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none opacity-40" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Photo, Status & Philosophy (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Glowing Profile Frame */}
            <div className="relative group w-full aspect-square max-w-[400px] mx-auto lg:mx-0">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                <img
                  src="/assets/img/profile.png"
                  alt="Siddhant Shrestha fullstack developer at zylux"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* Status Indicator Badge */}
              <div className="absolute -bottom-4 left-6 bg-neutral-900/90 border border-white/15 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-gray-200 uppercase tracking-wider">
                  Active at <span className="text-emerald-400">Zylux</span>
                </span>
              </div>
            </div>

            {/* Core Role Cards */}
            <div className="grid grid-cols-3 gap-3">
              {roles.map((role) => {
                const Icon = role.icon
                return (
                  <div key={role.title} className="p-4 rounded-2xl border border-white/10 bg-neutral-900/40 text-center space-y-2 group hover:border-emerald-500/40 transition-colors">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mx-auto group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="block text-xs font-bold text-white tracking-wider">{role.title}</span>
                  </div>
                )
              })}
            </div>

            {/* Philosophy Card */}
            <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-md shadow-xl space-y-3">
              <h3 className="font-bold text-lg flex items-center gap-2 text-white">
                <Star className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                My Focus & Vision
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                I focus on delivering high-quality full-stack web applications tailored to user needs. Currently engineering robust frontend and backend web solutions at Zylux with React, TypeScript, Next.js, and Node.js.
              </p>
            </div>

          </div>

          {/* Right Column: Detailed Bio & Core Skills (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 block mb-2">
                01 / ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gradient tracking-tight">
                About Siddhant Shrestha
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 to-cyan-400 mt-4 rounded-full" />
            </div>

            <div className="text-gray-300 space-y-5 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I am a <strong className="text-white font-semibold">Full-Stack Developer at Zylux</strong> specializing in modern web engineering, custom web applications, and scalable software architectures.
              </p>
              <p>
                My technical expertise spans <strong className="text-emerald-400 font-semibold">React, Next.js, TypeScript, Tailwind CSS, JavaScript, HTML5/CSS3, PHP, and Laravel</strong>. I design and build full-stack systems with a strong emphasis on speed, maintainable code, and high-fidelity user experiences.
              </p>
              <p>
                Having graduated with a <strong className="text-white font-semibold">B.Sc. in Information Technology from Herald College Kathmandu (University of Wolverhampton)</strong>, I combine computer science principles with hands-on software development to deliver production-ready platforms.
              </p>
            </div>

            {/* Quick Details Badges */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Laptop className="w-4 h-4 text-emerald-400" />
                  Current Position
                </span>
                <span className="text-sm font-bold text-white block">
                  Full-Stack Developer at Zylux
                </span>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-400" />
                  Education
                </span>
                <span className="text-sm font-bold text-white block">
                  B.Sc. IT — Herald College Kathmandu (University of Wolverhampton)
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume / CV</span>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                <span>Get In Touch</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
