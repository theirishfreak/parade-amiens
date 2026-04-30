import FadeIn from './FadeIn'

const partII = [
  {
    time: '18h30',
    label: 'ARRIVÉE',
    emoji: '🥃',
    title: 'L\'Apéro au Saloon',
    description:
      'Accueil des participants costumés dans une atmosphère saloon : bar en bois brut, lumières chaudes, musique western acoustique. Cocktails thématiques : "Whiskey Sunset", "Outlaw Punch", "Snake Venom". Inscription au concours de costume.',
    tags: ['Cocktails Western', 'Accueil', 'Inscription Concours'],
  },
  {
    time: '19h30',
    label: 'DÉFILÉ',
    emoji: '🌟',
    title: 'Le Grand Défilé des Adultes',
    description:
      'Chaque participant défile sur un tapis façon western devant le jury et le public. Un animateur présente chaque costume avec humour. Ambiance musicale live : guitariste ou groupe acoustique country.',
    tags: ['Défilé Officiel', 'Jury Secret', 'Live Acoustique'],
  },
  {
    time: '20h30',
    label: 'DÎNER',
    emoji: '🍽️',
    title: 'Le Dîner du Cattle Drive',
    description:
      'Dîner assis en plein air sous guirlandes et lampions. Tables en bois massif façon ranch. Côtes de bœuf BBQ, chili con carne, cornbread, baked potatoes, brownie caramel salé. Bière artisanale locale et limonade maison.',
    tags: ['Dîner Assis', 'BBQ Far West', 'Brasserie Locale'],
  },
  {
    time: '22h00',
    label: 'CONCERT',
    emoji: '🎵',
    title: 'Grand Concert Far West',
    description:
      'Un groupe country-rock ou americana sur scène pour une heure trente de concert. Classiques (Johnny Cash, Eagles, Creedence) et morceaux dansants. Dancefloor ouvert, initiation à la line dance en début de set.',
    tags: ['Concert Live', 'Country-Rock', 'Line Dance', 'Dancefloor'],
  },
  {
    time: '23h30',
    label: 'CÉRÉMONIE',
    emoji: '🏆',
    title: 'Révélation du Meilleur Costume Adulte',
    description:
      'Les 3 finalistes remontent sur scène. L\'animateur ouvre l\'enveloppe. Tonnerre d\'applaudissements, confettis dorés. Trophée sculpté, bouteille de whiskey gravée, bon de voyage, entrées pour l\'édition suivante.',
    tags: ['Cérémonie', 'Lots Premium', 'Confettis'],
  },
]

const adultActivities = [
  {
    emoji: '♠️',
    title: 'Poker du Sheriff',
    description:
      'Tables de poker Far West avec jetons à l\'effigie de l\'événement. Partie amicale, pas d\'argent réel — le gagnant remporte un lot.',
  },
  {
    emoji: '🎯',
    title: 'Tir au Tonneau',
    description:
      'Tir à la carabine factice ou fléchettes sur des tonneaux et bouteilles décoratives. Classement affiché en temps réel.',
  },
  {
    emoji: '🤠',
    title: 'Rodéo Mécanique',
    description:
      'Taureau mécanique gonflable pour les téméraires. Chrono affiché, classement des meilleurs temps de la soirée.',
  },
  {
    emoji: '💃',
    title: 'Initiation Line Dance',
    description:
      'Atelier en début de soirée animé par un danseur country. Chorégraphie simple en 20 minutes, puis dansée collectivement.',
  },
  {
    emoji: '📸',
    title: 'Photobooth Nocturne',
    description:
      'Décors western illuminés, accessoires premium (chapeau Stetson authentique, poncho, revolver). Impression sur place.',
  },
  {
    emoji: '🥃',
    title: 'Bar à Whiskey & Cocktails',
    description:
      'Dégustation de whiskies et bourbons, cocktails signature de l\'événement, mocktails pour les non-alcoolisés.',
  },
]

export default function LeSoir() {
  return (
    <section
      id="soiree"
      className="py-24 px-6 md:px-12 lg:px-16"
      style={{ background: 'linear-gradient(to bottom, #050400 0%, #0a0600 50%, #000 100%)' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Part II header */}
        <FadeIn fromScroll duration={600}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <span
              className="text-xs uppercase tracking-[0.3em] font-medium px-4"
              style={{ color: 'hsl(38 80% 60%)' }}
            >
              Partie II · 🌙 La Soirée des Adultes
            </span>
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
          </div>
          <p className="text-xs text-center mb-10" style={{ color: 'hsl(240 4% 50%)' }}>
            Apéro · Défilé · Repas · Concert · Cérémonie · Lanternes
          </p>
        </FadeIn>

        {/* Part II schedule */}
        <div className="flex flex-col gap-4 mb-20">
          {partII.map((event, i) => (
            <FadeIn key={i} fromScroll delay={i * 80} duration={600}>
              <div className="liquid-glass rounded-xl px-6 py-5 border border-white/10 hover:border-white/25 transition-all duration-300 hover:scale-[1.01]">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-0.5 w-14">
                    <span className="text-xl leading-none">{event.emoji}</span>
                    <span className="text-sm font-semibold text-white leading-none mt-1">{event.time}</span>
                    <span
                      className="text-[9px] uppercase tracking-wider text-center leading-tight mt-0.5"
                      style={{ color: 'hsl(38 80% 55%)' }}
                    >
                      {event.label}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white mb-1">{event.title}</h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: 'hsl(240 4% 60%)' }}>
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border"
                          style={{
                            color: 'hsl(38 80% 60%)',
                            borderColor: 'hsl(38 80% 20%)',
                            background: 'hsl(38 80% 8%)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Adult activities */}
        <FadeIn fromScroll duration={700}>
          <span
            className="text-xs uppercase tracking-[0.25em] font-medium"
            style={{ color: 'hsl(38 80% 60%)' }}
          >
            Activités Annexes · Soirée Adultes
          </span>
          <h3
            className="text-2xl md:text-3xl font-normal text-white mt-3 mb-4"
            style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-0.02em' }}
          >
            Pendant l'apéro, le repas et les temps libres.
          </h3>
          <p className="text-sm leading-relaxed mb-10" style={{ color: 'hsl(240 4% 60%)' }}>
            Six animations à disposition tout au long de la soirée.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {adultActivities.map((a, i) => (
            <FadeIn key={i} fromScroll delay={i * 70} duration={600}>
              <div className="liquid-glass rounded-xl p-6 border border-white/10 hover:border-white/25 transition-all duration-300 hover:scale-[1.02] h-full flex flex-col gap-3">
                <span className="text-2xl leading-none">{a.emoji}</span>
                <h4 className="text-sm font-semibold text-white">{a.title}</h4>
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
