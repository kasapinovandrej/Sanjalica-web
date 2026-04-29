"use client";
import React from "react";
import MainContainer from "./UI/MainContainer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "./UI/carousel";
import { Card, CardContent } from "./UI/card";
import Image from "next/image";

// const IMAGES = [
//   "/assets/images/purple-bottle.jpg",
//   "/assets/images/kinder.jpg",
//   "/assets/images/desert.jpg",
//   "/assets/images/blue-basket.jpg",
//   "/assets/images/daire.jpg",
//   "/assets/images/light-colors-bouquet.jpg",
//   "/assets/images/panda.webp",
//   "/assets/images/parfume-bouqet.jpg",
//   "/assets/images/pink-kids-bouqet.webp",
//   "/assets/images/red-bear.jpg",
//   "/assets/images/soft-colors-bouqet.jpg",
// ];

const IMAGES = [
  {
    id: 1,
    name: "Ljubičasti buket",
    src: "/assets/images/purple-bottle.jpg",
    description: "Elegantni ljubičasti buket od sapunskih ruža",
  },
  {
    id: 2,
    name: "Kinder iznenađenje",
    src: "/assets/images/kinder.jpg",
    description: "Slatki poklon aranžman sa Kinder čokoladicama",
  },
  {
    id: 3,
    name: "Pustinjski kaktus",
    src: "/assets/images/desert.jpg",
    description: "Minijaturni kaktus aranžman u kamenoj saksiji",
  },
  {
    id: 4,
    name: "Plava korpa",
    src: "/assets/images/blue-basket.jpg",
    description: "Nežni cvjetni aranžman u plavoj korpi",
  },
  {
    id: 5,
    name: "Daire za devojačko veče",
    src: "/assets/images/daire.jpg",
    description: "Okrugli buket od mirisnih cvjetova",
  },
  {
    id: 6,
    name: "Pastelni buket",
    src: "/assets/images/light-colors-bouquet.jpg",
    description: "Buket u nežnim pastelnim bojama",
  },
  {
    id: 7,
    name: "Panda poklon",
    src: "/assets/images/panda.webp",
    description: "Slatki poklon aranžman sa panda igračkom",
  },
  {
    id: 8,
    name: "Parfemski buket",
    src: "/assets/images/parfume-bouqet.jpg",
    description: "Luksuzni buket kombinovan sa parfemom",
  },
  {
    id: 9,
    name: "Roze dečiji buket",
    src: "/assets/images/pink-kids-bouqet.webp",
    description: "Šareni dečiji buket u roze nijansama",
  },
  {
    id: 10,
    name: "Crveni meda",
    src: "/assets/images/red-bear.jpg",
    description: "Romantični aranžman sa medom i crvenim ružama",
  },
  {
    id: 11,
    name: "Nežni buket",
    src: "/assets/images/soft-colors-bouqet.jpg",
    description: "Buket ruža od sojinog voska u toplim bojama",
  },
];

function CarouselDots() {
  const { api } = useCarousel();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
      setCount(api.scrollSnapList().length);
    };

    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => api?.scrollTo(i)}
          className={`h-2 rounded-full transition-all ${
            i === current ? "bg-sanjalica-roze w-4" : "bg-gray-400 w-2"
          }`}
        />
      ))}
    </div>
  );
}

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {IMAGES.map((gift, index) => (
          <CarouselItem key={index} className="basis md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="p-0">
                <CardContent className="aspect-3/4 p-0 relative">
                  <Image
                    src={gift.src}
                    alt={gift.description}
                    width={0}
                    height={0}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-mt450-pink" />
      <CarouselNext className="bg-mt450-pink" />
      <CarouselDots />
    </Carousel>
  );
}

const Favorites = () => {
  return (
    <div className="bg-mt450-dark/50">
      <MainContainer styles="py-20">
        <h2 className="text-3xl text-center font-bold pb-3">
          Top izbor naših klijenata
        </h2>
        <p className="text-center text-lg text-sanjalica-roze mb-10">
          Kolekcija koju kupci obožavaju
        </p>
        <CarouselSize />
      </MainContainer>
    </div>
  );
};

export default Favorites;
