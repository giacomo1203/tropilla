export const ABOUT_DATA = {
  company: "LA TROPILLA DE OBRAJEROS EIRL",
  since: "2015",
  activity: "Producción Cinematográfica",
  mission: "Producir obras cinematográficas autorales e independientes priorizando la libertad creativa y artística de los realizadores.",
  vision: "Convertirse en referente de reflexión e integración social a través del arte cinematográfico influyendo en la cultura con ideas originales.",
  awards: "Cuatro veces ganador de los estímulos económicos del Ministerio de Cultura del Perú (DAFO).",
  team: [
    {
      name: "Nataly Aures",
      role: "Directora, guionista y productora",
      photo: "/assets/naures.webp", // Coloca la foto en tu carpeta public/assets/
      bio: "Actriz, guionista, directora y productora peruana vinculada al cine independiente. Ha participado como actriz principal en la película peruana “Naira” (2024) y como actriz y jefa de producción en la premiada película “Mataindios” (2017) reconocida en festivales nacionales e internacionales.\nComo guionista, directora y productora desarrolla el largometraje “Nampaturus”. Fue seleccionada al taller de guion del MINCUL (2021) y al Warmi Lab del MAFIZ – Festival de Málaga (2023). Su trayectoria integra actuación, creación audiovisual, producción cinematográfica y representación del cine peruano en espacios internacionales."
    },
    {
      name: "Oscar Sánchez",
      role: "Director, guionista y productor",
      photo: "/assets/osanchez.webp", // Coloca la foto en tu carpeta public/assets/
      bio: "Licenciado en Educación Artística. Complementó su formación con estudios de posgrado. Ha fortalecido su perfil audiovisual mediante programas de especialización cinematográfica en Perú, Chile y Argentina, destacando su selección en Talents Buenos Aires de la Berlinale y su formación con reconocidos cineastas como Béla Tarr, Pablo Stoll y Armando Robles Godoy. Su trabajo articula pedagogía y creación audiovisual, explorando la memoria y la identidad cultural. Entre sus obras cinematográficas destaca la película “Nampaturus” (proyecto actual) y “Mataindios” reconocido con siete premios internacionales y tres nacionales, entre ellos el galardón a Mejor Película Peruana del 2018."
    }
  ]
};

export const FILMS_DATA = {
  mataindios: {
    id: "mataindios",
    title: "MATAINDIOS",
    logline: "Patroncito se habrá quedado dormido",
    synopsis: "En las alturas de un pueblo andino, sus habitantes organizan una festividad en honor a su Santo Patrón para dar fin al dolor que cargan por sus familiares muertos.\nSin embargo, un inesperado accidente les indica un mal augurio generando en ellos fuertes dudas con respecto a la voluntad del Patrón de querer calmar sus pesares.",
    poster: "/assets/poster-mataindios.webp",
    trailerUrl: "https://www.youtube.com/embed/l3CBK02EmXw", // Reemplazar con el link embed real
    movieLink: "https://vimeo.com/553533397", // Link para ver o alquilar la película
    movieLinkLabel: "VER PELÍCULA COMPLETA ",
    movieLinkDetail: "Película disponible para visionado en línea. Password: Tropillade",
    technicalSheet: {
      direccion: "Oscar Sánchez & Robert Julca",
      guion: "Oscar Sánchez & Robert Julca",
      produccion: "La Tropilla de Obrajeros EIRL",
      duracion: "76 min",
      pais: "Perú"
    },
    stills: [
      "/assets/mataindios-still-1.webp",
      "/assets/mataindios-still-2.webp"
    ],
    behindTheScenes: [
      "/assets/mataindios-rodaje-1.webp",
      "/assets/mataindios-rodaje-2.webp",
      "/assets/mataindios-rodaje-3.webp",
      "/assets/mataindios-rodaje-4.webp"
    ],
    awards: [
      "Ganador de los Estímulos Económicos del Ministerio de Cultura del Perú",
      "Premio a Mejor Película Peruana - Festival de Cine de Lima"
    ]
  },
  nampaturus: {
    id: "nampaturus",
    title: "NAMPATURUS",
    logline: "Cuando se unen lazos, la maldición se rompe",
    synopsis: "Huérfana y decidida a descubrir la verdad sobre su madre, Cela viaja a un remoto paraje de los Andes peruanos, donde su bisabuela Akisha sobrevive bajo una antigua maldición.\nSu llegada despierta a los Nampaturus, espíritus malignos que poseen a niños y desatan el terror en la comunidad.\nMientras el mal las acecha, Cela deberá aferrarse a la fe que tiene su bisabuela en la Madre Apu, la única Deidad capaz de romper el ciclo de muerte, miedo y dolor que persigue a su familia.",
    poster: "/assets/poster-nampaturus.webp",
    trailerUrl: "https://www.youtube.com/embed/FLxuF0ZWemI", // Link del Teaser
    movieLink: "/assets/dossier.pdf",
    movieLinkLabel: "DOSSIER CINEMATOGRÁFICO",
    movieLinkDetail: "Ficha técnica, sinopsis y material gráfico oficial.",
    technicalSheet: {
      direccion: "Oscar Sánchez & Nataly Aures",
      produccion: "La Tropilla de Obrajeros EIRL",
      estado: "En Desarrollo / Producción"
    },
    stills: [
      "/assets/nampaturus-still-1.webp",
      "/assets/nampaturus-still-2.webp"
    ],
    behindTheScenes: [
      "/assets/nampaturus-rodaje-1.webp",
      "/assets/nampaturus-rodaje-2.webp",
      "/assets/nampaturus-rodaje-3.webp",
      "/assets/nampaturus-rodaje-4.webp"
    ],
    awards: [
      "Ganador del Estímulo a la Producción de Largometraje de Ficción - DAFO"
    ]
  }
};
