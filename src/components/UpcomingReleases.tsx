import Reveal from "./Reveal";

const releases = [
  {
    number: "01",
    title: "Qué ironía",
    video: "/videos/Adelanto-Que-Ironia.mp4",
  },
  {
    number: "02",
    title: "Ahora",
    video: "/videos/Ahora-Video.mp4",
  },
  {
    number: "03",
    title: "Negro mate",
    video: "/videos/Video-Negro-Mate.mp4",
  },
];

export default function UpcomingReleases() {
  return (
    <section
      id="adelantos"
      className="bg-zinc-950 px-6 py-24 text-[#f4f1eb] sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#d5a77b]">
              Lo que viene
            </p>
            <h2 className="font-serif text-4xl font-normal tracking-tight sm:text-6xl">
              Adelantos
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/55">
            Un primer vistazo a las canciones y momentos que están por llegar.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {releases.map((release, index) => (
            <Reveal
              key={release.number}
              delay={index * 0.1}
              className="group"
            >
              <article className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-black">
                  <video
                    className="h-full w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    src={release.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    aria-label={`Adelanto: ${release.title}`}
                  >
                    Tu navegador no puede reproducir este video.
                  </video>
                  <span className="absolute left-4 top-4 z-10 text-[10px] tracking-[0.2em] text-white/80">
                    {release.number}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 px-5 py-5">
                  <h3 className="font-serif text-xl">{release.title}</h3>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#d5a77b]">
                    Adelanto
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
