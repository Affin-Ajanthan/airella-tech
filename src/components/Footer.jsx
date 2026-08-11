import logo from '../assets/wesbite_logo.png'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const serviceLinks = ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Consulting']

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink-deep text-muted-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-paper rounded-md p-1 flex-shrink-0">
                <img src={logo} alt="Airella Tech" className="w-8 h-auto rounded-sm block" />
              </span>
              <span className="font-display text-lg font-semibold text-paper">Airella</span>
            </div>
            <p className="text-sm leading-relaxed">Transforming businesses through innovative technology solutions.</p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-paper mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-teal transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-paper mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#services" className="hover:text-teal transition-colors text-sm">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-paper mb-4">Email</h4>
            <a href="mailto:hr@airella.org" className="hover:text-teal transition-colors text-sm break-all leading-relaxed">
              hr@airella.org
            </a>
          </div>
        </div>

        <div className="border-t border-line-dark py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs">&copy; {currentYear} Airella Tech. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-teal transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="hover:text-teal transition-colors text-sm">Terms of Service</a>
              <a href="#" className="hover:text-teal transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
