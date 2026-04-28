import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Programme', href: '#programme' },
  { label: 'Animations', href: '#animations' },
  { label: 'Final', href: '#final' },
  { label: 'Infos pratiques', href: '#infos' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 pt-6">
      <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between border border-white/20">
        <a href="#" className="text-2xl font-semibold tracking-tight text-white">
          LA PARADE
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white hover:text-gray-300 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#inscriptions"
            className="hidden md:block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Réserver
          </a>
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden liquid-glass rounded-xl mt-2 border border-white/20 px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white hover:text-gray-300 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inscriptions"
            className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium text-center hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Réserver
          </a>
        </div>
      )}
    </div>
  )
}
