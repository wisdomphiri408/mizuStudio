import {NextPage} from 'next';
import PortfolioTabs from "@/components/portfolio/PortfolioTabs";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import {GalleryProvider} from "@/context/GalleryProvider";

const PortfolioPage: NextPage = () => {
    const portfolio = [
        {
            src: "https://images.unsplash.com/photo-1742891597460-82b918e92ba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50JTIwYnJpZGV8ZW58MXx8fHwxNzU4NjA0ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "Elegant Bridal Portrait",
            category: "weddings"
        },
        {
            src: "https://images.unsplash.com/photo-1544717304-14d94551b7dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcm9tYW50aWMlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg1MzIxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "Romantic Couple Session",
            category: "weddings"
        },
        {
            src: "https://images.unsplash.com/photo-1677677402907-05f2883e3f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBvdXRkb29yfGVufDF8fHx8MTc1ODYwNTAzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "Outdoor Wedding Ceremony",
            category: "weddings"
        },
        {
            src: "https://images.unsplash.com/photo-1753742731151-da5b45dd8114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb24lMjBraWRzfGVufDF8fHx8MTc1ODUyODUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "Joyful Birthday Celebration",
            category: "birthdays"
        },
        {
            src: "https://images.unsplash.com/photo-1758229369785-01ff1742835b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2UlMjBjZWxlYnJhdGlvbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1ODYwNDg3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "Birthday Cake Moment",
            category: "birthdays"
        },
        {
            src: "https://images.unsplash.com/photo-1687186511607-68b95444ea33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNlbGVicmF0aW9uJTIwYmFsbG9vbnN8ZW58MXx8fHwxNzU4NTM1NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "Party Celebration",
            category: "birthdays"
        },
        {
            src: "https://images.unsplash.com/photo-1609838173807-5ea7e35b40b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHByb2Zlc3Npb25hbCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1ODYwNDg4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "Corporate Event Coverage",
            category: "events"
        },
        {
            src: "https://images.unsplash.com/photo-1729009740907-f7b5b4957080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5JTIwY29uZmVyZW5jZSUyMG1lZXRpbmd8ZW58MXx8fHwxNzU4NjA0ODgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "Conference Photography",
            category: "events"
        },
        {
            src: "https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtlciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTg2MDUwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "Speaker Presentation",
            category: "events"
        },
        {
            src: "https://images.unsplash.com/photo-1722364230254-8d181f068911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGVkaXRpbmclMjB3b3Jrc3BhY2UlMjBjb21wdXRlcnxlbnwxfHx8fDE3NTg2MDQ4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "Professional Photo Editing",
            category: "editing"
        },
        {
            src: "https://images.unsplash.com/photo-1636293875439-b3125c0f1fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGVkaXRpbmclMjBsaWdodHJvb20lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU4NjA0ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "Lightroom Workspace",
            category: "editing"
        },
        {
            src: "https://images.unsplash.com/photo-1731932976228-bd2baa59213f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1ODU0NjIyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "Family Portrait Session",
            category: "weddings"
        }
    ];

    return (
        <GalleryProvider portfolio={portfolio}>
        <div className={'p-4 flex flex-col gap-16'}>
                <PortfolioHero />
                <PortfolioTabs portfolio={portfolio} />
                <PortfolioGallery />

        </div>
        </GalleryProvider>
    )
}

export default PortfolioPage;