import { useEffect, useState, type FormEvent } from "react";
import { Reveal, SectionHead } from "../lib/ui";
import { useI18n, type CategoryKey, type Notice } from "../i18n";

const COLORS: Record<CategoryKey, string> = {
  water: "#2e6a6b",
  health: "#1b3a2d",
  works: "#a32b1e",
  associations: "#17241e",
  culture: "#b8480f",
  other: "#6b6357",
};

export default function Tablon() {
  const { copy } = useI18n();
  const [avisos, setAvisos] = useState<Notice[]>(copy.board.initialNotices);
  const [cat, setCat] = useState<CategoryKey>("other");
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [autor, setAutor] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setAvisos(copy.board.initialNotices);
    setCat("other");
    setTitulo("");
    setTexto("");
    setAutor("");
    setError("");
  }, [copy]);

  function publicar(e: FormEvent) {
    e.preventDefault();
    if (titulo.trim().length < 4 || texto.trim().length < 10) {
      setError(copy.board.errorShort);
      return;
    }
    if (!autor.trim()) {
      setError(copy.board.errorAuthor);
      return;
    }
    const id = Date.now();
    const fecha = new Date().toLocaleDateString(copy.locale, { day: "2-digit", month: "short" });
    setAvisos((a) => [{ id, cat, titulo: titulo.trim(), texto: texto.trim(), autor: autor.trim(), fecha, nuevo: true }, ...a]);
    setTitulo("");
    setTexto("");
    setAutor("");
    setError("");
    setCat("other");
  }

  const categoryEntries = Object.entries(copy.board.categories) as [CategoryKey, string][];

  return (
    <section id="tablon" className="relative bg-cal">
      <div className="border-y border-tinta/15">
        <img src="images/mercado.jpg" alt={copy.board.imageAlt} className="h-44 w-full object-cover object-[50%_62%] sm:h-60" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHead eyebrow={copy.board.eyebrow} titulo={copy.board.title} entrada={copy.board.intro} />
          <p className="display tabular shrink-0 text-[clamp(2.6rem,6vw,4.5rem)] font-black leading-none text-naranja">
            {String(avisos.length).padStart(2, "0")}
            <span className="block text-right text-[0.7rem] font-normal uppercase tracking-[0.2em] text-taupe">{copy.board.countLabel}</span>
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,25rem)_minmax(0,1fr)] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <form onSubmit={publicar} className="border border-tinta/20 bg-cal2 p-5 shadow-[6px_6px_0_rgba(15,22,38,0.12)] sm:p-6">
              <p className="label text-tinta">{copy.board.formTitle}</p>

              <fieldset className="mt-5">
                <legend className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-taupe">{copy.board.category}</legend>
                <div className="flex flex-wrap gap-2">
                  {categoryEntries.map(([key, label]) => {
                    const on = key === cat;
                    return (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setCat(key)}
                        aria-pressed={on}
                        className={`label rounded-none border px-3 py-2 transition ${on ? "border-transparent text-cal" : "border-tinta/25 text-tinta/70 hover:border-tinta/60 hover:text-tinta"}`}
                        style={on ? { backgroundColor: COLORS[key] } : undefined}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <label className="mt-5 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-taupe">
                {copy.board.titleLabel}
                <input value={titulo} onChange={(e) => setTitulo(e.target.value)} maxLength={80} placeholder={copy.board.titlePlaceholder} className="mt-2 w-full border-0 border-b-2 border-tinta/25 bg-transparent pb-2 font-display text-[1.15rem] font-semibold text-tinta placeholder:text-taupe/60 focus:border-naranja focus:outline-none" />
              </label>

              <label className="mt-5 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-taupe">
                {copy.board.messageLabel}
                <textarea value={texto} onChange={(e) => setTexto(e.target.value)} rows={4} maxLength={320} placeholder={copy.board.messagePlaceholder} className="mt-2 w-full resize-none border-0 border-b-2 border-tinta/25 bg-transparent pb-2 text-[0.95rem] leading-relaxed text-tinta placeholder:text-taupe/60 focus:border-naranja focus:outline-none" />
              </label>

              <label className="mt-5 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-taupe">
                {copy.board.authorLabel}
                <input value={autor} onChange={(e) => setAutor(e.target.value)} maxLength={40} placeholder={copy.board.authorPlaceholder} className="mt-2 w-full border-0 border-b-2 border-tinta/25 bg-transparent pb-2 text-[0.95rem] text-tinta placeholder:text-taupe/60 focus:border-naranja focus:outline-none" />
              </label>

              <p role="status" aria-live="polite" className={`mt-4 min-h-[2.5rem] text-[0.82rem] leading-snug ${error ? "text-alerta" : "text-taupe"}`}>{error || copy.board.fallback}</p>

              <button type="submit" className="label mt-1 w-full cursor-pointer bg-tinta px-5 py-4 text-cal transition hover:bg-naranja">{copy.board.submit}</button>
            </form>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {avisos.length === 0 && (
              <li className="border-2 border-dashed border-tinta/25 p-10 text-center sm:col-span-2">
                <p className="display text-2xl font-black text-tinta">{copy.board.emptyTitle}</p>
                <p className="mt-2 text-sm text-taupe">{copy.board.emptyBody}</p>
              </li>
            )}
            {avisos.map((a, i) => (
              <Reveal as="li" key={a.id} delay={Math.min(i, 5) * 60} className={`h-full ${a.nuevo ? "pin-in" : ""}`}>
                <article className="group flex h-full flex-col border border-tinta/20 bg-white/60 p-5 transition hover:-translate-y-1 hover:border-tinta/50 hover:shadow-[5px_5px_0_rgba(15,22,38,0.1)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="label px-2 py-1 text-cal" style={{ backgroundColor: COLORS[a.cat] }}>{copy.board.categories[a.cat]}</span>
                    <span className="label text-taupe">{a.fecha}</span>
                  </div>
                  <h3 className="display mt-4 text-[1.35rem] font-black leading-[1.1] text-tinta">{a.titulo}</h3>
                  <p className="mt-3 flex-1 text-[0.94rem] leading-relaxed text-tinta/75">{a.texto}</p>
                  <div className="mt-5 flex items-end justify-between gap-3 border-t border-tinta/15 pt-3">
                    <p className="text-[0.78rem] italic text-taupe">— {a.autor}</p>
                    <button onClick={() => setAvisos((list) => list.filter((x) => x.id !== a.id))} className="label cursor-pointer text-taupe transition hover:text-alerta" aria-label={`${copy.board.remove}: ${a.titulo}`}>{copy.board.remove}</button>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
