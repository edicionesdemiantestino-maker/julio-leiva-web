import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import Reveal from "./Reveal";

const covers = [
  {
    title: "Cover 01",
    image: "/images/Imagen1.jpg",
    alt: "Julio Leiva interpretando una canción",
    video: "/videos/Ahora-Video.mp4",
  },
  {
    title: "Cover 02",
    image: "/images/Imagen2.jpg",
    alt: "Julio Leiva en una presentación musical",
    video: "/videos/Video-Negro-Mate.mp4",
  },
  {
    title: "Cover 03",
    image: "/images/Imagen3.jpg",
    alt: "Julio Leiva, sesión en vivo",
    video: "/videos/Adelanto-Que-Ironia.mp4",
  },
];

export default function Portfolio() {
  return (
    <section
      id="covers"
      className="bg-zinc-950 px-6 py-24 text-[#f4f1eb] sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#d5a77b]">
              En voz propia
            </p>
            <h2 className="font-serif text-4xl font-normal tracking-tight sm:text-6xl">
              Covers
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/55">
            Canciones que conocemos, interpretadas con una mirada personal.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {covers.map((cover, index) => (
            <Reveal key={cover.title} delay={index * 0.1}>
              <a
                href={cover.video}
                target="_blank"
                rel="noreferrer"
                aria-label={`Reproducir ${cover.title}`}
                className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cover.image}
                    alt={cover.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25">
                    <span className="flex size-14 items-center justify-center rounded-full border border-white/70 bg-black/25 text-white backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:bg-[#d5a77b] group-hover:text-[#171411]">
                      <Play size={18} fill="currentColor" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <h3 className="text-xs uppercase tracking-[0.2em]">
                    {cover.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-white/45 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    aria-hidden="true"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
