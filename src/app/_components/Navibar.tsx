import Image from "next/image";

export function Navibar() {
  return (
    <nav className="fixed top-0 w-screen z-10 flex justify-between px-10 py-4 bg-[#00000046] ">
      <div>
        <h1> Logo</h1>
      </div>
      <div className=" flex justify-center items-center gap-1">
        <p className="text-yellow-300">Anuncie aqui</p>
        <span>
          <Image
            alt="foto de um campaign"
            src="/campaign.svg"
            width={24}
            height={24}
          />
        </span>
      </div>
    </nav>
  );
}
