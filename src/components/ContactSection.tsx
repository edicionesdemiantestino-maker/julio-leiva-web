import { Disc3, Mail, MessageCircle, Play } from "lucide-react";
import ContactSubmitButton from "./ContactSubmitButton";
import Reveal from "./Reveal";

const whatsappMessage = encodeURIComponent(
  "Hola Julio, quisiera consultar por una contratación.",
);

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="bg-zinc-950 px-4 py-20 text-[#f4f1eb] sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-10 text-center sm:mb-12">
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#d5a77b]">
            Hagamos música
          </p>
          <h2 className="mx-auto max-w-2xl font-serif text-4xl font-normal leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
            Una fecha especial empieza con una conversación.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Cuéntanos sobre tu evento y conversemos los detalles.
          </p>
        </Reveal>

        <Reveal className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          <a
            href={`https://wa.me/?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-xs uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
            aria-label="Consultar por WhatsApp"
          >
            <MessageCircle size={17} aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href="https://www.youtube.com/results?search_query=Julio+Leiva"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-xs uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
            aria-label="Buscar a Julio Leiva en YouTube"
          >
            <Play size={16} fill="currentColor" aria-hidden="true" />
            YouTube
          </a>
          <a
            href="https://open.spotify.com/search/Julio%20Leiva"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-xs uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
            aria-label="Buscar a Julio Leiva en Spotify"
          >
            <Disc3 size={17} aria-hidden="true" />
            Spotify
          </a>
          <a
            href="mailto:?subject=Contrataciones%20-%20Julio%20Leiva"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-xs uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
            aria-label="Escribir un email"
          >
            <Mail size={17} aria-hidden="true" />
            Email
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            action="mailto:?subject=Contrataciones%20-%20Julio%20Leiva"
            method="post"
            encType="text/plain"
            className="mx-auto w-full max-w-3xl space-y-5 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md sm:space-y-6 sm:p-8 md:p-10"
          >
            <label className="block">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/60">
                Nombre
              </span>
              <input
                className="min-h-12 w-full rounded-xl border border-white/5 bg-black/40 px-4 py-3 text-base text-white outline-none transition-all placeholder:text-white/35 focus:ring-2 focus:ring-white/20 sm:text-sm"
                type="text"
                name="Nombre"
                autoComplete="name"
                placeholder="Tu nombre"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/60">
                Tipo de evento
              </span>
              <select
                className="min-h-12 w-full appearance-none rounded-xl border border-white/5 bg-black/40 px-4 py-3 text-base text-white outline-none transition-all focus:ring-2 focus:ring-white/20 sm:text-sm"
                name="Tipo de evento"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="Evento privado">Evento privado</option>
                <option value="Evento corporativo">Evento corporativo</option>
                <option value="Show en vivo">Show en vivo</option>
                <option value="Otro">Otro</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/60">
                Fecha
              </span>
              <input
                className="min-h-12 w-full rounded-xl border border-white/5 bg-black/40 px-4 py-3 text-base text-white outline-none transition-all focus:ring-2 focus:ring-white/20 sm:text-sm"
                type="date"
                name="Fecha"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/60">
                Mensaje
              </span>
              <textarea
                className="min-h-32 w-full resize-y rounded-xl border border-white/5 bg-black/40 px-4 py-3 text-base text-white outline-none transition-all placeholder:text-white/35 focus:ring-2 focus:ring-white/20 sm:text-sm"
                name="Mensaje"
                placeholder="Cuéntanos un poco más sobre tu evento"
                required
              />
            </label>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <ContactSubmitButton />
              <p className="text-center text-xs leading-5 text-white/45 sm:text-left">
                Se abrirá tu aplicación de correo para completar el envío.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
