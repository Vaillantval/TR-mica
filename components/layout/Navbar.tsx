'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/expertises', label: 'Expertises' },
  { href: '/methodologie', label: 'Méthodologie' },
  { href: '/partenariats', label: 'Partenariats' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'border-b border-gray-border'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.jpeg"
            alt="MICA Consulting logo"
            width={70}
            height={70}
            className="rounded-full object-cover"
            priority
          />
          <div className="hidden sm:block">
            <span className="font-bold text-gray-dark text-sm tracking-widest uppercase">
              MICA Consulting
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors hover:text-primary ${
                pathname === link.href
                  ? 'text-primary'
                  : 'text-gray-medium hover:bg-gray-light'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="bg-primary text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            Nous contacter
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded text-gray-dark hover:bg-gray-light transition-colors"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-border">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-3 text-sm font-medium rounded transition-colors ${
                  pathname === link.href
                    ? 'text-primary bg-red-50'
                    : 'text-gray-dark hover:bg-gray-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-border">
              <Link
                href="/contact"
                className="block bg-primary text-white px-4 py-3 rounded text-sm font-semibold text-center hover:bg-primary-dark transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
