
import {NextPage} from "next";


const PortfolioHero: NextPage = () => {
    return (
        <div className={'flex flex-col items-center gap-4 mt-8'}>
            <h2>Our Work</h2>
            <p className={'max-w-[800px] text-center'}>
                From weddings to birthdays to special events, here&#39;s a glimpse of our story through the lens.
            </p>
        </div>
    )
}

export default PortfolioHero;