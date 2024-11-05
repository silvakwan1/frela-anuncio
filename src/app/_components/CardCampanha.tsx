import Image from "next/image";

interface propsCard {
  Src: string;
  Alt: string;
  timeEnd: string;
  title: string;
}

export function CardCampanha({ Src, Alt, timeEnd, title }: propsCard) {
  return (
    <div className="flex-shrink-0 h-64 w-full sm:w-60 md:w-60 lg:w-60 rounded-xl border-2 shadow-lg overflow-hidden">
      <div className="h-48 w-full flex justify-center items-center bg-slate-950">
        <Image
          alt={Alt}
          src={Src}
          width={100}
          height={100}
          priority
          className="h-full w-full"
        />
      </div>
      <div className="px-2 flex flex-col gap-2">
        <div className="mt-2">
          <h3 className="text-red-600">{title}</h3>
        </div>
        <div className="">
          <p className="text-end text-red-400 text-sm">{timeEnd}</p>
        </div>
      </div>
    </div>
  );
}
