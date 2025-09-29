'use client'
import {NextPage} from "next";
import {useState} from "react";
import {Button} from "@/components/ui/button";
interface PortfolioItems {
        title: string;
        src: string;
        category: string;
}

interface Props {
    portfolio: PortfolioItems[];
}
const PortfolioTabs: NextPage <Props>= ({portfolio}) => {
    const [activeTab, setActiveTab] = useState<string>('all');

    //getting unique categories
    const categories = ['all',...new Set(portfolio.map((item)=>item.category))];

    // filter portfolio items
    const filteredPortfolio = activeTab === 'all' ?portfolio : portfolio.filter((item) => item.category === activeTab);

    return (
        <div>
            {/*Tabs*/}
            <div className={'grid gap-4 w-full md:max-w-[1500px] mx-auto grid-cols-[repeat(auto-fit,minmax(120px,1fr))]'}>
                {categories.map((category,index) =>
                        <Button
                            key={index}
                            variant={'inverted'}
                            onClick={()=>setActiveTab(category)}
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