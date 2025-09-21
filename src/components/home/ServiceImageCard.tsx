import { NextPage } from "next";
import Image from "next/image";
import { title } from "process";

const services = [
    {
        image:'/woman.jpg',
        title:'Wedding Photography',
        description: "Capture your special day with elegant, timeless photography that tells your unique love story"
    },
    {
        image: '/woman2.jpg',
        title:'Birthday Celebrations',
        description:'Preserve joyful birthday moments with vibrant, candid photography that captures pure happiness.'
    },
    {
        image:'/heroImage.jpg',
        title:'Event Videography',
        description:'Professional video production for corporate events, celebrations, and special occasions.'
    },
    {
        image:'/photographer.jpg',
        title:'Photo Editing',
        description:'Expert post-processing and retouching to enhance your photos with professional polish.'
    }
]

const ServiceImageCard: NextPage =() => {
    return(
        <div className="relative w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
            {services.map((service, index)=>(
            <div key={index} className="relative w-full sm:max-w-[400px] h-[300px]">
            <Image
                src={service.image}
                alt={service.title}
                fill
                className="sm:rounded-2xl object-cover object-[50%_20%] "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent sm:rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4">
                <h4>{service.title}</h4>
                <p className="text-sm">
                    {service.description}
                </p>
            </div>
            </div>

            ))}

            </div>
        </div>
    )
}
export default ServiceImageCard;