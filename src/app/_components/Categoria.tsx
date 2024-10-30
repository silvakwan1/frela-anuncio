"use client";
import { useRef, useState } from "react";
import { CardCategoria } from "./CardCategoria";

export function Categoria() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardWidth = 100; // Largura do card em pixels
  const [counter, setCounter] = useState(0);
  const totalCards = 9; // Total de cartões
  const visibleCards = 3; // Número de cartões visíveis
  const maxScroll = totalCards - visibleCards; // Limite de rolagem

  const handleNext = () => {
    if (carouselRef.current && counter < maxScroll) {
      setCounter(counter + 1);
      carouselRef.current.style.transform = `translateX(-${
        (counter + 1) * cardWidth
      }px)`;
    }
  };

  const handlePrev = () => {
    if (carouselRef.current && counter > 0) {
      setCounter(counter - 1);
      carouselRef.current.style.transform = `translateX(-${
        (counter - 1) * cardWidth
      }px)`;
    }
  };

  return (
    <div className="relative flex items-center overflow-hidden w-full px-8">
      {counter > 0 && (
        <button
          onClick={handlePrev}
          className="carousel-button prev absolute left-4"
        >
          ❮
        </button>
      )}
      <div className="overflow-hidden w-full">
        <div
          ref={carouselRef}
          className="flex gap-4 transition-transform duration-500 ease-in-out"
        >
          {/* Cards */}
          <CardCategoria alt="Bem-estar" src="/next.svg" text="Bem-estar" />
          <CardCategoria alt="Estética" src="/next.svg" text="Estética" />
          <CardCategoria alt="Alimentação" src="/next.svg" text="Alimentação" />
          <CardCategoria alt="Tecnologia" src="/next.svg" text="Tecnologia" />
          <CardCategoria alt="Moda" src="/next.svg" text="Moda" />
          <CardCategoria alt="Esportes" src="/next.svg" text="Esportes" />
          <CardCategoria alt="Serviços" src="/next.svg" text="Serviços" />
          <CardCategoria alt="Educação" src="/next.svg" text="Educação" />
          <CardCategoria alt="Lazer" src="/next.svg" text="Lazer" />
        </div>
      </div>
      {counter < maxScroll && (
        <button
          onClick={handleNext}
          className="carousel-button next absolute right-4"
        >
          ❯
        </button>
      )}
    </div>
  );
}
