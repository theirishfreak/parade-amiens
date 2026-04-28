import AnimatedHeading from './AnimatedHeading'
import FadeIn from './FadeIn'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
        alt="Parc Saint-Pierre Amiens"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative flex flex-col flex-1 px-6 md:px-12 lg:px-16 pt-36 pb-12 lg:pb-16 lg:grid lg:grid-cols-2 lg:items-end">
        {/* Left column */}
        <div>
          <AnimatedHeading
            text={"Quand la ville\ns'illumine pour ses enfants."}
            initialDelay={200}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 text-white"
          />

          <FadeIn delay={800} duration={1000}>
            <p className="text-base md:text-lg text-gray-300 mb-5 max-w-xl">
              Le 15 juin au Parc Saint-Pierre — défilé, ateliers, lanternes sur l'eau et feu d'artifice.
            </p>
          </FadeIn>

          <FadeIn delay={1200} duration={1000}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#programme"
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Voir le programme
              </a>
              <a
                href="#inscriptions"
                className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                Inscrire mon enfant
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right column */}
        <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end mt-10 lg:mt-0">
          <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
            <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
              14h → 22h30 · Parc Saint-Pierre
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
