import Campanha from "./_components/Campanha";
import Carousel from "./_components/Carousel";
import { Categoria } from "./_components/Categoria";
import { Footer } from "./_components/Footer";
import { Navibar } from "./_components/Navibar";

export default function Home() {
  const images: string[] = ["/Banner/Banner1.png", "/Banner/Banner2.png"];

  return (
    <div>
      <header>
        <Navibar />

        <Carousel images={images} />
      </header>
      <main className="flex flex-col gap-7 max-w-6xl lg:max-w-[70%] m-auto py-6">
        <div>
          <div className="flex justify-center">
            <h2>Categoria</h2>
          </div>
          <div className="mt-4 px-4">
            <Categoria />
          </div>
        </div>
        <div className="px-4">
          <Campanha />
        </div>
      </main>
      <Footer />
    </div>
  );
}
