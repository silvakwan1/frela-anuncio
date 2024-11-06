"use client";
import Link from "next/link";
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
          <Link href={"/"}>
            <CardCategoria
              alt="destaques"
              src="./features.svg"
              text="destaques"
            />
          </Link>
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <Link href={"?categoria=tecnologia"}>
            <CardCategoria
              alt="Tecnologia"
              src="./laptop.svg"
              text="Tecnologia"
            />
          </Link>
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <Link href={"?categoria=moda"}>
            <CardCategoria alt="Moda" src="/moda.svg" text="Moda" />
          </Link>
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <Link href={"?categoria=educacao"}>
            <CardCategoria alt="Educação" src="/book.svg" text="Educação" />
          </Link>
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <Link href={"?categoria=esportes"}>
            <CardCategoria alt="Esportes" src="/run.svg" text="Esportes" />
          </Link>
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <Link href={"?categoria=alimentacao"}>
            <CardCategoria
              alt="Alimentação"
              src="/fastfood.svg"
              text="Alimentação"
            />
          </Link>
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <Link href={"?categoria=servicos"}>
            <CardCategoria
              alt="Serviços"
              src="/engineering.svg"
              text="Serviços"
            />
          </Link>
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <Link href={"?categoria=lazer"}>
            <CardCategoria alt="Lazer" src="/home.svg" text="Lazer" />
          </Link>
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <Link href={"?categoria=alimentacao"}>
            <CardCategoria
              alt="Alimentação"
              src="/fastfood.svg"
              text="Alimentação"
            />
          </Link>
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <Link href={"?categoria=servicos"}>
            <CardCategoria
              alt="Serviços"
              src="/engineering.svg"
              text="Serviços"
            />
          </Link>
        </div>
        <div className="embla__slide flex-shrink-0 flex items-center justify-center ">
          <Link href={"?categoria=lazer"}>
            <CardCategoria alt="Lazer" src="/home.svg" text="Lazer" />
          </Link>
        </div>
      </div>
    </div>
  );
}
