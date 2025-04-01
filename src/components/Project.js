import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

function Project({ project, isHover }) {
  const [hovered, setHovered] = useState(false);
  const [renderDescription, setRenderDescription] = useState(false);

  useEffect(() => {
    if (isHover) {
      setRenderDescription(true);
      const timer = setTimeout(() => setHovered(true), 50);
      return () => clearTimeout(timer);
    } else {
      setHovered(false);
      const timer = setTimeout(() => setRenderDescription(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isHover]);

  return (
    <div className="relative flex flex-col h-full p-4 bg-gray-800 rounded-lg overflow-hidden">
      <div className="flex flex-col h-full">
        <h2 className="text-2xl font-bold text-white text-center mb-2 z-10">{project.title}</h2>
        <div className="flex flex-col flex-grow min-h-[130px] relative">
          {renderDescription && (
            <div 
              className={`absolute inset-x-0 top-0 bottom-[40px] flex flex-col transition-all duration-300 ${
                hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
              style={{ pointerEvents: hovered ? 'auto' : 'none' }}
            >
              <p className="text-sm text-center text-gray-300 mb-2 flex-grow line-clamp-4">
                {project.description}
              </p>
              <div className="flex justify-center h-8 mb-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-white text-2xl hover:text-blue-400 transition-all duration-300 ${
                    hovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-10 flex items-center justify-center">
            <div className="flex justify-center gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`
                    text-xl transition-all duration-300 ease-in-out
                    ${isHover ? skill.colorClass : "text-gray-400"}
                    ${isHover ? "opacity-100" : "opacity-80"}
                  `}
                >
                  {skill.icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;