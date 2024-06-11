import NavBar from '../components/navbar'; // Import the NavBar component
import React from "react";
import { Checkbox, Card } from '@nextui-org/react';


export default function Checklist() {

    const steps = [
        {
            number: "1",
            titolostep: "Unusual Activities:",
            svg: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7", // svg Bandiera
            descrizionestep: "Monitor for suspicious access to user data and implement multi-factor authentication to prevent account compromise."
        },
        {
            number: "2",
            titolostep: "Minimal Information Asymmetry:",
            svg: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", // svg Scudo
            descrizionestep: "Be transparent about data collection practices, potential risks, and user agency to respect user privacy."
        },
        {
            number: "3",
            titolostep: "Control Over Personal Data:",
            svg: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            descrizionestep: "Give users the power to control how their personal information is stored and transferred through online services."
        },
        {
            number: "4",
            titolostep: "Federated Privacy Impact Assessment:",
            svg: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            descrizionestep: "Conduct thorough privacy assessments when personal information is shared across multiple parties in an identity federation."
        },
        {
            number: "5",
            titolostep: "Obligation Management:",
            svg: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            descrizionestep: "Ensure obligations regarding data sharing, storage, and processing are transferred and managed when data is shared between multiple parties."
        },
        {
            number: "6",
            titolostep: "Sticky Policies:",
            svg: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            descrizionestep: "Attach machine-readable privacy policies to data to define allowed usage and obligations as it travels across data holders."
        },
        {
            number: "7",
            titolostep: "Personal Data Store:",
            svg: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            descrizionestep: "Put users in control of their personal data stored on their personal devices."
        },
        {
            number: "8",
            titolostep: "User Data Confinement:",
            svg: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            descrizionestep: "Minimize data collection by processing user data on user-trusted devices whenever possible."
        },
        {
            number: "9",
            titolostep: "Location Granularity:",
            svg: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            descrizionestep: "Provide users with options to share location data with varying levels of precision."
        },
        {
            number: "10",
            titolostep: "Discouraging Blanket Strategies: ",
            svg: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7", // svg Bandiera
            descrizionestep: "Allow users to choose privacy levels for content sharing on social networking platforms."
        }
    ];

    return (
        <section className="text-gray-600 body-font">
            <NavBar /> {/* Add the NavBar component */}
            <Card className="container px-5 py-24 mx-auto flex flex-wrap">
                {steps.map((step) => (
                    <div key={step.numero} className="flex relative  pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{step.number}</div>
                        <Card className="px-4 py-4 flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className=" flex-shrink-0  w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                    <path d={step.svg}></path>
                                </svg>
                            </div>
                            <div className="flex-grow py-5 sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">{step.titolostep}</h2>
                                <p className="leading-relaxed">{step.descrizionestep}</p>
                            </div>
                            <Checkbox />
                        </Card>
                    </div>
                ))}
            </Card>
        </section>
    );
}
