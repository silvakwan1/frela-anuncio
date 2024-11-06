"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Promocao } from "../api/interfeces";

interface CampanhaFilterProps {
  promocoes: Promocao[];
  onFilter: (filteredPromocoes: Promocao[]) => void;
}

export default function CampanhaFilter({
  promocoes,
  onFilter,
}: CampanhaFilterProps) {
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria");

  useEffect(() => {
    // Se a categoria não estiver definida, mostra todas as promoções
    if (!categoria) {
      onFilter(promocoes);
    } else {
      // Filtra as promoções pela categoria especificada
      const filtered = promocoes.filter(
        (promo) => promo.categoria === categoria
      );
      onFilter(filtered);
    }
  }, [categoria, promocoes, onFilter]);

  return null; // Este componente não precisa renderizar nada.
}
