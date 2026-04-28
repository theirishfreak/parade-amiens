import { MapPin, Clock, Euro, Accessibility, Car } from 'lucide-react'
import FadeIn from './FadeIn'

const infos = [
  { icon: MapPin, label: 'Lieu', value: 'Parc Saint-Pierre, Amiens (80000)' },
  { icon: Clock, label: 'Horaires', value: '14h00 → 22h30' },
  { icon: Euro, label: 'Tarif', value: 'Entrée gratuite' },
  { icon: Accessibility, label: 'Accessibilité', value: 'Site entièrement accessible PMR' },
  { icon: Car, label: 'Accès', value: 'Parking à proximité · Bus lignes 3, 7, 15' },
]

export default function InfosPratiques() {
  return (
    <section id="infos" className="bg-black py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <FadeIn fromScroll duration={700}>
          <h2
            className="text-3xl md:text-4xl font-normal text-white mb-12"
            style={{ letterSpacing: '-0.03em' }}
          >
            Infos pratiques
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn fromScroll delay={100} duration={700}>
            <div className="rounded-2xl overflow-hidden h-72 lg:h-full min-h-64 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.784!2d2.2935!3d49.8919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e77b79f9c4c3c5%3A0x5b6b6b6b6b6b6b6b!2sParc%20Saint-Pierre%2C%20Amiens!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Parc Saint-Pierre Amiens"
              />
            </div>
          </FadeIn>

          <FadeIn fromScroll delay={200} duration={700}>
            <div className="flex flex-col gap-4">
              {infos.map((info, i) => {
                const Icon = info.icon
                return (
                  <div
                    key={i}
                    className="liquid-glass border border-white/20 rounded-xl px-5 py-4 flex items-start gap-4 hover:border-white/40 transition-all duration-300"
                  >
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">{info.label}</span>
                      <p className="text-white text-sm font-medium mt-0.5">{info.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
