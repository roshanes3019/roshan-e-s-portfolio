import { projects, socialLinks } from '../data/portfolioData'

// Small GitHub inline SVG icon
function GitHubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

// Small External Link inline SVG icon
function ExternalLinkIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

// Individual project card with responsive layout and gradient accents
function ProjectCard({ project, aosDelay }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl transition-all duration-300 group ${
        project.isFlagship
          ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:via-white/25 hover:to-red-500/60 shadow-[0_0_30px_rgba(255,42,42,0.15)]'
          : 'bg-white/10 hover:bg-white/20'
      }`}
    >
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 flex flex-col justify-between h-full">
        <div>
          {/* Optional Badge */}
          {project.badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] uppercase tracking-widest text-xs font-mono font-bold mb-4 w-fit">
              {project.badge}
            </span>
          )}

          {/* Title and faint serif-italic number */}
          <div className="flex items-baseline justify-between gap-4 mb-4">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h3>
            <span className="text-5xl font-black text-white/10 font-serif italic select-none shrink-0">
              {project.number}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Tag Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techTags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-xs font-bold transition-colors duration-300 hover:text-white hover:bg-red-600/20 hover:border-red-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-auto">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors duration-300 border border-white/10"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          )}

          {project.links?.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] hover:bg-red-600 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,42,42,0.4)]"
            >
              <ExternalLinkIcon />
              <span>Live Demo</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/40 text-sm font-medium border border-white/5 cursor-not-allowed select-none"
            >
              <ExternalLinkIcon />
              <span>Demo Coming Soon</span>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 text-xs font-mono uppercase tracking-widest mb-4">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Work that speaks for itself
          </h2>
          <p className="text-white/50 text-base md:text-lg">
            Real-world applications engineered for reliability, security, and impactful solutions.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* Centred Explore Button */}
        <div data-aos="fade-up" className="text-center mt-16">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <GitHubIcon className="w-5 h-5" />
            <span>Explore All My Repositories</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
