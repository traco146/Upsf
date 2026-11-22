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

        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
          <Reveal className="lg:col-span-7">
            <h2 className="display text-[clamp(2rem,3.6vw,3rem)] leading-[1.04] font-black tracking-[-0.025em] text-tinta">
              {copy.manifesto.title}
            </h2>

            <p className="mt-6 border-l-2 border-naranja pl-5 text-[1.1rem] leading-[1.6] text-tinta/85">
              {copy.manifesto.intro}
            </p>

            <div className="mt-8 grid gap-x-9 gap-y-5 border-t border-tinta/15 pt-7 text-[0.98rem] leading-[1.75] text-tinta/75 sm:grid-cols-2">
              <div className="space-y-4">
                <p>{copy.manifesto.paragraphs[0]}</p>
                <p>{copy.manifesto.paragraphs[1]}</p>
              </div>
              <div className="flex flex-col justify-between gap-6">
                <p>{copy.manifesto.paragraphs[2]}</p>
                <div className="border-t border-tinta/15 pt-5">
                  <p className="display text-[1.15rem] leading-[1.38] font-light text-tinta">
                    {copy.manifesto.closing}
                  </p>
                  <p className="mt-3">
                    <span className="display text-[1.4rem] font-black text-naranja">{copy.hero.tagline}.</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:sticky lg:top-24">
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

const SOCIAL_NETWORKS = [
  {
    id: "facebook" as const,
    url: "https://www.facebook.com/share/g/1MrH3KEqxx/?mibextid=wwXIfr",
    shortUrl: "facebook.com/share/g/1MrH3KEqxx",
    qrSize: 41,
    qrPath: "M4 4h7v1h-7zM13 4h1v1h-1zM15 4h2v1h-2zM20 4h1v1h-1zM22 4h3v1h-3zM27 4h1v1h-1zM30 4h7v1h-7zM4 5h1v1h-1zM10 5h1v1h-1zM16 5h1v1h-1zM19 5h1v1h-1zM26 5h1v1h-1zM28 5h1v1h-1zM30 5h1v1h-1zM36 5h1v1h-1zM4 6h1v1h-1zM6 6h3v1h-3zM10 6h1v1h-1zM12 6h3v1h-3zM16 6h1v1h-1zM22 6h6v1h-6zM30 6h1v1h-1zM32 6h3v1h-3zM36 6h1v1h-1zM4 7h1v1h-1zM6 7h3v1h-3zM10 7h1v1h-1zM12 7h1v1h-1zM15 7h2v1h-2zM19 7h1v1h-1zM21 7h3v1h-3zM26 7h1v1h-1zM30 7h1v1h-1zM32 7h3v1h-3zM36 7h1v1h-1zM4 8h1v1h-1zM6 8h3v1h-3zM10 8h1v1h-1zM12 8h3v1h-3zM16 8h1v1h-1zM19 8h1v1h-1zM23 8h3v1h-3zM27 8h2v1h-2zM30 8h1v1h-1zM32 8h3v1h-3zM36 8h1v1h-1zM4 9h1v1h-1zM10 9h1v1h-1zM12 9h1v1h-1zM18 9h2v1h-2zM21 9h2v1h-2zM24 9h2v1h-2zM30 9h1v1h-1zM36 9h1v1h-1zM4 10h7v1h-7zM12 10h1v1h-1zM14 10h1v1h-1zM16 10h1v1h-1zM18 10h1v1h-1zM20 10h1v1h-1zM22 10h1v1h-1zM24 10h1v1h-1zM26 10h1v1h-1zM28 10h1v1h-1zM30 10h7v1h-7zM12 11h2v1h-2zM16 11h1v1h-1zM18 11h1v1h-1zM25 11h3v1h-3zM4 12h1v1h-1zM6 12h5v1h-5zM17 12h1v1h-1zM19 12h3v1h-3zM23 12h1v1h-1zM26 12h3v1h-3zM30 12h5v1h-5zM5 13h1v1h-1zM11 13h5v1h-5zM17 13h1v1h-1zM20 13h4v1h-4zM27 13h1v1h-1zM30 13h2v1h-2zM33 13h4v1h-4zM9 14h2v1h-2zM12 14h1v1h-1zM15 14h6v1h-6zM24 14h3v1h-3zM28 14h1v1h-1zM30 14h1v1h-1zM32 14h1v1h-1zM34 14h1v1h-1zM4 15h1v1h-1zM6 15h3v1h-3zM11 15h1v1h-1zM17 15h1v1h-1zM19 15h1v1h-1zM23 15h1v1h-1zM25 15h3v1h-3zM29 15h2v1h-2zM32 15h5v1h-5zM9 16h6v1h-6zM16 16h1v1h-1zM18 16h4v1h-4zM23 16h1v1h-1zM26 16h4v1h-4zM31 16h1v1h-1zM33 16h1v1h-1zM35 16h2v1h-2zM5 17h1v1h-1zM9 17h1v1h-1zM12 17h4v1h-4zM20 17h2v1h-2zM23 17h3v1h-3zM27 17h2v1h-2zM34 17h3v1h-3zM4 18h1v1h-1zM7 18h1v1h-1zM10 18h1v1h-1zM12 18h1v1h-1zM18 18h2v1h-2zM21 18h1v1h-1zM28 18h3v1h-3zM32 18h4v1h-4zM6 19h1v1h-1zM8 19h1v1h-1zM11 19h3v1h-3zM17 19h1v1h-1zM20 19h1v1h-1zM24 19h3v1h-3zM28 19h4v1h-4zM33 19h2v1h-2zM6 20h1v1h-1zM8 20h3v1h-3zM13 20h2v1h-2zM16 20h4v1h-4zM21 20h1v1h-1zM26 20h4v1h-4zM31 20h2v1h-2zM34 20h1v1h-1zM36 20h1v1h-1zM5 21h2v1h-2zM8 21h2v1h-2zM12 21h3v1h-3zM17 21h1v1h-1zM20 21h1v1h-1zM22 21h3v1h-3zM27 21h5v1h-5zM33 21h2v1h-2zM36 21h1v1h-1zM10 22h3v1h-3zM14 22h3v1h-3zM18 22h2v1h-2zM21 22h1v1h-1zM24 22h2v1h-2zM29 22h1v1h-1zM31 22h2v1h-2zM34 22h1v1h-1zM5 23h1v1h-1zM7 23h1v1h-1zM16 23h2v1h-2zM19 23h1v1h-1zM23 23h5v1h-5zM29 23h1v1h-1zM31 23h6v1h-6zM6 24h1v1h-1zM8 24h1v1h-1zM10 24h2v1h-2zM14 24h1v1h-1zM16 24h1v1h-1zM18 24h1v1h-1zM21 24h1v1h-1zM23 24h2v1h-2zM26 24h1v1h-1zM29 24h1v1h-1zM32 24h2v1h-2zM35 24h1v1h-1zM4 25h1v1h-1zM7 25h2v1h-2zM11 25h1v1h-1zM13 25h2v1h-2zM16 25h1v1h-1zM20 25h2v1h-2zM23 25h3v1h-3zM27 25h1v1h-1zM29 25h3v1h-3zM33 25h1v1h-1zM36 25h1v1h-1zM4 26h1v1h-1zM6 26h1v1h-1zM10 26h1v1h-1zM12 26h1v1h-1zM15 26h2v1h-2zM19 26h2v1h-2zM25 26h2v1h-2zM28 26h2v1h-2zM31 26h1v1h-1zM33 26h3v1h-3zM4 27h1v1h-1zM7 27h1v1h-1zM9 27h1v1h-1zM13 27h1v1h-1zM15 27h1v1h-1zM17 27h1v1h-1zM19 27h1v1h-1zM25 27h2v1h-2zM28 27h7v1h-7zM4 28h1v1h-1zM8 28h1v1h-1zM10 28h2v1h-2zM14 28h4v1h-4zM21 28h3v1h-3zM26 28h8v1h-8zM35 28h2v1h-2zM12 29h1v1h-1zM15 29h3v1h-3zM20 29h1v1h-1zM22 29h4v1h-4zM27 29h2v1h-2zM32 29h1v1h-1zM34 29h1v1h-1zM36 29h1v1h-1zM4 30h7v1h-7zM15 30h2v1h-2zM18 30h4v1h-4zM24 30h1v1h-1zM27 30h2v1h-2zM30 30h1v1h-1zM32 30h1v1h-1zM34 30h2v1h-2zM4 31h1v1h-1zM10 31h1v1h-1zM12 31h7v1h-7zM23 31h3v1h-3zM27 31h2v1h-2zM32 31h5v1h-5zM4 32h1v1h-1zM6 32h3v1h-3zM10 32h1v1h-1zM12 32h3v1h-3zM16 32h1v1h-1zM18 32h2v1h-2zM23 32h2v1h-2zM26 32h1v1h-1zM28 32h6v1h-6zM35 32h2v1h-2zM4 33h1v1h-1zM6 33h3v1h-3zM10 33h1v1h-1zM12 33h3v1h-3zM18 33h4v1h-4zM23 33h3v1h-3zM27 33h1v1h-1zM29 33h1v1h-1zM32 33h1v1h-1zM34 33h3v1h-3zM4 34h1v1h-1zM6 34h3v1h-3zM10 34h1v1h-1zM12 34h1v1h-1zM15 34h5v1h-5zM21 34h1v1h-1zM24 34h1v1h-1zM27 34h5v1h-5zM4 35h1v1h-1zM10 35h1v1h-1zM15 35h3v1h-3zM19 35h1v1h-1zM24 35h2v1h-2zM27 35h1v1h-1zM32 35h3v1h-3zM4 36h7v1h-7zM12 36h1v1h-1zM14 36h1v1h-1zM17 36h2v1h-2zM20 36h2v1h-2zM26 36h4v1h-4zM31 36h1v1h-1zM34 36h2v1h-2z",
  },
  {
    id: "instagram" as const,
    url: "https://www.instagram.com/upsf2027?evlk=MTFqaTBpOWhucDhoag==",
    shortUrl: "instagram.com/upsf2027",
    qrSize: 41,
    qrPath: "M4 4h7v1h-7zM12 4h1v1h-1zM14 4h2v1h-2zM20 4h1v1h-1zM22 4h2v1h-2zM25 4h1v1h-1zM27 4h1v1h-1zM30 4h7v1h-7zM4 5h1v1h-1zM10 5h1v1h-1zM12 5h1v1h-1zM15 5h1v1h-1zM18 5h1v1h-1zM20 5h1v1h-1zM27 5h2v1h-2zM30 5h1v1h-1zM36 5h1v1h-1zM4 6h1v1h-1zM6 6h3v1h-3zM10 6h1v1h-1zM15 6h3v1h-3zM19 6h2v1h-2zM22 6h3v1h-3zM30 6h1v1h-1zM32 6h3v1h-3zM36 6h1v1h-1zM4 7h1v1h-1zM6 7h3v1h-3zM10 7h1v1h-1zM12 7h2v1h-2zM15 7h2v1h-2zM19 7h1v1h-1zM23 7h1v1h-1zM25 7h4v1h-4zM30 7h1v1h-1zM32 7h3v1h-3zM36 7h1v1h-1zM4 8h1v1h-1zM6 8h3v1h-3zM10 8h1v1h-1zM16 8h1v1h-1zM18 8h1v1h-1zM23 8h1v1h-1zM25 8h2v1h-2zM28 8h1v1h-1zM30 8h1v1h-1zM32 8h3v1h-3zM36 8h1v1h-1zM4 9h1v1h-1zM10 9h1v1h-1zM13 9h3v1h-3zM18 9h1v1h-1zM21 9h5v1h-5zM28 9h1v1h-1zM30 9h1v1h-1zM36 9h1v1h-1zM4 10h7v1h-7zM12 10h1v1h-1zM14 10h1v1h-1zM16 10h1v1h-1zM18 10h1v1h-1zM20 10h1v1h-1zM22 10h1v1h-1zM24 10h1v1h-1zM26 10h1v1h-1zM28 10h1v1h-1zM30 10h7v1h-7zM12 11h2v1h-2zM15 11h2v1h-2zM18 11h1v1h-1zM20 11h2v1h-2zM27 11h1v1h-1zM4 12h1v1h-1zM6 12h2v1h-2zM9 12h3v1h-3zM15 12h1v1h-1zM19 12h1v1h-1zM21 12h3v1h-3zM25 12h1v1h-1zM30 12h1v1h-1zM33 12h1v1h-1zM35 12h2v1h-2zM11 13h1v1h-1zM14 13h5v1h-5zM20 13h1v1h-1zM22 13h6v1h-6zM30 13h2v1h-2zM33 13h4v1h-4zM6 14h1v1h-1zM8 14h6v1h-6zM16 14h2v1h-2zM21 14h2v1h-2zM26 14h2v1h-2zM31 14h3v1h-3zM36 14h1v1h-1zM5 15h1v1h-1zM9 15h1v1h-1zM11 15h3v1h-3zM16 15h1v1h-1zM20 15h1v1h-1zM23 15h1v1h-1zM26 15h3v1h-3zM30 15h2v1h-2zM33 15h1v1h-1zM35 15h2v1h-2zM4 16h1v1h-1zM6 16h1v1h-1zM9 16h2v1h-2zM15 16h1v1h-1zM18 16h4v1h-4zM24 16h4v1h-4zM31 16h3v1h-3zM4 17h1v1h-1zM7 17h3v1h-3zM11 17h3v1h-3zM16 17h1v1h-1zM18 17h2v1h-2zM21 17h1v1h-1zM23 17h1v1h-1zM28 17h2v1h-2zM31 17h1v1h-1zM35 17h1v1h-1zM4 18h3v1h-3zM8 18h3v1h-3zM14 18h2v1h-2zM17 18h1v1h-1zM21 18h1v1h-1zM23 18h1v1h-1zM25 18h2v1h-2zM30 18h1v1h-1zM32 18h3v1h-3zM6 19h1v1h-1zM8 19h2v1h-2zM11 19h1v1h-1zM15 19h2v1h-2zM19 19h2v1h-2zM25 19h3v1h-3zM29 19h2v1h-2zM32 19h1v1h-1zM34 19h1v1h-1zM4 20h2v1h-2zM10 20h2v1h-2zM16 20h1v1h-1zM19 20h2v1h-2zM22 20h6v1h-6zM29 20h2v1h-2zM32 20h1v1h-1zM34 20h1v1h-1zM5 21h1v1h-1zM7 21h1v1h-1zM9 21h1v1h-1zM13 21h1v1h-1zM15 21h1v1h-1zM19 21h1v1h-1zM21 21h1v1h-1zM24 21h1v1h-1zM27 21h1v1h-1zM30 21h1v1h-1zM32 21h2v1h-2zM36 21h1v1h-1zM5 22h1v1h-1zM7 22h4v1h-4zM13 22h5v1h-5zM19 22h2v1h-2zM22 22h1v1h-1zM29 22h4v1h-4zM34 22h1v1h-1zM5 23h2v1h-2zM8 23h1v1h-1zM11 23h1v1h-1zM13 23h1v1h-1zM16 23h1v1h-1zM18 23h1v1h-1zM20 23h2v1h-2zM23 23h2v1h-2zM28 23h3v1h-3zM32 23h1v1h-1zM36 23h1v1h-1zM5 24h3v1h-3zM9 24h2v1h-2zM12 24h1v1h-1zM15 24h2v1h-2zM21 24h3v1h-3zM25 24h1v1h-1zM33 24h3v1h-3zM4 25h1v1h-1zM8 25h1v1h-1zM11 25h1v1h-1zM16 25h1v1h-1zM21 25h6v1h-6zM33 25h1v1h-1zM36 25h1v1h-1zM7 26h1v1h-1zM10 26h1v1h-1zM12 26h1v1h-1zM14 26h1v1h-1zM17 26h2v1h-2zM20 26h1v1h-1zM22 26h1v1h-1zM26 26h2v1h-2zM29 26h2v1h-2zM32 26h1v1h-1zM34 26h3v1h-3zM5 27h1v1h-1zM7 27h3v1h-3zM14 27h3v1h-3zM18 27h2v1h-2zM22 27h1v1h-1zM24 27h1v1h-1zM26 27h1v1h-1zM28 27h1v1h-1zM30 27h4v1h-4zM35 27h1v1h-1zM4 28h1v1h-1zM7 28h4v1h-4zM13 28h2v1h-2zM17 28h1v1h-1zM19 28h3v1h-3zM24 28h1v1h-1zM26 28h1v1h-1zM28 28h5v1h-5zM35 28h2v1h-2zM12 29h2v1h-2zM18 29h3v1h-3zM23 29h1v1h-1zM28 29h1v1h-1zM32 29h2v1h-2zM35 29h1v1h-1zM4 30h7v1h-7zM12 30h1v1h-1zM14 30h1v1h-1zM16 30h2v1h-2zM21 30h4v1h-4zM26 30h3v1h-3zM30 30h1v1h-1zM32 30h1v1h-1zM35 30h1v1h-1zM4 31h1v1h-1zM10 31h1v1h-1zM12 31h2v1h-2zM15 31h2v1h-2zM18 31h1v1h-1zM20 31h1v1h-1zM23 31h3v1h-3zM27 31h2v1h-2zM32 31h3v1h-3zM36 31h1v1h-1zM4 32h1v1h-1zM6 32h3v1h-3zM10 32h1v1h-1zM13 32h1v1h-1zM15 32h5v1h-5zM22 32h1v1h-1zM26 32h7v1h-7zM34 32h1v1h-1zM36 32h1v1h-1zM4 33h1v1h-1zM6 33h3v1h-3zM10 33h1v1h-1zM12 33h1v1h-1zM14 33h2v1h-2zM17 33h1v1h-1zM19 33h1v1h-1zM21 33h1v1h-1zM23 33h2v1h-2zM26 33h3v1h-3zM31 33h1v1h-1zM33 33h1v1h-1zM36 33h1v1h-1zM4 34h1v1h-1zM6 34h3v1h-3zM10 34h1v1h-1zM12 34h2v1h-2zM15 34h3v1h-3zM19 34h2v1h-2zM24 34h2v1h-2zM27 34h5v1h-5zM33 34h2v1h-2zM4 35h1v1h-1zM10 35h1v1h-1zM14 35h2v1h-2zM18 35h1v1h-1zM21 35h3v1h-3zM26 35h1v1h-1zM29 35h1v1h-1zM31 35h2v1h-2zM36 35h1v1h-1zM4 36h7v1h-7zM12 36h2v1h-2zM15 36h3v1h-3zM20 36h2v1h-2zM25 36h1v1h-1zM27 36h1v1h-1zM32 36h3v1h-3z",
  },
];

function SocialIcon({ id }: { id: "facebook" | "instagram" }) {
  if (id === "facebook") {
    return (
      <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[11px] bg-[#1877F2] text-white shadow-[0_6px_18px_rgba(24,119,242,0.38)]">
        <svg viewBox="0 0 24 24" className="h-8 w-8 translate-y-[2px]" fill="currentColor" aria-hidden="true">
          <path d="M13.85 22v-8.1h2.72l.41-3.16h-3.13V8.72c0-.91.25-1.54 1.56-1.54h1.67V4.35c-.29-.04-1.28-.12-2.44-.12-2.41 0-4.07 1.47-4.07 4.18v2.33H7.84v3.16h2.73V22h3.28Z" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] text-white shadow-[0_6px_18px_rgba(214,36,159,0.38)]"
      style={{
        background:
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
      }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}

function SocialWordmark({ id, label }: { id: "facebook" | "instagram"; label: string }) {
  if (id === "facebook") {
    return (
      <h3
        className="text-[1.6rem] leading-none font-extrabold tracking-[-0.045em] text-[#1877F2]"
        style={{ fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif" }}
      >
        {label.toLowerCase()}
      </h3>
    );
  }
  return (
    <h3
      className="inline-block bg-[linear-gradient(45deg,#fdf497_0%,#fd5949_38%,#d6249f_72%,#9b51e0_100%)] bg-clip-text pr-1 text-[2rem] leading-[0.92] font-normal text-transparent"
      style={{ fontFamily: "'Grand Hotel', 'Brush Script MT', 'Segoe Script', 'Fraunces', Georgia, serif" }}
    >
      {label}
    </h3>
  );
}

export function Callejon() {
  const { copy } = useI18n();
  return (
    <section id="redes" className="relative isolate overflow-hidden border-y border-brasa/20 bg-tinta">
      <img
        src="images/redes.jpg"
        alt={copy.alley.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-[50%_36%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(15,22,38,0.93)_0%,rgba(15,22,38,0.82)_48%,rgba(15,22,38,0.72)_100%)]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="label text-brasa">{copy.alley.eyebrow}</p>
            <h2 className="display mt-4 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.04] font-black tracking-[-0.025em] text-cal">
              {copy.alley.lead}
            </h2>
            <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-cal/75">
              {copy.alley.body}
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {SOCIAL_NETWORKS.map((net, i) => {
              const info = copy.alley[net.id];
              return (
                <Reveal key={net.id} delay={i * 100}>
                  <article className="flex h-full flex-col justify-between border border-brasa/35 bg-tinta/78 p-6 backdrop-blur-md transition duration-300 hover:border-brasa/75 hover:bg-tinta/88">
                    <div className="flex items-center gap-3.5 border-b border-cal/15 pb-4">
                      <SocialIcon id={net.id} />
                      <div className="min-w-0">
                        <SocialWordmark id={net.id} label={info.label} />
                        <p className="mt-1.5 truncate text-[0.78rem] tracking-wide text-cal/65">
                          {info.handle}
                        </p>
                      </div>
                    </div>

                    <div className="my-6 flex flex-col items-center">
                      <a
                        href={net.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={info.qrAlt}
                        className="group block w-full max-w-[196px] border border-brasa/35 bg-cal p-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition duration-300 hover:scale-[1.02] hover:border-brasa"
                      >
                        <svg
                          viewBox={`0 0 ${net.qrSize} ${net.qrSize}`}
                          className="block h-auto w-full"
                          role="img"
                          aria-label={info.qrAlt}
                        >
                          <rect width={net.qrSize} height={net.qrSize} fill="#f8f6f0" />
                          <path d={net.qrPath} fill="#0f1626" shapeRendering="crispEdges" />
                        </svg>
                      </a>
                      <p className="mt-3 text-[0.7rem] font-medium tracking-[0.16em] text-cal/55 uppercase">
                        {copy.alley.scanHint}
                      </p>
                    </div>

                    <div className="border-t border-cal/15 pt-4">
                      <a
                        href={net.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 border border-brasa bg-brasa px-4 py-3 text-[0.76rem] font-semibold tracking-[0.14em] text-tinta uppercase transition hover:border-cal hover:bg-cal"
                      >
                        <span>{info.cta}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                      <a
                        href={net.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2.5 block truncate text-center text-[0.74rem] text-cal/65 underline decoration-cal/25 underline-offset-4 transition hover:text-brasa hover:decoration-brasa"
                      >
                        {net.shortUrl}
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
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
              <img src="images/fiesta.jpg" alt={copy.festivals.imageAlt} className="w-full object-cover" style={{ aspectRatio: "16 / 10" }} />
            </figure>
            <div className="mt-6 border border-cal/25 p-5">
              <p className="label text-brasa">{copy.festivals.marketEyebrow}</p>
              <ul className="mt-4 space-y-3 border-b border-cal/20 pb-4">
                {copy.festivals.marketDays.map((m) => (
                  <li key={m.dia} className="text-[0.9rem] leading-snug">
                    <p className="font-semibold text-cal">
                      <span className="text-brasa">{m.dia}</span> — {m.zona}
                    </p>
                    <p className="mt-0.5 text-[0.82rem] text-cal/70">{m.lugar}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-cal/80">{copy.festivals.marketBody}</p>
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
            <Reveal key={g.t} delay={i * 45} className={g.list ? "sm:col-span-2" : ""}>
              <div className="flex flex-col gap-1 border-b border-tinta/15 py-5 transition hover:bg-cal/70">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <dt className="display text-[1.25rem] leading-tight font-black text-tinta">{g.t}</dt>
                  {g.list && g.m && <span className="text-[0.82rem] text-naranja">{g.m}</span>}
                </div>
                {g.d && <dd className="text-[0.95rem] leading-relaxed text-tinta/75">{g.d}</dd>}
                {!g.list && g.m && <dd className="text-[0.82rem] text-naranja">{g.m}</dd>}
                {g.list && (
                  <dd className="mt-3 grid gap-3 sm:grid-cols-2">
                    {g.list.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-col justify-between gap-1 border border-tinta/15 bg-cal/60 px-4 py-3"
                      >
                        <p className="font-semibold text-tinta">{item.name}</p>
                        <p className="text-[0.88rem] text-tinta/75">{item.address}</p>
                        <a
                          href={`tel:+34${item.phone.replace(/\s+/g, "")}`}
                          className="tabular mt-0.5 inline-flex w-fit items-center gap-1.5 text-[0.86rem] font-semibold text-naranja underline decoration-naranja/35 underline-offset-4 transition hover:text-tinta hover:decoration-tinta"
                        >
                          Tel. {item.phone}
                        </a>
                      </div>
                    ))}
                  </dd>
                )}
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
