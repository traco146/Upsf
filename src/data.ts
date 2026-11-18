export const cifras: { k: string; v: string; n?: string }[] = [
  { k: "Padrón municipal · INE 2025", v: "9.769", n: "habitantes" },
  { k: "Superficie", v: "19,75", n: "km²" },
  { k: "Densidad", v: "494,6", n: "hab./km²" },
  { k: "Altitud", v: "4", n: "m s. n. m." },
  { k: "Residentes nacidos fuera de España", v: "66,8", n: "%" },
  { k: "Gentilicio", v: "sanfulgentino, -a" },
  { k: "Código postal", v: "03177" },
  { k: "Comarca", v: "Vega Baja del Segura" },
  { k: "Provincia", v: "Alicante · C. Valenciana" },
  { k: "Distancia a Elche", v: "16", n: "km al norte" },
  { k: "Distancia a Orihuela", v: "22", n: "km · capital de comarca" },
  { k: "Aeropuerto de El Altet", v: "26", n: "km" },
];

export const padron: { año: string; hab: number; nota: string }[] = [
  { año: "2009", hab: 12030, nota: "máximo del boom residencial" },
  { año: "2011", hab: 12354, nota: "77,6 % de residentes foráneos" },
  { año: "2018", hab: 7943, nota: "corrección tras la crisis" },
  { año: "2025", hab: 9769, nota: "66,8 % de residentes foráneos" },
];

export const agenda: {
  fecha: string;
  mes: string;
  titulo: string;
  texto: string;
  lugar: string;
}[] = [
  {
    mes: "Ene",
    fecha: "16 – 17",
    titulo: "Fiestas patronales de San Fulgencio y San Antonio Abad",
    texto:
      "Procesiones los días 16 y 17 y «Bendición de los animales y el pan» en San Antón. La «Pedida de la Gallina» recorre las calles con la banda de música: los vecinos que quieren, entregan un animal a las autoridades.",
    lugar: "Casco urbano",
  },
  {
    mes: "Ene",
    fecha: "Sáb. posterior",
    titulo: "Comida de Hermandad",
    texto:
      "Todos los vecinos del municipio se sientan a la misma mesa para compartir comida y un día entero de convivencia.",
    lugar: "Casco urbano",
  },
  {
    mes: "Mar – Abr",
    fecha: "Semana Santa",
    titulo: "Procesiones",
    texto:
      "El calendario religioso del pueblo, con salidas desde la parroquia y recorridos por las calles del centro.",
    lugar: "Casco urbano",
  },
  {
    mes: "May",
    fecha: "15 + dom.",
    titulo: "Romería de San Isidro Labrador",
    texto:
      "San Isidro no es patrón de la localidad, pero sí de los agricultores, y San Fulgencio sigue siendo pueblo de campo: la romería se celebra el domingo inmediatamente posterior al 15 de mayo.",
    lugar: "Campo y casco urbano",
  },
  {
    mes: "Ago",
    fecha: "1er fin de semana",
    titulo: "Fiestas de verano · Virgen de la Paz",
    texto:
      "Vecinos de todas las nacionalidades se juntan para el verano: la cita multicolor del municipio, en plena urbanización.",
    lugar: "Urbanización La Marina",
  },
  {
    mes: "Oct",
    fecha: "Tercer fin de semana",
    titulo: "Fiestas de la Virgen del Remedio",
    texto:
      "La patrona del pueblo. Son las gentes del pueblo las que acaparan los actos: engalanamiento de calles, desfiles de carrozas y verbena.",
    lugar: "Casco urbano",
  },
];

export const guia: { t: string; d: string; m?: string }[] = [
  {
    t: "Ayuntamiento de San Fulgencio",
    d: "Plaza Constitución, 26 · 03177 San Fulgencio",
    m: "966 79 42 01 · sanfulgencio.es",
  },
  {
    t: "Mercadillo semanal",
    d: "Todos los martes, por el casco urbano",
    m: "Fruta de la vega, textil, menaje y aperos",
  },
  {
    t: "Farmacias",
    d: "Cuatro farmacias en el municipio",
    m: "Servicio de guardia rotatorio",
  },
  {
    t: "Deporte de pueblo",
    d: "Pelota valenciana y cicloturismo por la vega",
    m: "Colombicultura: la otra afición con tradición",
  },
  {
    t: "Lenguas del callejón",
    d: "Castellano, con el inglés como segunda lengua de uso",
    m: "Alemán, noruego y el resto de la Europa que se quedó aquí",
  },
  {
    t: "Economía",
    d: "Agricultura de regadío: cítricos y hortícolas del Segura",
    m: "Turismo residencial europeo desde los años 80",
  },
];

export type Aviso = {
  id: number;
  cat: string;
  titulo: string;
  texto: string;
  autor: string;
  fecha: string;
  nuevo?: boolean;
};

export const categorias: { nombre: string; color: string }[] = [
  { nombre: "Agua", color: "#2e6a6b" },
  { nombre: "Salud", color: "#1b3a2d" },
  { nombre: "Obras", color: "#a32b1e" },
  { nombre: "Asociaciones", color: "#17241e" },
  { nombre: "Cultura", color: "#b8480f" },
  { nombre: "Otro", color: "#6b6357" },
];

export const avisosIniciales: Aviso[] = [
  {
    id: 101,
    cat: "Agua",
    titulo: "Corte de suministro en la zona del consultorio",
    texto:
      "El jueves de 9:00 a 14:00 habrá obras de mantenimiento en la conducción. Recomendamos dejar llenado un recipiente la noche anterior.",
    autor: "Comisión de agua",
    fecha: "hace 2 días",
  },
  {
    id: 102,
    cat: "Asociaciones",
    titulo: "Reunión abierta de la asociación de vecinos",
    texto:
      "Martes a las 19:30 en el local social. Punto único: el estado de la acera del camí del Riu y la limpieza de las entradas a la urbanización.",
    autor: "A.V.V. San Fulgencio",
    fecha: "hace 4 días",
  },
  {
    id: 103,
    cat: "Cultura",
    titulo: "Taller de esparto y mercado de artesanía",
    texto:
      "Sábado durante todo el día junto al casco urbano. Se abren los talleres-cueva y hay mercadillo de artesanía. Traed cestas viejas para reparar.",
    autor: "Casa de Cultura",
    fecha: "hace 6 días",
  },
  {
    id: 104,
    cat: "Salud",
    texto:
      "El consultorio recuerda la vuelta al horario de mañana completo a partir del lunes. Para urgencias, 061.",
    titulo: "Horario del consultorio",
    autor: "Vecina de la calle Mayor",
    fecha: "hace 1 semana",
  },
  {
    id: 105,
    cat: "Otro",
    titulo: "Se busca gato con botas (literalmente)",
    texto:
      "Se escapó el domingo desde la plaza. Es pardo con una oreja doblada y responde al nombre de Sento. Si lo veis, están en la panadería de la esquina.",
    autor: "Familia Ortiz",
    fecha: "hace 1 semana",
  },
];

export const vecinos: {
  cita: string;
  trad?: string;
  nombre: string;
  lugar: string;
  lang?: string;
}[] = [
  {
    cita:
      "Toda la vida en la misma calle. Antes salíamos todos a la silla a la sombra y todavía lo hacemos, aunque ahora hay más coches y más acentos.",
    nombre: "Amparo Beltrán",
    lugar: "Casco urbano · nacida aquí",
  },
  {
    cita:
      "Twenty-two years here and I still say good morning to everyone on the road. This town adopted us; the least we can do is learn its name properly.",
    trad: "«Veintidós años viviendo aquí y todavía saludo a todos por la carretera. Este pueblo nos acogió; lo mínimo es aprender a pronunciar bien su nombre.»",
    nombre: "Derek Whitfield",
    lugar: "Urbanización La Marina",
    lang: "EN",
  },
  {
    cita:
      "Wir sind wegen des Summers geblieben und wegen der Menschen. Der Markt am Dienstag ist unser Wochenende.",
    trad: "«Nos quedamos por el verano y por la gente. El mercado del martes es nuestro fin de semana.»",
    nombre: "Hans-Jürgen Kessler",
    lugar: "Partida de campo · 18 años aquí",
    lang: "DE",
  },
];
