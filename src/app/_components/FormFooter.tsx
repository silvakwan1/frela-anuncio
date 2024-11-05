"use client";
import React, { useState } from "react";

export function FormFooter() {
  const [name, setName] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Nome:", name);
    console.log("WhatsApp:", whatsapp);
    console.log("Email:", email);

    // Limpar os campos após o envio
    setName("");
    setWhatsapp("");
    setEmail("");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between p-6 bg-gray-900 text-white">
      <div className="flex flex-col justify-center w-full sm:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-2">Preencha o formulário!</h2>
        <p className="mb-2">
          Receba dicas, ofertas exclusivas e novidades, tudo em primeira mão!
        </p>
        <p>Endereço: Zona Leste, SP</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-full sm:w-1/2 p-4 space-y-4"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
          required
        />
        <input
          type="text"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="WhatsApp"
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
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
