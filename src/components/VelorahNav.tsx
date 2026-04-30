import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Programme', href: '#programme' },
  { label: 'Journée', href: '#journee' },
  { label: 'Soirée', href: '#soiree' },
  { label: 'Lanternes', href: '#lanternes' },
  { label: 'Infos', href: '#infos' },
]

const muted = 'hsl(240 4% 66%)'
const white = 'hsl(0 0% 100%)'

export default function VelorahNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative z-10 w-full">
      <div className="flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <a
          href="#"
          className="text-2xl tracking-tight text-white select-none"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Amiens Far West<sup className="text-xs">™</sup>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: muted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = white)}
                onMouseLeave={(e) => (e.currentTarget.style.color = muted)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#inscriptions"
            className="hidden md:block liquid-glass rounded-full px-6 py-2.5 text-sm text-white transition-transform hover:scale-[1.03] cursor-pointer"
          >
            S'inscrire
          </a>
          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden liquid-glass mx-4 rounded-xl border border-white/10 px-6 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inscriptions"
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white text-center"
            onClick={() => setOpen(false)}
          >
            S'inscrire
          </a>
        </div>
      )}
    </nav>
  )
}
