import type { Language } from "./i18n";

export interface Publicacion {
  id: string;
  url: string;
  etiqueta: string;
  titulo: string;
  texto?: string;
  cierre?: string;
  /** Ruta opcional de imagen dentro de public/images/ (ej. "images/noticia1.jpg") */
  imagen?: string;
  /** Traducciones opcionales: si añades una noticia nueva solo en español, no hace falta rellenar esto */
  i18n?: Partial<Record<Exclude<Language, "es">, { etiqueta?: string; titulo: string; texto?: string; cierre?: string }>>;
}

/**
 * ÚLTIMAS PUBLICACIONES DE FACEBOOK (UpSF)
 * -------------------------------------------------------------------------
 * Para actualizar las noticias de la web desde GitHub, solo tienes que
 * editar este archivo: cambia el título, el texto y pega el enlace nuevo
 * de Facebook en `url`. Puedes tener 2 o 3 publicaciones (la web ajusta
 * las columnas automáticamente).
 */
export const FACEBOOK_GROUP_URL = "https://www.facebook.com/share/g/1MrH3KEqxx/?mibextid=wwXIfr";

export const PUBLICACIONES: Publicacion[] = [
  {
    id: "elecciones-locales",
    url: "https://www.facebook.com/groups/967876805957130/permalink/1125445066866969/",
    etiqueta: "Elecciones locales",
    titulo: "Información importante sobre las elecciones locales",
    texto: "Consulta en nuestro grupo oficial de Facebook todos los detalles y avisos importantes sobre las próximas elecciones municipales en San Fulgencio.",
    i18n: {
      en: {
        etiqueta: "Local elections",
        titulo: "Important information about the local elections",
        texto: "Read all the key details and updates about the upcoming local elections in San Fulgencio in our official Facebook group.",
      },
      fr: {
        etiqueta: "Élections locales",
        titulo: "Informations importantes sur les élections locales",
        texto: "Retrouvez tous les détails importants sur les prochaines élections municipales à San Fulgencio dans notre groupe Facebook officiel.",
      },
      nl: {
        etiqueta: "Lokale verkiezingen",
        titulo: "Belangrijke informatie over de lokale verkiezingen",
        texto: "Bekijk alle belangrijke details over de komende gemeenteraadsverkiezingen in San Fulgencio in onze officiële Facebookgroep.",
      },
      de: {
        etiqueta: "Kommunalwahlen",
        titulo: "Wichtige Informationen zu den Kommunalwahlen",
        texto: "Alle wichtigen Details zu den kommenden Kommunalwahlen in San Fulgencio finden Sie in unserer offiziellen Facebook-Gruppe.",
      },
      sv: {
        etiqueta: "Lokalval",
        titulo: "Viktig information om kommunalvalet",
        texto: "Läs alla viktiga detaljer om kommande kommunalval i San Fulgencio i vår officiella Facebookgrupp.",
      },
    },
  },
  {
    id: "candidato-alcaldia-2027",
    url: "https://www.facebook.com/groups/967876805957130/permalink/1127342963343846/",
    etiqueta: "Candidatura · Mayo 2027",
    titulo: "Alain Franz Vandenbergen, candidato de UpSF a la Alcaldía",
    texto:
      "Con ilusión presentamos a Alain Franz Vandenbergen, presidente de Unidos por San Fulgencio (UpSF), como candidato a la Alcaldía en las elecciones municipales de mayo de 2027. Un proyecto basado en la cercanía, la unidad y el futuro de nuestro pueblo.",
    cierre: "Juntos es posible.",
    i18n: {
      en: {
        etiqueta: "Candidacy · May 2027",
        titulo: "Alain Franz Vandenbergen, UpSF candidate for Mayor",
        texto:
          "With enthusiasm, we present Alain Franz Vandenbergen, president of Unidos por San Fulgencio (UpSF), as our candidate for Mayor in the May 2027 municipal elections. A project built on closeness, unity and the future of our town.",
        cierre: "Together it is possible.",
      },
      fr: {
        etiqueta: "Candidature · Mai 2027",
        titulo: "Alain Franz Vandenbergen, candidat d’UpSF à la mairie",
        texto:
          "C’est avec enthousiasme que nous présentons Alain Franz Vandenbergen, président d’Unidos por San Fulgencio (UpSF), comme candidat à la mairie aux élections municipales de mai 2027. Un projet fondé sur la proximité, l’unité et l’avenir de notre commune.",
        cierre: "Ensemble, c’est possible.",
      },
      nl: {
        etiqueta: "Kandidatuur · Mei 2027",
        titulo: "Alain Franz Vandenbergen, kandidaat-burgemeester van UpSF",
        texto:
          "Met trots stellen wij Alain Franz Vandenbergen, voorzitter van Unidos por San Fulgencio (UpSF), voor als kandidaat-burgemeester voor de gemeenteraadsverkiezingen van mei 2027. Een project gebaseerd op betrokkenheid, eenheid en de toekomst van onze gemeente.",
        cierre: "Samen is het mogelijk.",
      },
      de: {
        etiqueta: "Kandidatur · Mai 2027",
        titulo: "Alain Franz Vandenbergen, Bürgermeisterkandidat von UpSF",
        texto:
          "Mit Begeisterung stellen wir Alain Franz Vandenbergen, Vorsitzender von Unidos por San Fulgencio (UpSF), als Kandidaten für das Bürgermeisteramt bei den Kommunalwahlen im Mai 2027 vor. Ein Projekt für Bürgernähe, Zusammenhalt und die Zukunft unserer Gemeinde.",
        cierre: "Gemeinsam ist es möglich.",
      },
      sv: {
        etiqueta: "Kandidatur · Maj 2027",
        titulo: "Alain Franz Vandenbergen, UpSF:s borgmästarkandidat",
        texto:
          "Med glädje presenterar vi Alain Franz Vandenbergen, ordförande för Unidos por San Fulgencio (UpSF), som kandidat till borgmästare i kommunalvalet i maj 2027. Ett projekt byggt på närhet, enighet och vår kommuns framtid.",
        cierre: "Tillsammans är det möjligt.",
      },
    },
  },
  // Si quieres añadir la tercera publicación, descomenta este bloque y rellena el texto:
  // {
  //   id: "publicacion-3",
  //   url: "https://www.facebook.com/groups/967876805957130/permalink/1109996385078504/",
  //   etiqueta: "Actualidad UpSF",
  //   titulo: "Título de la tercera publicación",
  //   texto: "Texto breve de la publicación...",
  // },
];
