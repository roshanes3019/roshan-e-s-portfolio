import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax scroll effect for the giant background "Contact" typography
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  // Form submission handler with EmailJS support and mailto fallback
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    const firstName = form?.elements?.first_name?.value?.trim() || ''
    const lastName = form?.elements?.last_name?.value?.trim() || ''
    const email = form?.elements?.user_email?.value?.trim() || ''
    const message = form?.elements?.message?.value?.trim() || ''

    // Validate required fields
    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      // Fallback: open user's email client directly
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )}`
      window.open(mailtoUrl, '_blank')
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS submission error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Parallax Giant "Contact" Text */}
      <motion.div
        style={{ y }}
        className="absolute top-10 left-6 md:left-12 pointer-events-none z-0"
      >
        <div
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
        >
          Contact
        </div>
      </motion.div>

      {/* Foreground Contact Card */}
      <div className="relative z-10 w-full flex justify-end">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 rounded-tl-3xl shadow-2xl"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between mb-12">
            <span className="text-white/80 font-mono text-xs uppercase tracking-[0.2em] font-bold">
              Reach Me
            </span>
            <a
              href={socialLinks.instagram || 'https://instagram.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-colors"
            >
              DM on Instagram
            </a>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-12"
          >
            {/* Input Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column: First Name, Last Name, Email */}
              <div className="flex flex-col gap-8">
                <div>
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="first_name"
                    type="text"
                    required
                    placeholder="First Name *"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="Your Email *"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Right Column: Message */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Your Message *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:outline-none focus:border-white resize-none min-h-[120px] transition-colors"
                />
              </div>
            </div>

            {/* Bottom Form Actions */}
            <div className="flex flex-col gap-6">
              {/* Permission Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer text-white/80 text-sm">
                <input
                  type="checkbox"
                  required
                  defaultChecked
                  className="mt-1 rounded accent-black cursor-pointer"
                />
                <span>
                  I agree that my submitted information will be collected to respond to my inquiry.
                </span>
              </label>

              {/* Notes and Direct Email */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/70">
                <p>
                  Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
                </p>
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline hover:text-white transition-colors whitespace-nowrap"
                >
                  Urgent? Email directly
                </a>
              </div>

              {/* Dynamic Status Submit Button */}
              <div className="pt-4">
                {status === 'sending' && (
                  <button
                    type="button"
                    disabled
                    className="px-8 py-3.5 rounded-full bg-white/20 border border-white/30 text-white font-bold cursor-wait inline-flex items-center gap-2"
                  >
                    <svg
                      className="animate-spin w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </button>
                )}

                {status === 'success' && (
                  <button
                    type="button"
                    disabled
                    className="px-8 py-3.5 rounded-full bg-emerald-600 text-white font-bold inline-flex items-center gap-2 shadow-lg"
                  >
                    <span>Sent Successfully ✓</span>
                  </button>
                )}

                {status === 'error' && (
                  <button
                    type="button"
                    disabled
                    className="px-8 py-3.5 rounded-full bg-red-950 text-white font-bold inline-flex items-center gap-2 border border-red-800"
                  >
                    <span>Failed — Try Again</span>
                  </button>
                )}

                {status === 'idle' && (
                  <button
                    type="submit"
                    className="group px-8 py-3.5 rounded-full border border-white text-white font-bold inline-flex items-center gap-3 transition-all duration-300 hover:bg-white hover:text-[#ff2a2a] shadow-lg cursor-pointer"
                  >
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
