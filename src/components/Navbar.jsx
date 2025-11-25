import { useState } from "react";
import baradarilogo from "../assets/baradari111.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-300">
      <div id="navbar" className="navbar_container flex justify-between items-center h-24">

        {/* Logo */}
        <div className="flex justify-start ml-2 basis-1/4 cursor-pointer">
          <img className="rounded-full h-20" src={baradarilogo} alt="baradari logo" />
        </div>
        {/* hamburger  */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl mr-4 cursor-pointer"
        >
          ☰
        </button>

        {/* Desktop li */}
        <div className="hidden lg:block basis-2/4">
          <ul className="navbar_items flex justify-evenly text-lg font-semibold">
            <li className="cursor-pointer hover:text-indigo-800"><a href="#about">About</a></li>
            <li className="cursor-pointer hover:text-indigo-800"><a href="#book">How To Book</a></li>
            <li className="cursor-pointer hover:text-indigo-800"><a href="#member">Members</a></li>
            <li className="cursor-pointer hover:text-indigo-800"><a href="#event">Events</a></li>
            <li className="cursor-pointer hover:text-indigo-800"><a href="#review">Reviews</a></li>
          </ul>
        </div>
      </div>

      {/* mobile and tablet li */}
      {open && (
        <div className="lg:hidden bg-neutral-300 w-full pb-4">
          <ul className="flex flex-col items-center gap-3 text-lg font-semibold">
            <li className="cursor-pointer hover:text-indigo-800"><a href="#about">About</a></li>
            <li className="cursor-pointer hover:text-indigo-800"><a href="#book">How To Book</a></li>
            <li className="cursor-pointer hover:text-indigo-800"><a href="#member">Members</a></li>
            <li className="cursor-pointer hover:text-indigo-800"><a href="#event">Events</a></li>
            <li className="cursor-pointer hover:text-indigo-800"><a href="#review">Reviews</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
