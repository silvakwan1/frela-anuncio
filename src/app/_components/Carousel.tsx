"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isMounted, setIsMounted] = useState(false); // Para garantir que o carrossel só seja renderizado após a montagem

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  useEffect(() => {
    setIsMounted(true); // A montagem está completa

    if (emblaApi) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowLeft") scrollPrev();
        if (event.key === "ArrowRight") scrollNext();
      };
      window.addEventListener("keydown", handleKeyDown);

      const interval = setInterval(() => {
        scrollNext();
      }, 5000);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        clearInterval(interval);
      };
    }
  }, [emblaApi]);

  if (!isMounted) {
    return null; // Enquanto o componente não estiver montado, não renderize o carrossel
  }

  return (
    <div className="relative z-0 overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, index) => (
            <div
              key={index}
              className="embla__slide h-64 lg:h-96 w-full bg-gray-200 flex items-center justify-center"
            >
              <Image
                alt={`Slide ${index + 1}`}
                src={src}
                width={1000}
                height={350}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-96 object-cover transition-transform duration-500"
                priority
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded shadow"
        onClick={scrollPrev}
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded shadow"
        onClick={scrollNext}
      >
        ▶
      </button>
      <style jsx>{`
        .embla {
          position: relative;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          min-width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
