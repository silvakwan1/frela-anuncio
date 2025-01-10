"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import dotEnv from "dotenv";
dotEnv.config();
const url = process.env.NEXT_PUBLIC_URL as string;

interface FormDataState {
  date_start: string;
  date_end: string;
  title: string;
  link: string;
  cupom: string;
  description: string;
  categoria: string;
  latitude: string;
  longitude: string;
  image: File | null;
}

export default function PromotionForm() {
  const [formData, setFormData] = useState<FormDataState>({
    date_start: "",
    date_end: "",
    title: "",
    link: "",
    cupom: "",
    description: "",
    categoria: "",
    latitude: "",
    longitude: "",
    image: null,
  });

  const categories = [
    "tecnologia",
    "moda",
    "educacao",
    "esportes",
    "alimentacao",
    "servicos",
    "lazer",
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();

    for (const key in formData) {
      const value = formData[key as keyof FormDataState];
      if (value !== null) {
        form.append(key, value);
      }
    }

    try {
      const response = await fetch(`${url}/create/promotion`, {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        alert(
          "Promotion created successfully!\n" + JSON.stringify(result, null, 2)
        );
        setFormData({
          date_start: "",
          date_end: "",
          title: "",
          link: "",
          cupom: "",
          description: "",
          categoria: "",
          latitude: "",
          longitude: "",
          image: null,
        });
      } else {
        alert("Error: " + result.detail);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Criar Promoção
      </h1>
      <form
        onSubmit={submitForm}
        encType="multipart/form-data"
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="date_start"
            className="block text-sm font-medium text-gray-700"
          >
            Start Date
          </label>
          <input
            type="date"
            id="date_start"
            name="date_start"
            value={formData.date_start}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="date_end"
            className="block text-sm font-medium text-gray-700"
          >
            End Date
          </label>
          <input
            type="date"
            id="date_end"
            name="date_end"
            value={formData.date_end}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="link"
            className="block text-sm font-medium text-gray-700"
          >
            Link
          </label>
          <input
            type="url"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="cupom"
            className="block text-sm font-medium text-gray-700"
          >
            Cupom
          </label>
          <input
            type="text"
            id="cupom"
            name="cupom"
            value={formData.cupom}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            required
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="categoria"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="" disabled>
              Categoria
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="latitude"
              className="block text-sm font-medium text-gray-700"
            >
              Latitude
            </label>
            <input
              type="number"
              step="any"
              id="latitude"
              name="latitude"
              placeholder="0 caso oline"
              value={formData.latitude}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="longitude"
              className="block text-sm font-medium text-gray-700"
            >
              Longitude
            </label>
            <input
              type="number"
              step="any"
              id="longitude"
              name="longitude"
              placeholder="0 caso oline"
              value={formData.longitude}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="inline-block w-full px-6 py-3 text-white bg-indigo-600 font-medium text-sm leading-tight uppercase rounded-md shadow-md hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
