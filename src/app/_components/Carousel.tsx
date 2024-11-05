"use client";
import Image from "next/image";
// import { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
}

// const Carousel = ({ images }: CarouselProps) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full max-w-2xl mx-auto">
//       <div className="overflow-hidden rounded-lg">
//         <Image
//           alt={`Slide ${currentIndex}`}
//           src={images[currentIndex]}
//           width={1000}
//           height={350}
//           className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500"
//           priority
//         />
//       </div>

//       <button
//         onClick={() =>
//           setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? images.length - 1 : prevIndex - 1
//           )
//         }
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-800"
//       >
//         ‹
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-800"
//       >
//         ›
//       </button>

//       <div className="flex justify-center space-x-2 mt-4">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-gray-800" : "bg-gray-300"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
// components/Carousel.js
// components/Carousel.js
// components/Carousel.js
// components/Carousel.js
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({ images }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  useEffect(() => {
    if (emblaApi) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowLeft") scrollPrev();
        if (event.key === "ArrowRight") scrollNext();
      };
      window.addEventListener("keydown", handleKeyDown);

      const interval = setInterval(() => {
        scrollNext();
      }, 3000);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        clearInterval(interval);
      };
    }
  }, [emblaApi]);

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
