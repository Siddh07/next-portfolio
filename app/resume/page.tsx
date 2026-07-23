'use client'

import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin, Download, Briefcase, GraduationCap, Code2, Sparkles, Award } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { workExperience, educationHistory, certificationsData } from '../data/journeyData'
import { projectsData } from '../data/projectsData'
import { skillsCategories } from '../data/skillsData'

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white transition-colors duration-300 print:bg-white print:text-black">
      {/* Navbar hidden on print */}
      <div className="print:hidden">
        <Navbar />
      </div>

      {/* Header section */}
      <section className="relative pt-36 pb-10 px-6 text-center overflow-hidden print:hidden">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-[0.2em] group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-gradient tracking-tight">
            Resume / Curriculum Vitae
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Siddhant Shrestha — Full-Stack Developer at Zylux.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href="/Resume_Siddhant-Shrestha.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Resume Sheet */}
      <section className="py-8 px-4 sm:px-8 max-w-4xl mx-auto relative z-10 print:py-0 print:px-0">
        <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-8 sm:p-12 shadow-2xl space-y-10 print:shadow-none print:border-none print:p-0 print:bg-white print:text-black">
          
          {/* Header Bar */}
          <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 print:border-slate-300">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight print:text-black">
                Siddhant Shrestha
              </h2>
              <p className="text-emerald-400 font-bold text-lg mt-1 uppercase tracking-wider print:text-emerald-700">
                Full-Stack Developer @ Zylux
              </p>
            </div>

            <div className="flex flex-col gap-2 text-xs sm:text-sm text-gray-300 print:text-slate-800">
              <a href="mailto:shresthasiddhant128@gmail.com" className="flex items-center gap-2 hover:text-emerald-400">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>shresthasiddhant128@gmail.com</span>
              </a>
              <a href="tel:+9779860674871" className="flex items-center gap-2 hover:text-emerald-400">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+977 9860674871</span>
              </a>
              <a href="https://github.com/Siddh07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400">
                <GithubIcon className="w-4 h-4 text-emerald-400" />
                <span>github.com/Siddh07</span>
              </a>
              <a href="https://www.linkedin.com/in/siddhant-shrestha-341853198/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400">
                <LinkedinIcon className="w-4 h-4 text-emerald-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-3 border-b border-white/10 pb-8 print:border-slate-300">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 print:text-emerald-700">
              Professional Summary
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed print:text-slate-800">
              Full-stack developer at Zylux specializing in modern web technologies, scalable frontend/backend architectures, and API integrations. Experienced working with React, Next.js, TypeScript, Tailwind CSS, Node.js, Python, PHP, and Laravel. Proven track record in developing production-ready web applications with clean, maintainable code structures.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-6 border-b border-white/10 pb-8 print:border-slate-300">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 print:text-emerald-700 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </h3>

            <div className="space-y-6">
              {workExperience.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                      <h4 className="text-lg font-bold text-white print:text-black">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-emerald-400 print:text-emerald-700">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-gray-400 print:text-slate-600 bg-white/5 print:bg-slate-100 px-3 py-1 rounded-full mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 print:text-slate-700">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300 print:text-slate-800 list-disc pl-5">
                    {exp.details.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6 border-b border-white/10 pb-8 print:border-slate-300">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 print:text-emerald-700 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>

            <div className="space-y-4">
              {educationHistory.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row justify-between">
                    <h4 className="text-base font-bold text-white print:text-black">
                      {edu.role}
                    </h4>
                    <span className="text-xs text-gray-400 print:text-slate-600">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-emerald-400 print:text-emerald-700">
                    {edu.company}
                  </p>
                  <p className="text-xs text-gray-300 print:text-slate-700">
                    Coursework: {edu.coursework?.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6 border-b border-white/10 pb-8 print:border-slate-300">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 print:text-emerald-700 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Verified Certifications</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-3">
              {certificationsData.map((c) => (
                <div key={c.id} className="p-3 rounded-xl border border-white/10 bg-white/5 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-emerald-400 font-bold block">{c.category}</span>
                    <span className="text-white font-semibold">{c.title}</span>
                  </div>
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">Verify</a>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 print:text-emerald-700 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Skills & Expertise</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {skillsCategories.map((cat) => (
                <div key={cat.title} className="space-y-2">
                  <h4 className="text-xs font-bold text-white print:text-black uppercase">
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="px-2 py-1 rounded text-xs bg-white/5 border border-white/10 text-gray-300 print:border-slate-300 print:bg-white print:text-black">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer hidden on print */}
      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  )
}
