import { useState } from 'react'
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'
import './GetInTouch.css'

export default function GetInTouch() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors({})

    const trimmedFullName = fullName.trim()
    const trimmedEmail = email.trim()
    const trimmedSubject = subject.trim()
    const trimmedMessage = message.trim()
    const newErrors = {}

    if (!trimmedFullName) {
      newErrors.fullName = 'Full name is required.'
    }

    if (!trimmedEmail) {
      newErrors.email = 'Email address is required.'
    }

    if (!trimmedSubject) {
      newErrors.subject = 'Subject is required.'
    }

    if (!trimmedMessage) {
      newErrors.message = 'Message is required.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const whatsAppMessage = `New Get In Touch Inquiry\n\nFull Name: ${trimmedFullName}\nEmail: ${trimmedEmail}\nSubject: ${trimmedSubject}\nMessage: ${trimmedMessage}`
    const encodedMessage = encodeURIComponent(whatsAppMessage)
    const whatsAppUrl = `https://wa.me/923117819614?text=${encodedMessage}`

    window.open(whatsAppUrl, '_blank', 'noopener,noreferrer')

    setFullName('')
    setEmail('')
    setSubject('')
    setMessage('')
    setErrors({})
  }

  return (
    <div className="get-in-touch-page">
      <Navbar />
      <main className="min-h-screen bg-background px-6 pb-20 pt-32 text-on-background">
        <div className="mx-auto max-w-[1400px]">
          {/* Hero Section */}
          <section className="mb-12 space-y-4">
            <h1 className="font-display-lg text-display-lg text-white">
              Let&apos;s <span className="text-primary-container">Connect</span>
            </h1>
            <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Have a project inquiry or want to discuss opportunities? Reach out directly and let&apos;s create something amazing together.
            </p>
          </section>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column: Form (7/12) */}
            <section className="lg:col-span-7">
              <div className="get-in-touch-panel relative overflow-hidden rounded-lg border border-white/10 bg-surface-container-low p-8 shadow-2xl md:p-12">
                <div className="get-in-touch-panel__glow absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary-container/10 blur-[100px]"></div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="ml-1 text-label-sm uppercase tracking-wider text-on-surface-variant">Name</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        className="get-in-touch-field w-full rounded-lg bg-surface-container-highest p-4 text-white outline-none placeholder:text-slate-600"
                      />
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    </div>
                    <div className="space-y-2">
                      <label className="ml-1 text-label-sm uppercase tracking-wider text-on-surface-variant">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="get-in-touch-field w-full rounded-lg bg-surface-container-highest p-4 text-white outline-none placeholder:text-slate-600"
                      />
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="ml-1 text-label-sm uppercase tracking-wider text-on-surface-variant">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project Inquiry"
                      value={subject}
                      onChange={(event) => setSubject(event.target.value)}
                      className="get-in-touch-field w-full rounded-lg bg-surface-container-highest p-4 text-white outline-none placeholder:text-slate-600"
                    />
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="ml-1 text-label-sm uppercase tracking-wider text-on-surface-variant">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Tell me about your project..."
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      className="get-in-touch-field w-full resize-none rounded-lg bg-surface-container-highest p-4 text-white outline-none placeholder:text-slate-600"
                    />
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col gap-6 pt-4">
                    <button
                      type="submit"
                      className="get-in-touch-send-btn flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-secondary-container to-primary-container py-4 text-label-sm uppercase tracking-widest text-white"
                    >
                      <span>Send Message</span>
                      <span className="material-symbols-outlined">send</span>
                    </button>
                    <div className="flex items-center justify-center gap-3 text-slate-500">
                      <span className="material-symbols-outlined text-sm">info</span>
                      <p className="text-xs uppercase tracking-tighter">
                        Your inquiry will open in WhatsApp and be sent directly to me.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </section>

            {/* Right Column: Contact Info (5/12) */}
            <section className="lg:col-span-5 space-y-6">
              {/* Availability Badge */}
              <div className="rounded-lg border border-white/10 bg-surface-container-low p-6">
                <p className="text-label-sm uppercase tracking-wider text-on-surface-variant mb-3">Availability</p>
                <div className="flex items-center gap-3">
                  <span className="get-in-touch-pulse h-3 w-3 rounded-full bg-green-500"></span>
                  <p className="font-headline-sm text-white">Open to new opportunities</p>
                </div>
              </div>
              

              {/* Contact Detail Cards Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Email */}
                <a
                  href="mailto:fawazulhassan@gmail.com"
                  className="get-in-touch-card group rounded-lg border border-white/10 bg-surface-container-low p-4 transition-all duration-200 hover:border-primary-container hover:bg-surface-container-low/80"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface-variant group-hover:bg-primary-container/20 transition-colors duration-200">
                    <span className="material-symbols-outlined text-primary-container">mail</span>
                  </div>
                  <p className="text-label-sm uppercase tracking-wider text-on-surface-variant">Email</p>
                  <p className="font-headline-sm text-white mt-1">fawazulhassan@gmail.com</p>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/fawazulhassan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="get-in-touch-card group rounded-lg border border-white/10 bg-surface-container-low p-4 transition-all duration-200 hover:border-primary-container hover:bg-surface-container-low/80"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface-variant group-hover:bg-primary-container/20 transition-colors duration-200">
                    <span className="material-symbols-outlined text-primary-container">terminal</span>
                  </div>
                  <p className="text-label-sm uppercase tracking-wider text-on-surface-variant">GitHub</p>
                  <p className="font-headline-sm text-white mt-1">@fawazulhassan</p>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/muhammad-fawaz-ul-hassan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="get-in-touch-card group rounded-lg border border-white/10 bg-surface-container-low p-4 transition-all duration-200 hover:border-primary-container hover:bg-surface-container-low/80"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface-variant group-hover:bg-primary-container/20 transition-colors duration-200">
                    <span className="material-symbols-outlined text-primary-container">share</span>
                  </div>
                  <p className="text-label-sm uppercase tracking-wider text-on-surface-variant">LinkedIn</p>
                  <p className="font-headline-sm text-white mt-1">/in/muhammad-fawaz-ul-hassan</p>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/@ul_fawaz72243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="get-in-touch-card group rounded-lg border border-white/10 bg-surface-container-low p-4 transition-all duration-200 hover:border-primary-container hover:bg-surface-container-low/80"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface-variant group-hover:bg-primary-container/20 transition-colors duration-200">
                    <span className="material-symbols-outlined text-primary-container">public</span>
                  </div>
                  <p className="text-label-sm uppercase tracking-wider text-on-surface-variant">Twitter/X</p>
                  <p className="font-headline-sm text-white mt-1">@ul_fawaz72243</p>
                </a>
              </div>

              {/* Map Section */}
              <div className="relative overflow-hidden rounded-lg border border-white/10 block group h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27261.778213600157!2d74.3109!3d31.5497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39189b5f8afb3c2f%3A0xc4d63b2db8b9c2ff!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '8px', minHeight: '200px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all duration-300"
                ></iframe>
                <div className="get-in-touch-map-overlay absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none rounded-lg"></div>
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10 pointer-events-none">
                  <span className="material-symbols-outlined text-primary-container text-lg">location_on</span>
                  <span className="text-sm font-semibold text-white">Lahore, Pakistan</span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 z-10 pointer-events-none">
                  <span className="material-symbols-outlined text-primary-container text-lg">location_on</span>
                  <span className="text-sm font-semibold text-white">Lahore, Pakistan</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
