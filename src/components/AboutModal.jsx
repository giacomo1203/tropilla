import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Users, Target, Eye } from 'lucide-react';
import { ABOUT_DATA } from '../data/content';

const AboutModal = ({ isOpen, onClose }) => {
  const [selectedBio, setSelectedBio] = useState(null);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* 1. Backdrop general centrado sin overflow exterior */}
      <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 font-mono select-none">
        
        {/* 2. Tarjeta principal acotada a la altura de la pantalla (max-h-[90dvh]) */}
        <div className="relative w-full max-w-4xl max-h-[90dvh] sm:max-h-[85vh] bg-neutral-950 border border-neutral-800 rounded-lg shadow-2xl text-neutral-300 flex flex-col overflow-hidden">
          
          {/* 3. Header STICKY: El botón de cerrar SIEMPRE se queda arriba a la vista */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 shrink-0">
            <div>
              <span className="text-amber-500 text-[10px] sm:text-xs tracking-widest block">
                CASA PRODUCTORA DESDE {ABOUT_DATA.since}
              </span>
              <h2 className="font-display text-lg sm:text-2xl font-black text-white tracking-widest uppercase">
                {ABOUT_DATA.company}
              </h2>
            </div>

            <button 
              type="button"
              onClick={onClose} 
              aria-label="Cerrar ventana sobre nosotros"
              className="text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800/60 transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* 4. Cuerpo interno con SCROLL AUTOMÁTICO */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-6">
            
            {/* Actividad */}
            <p className="text-xs text-neutral-400 font-sans -mt-2">
              {ABOUT_DATA.activity}
            </p>

            {/* Misión y Visión */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-neutral-900/60 p-5 rounded border border-neutral-800/80">
                <div className="flex items-center gap-2 text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">
                  <Target size={16} /> MISIÓN
                </div>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {ABOUT_DATA.mission}
                </p>
              </div>

              <div className="bg-neutral-900/60 p-5 rounded border border-neutral-800/80">
                <div className="flex items-center gap-2 text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">
                  <Eye size={16} /> VISIÓN
                </div>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {ABOUT_DATA.vision}
                </p>
              </div>
            </div>

            {/* Reconocimientos */}
            <div className="bg-red-950/30 border border-red-900/50 p-4 rounded flex items-center gap-4">
              <Award className="text-red-500 shrink-0" size={28} />
              <div>
                <h4 className="text-white text-xs font-bold tracking-wider uppercase">RECONOCIMIENTOS</h4>
                <p className="text-xs text-neutral-300 font-sans mt-0.5">{ABOUT_DATA.awards}</p>
              </div>
            </div>

            {/* Equipo Directivo */}
            <div>
              <h3 className="text-white text-sm tracking-widest uppercase border-b border-neutral-800 pb-3 mb-4 flex items-center gap-2">
                <Users size={16} className="text-amber-500" /> CONOCE A NUESTRO EQUIPO
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_DATA.team.map((member, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedBio(member)}
                    className="bg-neutral-900 p-4 rounded border border-neutral-800 hover:border-amber-500/50 transition cursor-pointer group flex items-center gap-4"
                  >
                    <img
                      src={member.photo}
                      alt={member.name}
                      width="64"
                      height="64"
                      className="w-16 h-16 rounded-full object-cover border border-neutral-700 group-hover:scale-105 transition shrink-0"
                    />
                    <div>
                      <h4 className="text-white text-sm font-bold tracking-wider">{member.name}</h4>
                      <span className="text-[10px] text-amber-500 block font-mono">{member.role}</span>
                      <span className="text-[10px] text-neutral-400 font-sans underline mt-1 block">Ver foto y biofilmografía &gt;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal secundario para ver Biofilmografía extendida */}
          {selectedBio && (
            <div className="fixed inset-0 z-60 bg-black/90 p-4 flex items-center justify-center">
              <div className="bg-neutral-900 border border-neutral-700 p-6 rounded max-w-lg w-full relative max-h-[80vh] overflow-y-auto">
                <button 
                  type="button"
                  onClick={() => setSelectedBio(null)} 
                  aria-label="Cerrar detalles del miembro"
                  className="absolute top-4 right-4 text-neutral-400 hover:text-white"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-4 mb-4">
                  <img src={selectedBio.photo} alt={selectedBio.name} width="80" height="80" className="w-20 h-20 rounded-full object-cover border-2 border-amber-500 shrink-0" />
                  <div>
                    <h3 className="text-white font-bold text-lg">{selectedBio.name}</h3>
                    <p className="text-amber-500 text-xs">{selectedBio.role}</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">{selectedBio.bio}</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </AnimatePresence>
  );
};

export default AboutModal;
