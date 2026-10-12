import { useRef, useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroVideo from '../assets/hero/hero.mp4'
import heroPoster from '../assets/hero/hero_poster.jpg'
import { heroContent, socialLinks } from '../data/portfolioData'

export default function Hero() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Initialize AOS once on mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    })
  }, [])

  // Toggle video playback and state
  const toggleVideo = (e) => {
    e.stopPropagation()
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Full-Cover Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        playsInline
        poster={heroPoster}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Subtle overlay to preserve vivid red tone and ensure crisp text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10 z-10 pointer-events-none" />

      {/* Left Floating Social Bar (Desktop only) */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference flex-col space-y-6 items-center">
        {/* GitHub */}
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-5 h-5 text-white/60 hover:text-white hover:scale-125 transition-all duration-300"
        >
          <svg className="w-full h-full fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-5 h-5 text-white/60 hover:text-white hover:scale-125 transition-all duration-300"
        >
          <svg className="w-full h-full fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href={socialLinks.instagram || 'https://instagram.com'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-5 h-5 text-white/60 hover:text-white hover:scale-125 transition-all duration-300"
        >
          <svg className="w-full h-full fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-[8%] flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end pointer-events-none">
        {/* Left Block */}
        <div className="max-w-2xl pointer-events-auto">
          {/* Mobile Social Bar (hidden on large screens) */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="lg:hidden flex items-center space-x-6 mb-4"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-5 h-5 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-full h-full fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-5 h-5 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-full h-full fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={socialLinks.instagram || 'https://instagram.com'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-5 h-5 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-full h-full fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          {/* Heading */}
          <h1
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold leading-tight"
          >
            {heroContent.greeting}, <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_black] drop-shadow-[0_0_1.5px_rgba(255,255,255,0.8)] tracking-wide inline-block mt-1">
              {heroContent.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold max-w-md mt-4 leading-relaxed"
          >
            {heroContent.subtitle}
          </p>

          {/* CTA Buttons Row */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap gap-4 mt-8 items-center"
          >
            {/* Primary CTA */}
            {heroContent.ctaPrimary && (
              <a
                href={heroContent.ctaPrimary.href}
                className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 shadow-md inline-block"
              >
                {heroContent.ctaPrimary.text}
              </a>
            )}

            {/* Secondary CTA */}
            {heroContent.ctaSecondary && (
              <a
                href={heroContent.ctaSecondary.href}
                className="px-6 py-3 rounded-full bg-black/40 text-white font-semibold border border-white backdrop-blur hover:bg-black/60 transition-colors duration-300 inline-block"
              >
                {heroContent.ctaSecondary.text}
              </a>
            )}

            {/* Resume CTA (if available) */}
            {heroContent.ctaResume && heroContent.ctaResume.href && (
              <a
                href={heroContent.ctaResume.href}
                download
                className="px-6 py-3 rounded-full bg-transparent text-white font-semibold border border-white/50 hover:border-white transition-colors duration-300 flex items-center space-x-2"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>{heroContent.ctaResume.text}</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Block: Play Reel Control */}
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-col items-center pointer-events-auto"
        >
          <button
            type="button"
            onClick={toggleVideo}
            aria-label={isPlaying ? 'Pause video' : 'Play reel'}
            className="group flex flex-col items-center cursor-pointer focus:outline-none"
          >
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ff2a2a] group-hover:shadow-[0_0_25px_#ff2a2a]">
              {isPlaying ? (
                // Pause icon
                <svg
                  className="w-5 h-5 md:w-8 md:h-8 fill-white"
                  viewBox="0 0 24 24"
                >
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                // Play triangle
                <svg
                  className="w-5 h-5 md:w-8 md:h-8 fill-white ml-0.5"
                  viewBox="0 0 24 24"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </div>
            <span className="mt-2 text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">
              {isPlaying ? 'Pause' : 'Play Reel'}
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Centre Bouncing Down-Arrow Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block animate-bounce pointer-events-none text-white/60">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
