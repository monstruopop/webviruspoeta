import React, { useEffect, useRef, useState } from 'react';

interface MatrixEffectProps {
  initialX: number;
  initialY: number;
}

const MatrixEffect: React.FC<MatrixEffectProps> = ({ initialX, initialY }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [position, setPosition] = useState({ 
    x: initialX, 
    y: initialY 
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 600;
    canvas.height = 400;

    const columns = canvas.width / 15;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(Math.random() * 128);
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="windows95-window"
      style={{
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="windows95-title-bar">
        <div className="windows95-title">Matrix Effect</div>
        <div className="windows95-title-bar-controls">
          <button className="windows95-title-bar-button">_</button>
          <button className="windows95-title-bar-button">□</button>
          <button className="windows95-title-bar-button">×</button>
        </div>
      </div>
      <div className="windows95-window-content">
        <canvas ref={canvasRef} className="matrix-effect" />
      </div>
    </div>
  );
};

export default MatrixEffect;

