import React, {useState} from "react";
import Project from "./Project";
import { SiJavascript, SiPython, SiFlask } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function Projects(){
    const [isHover, setIsHover] = useState(null)

    const projects = [
        {
            title : "I-RATED",
            github: "https://github.com/ChaseTeague1/i-rated",
            description: "Movie review web application that showcases full CRUD usability and admin/user privileges",
            skills : [
            {icon: <FaReact/>, colorClass: "text-blue-400"}, 
            {icon: <SiJavascript />, colorClass: "text-yellow-300"}, 
            {icon: <SiPython />, colorClass: "text-green-400"}, 
            {icon: <SiFlask />, colorClass: "text-white"}, 
            {icon: <RiTailwindCssFill />, colorClass: "text-teal-200"}
        ],
            glow: "shadow-green-500 shadow-lg"
        },
        {
            title : "Bee-Fit",
            github: "https://github.com/ChaseTeague1/Bee-Fit",
            description: "A standard workout out application that allows users to be able to create exercises",
            skills : [
            {icon: <FaReact />, colorClass: "text-blue-400"}, 
            {icon: <SiJavascript />, colorClass: "text-yellow-300"}, 
            {icon: <SiPython />, colorClass: "text-green-400"}, 
            {icon: <SiFlask />, colorClass: "text-white"}
        ],
            glow: "shadow-yellow-500 shadow-lg"
        },
        {
            title : "Recipe Finder",
            github: "https://github.com/ChaseTeague1/recipe-finder",
            description: "An all inclusive recipe finder, search, filter and create your very own recipes and explore others",
            skills : [
            {icon: <FaReact />, colorClass: "text-blue-400"}, 
            {icon: <SiJavascript />, colorClass: "text-yellow-300"}
        ],
            glow: "shadow-orange-500 shadow-lg"
        }
    ]
    return (
        <div className="flex flex-col justify-center items-center w-3/4 py-8">
          <h1 className="text-white text-5xl mb-8 text-center glitch" data-text="PROJECTS">PROJECTS</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4">
            {projects.map((project, index) => (
              <div 
              key={index} 
              className="flex justify-center"
              onMouseEnter={() => setIsHover(index)}
              onMouseLeave={() => setIsHover(null)}
              >
                <div 
                className={`bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-xs transition-all duration-300 ease-in-out
                    ${isHover === index ? "h-56 bg-gray-700" : "h-32"}
                    ${isHover === index ? project.glow : ""}`}
                >
                  <Project project={project} isHover={isHover === index}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

export default Projects;