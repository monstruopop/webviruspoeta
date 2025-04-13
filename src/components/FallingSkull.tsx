import React, { useState, useEffect } from 'react';

interface FallingSkullProps {
  initialX: number;
  onLand: (x: number, y: number) => void;
}

const FallingSkull: React.FC<FallingSkullProps> = ({ initialX, onLand }) => {
  const [position, setPosition] = useState({ x: initialX, y: -50 });
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    const fallInterval = setInterval(() => {
      setPosition((prevPos) => {
        const newY = prevPos.y + 5;
        if (newY >= window.innerHeight - 58) { // 28px taskbar height + 30px skull height
          clearInterval(fallInterval);
          setLanded(true);
          onLand(prevPos.x, window.innerHeight - 58);
          return { ...prevPos, y: window.innerHeight - 58 };
        }
        return { ...prevPos, y: newY };
      });
    }, 50);

    return () => clearInterval(fallInterval);
  }, [onLand]);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        fontSize: '30px',
        transition: landed ? 'top 0.1s ease-in-out' : 'none',
        zIndex: Math.floor(position.y),
      }}
    >
      💀
    </div>
  );
};

export default FallingSkull;

