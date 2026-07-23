'use client'

import { useState } from 'react'
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react'
import { workExperience, educationHistory, certificationsData } from '../data/journeyData'

export default function JourneySection() {
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'certifications'>('work')
  const [certFilter, setCertFilter] = useState<string>('All')

  const certCategories = ['All', 'Coursera', 'HackerRank', 'Udemy']

  const filteredCertifications = certFilter === 'All'
    ? certificationsData
    : certificationsData.filter(c => c.category === certFilter)

  return (
    <section id="journey" className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none opacity-40"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
            Career Timeline & Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gradient tracking-tight">
            Experience & Credentials
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Explore my work history at Cloud Factory & iCash Nepal, academic degree at Herald College Kathmandu, and verified online certifications.
          </p>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'work'
                  ? 'bg-emerald-500 text-neutral-950 shadow-lg shadow-emerald-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-emerald-500 text-neutral-950 shadow-lg shadow-emerald-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Academic Education</span>
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'certifications'
                  ? 'bg-emerald-500 text-neutral-950 shadow-lg shadow-emerald-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        {activeTab !== 'certifications' ? (
          <div className="max-w-4xl mx-auto space-y-8">
            {(activeTab === 'work' ? workExperience : educationHistory).map((item) => (
              <div
                key={item.id}
                className="relative pl-8 md:pl-10 border-l-2 border-emerald-500/30 space-y-4 group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/50" />

                {/* Timeline Card */}
                <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-neutral-900/40 hover:border-emerald-500/40 transition-all duration-300 shadow-xl space-y-4">
                  
                  {/* Role & Company Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      {item.logo && (
                        <div className="w-12 h-12 rounded-xl bg-white p-2 border border-white/20 flex items-center justify-center shadow-md shrink-0">
                          <img src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {item.role}
                        </h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 font-semibold text-sm sm:text-base hover:underline inline-flex items-center gap-1 mt-0.5"
                          >
                            <span>{item.company}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <p className="text-emerald-400 font-semibold text-sm sm:text-base mt-0.5">
                            {item.company}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Date & Location */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-400">
                      <span className="flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2">
                    {item.coursework && (
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                        Focused Coursework:
                      </span>
                    )}
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {item.details.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300/90 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Pills */}
                  {item.skills && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Certifications Grid Tab */
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Cert filter buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {certCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCertFilter(c)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    certFilter === c
                      ? 'bg-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-500/20'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCertifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-white p-2.5 border border-white/20 flex items-center justify-center shadow-md">
                      <img src={cert.img} alt={cert.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-400 block uppercase tracking-wider">
                        {cert.category}
                      </span>
                      <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {cert.title}
                      </h4>
                    </div>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 text-emerald-400 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Verify Credentials</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
