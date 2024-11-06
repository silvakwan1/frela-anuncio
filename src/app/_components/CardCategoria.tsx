import Image from "next/image";
interface propsCard {
  alt: string;
  src: string;
  text: string;
}
export function CardCategoria({ alt, src, text }: propsCard) {
  return (
    <div className="flex flex-shrink-0 justify-center items-center flex-col p-2 gap-3 w-24 h-24 rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border">
      <div>
        <Image
          alt={alt}
          src={src}
          width={50}
          height={50}
          className=" w-full"
          priority
        />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}
