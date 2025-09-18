import { NextPage } from "next";
import { CameraOff, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GoBackButton from "@/components/GoBackButton";

const NotFound: NextPage = () => {
    return(
        <div className="flex flex-col items-center gap-4 pt-20 mx-2">
            <CameraOff className="w-20 h-20"/>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <p className='text-center'>
            Oops! The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="flex gap-2">
                <Link href ='/'>
                    <Button>
                        <Home className="w-4 h-4"/>
                        Home
                    </Button>
                </Link>
                <GoBackButton />
            </div>
            <p className="text-sm text-center">
                Return to our homepage to explore our photography services
            </p>
        </div>
    )
}

export default NotFound;