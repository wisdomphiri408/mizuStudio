'use client'
import { NextPage } from "next"
import { useState } from "react"

const EmailForm: NextPage = () => {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');


    return(
        <div>
            <label>Full Name</label>
            
        </div>
    )
}