'use client'
import React, {createContext, useContext} from 'react';


interface PortfolioItems {
    title: string;
    src: string;
    category: string;
}

interface createContextType {
    data: PortfolioItems[];
    setData: React.Dispatch<React.SetStateAction<PortfolioItems[]>>;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}


export const GalleryContext = createContext<createContextType | undefined>(undefined);

export const useGallery = () => {
    const context = useContext(GalleryContext);
    if(!context){
        throw new Error('useGallery must be used within the contextProvider');
    }
    return context;
};
