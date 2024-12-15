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
        <div className="flex flex-col items-center justify-center h-screen ml-72 mb-72">
            <h1 className="text-white text-3xl">HI! I'm Chase Teague</h1>
            <button
                onClick={handleDownload}
                className="m-4 bg-black hover:bg-red-600 transition duration-500 border-red-600 border text-white rounded-2xl p-2 shadow-sm shadow-red-800 flex items-center"
            >
                Download Resume 
                <span className="ml-2"><IoCloudDownloadOutline /></span>
            </button>
            <p className="text-white">Full-Stack Software Engineer</p>
        </div>
    )
}

export default Home;