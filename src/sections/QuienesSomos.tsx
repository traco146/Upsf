import { Reveal, SectionHead } from "../lib/ui";
import { useI18n } from "../i18n";

function Inicial({ nombre, pendiente }: { nombre: string; pendiente?: boolean }) {
  if (pendiente) {
    return (
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-tinta/30">
        <span className="label text-tinta/40">?</span>
      </div>
    );
  }
  const partes = nombre.split(" ");
  const iniciales = partes.length >= 2 ? partes[0][0] + partes[1][0] : partes[0][0];
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-naranja/40 bg-naranja/15">
      <span className="display select-none text-[1.6rem] font-black leading-none" style={{ color: "var(--color-naranja)" }}>
        {iniciales.toUpperCase()}
      </span>
    </div>
  );
}

export default function QuienesSomos() {
  const { copy } = useI18n();
  return (
    <section id="quienes-somos" className="scroll-mt-20 bg-cal">
      <div className="bg-verde text-cal">
        <div className="mx-auto w-full max-w-[1440px] px-5 pt-28 pb-16 sm:px-8 lg:px-14">
          <Reveal>
            <p className="label text-brasa">{copy.who.eyebrow}</p>
            <h1 className="display mt-4 text-[clamp(2.8rem,8vw,6.5rem)] font-black leading-[0.88] tracking-[-0.03em] text-cal">
              {copy.who.titleA}
              <br />
              <em className="not-italic text-naranja">{copy.who.titleB}</em>
            </h1>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-cal/80">{copy.who.intro}</p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <Reveal>
          <SectionHead eyebrow={copy.who.teamEyebrow} titulo={copy.who.teamTitle} entrada={copy.who.teamIntro} />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.who.members.map((m, i) => (
            <Reveal key={m.nombre + i} delay={i * 70}>
              <article className={`flex h-full flex-col border p-6 transition ${m.pendiente ? "border-dashed border-tinta/25 bg-cal2/60" : "border-tinta/20 bg-white/70 hover:-translate-y-1 hover:border-naranja/50 hover:shadow-[4px_4px_0_rgba(192,144,51,0.15)]"}`}>
                <div className="flex items-center gap-4">
                  <Inicial nombre={m.nombre} pendiente={m.pendiente} />
                  <div>
                    <h3 className={`display text-[1.15rem] font-black leading-tight ${m.pendiente ? "text-tinta/40" : "text-tinta"}`}>{m.nombre}</h3>
                    <p className={`label mt-1 ${m.pendiente ? "text-tinta/30" : "text-naranja"}`}>{m.cargo}</p>
                  </div>
                </div>
                <p className={`mt-5 flex-1 text-[0.94rem] leading-relaxed ${m.pendiente ? "text-tinta/40 italic" : "text-tinta/75"}`}>{m.bio}</p>
                {!m.pendiente && (
                  <div className="mt-5 border-t border-tinta/15 pt-4">
                    <a href="#contacto" className="label text-naranja transition hover:text-tinta">{copy.who.contactCta}</a>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 border-t border-tinta/20 pt-14">
            <p className="label text-taupe">{copy.who.valuesEyebrow}</p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {copy.who.values.map((v) => (
                <div key={v.t} className="border-t-4 border-naranja pt-5">
                  <span className="text-3xl" role="img" aria-label={v.t}>{v.icono}</span>
                  <h3 className="display mt-3 text-[1.25rem] font-black text-tinta">{v.t}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-tinta/70">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
