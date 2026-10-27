import { ArrowDownRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex h-screen min-h-[640px] flex-col overflow-hidden bg-[#10100f] text-[#f4f1eb]"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/images/IMG-20261023-WA0001.jpg"
        aria-hidden="true"
      >
        <source
          src="/videos/Adelanto-Que-Ironia.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-[#10100f]"
        aria-hidden="true"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <a
          href="#inicio"
          className="font-serif text-2xl tracking-[0.12em]"
          aria-label="Julio Leiva, inicio"
        >
          JL<span className="text-[#d5a77b]">.</span>
        </a>
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-white/75 sm:flex"
        >
          <a className="transition-colors hover:text-white" href="#adelantos">
            Adelantos
          </a>
          <a className="transition-colors hover:text-white" href="#covers">
            Covers
          </a>
          <a className="transition-colors hover:text-white" href="#contacto">
            Contacto
          </a>
        </nav>
        <a
          href="#contacto"
          className="rounded-full border border-white/35 px-4 py-2 text-[10px] uppercase tracking-[0.17em] transition-colors hover:border-white hover:bg-white hover:text-black sm:hidden"
        >
          Booking
        </a>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 pb-20 text-center sm:px-10">
        <p className="mb-5 text-[10px] uppercase tracking-[0.42em] text-[#e2bd98] sm:text-xs">
          Música para sentir
        </p>
        <h1 className="font-serif text-6xl font-normal tracking-[-0.06em] sm:text-8xl md:text-9xl">
          Julio Leiva
        </h1>
        <p className="mt-4 text-xs uppercase tracking-[0.35em] text-white/75 sm:text-sm">
          Música &amp; Covers
        </p>
        <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="#contacto"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d5a77b] px-7 text-xs font-medium uppercase tracking-[0.13em] text-[#171411] transition-colors hover:bg-[#e6c19c]"
          >
            Contrataciones <ArrowDownRight size={16} aria-hidden="true" />
          </a>
          <a
            href="https://www.youtube.com/results?search_query=Julio+Leiva"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 px-7 text-xs uppercase tracking-[0.13em] transition-colors hover:border-white hover:bg-white/10"
          >
            <span className="flex size-5 items-center justify-center rounded-md bg-[#ff0033]">
              <Play size={12} fill="currentColor" aria-hidden="true" />
            </span>
            Escuchar en YouTube
          </a>
        </div>
      </div>

      <a
        href="#adelantos"
        className="relative z-10 mx-auto mb-7 flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/55 transition-colors hover:text-white"
      >
        Descubrir <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
