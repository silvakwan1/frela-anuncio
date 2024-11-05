"use client";
import { CardCategoria } from "./CardCategoria";
import useEmblaCarousel from "embla-carousel-react";

export function Categoria() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    skipSnaps: false,
    dragFree: true,
  });

  return (
    <div className="embla w-full overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex gap-4 ">
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <CardCategoria
            alt="Tecnologia"
            src="./laptop.svg"
            text="Tecnologia"
          />
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <CardCategoria alt="Moda" src="/moda.svg" text="Moda" />
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <CardCategoria alt="Educação" src="/book.svg" text="Educação" />
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <CardCategoria alt="Esportes" src="/run.svg" text="Esportes" />
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <CardCategoria
            alt="Alimentação"
            src="/fastfood.svg"
            text="Alimentação"
          />
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <CardCategoria
            alt="Serviços"
            src="/engineering.svg"
            text="Serviços"
          />
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <CardCategoria alt="Lazer" src="/home.svg" text="Lazer" />
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <CardCategoria
            alt="Alimentação"
            src="/fastfood.svg"
            text="Alimentação"
          />
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <CardCategoria
            alt="Serviços"
            src="/engineering.svg"
            text="Serviços"
          />
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <CardCategoria alt="Lazer" src="/home.svg" text="Lazer" />
        </div>
      </div>
    </div>
  );
}
