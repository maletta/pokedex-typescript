import React, { useCallback, useEffect, useRef, useState } from 'react';
import { DragContainer, SliderContent } from './styles';

interface DragSliderProps {
  children: React.ReactNode[];
  gap?: number;
  itemWidth?: number;
  className?: string;
}

const DragSlider: React.FC<DragSliderProps> = ({
  children,
  gap = 20,
  itemWidth = 50,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [position, setPosition] = useState(0);
  const [bounds, setBounds] = useState({ min: 0, max: 0 });

  // Calcula os limites do slider
  const calculateBounds = useCallback(() => {
    if (containerRef.current && contentRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;
      const maxScroll = Math.max(0, contentWidth - containerWidth);
      setBounds({ min: 0, max: maxScroll });
    }
  }, []);

  // Atualiza os limites quando o componente monta ou redimensiona
  useEffect(() => {
    calculateBounds();
    window.addEventListener('resize', calculateBounds);
    return () => window.removeEventListener('resize', calculateBounds);
  }, [calculateBounds]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX - position);
    setScrollLeft(position);
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    // Aplica o "bounce back" se necessário
    if (position > bounds.min) {
      setPosition(0);
    } else if (position < -bounds.max) {
      setPosition(-bounds.max);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const walk = clientX - startX;

    // Permite arrastar além dos limites, mas será corrigido no dragEnd
    setPosition(walk);
  };

  return (
    <DragContainer
      ref={containerRef}
      className={className}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <SliderContent
        ref={contentRef}
        style={{
          transform: `translateX(${position}px)`,
          gap: `${gap * 2}px`,
          gridTemplateColumns: `repeat(${children.length}, ${itemWidth}px)`,
          gridTemplateRows: `65px`, // evita que o SlideContent aumente de altura porque o filho pode ter uma altura maior quando selecionado (o ícone aumenta quando está selecionado)
        }}
        $isDragging={isDragging}
      >
        {children}
      </SliderContent>
    </DragContainer>
  );
};

export default DragSlider;
