import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { SiStudyverse } from "react-icons/si";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={`myNavLink`}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/courses" className={`myNavLink`}>Courses</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/myEnrolledCourses" className={`myNavLink`}>Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <header className="bg-base-100 shadow-sm min-h-15 sticky px-4 top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link
            to="/"
            className="text-2xl font-bold text-primary flex items-center gap-1.5"
          >
            <SiStudyverse />
            <p><span className="text-accent">Skill</span>Verse</p>
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex items-center px-1 gap-4 font-medium mx-2 mr-4">{navLinks}</ul>
        </div>

        <div className="flex items-center gap-4">
          {/* <>
            <div className="flex items-center gap-2">
              <FaUserCircle className="text-2xl text-primary" />
              <span className="hidden sm:inline">{"Tanij Roy"}</span>
            </div>
            <button className="btn btn-sm btn-outline btn-primary">
              Logout
            </button>
          </> */}

          <Link to="/auth/login" className="btn btn-sm btn-primary">
            Login
          </Link>

          <button
            className="lg:hidden text-2xl text-primary cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      
        <ul className={`${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-60"
            } transition-all duration-500 ease-in  transform flex absolute flex-col p-4 rounded-lg gap-2 border border-gray-400 bg-base-100 z-10 top-13 right-9 lg:hidden`}>
          {navLinks}
          <li>
            {/* <button className="btn btn-sm btn-primary">Logout</button> */}

            <Link to="/login" className="btn btn-sm btn-primary">
              Login
            </Link>
          </li>
        </ul>
      
    </header>
  );
};

export default Header;
