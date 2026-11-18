import { Reveal, SectionHead } from "../lib/ui";
import { useI18n, type Pagina } from "../i18n";

export function Cifras() {
  const { copy } = useI18n();
  const max = Math.max(...copy.figures.padron.map((p) => p.hab));
  return (
    <section id="cifras" className="bg-cal2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHead eyebrow={copy.figures.eyebrow} titulo={copy.figures.title} entrada={copy.figures.intro} />

            <div className="mt-10 border-t border-tinta/20 pt-6">
              <p className="label text-taupe">{copy.figures.evolution}</p>
              <div className="mt-5 flex items-end gap-3 sm:gap-5">
                {copy.figures.padron.map((p) => (
                  <div key={p.año} className="flex-1">
                    <div
                      className="w-full bg-naranja/85 transition-all duration-500 hover:bg-naranja"
                      style={{ height: `${Math.round((p.hab / max) * 150)}px` }}
                      title={`${p.hab.toLocaleString(copy.locale)} ${copy.figures.habitantes}`}
                    />
                    <p className="display tabular mt-2 text-sm font-black text-tinta">
                      {p.hab.toLocaleString(copy.locale)}
                    </p>
                    <p className="label text-taupe">{p.año}</p>
                    <p className="mt-2 hidden text-[0.72rem] leading-tight text-taupe sm:block">{p.nota}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <dl className="border-t border-tinta/25">
            {copy.figures.cifras.map((c, i) => (
              <Reveal key={c.k} delay={i * 35}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-tinta/15 py-4 transition hover:bg-cal/70">
                  <dt className="text-[0.95rem] text-tinta/70">{c.k}</dt>
                  <dd className="display tabular text-[clamp(1.4rem,2.6vw,2rem)] font-black leading-none text-tinta">
                    {c.v}
                    {c.n && <span className="ml-2 align-middle text-[0.7rem] font-medium tracking-[0.14em] text-naranja uppercase">{c.n}</span>}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Manifiesto() {
  const { copy } = useI18n();
  return (
    <section id="pueblo" className="bg-cal">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <Reveal>
          <p className="label text-naranja">{copy.manifesto.eyebrow}</p>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <p className="display text-[clamp(1.6rem,3vw,2.35rem)] leading-[1.22] font-light text-tinta">
              {copy.manifesto.lead[0]}
            </p>
            <div className="mt-8 columns-1 gap-8 text-[1rem] leading-[1.75] text-tinta/75 sm:columns-2">
              {copy.manifesto.lead.slice(1).map((p) => (
                <p key={p} className="mb-4">{p}</p>
              ))}
              <p>
                <span className="display text-[1.35rem] font-black text-tinta">{copy.hero.tagline}.</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <figure>
              <img src="images/citricos.jpg" alt={copy.manifesto.imageAlt} className="w-full object-cover" style={{ aspectRatio: "4 / 5" }} />
              <figcaption className="mt-3 border-t border-tinta/20 pt-3 text-[0.8rem] leading-snug text-taupe">{copy.manifesto.figcaption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Callejon() {
  const { copy } = useI18n();
  return (
    <section className="relative isolate overflow-hidden bg-tinta">
      <img src="images/calle.jpg" alt={copy.alley.imageAlt} className="absolute inset-0 h-full w-full object-cover object-[50%_62%]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,22,38,0.93)_0%,rgba(15,22,38,0.72)_46%,rgba(15,22,38,0.2)_100%)]" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="label text-brasa">{copy.alley.eyebrow}</p>
          <p className="display mt-5 text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.12] font-light text-cal">{copy.alley.lead}</p>
          <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-cal/70">{copy.alley.body}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Fiestas() {
  const { copy } = useI18n();
  return (
    <section id="fiestas" className="relative bg-verde text-cal">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-16">
          <div>
            <SectionHead tono="claro" eyebrow={copy.festivals.eyebrow} titulo={copy.festivals.title} entrada={copy.festivals.intro} />

            <ol className="mt-12 border-t border-cal/25">
              {copy.festivals.agenda.map((f, i) => (
                <Reveal as="li" key={f.titulo} delay={i * 50}>
                  <div className="group grid grid-cols-1 gap-x-8 gap-y-3 border-b border-cal/20 py-7 transition hover:bg-cal/5 sm:grid-cols-[7.5rem_9rem_minmax(0,1fr)]">
                    <div>
                      <p className="label text-brasa">{f.mes}</p>
                      <p className="display tabular mt-1 text-[1.35rem] leading-none font-black text-cal">{f.fecha}</p>
                    </div>
                    <div className="sm:pt-1">
                      <p className="text-[0.78rem] leading-snug text-cal/70">{f.lugar}</p>
                    </div>
                    <div>
                      <h3 className="display text-[1.5rem] leading-[1.1] font-black text-cal">{f.titulo}</h3>
                      <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-cal/70">{f.texto}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={140} className="lg:sticky lg:top-24 lg:self-start">
            <figure>
              <img src="images/fiesta.jpg" alt={copy.festivals.imageAlt} className="w-full object-cover" style={{ aspectRatio: "3 / 4" }} />
              <figcaption className="mt-3 border-t border-cal/20 pt-3 text-[0.8rem] leading-snug text-cal/70">{copy.festivals.figcaption}</figcaption>
            </figure>
            <div className="mt-6 border border-cal/25 p-5">
              <p className="label text-brasa">{copy.festivals.marketEyebrow}</p>
              <p className="display mt-2 text-[1.6rem] leading-tight font-black text-cal">{copy.festivals.marketTitle}</p>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-cal/70">{copy.festivals.marketBody}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Guia() {
  const { copy } = useI18n();
  return (
    <section id="guia" className="bg-cal2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <Reveal>
          <SectionHead eyebrow={copy.guide.eyebrow} titulo={copy.guide.title} entrada={copy.guide.intro} />
        </Reveal>

        <dl className="mt-12 grid gap-x-14 border-t border-tinta/25 sm:grid-cols-2">
          {copy.guide.items.map((g, i) => (
            <Reveal key={g.t} delay={i * 45}>
              <div className="flex flex-col gap-1 border-b border-tinta/15 py-5 transition hover:bg-cal/70">
                <dt className="display text-[1.25rem] leading-tight font-black text-tinta">{g.t}</dt>
                <dd className="text-[0.95rem] leading-relaxed text-tinta/75">{g.d}</dd>
                {g.m && <dd className="text-[0.82rem] text-naranja">{g.m}</dd>}
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Vecinos() {
  const { copy } = useI18n();
  return (
    <section id="vecinos" className="bg-tinta text-cal">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <Reveal>
          <SectionHead tono="claro" eyebrow={copy.neighbors.eyebrow} titulo={copy.neighbors.title} />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {copy.neighbors.items.map((v, i) => (
            <Reveal key={v.nombre} delay={i * 90}>
              <figure className="flex h-full flex-col border-t-2 border-brasa pt-6">
                <blockquote className="display flex-1 text-[1.15rem] leading-[1.45] text-cal/90">
                  {v.lang && <span className="label mr-2 align-middle text-brasa">{v.lang}</span>}
                  «{v.cita}»
                </blockquote>
                {v.trad && <p className="mt-4 text-[0.86rem] leading-relaxed text-cal/65 italic">{v.trad}</p>}
                <figcaption className="mt-6 border-t border-cal/20 pt-4">
                  <p className="display text-[1.05rem] font-black text-cal">{v.nombre}</p>
                  <p className="mt-1 text-[0.78rem] text-cal/70">{v.lugar}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pie({
  pagina,
  setPagina,
}: {
  pagina: Pagina;
  setPagina: (p: Pagina) => void;
}) {
  const { copy } = useI18n();
  return (
    <footer className="border-t border-cal/15 bg-tinta text-cal">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[0.95] font-black">
              {copy.hero.kicker}
              <br />
              {copy.hero.titleA} {copy.hero.titleB}
            </p>
            <p className="label mt-4 text-naranja">{copy.footer.tagline}</p>
          </div>
          <div className="text-[0.92rem] leading-relaxed text-cal/70">
            <p className="label mb-3 text-cal/65">{copy.footer.party}</p>
            <nav className="space-y-2">
              {copy.nav.pages.map((n) => (
                <button
                  key={n.pagina}
                  onClick={() => { setPagina(n.pagina); window.scrollTo(0, 0); window.location.hash = n.pagina; }}
                  className={`block cursor-pointer transition hover:text-naranja ${pagina === n.pagina ? "text-naranja" : ""}`}
                >
                  {n.t}
                </button>
              ))}
            </nav>
          </div>
          <div className="text-[0.92rem] leading-relaxed text-cal/70">
            <p className="label mb-3 text-cal/65">{copy.footer.townHall}</p>
            <p>Plaza Constitución, 26</p>
            <p>03177 San Fulgencio</p>
            <p className="tabular mt-2">
              <a href="tel:+34966794201" className="hover:text-naranja">966 79 42 01</a>
            </p>
            <a href="https://www.sanfulgencio.es" className="mt-1 block hover:text-naranja">sanfulgencio.es</a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-cal/15 pt-5 text-[0.75rem] text-cal/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {copy.footer.copyright}</p>
          <p className="label">{copy.rail}</p>
        </div>
      </div>
    </footer>
  );
}
