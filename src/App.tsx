import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programme from './components/Programme'
import PourLesFamilles from './components/PourLesFamilles'
import LeSoir from './components/LeSoir'
import InfosPratiques from './components/InfosPratiques'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Programme />
      <PourLesFamilles />
      <LeSoir />
      <InfosPratiques />
      <FAQ />
      <Footer />
    </div>
  )
}
