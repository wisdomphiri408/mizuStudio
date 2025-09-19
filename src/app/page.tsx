import Hero from "@/components/home/Hero";
import ServicesCard from "@/components/home/ServicesCard";
import Image from "next/image";
import { Heart, Camera, VideoIcon, Edit } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero section*/}
      <Hero />

      {/*About section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-8 max-w-[1500px] mx-auto p-4 sm:p-8">
        <div className="flex flex-col gap-6 lg:gap-4 mx-auto  max-w-[900px]">
          <h2>About <span className="text-emphasis">Mizu Studio</span></h2>
          <p className="text-lg leading-relaxed">
            Based in the vibrant city of Blantyre, Mizu Studio is your premier destination for professional photography and videography services. We are passionate about capturing life's most precious moments with artistic vision and technical excellence.
          </p>
          <p className="text-lg leading-relaxed">
            Our team of experienced photographers and videographers specializes in weddings, corporate events, birthday celebrations, and creative portraits. We believe that every moment tells a story, and we're here to help you preserve those stories for generations to come.
          </p>
          <p className="text-lg leading-relaxed">
            With years of experience and a commitment to quality, we combine traditional photography techniques with modern creativity to deliver stunning results that exceed expectations.
          </p>
        </div>

    
          <div className="relative w-full max-w-[850px] mx-auto h-96 lg:h-[500px] p-4">
            <Image
              src="/photographer.jpg"
              alt="photographer"
              fill
              className="object-cover object-[50%_30%] rounded-xl shadow-lg"
              priority
            />
        </div>

      </div>

      {/*Services Setion */}
      <div className="text-center px-4 sm:px-8 mt-28">
        <h2>
          Our <span className="text-emphasis">Services</span>
        </h2>
        <p className="max-w-[750px] mx-auto text-lg leading-relaxed">
          We offer comprehensive photography and videography services designed to capture your most important moments with professional excellence and creative vision.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  mx-auto max-w-[1400px] mt-15">
          <ServicesCard 
          icon={<Heart />}
          title="Wedding Photography"
          description="Capture your special day with elegant, timeless photography that tells your unique love story." />

          <ServicesCard 
          icon={<Camera />}
          title="Birthday Celebrations"
          description="Preserve joyful birthday moments with vibrant, candid photography that captures pure happiness." />

          <ServicesCard 
          icon={<VideoIcon />}
          title="Event Videography"
          description="Professional video production for corporate events, celebrations, and special occasions." />

          <ServicesCard 
          icon={<Edit />}
          title="Photo Editing"
          description="Expert post-processing and retouching to enhance your photos with professional polish." />
        </div>
      </div>
    </div>
  );
}
