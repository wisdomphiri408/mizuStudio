import { NextPage } from "next";
import Link from "next/link";
import { Facebook, Instagram,Linkedin } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
const Footer: NextPage = () => {
    return(
        <div className="flex flex-col gap-8 w-full max-w-[1400px] px-4 mx-auto  pt-8">
            <section className="flex flex-col md:flex-row items-center justify-between border-b gap-4">
                <div className="flex flex-col gap-4">
                    <h4 className="text-emphasis">Mizu Studio</h4>
                    <p className="text-sm md:max-w-[400px] ">
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
                        <a 
                        href={'https://www.instagram.com/mizustudios_mw?utm_source=qr&igsh=anFoeDQ0ZWNrbGhh'} 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <Button className="rounded-full w-9 h-9">
                            <Instagram className="w-4 h-4"/>
                            </Button>
                        </a>

                        <a 
                        href={'https://www.facebook.com/profile.php?id=61552408960480'} 
                        target="_brank"
                        rel='noopener noreferrer'>
                            <Button className="rounded-full w-9 h-9">
                            <Facebook className="w-4 h-4"/>
                            </Button>
                        </a>

                        <a 
                        href={'https://www.tiktok.com/@mizu.raph7?_t=ZM-8zqsqAEwUup&_r=1'} 
                        target="_blank"
                        rel='noopener noreferrer'>
                            <Button className="rounded-full">
                                <Image 
                                src={'/tiktok.svg'}
                                alt="tiktok"
                                width={8}
                                height={8}
                                className="w-4 h-4 invert"
                                />
                            </Button>
                        </a>

                        <a 
                        href={'https://www.linkedin.com/in/mizu-studios-b9b97a335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} 
                        target="blank
                        rel='noopener noreferrer">
                             <Button className="rounded-full w-9 h-9">
                            <Linkedin className="w-4 h-4 "/>
                        </Button>
                        </a>

                    </div>
                </div>
            </section>
                <p className="text-sm text-center">
                    Made within 💙 Blantyre by Mizu Studio.<br/>
                    <span className="text-gray-400">© 2024 Mizu Studio. All rights reserved.</span>
                </p>
            <section>

            </section>
        </div>
    )
}

export default Footer;