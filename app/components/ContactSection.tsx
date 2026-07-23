'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react'

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

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setFormSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none opacity-30"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gradient tracking-tight">
            Let&apos;s Connect & Build Together
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Have a full-stack web project, custom React/TypeScript platform, or digital solution inquiry? Reach out below!
          </p>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Grid Container */}
        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Contact Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Identity Card */}
            <div className="p-6 rounded-3xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl shadow-xl flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-emerald-500/40 overflow-hidden shadow-lg shadow-emerald-500/10 shrink-0">
                <img
                  src="/assets/img/profile.png"
                  alt="Siddhant Shrestha"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Siddhant Shrestha</h3>
                <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                  Full-Stack Developer @ Zylux
                </p>
                <span className="text-[11px] text-gray-400 block mt-0.5">Kathmandu / Bhaktapur, Nepal</span>
              </div>
            </div>

            {/* Email Card */}
            <a
              href="mailto:shresthasiddhant128@gmail.com"
              className="p-6 rounded-3xl border border-white/10 bg-neutral-900/40 hover:border-emerald-500/40 transition-all duration-300 flex items-center gap-4 group shadow-xl"
            >
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-400 block uppercase tracking-wider">
                  Email Directly
                </span>
                <span className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  shresthasiddhant128@gmail.com
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+9779860674871"
              className="p-6 rounded-3xl border border-white/10 bg-neutral-900/40 hover:border-emerald-500/40 transition-all duration-300 flex items-center gap-4 group shadow-xl"
            >
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-400 block uppercase tracking-wider">
                  Phone / Mobile
                </span>
                <span className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  +977 9860674871
                </span>
              </div>
            </a>

            {/* Social Links Bar */}
            <div className="p-6 rounded-3xl border border-white/10 bg-neutral-900/40 space-y-3 shadow-xl">
              <span className="text-xs font-semibold text-gray-400 block uppercase tracking-wider">
                Professional Networks
              </span>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://github.com/Siddh07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-2xl border border-white/10 hover:border-emerald-500/40 bg-white/5 hover:bg-emerald-500/10 text-gray-300 hover:text-emerald-400 text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <GithubIcon />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/siddhant-shrestha-341853198/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-2xl border border-white/10 hover:border-emerald-500/40 bg-white/5 hover:bg-emerald-500/10 text-gray-300 hover:text-emerald-400 text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/shresthasiddhant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl border border-white/10 hover:border-emerald-500/40 bg-white/5 hover:bg-emerald-500/10 text-gray-300 hover:text-emerald-400 transition-all flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form Container (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Fill out the form below to launch a conversation.
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-gray-300 text-sm">
                    Thank you for reaching out, Siddhant Shrestha will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormData({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-500 text-neutral-950 text-xs font-bold hover:bg-emerald-400 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4.5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:bg-neutral-900 transition-colors text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4.5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:bg-neutral-900 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Full-Stack Web Project Inquiry"
                      className="w-full px-4.5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:bg-neutral-900 transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or requirement..."
                      className="w-full px-4.5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:bg-neutral-900 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-base transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
