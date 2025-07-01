import { useState } from "react";
import Hamburger from "./Hamburger";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between p-4 fixed w-full bg-white shadow-md">
      <div className="text-xl font-bold">Logo</div>

      <div className="hidden md:flex gap-8">
        <Link to={"/"} className="text-gray-800 hover:text-blue-600">
          Home
        </Link>
        <Link to={"/about"} className="text-gray-800 hover:text-blue-600">
          About
        </Link>

        <Link to={"/create"} className="text-gray-800 hover:text-blue-600">
          Create Character
        </Link>
        <Link to={"/contacts"} className="text-gray-800 hover:text-blue-600">
          Contact
        </Link>
      </div>

      <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />

      {isOpen && (
        <div
          onClick={toggleMenu}
          className="absolute top-15 border-t-1 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50"
        >
          <Link to={"/"} className="text-gray-800 hover:text-blue-600">
            Home
          </Link>
          <Link to={"/about"} className="text-gray-800 hover:text-blue-600">
            About
          </Link>
          <Link to={"/contacts"} className="text-gray-800 hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
