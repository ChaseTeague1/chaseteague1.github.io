import React, {useState, useEffect} from "react";
import { FaGithub } from "react-icons/fa";

function Project({project, isHover}){
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (isHover) {
      const timer = setTimeout(() => setHovered(true), 100);
      return () => clearTimeout(timer);
    } else {
      setHovered(false)
    }
  }, [isHover])

    return (
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-3xl text-white text-center">{project.title}</h2>
          <div>
          {
            isHover && (
                <div className={`text-center align-center transition-opacity duration-500 ease-in-out ${
                  hovered ? "opacity-100" : "opacity-0"
                }`}>
                    <p className="text-md text-white text-center opacity-70">{project.description}</p>
                    <p className="text-center text-4xl m-2">
                        <a target="_blank" href={project.github} className="flex justify-center item-center">
                            <FaGithub className="text-white text-center"/>
                        </a>
                    </p>
                </div>
        )
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