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
      role: "Productora & Realizadora",
      photo: "/assets/naures.webp", // Coloca la foto en tu carpeta public/assets/
      bio: "Biofilmografía de Nataly Aures... (Agregar biografía aquí)"
    },
    {
      name: "Oscar Sánchez",
      role: "Director & Guionista",
      photo: "/assets/osanchez.webp", // Coloca la foto en tu carpeta public/assets/
      bio: "Biofilmografía de Oscar Sánchez... (Agregar biografía aquí)"
    }
  ]
};

export const FILMS_DATA = {
  mataindios: {
    id: "mataindios",
    title: "MATAINDIOS",
    logline: "Patroncito se habrá quedado dormido",
    synopsis: "Sinopsis corta de Mataindios...",
    poster: "/assets/poster-mataindios.webp",
    trailerUrl: "https://www.youtube.com/embed/l3CBK02EmXw", // Reemplazar con el link embed real
    movieLink: "https://vimeo.com/ondemand/mataindios", // Link para ver o alquilar la película
    technicalSheet: {
      direccion: "Oscar Sánchez & Nataly Aures",
      guion: "Oscar Sánchez",
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
    synopsis: "Sinopsis corta de Nampaturus...",
    poster: "/assets/poster-nampaturus.webp",
    trailerUrl: "https://www.youtube.com/embed/l3CBK02EmXw", // Link del Teaser
    movieLink: null,
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
