'use client'
import {NextPage} from "next";
import {useGallery} from "@/context/GalleryContext";
import Image from "next/image";
import {useState} from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {Button} from "@/components/ui/button";

const PortfolioGallery: NextPage = () => {
    const { data } = useGallery();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handlePrev = () => {
        if(selectedIndex === null) return;
        setSelectedIndex((prev) => prev === 0 ? data.length -1 : (prev as number) -1);
    }

    const handleNext = () => {
        if(selectedIndex === null) return;
        {setSelectedIndex((prev) => prev === data.length -1 ? 0 : (prev as number) + 1)}
    }
    return (
        <div className={'w-full max-w-[1500px] mx-auto'}>
            <div className={'grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}>
                {data.map((item,index) =>(
                    <div key={index} >
                        <div
                            className={'relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow group'}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className={'object-cover group-hover:scale-105 transition-transform duration-300 '}
                                sizes={"(max-width: 768px) 100vw," +
                                    "(max-width: 1200px) 50vw," +
                                    "25vw"}
                                priority={index <4}
                            />
                            <div className={'absolute bg-gradient-to-t from-black/80 via-black/20 to-transparent inset-0'}></div>
                            <div className={'absolute bottom-2 left-4'}>
                                <p className={'text-sm font-semibold'}>{item.title}</p>
                                <p className={'text-xs border inline-block px-2 py-1 rounded-full'}>{item.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Fullscreen Preview with Navigation */}
            {selectedIndex !== null && (
                <div className={'fixed inset-0 bg-black/90 flex items-center justify-center z-50'}>
                    {/*close overlay*/}
                    <Button
                        variant={'inverted'}
                        className={'absolute top-4 right-4 text-3xl animate-bounce'}
                        onClick={() => setSelectedIndex(null)}
                    >
                        <X size={30}/>
                    </Button>

                    {/*prev overlay*/}
                    <Button
                        className={'absolute left-4 text-white p-3 rounded-full bg-black/50 hover:bg-black/70'}
                        onClick={handlePrev}
                    >
                        <ChevronLeft size={30}/>
                    </Button>

                    {/*Preview Image*/}
                    <Image
                        src={data[selectedIndex].src}
                        alt={'Preview'}
                        width={1200}
                        height={1200}
                        className={"max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"}
                    />

                    {/*Next overlay*/}
                    <Button
                        className={'absolute right-4 text-white p-3 rounded-full bg-black/50 hover:bg-black/70'}
                        onClick={handleNext}
                    >
                        <ChevronRight size={30}/>
                    </Button>

                </div>
            )}
        </div>

    )
}
export default PortfolioGallery;