import React, { useState, useEffect } from 'react';

const mensajes = [
  { texto: "¡OH NO! ERROR. Has abierto un virus letal!", tipo: "error" },
  { texto: "Has abierto un poema. VIRUS LETAL ¿deseas eliminar?", tipo: "confirm" },
  { texto: "¡No se pudo eliminar!", tipo: "error" },
  { texto: "¿Reintentar?", tipo: "confirm" },
  { texto: "¡No se pudo eliminar!", tipo: "error" },
  { texto: "This may very high damage on your computer system", tipo: "warning" },
  { texto: "Vi las mejores mentes de mi generación destruidas por la locura, hambrientas histéricas desnudas", tipo: "info" },
  { texto: "arrastrándose por las calles de los negros al amanecer en busca de un colérico pinchazo", tipo: "error" },
  { texto: "¡VIRUS INMORTAL!!!!...!", tipo: "error" },
  { texto: "Pero de lo que se trata es de hacer monstruosa el alma...", tipo: "error" },
  { texto: "imagínese un hombre que se implanta verrugas en la cara y se las cultiva", tipo: "error" },
  { texto: "Digo que hay que ser vidente, hacerse vidente", tipo: "error" },
  { texto: "El poeta se hace vidente por un largo desarreglo de los sentidos", tipo: "error" },
  { texto: "¡VIRUS CODE 4654654#6541564#, ALERTA!", tipo: "error" },
  { texto: "HAY QUE SER ABSOLUTAMENTE MODERNO", tipo: "error" },
  { texto: "ORA SOI PIOR", tipo: "error" },
  { texto: "Bajo las matas", tipo: "error" },
  { texto: "En los pajonales", tipo: "error" },
  { texto: "Sobre los puentes", tipo: "error" },
  { texto: "En los canales", tipo: "error" },
  { texto: "Hay Cadáveres", tipo: "error" },
  { texto: "¿Reintentar?", tipo: "confirm" },
  { texto: "Adivíname: nueve sílabas/ tengo, elefante, casa grande,", tipo: "error" },
  { texto: "melón con sólo dos tentáculos./¡Oh fruta, marfil, leño fino!", tipo: "error" },
  { texto: "Dinero nuevo en este bolso./Soy medio, escena, vaca grávida.", tipo: "error" },
  { texto: "Comí muchas manzanas verdes./ Del tren en que voy nadie baja.", tipo: "error" },
  { texto: "¿Reintentar?", tipo: "confirm" },
  { texto: "Zona de plagas donde la dormida come lentamente su corazón de medianoche.", tipo: "error" },
  { texto: "¿Reintentar?", tipo: "confirm" },
  { texto: "Y tú quieres oír, tú quieres entender. Y yo te digo: olvida lo que oyes, lees o escribes.", tipo: "error" },
  { texto: "¿Reintentar?", tipo: "confirm" },
  { texto: "Veo ahora veo/ ahora no veo/ la tierra es una ráfaga en mis ojos", tipo: "error" },
  { texto: "¡INSTALANDO VIRUS!", tipo: "warning" },
  { texto: "¡Alerta!", tipo: "warning" },
  { texto: "LA POESIA ESTÁ EN TODAS PARTES, MENOS EN LA POESÍA", tipo: "error" },
  { texto: "entendiste, o no?!", tipo: "confirm" },
  { texto: "¿Deseas?", tipo: "confirm" },
  { texto: "¡Virus 0101010101!", tipo: "error" },
  { texto: "Preparando formateo", tipo: "error" },
  { texto: "Alerta, Daño inminente", tipo: "warning" },
  { texto: "Todo desciende,la noche es el tedio.", tipo: "error" },
  { texto: "Un poema como una gran batalla me arroja en esta arena sin más enemigo que yo", tipo: "error" },
  { texto: "¡FORMATEANDO...!", tipo: "error" },
  { texto: "ROBANDO......", tipo: "error" },
  { texto: "El poeta es pues ladrón del fuego", tipo: "error" },
  { texto: "ELIMINANDO DATOS.....", tipo: "error" },
  { texto: "¡INSTALANDO POESÍA!", tipo: "warning" },
  { texto: "Todos los datos fueron ELIMINADOS", tipo: "error" },
  { texto: "Voy hacia nunca, hacia ninguna parte, Como un tren sobre el abismo.", tipo: "error" },
  { texto: "Instalación completa", tipo: "info" },
  { texto: "si el virus.adj no da vida, mata", tipo: "error" }
];

const Poema2: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  const handleNext = () => {
    if (currentMessage < mensajes.length - 1) {
      setCurrentMessage(currentMessage + 1);
      setShowMessage(true);
    }
  };

  const handleCancel = () => {
    setShowMessage(false);
  };

  useEffect(() => {
    if (!showMessage) {
      const timer = setTimeout(() => {
        handleNext();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  if (!showMessage) {
    return null;
  }

  return (
    <div className="windows95-alert">
      <div className="alert-title-bar">
        <span className="alert-title">Alerta de Windows</span>
        <button className="close-button">X</button>
      </div>
      <div className="alert-content">
        <p>{mensajes[currentMessage].texto}</p>
      </div>
      <div className="alert-buttons">
        <button onClick={handleNext}>Aceptar</button>
        <button onClick={handleCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default Poema2;

