import React from "react";
import MainContainer from "./UI/MainContainer";
import ServicesCard from "./UI/ServicesCard";
import { Candy, Gift, Rose } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Izrada buketa po meri",
    // description:
    //   "Naši buketi su ručno rađeni od sojinog voska, pažljivo oblikovani i dekorisani kako bi stvorili savršen poklon za svaku priliku. Bilo da želite elegantan aranžman za rođendan, romantični buket za godišnjicu ili jedinstven poklon za posebnu osobu, naši buketi su savršen izbor.",
    description:
      "Ručno rađeni buketi od sojinog voska, prilagođeni svakoj prilici — rođendan, godišnjica ili poseban poklon.",
    icon: <Rose color="#fb64b6" />,
  },
  {
    id: 2,
    title: "Slatki aranžmani",
    // description:
    //   "Naši slatki aranžmani su savršen spoj umetnosti i ukusa. Bilo da želite da iznenadite nekoga sa kutijom punom slatkiša ili da dodate poseban dodir vašem poklonu, naši slatki aranžmani su idealni za svaku priliku.",
    description:
      "Spoj umetnosti i ukusa — savršen način da iznenadite nekoga i ulepšate svaki poklon.",
    icon: <Candy color="#fb64b6" />,
  },
  {
    id: 3,
    title: "Personalizovani pokloni",
    // description:
    //   "Naši personalizovani pokloni su savršen način da izrazite svoju ljubav i pažnju. Bilo da želite da dodate ime, posebnu poruku ili jedinstveni detalj, naši personalizovani pokloni su savršen izbor za one koji žele da ostave dugotrajan utisak.",
    description:
      "Dodajte ime, poruku ili poseban detalj i stvorite poklon koji ostavlja trajan utisak.",
    icon: <Gift color="#fb64b6" />,
  },
];

const Services = () => {
  return (
    <MainContainer styles="py-20">
      <div className="mb-10">
        <h2 className="text-3xl text-center font-bold mb-3">Naše usluge</h2>
        <p className="text-center text-lg text-[#b37499]">
          Stvaramo nezaboravne trenutke
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10">
        {services.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </MainContainer>
  );
};

export default Services;
