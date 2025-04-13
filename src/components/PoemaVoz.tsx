import React, { useEffect, useState } from 'react';

const poemas = [
  "Error",
  "El mundo a partir de hoy nos pertenece",
  "Ya no nos podemos ocultar.",
  "ES EL TIEMPO DE LOS SUBTERRANEOS",
  "Nada es verdadero. Todo esta permitido",
  "Hemos visto con una gran sonrisa todos los simulacros de destruccion",
  "La inspiracion nunca nos lleva a ningun lugar",
  "la ekonomia NO NOS NECESITA. LA CULTURA NO NOS QUIERE.",
  "Todo manifiesto es fragil",
  "Todo esto nacio roto",
  "Nunca nos preocupamos por arreglarlo",
  "Preferiria no hacerlo",
  "Preferiria no hacerlo",
  "Preferiria no hacerlo",
  "escuchaste alguna vez como suena el fin del mundo",
  "despues de la poesia que viene? La post poesia?",
  "Silencio",
  "habla Aldous",
  "No hay futuro",
  "Deja que esas motos se estrellen contra la noche",
  "deja de hacer",
  "deja de producir",
  "deja de trabajar",
  "la maquina triunfo",
  "Quien fracasa en la sociedad neoliberal del rendimiento se hace a si mismo responsable y se averwuenza",
  "Creias que los proyectos, las iniciativas y la motivacion reemplazan la prohibicion, el mandato y la ley",
  "sabias que el fin del mundo",
  "suena igual que al silencio",
  "de tu visto a las 23 y 45",
  "Vigilancia digital. El amo bueno y sensible lo ve todo.",
  "a imagen de un ojo que repta por tus pensamientos para saber todo, hasta los secretos inconfesables",
  "El amo sabe que queres comprar",
  "El panoptico digital no nos impone ningun silencio.",
  "Al contrario: nos exige compartir, participar, comunicar",
  "Este poder amable es mas poderoso que el poder represivo.",
  "Escapa a toda visibilidad.",
  "Una fabula de emprendedores",
  "La palabra resentimiento esta de vuelta",
  "Son los heroes de la sociedad de rendimiento",
  "Cada uno lleva en sus espaldas un campo de trabajo forzado",
  "Lo que esta a la vista de todos actua en la oscuridad.",
  "Estar cansado es estar enfermo",
  "Estar enfermo es querer huir",
  "El tiempo es el moho que no nos deja respirar",
  "La juventud solo dura diez anios",
  "La juventud es un invento de las marcas",
  "El peligro es la propiedad privada",
  "El peligro es tomar la palabra",
  "deja de hacer",
  "deja de producir",
  "deja de trabajar",
  "la maquina triunfo",
  "El fin del mundo es nuestro",
  "Repito el fin del mundo es nuestro"
];

const PoemaVoz: React.FC = () => {
  const [currentPoema, setCurrentPoema] = useState(0);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(poemas[currentPoema]);
    utterance.lang = 'es-ES';

    utterance.onend = () => {
      if (currentPoema < poemas.length - 1) {
        setCurrentPoema(currentPoema + 1);
      }
    };

    synth.speak(utterance);

    return () => {
      synth.cancel();
    };
  }, [currentPoema]);

  return (
    <div className="poema-voz">
      <p>{poemas[currentPoema]}</p>
    </div>
  );
};

export default PoemaVoz;

