import Link from "next/link";

export function Navibar() {
  return (
    <nav className="flex z-40 flex-col sm:flex-row justify-between items-center p-4 bg-blue-800 space-y-4 sm:space-y-0">
      <div className="logo flex flex-row sm:flex-row items-center sm:space-x-2 text-2xl xs:text-3xl sm:text-4xl font-black uppercase tracking-wide">
        <span className="logo-text text-white font-bold italic opacity-90 animate-glow shadow-white">
          Encontre
        </span>
        <span className="logo-highlight text-yellow-400 font-bold relative animate-pulse">
          Ofertas
          <span className="absolute bottom-[-8px] left-0 w-full h-[5px] bg-gradient-to-r from-yellow-400 to-orange-400 opacity-80 rounded-md" />
        </span>
      </div>

      <Link
        href={
          "https://api.whatsapp.com/send?phone=+5511941052382&text=Ol%C3%A1%21+%F0%9F%98%8A+Gostaria+de+anunciar+no+Encontre+Ofertas.+%F0%9F%92%B0"
        }
        target="_blank"
        className="advertise-button px-2 py-1 text-xs xs:text-sm sm:text-base font-bold text-blue-800 bg-yellow-400 border-2 border-yellow-400 rounded-lg shadow-md transition-transform transform hover:bg-yellow-500 hover:text-white hover:scale-105 focus:outline-none focus:border-yellow-500"
      >
        Anuncie aqui
      </Link>
    </nav>
  );
}
