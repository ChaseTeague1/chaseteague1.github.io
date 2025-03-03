import React, {useState, useEffect} from "react";
import { IoCloudDownloadOutline} from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Home(){
    const [hasLoaded, setHasLoaded] = useState(false)

    function handleDownload(){
        const resumeUrl = '/Resume.pdf'
        window.open(resumeUrl, '_blank')

        const link = document.createElement('a')
        link.href = resumeUrl
        link.download = "Resume.pdf"
        link.click()
    }

    useEffect(() => {
        setTimeout(() => {
            setHasLoaded(true)
        }, 0)
    }, [])

    return (
        <div className={`app-container ${hasLoaded ? "fade-in" : ""}`}>
        <div className="flex flex-col h-screen items-center">
            <img className="w-80 h-80 m-0 rounded-full mb-10 shadow-red-600 shadow-[0px_5px_40px_5px_rgba(0,0,0,0.3)]" src="/thumbnail.jpeg"/>
            <div id="app">
                <div id="wrapper">
                    <h1 class="glitch" data-text="CHASE TEAGUE">CHASE TEAGUE</h1>
                    <span className="sub">Full-Stack Software Engineer</span>
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
        </div>
        </div>
    )
}

export default Home;