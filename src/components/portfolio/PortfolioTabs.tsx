'use client'
import {NextPage} from "next";

import {Button} from "@/components/ui/button";
import {useGallery} from "@/context/GalleryContext";


interface PortfolioItems {
        title: string;
        src: string;
        category: string;
}

interface Props {
    portfolio: PortfolioItems[];
}

const PortfolioTabs: NextPage <Props>= ({portfolio}) => {
    const {setActiveTab, activeTab, setData} = useGallery();


    //getting unique categories
    const categories = ['all',...new Set(portfolio.map((item)=>item.category))];

    //passing categories to context provider
    const handleTabs = (category:string) => {
        setActiveTab(category);
        const filtered = category === 'all'
            ? portfolio
            : portfolio.filter(item => item.category === category);

        setData(filtered)
    }

    return (
        <div>
            {/*Tabs*/}
            <div className={'grid gap-4 w-full md:max-w-[1500px] mx-auto grid-cols-[repeat(auto-fit,minmax(120px,1fr))]'}>
                {categories.map((category,index) =>
                        <Button
                            key={index}
                            variant={'inverted'}
                            onClick={()=> handleTabs(category)}
                            className={`px-4 py-2 rounded-full w-full ${activeTab === category ? 'bg-blue-600 text-white':''}`}
                        >
                            {category}
                        </Button>
                )}
            </div>
        </div>
    )
}


export default PortfolioTabs;