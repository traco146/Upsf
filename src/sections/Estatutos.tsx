import { useState } from "react";
import { Reveal } from "../lib/ui";
import { useI18n } from "../i18n";

export default function Estatutos() {
  const { copy } = useI18n();
  const [abierto, setAbierto] = useState<string | null>("I");

  return (
    <section id="estatutos" className="min-h-screen scroll-mt-20 bg-cal">
      <div className="bg-verde text-cal">
        <div className="mx-auto w-full max-w-[1440px] px-5 pt-28 pb-16 sm:px-8 lg:px-14">
          <Reveal>
            <p className="label text-brasa">{copy.statutes.eyebrow}</p>
            <h1 className="display mt-4 text-[clamp(2.8rem,8vw,6.5rem)] font-black leading-[0.88] tracking-[-0.03em] text-cal">
              {copy.statutes.titleA}
              <br />
              <em className="not-italic text-naranja">{copy.statutes.titleB}</em>
            </h1>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-cal/80">{copy.statutes.intro}</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-6 border-t border-cal/25 pt-7">
              {copy.statutes.facts.map((f) => (
                <div key={f.k} className="border-l-2 border-naranja pl-4">
                  <p className="display tabular text-[1.6rem] font-black leading-none text-cal">{f.v}</p>
                  <p className="label mt-1 text-cal/60">{f.k}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <nav className="lg:sticky lg:top-24 lg:self-start" aria-label={copy.statutes.index}>
            <p className="label text-taupe">{copy.statutes.index}</p>
            <ul className="mt-4 space-y-1">
              {copy.statutes.chapters.map((cap) => (
                <li key={cap.num}>
                  <button
                    onClick={() => setAbierto(cap.num === abierto ? null : cap.num)}
                    className={`w-full border-l-4 px-3 py-3 text-left text-[0.9rem] leading-snug transition ${abierto === cap.num ? "border-naranja bg-naranja/10 font-semibold text-tinta" : "border-transparent text-tinta/60 hover:border-tinta/30 hover:text-tinta"}`}
                  >
                    <span className="label mr-2 text-naranja">{copy.statutes.chapter} {cap.num}</span>
                    {cap.titulo}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 border border-dashed border-tinta/25 p-4">
              <p className="text-[0.78rem] leading-relaxed text-taupe">{copy.statutes.legalNote}</p>
            </div>
          </nav>

          <div className="space-y-3">
            {copy.statutes.chapters.map((cap) => {
              const isOpen = abierto === cap.num;
              return (
                <Reveal key={cap.num}>
                  <div className={`border transition-colors ${isOpen ? "border-naranja/40" : "border-tinta/20"}`}>
                    <button
                      onClick={() => setAbierto(isOpen ? null : cap.num)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-cal2/60"
                      aria-expanded={isOpen}
                    >
                      <div>
                        <span className="label text-naranja">{copy.statutes.chapter} {cap.num}</span>
                        <p className="display mt-1 text-[1.3rem] font-black leading-tight text-tinta">{cap.titulo}</p>
                      </div>
                      <span className={`shrink-0 text-2xl text-naranja transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-naranja/20 px-6 pb-8 pt-6">
                        <div className="space-y-8">
                          {cap.articulos.map((art) => (
                            <div key={art.num} className="grid gap-4 sm:grid-cols-[4rem_minmax(0,1fr)]">
                              <div className="pt-1">
                                <span className="display tabular text-[2.2rem] font-black leading-none text-naranja/40">{art.num.padStart(2, "0")}</span>
                              </div>
                              <div>
                                <h3 className="display text-[1.1rem] font-black text-tinta">Art. {art.num}. {art.titulo}</h3>
                                <div className="mt-3 space-y-2">
                                  {art.texto.map((p, pi) => (
                                    <p key={pi} className="text-[0.95rem] leading-relaxed text-tinta/75">{p}</p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
