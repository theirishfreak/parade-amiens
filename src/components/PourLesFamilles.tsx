import FadeIn from './FadeIn'

const activities = [
  {
    emoji: '🎯',
    title: 'Tir à la Cible Western',
    description:
      'Stand de tir avec arcs ou pistolets à fléchettes sur des cibles décorées de cactus et d\'étoiles de shérif. Animateur costumé.',
  },
  {
    emoji: '🐴',
    title: 'Poney Express',
    description:
      'Mini-circuit de promenade à poney ou cheval de bois à bascule géant pour les plus petits. Photo souvenir incluse.',
  },
  {
    emoji: '🪢',
    title: 'Lasso School',
    description:
      'Atelier d\'initiation au lancer de lasso animé par un cow-boy professionnel. Défis progressifs par tranche d\'âge.',
  },
  {
    emoji: '🎨',
    title: 'Maquillage & Tatoos Western',
    description:
      'Maquillage thématique : cicatrices d\'outlaw, étoiles de shérif, peintures tribales. Tatouages éphémères.',
  },
  {
    emoji: '⭐',
    title: 'Chasse aux Pépites d\'Or',
    description:
      'Bac à sable géant avec paillettes dorées et petites pépites cachées à trouver. Chaque enfant repart avec son butin.',
  },
  {
    emoji: '📸',
    title: 'Photobooth Saloon',
    description:
      'Décor façade de saloon en bois, accessoires (chapeaux, revolver, étoile) pour des photos souvenirs mémorables.',
  },
]

export default function PourLesFamilles() {
  return (
    <section
      id="animations"
      className="py-24 px-6 md:px-12 lg:px-16"
      style={{ background: 'linear-gradient(to bottom, #0a0800 0%, #050400 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn fromScroll duration={700}>
          <span
            className="text-xs uppercase tracking-[0.25em] font-medium"
            style={{ color: 'hsl(38 80% 60%)' }}
          >
            Activités Annexes · Journée Enfants
          </span>
          <h2
            className="text-3xl md:text-5xl font-normal text-white mt-3 mb-4 leading-tight"
            style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-0.03em' }}
          >
            Accessibles toute la journée.
          </h2>
          <p className="text-base leading-relaxed mb-14 max-w-xl" style={{ color: 'hsl(240 4% 60%)' }}>
            En marge du programme principal — des animations en accès libre pour petits cow-boys et shérifs en herbe.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {activities.map((a, i) => (
            <FadeIn key={i} fromScroll delay={i * 80} duration={600}>
              <div className="liquid-glass rounded-xl p-6 border border-white/10 hover:border-white/25 transition-all duration-300 hover:scale-[1.02] h-full flex flex-col gap-3">
                <span className="text-2xl leading-none">{a.emoji}</span>
                <h3 className="text-sm font-semibold text-white">{a.title}</h3>
                <p className="text-xs leading-relaxed flex-1" style={{ color: 'hsl(240 4% 55%)' }}>
                  {a.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
