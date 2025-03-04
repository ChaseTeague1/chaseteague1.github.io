import React from "react";


function Project({project, isHover}){

    return (
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-3xl text-white text-center">{project.title}</h2>
          <div>
          {
            isHover && (<p className="text-md text-red-500 text-center">{project.description}</p>)
          }
          </div>
          <div className="flex-grow"></div>
          <ul className="mt-2 text-center text-xl flex justify-center gap-2">
            {project.skills.map((skill, index) => (
              <li key={index} className={`inline-block mr-2 transition-opacity duration-400 ease-in-out ${isHover ? "opacity-100": "opacity-60"}`}>
                <span className={`inline-block ${isHover ? skill.colorClass : "text-gray-400"}`}>{skill.icon}</span>
                </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default Project; 