const muted = 'hsl(240 4% 66%)'

export default function VelorahHero() {
  return (
    <section className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-40">
      <p
        className="text-xs uppercase tracking-[0.3em] mb-6 animate-fade-rise"
        style={{ color: muted }}
      >
        Parc Saint-Pierre · Amiens · Édition Annuelle
      </p>

      <h1
        className="text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] max-w-5xl animate-fade-rise"
        style={{
          fontFamily: "'Instrument Serif', serif",
          letterSpacing: '-2.46px',
        }}
      >
        Là où les{' '}
        <em className="not-italic" style={{ color: muted }}>
          légendes
        </em>{' '}
        naissent sous les{' '}
        <em className="not-italic" style={{ color: muted }}>
          étoiles.
        </em>
      </h1>

      <p
        className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay"
        style={{ color: muted }}
      >
        Chaque année, le Parc Saint-Pierre se transforme en territoire Far West.
        Défilé, concert country, dîner sous les guirlandes, et lanternes sur les Hortillonnages —
        une journée qui devient légende.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mt-12 animate-fade-rise-delay-2">
        <a
          href="#programme"
          className="liquid-glass rounded-full px-12 py-4 text-base text-white hover:scale-[1.03] cursor-pointer transition-transform"
        >
          Découvrir le programme
        </a>
        <a
          href="#inscriptions"
          className="liquid-glass rounded-full px-12 py-4 text-base hover:scale-[1.03] cursor-pointer transition-transform"
          style={{ color: muted }}
        >
          S'inscrire
        </a>
      </div>
    </section>
  )
}
