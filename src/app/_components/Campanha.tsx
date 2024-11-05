"use client";

import { useEffect, useState } from "react";
import { CardCampanha } from "./CardCampanha";
import { CardDefoult } from "./CardDefoult";
import { fetchPromocoesPorLocalizacao } from "../api/fetchPromocoesPorLocalizacao";
import { fetchTodasPromocoes } from "../api/fetchTodasPromocoes";
import { Promocao } from "../api/interfeces";

const getDate = (dateEnd: string): string => {
  const today = new Date();
  const endDate = new Date(dateEnd);

  const differenceInTime = endDate.getTime() - today.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

  return `restam ${differenceInDays} dias`;
};

function Campanha() {
  const [promocoes, setPromocoes] = useState<Promocao[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getPromocoes(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error(error);
          buscarTodasPromocoes();
        }
      );
    } else {
      buscarTodasPromocoes();
    }
  }, []);

  const getPromocoes = async (latitude: number, longitude: number) => {
    try {
      const promocoes = await fetchPromocoesPorLocalizacao(latitude, longitude);
      if (promocoes.length === 0) {
        await buscarTodasPromocoes();
      } else {
        setPromocoes(promocoes);
      }
    } catch (error) {
      console.error("Erro ao buscar promoções:", error);
      await buscarTodasPromocoes();
    }
  };

  const buscarTodasPromocoes = async () => {
    try {
      const promocoes = await fetchTodasPromocoes();
      setPromocoes(promocoes);
    } catch (error) {
      console.error("Erro ao buscar todas as promoções:", error);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 justify-normal border-2 p-4 rounded-lg mx-auto shadow-inner-lg w-full">
      {promocoes.length > 0 ? (
        promocoes.map((promocao, index) => (
          <CardCampanha
            key={index}
            Alt={promocao.title}
            Src={`data:image/png;base64,${Buffer.from(
              promocao.image.data
            ).toString("base64")}`}
            timeEnd={getDate(promocao.dateEnd)}
            title={promocao.title}
          />
        ))
      ) : (
        <CardDefoult />
      )}
    </div>
  );
}

export default Campanha;
