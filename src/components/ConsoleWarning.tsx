'use client'

import { useEffect } from "react";

export const ShowConsoleWarning = () => {

    useEffect(()=>{
        if(process.env.NODE_ENV === 'production'){
                const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const textColor = isDarkMode ? '#e5e7eb' : '#1f2937';

                console.log(
                '%cSTOP!',
                'color: red; font-size: 88px; padding: 10px; border: 2px ;'
                );
                console.log(
                '%cThis is a browser feature intended for developers. If someone told you to paste something here, it’s probably a scam.',
                `font-size: 24px; color: ${textColor};`
                );
        }

    },[])
    return null;
};