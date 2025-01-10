"use client";
import React, { useState } from "react";
import { Promocao } from "@/app/api/interfeces";
import { fetchTodasPromocoes } from "../api/fetchTodasPromocoes";
import axios from "axios";
import dotEnv from "dotenv";

const PromotionList = () => {
  const [promotions, setPromotions] = useState<Promocao[]>([]);

  dotEnv.config();
  const url = process.env.NEXT_PUBLIC_URL as string;

  const fetchNearbyPromotions = async () => {
    try {
      const fetchedPromotions = await fetchTodasPromocoes();
      setPromotions(fetchedPromotions);
    } catch (error) {
      console.error("Erro ao buscar promoções:", error);
    }
  };

  const deletePromocao = async (id: string) => {
    try {
      console.log(id);
      const response = await axios.delete(`${url}/promocoes/delete/${id}`);
      if (response.status === 200) {
        alert("Promoção excluída com sucesso!");
        setPromotions(promotions.filter((promo) => promo.id !== id));
      } else {
        alert("Erro ao excluir a promoção.");
      }
    } catch (error) {
      console.error("Erro ao excluir promoção:", error);
      alert("Erro ao excluir promoção.");
    }
  };

  return (
    <div>
      <h1 className="text-center text-xl font-bold mb-4 overflow-hidden">
        Promoções
      </h1>
      <button
        onClick={fetchNearbyPromotions}
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Buscar Promoções
      </button>
      <div className="mt-4" id="promotion-list">
        {promotions.length === 0 ? (
          <p>Buscar todas promoções...</p>
        ) : (
          promotions.map((promo) => (
            <div
              key={promo.id}
              className="promotion border border-gray-300 p-4 mb-2 rounded overflow-hidden "
            >
              <h2 className="font-bold">{promo.title}</h2>
              <p>
                <strong>Data de Início:</strong> {promo.dateStart}
              </p>
              <p>
                <strong>Data de Fim:</strong> {promo.dateEnd}
              </p>
              <p>
                <strong>Link:</strong>{" "}
                <a
                  href={promo.link}
                  target="_blank"
                  className="text-ellipsis w-full"
                  rel="noopener noreferrer"
                >
                  {promo.link}
                </a>
              </p>
              <p>
                <strong>Cupom:</strong> {promo.cupom}
              </p>
              <p>
                <strong>Descrição:</strong> {promo.description}
              </p>
              <button
                onClick={() => deletePromocao(promo.id)}
                className="bg-red-500 text-white py-1 px-2 mt-2 rounded"
              >
                Excluir Promoção
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PromotionList;
