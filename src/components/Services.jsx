import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

// Hanging Tag Card with active state tied to scroll progress
function TagCard({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  // Track scroll path progress and activate card when line tip passes by
  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return
    const containerHeight = containerRef.current.offsetHeight || 1350
    const cardRect = cardRef.current.getBoundingClientRect()
    const containerRect = containerRef.current.getBoundingClientRect()
    const cardTopRelativeToContainer = cardRect.top - containerRect.top

    if (latest * containerHeight >= cardTopRelativeToContainer + 50) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 md:absolute ${className} ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_15px_35px_rgba(255,42,42,0.35)] text-white'
          : 'bg-white shadow-lg text-gray-900 border border-gray-100'
      }`}
    >
      {/* Punched hole circle at the top */}
      <div
        className={`w-4 h-4 rounded-full mx-auto mt-2 transition-colors duration-700 ${
          isActive
            ? 'bg-red-100 border-2 border-red-900'
            : 'bg-white border-2 border-gray-300'
        }`}
      />

      {/* Inner panel */}
      <div
        className={`mt-8 p-8 min-h-[220px] rounded-[1.5rem] transition-colors duration-700 flex flex-col justify-between ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-600'
        }`}
      >
        <div>
          <span
            className={`font-serif italic text-3xl font-black block mb-2 transition-colors duration-700 ${
              isActive ? 'text-white/80' : 'text-gray-400'
            }`}
          >
            {number}
          </span>
          <h3
            className={`text-2xl font-black mb-2 tracking-tight transition-colors duration-700 ${
              isActive ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
        </div>
        <p
          className={`text-sm leading-relaxed transition-colors duration-700 ${
            isActive ? 'text-white/90' : 'text-gray-600'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

export default function Services() {
  const containerRef = useRef(null)

  // Scroll progress for animated path
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  // Desktop positions and animation parameters for the 4 process cards
  const cardConfigs = [
    {
      className: 'md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className: 'md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className: 'md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className: 'md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  const desktopD =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="mb-16 md:mb-0 md:absolute top-10 left-0 md:w-[450px] z-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
            {skillsContent.badge}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 relative mb-4">
            {skillsContent.heading}
            {/* Small hand-drawn arrow SVG positioned at bottom-right */}
            <svg
              className="inline-block w-8 h-8 ml-2 text-[#ff2a2a] align-middle"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop SVG 3-layer Path */}
        <svg
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
        >
          {/* Layer 1: Faint guide path */}
          <path
            d={desktopD}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* Layer 2: Mask for path reveal */}
          <mask id="path-mask">
            <motion.path
              d={desktopD}
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          {/* Layer 3: Dashed path revealed by mask */}
          <path
            d={desktopD}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile SVG 3-layer Vertical Path */}
        <svg
          viewBox="0 0 4 100"
          className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="20"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Process Cards */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards?.map((card, index) => {
            const config = cardConfigs[index] || {}
            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={config.className}
                aosDelay={config.aosDelay}
                aosType={config.aosType}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}
        </div>

        {/* Hand-written end note */}
        <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none pointer-events-none">
          {skillsContent.endText}
        </div>
      </div>
    </section>
  )
}
