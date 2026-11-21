import { useEffect, useMemo, useState } from "react";
import Hero from "./sections/Hero";
import Tablon from "./sections/Tablon";
import { Callejon, Cifras, Fiestas, Guia, Manifiesto, Pie, Vecinos } from "./sections/Cuerpo";
import QuienesSomos from "./sections/QuienesSomos";
import Estatutos from "./sections/Estatutos";
import Contacto from "./sections/Contacto";
import { Marca } from "./lib/ui";
import { I18nProvider, useI18n, type Language, type Pagina } from "./i18n";

const PAGE_HASHES: Pagina[] = ["quienes-somos", "estatutos", "contacto"];
const HOME_SECTION_IDS = ["cifras", "pueblo", "fiestas", "tablon", "guia", "vecinos"];

function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, languages, copy } = useI18n();
  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${compact ? "" : "rounded-full border border-tinta/15 bg-cal/90 px-2 py-2 shadow-sm backdrop-blur"}`}>
      {!compact && <span className="label mr-1 text-taupe">{copy.languages.label}</span>}
      {languages.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`label cursor-pointer rounded-full border px-2.5 py-2 transition sm:px-3 ${active ? "border-naranja bg-naranja text-cal" : "border-tinta/15 bg-white/70 text-tinta/75 hover:border-naranja hover:text-naranja"}`}
            aria-pressed={active}
            title={l.name}
          >
            <span className="sm:hidden">{l.short}</span>
            <span className="hidden sm:inline">{l.name}</span>
          </button>
        );
      })}
    </div>
  );
}

function Cabecera({ pagina, setPagina, menuAbierto, setMenuAbierto, onJoin }: { pagina: Pagina; setPagina: (p: Pagina) => void; menuAbierto: boolean; setMenuAbierto: (v: boolean) => void; onJoin: () => void; }) {
  const { copy } = useI18n();
  const navInicio = copy.nav.homeSections;
  const navPaginas = copy.nav.pages;

  function goToPage(p: Pagina) {
    setPagina(p);
    setMenuAbierto(false);
    window.scrollTo(0, 0);
    if (p === "inicio") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    } else {
      window.location.hash = p;
    }
  }

  function handleJoin() {
    setMenuAbierto(false);
    onJoin();
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-tinta/15 bg-cal/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-3 px-5 py-2 sm:gap-6 sm:px-8 lg:px-14">
        <button onClick={() => goToPage("inicio")} className="flex cursor-pointer items-center gap-2 text-tinta" aria-label={copy.nav.home}>
          <Marca className="h-12 w-auto" />
        </button>

        <nav aria-label={copy.nav.sections} className="hidden lg:flex lg:items-center lg:gap-1">
          {pagina === "inicio" && navInicio.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="label px-3 py-2 text-tinta/60 transition hover:text-naranja">{n.t}</a>
          ))}
          {pagina === "inicio" && <span className="mx-2 h-4 w-px bg-tinta/20" aria-hidden="true" />}
          {navPaginas.map((n) => (
            <button key={n.pagina} onClick={() => goToPage(n.pagina)} className={`label cursor-pointer px-3 py-2 transition ${pagina === n.pagina ? "border-b-2 border-naranja text-naranja" : "text-tinta/60 hover:text-naranja"}`}>{n.t}</button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* ✦ Quiero Afiliarme — botón estrella */}
          <button
            onClick={handleJoin}
            className="join-cta label hidden shrink-0 cursor-pointer border-2 border-naranja px-4 py-2.5 text-naranja transition hover:bg-naranja hover:text-cal sm:block"
          >
            <span className="mr-1.5" aria-hidden="true">☀︎</span>
            {copy.nav.ctaJoin}
          </button>
          <button onClick={() => goToPage("contacto")} className="label hidden shrink-0 cursor-pointer bg-naranja px-4 py-3 text-cal transition hover:bg-tinta sm:block">{copy.nav.ctaContact}</button>
          <button onClick={() => setMenuAbierto(!menuAbierto)} className="label flex cursor-pointer flex-col gap-[5px] p-2 lg:hidden" aria-expanded={menuAbierto} aria-label={menuAbierto ? copy.nav.closeMenu : copy.nav.openMenu}>
            <span className={`block h-[2px] w-5 bg-tinta transition-all ${menuAbierto ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-5 bg-tinta transition-all ${menuAbierto ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-5 bg-tinta transition-all ${menuAbierto ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {menuAbierto && (
        <div className="border-t border-tinta/15 bg-cal/98 pb-6 lg:hidden">
          <div className="mx-auto max-w-[1440px] px-5 pt-4 sm:px-8">
            <LanguageSwitcher compact />
            {pagina === "inicio" && (
              <>
                <p className="label mb-2 mt-4 text-taupe">{copy.nav.sections}</p>
                <div className="mb-4 grid grid-cols-3 gap-1">
                  {navInicio.map((n) => (
                    <a key={n.id} href={`#${n.id}`} onClick={() => setMenuAbierto(false)} className="label block border border-tinta/15 px-3 py-3 text-center text-tinta/70 transition hover:border-naranja hover:text-naranja">{n.t}</a>
                  ))}
                </div>
              </>
            )}
            <p className="label mb-2 text-taupe">{copy.nav.party}</p>
            <div className="grid grid-cols-1 gap-1">
              {navPaginas.map((n) => (
                <button key={n.pagina} onClick={() => goToPage(n.pagina)} className={`label w-full cursor-pointer border px-4 py-4 text-left transition ${pagina === n.pagina ? "border-naranja bg-naranja/10 text-naranja" : "border-tinta/15 text-tinta/70 hover:border-naranja hover:text-naranja"}`}>{n.t}</button>
              ))}
              {/* ✦ Quiero Afiliarme — botón estrella en móvil */}
              <button
                onClick={handleJoin}
                className="join-cta label w-full cursor-pointer border-2 border-naranja px-4 py-4 text-left text-naranja transition hover:bg-naranja hover:text-cal"
              >
                <span className="mr-1.5" aria-hidden="true">☀︎</span>
                {copy.nav.ctaJoin}
              </button>
              <button onClick={() => goToPage("contacto")} className="label w-full cursor-pointer bg-naranja px-4 py-4 text-left text-cal transition hover:bg-tinta">{copy.nav.ctaContact} →</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Rail() {
  const { copy } = useI18n();
  return (
    <div aria-hidden="true" className="pointer-events-none fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <p className="label text-tinta/65" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>{copy.rail}</p>
    </div>
  );
}

function Cinta() {
  const { copy } = useI18n();
  const linea = [...copy.ticker, ...copy.ticker];
  return (
    <div className="marquee relative overflow-hidden border-y border-tinta/20 bg-naranja text-tinta">
      <div className="marquee-track flex w-max items-center gap-10 py-3 pr-10">
        {linea.map((c, i) => <span key={i} className="label flex items-center gap-10 whitespace-nowrap">{c}<span aria-hidden="true" className="text-tinta/60">✳</span></span>)}
      </div>
    </div>
  );
}

function FloatingLanguages() {
  return (
    <div className="fixed right-3 top-[4.65rem] z-40 sm:right-4 lg:right-6">
      <LanguageSwitcher />
    </div>
  );
}

function PaginaInicio() {
  return <><Hero /><Cinta /><Cifras /><Manifiesto /><Callejon /><Fiestas /><Tablon /><Guia /><Vecinos /></>;
}

function AppInner() {
  const { copy } = useI18n();
  const [pagina, setPagina] = useState<Pagina>("inicio");
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [joinMode, setJoinMode] = useState(false);

  function handleJoin() {
    setJoinMode(true);
    setPagina("contacto");
    window.scrollTo(0, 0);
    window.location.hash = "contacto";
  }

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (PAGE_HASHES.includes(hash as Pagina)) {
        setPagina(hash as Pagina);
      } else if (HOME_SECTION_IDS.includes(hash)) {
        setPagina("inicio");
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    const onScroll = () => { if (menuAbierto) setMenuAbierto(false); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuAbierto]);

  useEffect(() => {
    document.title = copy.pageTitles[pagina];
    document.documentElement.lang = copy.htmlLang;
  }, [copy, pagina]);

  // Reset joinMode when leaving contact page
  useEffect(() => {
    if (pagina !== "contacto") setJoinMode(false);
  }, [pagina]);

  return (
    <div id="top" className="relative min-h-screen bg-cal text-tinta">
      <div className="grain" aria-hidden="true" />
      <Cabecera pagina={pagina} setPagina={setPagina} menuAbierto={menuAbierto} setMenuAbierto={setMenuAbierto} onJoin={handleJoin} />
      <FloatingLanguages />
      <Rail />
      <main>
        {pagina === "inicio" && <PaginaInicio />}
        {pagina === "quienes-somos" && <QuienesSomos />}
        {pagina === "estatutos" && <Estatutos />}
        {pagina === "contacto" && <Contacto joinMode={joinMode} />}
      </main>
      <Pie pagina={pagina} setPagina={setPagina} />
    </div>
  );
}

export default function App() {
  const initial = useMemo<Language>(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("upsf-lang") : null;
    if (saved && ["es", "en", "fr", "nl", "de", "sv"].includes(saved)) return saved as Language;
    return "es";
  }, []);
  const [lang, setLangState] = useState<Language>(initial);

  function setLang(next: Language) {
    setLangState(next);
    window.localStorage.setItem("upsf-lang", next);
  }

  return (
    <I18nProvider lang={lang} setLang={setLang}>
      <AppInner />
    </I18nProvider>
  );
}
