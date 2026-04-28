import { Lamp, Music2, Volume1 } from 'lucide-react'
import FadeIn from './FadeIn'

const miniCards = [
  {
    icon: Lamp,
    title: 'Lanternes LED écoresponsables',
    description: 'Fabriquées par les enfants dans la journée, déposées sur l\'eau à la tombée de la nuit.',
  },
  {
    icon: Music2,
    title: 'Musique live & ambiance feutrée',
    description: 'Un trio acoustique joue en douceur pendant le pique-nique et les lanternes.',
  },
  {
    icon: Volume1,
    title: 'Feu d\'artifice faible bruit',
    description: 'Spécialement choisi pour respecter les enfants, les animaux et la sérénité du parc.',
  },
]

export default function LeSoir() {
  return (
    <section
      id="final"
      className="py-24 px-6 md:px-12 lg:px-16"
      style={{ background: 'linear-gradient(to bottom, #000000 0%, #1a1200 60%, #0d0800 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn fromScroll duration={700}>
          <span className="text-sm font-medium text-amber-400/80 uppercase tracking-widest">Le soir, la magie</span>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 mb-16 items-center">
          <FadeIn fromScroll delay={100} duration={700}>
            <div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-6"
                style={{ letterSpacing: '-0.03em' }}
              >
                Quand la nuit tombe, Amiens brille.
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                À mesure que le soleil se couche sur le lac du Parc Saint-Pierre, le site se transforme.
                Les lumières s'éteignent doucement et les lanternes prennent le relais — portées par les mains
                des enfants jusqu'à la surface de l'eau.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Un feu d'artifice silencieux et écoresponsable clôture la soirée dans un ballet de couleurs
                pastel reflétées sur le lac miroir de lumière. Un moment suspendu, entre rêve et réalité.
              </p>
            </div>
          </FadeIn>

          <FadeIn fromScroll delay={200} duration={700}>
            <div className="flex items-center justify-center lg:justify-end">
              <blockquote className="liquid-glass border border-amber-500/20 rounded-2xl px-8 py-8 max-w-sm">
                <p
                  className="text-xl md:text-2xl font-light text-white leading-snug"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  "Ce soir, Amiens s'illumine grâce à ses enfants."
                </p>
                <footer className="mt-4 text-sm text-amber-400/60">— La Parade d'Amiens, 15 juin</footer>
              </blockquote>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {miniCards.map((card, i) => {
            const Icon = card.icon
            return (
              <FadeIn key={i} fromScroll delay={i * 100} duration={600}>
                <div className="liquid-glass border border-amber-500/10 rounded-xl px-6 py-5 hover:border-amber-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <Icon size={20} className="text-amber-400/80 mb-3" />
                  <h3 className="text-sm font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{card.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
