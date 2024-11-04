"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { CardCampanha } from "./CardCampanha";

// Definição da interface para a promoção
interface Promocao {
  title: string;
  image: {
    data: string; // Aqui, 'data' é o formato que o seu backend está enviando
  };
  timeEnd: string; // Ajuste o tipo se necessário
}

function Campanha() {
  const [promocoes, setPromocoes] = useState<Promocao[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getData(position.coords.latitude, position.coords.longitude);
        },
        (error) => console.error(error)
      );
    }
  }, []);

  async function getData(latitude: number, longitude: number) {
    try {
      const response = await axios.get<Promocao[]>(
        `http://localhost:3333/promocoes?latitude=${latitude}&longitude=${longitude}`
      );

      // Converte o Buffer em Base64
      const promocoesComImagemBase64 = response.data.map((promocao) => ({
        ...promocao,
        image: {
          data: `data:image/png;base64,${Buffer.from(
            promocao.image.data
          ).toString("base64")}`,
        },
      }));

      console.log(promocoesComImagemBase64);
      setPromocoes(promocoesComImagemBase64);
    } catch (error) {
      console.error("Erro ao buscar promoções:", error);
    }
  }

  return (
    <div className="flex flex-wrap gap-4 justify-normal border-2 p-4 rounded-lg mx-auto shadow-inner-lg w-full">
      {promocoes.length > 0 ? (
        promocoes.map((promocao, index) => (
          <CardCampanha
            key={index}
            Alt={promocao.title}
            Src={promocao.image.data} // Corrigido para passar a string correta
            timeEnd={promocao.timeEnd}
            title={promocao.title}
          />
        ))
      ) : (
        <p>Carregando promoções...</p>
      )}
    </div>
  );
}

export default Campanha;
