'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FileText, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/80 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo with Profile Photo & Full Name */}
        <Link href="/#home" className="flex items-center gap-3 group relative transition-all duration-300">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 border border-emerald-500/40 overflow-hidden shadow-lg shadow-emerald-500/10 group-hover:border-emerald-400 group-hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="/assets/img/circle-logo.png"
              alt="Siddhant Shrestha logo"
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-emerald-400 transition-colors tracking-tight">
            Siddhant <span className="text-gradient">Shrestha</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <Link href="/#home" className="nav-link">
            Home
          </Link>
          <Link href="/#about" className="nav-link">
            About
          </Link>
          <Link href="/#projects" className="nav-link">
            Projects
          </Link>
          <Link href="/#journey" className="nav-link">
            Experience
          </Link>
          <Link href="/#skills" className="nav-link">
            Skills
          </Link>
          <Link href="/#contact" className="nav-link">
            Contact
          </Link>

          <Link
            href="/resume"
            className="ml-4 inline-flex items-center gap-2 px-4.5 py-2 text-sm font-bold rounded-xl bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-emerald-400 transition-colors p-2 rounded-lg bg-white/5 border border-white/10"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-neutral-950/95 border-b border-white/10 backdrop-blur-xl p-6 flex flex-col gap-4 shadow-2xl animate-fade-in">
          <Link
            href="/#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-white/90 hover:text-emerald-400 py-2 border-b border-white/5"
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-white/90 hover:text-emerald-400 py-2 border-b border-white/5"
          >
            About
          </Link>
          <Link
            href="/#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-white/90 hover:text-emerald-400 py-2 border-b border-white/5"
          >
            Projects
          </Link>
          <Link
            href="/#journey"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-white/90 hover:text-emerald-400 py-2 border-b border-white/5"
          >
            Experience
          </Link>
          <Link
            href="/#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-white/90 hover:text-emerald-400 py-2 border-b border-white/5"
          >
            Skills
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-white/90 hover:text-emerald-400 py-2 border-b border-white/5"
          >
            Contact
          </Link>
          <Link
            href="/resume"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
          >
            <FileText className="w-4 h-4" />
            <span>Resume / CV</span>
          </Link>
        </div>
      )}
    </header>
  )
}
