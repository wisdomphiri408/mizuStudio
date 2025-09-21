import Hero from "@/components/home/Hero";
import ServicesCard from "@/components/home/ServicesCard";
import Image from "next/image";
import { Heart, Camera, VideoIcon, Edit } from "lucide-react";
import ServiceImageCard from "@/components/home/ServiceImageCard";

export default function Home() {
  return (
    <div>
      {/* Hero section*/}
      <Hero />

      {/*About section */}
      <div className="grid lg:grid-cols-2 gap-6 items-center mt-8 max-w-[1500px] mx-auto sm:p-8">
        <div className="flex flex-col gap-4 lg:gap-4 mx-auto  max-w-[900px]  px-4">
          <h2>About <span className="text-emphasis">MizuStudios</span></h2>
          <p className="md:text-lg leading-relaxed">
            Based in the vibrant city of Blantyre, MizuStudios is your premier destination
            for professional photography and videography. We capture life’s most precious
            moments with artistic vision and technical excellence — from weddings and
            corporate events to birthdays and creative portraits.
          </p>

        </div>

    
      <div className="relative w-full lg:max-w-[600px] mx-auto h-96 sm:h-80 lg:h-96">
        <Image
          src="/photographer.jpg"
          alt="photographer"
          fill
          className="object-cover object-[50%_20%] lg:object-[50%_30%] sm:rounded-xl shadow-lg"
          priority
        />
      </div>


      </div>

      {/*Services Setion */}
      <div className="text-center sm:px-8 mt-10">
        <h2 className="px-4">
          Our <span className="text-emphasis">Services</span>
        </h2>
        <p className="max-w-[750px] mx-auto md:text-lg leading-relaxed px-4">
          We offer comprehensive photography and videography services designed to capture your most important moments with professional excellence and creative vision.
        </p>

        <div className="mt-15">
          <ServiceImageCard />
        </div>
      </div>
    </div>
  );
}
