import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, MapPin, Mail, Phone } from 'lucide-react';

import FilmProjectionStage from './FilmProjectionStage';
import AboutModal from "./AboutModal";
import { FILMS_DATA } from '../data/content';

const storyChapters = [
  {
    id: 1,
    number: '01',
    tag: 'EL ORIGEN',
    title: 'LA TROPILLA DE OBRAJEROS',
    subtitle: 'Más de diez años produciendo películas desafiantes, independientes e identitarias.',
    image: './assets/bg1@2x.webp',
    cta: '',
  },
  {
    id: 2,
    number: '02',
    tag: 'OBRA EMBLEMÁTICA',
    title: 'MATAINDIOS',
    subtitle: '“Patroncito se habrá quedado dormido”. 4 veces ganadores de estímulos del Ministerio de Cultura.',
    image: './assets/bg2@2x.webp',
    cta: 'Ver Tráiler & Ficha',
  },
  {
    id: 3,
    number: '03',
    tag: 'NUEVA PRODUCCIÓN',
    title: 'NAMPATURUS',
    subtitle: '“Cuando se unen lazos, la maldición se rompe”. Una mirada profunda al mito y la memoria.',
    image: './assets/bg3@2x.webp',
    cta: 'Descubrir Proyecto',
  },
  {
    id: 4,
    number: '04',
    tag: 'AUTORÍA Y DIRECCIÓN',
    title: 'EQUIPO CREATIVO',
    subtitle: 'Nataly Aures y Oscar Sánchez. Creadores impulsados por la libertad artística absoluta.',
    image: './assets/bg4@2x.webp',
    cta: 'Ver Biofilmografía',
  },
  {
    id: 5,
    number: '05',
    tag: 'CINE DE TERRITORIO & CONTACTO',
    title: 'HUANGASCAR - LIMA',
    subtitle: 'Conectando identidades desde Yauyos hacia el circuito cinematográfico internacional.',
    image: './assets/bg5@2x.webp',
    cta: '',
    contactInfo: {
      address: 'Ca. Olivo s/n mz. LL, lt. 11, Huangascar-Yauyos-Lima',
      email: 'latropilladeobrajeros@hotmail.com',
      phone: '+51 993088238'
    }
  }
];

const PresentationGrid = () => {
  const [activeId, setActiveId] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  // FilmProjecttion
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (chapter) => {
    // 1. Nosotros / Casa productora
    if (chapter.id === 4) {
      setIsAboutOpen(true);
      return;
    }
  
    // 2. Mataindios
    if (chapter.id === 2) {
      setSelectedFilm(FILMS_DATA.mataindios);
      setIsModalOpen(true); // <--- Cambiado de setIsFilmOpen a setIsModalOpen
      return;
    }
  
    // 3. Nampaturus
    if (chapter.id === 3) {
      setSelectedFilm(FILMS_DATA.nampaturus);
      setIsModalOpen(true); // <--- Cambiado de setIsFilmOpen a setIsModalOpen
      return;
    }
  };

  // About modal
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  
  // Funciones auxiliares para abrir
  const handleOpenAbout = () => setIsAboutOpen(true);

  const handleOpenFilm = (filmKey) => {
    // filmKey puede ser 'mataindios' o 'nampaturus'
    setSelectedFilm(FILMS_DATA[filmKey]);
    setIsFilmOpen(true);
  };

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveId((prev) => (prev % storyChapters.length) + 1);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden select-none font-sans">
      {/* NAVBAR CON INTEGRACIÓN DE LOGO PENSADO PARA FONDO OSCURO */}
      <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-3 md:px-10 backdrop-blur-md bg-black/40 border-b border-white/10">
        
        {/* Contenedor del Logo con Filtros de Resalte */}
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-white border border-neutral-200 shadow-xl flex items-center justify-center">
            <img
              src="/assets/logo@2x.webp"
              alt="La Tropilla de Obrajeros"
              width="72"
              height="72"
              className="h-9 md:h-11 w-auto object-contain"
            />
          </div>
          <span className="font-display font-bold tracking-widest text-xs md:text-sm text-white uppercase hidden sm:inline-block">
            LA TROPILLA DE OBRAJEROS
          </span>
        </div>

        {/* Controles del Story Mode */}
        <div className="flex items-center space-x-4 md:space-x-6 text-xs tracking-widest text-neutral-300">
          <button
            type="button"
            aria-label={isPlaying ? "Pausar música de fondo" : "Reproducir música de fondo"}
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition text-white"
          >
            <span className="flex items-center justify-center shrink-0">
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
            </span>
            <span className="hidden sm:inline text-xs font-mono tracking-wider">
              {isPlaying ? 'PAUSAR' : 'REPRODUCIR'}
            </span>
          </button>
          <span>
            <strong className="text-white text-sm">0{activeId}</strong> / 0{storyChapters.length}
          </span>
        </div>
      </nav>

      {/* ACCORDEÓN SIN "JUMPING" DE TEXTO */}
      <section className="w-full h-full flex flex-col md:flex-row pt-16">
        {storyChapters.map((chapter) => {
          const isActive = activeId === chapter.id;

          return (
            <motion.div
              key={chapter.id}
              onClick={() => {
                setActiveId(chapter.id);
                setIsPlaying(false);
              }}
              onMouseEnter={() => setActiveId(chapter.id)}
              className="relative flex-1 cursor-pointer border-b md:border-b-0 md:border-r border-neutral-800/80 group overflow-hidden"
              animate={{
                flexGrow: isActive ? 4.5 : 1,
              }}
              transition={{ type: 'spring', stiffness: 140, damping: 20 }}
            >
              {/* Imagen de Fondo */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${chapter.image})` }}
                animate={{ scale: isActive ? 1.06 : 1 }}
                transition={{ duration: 0.8 }}
              />

              {/* Capa Cinemática */}
              <div
                className={`absolute inset-0 transition-colors duration-700 ${
                  isActive
                    ? 'bg-gradient-to-t from-black via-black/40 to-black/20'
                    : 'bg-black/80 hover:bg-black/60'
                }`}
              />

              {/* Contenido con Ancho Fijo para Evitar el Redimensionamiento/Salto de Texto */}
              <div className="relative z-20 h-full w-full p-6 md:p-10 flex flex-col justify-between overflow-hidden">
                {/* Cabecera */}
                <div className="flex justify-between items-start w-full">
                  <span className="text-3xl md:text-5xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                    {chapter.number}
                  </span>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-[10px] md:text-xs uppercase tracking-widest bg-red-900/80 text-red-100 px-3 py-1 border border-red-500/30 backdrop-blur-sm"
                    >
                      {chapter.tag}
                    </motion.span>
                  )}
                </div>

                {/* BLOQUE DE TEXTO: La propiedad `min-w` fija la estructura interna */}
                <div className="w-full">
                  <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-none text-white drop-shadow-md whitespace-nowrap -mt-[28px] ml-[20px] sm:mt-0">
                    {chapter.title}
                  </h2>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="mt-3 md:mt-4"
                      >
                        <p className="font-sans text-xs sm:text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                          {chapter.subtitle}
                        </p>

                        {chapter.id === 5 && (
                          <div className="mt-6 pt-6 border-t border-white/10 space-y-3 max-w-lg font-mono text-xs md:text-sm text-neutral-300">
                            
                            {/* Dirección */}
                            <div className="flex items-start gap-3">
                              <MapPin className="text-amber-500 shrink-0 mt-0.5" size={16} />
                              <span>{chapter.contactInfo.address}</span>
                            </div>

                            {/* Correo */}
                            <div className="flex items-center gap-3">
                              <Mail className="text-amber-500 shrink-0" size={16} />
                              <a
                                href={`mailto:${chapter.contactInfo.email}`}
                                className="hover:text-amber-400 transition underline underline-offset-4 decoration-amber-500/50"
                              >
                                {chapter.contactInfo.email}
                              </a>
                            </div>

                            {/* Teléfono */}
                            <div className="flex items-center gap-3">
                              <Phone className="text-amber-500 shrink-0" size={16} />
                              <a
                                href={`https://wa.me/${chapter.contactInfo.phone.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-amber-400 transition"
                              >
                                {chapter.contactInfo.phone}
                              </a>
                            </div>

                          </div>
                        )}

                        {chapter.cta?.trim() && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenModal(chapter);
                            }}
                            className="mt-4 md:mt-5 px-6 py-2.5 bg-white text-black text-xs md:text-sm font-semibold uppercase tracking-widest hover:bg-neutral-200 transition duration-300 shadow-lg"
                          >
                            {chapter.cta}
                          </button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Barra de Progreso de Autoplay */}
              {isActive && isPlaying && (
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-red-600 z-30"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6, ease: 'linear' }}
                />
              )}
            </motion.div>
          );
        })}
      </section>

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <FilmProjectionStage
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        film={selectedFilm}
      />

    </div>
  );
};

export default PresentationGrid;
