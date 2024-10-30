import Image from "next/image";

export function Destaques() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="flex-none w-32 h-32 rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <Image
            alt="Campaign Image"
            src="/campaign.svg"
            width={100}
            height={100}
            className="object-cover"
            priority
          />
        </div>
      ))}
    </div>
  );
}
