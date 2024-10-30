import Image from "next/image";

export function Navibar() {
  return (
    <nav className="flex justify-between px-10 py-4">
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
