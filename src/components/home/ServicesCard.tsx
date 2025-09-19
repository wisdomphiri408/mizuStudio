import { NextPage } from "next";
import { ReactElement } from "react";

interface Props {
    icon:ReactElement;
    title:string;
    description:string;
}

const ServicesCard: NextPage <Props>= ({
    icon = '',
    title = '',
    description =''
}) => {
    return(
        <div className=" flex flex-col gap-4 items-center md:max-w-[300px] border p-4 shadow-lg rounded-xl hover:shadow-xl hover:border-2 transition-shadow cursor-pointer">
            <div className="border p-2 rounded-full text-[#3A86FF] bg-[#3A86FF33]">{icon}</div>
            <h4>{title}</h4>
            <p className="text-sm">{description}</p>
        </div>
    )
}

export default ServicesCard;