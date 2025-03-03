import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="w-3/4 mx-auto m-8 rounded-lg">
            <div className="flex items-center justify-end">
                <NavLink
                    className={({isActive}) =>
                        `text-white m-4 hover:text-red-600 transition duration-300 text-lg ${isActive ? "text-red-600" : "text-white"}`
                    }
                    to='/'
                >
                    Home
                </NavLink>
                <NavLink
                    className={({isActive}) =>
                        `text-white m-4 hover:text-red-600 transition duration-300 text-lg ${isActive ? "text-red-600" : "text-white"}`
                    }
                    to='/about'
                >
                    About
                </NavLink>
                <NavLink
                    className={({isActive}) =>
                        `text-white m-4 hover:text-red-600 transition duration-300 text-lg ${isActive ? "text-red-600" : "text-white"}`
                    }
                    to="/projects"
                >
                    Projects
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
