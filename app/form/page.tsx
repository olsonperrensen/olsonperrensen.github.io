'use client';
import { useEffect } from 'react';


export default function Page() {
    useEffect(() => {
        // Trigger your action here
        setTimeout(function () {
            window.location.replace("https://www.sbdinc.tech");
        }, 1000);
    }, []);
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="grid items-center gap-4">
                <GlobeIcon className="h-12 w-12" />
                <div className="inline-flex items-center space-x-2">
                    <span className="text-xl font-bold">Redirecting</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Please do not refresh the page</span>
                </div>
            </div>
        </div>
    )
}

function GlobeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" x2="22" y1="12" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    )
}