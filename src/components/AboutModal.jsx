import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Users, Target, Eye } from 'lucide-react';
import { ABOUT_DATA } from '../data/content';

const AboutModal = ({ isOpen, onClose }) => {
  const [selectedBio, setSelectedBio] = useState(null);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 font-mono select-none overflow-y-auto">
        
        <div className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 p-6 md:p-10 rounded shadow-2xl text-neutral-300">
          
          <button onClick={onClose} className="absolute top-6 right-6 text-neutral-400 hover:text-white p-2">
            <X size={24} />
          </button>

          {/* Encabezado */}
          <div className="border-b border-neutral-800 pb-6 mb-6">
            <span className="text-amber-500 text-xs tracking-widest block">CASA PRODUCTORA DESDE {ABOUT_DATA.since}</span>
            <h2 className="font-display text-2xl md:text-4xl font-black text-white tracking-widest uppercase mt-1">
              {ABOUT_DATA.company}
            </h2>
            <p className="text-xs text-neutral-400 mt-2 font-sans">
              {ABOUT_DATA.activity}
            </p>
          </div>

          {/* Misión y Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
          <div className="bg-red-950/30 border border-red-900/50 p-4 rounded mb-8 flex items-center gap-4">
            <Award className="text-red-500 shrink-0" size={28} />
            <div>
              <h4 className="text-white text-xs font-bold tracking-wider uppercase">RECONOCIMIENTOS</h4>
              <p className="text-xs text-neutral-300 font-sans mt-0.5">{ABOUT_DATA.awards}</p>
            </div>
          </div>

          {/* Equipo Directivo */}
          <div>
            <h3 className="text-white text-sm tracking-widest uppercase border-b border-neutral-800 pb-3 mb-6 flex items-center gap-2">
              <Users size={16} className="text-amber-500" /> CONOCE A NUESTRO EQUIPO
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ABOUT_DATA.team.map((member, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedBio(member)}
                  className="bg-neutral-900 p-4 rounded border border-neutral-800 hover:border-amber-500/50 transition cursor-pointer group flex items-center gap-4"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover border border-neutral-700 group-hover:scale-105 transition"
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

          {/* Modal secundario para ver Biofilmografía extendida */}
          {selectedBio && (
            <div className="fixed inset-0 z-60 bg-black/90 p-6 flex items-center justify-center">
              <div className="bg-neutral-900 border border-neutral-700 p-6 rounded max-w-lg w-full relative">
                <button onClick={() => setSelectedBio(null)} className="absolute top-4 right-4 text-neutral-400 hover:text-white">
                  <X size={20} />
                </button>
                <div className="flex items-center gap-4 mb-4">
                  <img src={selectedBio.photo} alt={selectedBio.name} className="w-20 h-20 rounded-full object-cover border-2 border-amber-500" />
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
