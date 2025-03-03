import React from "react";


function Project({project}){

    return (
        <div className="items-center">
          <h2 className="text-xl text-white">{project.title}</h2>
          <ul className="text-gray-400 mt-2">
            {project.skills.map((skill, index) => (
              <li key={index} className="inline-block mr-2">{skill}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default Project;