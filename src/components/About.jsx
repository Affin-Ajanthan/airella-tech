import { IconCode, IconNetwork, IconCloud, IconPen } from './icons'

const capabilities = [
  { label: 'Software', icon: IconCode },
  { label: 'AI & ML', icon: IconNetwork },
  { label: 'Cloud', icon: IconCloud },
  { label: 'Design', icon: IconPen },
]

const points = [
  'Engineers, AI/ML specialists, cloud architects and designers under one roof',
  'Solutions scoped around your business objectives, not just the tech',
  'Direct, hands-on collaboration from first call to launch',
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-paper dark:bg-ink-deep">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="font-mono text-sm uppercase tracking-widest text-teal-deep dark:text-teal-bright">Who we are</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-ink dark:text-paper mt-3 mb-6">About Airella Tech</h2>
            <p className="text-lg text-muted dark:text-muted-dark mb-4 leading-relaxed">
              Airella Tech is a software, AI, ML and cloud solutions company at the forefront of digital innovation. We specialize in building custom applications, intelligent machine-learning systems, scalable cloud infrastructure, and modern designs that empower businesses to achieve their goals.
            </p>
            <p className="text-lg text-muted dark:text-muted-dark mb-6 leading-relaxed">
              Our team of experienced software engineers, AI/ML specialists, cloud architects, and designers work collaboratively with clients to create solutions that are not just technically sound, but also aligned with business objectives.
            </p>
            <ul className="space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-teal/15 dark:bg-teal-bright/15 border border-teal/40 dark:border-teal-bright/50 flex items-center justify-center">
                    <svg className="w-3 h-3 text-teal-deep dark:text-teal-bright" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-ink dark:text-paper">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {capabilities.map(({ label, icon: IconComponent }) => (
              <div
                key={label}
                className="bg-paper-alt dark:bg-ink-card border border-line dark:border-line-dark p-6 rounded-xl text-center"
              >
                <span className="inline-flex w-10 h-10 rounded-full border border-teal/40 dark:border-teal-bright/50 items-center justify-center mb-3">
                  <IconComponent className="w-5 h-5 text-teal-deep dark:text-teal-bright" />
                </span>
                <div className="text-ink dark:text-paper font-display font-semibold text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-paper-alt dark:bg-ink-card border border-line dark:border-line-dark rounded-xl p-8 md:p-12">
          <span className="font-mono text-sm uppercase tracking-widest text-teal-deep dark:text-teal-bright">Our Mission</span>
          <h3 className="text-3xl font-semibold text-ink dark:text-paper mt-3 mb-6">Built for the long term</h3>
          <p className="text-lg text-muted dark:text-muted-dark leading-relaxed">
            To empower businesses through innovative technology solutions that drive growth, efficiency, and success. We believe in building long-term partnerships with our clients, understanding their unique challenges, and delivering solutions that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  )
}
