import { IconCode, IconNetwork, IconCloud, IconPen } from './icons'

const capabilities = [
  { label: 'Software', description: 'Custom web & mobile builds', icon: IconCode },
  { label: 'AI & ML', description: 'Intelligent systems & automation', icon: IconNetwork },
  { label: 'Cloud', description: 'Scalable infrastructure', icon: IconCloud },
  { label: 'Design', description: 'Interfaces people trust', icon: IconPen },
]

export default function Hero() {
  return (
    <section id="home" className="w-full py-16 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col justify-center">
            <span className="font-mono text-sm uppercase tracking-widest text-teal-deep dark:text-teal-bright mb-4">
              Software · AI/ML · Cloud
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-ink dark:text-paper mb-6 leading-[1.05]">
              Transform Your Business with <span className="text-teal-deep dark:text-teal-bright">Airella Tech</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted dark:text-muted-dark mb-8 leading-relaxed max-w-xl">
              Airella Tech builds software, AI, ML and cloud solutions — custom web and mobile applications, intelligent systems, and modern designs that drive growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-teal-deep text-paper rounded-lg hover:brightness-110 transition-[filter] text-base sm:text-lg font-medium text-center"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="hidden dark:block absolute -inset-6 bg-teal-bright/10 blur-3xl rounded-full pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative w-full rounded-xl border border-line dark:border-line-dark bg-paper-alt dark:bg-ink-card p-2">
              <div className="flex items-center gap-2 px-4 py-3 font-mono text-xs uppercase tracking-widest text-muted dark:text-muted-dark border-b border-line dark:border-line-dark">
                What we build
              </div>
              <ul>
                {capabilities.map(({ label, description, icon: IconComponent }, index) => (
                  <li
                    key={label}
                    className={`flex items-center gap-4 px-4 py-5 ${
                      index !== capabilities.length - 1 ? 'border-b border-line dark:border-line-dark' : ''
                    }`}
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full border border-teal/40 dark:border-teal-bright/50 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-teal-deep dark:text-teal-bright" />
                    </span>
                    <span>
                      <span className="block font-display font-semibold text-ink dark:text-paper">{label}</span>
                      <span className="block text-sm text-muted dark:text-muted-dark">{description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
