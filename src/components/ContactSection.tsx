import { Mail, MessageCircle, Play } from "lucide-react";
import ContactSubmitButton from "./ContactSubmitButton";
import Reveal from "./Reveal";

const whatsappMessage = encodeURIComponent(
  "Hola Julio, quisiera consultar por una contratación.",
);

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="bg-zinc-950 px-6 py-24 text-[#f4f1eb] sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#d5a77b]">
            Hagamos música
          </p>
          <h2 className="max-w-lg font-serif text-5xl font-normal leading-[1.05] tracking-tight sm:text-7xl">
            Una fecha especial empieza con una conversación.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
            Cuéntanos sobre tu evento y nos pondremos en contacto para conversar
            los detalles.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-12 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white hover:text-black"
              aria-label="Consultar por WhatsApp"
              title="WhatsApp"
            >
              <MessageCircle size={19} aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/results?search_query=Julio+Leiva"
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-12 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white hover:text-black"
              aria-label="Buscar a Julio Leiva en YouTube"
              title="YouTube"
            >
              <Play size={19} fill="currentColor" aria-hidden="true" />
            </a>
            <a
              href="mailto:?subject=Contrataciones%20-%20Julio%20Leiva"
              className="inline-flex size-12 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white hover:text-black"
              aria-label="Escribir un email"
              title="Email"
            >
              <Mail size={19} aria-hidden="true" />
            </a>
          </div>
          <p className="mt-4 max-w-sm text-xs leading-5 text-white/45">
            Los enlaces de WhatsApp, YouTube y email se pueden personalizar
            cuando estén disponibles los datos oficiales de contacto.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            action="mailto:?subject=Contrataciones%20-%20Julio%20Leiva"
            method="post"
            encType="text/plain"
            className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md sm:p-8"
          >
            <label className="block">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/60">
                Nombre
              </span>
              <input
                className="w-full rounded-xl border border-white/5 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/35 focus:ring-2 focus:ring-white/20"
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
                className="w-full appearance-none rounded-xl border border-white/5 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-all focus:ring-2 focus:ring-white/20"
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
                className="w-full rounded-xl border border-white/5 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-all focus:ring-2 focus:ring-white/20"
                type="date"
                name="Fecha"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/60">
                Mensaje
              </span>
              <textarea
                className="min-h-28 w-full resize-y rounded-xl border border-white/5 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/35 focus:ring-2 focus:ring-white/20"
                name="Mensaje"
                placeholder="Cuéntanos un poco más sobre tu evento"
                required
              />
            </label>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <ContactSubmitButton />
              <p className="text-xs text-white/45">
                Se abrirá tu aplicación de correo para completar el envío.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
