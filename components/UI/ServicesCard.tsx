type ServiceType = {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const ServicesCard = ({ service }: { service: ServiceType }) => {
  return (
    <div className="bg-[#18181b] p-6 rounded-xl border border-[#561136]  hover:border-pink-600/50 transition-colors group w-full">
      <div className="flex flex-col justify-center items-center mb-4 gap-4">
        <div className="bg-[#561136] group-hover:bg-pink-600/50 rounded-full w-16 h-16 flex justify-center items-center transition-colors">
          {service.icon}
        </div>
        <h3 className="text-xl text-center font-bold mb-2">{service.title}</h3>
      </div>
      <p className="text-[#b37499] text-center ">{service.description}</p>
    </div>
  );
};

export default ServicesCard;
