import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "tr";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = `reveal ${seen ? "is-in" : ""} ${className}`;
  const style = { transitionDelay: `${delay}ms` };

  if (as === "li")
    return (
      <li ref={ref as never} className={cls} style={style}>
        {children}
      </li>
    );
  if (as === "tr")
    return (
      <tr ref={ref as never} className={cls} style={style}>
        {children}
      </tr>
    );
  return (
    <div ref={ref as never} className={cls} style={style}>
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  titulo,
  entrada,
  tono = "oscuro",
}: {
  eyebrow: string;
  titulo: string;
  entrada?: string;
  tono?: "oscuro" | "claro";
}) {
  const sub = tono === "oscuro" ? "text-taupe" : "text-brasa";
  const tit = tono === "oscuro" ? "text-tinta" : "text-cal";
  return (
    <div className="max-w-2xl">
      <p className={`label ${sub}`}>{eyebrow}</p>
      <h2
        className={`display mt-4 text-[clamp(2.4rem,5.5vw,4.4rem)] font-black leading-[0.9] tracking-[-0.03em] ${tit}`}
      >
        {titulo}
      </h2>
      {entrada && (
        <p
          className={`mt-5 text-[1.0625rem] leading-relaxed ${
            tono === "oscuro" ? "text-tinta/70" : "text-cal/70"
          }`}
        >
          {entrada}
        </p>
      )}
    </div>
  );
}

export function Marca({ className = "", mode = "color" }: { className?: string; mode?: "color" | "mono" }) {
  // Logo del partido UpSF (Unidos por San Fulgencio)
  const isMono = mode === "mono";
  const gold = isMono ? "currentColor" : "var(--color-naranja)";
  const navy = isMono ? "currentColor" : "var(--color-tinta)";
  
  return (
    <svg viewBox="0 0 200 240" className={className} aria-hidden="true" fill="none">
      <g fill={gold}>
        {/* Baseline and half circle */}
        <path d="M 12 140 h 53 a 35 35 0 0 1 70 0 h 53 v 6 h -176 z" />
        
        {/* Central ray */}
        <path d="M 97 20 h 6 v 75 h -6 z" />
        
        {/* Right rays */}
        <g transform="translate(100, 140) rotate(21)">
          <path d="M -3 -102 h 6 v 57 h -6 z" />
        </g>
        <g transform="translate(100, 140) rotate(42)">
          <path d="M -3 -95 h 6 v 50 h -6 z" />
        </g>
        <g transform="translate(100, 140) rotate(63)">
          <path d="M -3 -88 h 6 v 43 h -6 z" />
        </g>
        <g transform="translate(100, 140) rotate(82)">
          <path d="M -3 -85 h 6 v 40 h -6 z" />
        </g>

        {/* Left rays */}
        <g transform="translate(100, 140) rotate(-21)">
          <path d="M -3 -102 h 6 v 57 h -6 z" />
        </g>
        <g transform="translate(100, 140) rotate(-42)">
          <path d="M -3 -95 h 6 v 50 h -6 z" />
        </g>
        <g transform="translate(100, 140) rotate(-63)">
          <path d="M -3 -88 h 6 v 43 h -6 z" />
        </g>
        <g transform="translate(100, 140) rotate(-82)">
          <path d="M -3 -85 h 6 v 40 h -6 z" />
        </g>
      </g>
      
      {/* Text UpSF */}
      <text x="15" y="215" fontFamily="system-ui, -apple-system, sans-serif" fontSize="76" fontWeight="600" letterSpacing="-2">
        <tspan fill={gold}>Up</tspan>
        <tspan fill={navy}>SF</tspan>
      </text>
    </svg>
  );
}
