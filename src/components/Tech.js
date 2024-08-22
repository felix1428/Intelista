import React from 'react';

import { useNavigate } from "react-router-dom";
import paperpresent from '../images/paper-present.gif';
import programming from '../images/programming.gif';
import webdev from '../images/webdev.gif';
import technicalquiz from '../images/technicalquiz.gif';
export default function Tech() {
    const navigate = useNavigate();

    const handleNavigation = (hash) => {
        navigate('/cardtech');
        setTimeout(() => {
            window.location.hash = hash;
        }, 100); // Delay to ensure navigation has occurred
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ml-4 md:ml-9">
            <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <img src={paperpresent} alt="Event 1" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
                <div className="flex flex-col justify-between px-16 py-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">IDEA BLITZ</h2>
                    </div>
                    <button 
                        type="button" 
                        onClick={() => handleNavigation('#idea-blitz')} 
                        className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                    >
                        Explore More
                    </button>
                </div>
            </div>

            <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <img src={programming}alt="Event 2" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
                <div className="flex flex-col justify-between px-16 py-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">CODING SENSEI</h2>
                    </div>
                    <button 
                        type="button" 
                        onClick={() => handleNavigation('#coding-sensei')} 
                        className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                    >
                        Explore More
                    </button>
                </div>
            </div>

            <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <img src={webdev} alt="Event 3" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
                <div className="flex flex-col justify-between px-16 py-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">WEB DESIGN</h2>
                    </div>
                    <button 
                        type="button" 
                        onClick={() => handleNavigation('#web-design')} 
                        className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                    >
                        Explore More
                    </button>
                </div>
            </div>

            <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <img src={technicalquiz}alt="Event 4" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
                <div className="flex flex-col justify-between px-16 py-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">TECHNICAL QUIZ</h2>
                    </div>
                    <button 
                        type="button" 
                        onClick={() => handleNavigation('#technical-quiz')} 
                        className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                    >
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    );
}
