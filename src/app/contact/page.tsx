import ServicesCard from "@/components/home/ServicesCard";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { MessageCircle, PhoneCall, Mail, MapPin } from "lucide-react";
import MapEmbed from "@/components/contact/MapEmbed";
import EmailForm from "@/components/contact/EmailForm";
import WhatsAppBooking from "@/components/contact/WhatsAppBooking";

const Contact: NextPage = () => {
    return(
        <div className="flex flex-col px-4 pt-20 pb-20 gap-16">
            
            <div className="text-center flex flex-col gap-4">
                <h2>Get in <span className="text-emphasis">Touch</span></h2>
                <p className="max-w-[600px] mx-auto text-lg">
                    We&apos;d love to capture your special moments. Reach us through WhatsApp, phone, or visit our studio in Ndirande, Blantyre.
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
                    <p className="max-w-[700px] mx-auto text-lg">Located in the heart of Ndirande, Blantyre. Easy to find and accessible for all your photography needs.</p>
                </div>

                {/* Google Map embedding */}
                <MapEmbed />
                <p className="text-sm text-center">
                    <span className="font-bold">Address:</span> Mizu Studio, Ndirande Township, Blantyre, Malawi
                </p>
            </div>

            {/* Sending Form */}
            <div className="flex flex-col gap-4">
                <div className="text-center flex flex-col gap-4">
                    <h2>Send Us a <span className="text-emphasis">Message</span></h2>
                    <p className="text-lg max-w-[600px] mx-auto">
                        Have a specific question or want to discuss your photography needs? Drop us a message below.
                    </p>
                </div>
                <div>
                    <EmailForm />
                </div>
            </div>

            <div className="text-center flex flex-col gap-4">
                <h2>Ready to book your <span className="text-emphasis">session?</span></h2>
                <p className="text-lg max-w-[600px] mx-auto">
                    Don&apos;t wait to capture those special moments. Get in touch with us today and let&apos;s create something beautiful together.
                </p>
                <WhatsAppBooking />
                <p className="text-sm">
                    Or call us directly at <span className="text-emphasis">+265 123 456 789</span>
                </p>
            </div>
        </div>
    )
}

export default Contact;