export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-paper-alt dark:bg-ink-alt">
      <div className="max-w-2xl mx-auto text-center">
        <span className="font-mono text-sm uppercase tracking-widest text-teal-deep dark:text-teal-bright">Let's talk</span>
        <h2 className="text-4xl md:text-5xl font-semibold text-ink dark:text-paper mt-3 mb-4">Get In Touch</h2>
        <p className="text-xl text-muted dark:text-muted-dark mb-12">Have a project in mind? Let's talk about it</p>

        <a
          href="mailto:hr@airella.org"
          className="inline-flex items-center gap-4 px-6 py-4 rounded-xl border border-line dark:border-line-dark hover:border-teal-deep dark:hover:border-teal-bright transition-colors"
        >
          <span className="w-12 h-12 rounded-lg border border-teal/40 dark:border-teal-bright/50 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-teal-deep dark:text-teal-bright" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </span>
          <span className="font-display text-2xl font-semibold text-ink dark:text-paper">hr@airella.org</span>
        </a>
      </div>
    </section>
  )
}
