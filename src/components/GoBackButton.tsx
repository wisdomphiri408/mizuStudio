'use client'
import { NextPage } from "next"
import { Button } from "./ui/button"
import { ArrowBigLeft } from 'lucide-react'
import { useRouter } from "next/navigation"

const GoBackButton:NextPage = () => {
    const router = useRouter();

    return (
        <Button 
        variant={'inverted'}
        onClick={()=>router.back()}>
            <ArrowBigLeft className="w-4 h-3"/>
            Go Back
        </Button>
    )
}
export default GoBackButton;