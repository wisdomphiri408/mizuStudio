import { NextPage } from "next";
import Link from "next/link";
import { Facebook, Instagram,Linkedin } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
const Footer: NextPage = () => {
    return(
        <div className="flex flex-col gap-8 px-4 mx-auto md:flex-row">
            <section className="flex flex-col justify-between border-b gap-4">
                <div className="flex flex-col gap-4">
                    <h4 className="text-emphasis">Mizu Studio</h4>
                    <p className="text-sm md:max-w-[300px]">
                        Professional photography and videography services in Blantyre, capturing your most precious moments with artistic excellence.
                    </p>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <h5>Quick Links</h5>
                    <div className="flex gap-2 items-center">
                        <Link href={'/'} className="text-sm">Home</Link>
                        <Link href={'/about'} className="text-sm">About</Link>
                        <Link href={'/services'} className="text-sm">Services</Link>
                        <Link href={'/portfolio'} className="text-sm">Portfolio</Link>
                        <Link href={'/contact'} className="text-sm">Contact</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center mb-6">
                    <h5>Follow Us</h5>
                    <div className="flex gap-2 items-center">
                        <Button className="rounded-full">
                          <Instagram className="w-4 h-4"/>
                        </Button>
                        <Button className="rounded-full">
                          <Facebook className="w-4 h-4"/>
                        </Button>

                        <Button className="rounded-full">
                            <Image 
                            src={'/tiktok.svg'}
                            alt="tiktok"
                            width={16}
                            height={16}
                            className="w-4 h-4 invert"
                            />
                        </Button>

                        <Button className="rounded-full">
                            <Linkedin className="w-4 h-4 "/>
                        </Button>
                    </div>
                </div>
            </section>
                <p>
                    Made within 💙 Blantyre by Mizu Studio.
                    © 2024 Mizu Studio. All rights reserved.
                </p>
            <section>

            </section>
        </div>
    )
}

export default Footer;