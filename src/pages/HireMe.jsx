import { useState } from 'react'
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'
import './HireMe.css'

export default function HireMe() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [projectDetails, setProjectDetails] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors({})

    const trimmedFullName = fullName.trim()
    const trimmedEmail = email.trim()
    const trimmedProjectDetails = projectDetails.trim()
    const newErrors = {}

    if (!trimmedFullName) {
      newErrors.fullName = 'Full name is required.'
    }

    if (!trimmedEmail) {
      newErrors.email = 'Email address is required.'
    }

    if (!trimmedProjectDetails) {
      newErrors.projectDetails = 'Project details are required.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const message = `New Hire Me Inquiry\n\nFull Name: ${trimmedFullName}\nEmail Address: ${trimmedEmail}\nProject Details: ${trimmedProjectDetails}`
    const encodedMessage = encodeURIComponent(message)
    const whatsAppUrl = `https://wa.me/923117819614?text=${encodedMessage}`

    window.open(whatsAppUrl, '_blank', 'noopener,noreferrer')

    setFullName('')
    setEmail('')
    setProjectDetails('')
    setErrors({})
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background px-6 pb-20 pt-32 text-on-background">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 lg:grid-cols-12">

          {/* Left Section */}
          <section className="space-y-6 lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-container/20 bg-primary-container/10 px-3 py-1 text-label-sm uppercase tracking-widest text-primary-container">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary-container"></span>
              Available for Projects
            </div>

            <h1 className="font-display-lg text-display-lg text-white">
              Let&apos;s build something <span className="text-primary-container">extraordinary</span> together.
            </h1>

            <p className="max-w-md font-body-lg text-body-lg text-on-surface-variant">
              Looking for a Full Stack Developer to bring your digital vision to life? Fill out the form, and let&apos;s
              discuss your next big idea.
            </p>

            <div className="space-y-4 pt-8">
              <article className="rounded-lg border border-white/5 bg-surface-container-low p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-container/20 text-secondary">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <div>
                    <p className="text-label-sm text-white">Fast Response</p>
                    <p className="font-body-md text-body-md text-slate-500">Expect a reply within 24 hours.</p>
                  </div>
                </div>
              </article>

              <article className="rounded-lg border border-white/5 bg-surface-container-low p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-container/20 text-primary-container">
                    <span className="material-symbols-outlined">code_blocks</span>
                  </div>
                  <div>
                    <p className="text-label-sm text-white">Full-Stack MERN Developer</p>
                    <p className="font-body-md text-body-md text-slate-500">React, Node.js, Express & MongoDB.</p>
                  </div>
                </div>
              </article>

              <article className="rounded-lg border border-white/5 bg-surface-container-low p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-container/20 text-secondary">
                    <span className="material-symbols-outlined">auto_awesome</span>
                  </div>
                  <div>
                    <p className="text-label-sm text-white">AI-Powered Workflows</p>
                    <p className="font-body-md text-body-md text-slate-500">Faster delivery using Claude & GitHub Copilot.</p>
                  </div>
                </div>
              </article>

              <article className="rounded-lg border border-white/5 bg-surface-container-low p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-container/20 text-primary-container">
                    <span className="material-symbols-outlined">rocket_launch</span>
                  </div>
                  <div>
                    <p className="text-label-sm text-white">Deployment Included</p>
                    <p className="font-body-md text-body-md text-slate-500">Your app live on Vercel, start to finish.</p>
                  </div>
                </div>
              </article>

              <article className="rounded-lg border border-white/5 bg-surface-container-low p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-container/20 text-secondary">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <div>
                    <p className="text-label-sm text-white">CS Graduate</p>
                    <p className="font-body-md text-body-md text-slate-500">B.S. Computer Science, NUML Jan 2026.</p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Right Section - Form */}
          <section className="lg:col-span-7">
            <div className="hire-me-panel relative overflow-hidden rounded-lg border border-white/10 bg-surface-container-low p-8 shadow-2xl md:p-12">
              <div className="hire-me-panel__glow absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary-container/10 blur-[100px]"></div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="ml-1 text-label-sm uppercase tracking-wider text-on-surface-variant">Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      className="hire-me-field w-full rounded-lg bg-surface-container-highest p-4 text-white outline-none placeholder:text-slate-600"
                    />
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  </div>
                  <div className="space-y-2">
                    <label className="ml-1 text-label-sm uppercase tracking-wider text-on-surface-variant">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="hire-me-field w-full rounded-lg bg-surface-container-highest p-4 text-white outline-none placeholder:text-slate-600"
                    />
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-label-sm uppercase tracking-wider text-on-surface-variant">Project Details</label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows="5"
                    placeholder="Tell me about your project goals, timeline, and tech stack requirements..."
                    value={projectDetails}
                    onChange={(event) => setProjectDetails(event.target.value)}
                    className="hire-me-field w-full resize-none rounded-lg bg-surface-container-highest p-4 text-white outline-none placeholder:text-slate-600"
                  />
                  <p className="text-red-500 text-sm mt-1">{errors.projectDetails}</p>
                </div>

                <div className="flex flex-col gap-6 pt-4">
                  <button
                    type="submit"
                    className="hire-me-send-btn flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-secondary-container to-primary-container py-4 text-label-sm uppercase tracking-widest text-white"
                  >
                    <span>Send Message</span>
                    <span className="material-symbols-outlined">send</span>
                  </button>
                  <div className="flex items-center justify-center gap-3 text-slate-500">
                    <span className="material-symbols-outlined text-sm">chat</span>
                    <p className="text-xs uppercase tracking-tighter">
                      Your inquiry will open in WhatsApp and be sent directly to me.
                    </p>
                  </div>
                </div>
              </form>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 text-slate-500">
              <span className="h-px flex-1 bg-white/10"></span>
              <span className="text-label-sm uppercase tracking-[0.3em] whitespace-nowrap">Replies via WhatsApp</span>
              <span className="h-px flex-1 bg-white/10"></span>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}