'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'
import { personalData } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Post', href: '/post' },
]

function isActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <nav
          className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 h-14 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity duration-150"
            aria-label={`${personalData.name} | Home`}
          >
            {personalData.name}
          </Link>

          {/* Desktop Nav */}
          <ul className="max-md:hidden md:flex items-center gap-8" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm transition-colors duration-150 relative',
                    'after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-foreground',
                    'after:transition-all after:duration-150',
                    isActive(item.href, pathname)
                      ? 'font-semibold after:w-full'
                      : 'font-normal text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full',
                  )}
                  aria-current={isActive(item.href, pathname) ? 'page' : undefined}
                >
                  {item.label === 'Home' ? t.nav.home : item.label === 'Projects' ? t.nav.projects : item.label === 'About' ? t.nav.about : item.label === 'Achievements' ? t.nav.achievements : item.label === 'Post' ? t.nav.blog : item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right side: language toggle + theme toggle + CTA */}
          <div className="max-md:hidden md:flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="h-9 px-3 border border-border text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors duration-150 shrink-0"
              aria-label="Toggle language"
            >
              {language === 'id' ? 'EN' : 'ID'}
            </button>
            <ThemeToggle />
            {/* <Link
              href={personalData.contact.emailUrl}
              className="inline-flex items-center gap-2 text-sm font-medium bg-foreground text-background border border-border px-4 py-2 hover:bg-background hover:text-foreground transition-colors duration-150"
            >
              {t.nav.getInTouch}
            </Link> */}
          </div>

          {/* Mobile right side: language toggle + theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2 relative z-50">
            <button
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="h-9 px-2 border border-border text-xs font-medium text-foreground hover:bg-foreground hover:text-background transition-colors duration-150 shrink-0"
              aria-label="Toggle language"
            >
              {language === 'id' ? 'EN' : 'ID'}
            </button>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="-mr-1 p-2 text-foreground hover:opacity-60 transition-opacity"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Spacer so content doesn't go under fixed navbar */}
      <div className="h-14 pointer-events-none" aria-hidden="true" />

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background flex flex-col pt-14"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col border-t border-border">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-6 py-5 text-2xl font-bold tracking-tight border-b border-border',
                  'transition-colors duration-150',
                  isActive(item.href, pathname)
                    ? 'bg-foreground text-background'
                    : 'hover:bg-foreground hover:text-background',
                )}
                aria-current={isActive(item.href, pathname) ? 'page' : undefined}
              >
                <span className="text-xs font-mono mr-4 opacity-40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.label === 'Home' ? t.nav.home : item.label === 'Projects' ? t.nav.projects : item.label === 'About' ? t.nav.about : item.label === 'Achievements' ? t.nav.achievements : item.label === 'Post' ? t.nav.blog : item.label}
              </Link>
            ))}
            <a
              href={personalData.contact.emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-5 text-2xl font-bold tracking-tight border-b border-border hover:bg-foreground hover:text-background transition-colors duration-150 block"
            >
              <span className="text-xs font-mono mr-4 opacity-40">05</span>
              {t.nav.getInTouch}
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
