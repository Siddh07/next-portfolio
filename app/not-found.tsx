import type { Metadata } from 'next'
import Link from 'next/link'
import { Terminal, Home, Briefcase, FileText, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Siddhant Shrestha',
  description: 'The page you are looking for does not exist or has been moved.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans antialiased">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="w-full max-w-2xl relative z-10 space-y-8 text-center sm:text-left">
        {/* Glow Halo around content */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-[32px] blur-xl opacity-30 pointer-events-none" />

        {/* 404 Brand Header */}
        <div className="space-y-2">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-400 block text-center">
            System Error
          </span>
          <h1 className="text-7xl sm:text-8xl font-extrabold text-white text-center font-display tracking-tight leading-none">
            404
          </h1>
          <p className="text-gray-400 text-center text-base sm:text-lg max-w-md mx-auto">
            The requested resource could not be loaded. The file path might have changed.
          </p>
        </div>

        {/* Terminal Bento Card */}
        <div className="rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl shadow-2xl overflow-hidden text-left font-mono text-xs sm:text-sm">
          {/* Terminal Bar */}
          <div className="px-4 py-3 bg-neutral-950 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 block" />
            </div>
            <span className="text-gray-500 text-[11px] font-bold">bash - route-checker.sh</span>
            <Terminal className="w-4 h-4 text-gray-500" />
          </div>

          {/* Terminal Body */}
          <div className="p-5 sm:p-6 space-y-3.5 text-gray-300">
            <div className="flex gap-2">
              <span className="text-emerald-400 font-bold">guest@siddhant-shrestha:~$</span>
              <span>npm run check-route</span>
            </div>
            <div className="text-gray-500">
              [SYSTEM] Initiating path resolution index...
            </div>
            <div className="text-rose-400 font-semibold">
              Error: Page not found (code: ERR_ROUTE_NOT_REGISTERED)
            </div>
            <div className="text-gray-400 text-xs leading-relaxed pl-4 border-l-2 border-rose-500/40">
              The router attempted to match the query parameters with available static routes. No matching file was found in /app/routes/*.
            </div>
            <div className="flex gap-2 pt-2">
              <span className="text-emerald-400 font-bold">guest@siddhant-shrestha:~$</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>

        {/* Navigational Fallbacks */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-center text-gray-400">
            Available Entry points
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
            <Link
              href="/"
              className="p-4 rounded-xl border border-white/10 bg-neutral-900/50 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all group flex items-center gap-3.5"
            >
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-emerald-500/20 text-emerald-400 shrink-0 transition-colors">
                <Home className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-bold text-xs sm:text-sm text-white block group-hover:text-emerald-400 transition-colors">
                  Return Home
                </span>
                <span className="text-[10px] text-gray-500 block">
                  Go to primary showcase
                </span>
              </div>
            </Link>

            <Link
              href="/resume"
              className="p-4 rounded-xl border border-white/10 bg-neutral-900/50 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all group flex items-center gap-3.5"
            >
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-emerald-500/20 text-emerald-400 shrink-0 transition-colors">
                <FileText className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-bold text-xs sm:text-sm text-white block group-hover:text-emerald-400 transition-colors">
                  View Resume
                </span>
                <span className="text-[10px] text-gray-500 block">
                  Read background & skills
                </span>
              </div>
            </Link>

            <Link
              href="/#projects"
              className="p-4 rounded-xl border border-white/10 bg-neutral-900/50 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all group flex items-center gap-3.5"
            >
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-emerald-500/20 text-emerald-400 shrink-0 transition-colors">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-bold text-xs sm:text-sm text-white block group-hover:text-emerald-400 transition-colors">
                  Browse Projects
                </span>
                <span className="text-[10px] text-gray-500 block">
                  See latest web engineering
                </span>
              </div>
            </Link>

            <Link
              href="/#contact"
              className="p-4 rounded-xl border border-white/10 bg-neutral-900/50 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all group flex items-center gap-3.5"
            >
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-emerald-500/20 text-emerald-400 shrink-0 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-bold text-xs sm:text-sm text-white block group-hover:text-emerald-400 transition-colors">
                  Get In Touch
                </span>
                <span className="text-[10px] text-gray-500 block">
                  Initiate correspondence
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
