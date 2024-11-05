import Image from "next/image";
import Link from "next/link";

export function NavFooter() {
  return (
    <div className="h-12 bg-slate-950 items-center flex justify-between p-2">
      <div className=" flex gap-1  h-full">
        <Link
          href="https://www.instagram.com/encontre_ofertas_oficial/profilecard/?igsh=OWpvd2RtNGV6Z2Nw"
          target="_blank"
        >
          <Image
            alt={"logo instagram"}
            src="./instagram.svg"
            width={40}
            height={40}
            className="h-full"
            priority
          />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=+5511941052382&text=Ol%C3%A1%21+%F0%9F%98%8A+Gostaria+de+anunciar+no+Encontre+Ofertas.+%F0%9F%92%B0"
          target="_blank"
        >
          <Image
            alt={"logo whatsapp"}
            src="./whatsapp.svg"
            width={40}
            height={40}
            className="h-full"
            priority
          />
        </Link>
      </div>
      <div className="">
        <p className="text-gray-400 text-center text-sm sm:text-base mt-4">
          © 2024 Todos os direitos reservados.
          <span className="font-semibold">®</span>
        </p>
      </div>
    </div>
  );
}
