import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = ['Programme', 'Inscriptions', 'Mentions légales', 'Contact']

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 md:px-12 lg:px-16 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo + tagline */}
          <div>
            <span className="text-2xl font-semibold tracking-tight text-white block mb-3">
              LA PARADE
            </span>
            <p className="text-sm text-gray-500 leading-relaxed">
              Une parade pour Amiens, par Amiens.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-all duration-200"
                aria-label="Twitter / X"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-gray-600">
            © 2025 Ville d'Amiens — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}
