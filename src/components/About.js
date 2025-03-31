import React from "react";
import { HiOutlineMail } from "react-icons/hi";

function About(){
    return (
        <div className="flex flex-col justify-center items-center h-full py-8">
            <h1 className="glitch mb-10" data-text="ABOUT">ABOUT</h1>
            <div className="w-1/2 mx-auto text-center">
                <p className="text-gray-300 text-justify text-2xl">
                Hi! My name is <strong className="text-3xl">Chase Teague</strong>, and I am a Full-Stack Software Engineer. 
                I first started my programming journey sophomore year of high school briefly learning Java. 
                Once, out of high school I began my college journey learning Computer Science. 
                I had 2 years of college under my belt before I unfortunately had to leave, however, my passion for programming did not stop there! 
                I started Flatiron School for Software Engineering, where I studied for a year and eventually graduated with a certificate of completion. 
                Throughout my time at Flatiron, I became proficient in languages such as  
                <span className="text-yellow-400"> JavaScript</span>, 
                <span className="text-blue-400"> Python</span>, 
                <span className="text-teal-200"> React</span>, 
                <span className="text-white"> Flask</span> and 
                <span className="text-blue-500"> SQL</span>.  
                </p>
                <h1 className="text-white m-10 text-4xl font-bold">Education</h1>
                <div className="h-auto bg-gray-700 m-4 rounded hover:shadow-green-400 hover:shadow-lg">
                    <h2 className="text-white text-2xl">USC Upstate</h2>
                    <p className="text-gray-400">August 2019 - March 2022</p>
                    <p className="text-gray-300 italic">not graduated</p>
                </div>
                <div className="h-auto bg-gray-700 m-4 rounded hover:shadow-blue-400 hover:shadow-lg">
                    <h2 className="text-white text-2xl">Flatiron School</h2>
                    <p className="text-gray-400">August 2023 - October 2024</p>
                    <p className="text-gray-300 italic">graduated</p>
                </div>
                <h1 className="text-white m-10 mb-2 text-4xl font-bold">Contact Me</h1>
                <div className="text-white">
                    <p className="text-gray-300 text-2xl mt-0">teaguechase2@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default About;