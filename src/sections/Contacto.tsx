import { useState, type FormEvent } from "react";
import { Reveal, SectionHead } from "../lib/ui";
import { useI18n } from "../i18n";

type Campo = "nombre" | "email" | "telefono" | "asunto" | "mensaje";
type Errores = Partial<Record<Campo, string>>;
const CORREO_DESTINO = "contacto@upsanfulgencio.es";

export default function Contacto() {
  const { copy } = useI18n();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState<Errores>({});
  const [enviado, setEnviado] = useState(false);

  function validar(): Errores {
    const e: Errores = {};
    if (nombre.trim().length < 2) e.nombre = copy.contact.errors.nombre;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = copy.contact.errors.email;
    if (!asunto) e.asunto = copy.contact.errors.asunto;
    if (mensaje.trim().length < 20) e.mensaje = copy.contact.errors.mensaje;
    return e;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const err = validar();
    setErrores(err);
    if (Object.keys(err).length > 0) return;

    const cuerpo = encodeURIComponent(`Name: ${nombre}\nPhone: ${telefono || "—"}\n\n${mensaje}`);
    const sub = encodeURIComponent(`[UpSF] ${asunto} — ${nombre}`);
    window.location.href = `mailto:${CORREO_DESTINO}?subject=${sub}&body=${cuerpo}`;
    setEnviado(true);
  }

  function campo(label: string, id: Campo, value: string, onChange: (v: string) => void, extra?: { type?: string; required?: boolean; placeholder?: string }) {
    return (
      <div>
        <label htmlFor={id} className="block text-[0.72rem] font-semibold tracking-[0.14em] text-taupe uppercase">
          {label}
          {extra?.required !== false && <span className="ml-1 text-naranja" aria-label={copy.contact.labels.required}>*</span>}
        </label>
        <input
          id={id}
          type={extra?.type ?? "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={extra?.placeholder}
          className={`mt-2 w-full border-0 border-b-2 bg-transparent pb-2 text-[0.95rem] text-tinta placeholder:text-taupe/50 transition focus:outline-none ${errores[id] ? "border-alerta focus:border-alerta" : "border-tinta/25 focus:border-naranja"}`}
        />
        {errores[id] && <p role="alert" className="mt-1 text-[0.78rem] text-alerta">{errores[id]}</p>}
      </div>
    );
  }

  return (
    <section id="contacto" className="min-h-screen scroll-mt-20 bg-cal">
      <div className="bg-verde text-cal">
        <div className="mx-auto w-full max-w-[1440px] px-5 pt-28 pb-16 sm:px-8 lg:px-14">
          <Reveal>
            <p className="label text-brasa">{copy.contact.eyebrow}</p>
            <h1 className="display mt-4 text-[clamp(2.8rem,8vw,6.5rem)] font-black leading-[0.88] tracking-[-0.03em] text-cal">{copy.contact.title}</h1>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-cal/80">{copy.contact.intro}</p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-20">
          <div>
            {enviado ? (
              <Reveal>
                <div className="border-2 border-naranja bg-naranja/5 p-10 text-center">
                  <span className="text-5xl" role="img" aria-label={copy.contact.sentTitle}>☀️</span>
                  <h2 className="display mt-6 text-[2rem] font-black text-tinta">{copy.contact.sentTitle}</h2>
                  <p className="mt-3 text-[1rem] leading-relaxed text-tinta/70">{copy.contact.sentBody} <strong className="text-tinta">{email}</strong>.</p>
                  <button onClick={() => { setNombre(""); setEmail(""); setTelefono(""); setAsunto(""); setMensaje(""); setEnviado(false); }} className="label mt-8 inline-block cursor-pointer bg-tinta px-8 py-4 text-cal transition hover:bg-naranja">{copy.contact.sendAnother}</button>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                <Reveal>
                  <SectionHead eyebrow={copy.contact.formEyebrow} titulo={copy.contact.formTitle} entrada={copy.contact.formIntro} />
                </Reveal>

                <Reveal delay={80}>
                  <div className="grid gap-8 sm:grid-cols-2">
                    {campo(copy.contact.labels.nombre, "nombre", nombre, setNombre, { placeholder: copy.contact.placeholders.nombre })}
                    {campo(copy.contact.labels.email, "email", email, setEmail, { type: "email", placeholder: copy.contact.placeholders.email })}
                  </div>
                </Reveal>

                <Reveal delay={120}>
                  <div className="grid gap-8 sm:grid-cols-2">
                    {campo(copy.contact.labels.telefono, "telefono", telefono, setTelefono, { type: "tel", required: false, placeholder: copy.contact.placeholders.telefono })}
                    <div>
                      <label htmlFor="asunto" className="block text-[0.72rem] font-semibold tracking-[0.14em] text-taupe uppercase">
                        {copy.contact.labels.asunto} <span className="ml-1 text-naranja" aria-label={copy.contact.labels.required}>*</span>
                      </label>
                      <select
                        id="asunto"
                        value={asunto}
                        onChange={(e) => setAsunto(e.target.value)}
                        className={`mt-2 w-full appearance-none cursor-pointer border-0 border-b-2 bg-transparent pb-2 text-[0.95rem] text-tinta transition focus:outline-none ${errores.asunto ? "border-alerta" : "border-tinta/25 focus:border-naranja"}`}
                      >
                        <option value="">{copy.contact.labels.choose}</option>
                        {copy.contact.subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errores.asunto && <p role="alert" className="mt-1 text-[0.78rem] text-alerta">{errores.asunto}</p>}
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={160}>
                  <div>
                    <label htmlFor="mensaje" className="block text-[0.72rem] font-semibold tracking-[0.14em] text-taupe uppercase">
                      {copy.contact.labels.mensaje} <span className="ml-1 text-naranja" aria-label={copy.contact.labels.required}>*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      rows={6}
                      maxLength={1200}
                      placeholder={copy.contact.placeholders.mensaje}
                      className={`mt-2 w-full resize-none border-0 border-b-2 bg-transparent pb-2 text-[0.95rem] leading-relaxed text-tinta placeholder:text-taupe/50 transition focus:outline-none ${errores.mensaje ? "border-alerta" : "border-tinta/25 focus:border-naranja"}`}
                    />
                    <div className="mt-1 flex items-start justify-between gap-4">
                      {errores.mensaje ? <p role="alert" className="text-[0.78rem] text-alerta">{errores.mensaje}</p> : <p className="text-[0.78rem] text-taupe">{copy.contact.minimum}</p>}
                      <p className="label shrink-0 text-taupe">{mensaje.length} / 1200</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <button type="submit" className="label cursor-pointer bg-tinta px-8 py-4 text-cal transition hover:bg-naranja">{copy.contact.submit}</button>
                    <p className="text-[0.78rem] leading-snug text-taupe">{copy.contact.helper} <span className="text-tinta">{CORREO_DESTINO}</span>.</p>
                  </div>
                </Reveal>
              </form>
            )}
          </div>

          <Reveal delay={80} className="lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-6">
              <div className="border border-tinta/20 bg-cal2 p-6">
                <p className="label text-naranja">{copy.contact.office}</p>
                <p className="display mt-3 text-[1.3rem] font-black text-tinta">San Fulgencio</p>
                <div className="mt-4 space-y-2 text-[0.92rem] text-tinta/70">
                  <p>Plaza Constitución, 26</p>
                  <p>03177 San Fulgencio · Alicante</p>
                  <a href="tel:+34966794201" className="block font-semibold text-tinta transition hover:text-naranja">966 79 42 01</a>
                  <a href="https://www.sanfulgencio.es" target="_blank" rel="noopener noreferrer" className="block transition hover:text-naranja">sanfulgencio.es</a>
                </div>
              </div>

              <div className="border border-tinta/20 bg-cal2 p-6">
                <p className="label text-naranja">{copy.contact.writeDirect}</p>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-tinta/70">{copy.contact.writeDirectBody}</p>
                <a href={`mailto:${CORREO_DESTINO}`} className="mt-3 block break-all text-[0.95rem] font-semibold text-tinta transition hover:text-naranja">{CORREO_DESTINO}</a>
              </div>

              <div className="border border-naranja/40 bg-naranja/5 p-6">
                <p className="label text-naranja">{copy.contact.join}</p>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-tinta/70">{copy.contact.joinBody}</p>
              </div>

              <div className="border border-tinta/15 p-6">
                <p className="label text-taupe">{copy.contact.schedule}</p>
                <div className="mt-4 space-y-2 text-[0.88rem] text-tinta/70">
                  <div className="flex justify-between"><span>{copy.contact.weekdays}</span><span className="font-semibold text-tinta">10:00 – 14:00</span></div>
                  <div className="flex justify-between"><span>{copy.contact.afternoons}</span><span className="font-semibold text-tinta">17:00 – 19:30</span></div>
                  <div className="flex justify-between"><span>{copy.contact.saturdays}</span><span className="font-semibold text-tinta">10:00 – 13:00</span></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
