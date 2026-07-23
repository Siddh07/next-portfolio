'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Sparkles, Code2, ArrowRight, FileText, Mail, Terminal, Database, Cpu, Layers } from 'lucide-react'

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

// Language / Technology Specific SVG Icons
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
)

const TSIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M7 8h6M10 8v8M14 11.5c.8-.8 2.2-.8 3 0s.3 2.5-.5 3-2 .5-2.5 1.5c0 1 1 2 2.5 2s2-.5 2.5-1" />
  </svg>
)

const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2C8.5 2 8 3.5 8 5.5V8h5v1.5H6.5C4.5 9.5 3 10.5 3 14c0 3.5 1.5 5 4.5 5H9v-2.5c0-1.5 1.5-2.5 3-2.5h4c1.5 0 2.5-1 2.5-2.5V8c0-3.5-2-6-6.5-6z" />
    <circle cx="9.5" cy="4.5" r="1" fill="currentColor" />
    <path d="M12 22c3.5 0 4-1.5 4-3.5V16h-5v-1.5h6.5c2 0 3.5-1 3.5-4.5 0-3.5-1.5-5-4.5-5H15v2.5c0 1.5-1.5 2.5-3 2.5H8c-1.5 0-2.5 1-2.5 2.5V16c0 3.5 2 6 6.5 6z" />
    <circle cx="14.5" cy="19.5" r="1" fill="currentColor" />
  </svg>
)

const NextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 16V8l7 9.5V8" />
  </svg>
)

const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.7-2.3 4-2 1.9.3 2.7 2.2 4 4.1C16 16.1 18.2 18 21.5 18c3.3 0 5.3-1.7 6-5-1.3 1.7-2.7 2.3-4 2-1.9-.3-2.7-2.2-4-4.1C17.5 7.9 15.3 6 12 6z" />
    <path d="M6 12c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.7-2.3 4-2 1.9.3 2.7 2.2 4 4.1C10 22.1 12.2 24 15.5 24" />
  </svg>
)

const JSIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M10 16c.5.7 1.5 1 2.5 1 1.5 0 2.5-1 2.5-2.5v-6.5M7 13.5c0 1.5 1 2.5 2.5 2.5.8 0 1.5-.3 2-.8" />
  </svg>
)

const SQLIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
)

const LaravelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" />
    <path d="M12 12l9-5M12 12v10M12 12L3 7" />
  </svg>
)

const PHPIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="10" ry="6" />
    <path d="M7 9v6M7 9h2.5c1 0 1.5.5 1.5 1.5S10.5 12 9.5 12H7M14 9v6M17 9v6M17 9h2.5c1 0 1.5.5 1.5 1.5S20.5 12 19.5 12H17" />
  </svg>
)

const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zM12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0zM5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
)

export default function Hero() {
  const roles = useMemo(() => ['Full-Stack Developer', 'Creative Web Designer', 'Data Solutions Architect', 'Web Engineer'], [])
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(130)

  // Array of single technology languages with dedicated brand icons
  const techLanguages = useMemo(() => [
    { name: 'React', icon: ReactIcon, color: 'text-cyan-400' },
    { name: 'TypeScript', icon: TSIcon, color: 'text-blue-400' },
    { name: 'Python', icon: PythonIcon, color: 'text-amber-400' },
    { name: 'Next.js', icon: NextIcon, color: 'text-white' },
    { name: 'Tailwind CSS', icon: TailwindIcon, color: 'text-teal-400' },
    { name: 'JavaScript', icon: JSIcon, color: 'text-yellow-400' },
    { name: 'SQL & Database', icon: SQLIcon, color: 'text-emerald-400' },
    { name: 'Laravel', icon: LaravelIcon, color: 'text-rose-400' },
    { name: 'PHP', icon: PHPIcon, color: 'text-purple-400' },
    { name: 'Figma', icon: FigmaIcon, color: 'text-pink-400' }
  ], [])

  const [techIndex, setTechIndex] = useState(0)

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex]
      const isTyping = !isDeleting

      if (isTyping) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
          setTypingSpeed(100)
        } else {
          setTypingSpeed(2200)
          setIsDeleting(true)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1))
          setTypingSpeed(60)
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
          setTypingSpeed(450)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed])

  // Cycle through ONE language at a time periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % techLanguages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [techLanguages])

  const CurrentTechIcon = techLanguages[techIndex].icon
  const currentTechName = techLanguages[techIndex].name
  const currentTechColor = techLanguages[techIndex].color

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-32 pb-20 relative overflow-hidden bg-neutral-950">
      
      {/* Background Radial Mask & Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Main Content Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-900/80 border border-emerald-500/30 backdrop-blur-md shadow-lg shadow-emerald-500/5 animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-gray-200 uppercase tracking-wider flex items-center gap-1.5">
                <span>Full-Stack Developer @ Zylux</span>
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              </span>
            </div>

            {/* Headline & Typewriter Terminal Console */}
            <div className="space-y-4">
              <span className="text-sm md:text-base font-bold uppercase tracking-[0.25em] text-emerald-400 block">
                Full-Stack Engineer & Web Solutions Architect
              </span>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
                Siddhant <span className="text-gradient">Shrestha</span>
              </h1>

              {/* Console Styled Typewriter Pill */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-neutral-900/90 border border-white/10 shadow-xl font-mono text-sm sm:text-base">
                  <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-gray-400 font-medium">const role =</span>
                  <span className="text-emerald-400 font-bold">&quot;{displayText}&quot;</span>
                  <span className="w-2 h-5 bg-emerald-400 animate-pulse rounded-sm" />
                </div>
              </div>
            </div>

            {/* Paragraph Bio Statement */}
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Full-Stack Developer at <span className="text-white font-semibold">Zylux</span>. Specializing in modern web applications with <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Next.js</span>, <span className="text-white font-semibold">TypeScript</span>, and scalable backend APIs to build performant digital products.
            </p>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 pt-2">
              <div className="p-3.5 rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-md text-left">
                <span className="text-xs font-semibold text-gray-400 block">Current Role</span>
                <span className="text-sm font-bold text-emerald-400 block truncate">Zylux</span>
                <span className="text-[11px] text-gray-500 block">Full-Stack Dev</span>
              </div>
              <div className="p-3.5 rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-md text-left">
                <span className="text-xs font-semibold text-gray-400 block">Education</span>
                <span className="text-sm font-bold text-white block truncate">NCIT</span>
                <span className="text-[11px] text-emerald-400 font-semibold block truncate">M.Sc. IT (2026-Pres)</span>
              </div>
              <div className="p-3.5 rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-md text-left">
                <span className="text-xs font-semibold text-gray-400 block">Experience</span>
                <span className="text-sm font-bold text-emerald-400 block">Full-Stack</span>
                <span className="text-[11px] text-gray-500 block">React & Node.js</span>
              </div>
            </div>

            {/* CTAs & Quick Social Icons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-base transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                <Code2 className="w-5 h-5" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-emerald-500/40 font-semibold text-base transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5 text-emerald-400" />
                <span>View Resume</span>
              </Link>

              {/* Social Quick Bar */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/Siddh07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-900 border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/siddhant-shrestha-341853198/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-900 border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="mailto:shresthasiddhant128@gmail.com"
                  className="p-3 rounded-xl bg-neutral-900 border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                  aria-label="Email Siddhant"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait Bento Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-emerald-500/40 via-white/10 to-transparent shadow-2xl shadow-emerald-500/10 group">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-[32px] blur-xl opacity-50 group-hover:opacity-80 transition duration-700 pointer-events-none" />

              {/* Main Card Frame */}
              <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-neutral-900 border border-white/10 flex flex-col justify-end p-6">
                
                {/* Photo Layer */}
                <img
                  src="/assets/img/hero/profile.png"
                  alt="Siddhant Shrestha"
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Gradient Backdrop Overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent z-10" />

                {/* Floating Bobbing Badge — Shows ONE Language/Tool + Icon At A Time */}
                <div className="absolute top-4 right-4 z-20 px-4 py-2 rounded-full bg-neutral-950/90 border border-emerald-500/40 backdrop-blur-md shadow-2xl shadow-emerald-500/20 flex items-center gap-2.5 animate-float transition-all duration-300">
                  <CurrentTechIcon className={`w-4.5 h-4.5 ${currentTechColor} transition-transform duration-300 scale-110`} />
                  <span className="text-xs font-bold text-white tracking-wider transition-all duration-300">
                    {currentTechName}
                  </span>
                </div>

                {/* Card Content Overlay Bottom */}
                <div className="relative z-20 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">
                        Siddhant Shrestha
                      </h3>
                      <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mt-0.5">
                        Full-Stack Developer @ Zylux
                      </p>
                    </div>
                  </div>

                  {/* Micro Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/10 backdrop-blur-md text-gray-200 border border-white/10">
                      React & Next.js
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/10 backdrop-blur-md text-gray-200 border border-white/10">
                      TypeScript & Node
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-emerald-500/20 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                      M.Sc. IT (NCIT)
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
