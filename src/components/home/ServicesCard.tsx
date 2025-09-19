import { NextPage } from "next";
import { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  title: string;
  description: string;
}

const ServicesCard: NextPage<Props> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 border p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#3A86FF33] text-[#3A86FF] text-3xl">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-lg font-semibold">{title}</h4>

      {/* Description */}
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServicesCard;
