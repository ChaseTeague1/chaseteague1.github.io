import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-gray-500 w-3/4 mx-auto m-8 rounded-lg">
            <div className="flex items-center justify-center">
                <NavLink
                    className="text-white m-4"
                    to='/'
                >
                    Home
                </NavLink>
                <NavLink
                    className="text-white m-4"
                    to='/about'
                >
                    About
                </NavLink>
                <NavLink
                    className="text-white m-4"
                    to="/projects"
                >
                    Projects
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
