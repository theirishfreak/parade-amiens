import FadeIn from './FadeIn'

export default function Lanternes() {
  return (
    <section
      id="lanternes"
      className="py-32 px-6 md:px-12 lg:px-16 text-center"
      style={{ background: 'linear-gradient(to bottom, #000 0%, #0d0600 50%, #000 100%)' }}
    >
      <div className="max-w-3xl mx-auto">
        <FadeIn fromScroll duration={700}>
          <p
            className="text-xs uppercase tracking-[0.3em] mb-6"
            style={{ color: 'hsl(38 80% 60%)' }}
          >
            Le Clou du Spectacle
          </p>

          <div className="flex justify-center gap-3 text-3xl mb-8">
            <span>🏮</span>
            <span>🏮</span>
            <span>🏮</span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-normal text-white mb-8 leading-tight"
            style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-0.04em' }}
          >
            Minuit —{' '}
            <span style={{ color: 'hsl(38 80% 65%)' }}>Les Lanternes</span>
            {' '}sur l'Eau
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'hsl(240 4% 62%)' }}>
            Pour clore cette soirée magique, chaque participant reçoit une lanterne flottante illuminée
            aux couleurs Far West — rouge, or, orange. Dans le silence retrouvé, au bord des étangs
            du Parc Saint-Pierre, tous les convives posent simultanément leur lanterne sur l'eau.
          </p>

          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'hsl(240 4% 62%)' }}>
            Une rivière de lumière prend vie dans l'obscurité, reflétée sur les Hortillonnages.
            Un moment de communion et d'émerveillement qui deviendra la{' '}
            <span className="text-white font-medium">signature visuelle de chaque édition.</span>
          </p>
        </FadeIn>

        <FadeIn fromScroll delay={200} duration={800}>
          <div
            className="liquid-glass rounded-2xl px-8 py-8 mt-16 border"
            style={{ borderColor: 'hsl(38 80% 15%)' }}
          >
            <p
              className="text-xl md:text-2xl font-light text-white leading-snug"
              style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-0.02em' }}
            >
              "Un événement conçu pour durer —<br />même thème, même magie, chaque année."
            </p>
            <footer className="mt-4 text-sm" style={{ color: 'hsl(38 80% 50%)' }}>
              — Amiens Far West · Parc Saint-Pierre, Amiens
            </footer>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
