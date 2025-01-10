import Image from "next/image";

interface propsCard {
  Src: string;
  Alt: string;
  timeEnd: string;
  title: string;
}

export function CardCampanha({ Src, Alt, timeEnd, title }: propsCard) {
  return (
    <>
      <div className="h-60 w-full  justify-center items-center bg-slate-50 p-1">
        <Image
          alt={Alt}
          src={Src}
          width={1000}
          height={1000}
          quality={100}
          priority
          className="object-contain h-full w-full"
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
    </>
  );
}
