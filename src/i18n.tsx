import { createContext, useContext, type ReactNode } from "react";

export type Language = "es" | "en" | "fr" | "nl" | "de" | "sv";
export type Pagina = "inicio" | "quienes-somos" | "estatutos" | "contacto";
export type CategoryKey = "water" | "health" | "works" | "associations" | "culture" | "other";

export type Notice = {
  id: number;
  cat: CategoryKey;
  titulo: string;
  texto: string;
  autor: string;
  fecha: string;
  nuevo?: boolean;
};

export type Chapter = {
  num: string;
  titulo: string;
  articulos: { num: string; titulo: string; texto: string[] }[];
};

export type Copy = {
  locale: string;
  nativeName: string;
  htmlLang: string;
  pageTitles: Record<Pagina, string>;
  nav: {
    home: string;
    sections: string;
    party: string;
    openMenu: string;
    closeMenu: string;
    ctaContact: string;
    ctaJoin: string;
    homeSections: { id: string; t: string }[];
    pages: { pagina: Exclude<Pagina, "inicio">; t: string }[];
  };
  languages: { label: string; short: string };
  rail: string;
  ticker: string[];
  hero: {
    topLeft: string;
    topRight: string;
    kicker: string;
    titleA: string;
    titleB: string;
    tagline: string;
    body: string;
    imageAlt: string;
    stats: { v: string; k: string }[];
  };
  figures: {
    eyebrow: string;
    title: string;
    intro: string;
    evolution: string;
    habitantes: string;
    cifras: { k: string; v: string; n?: string }[];
    padron: { año: string; hab: number; nota: string }[];
  };
  manifesto: {
    eyebrow: string;
    lead: string[];
    figcaption: string;
    imageAlt: string;
  };
  alley: {
    eyebrow: string;
    lead: string;
    body: string;
    imageAlt: string;
  };
  festivals: {
    eyebrow: string;
    title: string;
    intro: string;
    imageAlt: string;
    figcaption: string;
    marketEyebrow: string;
    marketTitle: string;
    marketBody: string;
    agenda: { mes: string; fecha: string; titulo: string; texto: string; lugar: string }[];
  };
  guide: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { t: string; d: string; m?: string }[];
  };
  neighbors: {
    eyebrow: string;
    title: string;
    items: { cita: string; trad?: string; nombre: string; lugar: string; lang?: string }[];
  };
  footer: {
    tagline: string;
    party: string;
    townHall: string;
    copyright: string;
  };
  board: {
    eyebrow: string;
    title: string;
    intro: string;
    countLabel: string;
    formTitle: string;
    category: string;
    categories: Record<CategoryKey, string>;
    titleLabel: string;
    titlePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    authorLabel: string;
    authorPlaceholder: string;
    submit: string;
    emptyTitle: string;
    emptyBody: string;
    remove: string;
    fallback: string;
    errorShort: string;
    errorAuthor: string;
    imageAlt: string;
    initialNotices: Notice[];
  };
  who: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    intro: string;
    teamEyebrow: string;
    teamTitle: string;
    teamIntro: string;
    pendingName: string;
    contactCta: string;
    valuesEyebrow: string;
    members: { nombre: string; cargo: string; bio: string; pendiente?: boolean }[];
    values: { icono: string; t: string; d: string }[];
  };
  statutes: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    intro: string;
    index: string;
    chapter: string;
    legalNote: string;
    facts: { k: string; v: string }[];
    chapters: Chapter[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    formEyebrow: string;
    formTitle: string;
    formIntro: string;
    subjects: string[];
    sentTitle: string;
    sentBody: string;
    sendAnother: string;
    submit: string;
    helper: string;
    minimum: string;
    office: string;
    writeDirect: string;
    writeDirectBody: string;
    join: string;
    joinBody: string;
    schedule: string;
    weekdays: string;
    afternoons: string;
    saturdays: string;
    labels: {
      nombre: string;
      email: string;
      telefono: string;
      asunto: string;
      mensaje: string;
      required: string;
      choose: string;
    };
    placeholders: {
      nombre: string;
      email: string;
      telefono: string;
      mensaje: string;
    };
    errors: {
      nombre: string;
      email: string;
      asunto: string;
      mensaje: string;
    };
  };
};

const statutesEs: Chapter[] = [
  {
    num: "I",
    titulo: "Denominación, naturaleza, domicilio y ámbito",
    articulos: [
      {
        num: "1",
        titulo: "Denominación y naturaleza",
        texto: [
          "Con el nombre de «Unidos por San Fulgencio» (UpSF) se constituye un partido político de ámbito local al amparo de la Ley Orgánica 6/2002, de Partidos Políticos, y de los artículos 6 y 23 de la Constitución Española.",
          "UpSF es una organización democrática, sin ánimo de lucro, con personalidad jurídica propia y plena capacidad de obrar para el cumplimiento de sus fines.",
        ],
      },
      {
        num: "2",
        titulo: "Domicilio social",
        texto: [
          "El domicilio social del partido se fija en el término municipal de San Fulgencio, Alicante. La dirección podrá modificarlo dentro del municipio, comunicándolo al Registro de Partidos Políticos en el plazo legal.",
        ],
      },
      {
        num: "3",
        titulo: "Ámbito de actuación",
        texto: [
          "UpSF desarrolla su actividad en el municipio de San Fulgencio y, cuando proceda, en la comarca de la Vega Baja del Segura para defender intereses municipales.",
          "Los presentes estatutos obligan a afiliados, cargos internos y órganos del partido.",
        ],
      },
    ],
  },
  {
    num: "II",
    titulo: "Fines y principios",
    articulos: [
      {
        num: "4",
        titulo: "Fines del partido",
        texto: [
          "Los fines de UpSF son representar democráticamente a todos los vecinos, promover la transparencia en la gestión pública, impulsar el desarrollo económico sostenible y fortalecer la convivencia entre residentes de distintos orígenes.",
          "También corresponde al partido defender los intereses del municipio ante instituciones autonómicas, provinciales, estatales y europeas.",
        ],
      },
      {
        num: "5",
        titulo: "Principios de actuación",
        texto: [
          "La actuación del partido se rige por la democracia interna, la igualdad entre sus miembros, la transparencia, la rendición de cuentas y el respeto a la legalidad vigente.",
          "Queda expresamente rechazada cualquier forma de discriminación por razón de sexo, origen, religión, edad, orientación sexual o cualquier otra condición personal o social.",
        ],
      },
    ],
  },
  {
    num: "III",
    titulo: "Afiliación",
    articulos: [
      {
        num: "6",
        titulo: "Requisitos de afiliación",
        texto: [
          "Podrán afiliarse a UpSF las personas mayores de edad empadronadas en San Fulgencio o con vínculo acreditado con el municipio, siempre que no pertenezcan a otro partido político.",
        ],
      },
      {
        num: "7",
        titulo: "Derechos de los afiliados",
        texto: [
          "Los afiliados tienen derecho a participar en la vida del partido, elegir y ser elegidos, recibir información, presentar propuestas y ser oídos en cualquier procedimiento disciplinario que les afecte.",
        ],
      },
      {
        num: "8",
        titulo: "Deberes de los afiliados",
        texto: [
          "Los afiliados deben respetar estos estatutos, cumplir los acuerdos adoptados, contribuir al sostenimiento económico del partido y actuar con lealtad hacia la organización.",
        ],
      },
      {
        num: "9",
        titulo: "Baja y pérdida de la condición de afiliado",
        texto: [
          "La afiliación se pierde por renuncia voluntaria, impago prolongado de cuotas, afiliación a otra formación política o expulsión conforme al régimen disciplinario.",
        ],
      },
    ],
  },
  {
    num: "IV",
    titulo: "Organización y órganos de gobierno",
    articulos: [
      {
        num: "10",
        titulo: "Órganos del partido",
        texto: [
          "Los órganos básicos del partido son la Asamblea General, la Junta Directiva, la Presidencia, la Secretaría General y la Tesorería.",
        ],
      },
      {
        num: "11",
        titulo: "Asamblea General",
        texto: [
          "La Asamblea General es el órgano soberano del partido. Aprueba estatutos, programa, presupuestos, órganos de dirección y, en su caso, la disolución del partido.",
        ],
      },
      {
        num: "12",
        titulo: "Junta Directiva",
        texto: [
          "La Junta Directiva dirige la organización entre Asambleas, ejecuta acuerdos, convoca reuniones y coordina la acción política ordinaria.",
        ],
      },
      {
        num: "13",
        titulo: "Presidencia",
        texto: [
          "La Presidencia ostenta la representación legal del partido, convoca y preside órganos colegiados y vela por el cumplimiento de los estatutos.",
        ],
      },
    ],
  },
  {
    num: "V",
    titulo: "Régimen económico",
    articulos: [
      {
        num: "14",
        titulo: "Recursos económicos",
        texto: [
          "El partido se financia mediante cuotas de afiliados, donaciones permitidas por ley, subvenciones públicas y rendimientos de sus actividades o patrimonio.",
        ],
      },
      {
        num: "15",
        titulo: "Transparencia y control",
        texto: [
          "UpSF llevará contabilidad detallada de ingresos y gastos, pondrá sus cuentas a disposición de los afiliados y observará los controles previstos por la legislación sobre financiación de partidos.",
        ],
      },
    ],
  },
  {
    num: "VI",
    titulo: "Proceso electoral interno",
    articulos: [
      {
        num: "16",
        titulo: "Candidaturas municipales",
        texto: [
          "Las listas electorales serán aprobadas por la Asamblea General mediante votación secreta, garantizando mérito, pluralidad y representación equilibrada del municipio.",
        ],
      },
    ],
  },
  {
    num: "VII",
    titulo: "Régimen disciplinario",
    articulos: [
      {
        num: "17",
        titulo: "Infracciones",
        texto: [
          "Las infracciones podrán ser leves, graves o muy graves según vulneren los estatutos, los acuerdos internos, el código ético o los principios de respeto y no discriminación.",
        ],
      },
      {
        num: "18",
        titulo: "Sanciones y procedimiento",
        texto: [
          "Las sanciones podrán consistir en apercibimiento, suspensión temporal o expulsión, siempre tras expediente con audiencia del interesado y posibilidad de recurso interno.",
        ],
      },
    ],
  },
  {
    num: "VIII",
    titulo: "Modificación de estatutos y disolución",
    articulos: [
      {
        num: "19",
        titulo: "Modificación de estatutos",
        texto: [
          "Los estatutos solo podrán modificarse por acuerdo de la Asamblea General adoptado por mayoría cualificada de dos tercios.",
        ],
      },
      {
        num: "20",
        titulo: "Disolución",
        texto: [
          "La disolución requerirá acuerdo de la Asamblea General por mayoría reforzada o resolución judicial firme, destinándose el patrimonio remanente a fines sociales o culturales del municipio.",
        ],
      },
      {
        num: "21",
        titulo: "Entrada en vigor",
        texto: [
          "Estos estatutos entrarán en vigor tras su aprobación e inscripción conforme a la normativa vigente.",
        ],
      },
    ],
  },
];

const statutesEn: Chapter[] = [
  {
    num: "I",
    titulo: "Name, nature, registered office and scope",
    articulos: [
      { num: "1", titulo: "Name and nature", texto: ["Under the name ‘United for San Fulgencio’ (UpSF), a local political party is established under Organic Law 6/2002 on Political Parties and Articles 6 and 23 of the Spanish Constitution.", "UpSF is a democratic, non-profit organisation with its own legal personality and full legal capacity to pursue its aims."] },
      { num: "2", titulo: "Registered office", texto: ["The party’s registered office is established in the municipality of San Fulgencio, Alicante. The governing body may move it within the municipality, notifying the Political Parties Register within the legal period."] },
      { num: "3", titulo: "Scope of action", texto: ["UpSF operates in San Fulgencio and, where appropriate, across the Vega Baja del Segura area in defence of municipal interests.", "These statutes bind all members, internal officers and party bodies."] },
    ],
  },
  {
    num: "II",
    titulo: "Aims and principles",
    articulos: [
      { num: "4", titulo: "Party aims", texto: ["UpSF aims to represent all residents democratically, promote transparency in public management, support sustainable economic development and strengthen coexistence among residents of different origins.", "The party shall also defend the municipality’s interests before regional, provincial, national and European institutions."] },
      { num: "5", titulo: "Guiding principles", texto: ["The party acts according to internal democracy, equality among members, transparency, accountability and respect for the law.", "Any discrimination based on sex, origin, religion, age, sexual orientation or any other personal or social condition is expressly rejected."] },
    ],
  },
  {
    num: "III",
    titulo: "Membership",
    articulos: [
      { num: "6", titulo: "Membership requirements", texto: ["Adults registered in San Fulgencio, or with a documented link to the municipality, may join UpSF provided they are not members of another political party."] },
      { num: "7", titulo: "Members’ rights", texto: ["Members have the right to participate in party life, elect and be elected, receive information, submit proposals and be heard in any disciplinary procedure affecting them."] },
      { num: "8", titulo: "Members’ duties", texto: ["Members must respect these statutes, comply with adopted decisions, contribute to the party’s financial support and act loyally towards the organisation."] },
      { num: "9", titulo: "Loss of membership", texto: ["Membership shall end by voluntary resignation, prolonged non-payment of fees, joining another political formation or expulsion under the disciplinary rules."] },
    ],
  },
  {
    num: "IV",
    titulo: "Organisation and governing bodies",
    articulos: [
      { num: "10", titulo: "Party bodies", texto: ["The basic party bodies are the General Assembly, the Executive Board, the Presidency, the General Secretariat and the Treasurer’s Office."] },
      { num: "11", titulo: "General Assembly", texto: ["The General Assembly is the sovereign body of the party. It approves statutes, programme, budgets, leadership bodies and, where appropriate, the dissolution of the party."] },
      { num: "12", titulo: "Executive Board", texto: ["The Executive Board manages the organisation between Assemblies, implements decisions, convenes meetings and coordinates ordinary political action."] },
      { num: "13", titulo: "Presidency", texto: ["The Presidency holds the party’s legal representation, chairs its bodies and ensures compliance with these statutes."] },
    ],
  },
  {
    num: "V",
    titulo: "Financial regime",
    articulos: [
      { num: "14", titulo: "Financial resources", texto: ["The party is financed through membership fees, lawful donations, public subsidies and income from its activities or assets."] },
      { num: "15", titulo: "Transparency and control", texto: ["UpSF shall keep detailed accounts of income and expenditure, make its accounts available to members and comply with all legal rules on party financing."] },
    ],
  },
  {
    num: "VI",
    titulo: "Internal electoral process",
    articulos: [
      { num: "16", titulo: "Municipal candidacies", texto: ["Electoral lists shall be approved by the General Assembly through secret vote, guaranteeing merit, plurality and balanced representation of the municipality."] },
    ],
  },
  {
    num: "VII",
    titulo: "Disciplinary regime",
    articulos: [
      { num: "17", titulo: "Infringements", texto: ["Infringements may be minor, serious or very serious depending on whether they violate the statutes, internal decisions, the code of ethics or the principles of respect and non-discrimination."] },
      { num: "18", titulo: "Sanctions and procedure", texto: ["Sanctions may include warning, temporary suspension or expulsion, always after a formal procedure with the right to be heard and to appeal internally."] },
    ],
  },
  {
    num: "VIII",
    titulo: "Amendment of statutes and dissolution",
    articulos: [
      { num: "19", titulo: "Amendment of statutes", texto: ["These statutes may only be amended by the General Assembly through a qualified two-thirds majority."] },
      { num: "20", titulo: "Dissolution", texto: ["Dissolution requires a reinforced majority of the General Assembly or a final judicial decision, with any remaining assets devoted to social or cultural purposes in the municipality."] },
      { num: "21", titulo: "Entry into force", texto: ["These statutes shall enter into force once approved and registered in accordance with current law."] },
    ],
  },
];

const statutesFr: Chapter[] = [
  { num: "I", titulo: "Dénomination, nature, siège et champ d’action", articulos: [
    { num: "1", titulo: "Dénomination et nature", texto: ["Sous le nom « Unidos por San Fulgencio » (UpSF), il est créé un parti politique local conformément à la loi organique espagnole 6/2002 sur les partis politiques.", "UpSF est une organisation démocratique, à but non lucratif, dotée de la personnalité juridique et de la pleine capacité d’agir."] },
    { num: "2", titulo: "Siège social", texto: ["Le siège du parti est établi dans la commune de San Fulgencio, Alicante. Il peut être transféré à l’intérieur de la commune avec notification au registre compétent."] },
    { num: "3", titulo: "Champ d’action", texto: ["UpSF agit à San Fulgencio et, si nécessaire, dans la Vega Baja del Segura pour défendre les intérêts municipaux."] },
  ]},
  { num: "II", titulo: "Finalités et principes", articulos: [
    { num: "4", titulo: "Finalités du parti", texto: ["UpSF vise à représenter démocratiquement tous les habitants, à promouvoir la transparence publique, à soutenir un développement durable et à renforcer la coexistence entre résidents d’origines diverses."] },
    { num: "5", titulo: "Principes d’action", texto: ["Le parti agit selon la démocratie interne, l’égalité, la transparence, la responsabilité et le respect de la légalité."] },
  ]},
  { num: "III", titulo: "Adhésion", articulos: [
    { num: "6", titulo: "Conditions d’adhésion", texto: ["Peuvent adhérer les personnes majeures inscrites à San Fulgencio ou disposant d’un lien justifié avec la commune, à condition de ne pas appartenir à un autre parti politique."] },
    { num: "7", titulo: "Droits des adhérents", texto: ["Les adhérents peuvent participer à la vie du parti, élire et être élus, recevoir des informations et présenter des propositions."] },
    { num: "8", titulo: "Devoirs des adhérents", texto: ["Les adhérents doivent respecter les statuts, appliquer les accords adoptés, contribuer financièrement et agir avec loyauté."] },
    { num: "9", titulo: "Perte de la qualité d’adhérent", texto: ["L’adhésion prend fin par démission, non-paiement prolongé, adhésion à un autre parti ou exclusion disciplinaire."] },
  ]},
  { num: "IV", titulo: "Organisation et organes", articulos: [
    { num: "10", titulo: "Organes du parti", texto: ["Les organes essentiels sont l’Assemblée générale, le Bureau exécutif, la Présidence, le Secrétariat général et la Trésorerie."] },
    { num: "11", titulo: "Assemblée générale", texto: ["L’Assemblée générale est l’organe souverain qui approuve statuts, programme, budgets et dirigeants."] },
    { num: "12", titulo: "Bureau exécutif", texto: ["Le Bureau exécutif dirige l’organisation entre les Assemblées et coordonne l’action politique ordinaire."] },
    { num: "13", titulo: "Présidence", texto: ["La Présidence assure la représentation légale du parti et veille au respect des statuts."] },
  ]},
  { num: "V", titulo: "Régime économique", articulos: [
    { num: "14", titulo: "Ressources économiques", texto: ["Le parti se finance par les cotisations, les dons autorisés par la loi, les subventions publiques et les revenus de ses activités."] },
    { num: "15", titulo: "Transparence et contrôle", texto: ["UpSF tient une comptabilité détaillée et respecte les règles légales de financement et de contrôle."] },
  ]},
  { num: "VI", titulo: "Processus électoral interne", articulos: [
    { num: "16", titulo: "Candidatures municipales", texto: ["Les listes électorales sont approuvées par l’Assemblée générale au scrutin secret, avec pluralité et représentation équilibrée."] },
  ]},
  { num: "VII", titulo: "Régime disciplinaire", articulos: [
    { num: "17", titulo: "Infractions", texto: ["Les infractions peuvent être légères, graves ou très graves selon l’atteinte portée aux statuts, décisions internes ou principes éthiques."] },
    { num: "18", titulo: "Sanctions et procédure", texto: ["Les sanctions vont de l’avertissement à l’exclusion, après procédure contradictoire et possibilité de recours."] },
  ]},
  { num: "VIII", titulo: "Modification des statuts et dissolution", articulos: [
    { num: "19", titulo: "Modification des statuts", texto: ["Les statuts ne peuvent être modifiés que par une majorité qualifiée des deux tiers de l’Assemblée générale."] },
    { num: "20", titulo: "Dissolution", texto: ["La dissolution exige une majorité renforcée ou une décision judiciaire, et le patrimoine restant est affecté à des fins sociales ou culturelles locales."] },
    { num: "21", titulo: "Entrée en vigueur", texto: ["Les présents statuts entrent en vigueur après leur approbation et leur inscription selon la loi."] },
  ]},
];

const statutesNl: Chapter[] = [
  { num: "I", titulo: "Naam, aard, zetel en werkgebied", articulos: [
    { num: "1", titulo: "Naam en aard", texto: ["Onder de naam ‘Unidos por San Fulgencio’ (UpSF) wordt een lokale politieke partij opgericht overeenkomstig de Spaanse Organieke Wet 6/2002 inzake politieke partijen.", "UpSF is een democratische organisatie zonder winstoogmerk met eigen rechtspersoonlijkheid en volledige handelingsbekwaamheid."] },
    { num: "2", titulo: "Statutaire zetel", texto: ["De statutaire zetel van de partij bevindt zich in de gemeente San Fulgencio, Alicante. Verplaatsing binnen de gemeente is mogelijk na kennisgeving aan het bevoegde register."] },
    { num: "3", titulo: "Werkgebied", texto: ["UpSF is actief in San Fulgencio en, indien nodig, in de regio Vega Baja del Segura ter verdediging van gemeentelijke belangen."] },
  ]},
  { num: "II", titulo: "Doelstellingen en beginselen", articulos: [
    { num: "4", titulo: "Doelstellingen van de partij", texto: ["UpSF wil alle inwoners democratisch vertegenwoordigen, transparantie bevorderen, duurzame economische ontwikkeling steunen en het samenleven tussen inwoners van verschillende herkomst versterken."] },
    { num: "5", titulo: "Werkingsbeginselen", texto: ["De partij handelt volgens interne democratie, gelijkheid, transparantie, verantwoordingsplicht en eerbied voor de wet."] },
  ]},
  { num: "III", titulo: "Lidmaatschap", articulos: [
    { num: "6", titulo: "Toelatingsvoorwaarden", texto: ["Volwassenen die in San Fulgencio ingeschreven zijn of een aantoonbare band met de gemeente hebben, kunnen lid worden mits zij geen lid zijn van een andere politieke partij."] },
    { num: "7", titulo: "Rechten van leden", texto: ["Leden mogen deelnemen aan het partijleven, kiezen en verkozen worden, informatie ontvangen en voorstellen indienen."] },
    { num: "8", titulo: "Plichten van leden", texto: ["Leden moeten deze statuten naleven, genomen besluiten respecteren, financieel bijdragen en loyaal handelen."] },
    { num: "9", titulo: "Verlies van lidmaatschap", texto: ["Het lidmaatschap eindigt door vrijwillig ontslag, langdurige wanbetaling, aansluiting bij een andere partij of disciplinaire uitsluiting."] },
  ]},
  { num: "IV", titulo: "Organisatie en bestuursorganen", articulos: [
    { num: "10", titulo: "Partijorganen", texto: ["De basisorganen zijn de Algemene Vergadering, het Bestuur, het Voorzitterschap, het Algemeen Secretariaat en de Penningmeester."] },
    { num: "11", titulo: "Algemene Vergadering", texto: ["De Algemene Vergadering is het hoogste orgaan en keurt statuten, programma, begrotingen en bestuurders goed."] },
    { num: "12", titulo: "Bestuur", texto: ["Het Bestuur leidt de organisatie tussen de vergaderingen door en coördineert de gewone politieke werking."] },
    { num: "13", titulo: "Voorzitterschap", texto: ["Het Voorzitterschap vertegenwoordigt de partij wettelijk en ziet toe op naleving van de statuten."] },
  ]},
  { num: "V", titulo: "Financieel stelsel", articulos: [
    { num: "14", titulo: "Financiële middelen", texto: ["De partij wordt gefinancierd via lidmaatschapsbijdragen, wettelijk toegestane giften, publieke subsidies en inkomsten uit activiteiten."] },
    { num: "15", titulo: "Transparantie en controle", texto: ["UpSF houdt een gedetailleerde boekhouding en volgt alle wettelijke regels inzake partijfinanciering en controle."] },
  ]},
  { num: "VI", titulo: "Interne verkiezingsprocedure", articulos: [
    { num: "16", titulo: "Gemeentelijke kandidaturen", texto: ["Kandidatenlijsten worden bij geheime stemming goedgekeurd door de Algemene Vergadering, met pluraliteit en evenwichtige vertegenwoordiging."] },
  ]},
  { num: "VII", titulo: "Disciplinaire regeling", articulos: [
    { num: "17", titulo: "Overtredingen", texto: ["Overtredingen kunnen licht, ernstig of zeer ernstig zijn naargelang de schending van de statuten, interne besluiten of ethische beginselen."] },
    { num: "18", titulo: "Sancties en procedure", texto: ["Sancties lopen van waarschuwing tot uitsluiting, na een procedure met hoorrecht en intern beroep."] },
  ]},
  { num: "VIII", titulo: "Wijziging van statuten en ontbinding", articulos: [
    { num: "19", titulo: "Wijziging van de statuten", texto: ["De statuten kunnen alleen worden gewijzigd met een gekwalificeerde tweederdemeerderheid van de Algemene Vergadering."] },
    { num: "20", titulo: "Ontbinding", texto: ["Ontbinding vereist een versterkte meerderheid of een rechterlijke beslissing, waarna het resterende vermogen naar lokale sociale of culturele doelen gaat."] },
    { num: "21", titulo: "Inwerkingtreding", texto: ["Deze statuten treden in werking na goedkeuring en inschrijving overeenkomstig de wet."] },
  ]},
];

const statutesDe: Chapter[] = [
  { num: "I", titulo: "Name, Wesen, Sitz und Wirkungsbereich", articulos: [
    { num: "1", titulo: "Name und Wesen", texto: ["Unter dem Namen ‚Unidos por San Fulgencio‘ (UpSF) wird eine lokale politische Partei gemäß dem spanischen Parteiengesetz 6/2002 gegründet.", "UpSF ist eine demokratische, gemeinnützige Organisation mit eigener Rechtspersönlichkeit und voller Handlungsfähigkeit."] },
    { num: "2", titulo: "Sitz", texto: ["Der Sitz der Partei befindet sich in der Gemeinde San Fulgencio, Alicante. Eine Verlegung innerhalb der Gemeinde ist nach Mitteilung an das zuständige Register möglich."] },
    { num: "3", titulo: "Wirkungsbereich", texto: ["UpSF ist in San Fulgencio und gegebenenfalls in der Vega Baja del Segura tätig, um kommunale Interessen zu vertreten."] },
  ]},
  { num: "II", titulo: "Ziele und Grundsätze", articulos: [
    { num: "4", titulo: "Ziele der Partei", texto: ["UpSF will alle Einwohner demokratisch vertreten, Transparenz fördern, nachhaltige wirtschaftliche Entwicklung unterstützen und das Zusammenleben verschiedener Herkunftsgruppen stärken."] },
    { num: "5", titulo: "Handlungsgrundsätze", texto: ["Die Partei handelt nach den Grundsätzen innerparteilicher Demokratie, Gleichheit, Transparenz, Rechenschaftspflicht und Rechtsstaatlichkeit."] },
  ]},
  { num: "III", titulo: "Mitgliedschaft", articulos: [
    { num: "6", titulo: "Voraussetzungen", texto: ["Volljährige Personen mit Wohnsitz in San Fulgencio oder nachgewiesener Bindung an die Gemeinde können Mitglied werden, sofern sie keiner anderen Partei angehören."] },
    { num: "7", titulo: "Rechte der Mitglieder", texto: ["Mitglieder dürfen am Parteileben teilnehmen, wählen und gewählt werden, Informationen erhalten und Vorschläge einreichen."] },
    { num: "8", titulo: "Pflichten der Mitglieder", texto: ["Mitglieder müssen diese Satzung achten, Beschlüsse befolgen, finanziell beitragen und loyal handeln."] },
    { num: "9", titulo: "Verlust der Mitgliedschaft", texto: ["Die Mitgliedschaft endet durch Austritt, längeren Beitragsrückstand, Eintritt in eine andere Partei oder disziplinarischen Ausschluss."] },
  ]},
  { num: "IV", titulo: "Organisation und Leitungsorgane", articulos: [
    { num: "10", titulo: "Parteiorgane", texto: ["Die Grundorgane sind die Generalversammlung, der Vorstand, das Präsidium, das Generalsekretariat und die Schatzmeisterei."] },
    { num: "11", titulo: "Generalversammlung", texto: ["Die Generalversammlung ist das oberste Organ und beschließt über Satzung, Programm, Haushalt und Leitungsgremien."] },
    { num: "12", titulo: "Vorstand", texto: ["Der Vorstand führt die Organisation zwischen den Versammlungen und koordiniert die laufende politische Arbeit."] },
    { num: "13", titulo: "Präsidium", texto: ["Das Präsidium vertritt die Partei rechtlich und wacht über die Einhaltung der Satzung."] },
  ]},
  { num: "V", titulo: "Finanzordnung", articulos: [
    { num: "14", titulo: "Finanzmittel", texto: ["Die Partei finanziert sich aus Mitgliedsbeiträgen, gesetzlich zulässigen Spenden, öffentlichen Zuschüssen und Einnahmen aus ihren Tätigkeiten."] },
    { num: "15", titulo: "Transparenz und Kontrolle", texto: ["UpSF führt eine detaillierte Buchhaltung und beachtet alle gesetzlichen Vorschriften zur Parteienfinanzierung und Kontrolle."] },
  ]},
  { num: "VI", titulo: "Interner Wahlprozess", articulos: [
    { num: "16", titulo: "Kommunale Kandidaturen", texto: ["Wahllisten werden von der Generalversammlung in geheimer Abstimmung mit pluraler und ausgewogener Vertretung beschlossen."] },
  ]},
  { num: "VII", titulo: "Disziplinarordnung", articulos: [
    { num: "17", titulo: "Verstöße", texto: ["Verstöße können leicht, schwer oder sehr schwer sein, je nach Verletzung der Satzung, interner Beschlüsse oder ethischer Grundsätze."] },
    { num: "18", titulo: "Sanktionen und Verfahren", texto: ["Sanktionen reichen von Verwarnung bis Ausschluss, stets nach Verfahren mit Anhörungsrecht und internem Rechtsbehelf."] },
  ]},
  { num: "VIII", titulo: "Satzungsänderung und Auflösung", articulos: [
    { num: "19", titulo: "Satzungsänderung", texto: ["Die Satzung kann nur mit qualifizierter Zweidrittelmehrheit der Generalversammlung geändert werden."] },
    { num: "20", titulo: "Auflösung", texto: ["Die Auflösung erfordert eine verstärkte Mehrheit oder eine gerichtliche Entscheidung; verbleibendes Vermögen geht an soziale oder kulturelle Zwecke im Ort."] },
    { num: "21", titulo: "Inkrafttreten", texto: ["Diese Satzung tritt nach Genehmigung und Eintragung gemäß geltendem Recht in Kraft."] },
  ]},
];

const statutesSv: Chapter[] = [
  { num: "I", titulo: "Namn, karaktär, säte och verksamhetsområde", articulos: [
    { num: "1", titulo: "Namn och karaktär", texto: ["Under namnet ‘Unidos por San Fulgencio’ (UpSF) bildas ett lokalt politiskt parti enligt den spanska organiska lagen 6/2002 om politiska partier.", "UpSF är en demokratisk ideell organisation med egen juridisk personlighet och full handlingsförmåga."] },
    { num: "2", titulo: "Säte", texto: ["Partiets säte är beläget i kommunen San Fulgencio, Alicante. Det kan flyttas inom kommunen efter anmälan till behörigt register."] },
    { num: "3", titulo: "Verksamhetsområde", texto: ["UpSF verkar i San Fulgencio och vid behov i Vega Baja del Segura för att försvara kommunala intressen."] },
  ]},
  { num: "II", titulo: "Mål och principer", articulos: [
    { num: "4", titulo: "Partiets mål", texto: ["UpSF vill demokratiskt representera alla invånare, främja öppenhet, stödja hållbar ekonomisk utveckling och stärka samexistensen mellan människor med olika bakgrund."] },
    { num: "5", titulo: "Arbetsprinciper", texto: ["Partiet verkar enligt intern demokrati, jämlikhet, transparens, ansvarsskyldighet och respekt för lagen."] },
  ]},
  { num: "III", titulo: "Medlemskap", articulos: [
    { num: "6", titulo: "Villkor för medlemskap", texto: ["Vuxna personer folkbokförda i San Fulgencio eller med dokumenterad anknytning till kommunen kan bli medlemmar, förutsatt att de inte tillhör ett annat politiskt parti."] },
    { num: "7", titulo: "Medlemmarnas rättigheter", texto: ["Medlemmar har rätt att delta i partiets liv, välja och väljas, få information och lämna förslag."] },
    { num: "8", titulo: "Medlemmarnas skyldigheter", texto: ["Medlemmar ska respektera stadgarna, följa beslut, bidra ekonomiskt och agera lojalt."] },
    { num: "9", titulo: "Förlust av medlemskap", texto: ["Medlemskap upphör genom utträde, långvarig utebliven avgiftsbetalning, inträde i annat parti eller disciplinär uteslutning."] },
  ]},
  { num: "IV", titulo: "Organisation och styrande organ", articulos: [
    { num: "10", titulo: "Partiets organ", texto: ["De grundläggande organen är Generalförsamlingen, Styrelsen, Ordförandeskapet, Generalsekretariatet och Kassören."] },
    { num: "11", titulo: "Generalförsamlingen", texto: ["Generalförsamlingen är det högsta organet och beslutar om stadgar, program, budgetar och ledning."] },
    { num: "12", titulo: "Styrelsen", texto: ["Styrelsen leder organisationen mellan församlingarna och samordnar det löpande politiska arbetet."] },
    { num: "13", titulo: "Ordförandeskapet", texto: ["Ordförandeskapet företräder partiet rättsligt och ser till att stadgarna följs."] },
  ]},
  { num: "V", titulo: "Ekonomiskt system", articulos: [
    { num: "14", titulo: "Ekonomiska resurser", texto: ["Partiet finansieras genom medlemsavgifter, lagliga donationer, offentliga bidrag och inkomster från sin verksamhet."] },
    { num: "15", titulo: "Transparens och kontroll", texto: ["UpSF för detaljerad bokföring och följer alla lagregler om partifinansiering och kontroll."] },
  ]},
  { num: "VI", titulo: "Intern valprocess", articulos: [
    { num: "16", titulo: "Kommunala kandidaturer", texto: ["Vallistor godkänns av Generalförsamlingen genom sluten omröstning med pluralism och balanserad representation."] },
  ]},
  { num: "VII", titulo: "Disciplinära regler", articulos: [
    { num: "17", titulo: "Överträdelser", texto: ["Överträdelser kan vara mindre, allvarliga eller mycket allvarliga beroende på brott mot stadgar, interna beslut eller etiska principer."] },
    { num: "18", titulo: "Sanktioner och förfarande", texto: ["Sanktioner kan vara varning, tillfällig avstängning eller uteslutning efter ett förfarande med rätt att bli hörd och överklaga internt."] },
  ]},
  { num: "VIII", titulo: "Ändring av stadgar och upplösning", articulos: [
    { num: "19", titulo: "Ändring av stadgar", texto: ["Stadgarna får endast ändras genom kvalificerad tvåtredjedelsmajoritet i Generalförsamlingen."] },
    { num: "20", titulo: "Upplösning", texto: ["Upplösning kräver förstärkt majoritet eller domstolsbeslut; kvarvarande tillgångar går till sociala eller kulturella ändamål i kommunen."] },
    { num: "21", titulo: "Ikraftträdande", texto: ["Dessa stadgar träder i kraft efter godkännande och registrering enligt gällande lag."] },
  ]},
];

const COPY: Record<Language, Copy> = {
  es: {
    locale: "es-ES",
    nativeName: "Español",
    htmlLang: "es",
    pageTitles: {
      inicio: "Unidos por San Fulgencio | Tu pueblo, tu voz",
      "quienes-somos": "Quiénes somos · UpSF",
      estatutos: "Estatutos · UpSF",
      contacto: "Contacto · UpSF",
    },
    nav: {
      home: "Inicio",
      sections: "Secciones",
      party: "Partido",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      ctaContact: "Contactar", ctaJoin: "Quiero afiliarme",
      homeSections: [
        { id: "cifras", t: "Cifras" },
        { id: "pueblo", t: "El pueblo" },
        { id: "fiestas", t: "Fiestas" },
        { id: "tablon", t: "Tablón" },
        { id: "guia", t: "Guía" },
        { id: "vecinos", t: "Vecinos" },
      ],
      pages: [
        { pagina: "quienes-somos", t: "Quiénes somos" },
        { pagina: "estatutos", t: "Estatutos" },
        { pagina: "contacto", t: "Contacto" },
      ],
    },
    languages: { label: "Idiomas", short: "ES" },
    rail: "38,11° N · 0,85° O — Vega Baja del Segura",
    ticker: [
      "Padrón 2025 · 9.769 habitantes",
      "66,8 % nacidos fuera de España",
      "Mercadillo: todos los martes",
      "Fiestas patronales: 16 y 17 de enero",
      "Romería de San Isidro: mayo",
      "Virgen del Remedio: octubre",
      "Ayuntamiento · 966 79 42 01",
      "Vega Baja del Segura · Alicante",
    ],
    hero: {
      topLeft: "Portal vecinal · Vega Baja del Segura",
      topRight: "Alicante · Comunitat Valenciana",
      kicker: "Unidos por",
      titleA: "San",
      titleB: "Fulgencio",
      tagline: "Tu pueblo, tu voz",
      body: "Un pueblo de campo y de extranjeros, de martes de mercadillo y fiestas de enero. Aquí caben las dos orillas: la que nació en la calle Mayor y la que llegó hace veinte veranos.",
      imageAlt: "Naranjales y acequia de la vega del Segura a la hora dorada",
      stats: [
        { v: "9.769", k: "habitantes · INE 2025" },
        { v: "66,8 %", k: "nacidos fuera de España" },
        { v: "Martes", k: "día de mercadillo" },
        { v: "19,75 km²", k: "de vega, salinas y campo" },
      ],
    },
    figures: {
      eyebrow: "Ficha del municipio",
      title: "El pueblo, en cifras",
      intro: "Datos del INE y del ayuntamiento, sin adornos. Somos uno de los municipios de España con mayor porcentaje de población extranjera y, al mismo tiempo, un pueblo de regadío que sigue levantándose temprano.",
      evolution: "Padrón · evolución",
      habitantes: "habitantes",
      cifras: [
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
      ],
      padron: [
        { año: "2009", hab: 12030, nota: "máximo del boom residencial" },
        { año: "2011", hab: 12354, nota: "77,6 % de residentes foráneos" },
        { año: "2018", hab: 7943, nota: "corrección tras la crisis" },
        { año: "2025", hab: 9769, nota: "66,8 % de residentes foráneos" },
      ],
    },
    manifesto: {
      eyebrow: "Quiénes somos",
      lead: [
        "En San Fulgencio conviven 9.769 personas y más de veinte acentos. Es uno de los pocos municipios de España donde el inglés se oye antes que el catalán, y el mismo martes en que se habla inglés en la cola de la panadería, se vende la naranja recién cortada de la partida.",
        "Este portal nace de esa doble orilla. No es una web de turismo ni la página del ayuntamiento: es el callejón digital del pueblo, donde la romería de San Isidro y el corte de agua del jueves tienen el mismo peso.",
        "Aquí encontrarás las fiestas con sus fechas de verdad, las cifras del padrón sin maquillaje y una guía práctica de servicios. Y sobre todo, un tablón donde cualquier vecino puede colgar un aviso en diez segundos.",
      ],
      figcaption: "Cosecha de cítricos en la partida de regadío. La agricultura del Segura sigue siendo el oficio antiguo del municipio, aunque hoy conviva con miles de jubilados europeos.",
      imageAlt: "Naranjas recién recogidas en una caja de madera sobre la tierra de la vega",
    },
    alley: {
      eyebrow: "El callejón",
      lead: "A las nueve de la noche la calle Mayor sigue hablada: sillas fuera, perros encadenados al quicio y una conversación que empieza en castellano y acaba en inglés sin que nadie se dé cuenta.",
      body: "San Fulgencio tiene 19,75 km² de término, un casco urbano compacto y varias urbanizaciones que crecieron a golpe de retiro europeo. El portal cubre las dos.",
      imageAlt: "Calle empedrada del casco urbano con paredes encaladas y buganvilia",
    },
    festivals: {
      eyebrow: "Calendario festivo",
      title: "El año, mes a mes",
      intro: "Las fiestas patronales se reparten entre enero, mayo, agosto y octubre: tradición religiosa, convivencia vecinal y un verano profundamente internacional.",
      imageAlt: "Calle engalanada con bombillas y banderines la noche de fiesta mayor",
      figcaption: "Calle engalanada la noche de fiesta. El engalanamiento lo hacen los vecinos: la patrona es de todos.",
      marketEyebrow: "Todos los martes",
      marketTitle: "Mercadillo semanal",
      marketBody: "El mayor negocio social del municipio: fruta de la vega, menaje, aperos y cafés que duran dos horas.",
      agenda: [
        { mes: "Ene", fecha: "16 – 17", titulo: "Fiestas patronales de San Fulgencio y San Antonio Abad", texto: "Procesiones los días 16 y 17 y bendición de los animales y el pan. La Pedida de la Gallina recorre las calles con la banda de música.", lugar: "Casco urbano" },
        { mes: "Ene", fecha: "Sáb. posterior", titulo: "Comida de Hermandad", texto: "Todo el pueblo se sienta a la misma mesa para compartir comida y convivencia.", lugar: "Casco urbano" },
        { mes: "Mar – Abr", fecha: "Semana Santa", titulo: "Procesiones", texto: "El calendario religioso del pueblo, con recorridos por las calles del centro.", lugar: "Casco urbano" },
        { mes: "May", fecha: "15 + dom.", titulo: "Romería de San Isidro Labrador", texto: "San Isidro no es patrón del pueblo, pero sí de los agricultores, y San Fulgencio sigue siendo pueblo de campo.", lugar: "Campo y casco urbano" },
        { mes: "Ago", fecha: "1er fin de semana", titulo: "Fiestas de verano · Virgen de la Paz", texto: "Vecinos de todas las nacionalidades se juntan para la cita multicolor del verano.", lugar: "Urbanización La Marina" },
        { mes: "Oct", fecha: "Tercer fin de semana", titulo: "Fiestas de la Virgen del Remedio", texto: "La patrona del pueblo. Engalanamiento de calles, desfiles de carrozas y verbena.", lugar: "Casco urbano" },
      ],
    },
    guide: {
      eyebrow: "Guía del vecino",
      title: "A quién llamar y dónde ir",
      intro: "Lo práctico, en una sola pantalla: contacto del consistorio, servicios del pueblo y las dos o tres cosas que hay que saber antes de vivir aquí.",
      items: [
        { t: "Ayuntamiento de San Fulgencio", d: "Plaza Constitución, 26 · 03177 San Fulgencio", m: "966 79 42 01 · sanfulgencio.es" },
        { t: "Mercadillo semanal", d: "Todos los martes, por el casco urbano", m: "Fruta de la vega, textil, menaje y aperos" },
        { t: "Farmacias", d: "Cuatro farmacias en el municipio", m: "Servicio de guardia rotatorio" },
        { t: "Deporte de pueblo", d: "Pelota valenciana y cicloturismo por la vega", m: "Colombicultura: la otra afición con tradición" },
        { t: "Lenguas del callejón", d: "Castellano, con el inglés como segunda lengua de uso", m: "Alemán, noruego y el resto de la Europa que se quedó aquí" },
        { t: "Economía", d: "Agricultura de regadío: cítricos y hortícolas del Segura", m: "Turismo residencial europeo desde los años 80" },
      ],
    },
    neighbors: {
      eyebrow: "La voz de los vecinos",
      title: "Dos orillas, un mismo callejón",
      items: [
        { cita: "Toda la vida en la misma calle. Antes salíamos todos a la silla a la sombra y todavía lo hacemos, aunque ahora hay más coches y más acentos.", nombre: "Amparo Beltrán", lugar: "Casco urbano · nacida aquí" },
        { cita: "Twenty-two years here and I still say good morning to everyone on the road. This town adopted us; the least we can do is learn its name properly.", trad: "«Veintidós años viviendo aquí y todavía saludo a todos por la carretera. Este pueblo nos acogió; lo mínimo es aprender a pronunciar bien su nombre.»", nombre: "Derek Whitfield", lugar: "Urbanización La Marina", lang: "EN" },
        { cita: "Wir sind wegen des Sommers geblieben und wegen der Menschen. Der Markt am Dienstag ist unser Wochenende.", trad: "«Nos quedamos por el verano y por la gente. El mercado del martes es nuestro fin de semana.»", nombre: "Hans-Jürgen Kessler", lugar: "Partida de campo · 18 años aquí", lang: "DE" },
      ],
    },
    footer: {
      tagline: "Tu pueblo, tu voz",
      party: "Partido UpSF",
      townHall: "Ayuntamiento",
      copyright: "Unidos por San Fulgencio · UpSF",
    },
    board: {
      eyebrow: "La sección que la tiene usted",
      title: "Tablón de anuncios",
      intro: "Sin cuenta, sin algoritmo y sin permiso de nadie. Escribe tu aviso y aparece aquí mismo, arriba del todo, tal y como se pegaría en el tablón del bar.",
      countLabel: "avisos colgados",
      formTitle: "Pega tu aviso",
      category: "Categoría",
      categories: {
        water: "Agua",
        health: "Salud",
        works: "Obras",
        associations: "Asociaciones",
        culture: "Cultura",
        other: "Otro",
      },
      titleLabel: "Título",
      titlePlaceholder: "Corte de agua el jueves",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntale al pueblo qué pasa, dónde y cuándo.",
      authorLabel: "Firma o barrio",
      authorPlaceholder: "Amparo, calle Mayor",
      submit: "Colgar en el tablón",
      emptyTitle: "El tablón está limpio.",
      emptyBody: "Se ha ido el mundo entero. Sé el primero en pegar un aviso.",
      remove: "Retirar",
      fallback: "Se publica al instante en tu navegador. Nada sale de este equipo.",
      errorShort: "Ponle un título y al menos una frase al aviso: el tablón no admite postales en blanco.",
      errorAuthor: "Dinos quién lo cuelga: firma o barrio, para saber de dónde viene.",
      imageAlt: "Mercadillo semanal de San Fulgencio un martes por la mañana",
      initialNotices: [
        { id: 101, cat: "water", titulo: "Corte de suministro en la zona del consultorio", texto: "El jueves de 9:00 a 14:00 habrá obras de mantenimiento en la conducción. Recomendamos dejar lleno un recipiente la noche anterior.", autor: "Comisión de agua", fecha: "hace 2 días" },
        { id: 102, cat: "associations", titulo: "Reunión abierta de la asociación de vecinos", texto: "Martes a las 19:30 en el local social. Punto único: el estado de la acera del camí del Riu y la limpieza de las entradas a la urbanización.", autor: "A.V.V. San Fulgencio", fecha: "hace 4 días" },
        { id: 103, cat: "culture", titulo: "Taller de esparto y mercado de artesanía", texto: "Sábado durante todo el día junto al casco urbano. Se abren los talleres-cueva y hay mercadillo de artesanía. Traed cestas viejas para reparar.", autor: "Casa de Cultura", fecha: "hace 6 días" },
        { id: 104, cat: "health", titulo: "Horario del consultorio", texto: "El consultorio recuerda la vuelta al horario de mañana completo a partir del lunes. Para urgencias, 061.", autor: "Vecina de la calle Mayor", fecha: "hace 1 semana" },
        { id: 105, cat: "other", titulo: "Se busca gato con botas (literalmente)", texto: "Se escapó el domingo desde la plaza. Es pardo con una oreja doblada y responde al nombre de Sento. Si lo veis, están en la panadería de la esquina.", autor: "Familia Ortiz", fecha: "hace 1 semana" },
      ],
    },
    who: {
      eyebrow: "El equipo",
      titleA: "Quiénes",
      titleB: "somos",
      intro: "Unidos por San Fulgencio es un proyecto vecinal que nace de la convicción de que el municipio merece una representación honesta, cercana y de puertas abiertas. Somos vecinos de San Fulgencio — de aquí de siempre y de los que llegaron hace años — que decidimos dar un paso adelante.",
      teamEyebrow: "Nuestro equipo · 2025",
      teamTitle: "Las personas detrás del proyecto",
      teamIntro: "Seis vecinos que ponen nombre y cara. Transparencia desde el primer día.",
      pendingName: "Por confirmar",
      contactCta: "Contactar →",
      valuesEyebrow: "Lo que nos une",
      members: [
        { nombre: "Alain Franz Vandenbergen", cargo: "Fundador y candidato a la Alcaldía", bio: "Vecino de San Fulgencio comprometido con el progreso del municipio y la participación ciudadana. Impulsor del proyecto Unidos por San Fulgencio para dar voz a todos los residentes del término, independientemente de su origen." },
        { nombre: "Conchi García Baeza", cargo: "Responsable de Comunicación", bio: "Pieza clave en la construcción del proyecto UpSF. Trabaja para que la información llegue a todos los vecinos de forma clara, transparente y en los idiomas del municipio." },
        { nombre: "Por confirmar", cargo: "—", bio: "Este puesto estará ocupado próximamente. Si quieres formar parte del equipo de Unidos por San Fulgencio, escríbenos a través del formulario de contacto.", pendiente: true },
        { nombre: "Por confirmar", cargo: "—", bio: "Este puesto estará ocupado próximamente. Si quieres formar parte del equipo de Unidos por San Fulgencio, escríbenos a través del formulario de contacto.", pendiente: true },
        { nombre: "Por confirmar", cargo: "—", bio: "Este puesto estará ocupado próximamente. Si quieres formar parte del equipo de Unidos por San Fulgencio, escríbenos a través del formulario de contacto.", pendiente: true },
        { nombre: "Por confirmar", cargo: "—", bio: "Este puesto estará ocupado próximamente. Si quieres formar parte del equipo de Unidos por San Fulgencio, escríbenos a través del formulario de contacto.", pendiente: true },
      ],
      values: [
        { icono: "☀️", t: "Transparencia", d: "Cuentas claras, decisiones explicadas y puertas abiertas." },
        { icono: "🤝", t: "Inclusión", d: "El municipio es de todos: españoles, británicos, alemanes y de cualquier origen." },
        { icono: "🌱", t: "Sostenibilidad", d: "Proteger la vega, las salinas y el patrimonio natural del Segura." },
        { icono: "📣", t: "Participación", d: "Las ideas de los vecinos no son sugerencias: son el programa." },
      ],
    },
    statutes: {
      eyebrow: "Documento fundacional",
      titleA: "Estatutos",
      titleB: "del partido",
      intro: "Los estatutos son la ley interna del partido: definen qué somos, cómo tomamos decisiones, cómo nos financiamos y cómo garantizamos los derechos de cada afiliado.",
      index: "Índice",
      chapter: "Capítulo",
      legalNote: "Documento de estatutos del partido político Unidos por San Fulgencio (UpSF), redactado conforme a la Ley Orgánica 6/2002 de Partidos Políticos. Pendiente de inscripción en el Registro de Partidos Políticos.",
      facts: [
        { k: "Capítulos", v: "VIII" },
        { k: "Artículos", v: "21" },
        { k: "Vigencia", v: "2025" },
        { k: "Inscripción", v: "Pendiente · Min. Interior" },
      ],
      chapters: statutesEs,
    },
    contact: {
      eyebrow: "Escríbenos",
      title: "Contacto",
      intro: "Tus ideas y sugerencias son el motor de este proyecto. Cuéntanos qué mejorarías en el municipio, qué problema no encuentra solución o cómo te gustaría colaborar con UpSF.",
      formEyebrow: "Formulario de contacto",
      formTitle: "Tu voz importa",
      formIntro: "Rellena el formulario con tu consulta, propuesta o idea. Se abrirá tu cliente de correo con el mensaje preparado para enviarlo.",
      subjects: ["Propuesta ciudadana", "Sugerencia de mejora", "Consulta sobre el programa", "Quiero afiliarme", "Colaborar con UpSF", "Problema en el municipio", "Otro"],
      sentTitle: "¡Mensaje recibido!",
      sentBody: "Tu cliente de correo ha abierto el mensaje listo para enviar. En cuanto lo mandes, te responderemos lo antes posible.",
      sendAnother: "Enviar otro mensaje",
      submit: "Enviar mensaje →",
      helper: "Se abrirá tu aplicación de correo con el mensaje preparado. Tu dirección será",
      minimum: "Mínimo 20 caracteres.",
      office: "Ayuntamiento",
      writeDirect: "Escríbenos directamente",
      writeDirectBody: "Si prefieres escribirnos directamente sin el formulario:",
      join: "¿Quieres unirte a UpSF?",
      joinBody: "Si quieres formar parte del equipo o afiliarte al partido, escríbenos indicando «Quiero afiliarme» en el asunto.",
      schedule: "Horario de atención",
      weekdays: "Lunes – Viernes",
      afternoons: "Tardes",
      saturdays: "Sábados",
      labels: {
        nombre: "Tu nombre",
        email: "Tu correo electrónico",
        telefono: "Teléfono (opcional)",
        asunto: "Asunto",
        mensaje: "Tu mensaje o propuesta",
        required: "campo obligatorio",
        choose: "— Elige una opción —",
      },
      placeholders: {
        nombre: "Amparo Martínez",
        email: "amparo@ejemplo.com",
        telefono: "966 79 42 00",
        mensaje: "Cuéntanos con detalle tu idea, propuesta o problema. Cuanto más concreto seas, mejor podremos ayudarte.",
      },
      errors: {
        nombre: "Dinos tu nombre para saber a quién escribimos.",
        email: "Necesitamos un correo válido para responderte.",
        asunto: "Elige el asunto más parecido a tu consulta.",
        mensaje: "Cuéntanos un poco más: necesitamos al menos una frase completa.",
      },
    },
  },
  en: {
    locale: "en-GB",
    nativeName: "English",
    htmlLang: "en",
    pageTitles: {
      inicio: "United for San Fulgencio | Your town, your voice",
      "quienes-somos": "Who we are · UpSF",
      estatutos: "Statutes · UpSF",
      contacto: "Contact · UpSF",
    },
    nav: {
      home: "Home",
      sections: "Sections",
      party: "Party",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      ctaContact: "Contact", ctaJoin: "Join UpSF",
      homeSections: [
        { id: "cifras", t: "Figures" },
        { id: "pueblo", t: "The town" },
        { id: "fiestas", t: "Festivals" },
        { id: "tablon", t: "Notice board" },
        { id: "guia", t: "Guide" },
        { id: "vecinos", t: "Voices" },
      ],
      pages: [
        { pagina: "quienes-somos", t: "Who we are" },
        { pagina: "estatutos", t: "Statutes" },
        { pagina: "contacto", t: "Contact" },
      ],
    },
    languages: { label: "Languages", short: "EN" },
    rail: "38.11° N · 0.85° W — Vega Baja del Segura",
    ticker: [
      "Population 2025 · 9,769 residents",
      "66.8% born outside Spain",
      "Weekly market: every Tuesday",
      "Patron saint festival: 16–17 January",
      "San Isidro pilgrimage: May",
      "Virgen del Remedio: October",
      "Town hall · +34 966 79 42 01",
      "Vega Baja del Segura · Alicante",
    ],
    hero: {
      topLeft: "Neighbourhood portal · Vega Baja del Segura",
      topRight: "Alicante · Valencian Community",
      kicker: "United for",
      titleA: "San",
      titleB: "Fulgencio",
      tagline: "Your town, your voice",
      body: "A farming town, an international town, a Tuesday market town and a January festival town. Both shores fit here: the one born on Calle Mayor and the one that arrived twenty summers ago.",
      imageAlt: "Orange groves and irrigation channel in the Segura plain at golden hour",
      stats: [
        { v: "9,769", k: "residents · INE 2025" },
        { v: "66.8%", k: "born outside Spain" },
        { v: "Tuesday", k: "market day" },
        { v: "19.75 km²", k: "orchards, salt flats and fields" },
      ],
    },
    figures: {
      eyebrow: "Municipal profile",
      title: "The town in figures",
      intro: "Official numbers, plainly told. San Fulgencio is one of Spain’s municipalities with the highest proportion of foreign residents, while still remaining an irrigation-based farming town.",
      evolution: "Population register · evolution",
      habitantes: "residents",
      cifras: [
        { k: "Municipal register · INE 2025", v: "9,769", n: "residents" },
        { k: "Area", v: "19.75", n: "km²" },
        { k: "Density", v: "494.6", n: "res./km²" },
        { k: "Elevation", v: "4", n: "m a.s.l." },
        { k: "Residents born outside Spain", v: "66.8", n: "%" },
        { k: "Demonym", v: "sanfulgentino, -a" },
        { k: "Postcode", v: "03177" },
        { k: "County", v: "Vega Baja del Segura" },
        { k: "Province", v: "Alicante · Valencia" },
        { k: "Distance to Elche", v: "16", n: "km north" },
        { k: "Distance to Orihuela", v: "22", n: "km · county seat" },
        { k: "El Altet airport", v: "26", n: "km" },
      ],
      padron: [
        { año: "2009", hab: 12030, nota: "peak of the residential boom" },
        { año: "2011", hab: 12354, nota: "77.6% foreign residents" },
        { año: "2018", hab: 7943, nota: "post-crisis correction" },
        { año: "2025", hab: 9769, nota: "66.8% foreign residents" },
      ],
    },
    manifesto: {
      eyebrow: "Who we are",
      lead: [
        "San Fulgencio is home to 9,769 people and more than twenty accents. It is one of the few municipalities in Spain where English is heard before Valencian, and where the same Tuesday queue at the bakery mixes languages with freshly picked oranges from the fields.",
        "This portal is born from that double shoreline. It is not a tourism website and it is not the town hall’s website: it is the town’s digital alleyway, where the San Isidro pilgrimage and Thursday’s water cut matter equally because both affect Monday morning.",
        "Here you will find real festival dates, raw demographic figures and a practical guide to local services. Above all, you will find a notice board where any neighbour can pin a message in ten seconds.",
      ],
      figcaption: "Citrus harvest in the irrigated plots. Farming remains the municipality’s oldest trade, even while coexisting with thousands of European retirees.",
      imageAlt: "Freshly picked oranges in a wooden crate on the soil of the Segura plain",
    },
    alley: {
      eyebrow: "The alley",
      lead: "At nine in the evening Calle Mayor is still full of voices: chairs outside, dogs tied to doorways and a conversation that begins in Spanish and ends in English without anyone noticing.",
      body: "San Fulgencio covers 19.75 km², with a compact old centre and several residential estates that grew through European retirement migration. This portal speaks to both.",
      imageAlt: "Stone street in the old town with whitewashed walls and bougainvillea",
    },
    festivals: {
      eyebrow: "Festive calendar",
      title: "The year, month by month",
      intro: "The town’s festive cycle runs through January, May, August and October: religious tradition, neighbourly life and an unmistakably international summer.",
      imageAlt: "Street decorated with lights and bunting during the main town festival",
      figcaption: "A decorated street on festival night. The neighbours do the decorating themselves: the patron saint belongs to everyone.",
      marketEyebrow: "Every Tuesday",
      marketTitle: "Weekly market",
      marketBody: "The municipality’s largest social ritual: produce from the plain, household goods, tools and coffees that last two hours.",
      agenda: [
        { mes: "Jan", fecha: "16–17", titulo: "Patron saint festival of San Fulgencio and San Antonio Abad", texto: "Processions on the 16th and 17th, plus the blessing of animals and bread. The traditional collection parade moves through the streets with the town band.", lugar: "Town centre" },
        { mes: "Jan", fecha: "Following Sat.", titulo: "Brotherhood meal", texto: "The whole town gathers around one table for a day of food and community.", lugar: "Town centre" },
        { mes: "Mar–Apr", fecha: "Holy Week", titulo: "Processions", texto: "The town’s religious calendar, with routes through the central streets.", lugar: "Town centre" },
        { mes: "May", fecha: "15 + Sun.", titulo: "San Isidro Labrador pilgrimage", texto: "San Isidro is not the town’s patron saint but he is the farmers’ saint, and San Fulgencio is still a farming town.", lugar: "Countryside and centre" },
        { mes: "Aug", fecha: "1st weekend", titulo: "Summer festival · Virgen de la Paz", texto: "Residents of many nationalities come together for the municipality’s most colourful summer gathering.", lugar: "La Marina urbanisation" },
        { mes: "Oct", fecha: "Third weekend", titulo: "Virgen del Remedio festival", texto: "The patron saint of the town. Streets are decorated, floats parade and the town celebrates together.", lugar: "Town centre" },
      ],
    },
    guide: {
      eyebrow: "Neighbour’s guide",
      title: "Who to call and where to go",
      intro: "The practical part, all on one screen: local contacts, everyday services and the things you need to know before living here.",
      items: [
        { t: "San Fulgencio Town Hall", d: "Plaza Constitución, 26 · 03177 San Fulgencio", m: "+34 966 79 42 01 · sanfulgencio.es" },
        { t: "Weekly market", d: "Every Tuesday through the old centre", m: "Produce, clothing, household goods and tools" },
        { t: "Pharmacies", d: "Four pharmacies in the municipality", m: "Rotating duty service" },
        { t: "Village sports", d: "Valencian pelota and cycling across the plain", m: "Pigeon sport: the other local tradition" },
        { t: "Languages of the lane", d: "Spanish, with English as a widely used second language", m: "German, Norwegian and the rest of Europe that stayed" },
        { t: "Economy", d: "Irrigated agriculture: citrus and market vegetables", m: "European residential tourism since the 1980s" },
      ],
    },
    neighbors: {
      eyebrow: "Neighbours’ voices",
      title: "Two shores, one lane",
      items: [
        { cita: "I’ve lived on the same street all my life. We used to sit outside in the shade and we still do, even if there are more cars and more accents now.", nombre: "Amparo Beltrán", lugar: "Old town · born here" },
        { cita: "Twenty-two years here and I still say good morning to everyone on the road. This town adopted us; the least we can do is learn its name properly.", nombre: "Derek Whitfield", lugar: "La Marina urbanisation", lang: "EN" },
        { cita: "We stayed for the summer and for the people. Tuesday market day is our weekend.", nombre: "Hans-Jürgen Kessler", lugar: "Countryside plot · 18 years here", lang: "DE" },
      ],
    },
    footer: {
      tagline: "Your town, your voice",
      party: "UpSF party",
      townHall: "Town hall",
      copyright: "United for San Fulgencio · UpSF",
    },
    board: {
      eyebrow: "The section belongs to you",
      title: "Notice board",
      intro: "No account, no algorithm and no permission needed. Write your notice and it appears here at the top, just as if you had pinned it on the bar notice board.",
      countLabel: "posted notices",
      formTitle: "Pin your notice",
      category: "Category",
      categories: { water: "Water", health: "Health", works: "Works", associations: "Associations", culture: "Culture", other: "Other" },
      titleLabel: "Title",
      titlePlaceholder: "Water cut on Thursday",
      messageLabel: "Message",
      messagePlaceholder: "Tell the town what is happening, where and when.",
      authorLabel: "Signature or area",
      authorPlaceholder: "Amparo, Calle Mayor",
      submit: "Post on the board",
      emptyTitle: "The board is empty.",
      emptyBody: "Everyone has gone home. Be the first to pin a notice.",
      remove: "Remove",
      fallback: "It is posted instantly in your browser. Nothing leaves this device.",
      errorShort: "Give your notice a title and at least one complete sentence.",
      errorAuthor: "Tell us who is posting it: a name or a neighbourhood helps.",
      imageAlt: "Weekly market in San Fulgencio on a Tuesday morning",
      initialNotices: [
        { id: 101, cat: "water", titulo: "Supply cut near the clinic", texto: "There will be maintenance works on Thursday from 9:00 to 14:00. We recommend filling a container the night before.", autor: "Water committee", fecha: "2 days ago" },
        { id: 102, cat: "associations", titulo: "Open meeting of the neighbourhood association", texto: "Tuesday at 19:30 in the social hall. Single item: pavement conditions and cleaning at the estate entrances.", autor: "Residents’ association", fecha: "4 days ago" },
        { id: 103, cat: "culture", titulo: "Esparto workshop and craft market", texto: "All day Saturday next to the old centre. Cave workshops open and there is a craft market. Bring old baskets for repair.", autor: "Culture house", fecha: "6 days ago" },
        { id: 104, cat: "health", titulo: "Clinic opening hours", texto: "The clinic reminds residents that full morning hours return on Monday. Emergencies: 061.", autor: "Neighbour from Calle Mayor", fecha: "1 week ago" },
        { id: 105, cat: "other", titulo: "Missing cat with boots (literally)", texto: "He disappeared on Sunday from the square. Brown, one bent ear, answers to Sento. If you see him, the family is at the corner bakery.", autor: "Ortiz family", fecha: "1 week ago" },
      ],
    },
    who: {
      eyebrow: "The team",
      titleA: "Who",
      titleB: "we are",
      intro: "United for San Fulgencio is a neighbourhood project born from the conviction that the municipality deserves honest, close and open representation. We are residents who decided to step forward.",
      teamEyebrow: "Our team · 2025",
      teamTitle: "The people behind the project",
      teamIntro: "Six neighbours putting their names and faces forward. Transparency from day one.",
      pendingName: "To be confirmed",
      contactCta: "Contact →",
      valuesEyebrow: "What unites us",
      members: [
        { nombre: "Alain Franz Vandenbergen", cargo: "Founder and mayoral candidate", bio: "Resident of San Fulgencio committed to progress and civic participation. Driving force behind the UpSF project to give a voice to every resident, whatever their origin." },
        { nombre: "Conchi García Baeza", cargo: "Communications lead", bio: "A key part of building the UpSF project. She works to ensure information reaches every resident clearly, transparently and in the languages used in the municipality." },
        { nombre: "To be confirmed", cargo: "—", bio: "This place will be filled soon. If you want to join United for San Fulgencio, write to us through the contact form.", pendiente: true },
        { nombre: "To be confirmed", cargo: "—", bio: "This place will be filled soon. If you want to join United for San Fulgencio, write to us through the contact form.", pendiente: true },
        { nombre: "To be confirmed", cargo: "—", bio: "This place will be filled soon. If you want to join United for San Fulgencio, write to us through the contact form.", pendiente: true },
        { nombre: "To be confirmed", cargo: "—", bio: "This place will be filled soon. If you want to join United for San Fulgencio, write to us through the contact form.", pendiente: true },
      ],
      values: [
        { icono: "☀️", t: "Transparency", d: "Clear accounts, explained decisions and open doors." },
        { icono: "🤝", t: "Inclusion", d: "The municipality belongs to everyone: Spanish, British, German and every other background." },
        { icono: "🌱", t: "Sustainability", d: "Protecting the plain, the salt flats and the natural heritage of the Segura." },
        { icono: "📣", t: "Participation", d: "Neighbours’ ideas are not suggestions: they are the programme." },
      ],
    },
    statutes: {
      eyebrow: "Founding document",
      titleA: "Party",
      titleB: "statutes",
      intro: "The statutes are the party’s internal law: they define what we are, how we take decisions, how we finance ourselves and how we protect every member’s rights.",
      index: "Index",
      chapter: "Chapter",
      legalNote: "Statutes of the political party United for San Fulgencio (UpSF), drafted in accordance with Spanish Organic Law 6/2002 on Political Parties. Registration with the Political Parties Register is pending.",
      facts: [
        { k: "Chapters", v: "VIII" },
        { k: "Articles", v: "21" },
        { k: "Validity", v: "2025" },
        { k: "Registration", v: "Pending · Interior Ministry" },
      ],
      chapters: statutesEn,
    },
    contact: {
      eyebrow: "Write to us",
      title: "Contact",
      intro: "Your ideas and suggestions drive this project. Tell us what you would improve, what problem is still unsolved, or how you would like to collaborate with UpSF.",
      formEyebrow: "Contact form",
      formTitle: "Your voice matters",
      formIntro: "Fill in the form with your question, suggestion or idea. Your mail app will open with the message prepared.",
      subjects: ["Citizen proposal", "Improvement suggestion", "Question about the programme", "I want to join", "Collaborate with UpSF", "Problem in the town", "Other"],
      sentTitle: "Message received!",
      sentBody: "Your mail app has opened the message ready to send. As soon as you send it, we will reply as quickly as possible.",
      sendAnother: "Send another message",
      submit: "Send message →",
      helper: "Your mail application will open with the prepared message. It will be addressed to",
      minimum: "Minimum 20 characters.",
      office: "Town hall",
      writeDirect: "Write directly",
      writeDirectBody: "If you prefer to write without using the form:",
      join: "Want to join UpSF?",
      joinBody: "If you want to join the team or become a member, write to us and choose ‘I want to join’ as the subject.",
      schedule: "Opening hours",
      weekdays: "Monday – Friday",
      afternoons: "Afternoons",
      saturdays: "Saturdays",
      labels: {
        nombre: "Your name",
        email: "Your email address",
        telefono: "Phone (optional)",
        asunto: "Subject",
        mensaje: "Your message or proposal",
        required: "required field",
        choose: "— Choose an option —",
      },
      placeholders: {
        nombre: "Amparo Smith",
        email: "amparo@example.com",
        telefono: "+34 966 79 42 00",
        mensaje: "Tell us in detail about your idea, proposal or local issue. The more specific you are, the better we can respond.",
      },
      errors: {
        nombre: "Please tell us your name so we know who we are writing to.",
        email: "We need a valid email address to reply.",
        asunto: "Please choose the subject that best matches your message.",
        mensaje: "Tell us a little more: we need at least one complete sentence.",
      },
    },
  },
  fr: {
    locale: "fr-FR",
    nativeName: "Français",
    htmlLang: "fr",
    pageTitles: { inicio: "Unis pour San Fulgencio | Votre village, votre voix", "quienes-somos": "Qui sommes-nous · UpSF", estatutos: "Statuts · UpSF", contacto: "Contact · UpSF" },
    nav: { home: "Accueil", sections: "Sections", party: "Parti", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu", ctaContact: "Contacter", ctaJoin: "Rejoindre UpSF", homeSections: [ { id: "cifras", t: "Chiffres" }, { id: "pueblo", t: "Le village" }, { id: "fiestas", t: "Fêtes" }, { id: "tablon", t: "Panneau" }, { id: "guia", t: "Guide" }, { id: "vecinos", t: "Voix" } ], pages: [ { pagina: "quienes-somos", t: "Qui sommes-nous" }, { pagina: "estatutos", t: "Statuts" }, { pagina: "contacto", t: "Contact" } ] },
    languages: { label: "Langues", short: "FR" },
    rail: "38,11° N · 0,85° O — Vega Baja del Segura",
    ticker: ["Population 2025 · 9 769 habitants", "66,8 % nés hors d’Espagne", "Marché hebdomadaire : chaque mardi", "Fête patronale : 16–17 janvier", "Pèlerinage de San Isidro : mai", "Virgen del Remedio : octobre", "Mairie · +34 966 79 42 01", "Vega Baja del Segura · Alicante"],
    hero: { topLeft: "Portail citoyen · Vega Baja del Segura", topRight: "Alicante · Communauté valencienne", kicker: "Unis pour", titleA: "San", titleB: "Fulgencio", tagline: "Votre village, votre voix", body: "Un village agricole, international, rythmé par le marché du mardi et les fêtes de janvier. Les deux rives y ont leur place : celle qui est née ici et celle qui est arrivée il y a vingt étés.", imageAlt: "Orangers et canal d’irrigation dans la plaine du Segura à l’heure dorée", stats: [ { v: "9 769", k: "habitants · INE 2025" }, { v: "66,8 %", k: "nés hors d’Espagne" }, { v: "Mardi", k: "jour de marché" }, { v: "19,75 km²", k: "vergers, marais salants et champs" } ] },
    figures: { eyebrow: "Fiche municipale", title: "Le village en chiffres", intro: "Des données officielles, sans détour. San Fulgencio fait partie des communes d’Espagne avec la plus forte proportion de résidents étrangers, tout en restant une commune agricole irriguée.", evolution: "Population · évolution", habitantes: "habitants", cifras: [ { k: "Registre municipal · INE 2025", v: "9 769", n: "habitants" }, { k: "Superficie", v: "19,75", n: "km²" }, { k: "Densité", v: "494,6", n: "hab./km²" }, { k: "Altitude", v: "4", n: "m" }, { k: "Résidents nés hors d’Espagne", v: "66,8", n: "%" }, { k: "Gentilé", v: "sanfulgentino, -a" }, { k: "Code postal", v: "03177" }, { k: "Comarque", v: "Vega Baja del Segura" }, { k: "Province", v: "Alicante · Valence" }, { k: "Distance à Elche", v: "16", n: "km" }, { k: "Distance à Orihuela", v: "22", n: "km" }, { k: "Aéroport d’El Altet", v: "26", n: "km" } ], padron: [ { año: "2009", hab: 12030, nota: "pic du boom résidentiel" }, { año: "2011", hab: 12354, nota: "77,6 % de résidents étrangers" }, { año: "2018", hab: 7943, nota: "correction après la crise" }, { año: "2025", hab: 9769, nota: "66,8 % de résidents étrangers" } ] },
    manifesto: { eyebrow: "Qui sommes-nous", lead: ["San Fulgencio réunit 9 769 habitants et plus de vingt accents. C’est l’une des rares communes d’Espagne où l’anglais s’entend avant le valencien, tout en vendant des oranges fraîchement cueillies au marché.", "Ce portail naît de cette double réalité. Ce n’est ni un site touristique ni celui de la mairie : c’est la ruelle numérique du village.", "Vous y trouverez les vraies dates des fêtes, les chiffres sans fard et un guide pratique des services locaux."], figcaption: "Récolte d’agrumes dans les parcelles irriguées. L’agriculture reste l’activité historique de la commune.", imageAlt: "Oranges fraîchement cueillies dans une caisse en bois" },
    alley: { eyebrow: "La ruelle", lead: "À neuf heures du soir, la rue principale reste pleine de voix : chaises dehors et conversations qui commencent en espagnol et se terminent en anglais sans qu’on s’en rende compte.", body: "San Fulgencio couvre 19,75 km², avec un centre ancien compact et plusieurs urbanisations nées du tourisme résidentiel européen.", imageAlt: "Rue pavée du centre ancien avec murs blanchis à la chaux" },
    festivals: { eyebrow: "Calendrier festif", title: "L’année, mois par mois", intro: "Le cycle festif passe par janvier, mai, août et octobre : tradition religieuse, vie de quartier et été profondément international.", imageAlt: "Rue décorée de lumières pendant la fête du village", figcaption: "Rue décorée la nuit de fête. La décoration est faite par les voisins eux-mêmes.", marketEyebrow: "Chaque mardi", marketTitle: "Marché hebdomadaire", marketBody: "Le grand rituel social de la commune : fruits et légumes, articles ménagers, outils et cafés sans fin.", agenda: [ { mes: "Jan", fecha: "16–17", titulo: "Fêtes patronales de San Fulgencio et San Antonio Abad", texto: "Processions et bénédiction des animaux et du pain.", lugar: "Centre-ville" }, { mes: "Jan", fecha: "Sam. suivant", titulo: "Repas de fraternité", texto: "Tout le village partage un repas commun.", lugar: "Centre-ville" }, { mes: "Mar–Avr", fecha: "Semaine sainte", titulo: "Processions", texto: "Le calendrier religieux dans les rues du centre.", lugar: "Centre-ville" }, { mes: "Mai", fecha: "15 + dim.", titulo: "Pèlerinage de San Isidro Labrador", texto: "San Isidro est le saint des agriculteurs et le village reste profondément agricole.", lugar: "Campagne et centre" }, { mes: "Aoû", fecha: "1er week-end", titulo: "Fêtes d’été · Virgen de la Paz", texto: "Rencontre estivale multicolore entre voisins de nombreuses nationalités.", lugar: "Urbanisation La Marina" }, { mes: "Oct", fecha: "Troisième week-end", titulo: "Fêtes de la Virgen del Remedio", texto: "Rues décorées, chars et fête populaire.", lugar: "Centre-ville" } ] },
    guide: { eyebrow: "Guide du voisin", title: "Qui appeler et où aller", intro: "L’essentiel pratique sur un seul écran : contacts, services et informations utiles pour vivre ici.", items: [ { t: "Mairie de San Fulgencio", d: "Plaza Constitución, 26 · 03177 San Fulgencio", m: "+34 966 79 42 01 · sanfulgencio.es" }, { t: "Marché hebdomadaire", d: "Chaque mardi dans le centre ancien", m: "Fruits, textile, ménage et outils" }, { t: "Pharmacies", d: "Quatre pharmacies dans la commune", m: "Service de garde tournant" }, { t: "Sports du village", d: "Pelote valencienne et cyclotourisme", m: "Colombiculture : une autre tradition" }, { t: "Langues du village", d: "Espagnol, avec l’anglais comme seconde langue courante", m: "Allemand, norvégien et le reste de l’Europe" }, { t: "Économie", d: "Agriculture irriguée : agrumes et maraîchage", m: "Tourisme résidentiel européen depuis les années 1980" } ] },
    neighbors: { eyebrow: "La voix des voisins", title: "Deux rives, une même rue", items: [ { cita: "J’ai vécu toute ma vie dans la même rue. On continue à sortir les chaises à l’ombre, même s’il y a aujourd’hui plus de voitures et plus d’accents.", nombre: "Amparo Beltrán", lugar: "Centre ancien · née ici" }, { cita: "Twenty-two years here and I still say good morning to everyone on the road.", nombre: "Derek Whitfield", lugar: "Urbanisation La Marina", lang: "EN" }, { cita: "We stayed for the summer and for the people. Tuesday market day is our weekend.", nombre: "Hans-Jürgen Kessler", lugar: "Parcelle de campagne · 18 ans ici", lang: "DE" } ] },
    footer: { tagline: "Votre village, votre voix", party: "Parti UpSF", townHall: "Mairie", copyright: "Unis pour San Fulgencio · UpSF" },
    board: { eyebrow: "La section vous appartient", title: "Panneau d’annonces", intro: "Sans compte, sans algorithme et sans demander la permission. Écrivez votre annonce et elle apparaît ici, en tête.", countLabel: "annonces affichées", formTitle: "Publier une annonce", category: "Catégorie", categories: { water: "Eau", health: "Santé", works: "Travaux", associations: "Associations", culture: "Culture", other: "Autre" }, titleLabel: "Titre", titlePlaceholder: "Coupure d’eau jeudi", messageLabel: "Message", messagePlaceholder: "Expliquez au village ce qui se passe, où et quand.", authorLabel: "Signature ou quartier", authorPlaceholder: "Amparo, Calle Mayor", submit: "Afficher sur le panneau", emptyTitle: "Le panneau est vide.", emptyBody: "Soyez la première personne à y afficher un message.", remove: "Retirer", fallback: "Publication instantanée dans votre navigateur. Rien ne quitte cet appareil.", errorShort: "Ajoutez un titre et au moins une phrase complète.", errorAuthor: "Dites-nous qui publie : un nom ou un quartier.", imageAlt: "Marché hebdomadaire de San Fulgencio un mardi matin", initialNotices: [ { id: 101, cat: "water", titulo: "Coupure près du centre médical", texto: "Travaux de maintenance jeudi de 9 h à 14 h.", autor: "Commission de l’eau", fecha: "il y a 2 jours" }, { id: 102, cat: "associations", titulo: "Réunion ouverte de l’association des voisins", texto: "Mardi à 19 h 30 au local social.", autor: "Association de voisins", fecha: "il y a 4 jours" }, { id: 103, cat: "culture", titulo: "Atelier d’esparto et marché artisanal", texto: "Samedi toute la journée près du centre ancien.", autor: "Maison de la culture", fecha: "il y a 6 jours" }, { id: 104, cat: "health", titulo: "Horaires du centre médical", texto: "Retour aux horaires complets du matin à partir de lundi.", autor: "Voisine de la Calle Mayor", fecha: "il y a 1 semaine" }, { id: 105, cat: "other", titulo: "Chat disparu avec des bottes (littéralement)", texto: "Disparu dimanche depuis la place, répond au nom de Sento.", autor: "Famille Ortiz", fecha: "il y a 1 semaine" } ] },
    who: { eyebrow: "L’équipe", titleA: "Qui", titleB: "sommes-nous", intro: "Unidos por San Fulgencio est un projet de voisins né de la conviction que la commune mérite une représentation honnête, proche et ouverte.", teamEyebrow: "Notre équipe · 2025", teamTitle: "Les personnes derrière le projet", teamIntro: "Six voisins mettent leur nom et leur visage sur la table. Transparence dès le premier jour.", pendingName: "À confirmer", contactCta: "Contacter →", valuesEyebrow: "Ce qui nous unit", members: [ { nombre: "Alain Franz Vandenbergen", cargo: "Fondateur et candidat à la mairie", bio: "Voisin engagé pour le progrès de San Fulgencio et la participation citoyenne." }, { nombre: "Conchi García Baeza", cargo: "Responsable communication", bio: "Pièce essentielle du projet UpSF, elle veille à une information claire et transparente." }, { nombre: "À confirmer", cargo: "—", bio: "Ce poste sera bientôt pourvu. Si vous souhaitez rejoindre UpSF, utilisez le formulaire de contact.", pendiente: true }, { nombre: "À confirmer", cargo: "—", bio: "Ce poste sera bientôt pourvu. Si vous souhaitez rejoindre UpSF, utilisez le formulaire de contact.", pendiente: true }, { nombre: "À confirmer", cargo: "—", bio: "Ce poste sera bientôt pourvu. Si vous souhaitez rejoindre UpSF, utilisez le formulaire de contact.", pendiente: true }, { nombre: "À confirmer", cargo: "—", bio: "Ce poste sera bientôt pourvu. Si vous souhaitez rejoindre UpSF, utilisez le formulaire de contact.", pendiente: true } ], values: [ { icono: "☀️", t: "Transparence", d: "Des comptes clairs, des décisions expliquées et des portes ouvertes." }, { icono: "🤝", t: "Inclusion", d: "La commune appartient à tous, quelle que soit l’origine." }, { icono: "🌱", t: "Durabilité", d: "Protéger la plaine, les salines et le patrimoine naturel du Segura." }, { icono: "📣", t: "Participation", d: "Les idées des voisins sont le programme." } ] },
    statutes: { eyebrow: "Document fondateur", titleA: "Statuts", titleB: "du parti", intro: "Les statuts sont la loi interne du parti : ils définissent ce que nous sommes et comment nous décidons.", index: "Index", chapter: "Chapitre", legalNote: "Statuts du parti politique Unidos por San Fulgencio (UpSF), rédigés conformément à la loi organique espagnole 6/2002 sur les partis politiques. Enregistrement en attente.", facts: [ { k: "Chapitres", v: "VIII" }, { k: "Articles", v: "21" }, { k: "Validité", v: "2025" }, { k: "Enregistrement", v: "En attente · Ministère de l’Intérieur" } ], chapters: statutesFr },
    contact: { eyebrow: "Écrivez-nous", title: "Contact", intro: "Vos idées et suggestions font avancer ce projet. Dites-nous ce que vous amélioreriez dans la commune.", formEyebrow: "Formulaire de contact", formTitle: "Votre voix compte", formIntro: "Remplissez le formulaire avec votre question, votre proposition ou votre idée.", subjects: ["Proposition citoyenne", "Suggestion d’amélioration", "Question sur le programme", "Je veux adhérer", "Collaborer avec UpSF", "Problème dans la commune", "Autre"], sentTitle: "Message reçu !", sentBody: "Votre application de courrier a ouvert le message prêt à être envoyé.", sendAnother: "Envoyer un autre message", submit: "Envoyer le message →", helper: "Votre application de messagerie s’ouvrira avec le message préparé. Adresse :", minimum: "Minimum 20 caractères.", office: "Mairie", writeDirect: "Écrire directement", writeDirectBody: "Si vous préférez écrire sans le formulaire :", join: "Voulez-vous rejoindre UpSF ?", joinBody: "Si vous souhaitez rejoindre l’équipe ou adhérer, écrivez-nous en choisissant l’objet correspondant.", schedule: "Horaires", weekdays: "Lundi – Vendredi", afternoons: "Après-midi", saturdays: "Samedis", labels: { nombre: "Votre nom", email: "Votre adresse e-mail", telefono: "Téléphone (optionnel)", asunto: "Objet", mensaje: "Votre message ou proposition", required: "champ obligatoire", choose: "— Choisissez une option —" }, placeholders: { nombre: "Amparo Martin", email: "amparo@exemple.com", telefono: "+34 966 79 42 00", mensaje: "Décrivez votre idée, votre proposition ou le problème rencontré." }, errors: { nombre: "Indiquez votre nom pour que nous sachions à qui répondre.", email: "Nous avons besoin d’une adresse e-mail valide.", asunto: "Choisissez l’objet qui correspond le mieux à votre message.", mensaje: "Dites-nous-en un peu plus : au moins une phrase complète." } },
  },
  nl: {
    locale: "nl-NL",
    nativeName: "Nederlands",
    htmlLang: "nl",
    pageTitles: { inicio: "Verenigd voor San Fulgencio | Uw gemeente, uw stem", "quienes-somos": "Wie wij zijn · UpSF", estatutos: "Statuten · UpSF", contacto: "Contact · UpSF" },
    nav: { home: "Home", sections: "Secties", party: "Partij", openMenu: "Menu openen", closeMenu: "Menu sluiten", ctaContact: "Contact", ctaJoin: "Join UpSF", homeSections: [ { id: "cifras", t: "Cijfers" }, { id: "pueblo", t: "De gemeente" }, { id: "fiestas", t: "Feesten" }, { id: "tablon", t: "Prikbord" }, { id: "guia", t: "Gids" }, { id: "vecinos", t: "Stemmen" } ], pages: [ { pagina: "quienes-somos", t: "Wie wij zijn" }, { pagina: "estatutos", t: "Statuten" }, { pagina: "contacto", t: "Contact" } ] },
    languages: { label: "Talen", short: "NL" },
    rail: "38,11° N · 0,85° W — Vega Baja del Segura",
    ticker: ["Bevolking 2025 · 9.769 inwoners", "66,8% buiten Spanje geboren", "Weekmarkt: elke dinsdag", "Patroonsfeest: 16–17 januari", "San Isidro-bedevaart: mei", "Virgen del Remedio: oktober", "Gemeentehuis · +34 966 79 42 01", "Vega Baja del Segura · Alicante"],
    hero: { topLeft: "Buurtportaal · Vega Baja del Segura", topRight: "Alicante · Valenciaanse Gemeenschap", kicker: "Verenigd voor", titleA: "San", titleB: "Fulgencio", tagline: "Uw gemeente, uw stem", body: "Een landbouwgemeente, een internationale gemeente, een dinsdagmarkt en januarifeesten. Beide oevers horen hier thuis: wie hier is geboren en wie twintig zomers geleden kwam.", imageAlt: "Sinaasappelboomgaarden en irrigatiekanaal in de Segura-vlakte", stats: [ { v: "9.769", k: "inwoners · INE 2025" }, { v: "66,8%", k: "buiten Spanje geboren" }, { v: "Dinsdag", k: "marktdag" }, { v: "19,75 km²", k: "boomgaarden, zoutvlaktes en velden" } ] },
    figures: { eyebrow: "Gemeenteprofiel", title: "De gemeente in cijfers", intro: "Officiële gegevens, helder weergegeven. San Fulgencio is een van de Spaanse gemeenten met het hoogste aandeel buitenlandse inwoners en blijft tegelijk een landbouwgemeente met irrigatie.", evolution: "Bevolking · evolutie", habitantes: "inwoners", cifras: [ { k: "Gemeenteregister · INE 2025", v: "9.769", n: "inwoners" }, { k: "Oppervlakte", v: "19,75", n: "km²" }, { k: "Dichtheid", v: "494,6", n: "inw./km²" }, { k: "Hoogte", v: "4", n: "m" }, { k: "Buiten Spanje geboren inwoners", v: "66,8", n: "%" }, { k: "Benaming inwoner", v: "sanfulgentino, -a" }, { k: "Postcode", v: "03177" }, { k: "Regio", v: "Vega Baja del Segura" }, { k: "Provincie", v: "Alicante · Valencia" }, { k: "Afstand tot Elche", v: "16", n: "km" }, { k: "Afstand tot Orihuela", v: "22", n: "km" }, { k: "Luchthaven El Altet", v: "26", n: "km" } ], padron: [ { año: "2009", hab: 12030, nota: "piek van de woonboom" }, { año: "2011", hab: 12354, nota: "77,6% buitenlandse inwoners" }, { año: "2018", hab: 7943, nota: "correctie na de crisis" }, { año: "2025", hab: 9769, nota: "66,8% buitenlandse inwoners" } ] },
    manifesto: { eyebrow: "Wie wij zijn", lead: ["San Fulgencio telt 9.769 inwoners en meer dan twintig accenten. Het is een van de weinige gemeenten in Spanje waar Engels soms eerder klinkt dan Valenciaans.", "Dit portaal komt voort uit die dubbele werkelijkheid. Het is geen toeristische website en ook niet de website van het gemeentehuis.", "Hier vindt u echte feestdata, rauwe cijfers en een praktische gids voor het dagelijks leven."], figcaption: "Citrusoogst in de geïrrigeerde percelen. Landbouw blijft het oudste beroep van de gemeente.", imageAlt: "Vers geplukte sinaasappels in een houten krat" },
    alley: { eyebrow: "Het steegje", lead: "Om negen uur ’s avonds klinkt in de hoofdstraat nog steeds gesprek: stoelen buiten en gesprekken die in het Spaans beginnen en in het Engels eindigen.", body: "San Fulgencio beslaat 19,75 km², met een compacte oude kern en verschillende woonwijken die groeiden door Europees residentieel toerisme.", imageAlt: "Straat in de oude kern met witgekalkte muren" },
    festivals: { eyebrow: "Feestkalender", title: "Het jaar, maand voor maand", intro: "Het feestjaar loopt via januari, mei, augustus en oktober: religieuze traditie, dorpsleven en een internationale zomer.", imageAlt: "Straat met lichtslingers tijdens het dorpsfeest", figcaption: "Versierde straat tijdens de feestnacht. De bewoners verzorgen zelf de versiering.", marketEyebrow: "Elke dinsdag", marketTitle: "Weekmarkt", marketBody: "Het grootste sociale ritueel van de gemeente: groente, fruit, huishoudartikelen, gereedschap en koffie die uren duurt.", agenda: [ { mes: "Jan", fecha: "16–17", titulo: "Patroonsfeest van San Fulgencio en San Antonio Abad", texto: "Processies en zegen van dieren en brood.", lugar: "Dorpskern" }, { mes: "Jan", fecha: "Zat. erna", titulo: "Broedermaaltijd", texto: "Het hele dorp zit samen aan tafel.", lugar: "Dorpskern" }, { mes: "Mrt–Apr", fecha: "Heilige Week", titulo: "Processies", texto: "Religieuze kalender door de straten van het centrum.", lugar: "Dorpskern" }, { mes: "Mei", fecha: "15 + zo.", titulo: "San Isidro-pelgrimage", texto: "San Isidro is de heilige van de landbouwers en deze gemeente blijft landbouwgericht.", lugar: "Buitengebied en centrum" }, { mes: "Aug", fecha: "1e weekend", titulo: "Zomerfeest · Virgen de la Paz", texto: "Kleurrijke zomerse ontmoeting van buren van vele nationaliteiten.", lugar: "La Marina" }, { mes: "Okt", fecha: "Derde weekend", titulo: "Feest van Virgen del Remedio", texto: "Versierde straten, praalwagens en dorpsfeest.", lugar: "Dorpskern" } ] },
    guide: { eyebrow: "Bewonersgids", title: "Wie bel je en waar ga je heen", intro: "Het praktische deel op één scherm: contactgegevens, diensten en nuttige dingen om hier te wonen.", items: [ { t: "Gemeentehuis van San Fulgencio", d: "Plaza Constitución, 26 · 03177 San Fulgencio", m: "+34 966 79 42 01 · sanfulgencio.es" }, { t: "Weekmarkt", d: "Elke dinsdag in het oude centrum", m: "Groente, fruit, textiel en gereedschap" }, { t: "Apotheken", d: "Vier apotheken in de gemeente", m: "Wisselende wachtdienst" }, { t: "Dorpssport", d: "Valenciaanse pelota en fietsen over de vlakte", m: "Duivensport als lokale traditie" }, { t: "Talen van de straat", d: "Spaans met Engels als veelgebruikte tweede taal", m: "Duits, Noors en de rest van Europa" }, { t: "Economie", d: "Geïrrigeerde landbouw: citrus en groenten", m: "Europees residentieel toerisme sinds de jaren tachtig" } ] },
    neighbors: { eyebrow: "Stemmen van bewoners", title: "Twee oevers, één steeg", items: [ { cita: "Mijn hele leven woon ik in dezelfde straat. We zetten nog steeds stoelen buiten in de schaduw, al zijn er nu meer auto’s en meer accenten.", nombre: "Amparo Beltrán", lugar: "Oude kern · hier geboren" }, { cita: "Twenty-two years here and I still say good morning to everyone on the road.", nombre: "Derek Whitfield", lugar: "La Marina", lang: "EN" }, { cita: "We stayed for the summer and for the people. Tuesday market day is our weekend.", nombre: "Hans-Jürgen Kessler", lugar: "Buitengebied · 18 jaar hier", lang: "DE" } ] },
    footer: { tagline: "Uw gemeente, uw stem", party: "UpSF-partij", townHall: "Gemeentehuis", copyright: "Verenigd voor San Fulgencio · UpSF" },
    board: { eyebrow: "Dit onderdeel is van u", title: "Prikbord", intro: "Geen account, geen algoritme en geen toestemming nodig. Schrijf uw bericht en het verschijnt meteen bovenaan.", countLabel: "geplaatste berichten", formTitle: "Plaats uw bericht", category: "Categorie", categories: { water: "Water", health: "Gezondheid", works: "Werken", associations: "Verenigingen", culture: "Cultuur", other: "Overig" }, titleLabel: "Titel", titlePlaceholder: "Wateronderbreking op donderdag", messageLabel: "Bericht", messagePlaceholder: "Vertel wat er gebeurt, waar en wanneer.", authorLabel: "Naam of wijk", authorPlaceholder: "Amparo, Calle Mayor", submit: "Plaatsen op het bord", emptyTitle: "Het prikbord is leeg.", emptyBody: "Wees de eerste die een bericht plaatst.", remove: "Verwijderen", fallback: "Het wordt direct in uw browser geplaatst. Niets verlaat dit apparaat.", errorShort: "Geef uw bericht een titel en minstens één volledige zin.", errorAuthor: "Vermeld wie het plaatst: een naam of wijk helpt.", imageAlt: "Weekmarkt in San Fulgencio op dinsdagochtend", initialNotices: [ { id: 101, cat: "water", titulo: "Onderbreking bij de kliniek", texto: "Onderhoudswerken donderdag van 9.00 tot 14.00 uur.", autor: "Watercommissie", fecha: "2 dagen geleden" }, { id: 102, cat: "associations", titulo: "Open vergadering van de buurtvereniging", texto: "Dinsdag om 19.30 uur in het buurthuis.", autor: "Buurtvereniging", fecha: "4 dagen geleden" }, { id: 103, cat: "culture", titulo: "Esparto-workshop en ambachtsmarkt", texto: "Zaterdag de hele dag naast het oude centrum.", autor: "Cultuurhuis", fecha: "6 dagen geleden" }, { id: 104, cat: "health", titulo: "Openingstijden kliniek", texto: "Vanaf maandag opnieuw volledige ochtenduren.", autor: "Buurvrouw uit Calle Mayor", fecha: "1 week geleden" }, { id: 105, cat: "other", titulo: "Kat met laarzen vermist (letterlijk)", texto: "Zondag verdwenen vanaf het plein, luistert naar Sento.", autor: "Familie Ortiz", fecha: "1 week geleden" } ] },
    who: { eyebrow: "Het team", titleA: "Wie", titleB: "wij zijn", intro: "Unidos por San Fulgencio is een bewonersproject dat is ontstaan uit de overtuiging dat de gemeente eerlijke, nabije en open vertegenwoordiging verdient.", teamEyebrow: "Ons team · 2025", teamTitle: "De mensen achter het project", teamIntro: "Zes bewoners geven dit project een gezicht. Transparantie vanaf dag één.", pendingName: "Nog te bevestigen", contactCta: "Contact →", valuesEyebrow: "Wat ons verbindt", members: [ { nombre: "Alain Franz Vandenbergen", cargo: "Oprichter en burgemeesterskandidaat", bio: "Bewoner van San Fulgencio, toegewijd aan vooruitgang en burgerparticipatie." }, { nombre: "Conchi García Baeza", cargo: "Verantwoordelijke communicatie", bio: "Een sleutelfiguur in de opbouw van UpSF en in duidelijke, transparante communicatie." }, { nombre: "Nog te bevestigen", cargo: "—", bio: "Deze plek wordt binnenkort ingevuld. Wilt u zich aansluiten bij UpSF, schrijf ons dan via het contactformulier.", pendiente: true }, { nombre: "Nog te bevestigen", cargo: "—", bio: "Deze plek wordt binnenkort ingevuld. Wilt u zich aansluiten bij UpSF, schrijf ons dan via het contactformulier.", pendiente: true }, { nombre: "Nog te bevestigen", cargo: "—", bio: "Deze plek wordt binnenkort ingevuld. Wilt u zich aansluiten bij UpSF, schrijf ons dan via het contactformulier.", pendiente: true }, { nombre: "Nog te bevestigen", cargo: "—", bio: "Deze plek wordt binnenkort ingevuld. Wilt u zich aansluiten bij UpSF, schrijf ons dan via het contactformulier.", pendiente: true } ], values: [ { icono: "☀️", t: "Transparantie", d: "Heldere rekeningen, uitgelegde beslissingen en open deuren." }, { icono: "🤝", t: "Inclusie", d: "De gemeente is van iedereen, ongeacht afkomst." }, { icono: "🌱", t: "Duurzaamheid", d: "Bescherming van vlakte, zoutvlaktes en natuurlijk erfgoed." }, { icono: "📣", t: "Participatie", d: "Ideeën van bewoners vormen het programma." } ] },
    statutes: { eyebrow: "Oprichtingsdocument", titleA: "Statuten", titleB: "van de partij", intro: "De statuten zijn de interne wet van de partij: ze bepalen wie we zijn en hoe we beslissen.", index: "Inhoud", chapter: "Hoofdstuk", legalNote: "Statuten van de politieke partij Unidos por San Fulgencio (UpSF), opgesteld overeenkomstig de Spaanse Organieke Wet 6/2002 inzake politieke partijen. Registratie is nog hangende.", facts: [ { k: "Hoofdstukken", v: "VIII" }, { k: "Artikelen", v: "21" }, { k: "Geldigheid", v: "2025" }, { k: "Registratie", v: "Hangende · Ministerie van Binnenlandse Zaken" } ], chapters: statutesNl },
    contact: { eyebrow: "Schrijf ons", title: "Contact", intro: "Uw ideeën en suggesties drijven dit project vooruit. Vertel ons wat u in de gemeente zou verbeteren.", formEyebrow: "Contactformulier", formTitle: "Uw stem telt", formIntro: "Vul het formulier in met uw vraag, voorstel of idee.", subjects: ["Burgervoorstel", "Verbetersuggestie", "Vraag over het programma", "Ik wil lid worden", "Samenwerken met UpSF", "Probleem in de gemeente", "Anders"], sentTitle: "Bericht ontvangen!", sentBody: "Uw e-mailprogramma is geopend met het bericht klaar om te verzenden.", sendAnother: "Nog een bericht sturen", submit: "Bericht verzenden →", helper: "Uw e-mailtoepassing opent met het voorbereide bericht. Adres:", minimum: "Minimaal 20 tekens.", office: "Gemeentehuis", writeDirect: "Schrijf direct", writeDirectBody: "Als u liever zonder formulier schrijft:", join: "Wilt u zich aansluiten bij UpSF?", joinBody: "Als u deel wilt uitmaken van het team of lid wilt worden, schrijf ons dan met het juiste onderwerp.", schedule: "Openingstijden", weekdays: "Maandag – Vrijdag", afternoons: "Namiddag", saturdays: "Zaterdag", labels: { nombre: "Uw naam", email: "Uw e-mailadres", telefono: "Telefoon (optioneel)", asunto: "Onderwerp", mensaje: "Uw bericht of voorstel", required: "verplicht veld", choose: "— Kies een optie —" }, placeholders: { nombre: "Amparo Janssen", email: "amparo@voorbeeld.com", telefono: "+34 966 79 42 00", mensaje: "Beschrijf uw idee, voorstel of probleem zo duidelijk mogelijk." }, errors: { nombre: "Vertel ons uw naam zodat we weten aan wie we antwoorden.", email: "We hebben een geldig e-mailadres nodig.", asunto: "Kies het onderwerp dat het best bij uw bericht past.", mensaje: "Vertel iets meer: minstens één volledige zin." } },
  },
  de: {
    locale: "de-DE",
    nativeName: "Deutsch",
    htmlLang: "de",
    pageTitles: { inicio: "Vereint für San Fulgencio | Ihr Ort, Ihre Stimme", "quienes-somos": "Wer wir sind · UpSF", estatutos: "Satzung · UpSF", contacto: "Kontakt · UpSF" },
    nav: { home: "Start", sections: "Bereiche", party: "Partei", openMenu: "Menü öffnen", closeMenu: "Menü schließen", ctaContact: "Kontakt", ctaJoin: "Beitreten", homeSections: [ { id: "cifras", t: "Zahlen" }, { id: "pueblo", t: "Der Ort" }, { id: "fiestas", t: "Feste" }, { id: "tablon", t: "Pinnwand" }, { id: "guia", t: "Leitfaden" }, { id: "vecinos", t: "Stimmen" } ], pages: [ { pagina: "quienes-somos", t: "Wer wir sind" }, { pagina: "estatutos", t: "Satzung" }, { pagina: "contacto", t: "Kontakt" } ] },
    languages: { label: "Sprachen", short: "DE" },
    rail: "38,11° N · 0,85° W — Vega Baja del Segura",
    ticker: ["Bevölkerung 2025 · 9.769 Einwohner", "66,8 % außerhalb Spaniens geboren", "Wochenmarkt: jeden Dienstag", "Patronatsfest: 16.–17. Januar", "San-Isidro-Wallfahrt: Mai", "Virgen del Remedio: Oktober", "Rathaus · +34 966 79 42 01", "Vega Baja del Segura · Alicante"],
    hero: { topLeft: "Nachbarschaftsportal · Vega Baja del Segura", topRight: "Alicante · Valencianische Gemeinschaft", kicker: "Vereint für", titleA: "San", titleB: "Fulgencio", tagline: "Ihr Ort, Ihre Stimme", body: "Eine landwirtschaftlich geprägte, internationale Gemeinde mit Dienstagmarkt und Januarfesten. Beide Ufer haben hier Platz: die, die hier geboren wurden, und die, die vor zwanzig Sommern ankamen.", imageAlt: "Orangenhaine und Bewässerungskanal in der Segura-Ebene", stats: [ { v: "9.769", k: "Einwohner · INE 2025" }, { v: "66,8 %", k: "außerhalb Spaniens geboren" }, { v: "Dienstag", k: "Markttag" }, { v: "19,75 km²", k: "Obstgärten, Salinen und Felder" } ] },
    figures: { eyebrow: "Gemeindeprofil", title: "Der Ort in Zahlen", intro: "Offizielle Daten, klar erzählt. San Fulgencio gehört zu den Gemeinden Spaniens mit dem höchsten Anteil ausländischer Einwohner und bleibt zugleich ein Bewässerungs- und Landwirtschaftsort.", evolution: "Bevölkerungsregister · Entwicklung", habitantes: "Einwohner", cifras: [ { k: "Melderegister · INE 2025", v: "9.769", n: "Einwohner" }, { k: "Fläche", v: "19,75", n: "km²" }, { k: "Dichte", v: "494,6", n: "Einw./km²" }, { k: "Höhe", v: "4", n: "m" }, { k: "Außerhalb Spaniens geborene Einwohner", v: "66,8", n: "%" }, { k: "Bezeichnung", v: "sanfulgentino, -a" }, { k: "Postleitzahl", v: "03177" }, { k: "Region", v: "Vega Baja del Segura" }, { k: "Provinz", v: "Alicante · Valencia" }, { k: "Entfernung nach Elche", v: "16", n: "km" }, { k: "Entfernung nach Orihuela", v: "22", n: "km" }, { k: "Flughafen El Altet", v: "26", n: "km" } ], padron: [ { año: "2009", hab: 12030, nota: "Höchststand des Wohnbooms" }, { año: "2011", hab: 12354, nota: "77,6 % ausländische Einwohner" }, { año: "2018", hab: 7943, nota: "Korrektur nach der Krise" }, { año: "2025", hab: 9769, nota: "66,8 % ausländische Einwohner" } ] },
    manifesto: { eyebrow: "Wer wir sind", lead: ["San Fulgencio vereint 9.769 Menschen und mehr als zwanzig Akzente. Es ist eine der wenigen Gemeinden Spaniens, in denen Englisch früher zu hören ist als Valencianisch.", "Dieses Portal entsteht aus dieser doppelten Wirklichkeit. Es ist weder eine Tourismusseite noch die Website des Rathauses.", "Hier finden Sie echte Festdaten, ungeschönte Zahlen und einen praktischen Leitfaden für den Alltag."], figcaption: "Zitrusernte in den bewässerten Parzellen. Landwirtschaft bleibt das älteste Gewerbe der Gemeinde.", imageAlt: "Frisch gepflückte Orangen in einer Holzkiste" },
    alley: { eyebrow: "Die Gasse", lead: "Um neun Uhr abends ist die Hauptstraße noch voller Stimmen: Stühle draußen und Gespräche, die auf Spanisch beginnen und auf Englisch enden.", body: "San Fulgencio umfasst 19,75 km² mit einem kompakten Ortskern und mehreren Wohnsiedlungen, die durch europäische Zuwanderung im Ruhestand wuchsen.", imageAlt: "Gepflasterte Straße im Ortskern mit weiß gekalkten Wänden" },
    festivals: { eyebrow: "Festkalender", title: "Das Jahr, Monat für Monat", intro: "Der Festzyklus führt durch Januar, Mai, August und Oktober: religiöse Tradition, Nachbarschaftsleben und ein internationaler Sommer.", imageAlt: "Mit Lichtern geschmückte Straße während des Hauptfestes", figcaption: "Geschmückte Straße in der Festnacht. Die Nachbarn dekorieren selbst.", marketEyebrow: "Jeden Dienstag", marketTitle: "Wochenmarkt", marketBody: "Das größte soziale Ritual der Gemeinde: Obst und Gemüse, Haushaltswaren, Werkzeuge und lange Kaffees.", agenda: [ { mes: "Jan", fecha: "16.–17.", titulo: "Patronatsfest von San Fulgencio und San Antonio Abad", texto: "Prozessionen und Segnung von Tieren und Brot.", lugar: "Ortskern" }, { mes: "Jan", fecha: "Folgender Sa.", titulo: "Gemeinschaftsessen", texto: "Das ganze Dorf sitzt an einem Tisch.", lugar: "Ortskern" }, { mes: "Mär–Apr", fecha: "Karwoche", titulo: "Prozessionen", texto: "Religiöser Kalender durch die Straßen des Zentrums.", lugar: "Ortskern" }, { mes: "Mai", fecha: "15 + So.", titulo: "San-Isidro-Wallfahrt", texto: "San Isidro ist der Heilige der Landwirte, und der Ort ist noch immer landwirtschaftlich geprägt.", lugar: "Land und Zentrum" }, { mes: "Aug", fecha: "1. Wochenende", titulo: "Sommerfest · Virgen de la Paz", texto: "Bunte sommerliche Begegnung vieler Nationalitäten.", lugar: "La Marina" }, { mes: "Okt", fecha: "Drittes Wochenende", titulo: "Fest der Virgen del Remedio", texto: "Geschmückte Straßen, Wagenumzug und Dorffest.", lugar: "Ortskern" } ] },
    guide: { eyebrow: "Leitfaden für Einwohner", title: "Wen anrufen und wohin gehen", intro: "Das Praktische auf einem Bildschirm: Kontakte, Dienstleistungen und Dinge, die man zum Leben hier wissen sollte.", items: [ { t: "Rathaus San Fulgencio", d: "Plaza Constitución, 26 · 03177 San Fulgencio", m: "+34 966 79 42 01 · sanfulgencio.es" }, { t: "Wochenmarkt", d: "Jeden Dienstag im alten Zentrum", m: "Obst, Gemüse, Textilien und Werkzeuge" }, { t: "Apotheken", d: "Vier Apotheken in der Gemeinde", m: "Rotierender Notdienst" }, { t: "Dorfsport", d: "Valencianische Pelota und Radtouren", m: "Taubensport als lokale Tradition" }, { t: "Sprachen der Straße", d: "Spanisch, mit Englisch als verbreiteter Zweitsprache", m: "Deutsch, Norwegisch und das übrige Europa" }, { t: "Wirtschaft", d: "Bewässerungslandwirtschaft: Zitrusfrüchte und Gemüse", m: "Europäischer Wohntourismus seit den 1980er-Jahren" } ] },
    neighbors: { eyebrow: "Stimmen der Nachbarn", title: "Zwei Ufer, eine Gasse", items: [ { cita: "Ich lebe mein ganzes Leben in derselben Straße. Wir stellen noch immer Stühle in den Schatten, auch wenn es heute mehr Autos und mehr Akzente gibt.", nombre: "Amparo Beltrán", lugar: "Ortskern · hier geboren" }, { cita: "Twenty-two years here and I still say good morning to everyone on the road.", nombre: "Derek Whitfield", lugar: "La Marina", lang: "EN" }, { cita: "We stayed for the summer and for the people. Tuesday market day is our weekend.", nombre: "Hans-Jürgen Kessler", lugar: "Landparzelle · 18 Jahre hier", lang: "DE" } ] },
    footer: { tagline: "Ihr Ort, Ihre Stimme", party: "Partei UpSF", townHall: "Rathaus", copyright: "Vereint für San Fulgencio · UpSF" },
    board: { eyebrow: "Dieser Bereich gehört Ihnen", title: "Pinnwand", intro: "Kein Konto, kein Algorithmus und keine Erlaubnis nötig. Schreiben Sie Ihren Hinweis und er erscheint sofort ganz oben.", countLabel: "angeheftete Hinweise", formTitle: "Hinweis anheften", category: "Kategorie", categories: { water: "Wasser", health: "Gesundheit", works: "Arbeiten", associations: "Vereine", culture: "Kultur", other: "Sonstiges" }, titleLabel: "Titel", titlePlaceholder: "Wasserabschaltung am Donnerstag", messageLabel: "Nachricht", messagePlaceholder: "Sagen Sie dem Ort, was passiert, wo und wann.", authorLabel: "Name oder Viertel", authorPlaceholder: "Amparo, Calle Mayor", submit: "An die Pinnwand hängen", emptyTitle: "Die Pinnwand ist leer.", emptyBody: "Seien Sie die erste Person mit einem Hinweis.", remove: "Entfernen", fallback: "Die Veröffentlichung erfolgt sofort in Ihrem Browser. Nichts verlässt dieses Gerät.", errorShort: "Geben Sie einen Titel und mindestens einen vollständigen Satz ein.", errorAuthor: "Nennen Sie, wer es veröffentlicht: Name oder Viertel helfen.", imageAlt: "Wochenmarkt in San Fulgencio an einem Dienstagmorgen", initialNotices: [ { id: 101, cat: "water", titulo: "Unterbrechung nahe der Klinik", texto: "Wartungsarbeiten am Donnerstag von 9 bis 14 Uhr.", autor: "Wasserkommission", fecha: "vor 2 Tagen" }, { id: 102, cat: "associations", titulo: "Offenes Treffen des Nachbarschaftsvereins", texto: "Dienstag um 19:30 Uhr im Sozialzentrum.", autor: "Nachbarschaftsverein", fecha: "vor 4 Tagen" }, { id: 103, cat: "culture", titulo: "Esparto-Workshop und Handwerksmarkt", texto: "Samstag ganztägig neben dem alten Zentrum.", autor: "Kulturhaus", fecha: "vor 6 Tagen" }, { id: 104, cat: "health", titulo: "Sprechzeiten der Klinik", texto: "Ab Montag wieder vollständige Vormittagszeiten.", autor: "Nachbarin aus der Calle Mayor", fecha: "vor 1 Woche" }, { id: 105, cat: "other", titulo: "Katze mit Stiefeln gesucht (wirklich)", texto: "Seit Sonntag vom Platz verschwunden, hört auf den Namen Sento.", autor: "Familie Ortiz", fecha: "vor 1 Woche" } ] },
    who: { eyebrow: "Das Team", titleA: "Wer", titleB: "wir sind", intro: "Unidos por San Fulgencio ist ein Nachbarschaftsprojekt aus der Überzeugung heraus, dass die Gemeinde eine ehrliche, nahe und offene Vertretung verdient.", teamEyebrow: "Unser Team · 2025", teamTitle: "Die Menschen hinter dem Projekt", teamIntro: "Sechs Nachbarn geben dem Projekt Gesicht und Namen. Transparenz vom ersten Tag an.", pendingName: "Noch offen", contactCta: "Kontakt →", valuesEyebrow: "Was uns verbindet", members: [ { nombre: "Alain Franz Vandenbergen", cargo: "Gründer und Bürgermeisterkandidat", bio: "Einwohner von San Fulgencio, engagiert für Fortschritt und Bürgerbeteiligung." }, { nombre: "Conchi García Baeza", cargo: "Kommunikation", bio: "Zentrale Figur beim Aufbau von UpSF und klarer, transparenter Information." }, { nombre: "Noch offen", cargo: "—", bio: "Dieser Platz wird bald besetzt. Wenn Sie sich UpSF anschließen möchten, nutzen Sie bitte das Kontaktformular.", pendiente: true }, { nombre: "Noch offen", cargo: "—", bio: "Dieser Platz wird bald besetzt. Wenn Sie sich UpSF anschließen möchten, nutzen Sie bitte das Kontaktformular.", pendiente: true }, { nombre: "Noch offen", cargo: "—", bio: "Dieser Platz wird bald besetzt. Wenn Sie sich UpSF anschließen möchten, nutzen Sie bitte das Kontaktformular.", pendiente: true }, { nombre: "Noch offen", cargo: "—", bio: "Dieser Platz wird bald besetzt. Wenn Sie sich UpSF anschließen möchten, nutzen Sie bitte das Kontaktformular.", pendiente: true } ], values: [ { icono: "☀️", t: "Transparenz", d: "Klare Konten, erklärte Entscheidungen und offene Türen." }, { icono: "🤝", t: "Inklusion", d: "Die Gemeinde gehört allen, unabhängig von Herkunft." }, { icono: "🌱", t: "Nachhaltigkeit", d: "Schutz von Ebene, Salinen und Naturerbe des Segura." }, { icono: "📣", t: "Beteiligung", d: "Die Ideen der Nachbarn sind das Programm." } ] },
    statutes: { eyebrow: "Gründungsdokument", titleA: "Satzung", titleB: "der Partei", intro: "Die Satzung ist das interne Gesetz der Partei: Sie legt fest, wer wir sind und wie wir entscheiden.", index: "Inhalt", chapter: "Kapitel", legalNote: "Satzung der politischen Partei Unidos por San Fulgencio (UpSF), verfasst gemäß dem spanischen Parteiengesetz 6/2002. Eintragung noch ausstehend.", facts: [ { k: "Kapitel", v: "VIII" }, { k: "Artikel", v: "21" }, { k: "Gültigkeit", v: "2025" }, { k: "Eintragung", v: "Ausstehend · Innenministerium" } ], chapters: statutesDe },
    contact: { eyebrow: "Schreiben Sie uns", title: "Kontakt", intro: "Ihre Ideen und Vorschläge treiben dieses Projekt an. Sagen Sie uns, was Sie in der Gemeinde verbessern würden.", formEyebrow: "Kontaktformular", formTitle: "Ihre Stimme zählt", formIntro: "Füllen Sie das Formular mit Ihrer Frage, Ihrem Vorschlag oder Ihrer Idee aus.", subjects: ["Bürgervorschlag", "Verbesserungsvorschlag", "Frage zum Programm", "Ich möchte beitreten", "Mit UpSF zusammenarbeiten", "Problem in der Gemeinde", "Sonstiges"], sentTitle: "Nachricht erhalten!", sentBody: "Ihr E-Mail-Programm hat die Nachricht versandbereit geöffnet.", sendAnother: "Weitere Nachricht senden", submit: "Nachricht senden →", helper: "Ihre E-Mail-Anwendung öffnet sich mit der vorbereiteten Nachricht. Adresse:", minimum: "Mindestens 20 Zeichen.", office: "Rathaus", writeDirect: "Direkt schreiben", writeDirectBody: "Wenn Sie lieber ohne Formular schreiben möchten:", join: "Möchten Sie sich UpSF anschließen?", joinBody: "Wenn Sie zum Team gehören oder Mitglied werden möchten, schreiben Sie uns mit dem entsprechenden Betreff.", schedule: "Sprechzeiten", weekdays: "Montag – Freitag", afternoons: "Nachmittage", saturdays: "Samstage", labels: { nombre: "Ihr Name", email: "Ihre E-Mail-Adresse", telefono: "Telefon (optional)", asunto: "Betreff", mensaje: "Ihre Nachricht oder Ihr Vorschlag", required: "Pflichtfeld", choose: "— Bitte wählen —" }, placeholders: { nombre: "Amparo Müller", email: "amparo@beispiel.de", telefono: "+34 966 79 42 00", mensaje: "Beschreiben Sie Ihre Idee, Ihren Vorschlag oder das lokale Problem möglichst genau." }, errors: { nombre: "Bitte nennen Sie Ihren Namen, damit wir wissen, wem wir antworten.", email: "Wir brauchen eine gültige E-Mail-Adresse.", asunto: "Bitte wählen Sie den Betreff, der am besten zu Ihrer Nachricht passt.", mensaje: "Bitte erzählen Sie etwas mehr: mindestens ein vollständiger Satz." } },
  },
  sv: {
    locale: "sv-SE",
    nativeName: "Svenska",
    htmlLang: "sv",
    pageTitles: { inicio: "Förenade för San Fulgencio | Din kommun, din röst", "quienes-somos": "Vilka vi är · UpSF", estatutos: "Stadgar · UpSF", contacto: "Kontakt · UpSF" },
    nav: { home: "Hem", sections: "Sektioner", party: "Parti", openMenu: "Öppna meny", closeMenu: "Stäng meny", ctaContact: "Kontakt", ctaJoin: "Gå med", homeSections: [ { id: "cifras", t: "Siffror" }, { id: "pueblo", t: "Kommunen" }, { id: "fiestas", t: "Fester" }, { id: "tablon", t: "Anslagstavla" }, { id: "guia", t: "Guide" }, { id: "vecinos", t: "Röster" } ], pages: [ { pagina: "quienes-somos", t: "Vilka vi är" }, { pagina: "estatutos", t: "Stadgar" }, { pagina: "contacto", t: "Kontakt" } ] },
    languages: { label: "Språk", short: "SV" },
    rail: "38,11° N · 0,85° V — Vega Baja del Segura",
    ticker: ["Befolkning 2025 · 9 769 invånare", "66,8 % födda utanför Spanien", "Veckomarknad: varje tisdag", "Skyddshelgonets fest: 16–17 januari", "San Isidro-pilgrimsfärd: maj", "Virgen del Remedio: oktober", "Rådhus · +34 966 79 42 01", "Vega Baja del Segura · Alicante"],
    hero: { topLeft: "Grannportal · Vega Baja del Segura", topRight: "Alicante · Valenciaregionen", kicker: "Förenade för", titleA: "San", titleB: "Fulgencio", tagline: "Din kommun, din röst", body: "En jordbrukskommun, en internationell kommun, en tisdagmarknad och januarifester. Båda stränderna får plats här: de som föddes här och de som kom för tjugo somrar sedan.", imageAlt: "Apelsinlundar och bevattningskanal i Seguraslätten", stats: [ { v: "9 769", k: "invånare · INE 2025" }, { v: "66,8 %", k: "födda utanför Spanien" }, { v: "Tisdag", k: "marknadsdag" }, { v: "19,75 km²", k: "lundar, saltmarker och fält" } ] },
    figures: { eyebrow: "Kommunprofil", title: "Kommunen i siffror", intro: "Officiella siffror, tydligt berättade. San Fulgencio hör till de spanska kommuner som har högst andel utrikes födda invånare, samtidigt som den fortfarande är en bevattnad jordbrukskommun.", evolution: "Befolkningsregister · utveckling", habitantes: "invånare", cifras: [ { k: "Kommunregister · INE 2025", v: "9 769", n: "invånare" }, { k: "Yta", v: "19,75", n: "km²" }, { k: "Täthet", v: "494,6", n: "inv./km²" }, { k: "Höjd", v: "4", n: "m" }, { k: "Invånare födda utanför Spanien", v: "66,8", n: "%" }, { k: "Demonym", v: "sanfulgentino, -a" }, { k: "Postnummer", v: "03177" }, { k: "Comarca", v: "Vega Baja del Segura" }, { k: "Provins", v: "Alicante · Valencia" }, { k: "Avstånd till Elche", v: "16", n: "km" }, { k: "Avstånd till Orihuela", v: "22", n: "km" }, { k: "Flygplats El Altet", v: "26", n: "km" } ], padron: [ { año: "2009", hab: 12030, nota: "toppen av bostadsboomen" }, { año: "2011", hab: 12354, nota: "77,6 % utrikes födda invånare" }, { año: "2018", hab: 7943, nota: "korrigering efter krisen" }, { año: "2025", hab: 9769, nota: "66,8 % utrikes födda invånare" } ] },
    manifesto: { eyebrow: "Vilka vi är", lead: ["San Fulgencio rymmer 9 769 människor och mer än tjugo olika accenter. Det är en av få kommuner i Spanien där engelska ofta hörs före valencianska.", "Denna portal föds ur den dubbla verkligheten. Det är varken en turistwebbplats eller kommunens officiella sida.", "Här hittar du riktiga festdatum, raka siffror och en praktisk guide till vardagslivet."], figcaption: "Citrusskörd på bevattnade jordlotter. Jordbruket är fortfarande kommunens äldsta näring.", imageAlt: "Nyplockade apelsiner i en trälåda" },
    alley: { eyebrow: "Gränden", lead: "Klockan nio på kvällen hörs fortfarande röster på huvudgatan: stolar utanför och samtal som börjar på spanska och slutar på engelska.", body: "San Fulgencio omfattar 19,75 km² med en kompakt äldre kärna och flera bostadsområden som växte genom europeisk inflyttning efter pensionering.", imageAlt: "Stenlagd gata i gamla centrum med vitkalkade väggar" },
    festivals: { eyebrow: "Festkalender", title: "Året, månad för månad", intro: "Feståret sträcker sig över januari, maj, augusti och oktober: religiös tradition, grannskap och en internationell sommar.", imageAlt: "Gata med ljusslingor under huvudfesten", figcaption: "Dekorerad gata på festnatten. Grannarna själva står för utsmyckningen.", marketEyebrow: "Varje tisdag", marketTitle: "Veckomarknad", marketBody: "Kommunens största sociala ritual: frukt och grönt, hushållsvaror, verktyg och kaffe som blir kvar länge.", agenda: [ { mes: "Jan", fecha: "16–17", titulo: "Skyddshelgonets fest för San Fulgencio och San Antonio Abad", texto: "Processioner och välsignelse av djur och bröd.", lugar: "Centrum" }, { mes: "Jan", fecha: "Följande lördag", titulo: "Gemenskapsmåltid", texto: "Hela orten samlas runt samma bord.", lugar: "Centrum" }, { mes: "Mar–Apr", fecha: "Stilla veckan", titulo: "Processioner", texto: "Religiös kalender i de centrala gatorna.", lugar: "Centrum" }, { mes: "Maj", fecha: "15 + sön.", titulo: "San Isidro-pilgrimsfärd", texto: "San Isidro är jordbrukarnas helgon, och kommunen är fortfarande djupt förankrad i jordbruket.", lugar: "Landsbygd och centrum" }, { mes: "Aug", fecha: "1:a helgen", titulo: "Sommarfest · Virgen de la Paz", texto: "Färgstark sommarträff mellan grannar från många nationaliteter.", lugar: "La Marina" }, { mes: "Okt", fecha: "Tredje helgen", titulo: "Virgen del Remedio-festen", texto: "Dekorerade gator, vagnparad och folkfest.", lugar: "Centrum" } ] },
    guide: { eyebrow: "Grannguide", title: "Vem man ringer och vart man går", intro: "Det praktiska på en skärm: kontakter, service och sådant som är bra att känna till om man bor här.", items: [ { t: "San Fulgencios kommunhus", d: "Plaza Constitución, 26 · 03177 San Fulgencio", m: "+34 966 79 42 01 · sanfulgencio.es" }, { t: "Veckomarknad", d: "Varje tisdag i gamla centrum", m: "Frukt, grönsaker, textil och verktyg" }, { t: "Apotek", d: "Fyra apotek i kommunen", m: "Roterande jourservice" }, { t: "Landsbygdssport", d: "Valenciansk pelota och cykling över slätten", m: "Duvidrott som lokal tradition" }, { t: "Språk i byn", d: "Spanska, med engelska som vanligt andraspråk", m: "Tyska, norska och resten av Europa" }, { t: "Ekonomi", d: "Bevattnat jordbruk: citrus och grönsaker", m: "Europeisk boendeturism sedan 1980-talet" } ] },
    neighbors: { eyebrow: "Grannarnas röster", title: "Två stränder, en gränd", items: [ { cita: "Jag har bott på samma gata hela livet. Vi ställer fortfarande ut stolar i skuggan, även om det nu finns fler bilar och fler accenter.", nombre: "Amparo Beltrán", lugar: "Gamla centrum · född här" }, { cita: "Twenty-two years here and I still say good morning to everyone on the road.", nombre: "Derek Whitfield", lugar: "La Marina", lang: "EN" }, { cita: "We stayed for the summer and for the people. Tuesday market day is our weekend.", nombre: "Hans-Jürgen Kessler", lugar: "Landsbygdstomt · 18 år här", lang: "DE" } ] },
    footer: { tagline: "Din kommun, din röst", party: "UpSF-partiet", townHall: "Kommunhus", copyright: "Förenade för San Fulgencio · UpSF" },
    board: { eyebrow: "Den här delen tillhör dig", title: "Anslagstavla", intro: "Inget konto, ingen algoritm och inget tillstånd behövs. Skriv ditt meddelande så visas det direkt högst upp.", countLabel: "uppsatta meddelanden", formTitle: "Sätt upp ditt meddelande", category: "Kategori", categories: { water: "Vatten", health: "Hälsa", works: "Arbeten", associations: "Föreningar", culture: "Kultur", other: "Annat" }, titleLabel: "Rubrik", titlePlaceholder: "Vattenavstängning på torsdag", messageLabel: "Meddelande", messagePlaceholder: "Berätta för orten vad som händer, var och när.", authorLabel: "Namn eller område", authorPlaceholder: "Amparo, Calle Mayor", submit: "Sätt upp på tavlan", emptyTitle: "Tavlan är tom.", emptyBody: "Var den första som sätter upp ett meddelande.", remove: "Ta bort", fallback: "Det publiceras direkt i din webbläsare. Ingenting lämnar enheten.", errorShort: "Ge meddelandet en rubrik och minst en fullständig mening.", errorAuthor: "Säg vem som sätter upp det: ett namn eller ett område hjälper.", imageAlt: "Veckomarknaden i San Fulgencio en tisdagsmorgon", initialNotices: [ { id: 101, cat: "water", titulo: "Avbrott nära vårdcentralen", texto: "Underhållsarbete på torsdag mellan 9.00 och 14.00.", autor: "Vattenkommittén", fecha: "för 2 dagar sedan" }, { id: 102, cat: "associations", titulo: "Öppet möte med grannföreningen", texto: "Tisdag kl. 19.30 i samlingslokalen.", autor: "Grannföreningen", fecha: "för 4 dagar sedan" }, { id: 103, cat: "culture", titulo: "Esparto-workshop och hantverksmarknad", texto: "Lördag hela dagen intill gamla centrum.", autor: "Kulturhuset", fecha: "för 6 dagar sedan" }, { id: 104, cat: "health", titulo: "Öppettider på vårdcentralen", texto: "Från måndag återgår man till fulla morgontider.", autor: "Grannde på Calle Mayor", fecha: "för 1 vecka sedan" }, { id: 105, cat: "other", titulo: "Katt med stövlar saknas (bokstavligen)", texto: "Försvann i söndags från torget, svarar på namnet Sento.", autor: "Familjen Ortiz", fecha: "för 1 vecka sedan" } ] },
    who: { eyebrow: "Teamet", titleA: "Vilka", titleB: "vi är", intro: "Unidos por San Fulgencio är ett grannskapsprojekt som bygger på övertygelsen att kommunen förtjänar ärlig, nära och öppen representation.", teamEyebrow: "Vårt team · 2025", teamTitle: "Personerna bakom projektet", teamIntro: "Sex invånare ger projektet namn och ansikte. Transparens från första dagen.", pendingName: "Bekräftas senare", contactCta: "Kontakt →", valuesEyebrow: "Det som förenar oss", members: [ { nombre: "Alain Franz Vandenbergen", cargo: "Grundare och borgmästarkandidat", bio: "Invånare i San Fulgencio med starkt engagemang för utveckling och medborgardeltagande." }, { nombre: "Conchi García Baeza", cargo: "Kommunikationsansvarig", bio: "Nyckelperson i byggandet av UpSF och i tydlig och öppen kommunikation." }, { nombre: "Bekräftas senare", cargo: "—", bio: "Denna plats kommer snart att fyllas. Om du vill ansluta dig till UpSF, skriv till oss via kontaktformuläret.", pendiente: true }, { nombre: "Bekräftas senare", cargo: "—", bio: "Denna plats kommer snart att fyllas. Om du vill ansluta dig till UpSF, skriv till oss via kontaktformuläret.", pendiente: true }, { nombre: "Bekräftas senare", cargo: "—", bio: "Denna plats kommer snart att fyllas. Om du vill ansluta dig till UpSF, skriv till oss via kontaktformuläret.", pendiente: true }, { nombre: "Bekräftas senare", cargo: "—", bio: "Denna plats kommer snart att fyllas. Om du vill ansluta dig till UpSF, skriv till oss via kontaktformuläret.", pendiente: true } ], values: [ { icono: "☀️", t: "Öppenhet", d: "Tydliga räkenskaper, förklarade beslut och öppna dörrar." }, { icono: "🤝", t: "Inkludering", d: "Kommunen tillhör alla, oavsett ursprung." }, { icono: "🌱", t: "Hållbarhet", d: "Skydd av slätten, saltmarkerna och Seguras naturarv." }, { icono: "📣", t: "Deltagande", d: "Grannarnas idéer är själva programmet." } ] },
    statutes: { eyebrow: "Grunddokument", titleA: "Partiets", titleB: "stadgar", intro: "Stadgarna är partiets interna lag: de definierar vilka vi är och hur vi fattar beslut.", index: "Innehåll", chapter: "Kapitel", legalNote: "Stadgar för det politiska partiet Unidos por San Fulgencio (UpSF), utarbetade i enlighet med Spaniens organiska lag 6/2002 om politiska partier. Registrering pågår.", facts: [ { k: "Kapitel", v: "VIII" }, { k: "Artiklar", v: "21" }, { k: "Giltighet", v: "2025" }, { k: "Registrering", v: "Pågår · Inrikesministeriet" } ], chapters: statutesSv },
    contact: { eyebrow: "Skriv till oss", title: "Kontakt", intro: "Dina idéer och förslag driver det här projektet framåt. Berätta vad du skulle förbättra i kommunen.", formEyebrow: "Kontaktformulär", formTitle: "Din röst räknas", formIntro: "Fyll i formuläret med din fråga, idé eller ditt förslag.", subjects: ["Medborgarförslag", "Förbättringsförslag", "Fråga om programmet", "Jag vill gå med", "Samarbeta med UpSF", "Problem i kommunen", "Annat"], sentTitle: "Meddelande mottaget!", sentBody: "Ditt e-postprogram har öppnat meddelandet klart att skicka.", sendAnother: "Skicka ett nytt meddelande", submit: "Skicka meddelande →", helper: "Din e-postapplikation öppnas med det förberedda meddelandet. Adress:", minimum: "Minst 20 tecken.", office: "Kommunhus", writeDirect: "Skriv direkt", writeDirectBody: "Om du föredrar att skriva utan formuläret:", join: "Vill du gå med i UpSF?", joinBody: "Om du vill bli en del av teamet eller medlem, skriv till oss med rätt ämne.", schedule: "Öppettider", weekdays: "Måndag – Fredag", afternoons: "Eftermiddag", saturdays: "Lördagar", labels: { nombre: "Ditt namn", email: "Din e-postadress", telefono: "Telefon (valfritt)", asunto: "Ämne", mensaje: "Ditt meddelande eller förslag", required: "obligatoriskt fält", choose: "— Välj ett alternativ —" }, placeholders: { nombre: "Amparo Andersson", email: "amparo@exempel.se", telefono: "+34 966 79 42 00", mensaje: "Beskriv din idé, ditt förslag eller problemet så tydligt som möjligt." }, errors: { nombre: "Berätta ditt namn så att vi vet vem vi svarar.", email: "Vi behöver en giltig e-postadress för att svara.", asunto: "Välj det ämne som bäst passar ditt meddelande.", mensaje: "Berätta lite mer: minst en fullständig mening behövs." } },
  },
};

const LANGUAGES: { code: Language; name: string; short: string }[] = [
  { code: "es", name: "Español", short: "ES" },
  { code: "en", name: "English", short: "EN" },
  { code: "fr", name: "Français", short: "FR" },
  { code: "nl", name: "Nederlands", short: "NL" },
  { code: "de", name: "Deutsch", short: "DE" },
  { code: "sv", name: "Svenska", short: "SV" },
];

type I18nValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  copy: Copy;
  languages: typeof LANGUAGES;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  lang,
  setLang,
  children,
}: {
  lang: Language;
  setLang: (lang: Language) => void;
  children: ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ lang, setLang, copy: COPY[lang], languages: LANGUAGES }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export const LANGUAGE_OPTIONS = LANGUAGES;
