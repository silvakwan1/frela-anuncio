import Carousel from "./_components/Carousel";
import { Destaques } from "./_components/Destaques";
import { Navibar } from "./_components/Navibar";

export default function Home() {
  const images: string[] = ["/Banner/Banner 1.png", "/Banner/Banner 2.png"];
  return (
    <div>
      <header>
        <div className=" mb-20">
          <Navibar />
        </div>
        <div className="px-4">
          <Carousel images={images} />
        </div>
      </header>
      <main>
        <div>
          <div>
            <div className="flex justify-center">
              <h2>Destaques</h2>
            </div>
            <div>
              <Destaques />
              <Destaques />
              <Destaques />
              <Destaques />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
