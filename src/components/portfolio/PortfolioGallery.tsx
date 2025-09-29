'use client'
import {NextPage} from "next";
import {useGallery} from "@/context/GalleryContext";
import Image from "next/image";

const PortfolioGallery: NextPage = () => {
    const { data } = useGallery();
    return (
        <div className={'w-full max-w-[1500px] mx-auto'}>
            <div className={'grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}>
                {data.map((item,index) =>(
                    <div key={index} >
                        <div className={'relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow group'}>
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
        </div>

    )
}
export default PortfolioGallery;