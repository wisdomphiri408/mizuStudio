import {NextPage} from "next";
import {MessageCircle} from "lucide-react";
import {Button} from "@/components/ui/button";


const WhatsAppBooking: NextPage = () => {
    return (
        <div>
            <a href="https://whatsapp.com/dl/"
               target="_blank"
               rel = 'noopener noreferrer'>
                <Button>
                    <MessageCircle className="w-4 h-4"/>
                    Book Now on WhatsApp
                </Button>
            </a>
        </div>
    )
}

export default WhatsAppBooking;