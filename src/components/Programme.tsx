import FadeIn from './FadeIn'

const partI = [
  {
    time: '10h00',
    label: 'MATIN',
    emoji: '🎺',
    title: 'Le Grand Défilé des Petits Cow-boys',
    description:
      'Les enfants des écoles partenaires arrivent en cortège costumés en cow-boys, shérifs, outlaws, Natives, danseuses de saloon… Chaque école forme sa propre troupe avec bannière et accompagnateur. Le défilé traverse les allées du parc au son d\'une fanfare western.',
    tags: ['Défilé Officiel', 'Écoles Partenaires', 'Costumes'],
  },
  {
    time: '12h00',
    label: 'MIDI',
    emoji: '🍖',
    title: 'Le Repas du Ranch',
    description:
      'Repas thématique en plein air sur grandes tables en bois façon saloon. Hot-dogs Cow-boy, brochettes, maïs grillé, haricots tex-mex, sodas et limonades. Des food trucks décorés en diligences complètent l\'offre pour les familles.',
    tags: ['Repas Thématique', 'Food Trucks', 'En Plein Air'],
  },
  {
    time: '14h00',
    label: 'APRÈS-MIDI',
    emoji: '🎸',
    title: 'Concert Far West Junior',
    description:
      'Concert vivant de musique country & western pour les enfants : groupe ou DJ jouant des morceaux festifs et dansants. En parallèle, le jury procède à la pré-sélection des meilleurs costumes parmi tous les participants du défilé.',
    tags: ['Concert Live', 'Country & Western', 'Danse'],
  },
  {
    time: '15h30',
    label: 'CLÔTURE JOURNÉE',
    emoji: '🏆',
    title: 'Révélation du Meilleur Costume Enfant',
    description:
      'Les 5 finalistes défilent à nouveau sur scène. Le public vote à main levée ou via QR code. Le vainqueur est sacré "Shérif d\'Amiens" avec un badge étoile officiel. Trophées, bons cadeaux et diplômes pour tous les participants.',
    tags: ['Vote Public', 'Lots Enfants', 'Cérémonie'],
  },
]

export default function Programme() {
  return (
    <section
      id="programme"
      className="py-24 px-6 md:px-12 lg:px-16"
      style={{ background: 'linear-gradient(to bottom, #000 0%, #0a0800 100%)' }}
    >
      <div className="max-w-3xl mx-auto">
        <FadeIn fromScroll duration={700}>
          <div className="mb-4">
            <span
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: 'hsl(38 80% 60%)' }}
            >
              🤠 Thème · Far West · Chaque Année
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-normal text-white mb-4 leading-tight"
            style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-0.03em' }}
          >
            Plan de l'Événement
          </h2>
          <p className="text-base leading-relaxed mb-16" style={{ color: 'hsl(240 4% 66%)' }}>
            📍 Parc Saint-Pierre — Amiens
          </p>
        </FadeIn>

        {/* Part I header */}
        <FadeIn fromScroll duration={600}>
          <div className="flex items-center gap-4 mb-8">
            <div
              className="h-px flex-1"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            />
            <span
              className="text-xs uppercase tracking-[0.3em] font-medium px-4"
              style={{ color: 'hsl(38 80% 60%)' }}
            >
              Partie I · 🌞 La Journée des Enfants
            </span>
            <div
              className="h-px flex-1"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            />
          </div>
          <p className="text-xs text-center mb-10" style={{ color: 'hsl(240 4% 50%)' }}>
            En collaboration avec les écoles d'Amiens · Défilé · Goûter · Fête
          </p>
        </FadeIn>

        <div className="flex flex-col gap-4 mb-20" id="journee">
          {partI.map((event, i) => (
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
      </div>
    </section>
  )
}
