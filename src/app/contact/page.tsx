import ServicesCard from "@/components/home/ServicesCard";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { MessageCircle, PhoneCall, Mail, MapPin } from "lucide-react";

const Contact: NextPage = () => {
    return(
        <div className="flex flex-col px-4 pt-20 pb-20 gap-16">
            
            <div className="text-center flex flex-col gap-4">
                <h2>Get in <span className="text-emphasis">Touch</span></h2>
                <p className="max-w-[600px] mx-auto">
                    We'd love to capture your special moments. Reach us through WhatsApp, phone, or visit our studio in Ndirande, Blantyre.
                </p>
            </div>

            {/* Contact links */}
            <div className="grid  md:grid-cols-3 gap-4 max-w-[1000px] mx-auto">
                <ServicesCard
                title="WhatsApp"
                description="Quick and easy communication for instant responses"
                buttonTwo={
                <Button className="text-sm">
                    chat on WhatsApp
                </Button>
                } 
                icon={<MessageCircle />}
                hrefLink="https://whatsapp.com/dl/"/>

                <ServicesCard
                title="Phone & Email"
                description="Call us directly or send an email"
                buttonOne={<Button variant={"inverted"}>
                    <PhoneCall className="w-4 h-4"/>
                    +265 123 456 789
                </Button>}
                buttonTwo={
                <Button 
                    variant={"inverted"}
                    className="text-sm">
                    <Mail className='w-4 h-4'/>
                        info@mizustudio.mw
                </Button>} 
                hrefLink="mailto:wisdomphiri408@gmail.com?subject=Let's Connect&body=Hi there!%0D%0A%0D%0AI wanted to reach out and say 👋"
                icon={<PhoneCall />}
               />

                <ServicesCard 
                title="Visit Studio"
                description="Come see us at our studio in Ndirande Mizu Studio, Ndirande Township, Blantyre, Malawi"
                buttonTwo={<Button>Open in Maps</Button>}
                icon={<MapPin />}
                hrefLink="https://maps.google.com/?q=Ndirande,Blantyre,Malawi"
                />
            </div>

            {/* Location */}
            <div>
                <div className="flex flex-col gap-4 text-center">
                    <h2>Find Our <span className="text-emphasis">Studio</span></h2>
                    <p className="max-w-[700px] mx-auto">Located in the heart of Ndirande, Blantyre. Easy to find and accessible for all your photography needs.</p>
                </div>

                {/* Google Map embedding */}
                <div className="mt-8 rounded-xl overflow-hidden shadow-lg max-w-[1000px] mx-auto mb-4">
                    <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21719.311205000955!2d35.01836167150341!3d-15.779255045872036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d84f86374529a9%3A0x4615e5e23357bd39!2sNdirande%2C%20Blantyre!5e0!3m2!1sen!2smw!4v1758391991911!5m2!1sen!2smw" 
                     width="100%" 
                     height="450" style={{border:0}}
                     allowFullScreen 
                     loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade"/>
                </div>
                <p className="text-sm text-center">
                    <span className="font-bold">Address:</span> Mizu Studio, Ndirande Township, Blantyre, Malawi
                </p>
            </div>

            {/* Sending Form */}
            <div>
                
            </div>
        </div>
    )
}

export default Contact;