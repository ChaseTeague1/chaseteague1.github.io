import React from "react";
import Project from "./Project";
import { SiJavascript, SiPython, SiFlask } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function Projects(){

    const projects = [
        {
            title : "I-RATED",
            skills : [<FaReact />, <SiJavascript />, <SiPython />, <SiFlask />, <RiTailwindCssFill />]
        },
        {
            title : "Bee-Fit",
            skills : [<FaReact />, <SiJavascript />, <SiPython />, <SiFlask />]
        },
        {
            title : "Recipe Finder",
            skills : [<FaReact />, <SiJavascript />]
        }
    ]
    return (
        <div className="flex flex-col justify-center items-center w-full py-8">
          <h1 className="text-white text-5xl mb-8 text-center">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4">
            {projects.map((project, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-xs">
                  <Project project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

export default Projects;