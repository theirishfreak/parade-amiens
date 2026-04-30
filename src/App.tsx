import VelorahNav from './components/VelorahNav'
import VelorahHero from './components/VelorahHero'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

export default function App() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: 'hsl(201 100% 13%)' }}
    >
      {/* Fullscreen background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <VelorahNav />
        <div className="flex flex-1 flex-col items-center justify-center">
          <VelorahHero />
        </div>
      </div>
    </div>
  )
}
