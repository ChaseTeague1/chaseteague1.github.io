import React from "react";

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
        <div>
            <h1 className="text-white text-3xl">HI! I'm Chase Teague</h1>
            <button
                onClick={handleDownload}
                className="bg-red-600 text-white rounded-xl p-2"
            >Download Resume</button>
            <p className="text-white">Full-Stack Software Engineer</p>
        </div>
    )
}

export default Home;