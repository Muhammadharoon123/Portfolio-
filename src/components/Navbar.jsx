import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 background-transparent   z-50">
        <NavLink
          to="/"
          className="w-10 h-10  rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
        >
          <p className="bg-linear-to-b from-[#5AB2D5] to-[#1E5D9B] bg-clip-text text-transparent font-bold">
            AH
          </p>
        </NavLink>
        <nav className="flex text-lg gap-8 font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
