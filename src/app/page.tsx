import Carousel from "./_components/Carousel";
import { Categoria } from "./_components/Categoria";
import { Navibar } from "./_components/Navibar";

export default function Home() {
  const images: string[] = ["/Banner/Banner1.png", "/Banner/Banner2.png"];
  return (
    <div>
      <header>
        <div className="h-20">
          <Navibar />
        </div>
        <div className="px-4">
          <Carousel images={images} />
        </div>
      </header>
      <main className="flex flex-col m-auto py-6">
        <div>
          <div>
            <div className="flex justify-center">
              <h2>Categoria</h2>
            </div>
            <div className="mt-4">
              <Categoria />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
