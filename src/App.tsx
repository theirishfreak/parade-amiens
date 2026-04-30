import VelorahNav from './components/VelorahNav'
import VelorahHero from './components/VelorahHero'
import Programme from './components/Programme'
import PourLesFamilles from './components/PourLesFamilles'
import LeSoir from './components/LeSoir'
import Lanternes from './components/Lanternes'
import InfosPratiques from './components/InfosPratiques'
import Footer from './components/Footer'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

export default function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff' }}>
      {/* Hero — fullscreen video with floating nav */}
      <div
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: 'hsl(201 100% 13%)' }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 flex flex-col min-h-screen">
          <VelorahNav />
          <div className="flex flex-1 flex-col items-center justify-center">
            <VelorahHero />
          </div>
        </div>
      </div>

      {/* Event content */}
      <Programme />
      <PourLesFamilles />
      <LeSoir />
      <Lanternes />
      <InfosPratiques />
      <Footer />
    </div>
  )
}
