"use client";
import React, { useState } from "react";
import { Promocao } from "@/app/api/interfeces";
import { fetchTodasPromocoes } from "../api/fetchTodasPromocoes";

const PromotionList = () => {
  const [promotions, setPromotions] = useState<Promocao[]>([]);

  const fetchNearbyPromotions = async () => {
    try {
      const fetchedPromotions = await fetchTodasPromocoes();
      setPromotions(fetchedPromotions);
    } catch (error) {
      console.error("Erro ao buscar promoções:", error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-xl font-bold mb-4">Promoções </h1>
      <button
        onClick={fetchNearbyPromotions}
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Buscar Promoções
      </button>
      <div className="mt-4" id="promotion-list">
        {promotions.length === 0 ? (
          <p>buscar todas promoçoes...</p>
        ) : (
          promotions.map((promo) => (
            <div
              key={promo.id}
              className="promotion border border-gray-300 p-4 mb-2 rounded"
            >
              <h2 className="font-bold">{promo.title}</h2>
              <p>
                <strong>Data de Início:</strong> {promo.dateStart}
              </p>
              <p>
                <strong>Data de Fim:</strong> {promo.dateEnd}
              </p>
              <p>
                <strong>Link:</strong>
                <a href={promo.link} target="_blank" rel="noopener noreferrer">
                  {promo.link}
                </a>
              </p>
              <p>
                <strong>Cupom:</strong> {promo.cupom}
              </p>
              <p>
                <strong>Descrição:</strong> {promo.description}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PromotionList;
