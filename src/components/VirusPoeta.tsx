import React, { useState, useEffect } from 'react';
import { Folder, Computer, Recycle } from 'lucide-react';
import MatrixEffect from './MatrixEffect';
import PoemaVoz from './PoemaVoz';
import Poema2 from './Poema2';
import FallingSkull from './FallingSkull';

interface Skull {
  id: number;
  x: number;
  y: number;
}

const VirusPoeta: React.FC = () => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [showPoemaVoz, setShowPoemaVoz] = useState(false);
  const [showPoema2, setShowPoema2] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [fallingSkulls, setFallingSkulls] = useState<Skull[]>([]);
  const [landedSkulls, setLandedSkulls] = useState<Skull[]>([]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  const handleDolphinClick = () => {
    setShowMatrix(true);
    setShowPoemaVoz(true);
    setTimeout(() => setShowPoema2(true), 180000); // 3 minutos
  };

  const handleDesktopClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newSkull: Skull = {
      id: Date.now(),
      x: e.clientX,
      y: -50,
    };
    setFallingSkulls((prevSkulls) => [...prevSkulls, newSkull]);
  };

  const handleSkullLand = (id: number, x: number, y: number) => {
    setFallingSkulls((prevSkulls) => prevSkulls.filter((skull) => skull.id !== id));
    setLandedSkulls((prevLanded) => {
      const existingSkull = prevLanded.find((skull) => Math.abs(skull.x - x) < 15);
      if (existingSkull) {
        return prevLanded.map((skull) =>
          skull.id === existingSkull.id ? { ...skull, y: skull.y - 30 } : skull
        );
      }
      return [...prevLanded, { id, x, y }];
    });
  };

  return (
    <div className="windows95-desktop" onClick={handleDesktopClick}>
      <div className="desktop-icons">
        <div className="desktop-icon">
          <Computer size={32} />
          <span>Mi PC</span>
        </div>
        <div className="desktop-icon">
          <Folder size={32} />
          <span>Mis documentos</span>
        </div>
        <div className="desktop-icon" onClick={handleDolphinClick}>
          <span className="dolphin-icon">🐬</span>
          <span className="icon-text">No soy un virus, confía en mí. Soy un delfín</span>
        </div>
        <div className="desktop-icon">
          <Recycle size={32} />
          <span>Papelera de reciclaje</span>
        </div>
      </div>
      <div className="taskbar">
        <button className="start-button" onClick={toggleStartMenu}>
          <img src="/windows-logo.png" alt="Windows logo" className="windows-logo" />
          Inicio
        </button>
        <div className="taskbar-time">
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      {startMenuOpen && (
        <div className="start-menu">
          <div className="start-menu-header">
            <span className="windows-text">Windows</span>
            <span className="version-text">95</span>
          </div>
          <div className="start-menu-item">Programas</div>
          <div className="start-menu-item">Documentos</div>
          <div className="start-menu-item">Configuración</div>
          <div className="start-menu-item">Buscar</div>
          <div className="start-menu-item">Ayuda</div>
          <div className="start-menu-item">Ejecutar...</div>
          <div className="start-menu-item start-menu-shutdown">Apagar el sistema...</div>
        </div>
      )}
      {showMatrix && (
        <MatrixEffect
          initialX={window.innerWidth / 2 - 300}
          initialY={window.innerHeight / 2 - 200}
        />
      )}
      {showPoemaVoz && <PoemaVoz />}
      {showPoema2 && <Poema2 />}
      {fallingSkulls.map((skull) => (
        <FallingSkull
          key={skull.id}
          initialX={skull.x}
          onLand={(x, y) => handleSkullLand(skull.id, x, y)}
        />
      ))}
      {landedSkulls.map((skull) => (
        <div
          key={skull.id}
          style={{
            position: 'absolute',
            left: `${skull.x}px`,
            top: `${skull.y}px`,
            fontSize: '30px',
            zIndex: Math.floor(skull.y),
          }}
        >
          💀
        </div>
      ))}
    </div>
  );
};

export default VirusPoeta;

