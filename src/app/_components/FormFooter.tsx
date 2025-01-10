"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import dotEnv from "dotenv";

dotEnv.config();
const url = process.env.NEXT_PUBLIC_URL as string;

interface UserData {
  nome: string;
  whatsApp: string;
  email: string;
}

export function FormFooter() {
  const [formData, setFormData] = useState<UserData>({
    nome: "",
    whatsApp: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedWhatsapp = "+55" + formData.whatsApp.replace(/\D/g, "");
    const userFormData = new FormData();
    userFormData.append("nome", formData.nome);
    userFormData.append("whatsApp", formattedWhatsapp);
    userFormData.append("email", formData.email);

    try {
      const response = await fetch(`${url}/create/vip-user`, {
        method: "POST",
        body: userFormData,
      });

      if (response.ok) {
        setFormData({
          nome: "",
          whatsApp: "",
          email: "",
        });
        setErrorMessage("");
        setSuccessMessage("Mensagem enviada com sucesso!");
      } else {
        setErrorMessage(
          "Este usuário já está cadastrado. Tente outro email ou número de WhatsApp."
        );
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      setErrorMessage(
        "Erro ao enviar o formulário. Por favor, tente novamente."
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
        encType="multipart/form-data"
      >
        {errorMessage && (
          <div className="text-red-500 mb-2">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="text-green-500 mb-2">{successMessage}</div>
        )}
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome"
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400 text-black"
          required
        />
        <input
          type="text"
          name="whatsApp"
          value={formData.whatsApp}
          onChange={handleChange}
          placeholder="WhatsApp (apenas números)"
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400 text-black"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
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
