'use client'
import { NextPage } from "next";
import { Menu, X } from "lucide-react";
import { useState,useEffect, useRef } from "react";
import HeaderTabs from "./HeaderTabs";
import Link from "next/link";


const HeaderNav: NextPage = () => {
        const [isDropdown, setIsDropdown] = useState<boolean>(false);
        const dropdownRef = useRef<HTMLDivElement>(null);

        useEffect(()=>{
            const handleClickOutside = (event:MouseEvent) => {
                if(
                    dropdownRef.current && 
                    !dropdownRef.current.contains(event.target as Node)
                ) {
                    setIsDropdown(false);
                }
            };

            document.addEventListener("mousedown",handleClickOutside);
            return () => {
                document.removeEventListener("mousedown",handleClickOutside);
            }
        },[])

    return(
        <div ref={dropdownRef}>
            <div className={`flex justify-between items-center`}>
                <Link href={'/'} className="text-white">
                    <h3>Mizu Studio</h3>
                </Link>

                <div className="hidden md:block">
                    <HeaderTabs />
                </div>

                <div className="md:hidden">
                    {isDropdown ?(
                        <X 
                        onClick={()=>setIsDropdown((prev)=>!prev)}
                        className="w-4 h-4"/>
                    ):(
                    <Menu 
                    onClick={()=>setIsDropdown((prev)=>!prev)}
                    className="w-4 h-4"/>
                    )}
                </div>
            </div>
            <div className="md:hidden">
                {isDropdown && (
                    <div className="mt-2 border-t">
                        <HeaderTabs />
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeaderNav;