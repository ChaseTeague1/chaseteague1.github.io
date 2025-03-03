import React from "react";
import { IoCloudDownloadOutline} from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Home(){

    function handleDownload(){
        const resumeUrl = '/Resume.pdf'
        window.open(resumeUrl, '_blank')

        const link = document.createElement('a')
        link.href = resumeUrl
        link.download = "Resume.pdf"
        link.click()
    }

    return (
        <div className="flex flex-col h-screen items-center">
            <img className="w-80 h-80 m-0 rounded-full mb-10 shadow-red-600 shadow-[0px_5px_40px_5px_rgba(0,0,0,0.3)]" src="/thumbnail.jpeg"/>
            <div id="app">
                <div id="wrapper">
                    <h1 class="glitch" data-text="Chase Teague">Chase Teague</h1>
                    <span class="sub">Full-Stack Software Engineer</span>
                </div>
            </div>
            <button
                onClick={handleDownload}
                className="m-4 bg-black hover:bg-red-600 transition duration-500 border-red-600 border text-white rounded-2xl p-2 shadow-sm shadow-red-800 flex items-center"
            >
                View Resume 
                <span className="ml-2"><IoCloudDownloadOutline /></span>
            </button>
            <div className="flex">
                <a target="_blank" className="border-white" href="https://github.com/ChaseTeague1"><FaGithub className="text-white text-2xl hover:text-red-600 rounded-full m-4 mt-0"/></a>
                <a target="_blank" href="https://www.linkedin.com/in/chaseteague/"><FaLinkedin className="text-white text-2xl hover:text-red-600 m-4 mt-0"/></a>
            </div>
            <p className="text-white text-5xl mb-30 font-zapfino">Full-Stack Software Engineer</p>
        </div>
    )
}

export default Home;