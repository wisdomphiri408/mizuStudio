'use client'
import { NextPage } from "next"
import { useState } from "react"
import InputField from "../InputField";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import AutoTextarea from "./AutoTextarea";

const EmailForm: NextPage = () => {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<string>('');

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError(false);

        if(!fullName || !email || !message) {
            setResponse("All Fields are required!");
            setError(true);

            setTimeout(()=>{
                setResponse('');
                setLoading(false);},3000);
            return null;
        }

        setResponse('Your message is on its way! We\'ll get back to you soon');
        setSuccess(true);
        setTimeout(()=>{
            setResponse('');
            setLoading(false);},
        3000);
       
    }

    return(
            <form 
            onSubmit={handleSubmit}
            className="border p-4 flex flex-col gap-4 max-w-[700px] mx-auto shadow-xl rounded-2xl ">
                <div className="flex flex-col gap-1">
                  <label className="lg:text-lg">Full Name</label>
                  <InputField 
                  type="text"
                  placeholder="Enter your full name"
                  className="text-sm py-1"
                  value={fullName}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setFullName(e.target.value)}
                  required ={false}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="lg:text-lg">Email Address</label>
                  <InputField 
                  type="email"
                  placeholder="Enter your email address"
                  className="text-sm py-1"
                  value={email}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}
                  required={false}
                  />
                </div>
                <div>
                    <label className="lg:text-lg">Message</label>
                    <AutoTextarea
                    placeholder="Tell us about your photography needs, event details, or any questions you have..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-sm "
                    />
                </div>

                {/* Response */}
                {response && (
                    <p className={`text-sm ${error? 'text-red-500':''} ${success?'text-green-500' :''}`}>
                        {response}
                    </p>
                )}
                <Button type="submit" disabled={loading}>
                    {loading ? 'sending...':(
                        <><Send className="w-4 h-4"/> Send Message</>
                    )
                    }

                </Button>
            </form>
    )
}

export default EmailForm;