'use client'
import { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";



const HeaderTabs: NextPage = () => {
    const currentPath = usePathname();

    return(
        <div>        
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 ">
                <Link 
                href={'/'} 
                className={currentPath === '/'?'text-[var(--color-link-hover)]':''}>Home</Link>

                <Link 
                href={'/about'}
                className={currentPath === '/about'?'text-[var(--color-link-hover)]':''}>About</Link>

                <Link 
                href={'/services'}
                className={currentPath === '/services'?'text-[var(--color-link-hover)]':''}>Services</Link>

                <Link 
                href={'/portfolio'}
                className={currentPath === '/portfolio'?'text-[var(--color-link-hover)]':''}>Portfolio</Link>

                <Link 
                href={'/contact'}
                className={currentPath === '/contact'?'text-[var(--color-link-hover)]':''}>Contact</Link>
            </div>
        </div>
    )
}

export default HeaderTabs;