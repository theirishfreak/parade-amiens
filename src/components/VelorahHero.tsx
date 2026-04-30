export default function VelorahHero() {
  return (
    <section className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-40">
      <h1
        className="text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] max-w-7xl animate-fade-rise"
        style={{
          fontFamily: "'Instrument Serif', serif",
          letterSpacing: '-2.46px',
        }}
      >
        Where{' '}
        <em className="not-italic" style={{ color: 'hsl(240 4% 66%)' }}>
          dreams
        </em>{' '}
        rise{' '}
        <em className="not-italic" style={{ color: 'hsl(240 4% 66%)' }}>
          through the silence.
        </em>
      </h1>

      <p
        className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay"
        style={{ color: 'hsl(240 4% 66%)' }}
      >
        We're designing tools for deep thinkers, bold creators, and quiet rebels.
        Amid the chaos, we build digital spaces for sharp focus and inspired work.
      </p>

      <button
        className="liquid-glass rounded-full px-14 py-5 text-base text-white mt-12 animate-fade-rise-delay-2 hover:scale-[1.03] cursor-pointer transition-transform"
      >
        Begin Journey
      </button>
    </section>
  );
}
