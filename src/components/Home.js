import React from "react";
import { IoCloudDownloadOutline} from "react-icons/io5";

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
            <h1 className="text-white text-3xl">HI! I'm Chase Teague</h1>
            <button
                onClick={handleDownload}
                className="m-4 bg-black hover:bg-red-600 transition duration-500 border-red-600 border text-white rounded-2xl p-2 shadow-sm shadow-red-800 flex items-center"
            >
                Download Resume 
                <span className="ml-2"><IoCloudDownloadOutline /></span>
            </button>
            <p className="text-white text-5xl mb-30 font-zapfino">Full-Stack Software Engineer</p>
        </div>
    )
}

export default Home;