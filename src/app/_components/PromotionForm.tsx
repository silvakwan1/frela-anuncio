// PromotionForm.tsx

"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import dotEnv from "dotenv";

dotEnv.config();
const url = process.env.NEXT_PUBLIC_URL as string;

const PromotionForm = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [includeLink, setIncludeLink] = useState(false);
  const [includeCupom, setIncludeCupom] = useState(false);
  const [includeLocation, setIncludeLocation] = useState(false);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toString());
          setLongitude(position.coords.longitude.toString());
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
        }
      );
    } else {
      alert("Geolocalização não é suportada neste navegador.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (!includeLink) formData.delete("link");
    if (!includeCupom) formData.delete("cupom");
    if (!includeLocation) {
      formData.set("latitude", latitude);
      formData.set("longitude", longitude);
    }

    try {
      const response = await axios.post(`${url}/post-promocao`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Promoção salva com sucesso!");
        event.currentTarget.reset();
        getLocation();
      } else {
        alert("Erro ao salvar promoção");
      }
    } catch (error) {
      console.error("Erro ao enviar promoção:", error);
      alert("Erro ao enviar promoção");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="mb-8"
    >
      {/* Campos do formulário */}
      <div className="mb-4">
        <label htmlFor="dateStart" className="block font-bold mb-1">
          Data de Início:
        </label>
        <input
          type="date"
          id="dateStart"
          name="dateStart"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dateEnd" className="block font-bold mb-1">
          Data de Fim:
        </label>
        <input
          type="date"
          id="dateEnd"
          name="dateEnd"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="title" className="block font-bold mb-1">
          Título:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Checkbox para incluir o link */}
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={includeLink}
            onChange={() => setIncludeLink(!includeLink)}
            className="mr-2"
          />
          Incluir Link
        </label>
        {includeLink && (
          <input
            type="url"
            id="link"
            name="link"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Insira o link"
          />
        )}
      </div>

      {/* Checkbox para incluir o cupom */}
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={includeCupom}
            onChange={() => setIncludeCupom(!includeCupom)}
            className="mr-2"
          />
          Incluir Cupom
        </label>
        {includeCupom && (
          <input
            type="text"
            id="cupom"
            name="cupom"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Insira o cupom"
          />
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-bold mb-1">
          Descrição:
        </label>
        <textarea
          id="description"
          name="description"
          required
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block font-bold mb-1">
          Imagem:
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Checkbox para usar latitude e longitude manual */}
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={includeLocation}
            onChange={() => setIncludeLocation(!includeLocation)}
            className="mr-2"
          />
          Incluir Latitude e Longitude Manuais
        </label>
        {includeLocation && (
          <>
            <div className="mt-2">
              <label htmlFor="latitude" className="block font-bold mb-1">
                Latitude:
              </label>
              <input
                type="text"
                id="latitude"
                name="latitude"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Insira a latitude"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="longitude" className="block font-bold mb-1">
                Longitude:
              </label>
              <input
                type="text"
                id="longitude"
                name="longitude"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Insira a longitude"
              />
            </div>
          </>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Salvar Promoção
      </button>
    </form>
  );
};

export default PromotionForm;
