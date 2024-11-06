"use client";
import React, { useState } from "react";
import axios from "axios";
import dotEnv from "dotenv";

dotEnv.config();
const url = process.env.NEXT_PUBLIC_URL as string;

interface UserData {
  nome: string;
  whatsApp: string;
  email: string;
}

export function FormFooter() {
  const [name, setName] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedWhatsapp = "+55" + whatsapp.replace(/\D/g, "");
    console.log("Formatted WhatsApp:", formattedWhatsapp); // Log para verificar o WhatsApp formatado

    const userData: UserData = {
      nome: name,
      whatsApp: formattedWhatsapp,
      email: email,
    };

    console.log("User data sent:", userData);

    try {
      const response = await axios.post(`${url}/post-vipuser`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        console.log("Usuário VIP cadastrado com sucesso:", response.data);
        setName("");
        setWhatsapp("");
        setEmail("");
        setErrorMessage("");
        setSuccessMessage("Mensagem enviada com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      setErrorMessage(
        "Este usuário já está cadastrado. Tente outro email ou número de WhatsApp."
      );
      setSuccessMessage("");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between p-6 bg-gray-900 text-white">
      <div className="flex flex-col justify-center w-full sm:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-2">Preencha o formulário!</h2>
        <p className="mb-2">
          Receba dicas, ofertas exclusivas e novidades, tudo em primeira mão!
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-full sm:w-1/2 p-4 space-y-4"
      >
        {errorMessage && (
          <div className="text-red-500 mb-2">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="text-green-500 mb-2">{successMessage}</div> // Exibir mensagem de sucesso
        )}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400 text-black"
          required
        />
        <input
          type="text"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, ""))} // Remover qualquer caractere não numérico
          placeholder="WhatsApp (apenas números)"
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400 text-black"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400 text-black"
          required
        />
        <button
          type="submit"
          className="bg-blue-300 text-blue-900 font-bold py-2 rounded-lg hover:bg-blue-400 transition"
        >
          Seja VIP
        </button>
      </form>
    </div>
  );
}
