'use client'

import Link from 'next/link'
import { ArrowUp, Mail, Phone, MapPin, Sparkles, FileText, ArrowRight } from 'lucide-react'

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

export default function Footer() {
  const scrollToTop = () => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#home'
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-neutral-950 text-white relative pt-20 pb-10 border-t border-white/10 overflow-hidden">
      
      {/* Background Glow Blobs */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none opacity-40"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none opacity-30"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Pre-Footer CTA Banner Card */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-emerald-950/40 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Let&apos;s Build Next-Gen Web Solutions</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Have a full-stack project in mind?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Available for full-stack web engineering, custom React/TypeScript platforms, and web architecture consultations.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-all shadow-xl shadow-emerald-500/25 hover:-translate-y-0.5"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all backdrop-blur-md"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>View Resume</span>
            </Link>
          </div>
        </div>

        {/* 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Profile (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/#home" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-full bg-neutral-900 border border-emerald-500/40 overflow-hidden shadow-lg shadow-emerald-500/10 group-hover:border-emerald-400 group-hover:scale-105 transition-all">
                <img
                  src="/assets/img/circle-logo.png"
                  alt="Siddhant Shrestha logo"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold font-display text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                  Siddhant <span className="text-gradient">Shrestha</span>
                </span>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                  Full-Stack Developer @ Zylux
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Passionate about engineering full-stack web platforms with React, Next.js & TypeScript, and building scalable API backend systems.
            </p>
          </div>

          {/* Column 2: Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 font-medium">
              <li>
                <Link href="/#home" className="hover:text-emerald-400 transition-colors">Home </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-emerald-400 transition-colors">About</Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-emerald-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/#journey" className="hover:text-emerald-400 transition-colors">Experience & Education</Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-emerald-400 transition-colors">Skills</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-emerald-400 transition-colors">Resume</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Connect Directly
            </h4>
            
            <div className="space-y-2 text-xs text-gray-300">
              <a href="mailto:shresthasiddhant128@gmail.com" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">shresthasiddhant128@gmail.com</span>
              </a>
              <a href="tel:+9779860674871" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+977 9860674871</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Kathmandu / Bhaktapur, Nepal</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/Siddh07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/siddhant-shrestha-341853198/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.instagram.com/shresthasiddhant"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Credit & Back To Top */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <p>© {new Date().getFullYear()} Siddhant Shrestha. All rights reserved.</p>
            <span className="hidden md:inline text-gray-600">•</span>
            <p className="text-gray-400">
              Designed & Developed by <span className="text-fuchsia-400 font-semibold"><Link href={"https://www.pujan-joshi.com.np/"} target="_blank" rel="noopener noreferrer">Pujan Joshi</Link></span>
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-gray-400">Engineered with Next.js Turbopack & Tailwind CSS</span>
            
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
