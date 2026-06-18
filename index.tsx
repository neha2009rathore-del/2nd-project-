import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hollow & Stone — Architecture of Quiet Presence" },
      {
        name: "description",
        content:
          "Hollow & Stone is an architecture studio shaping unhurried, material-led spaces between landscape and shelter.",
      },
      { property: "og:title", content: "Hollow & Stone — Architecture of Quiet Presence" },
      {
        property: "og:description",
        content:
          "An architecture studio shaping unhurried, material-led spaces between landscape and shelter.",
      },
    ],
  }),
  component: Index,
});

const works = [
  {
    n: "01",
    title: "Casa Travertina",
    place: "Oaxaca, MX",
    year: "2025",
    img: work01,
    tag: "Residence",
  },
  {
    n: "02",
    title: "House on the Dune",
    place: "Atacama, CL",
    year: "2024",
    img: work02,
    tag: "Residence",
  },
  {
    n: "03",
    title: "Folded Wall Pavilion",
    place: "Kyoto, JP",
    year: "2024",
    img: work03,
    tag: "Cultural",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="text-mono">
            Hollow <span className="text-ember">&</span> Stone
          </a>
          <nav className="hidden md:flex items-center gap-10 text-mono">
            <a href="#work" className="hover:text-ember transition-colors">Work</a>
            <a href="#studio" className="hover:text-ember transition-colors">Studio</a>
            <a href="#journal" className="hover:text-ember transition-colors">Journal</a>
            <a href="#contact" className="hover:text-ember transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="text-mono border border-foreground/30 px-3 py-1.5 rounded-full hover:bg-foreground hover:text-background transition-colors">
            Commission ↗
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 flex flex-col justify-between">
              <div className="text-mono text-muted-foreground">
                Est. 2014 · Lisbon / Mexico City
              </div>
              <h1 className="text-display mt-10 text-[clamp(3rem,11vw,11rem)] font-light">
                Quiet
                <br />
                <span className="italic font-normal text-ember">presence</span>,
                <br />
                slow shelter.
              </h1>
              <p className="mt-10 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
                We are an architecture studio working between landscape and shelter —
                designing buildings that age into their place rather than against it.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 relative">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-sm">
                <img
                  src={heroImg}
                  alt="Brutalist concrete building at dusk with warm window glow"
                  width={1080}
                  height={1440}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-left-12 bg-background border border-border px-4 py-3 text-mono">
                Vol. 14 — Field notes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-6 overflow-hidden">
        <div className="flex marquee-x whitespace-nowrap text-display text-[clamp(2.5rem,6vw,5rem)] font-light">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="px-8">Stone</span>
              <span className="text-ember px-8">✺</span>
              <span className="px-8 italic">Lime</span>
              <span className="text-ember px-8">✺</span>
              <span className="px-8">Timber</span>
              <span className="text-ember px-8">✺</span>
              <span className="px-8 italic">Earth</span>
              <span className="text-ember px-8">✺</span>
              <span className="px-8">Light</span>
              <span className="text-ember px-8">✺</span>
            </span>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 md:py-36">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="text-mono text-muted-foreground mb-4">— Selected Work</div>
              <h2 className="text-display text-[clamp(2.5rem,6vw,5.5rem)] font-light max-w-2xl">
                Built between <span className="italic text-ember">memory</span> and material.
              </h2>
            </div>
            <a href="#" className="hidden md:inline-block text-mono hover:text-ember">All projects (24) →</a>
          </div>

          <div className="space-y-24">
            {works.map((w, i) => (
              <article
                key={w.n}
                className={`grid grid-cols-12 gap-6 items-end ${i % 2 ? "md:[direction:rtl]" : ""}`}
              >
                <div className={`col-span-12 md:col-span-7 ${i === 1 ? "md:col-span-8" : ""} [direction:ltr]`}>
                  <div className="overflow-hidden rounded-sm group">
                    <img
                      src={w.img}
                      alt={w.title}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className={`col-span-12 md:col-span-5 ${i === 1 ? "md:col-span-4" : ""} [direction:ltr] pb-4`}>
                  <div className="text-mono text-ember mb-4">{w.n} / {w.tag}</div>
                  <h3 className="text-display text-4xl md:text-5xl font-light mb-3">
                    {w.title}
                  </h3>
                  <div className="text-mono text-muted-foreground mb-6">
                    {w.place} — {w.year}
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    A study in mass and aperture; the building sits low against its terrain,
                    drawing the day's light through hand-poured walls and a single oculus.
                  </p>
                  <a href="#" className="inline-block mt-6 text-mono border-b border-foreground/40 pb-1 hover:text-ember hover:border-ember transition-colors">
                    Read project ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="py-24 md:py-36 border-t border-border">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="text-mono text-muted-foreground mb-4">— Studio</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-display text-[clamp(1.75rem,3.4vw,3rem)] font-light leading-[1.1]">
              We design <span className="italic text-ember">slowly</span>. Each
              commission begins as a long walk through a site — listening for
              what already wants to be there. Then we draw, model, and build, in
              that order, with the same hands.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-border">
              {[
                ["12", "Years practicing"],
                ["24", "Projects realised"],
                ["9", "Countries"],
                ["1", "Studio, by design"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-display text-5xl md:text-6xl font-light text-ember">{n}</div>
                  <div className="text-mono text-muted-foreground mt-3">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section id="journal" className="py-24 md:py-36 border-t border-border">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="flex items-end justify-between mb-14">
            <h2 className="text-display text-[clamp(2.25rem,5vw,4.5rem)] font-light">
              From the <span className="italic text-ember">journal</span>
            </h2>
            <a href="#" className="text-mono hover:text-ember hidden md:inline">Index →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              ["On the patience of lime", "Essay", "8 min"],
              ["Drawing the unbuilt house", "Sketches", "4 min"],
              ["A grammar of thresholds", "Notes", "11 min"],
            ].map(([title, kind, time]) => (
              <a
                href="#"
                key={title}
                className="bg-background p-8 md:p-10 group hover:bg-card transition-colors"
              >
                <div className="text-mono text-muted-foreground flex justify-between">
                  <span>{kind}</span>
                  <span>{time}</span>
                </div>
                <div className="text-display text-3xl md:text-4xl font-light mt-12 group-hover:text-ember transition-colors">
                  {title}
                </div>
                <div className="text-mono mt-10 opacity-60 group-hover:opacity-100">Read ↗</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 md:py-44 border-t border-border">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 text-center">
          <div className="text-mono text-muted-foreground mb-6">— Begin a commission</div>
          <h2 className="text-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.95]">
            Let's build
            <br />
            something <span className="italic text-ember">enduring</span>.
          </h2>
          <a
            href="mailto:studio@hollowandstone.com"
            className="inline-block mt-12 text-mono border border-foreground/40 rounded-full px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
          >
            studio@hollowandstone.com ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 flex flex-col md:flex-row gap-4 justify-between text-mono text-muted-foreground">
          <div>© {new Date().getFullYear()} Hollow & Stone — Atelier</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-ember">Instagram</a>
            <a href="#" className="hover:text-ember">Are.na</a>
            <a href="#" className="hover:text-ember">Newsletter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
