import React from "react";

function About(){
    return (
        <div className="flex flex-col justify-center items-center h-full py-8">
            <h1 className="glitch mb-10" data-text="ABOUT">ABOUT</h1>
            <div className="w-1/2 mx-auto">
                <p className="text-gray-300 text-justify text-2xl">
                Hi! My name is <strong className="text-3xl">Chase Teague</strong>, and I am a Full-Stack Software Engineer. 
                I first started my programming journey sophomore year of high school briefly learning Java. 
                Once, out of high school I began my college journey learning Computer Science. 
                I had 2 years of college under my belt before I unfortunately had to leave, however, my passion for programming did not stop there! 
                I started Flatiron School for Software Engineering, where I studied for a year and eventually graduated with a certificate of completion. 
                Throughout my time at Flatiron, I became proficient in languages such as JavaScript, Python, React, Flask and SQL.  
                </p>
            </div>
        </div>
    )
}

export default About;