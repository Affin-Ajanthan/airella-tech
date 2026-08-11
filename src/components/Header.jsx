import { useEffect, useState } from 'react'
import logo from '../assets/wesbite_logo.png'
import { IconSun, IconMoon } from './icons'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <header className="sticky top-0 z-50 bg-paper/95 dark:bg-ink-deep/95 backdrop-blur-sm border-b border-line dark:border-line-dark">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="bg-paper rounded-md p-1 flex-shrink-0">
              <img src={logo} alt="Airella Tech" className="w-9 h-auto rounded-sm block" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-ink dark:text-paper">
              Airella Tech
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-muted dark:text-muted-dark hover:text-teal-deep dark:hover:text-teal-bright transition-colors"
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? <IconSun className="w-5 h-5" /> : <IconMoon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-ink dark:text-paper"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-wide">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted dark:text-muted-dark hover:text-teal-deep dark:hover:text-teal-bright transition-colors border-b border-transparent hover:border-teal-deep dark:hover:border-teal-bright pb-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 font-mono text-sm uppercase tracking-wide">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-muted dark:text-muted-dark hover:text-teal-deep dark:hover:text-teal-bright transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
