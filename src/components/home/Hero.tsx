import { NextPage } from "next";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero: NextPage = () => {
    return (
        <div className="relative w-screen h-screen pt-0">
            <Image 
            src={'/heroImage.jpg'}
            alt="heroImage"
            fill
            priority
            className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-5">

                {/* Text Content */}
                <div className="absolute text-center flex flex-col gap-4 inset-0 justify-center">
                    <h1>Welcome to <span className="text-emphasis">Mizu Studio</span></h1>
                    <p className="max-w-md mx-auto">
                        Capturing your special moments with timeless photography and videography.
                    </p>
                    <Link href={'/services'}>
                        <Button>Get Started</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;