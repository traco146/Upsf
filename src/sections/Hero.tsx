import { Marca } from "../lib/ui";
import { useI18n } from "../i18n";

export default function Hero() {
  const { copy } = useI18n();
  const hero = copy.hero;

  return (
    <section className="relative isolate overflow-hidden bg-tinta text-cal">
      <div className="absolute inset-0">
        <img
          src="images/hero.jpg"
          alt={hero.imageAlt}
          className="h-full w-full object-cover object-[50%_58%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,22,38,0.9)_0%,rgba(15,22,38,0.6)_46%,rgba(15,22,38,0.96)_100%)]" />
        <div className="absolute inset-0 bg-verde/25 mix-blend-multiply" />
      </div>

      <div className="relative mx-auto flex min-h-[94svh] w-full max-w-[1440px] flex-col justify-between px-5 pt-24 pb-7 sm:px-8 lg:px-14">
        <div className="flex items-start justify-between gap-6 border-b border-cal/25 pb-4">
          <p className="label text-brasa">{hero.topLeft}</p>
          <p className="label hidden text-cal/60 sm:block">{hero.topRight}</p>
        </div>

        <div className="drop-in py-10">
          <p className="display text-[clamp(1.35rem,3.6vw,2.6rem)] font-light italic text-brasa">
            {hero.kicker}
          </p>
          <h1 className="display -ml-[0.04em] text-[clamp(3.1rem,13.2vw,10.5rem)] font-black leading-[0.84] tracking-[-0.035em] text-cal">
            {hero.titleA}
            <br />
            {hero.titleB}
          </h1>
          <div className="mt-7 flex max-w-3xl items-center gap-4">
            <span className="h-px flex-1 bg-brasa/60" />
            <p className="label text-cal">{hero.tagline}</p>
          </div>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-cal/85">{hero.body}</p>
        </div>

        <div className="grid grid-cols-2 gap-px border-t border-cal/25 bg-cal/20 sm:grid-cols-4">
          {hero.stats.map((d) => (
            <div key={d.k} className="bg-tinta/70 px-4 py-4 backdrop-blur-[2px]">
              <p className="display tabular text-[clamp(1.5rem,2.6vw,2.15rem)] font-black leading-none text-cal">
                {d.v}
              </p>
              <p className="mt-2 text-[0.7rem] leading-tight text-cal/75">{d.k}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 right-5 hidden lg:block">
        <Marca className="h-24 w-auto text-brasa/40" mode="mono" />
      </div>
    </section>
  );
}
