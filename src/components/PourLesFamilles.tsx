import { Paintbrush2, Gamepad2, ShieldCheck } from 'lucide-react'
import FadeIn from './FadeIn'

const cards = [
  {
    icon: Paintbrush2,
    title: 'Ateliers créatifs',
    description:
      'Peinture faciale, création d\'accessoires de défilé et fresque collective "Couleurs & Rêves". Des souvenirs plein les mains et plein le cœur.',
    detail: 'Dès 3 ans · Gratuit',
  },
  {
    icon: Gamepad2,
    title: 'Jeux & activités',
    description:
      'Trampoline, pêche aux canards, parcours d\'obstacles, espace photo… Des heures d\'amusement pour petits et grands.',
    detail: 'Dès 2 ans · Surveillé',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité enfants',
    description:
      'Bracelets d\'identification personnalisés à l\'entrée, espaces dédiés aux enfants, poste de premiers secours et personnel formé.',
    detail: 'Tout au long de la journée',
  },
]

export default function PourLesFamilles() {
  return (
    <section id="animations" className="bg-white py-24 px-6 md:px-12 lg:px-16">
      <FadeIn fromScroll duration={700}>
        <div className="max-w-5xl mx-auto mb-16">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Pour les familles</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mt-3 mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Une journée pensée pour vos enfants.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Activités, animations et sécurité — tout est prévu pour que la journée soit inoubliable.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {cards.map((card, i) => {
          const Icon = card.icon
          return (
            <FadeIn key={i} fromScroll delay={i * 120} duration={600}>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 h-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{card.description}</p>
                  <span className="text-xs font-medium text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                    {card.detail}
                  </span>
                </div>
              </div>
            </FadeIn>
          )
        })}
      </div>

      <FadeIn fromScroll delay={200} duration={700}>
        <div id="inscriptions" className="max-w-5xl mx-auto flex justify-center">
          <a
            href="#inscriptions"
            className="bg-gray-900 text-white px-10 py-4 rounded-xl font-medium text-base hover:bg-gray-700 transition-colors duration-200"
          >
            Inscrire mon enfant au défilé
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
