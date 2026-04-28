import { DoorOpen, Palette, Trophy, Vote, UtensilsCrossed, Lamp, Sparkles } from 'lucide-react'
import FadeIn from './FadeIn'

const events = [
  {
    time: '14h00',
    icon: DoorOpen,
    title: 'Ouverture du site',
    description: 'Accueil des familles, distribution des bracelets enfants, ouverture des food trucks et ambiance musicale.',
  },
  {
    time: '14h – 18h',
    icon: Palette,
    title: 'Village d\'animations',
    description: 'Peinture faciale, fresque "Couleurs & Rêves", création d\'accessoires, lanternes LED, pêche aux canards, trampoline, espace photo.',
  },
  {
    time: '15h00',
    icon: Trophy,
    title: 'Grand défilé',
    description: 'Catégories Individuel, Duo, Famille, Groupe/école — passage sur tapis, présentation de 30 secondes, jury et photos.',
  },
  {
    time: '18h00',
    icon: Vote,
    title: 'Vote du public',
    description: 'Via QR code, 4 catégories de vote. Résultats proclamés à 20h30.',
  },
  {
    time: '19h00',
    icon: UtensilsCrossed,
    title: 'Pique-nique familial',
    description: 'Installation sur les pelouses du parc avec musique live douce en fond sonore.',
  },
  {
    time: '21h00',
    icon: Lamp,
    title: 'Lanternes sur l\'eau',
    description: 'Les enfants déposent leurs lanternes LED sur le lac du Parc Saint-Pierre. Un moment de magie collective.',
  },
  {
    time: '22h00',
    icon: Sparkles,
    title: 'Feu d\'artifice final',
    description: 'Bouquet final en couleurs pastel, faible niveau sonore — conçu pour tous, même les plus jeunes et les animaux.',
  },
]

export default function Programme() {
  return (
    <section
      id="programme"
      className="bg-black py-24 px-6 md:px-12 lg:px-16"
      style={{ background: 'linear-gradient(to bottom, #000000, #111111)' }}
    >
      <FadeIn fromScroll duration={700}>
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4" style={{ letterSpacing: '-0.03em' }}>
            Une journée, deux ambiances.
          </h2>
          <p className="text-gray-300 text-lg">
            Pour les familles le jour, magique pour tous le soir.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {events.map((event, i) => {
          const Icon = event.icon
          return (
            <FadeIn key={i} fromScroll delay={i * 80} duration={600}>
              <div
                className="liquid-glass border border-white/20 rounded-xl px-6 py-5 flex gap-5 items-start hover:border-white/40 transition-all duration-300 hover:scale-[1.02] cursor-default"
              >
                <div className="flex-shrink-0 mt-1">
                  <Icon size={22} className="text-gray-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-4 mb-1 flex-wrap">
                    <span className="text-xl font-semibold text-white">{event.time}</span>
                    <span className="text-base font-medium text-gray-200">{event.title}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
