import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, Film, Image as ImageIcon, FileText } from 'lucide-react';

const FilmProjectionStage = ({ isOpen, onClose, film }) => {
  const [activeTab, setActiveTab] = useState('projection'); // 'projection' | 'details' | 'gallery'

  if (!isOpen || !film) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black flex flex-col justify-between font-mono select-none overflow-hidden">
        
        {/* Luz de Proyector Superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[30vh] bg-gradient-to-b from-amber-100/10 to-transparent blur-3xl pointer-events-none z-10" />

        {/* Cabecera */}
        <header className="relative z-30 flex items-center justify-between p-6 bg-gradient-to-b from-black via-black/90 to-transparent border-b border-neutral-900">
          <div>
            <span className="text-amber-500 text-[10px] tracking-widest uppercase block">PROYECCIÓN 35MM</span>
            <h2 className="font-display text-2xl md:text-3xl font-black text-white tracking-widest uppercase">
              {film.title}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {film.movieLink && (
              <a
                href={film.movieLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest transition rounded-sm"
              >
                {film.movieLinkLabel} <ExternalLink size={14} />
              </a>
            )}
            <button onClick={onClose} className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900">
              <X size={22} />
            </button>
          </div>
        </header>

        {/* Contenido Principal */}
        <main className="relative z-20 flex-1 p-4 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
          
          {/* TAB 1: PROYECCIÓN (TRAILER / TEASER & SINOPSIS) */}
          {activeTab === 'projection' && (
            <div className="space-y-6">
              <div className="relative aspect-[21/9] w-full bg-neutral-950 border border-neutral-800 rounded overflow-hidden shadow-2xl">
                <iframe
                  src={film.trailerUrl}
                  title={film.title}
                  className="w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-neutral-950 p-6 border border-neutral-900 rounded">
                <div className="md:col-span-2 space-y-4">
                  <span className="text-amber-500 text-xs tracking-widest block">LOGLINE</span>
                  <blockquote className="text-lg md:text-xl italic text-white border-l-2 border-amber-500 pl-4 font-serif">
                    "{film.logline}"
                  </blockquote>

                  <span className="text-neutral-500 text-xs tracking-widest block pt-2">SINOPSIS CORTA</span>
                  <p style={{ whiteSpace: 'pre-line' }} className="text-sm text-neutral-300 font-sans leading-relaxed">
                    {film.synopsis}
                  </p>
                </div>

                {film.movieLink && (
                  <div className="flex flex-col justify-center items-center p-6 bg-neutral-900/50 border border-neutral-800 text-center rounded">
                    <p className="text-xs text-neutral-400 mb-4 font-sans">
                      {film.movieLinkDetail}
                    </p>
                    <a
                      href={film.movieLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest transition text-center"
                    >
                      {film.movieLinkLabel}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: FICHA TÉCNICA & AFICHE */}
          {activeTab === 'details' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Afiche */}
              <div className="bg-neutral-950 p-2 border border-neutral-800 rounded">
                <img src={film.poster} alt={`Afiche de ${film.title}`} className="w-full h-auto object-cover rounded" />
              </div>

              {/* Ficha & Premios */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-neutral-950 p-6 border border-neutral-900 rounded space-y-4">
                  <h3 className="text-amber-500 text-sm tracking-widest uppercase border-b border-neutral-800 pb-2">
                    FICHA TÉCNICA
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                    {Object.entries(film.technicalSheet).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-neutral-500 uppercase block text-[10px]">{key}</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-neutral-950 p-6 border border-neutral-900 rounded space-y-4">
                  <h3 className="text-amber-500 text-sm tracking-widest uppercase border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Award size={16} /> PREMIOS & RECONOCIMIENTOS
                  </h3>
                  <ul className="space-y-2 text-xs font-sans text-neutral-300">
                    {film.awards.map((award, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-500">•</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GALERÍA (2 STILLS + 4 RODAJE) */}
          {activeTab === 'gallery' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-amber-500 text-xs tracking-widest uppercase mb-4">STILLS DE PELÍCULA (2)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {film.stills.map((img, idx) => (
                    <div key={idx} className="aspect-video bg-neutral-900 border border-neutral-800 rounded overflow-hidden">
                      <img src={img} alt="Still" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-amber-500 text-xs tracking-widest uppercase mb-4">FOTOS DE RODAJE (4)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {film.behindTheScenes.map((img, idx) => (
                    <div key={idx} className="aspect-square bg-neutral-900 border border-neutral-800 rounded overflow-hidden">
                      <img src={img} alt="Rodaje" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </main>

        {/* Navegador Celuloide Bottom */}
        <footer className="relative z-30 bg-black border-t border-neutral-900 p-4">
          <div className="max-w-md mx-auto flex justify-between bg-neutral-950 p-1.5 border border-neutral-800 rounded">
            <button
              onClick={() => setActiveTab('projection')}
              className={`flex-1 py-2 text-xs tracking-widest transition ${activeTab === 'projection' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50' : 'text-neutral-500'}`}
            >
              PROYECCIÓN
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`flex-1 py-2 text-xs tracking-widest transition ${activeTab === 'details' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50' : 'text-neutral-500'}`}
            >
              FICHA & AFICHE
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex-1 py-2 text-xs tracking-widest transition ${activeTab === 'gallery' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50' : 'text-neutral-500'}`}
            >
              GALERÍA
            </button>
          </div>
        </footer>

      </div>
    </AnimatePresence>
  );
};

export default FilmProjectionStage;
