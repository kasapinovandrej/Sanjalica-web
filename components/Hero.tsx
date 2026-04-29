import Image from "next/image";
import { Button } from "./UI/button";

const Hero = () => {
  return (
    <section className="h-dvh relative ">
      <Image
        src="/assets/images/bg-light-rose.png"
        alt="Hero"
        fill
        className="absolute w-full h-full object-cover object-[70%_50%] md:object-center"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/80" />
      <div className="relative z-10 flexh-full max-w-7xl px-5 mx-auto h-full flex justify-center flex-col pt-20 md:pt-0">
        <p className="text-mt450-white text-lg md:text-xl mb-2.5">
          {/* Napravljeno s ljubavlju, darovano od srca */}
          Kad reči nisu dovoljne — tu smo mi.
        </p>
        <h1 className="text-[36px] md:text-[64px] leading-10 md:leading-15 font-extrabold max-w-2xl mb-7.5 text-mt450-white">
          Izrada buketa i poklona po meri, sa ljubavlju i pažnjom.
        </h1>
        <p className="max-w-160.25 text-cream mb-7.5 text-sm md:text-base leading-6.5">
          Ručno rađeni buketi od sojinog voska, slatki aranžmani i nezaboravni
          pokloni za svaku priliku — spoj umetnosti, mirisa i pažljivo biranih
          detalja koji donose radost i eleganciju svakom prostoru. Svaki komad
          je izrađen s ljubavlju i pažnjom, kako bi postao savršen poklon koji
          ostavlja dugotrajan utisak
        </p>
        <div>
          <Button
            variant="default"
            className="text-sm md:text-base p-5 bg-mt450-pink cursor-pointer md:hover:text-mt450-dark"
          >
            Pogledaj proizvode
          </Button>
          <Button
            variant="default"
            className="text-sm md:text-base p-5 text-mt450-pink ml-5 cursor-pointer md:hover:text-mt450-dark bg-mt450-white"
          >
            Kontaktiraj nas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
