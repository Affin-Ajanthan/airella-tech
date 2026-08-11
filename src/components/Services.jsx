import { IconBrowser, IconPhone, IconCloud, IconNetwork, IconPen, IconChat } from './icons'

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices for performance and scalability.',
    icon: IconBrowser,
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
    icon: IconPhone,
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions to grow your business without infrastructure concerns.',
    icon: IconCloud,
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by AI and ML to automate processes and drive data-driven decisions.',
    icon: IconNetwork,
  },
  {
    id: 5,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces designed with your users in mind for maximum engagement.',
    icon: IconPen,
  },
  {
    id: 6,
    title: 'Consulting',
    description: 'Expert technology consulting to guide your digital transformation and optimize your tech stack.',
    icon: IconChat,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-paper-alt dark:bg-ink-alt">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-sm uppercase tracking-widest text-teal-deep dark:text-teal-bright">What we do</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-ink dark:text-paper mt-3 mb-4">Our Services</h2>
          <p className="text-xl text-muted dark:text-muted-dark max-w-2xl">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ id, title, description, icon: IconComponent }) => (
            <div
              key={id}
              className="p-8 bg-paper dark:bg-ink-card rounded-xl border border-line dark:border-line-dark hover:border-teal-deep dark:hover:border-teal-bright transition-colors"
            >
              <span className="inline-flex w-12 h-12 rounded-full border border-teal/40 dark:border-teal-bright/50 items-center justify-center mb-5">
                <IconComponent className="w-6 h-6 text-teal-deep dark:text-teal-bright" />
              </span>
              <h3 className="text-xl font-display font-semibold text-ink dark:text-paper mb-3">{title}</h3>
              <p className="text-muted dark:text-muted-dark leading-relaxed">{description}</p>
              <a
                href="#contact"
                className="mt-4 inline-block font-mono text-sm uppercase tracking-wide text-teal-deep dark:text-teal-bright hover:underline"
              >
                Get in touch →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
