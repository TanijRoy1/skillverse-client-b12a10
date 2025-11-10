import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10 border-t">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <Link to="/" className="text-2xl font-bold text-primary">
            <span className="text-accent">Skill</span>Verse
          </Link>
          <p className="mt-3 text-sm">
            Empowering learners to gain new skills and grow their potential.
          </p>
        </div>

        
        <div>
          <h3 className="font-semibold mb-2 text-lg">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-primary">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-primary">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold mb-2 text-lg">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-primary">
            <a href="#" className="hover:text-accent">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-accent">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-accent">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-accent">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EduLearn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
