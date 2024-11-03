"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { CardCampanha } from "./CardCampanha";

function Campanha() {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [promocoes, setPromocoes] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position);
          getData(position.coords.latitude, position.coords.longitude);
        },
        (error) => console.error(error)
      );
    }
  }, []);

  async function getData(latitude: number, longitude: number) {
    try {
      const response = await axios(
        `http://localhost:3333/promocoes?latitude=${latitude}&longitude=${longitude}`
      );

      // Converte o Buffer em Base64
      const promocoesComImagemBase64 = response.data.map((promocao: any) => ({
        ...promocao,
        image: `data:image/png;base64,${Buffer.from(
          promocao.image.data
        ).toString("base64")}`,
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
            Src={promocao.image}
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
