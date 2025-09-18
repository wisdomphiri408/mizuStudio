import Hero from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex flex-col md:flex-row mt-8">
        <div className="flex flex-col gap-4 mx-auto px-4 md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]">
          <h2>About <span className="text-emphasis">Mizu Studio</span></h2>
          <p>
            Based in the vibrant city of Blantyre, Mizu Studio is your premier destination for professional photography and videography services. We are passionate about capturing life's most precious moments with artistic vision and technical excellence.
          </p>
          <p>
            Our team of experienced photographers and videographers specializes in weddings, corporate events, birthday celebrations, and creative portraits. We believe that every moment tells a story, and we're here to help you preserve those stories for generations to come.
          </p>
          <p>
            With years of experience and a commitment to quality, we combine traditional photography techniques with modern creativity to deliver stunning results that exceed expectations.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="relative w-full h-96 lg:h-[500px] md:h-full">
            <Image
              src="/photographer.jpg"
              alt="photographer"
              fill
              className="object-cover object-[50%_30%] rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
}
