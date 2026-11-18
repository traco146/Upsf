// Genera una versión autocontenida del build: index.html + JS + CSS + fotos en base64.
// Uso: npm run build && node scripts/inline.mjs
// Salida: ./unidos-por-san-fulgencio.html (en la raíz, fuera de dist para que no lo borre Vite)
import fs from "node:fs";
import path from "node:path";

const dir = "dist";
const out = "unidos-por-san-fulgencio.html";

let html = fs.readFileSync(path.join(dir, "index.html"), "utf8");
const refs = [...new Set(html.match(/images\/[a-z]+\.jpg/g) || [])];

for (const r of refs) {
  const base64 = fs.readFileSync(path.join(dir, r)).toString("base64");
  html = html.split(r).join(`data:image/jpeg;base64,${base64}`);
}

fs.writeFileSync(out, html);
const restantes = (html.match(/images\//g) || []).length;
console.log(`✔ ${out} — ${(fs.statSync(out).size / 1024 / 1024).toFixed(2)} MB`);
console.log(`  imágenes incrustadas: ${refs.length} · referencias externas restantes: ${restantes}`);
