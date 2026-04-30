export default function VelorahNav() {
  const links = ['Studio', 'About', 'Journal', 'Reach Us'];

  return (
    <nav className="relative z-10 w-full">
      <div className="flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <span
          className="text-3xl tracking-tight text-white select-none"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs">®</sup>
        </span>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a
              href="#"
              className="text-sm text-white transition-colors"
            >
              Home
            </a>
          </li>
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-sm transition-colors"
                style={{ color: 'hsl(240 4% 66%)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(0 0% 100%)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(240 4% 66%)')}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white transition-transform hover:scale-[1.03] cursor-pointer"
        >
          Begin Journey
        </button>
      </div>
    </nav>
  );
}
