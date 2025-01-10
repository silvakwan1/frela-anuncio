import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardDetailProps {
  title: string;
  imageSrc: string;
  timeEnd: string;
  link: string;
  cupom: string;
  description: string;

  onClose: () => void;
}

const CardDetail: React.FC<CardDetailProps> = ({
  title,
  imageSrc,
  timeEnd,
  link,
  cupom,
  description,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50  px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4  bg-red-500 text-white  hover:bg-red-600 hover:text-gray-900 transition py-2 px-4 rounded-full text-2xl "
          aria-label="Fechar"
        >
          &times;
        </button>
        <Image
          src={imageSrc}
          alt={title}
          height={1000}
          width={1000}
          quality={100}
          priority
          className="mb-4 max-h-96 h-full w-full rounded-md"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-500">{title}</h2>
          <p className="font-sans">{description}</p>
          <div className="mt-2">
            <div className="flex justify-between">
              {cupom && (
                <p className="border-2 inline-block px-4 rounded-md mr-4">
                  cupom: <span className="text-red-500">{cupom}</span>
                </p>
              )}
              {link && (
                <Link className="underline text-blue-700 " href={link}>
                  Ir para pagina
                </Link>
              )}{" "}
            </div>

            <p className="text-lg  text-red-500 text-end">{timeEnd}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
