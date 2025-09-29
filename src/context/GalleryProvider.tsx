'use client'
import {ReactNode} from "react";
import {GalleryContext} from "@/context/GalleryContext";
import {useState} from "react";

interface PortfolioItems {
    title: string;
    src:string;
    category: string;
}

export const GalleryProvider = ({children, portfolio} :{children:ReactNode; portfolio:PortfolioItems[];}) => {
    const [data, setData] = useState<PortfolioItems[]>(portfolio);
    const [activeTab, setActiveTab] = useState('all');

    return (
        <GalleryContext.Provider value={{data, setData,activeTab, setActiveTab}}>
            {children}
        </GalleryContext.Provider>
    )
}