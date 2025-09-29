import {NextPage} from "next";
import WhatsAppBooking from "@/components/contact/WhatsAppBooking";

const PortfolioBooking: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h3>Love what you see? Let&#39;s create together.</h3>
            <WhatsAppBooking />
        </div>
    );
}

export default PortfolioBooking;