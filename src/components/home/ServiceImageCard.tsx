import { NextPage } from "next";
import Image from "next/image";


const services = [
    {
        image:'/wedding.jpg',
        title:'Wedding Photography',
        description: "Capture your special day with elegant, timeless photography that tells your unique love story"
    },
    {
        image: '/woman2.jpg',
        title:'Birthday Celebrations',
        description:'Preserve joyful birthday moments with vibrant, candid photography that captures pure happiness.'
    },
    {
        image:'/grad2.jpg',
        title:'Event Videography',
        description:'Professional video production for corporate events, celebrations, and special occasions.'
    },
    {
        image:'/woman.jpg',
        title:'Photo Editing',
        description:'Expert post-processing and retouching to enhance your photos with professional polish.'
    }
]

const ServiceImageCard: NextPage =() => {
    return(
        <div className="relative w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto px-4">
            {services.map((service, index)=>(
            <div key={index} className="relative w-full sm:max-w-[400px] h-[300px]">
            <Image
                src={service.image}
                alt={service.title}
                fill
                className="rounded-2xl object-cover object-[50%_30%]"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl"></div>

            {/* Navy text background covering bottom 40–50% */}
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-[#0A192F] bg-opacity-80 rounded-b-2xl px-4 py-3 text-white flex flex-col justify-end border border-t-0">
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="text-sm">{service.description}</p>
            </div>
            </div>


            ))}

            </div>
        </div>
    )
}
export default ServiceImageCard;