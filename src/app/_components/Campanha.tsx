"use client";
import { Suspense, useEffect, useState } from "react";
import { CardCampanha } from "./CardCampanha";
import { CardDefoult } from "./CardDefoult";
import { fetchPromocoesPorLocalizacao } from "../api/fetchPromocoesPorLocalizacao";
import { fetchTodasPromocoes } from "../api/fetchTodasPromocoes";
import { Promocao } from "../api/interfeces";
import CardDetail from "./CardDetail";
import CampanhaFilter from "./CampanhaFilter";
import Loading from "./Loading";

const getDate = (dateEnd: string): string => {
  const today = new Date();
  const endDate = new Date(dateEnd);
  const differenceInTime = endDate.getTime() - today.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
  return `restam ${differenceInDays} dias`;
};

function Campanha() {
  const [promocoes, setPromocoes] = useState<Promocao[]>([]);
  const [filteredPromocoes, setFilteredPromocoes] = useState<Promocao[]>([]);
  const [selectedPromo, setSelectedPromo] = useState<Promocao | null>(null);
  const url = process.env.NEXT_PUBLIC_URL as string;

  useEffect(() => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (!position.coords.latitude) {
            buscarTodasPromocoes();
          } else {
            getPromocoes(position.coords.latitude, position.coords.longitude);
          }
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
      setPromocoes(
        promocoes.length > 0 ? promocoes : await fetchTodasPromocoes()
      );
    } catch (error) {
      console.error("Erro ao buscar promoções:", error);
      buscarTodasPromocoes();
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

  const handleCardClick = (promocao: Promocao) => setSelectedPromo(promocao);

  const closeDetail = () => setSelectedPromo(null);

  return (
    <div className="flex flex-wrap gap-4 justify-normal border-2 p-4 rounded-lg mx-auto shadow-inner-lg w-full">
      <Suspense fallback={<Loading />}>
        <CampanhaFilter promocoes={promocoes} onFilter={setFilteredPromocoes} />
      </Suspense>

      {/* Verificar se existem promoções filtradas */}
      {filteredPromocoes.length > 0 ? (
        filteredPromocoes.map((promocao, index) => (
          <div
            className="flex-shrink-0 h-80 w-full sm:w-56 md:w-60 lg:w-72 rounded-xl border-2 shadow-lg overflow-hidden opacity-0 animate-fade-in transition-opacity duration-500"
            key={index}
            onClick={() => handleCardClick(promocao)}
          >
            <CardCampanha
              Alt={promocao.title}
              Src={`${url}/${promocao.image.replace(/\\/g, "/")}`}
              timeEnd={getDate(promocao.dateEnd)}
              title={promocao.title}
            />
          </div>
        ))
      ) : (
        // Mensagem quando não há promoções
        <div className="w-full text-center text-xl text-gray-500 opacity-0 animate-fade-in transition-opacity duration-500">
          Nenhuma promoção encontrada.
        </div>
      )}

      {selectedPromo && (
        <CardDetail
          title={selectedPromo.title}
          imageSrc={`${url}/${selectedPromo.image.replace(/\\/g, "/")}`}
          timeEnd={getDate(selectedPromo.dateEnd)}
          cupom={selectedPromo.cupom}
          link={selectedPromo.link}
          description={selectedPromo.description}
          onClose={closeDetail}
        />
      )}
    </div>
  );
}

export default Campanha;
