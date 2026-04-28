import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import FadeIn from './FadeIn'

const faqs = [
  {
    question: 'À partir de quel âge mon enfant peut participer au défilé ?',
    answer:
      'Le défilé est ouvert à tous les enfants dès l\'âge de 3 ans. Les enfants de moins de 8 ans doivent être accompagnés d\'un adulte sur le tapis rouge. Il n\'y a pas de limite d\'âge supérieure.',
  },
  {
    question: 'Comment s\'inscrire au défilé ?',
    answer:
      'L\'inscription se fait en ligne via le formulaire disponible sur cette page (bouton "Inscrire mon enfant au défilé"). Vous devrez choisir une catégorie (Individuel, Duo, Famille ou Groupe/école) et préciser le costume prévu. Les inscriptions ferment le 1er juin.',
  },
  {
    question: 'Que faire en cas de pluie ?',
    answer:
      'L\'événement se maintient par temps de pluie légère. En cas de météo défavorable sévère, certaines activités extérieures seront déplacées sous les chapiteaux prévus à cet effet. Le feu d\'artifice peut être décalé d\'une heure maximum. Les décisions sont communiquées en temps réel via nos réseaux sociaux.',
  },
  {
    question: 'Le feu d\'artifice est-il bruyant ?',
    answer:
      'Non — nous avons spécifiquement sélectionné un feu d\'artifice "faible bruit" (décibels réduits de 60 % par rapport à un feu classique). Il est conçu pour être apprécié par les jeunes enfants, les personnes sensibles au bruit et les animaux présents aux alentours du parc.',
  },
  {
    question: 'Où se garer ?',
    answer:
      'Le parking de la Hotoie (gratuit le soir) se trouve à 5 minutes à pied du parc. Le parking du Centre Hospitalier est également accessible. Nous encourageons fortement l\'utilisation des transports en commun : bus lignes 3, 7 et 15 — arrêt "Parc Saint-Pierre".',
  },
]

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <FadeIn fromScroll delay={index * 80} duration={600}>
      <div className="border-b border-white/10">
        <button
          className="w-full flex items-center justify-between py-5 text-left gap-4 group"
          onClick={() => setOpen(v => !v)}
        >
          <span className="text-sm md:text-base font-medium text-white group-hover:text-gray-300 transition-colors duration-200">
            {question}
          </span>
          <ChevronDown
            size={18}
            className="text-gray-400 flex-shrink-0 transition-transform duration-300"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </button>
        <div
          className="overflow-hidden transition-all duration-400 ease-in-out"
          style={{ maxHeight: open ? '300px' : '0', opacity: open ? 1 : 0, transition: 'max-height 350ms ease, opacity 300ms ease' }}
        >
          <p className="text-sm text-gray-400 leading-relaxed pb-5">{answer}</p>
        </div>
      </div>
    </FadeIn>
  )
}

export default function FAQ() {
  return (
    <section className="bg-black py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <FadeIn fromScroll duration={700}>
          <h2
            className="text-3xl md:text-4xl font-normal text-white mb-12"
            style={{ letterSpacing: '-0.03em' }}
          >
            Questions fréquentes
          </h2>
        </FadeIn>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
