import { useEffect, useState } from "react";
import baradarilogo from "../assets/baradari111.png";
import { Link, scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

const location2 = useLocation();
console.log(location2);
const navigate2 = useNavigate();
console.log(navigate2);

const handleNavigateHeader = (section) =>{
        if(location.pathname !== "/"){
          navigate2("/",{state:{scrollTo:section}})
        } else{
          null  
        }
}




  useEffect(() => {
    if (location.state) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        delay: 0,
        duration: 500,
        // offset: -150,
      });
    }
  }, [location]);

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
          <ul className="navbar_items flex justify-evenly text-lg font-bold">
            <li className="cursor-pointer hover:text-indigo-800"><Link onClick={()=>handleNavigateHeader("about")} to="about" smooth={true} offset={-100} duration={500}>About</Link></li>
            <li className="cursor-pointer hover:text-indigo-800"><Link onClick={()=>handleNavigateHeader("book")} to="book" smooth={true} offset={-100} duration={500}>How To Book</Link></li>
            <li className="cursor-pointer hover:text-indigo-800"><Link onClick={()=>handleNavigateHeader("member")} to="member" smooth={true} offset={-100} duration={500}>Members</Link></li>
            <li className="cursor-pointer hover:text-indigo-800"><Link onClick={()=>handleNavigateHeader("event")} to="event" smooth={true} offset={-100} duration={500}>Events</Link></li>
            <li className="cursor-pointer hover:text-indigo-800"><Link onClick={()=>handleNavigateHeader("review")} to="review" smooth={true} offset={-100} duration={500}>Reviews</Link></li>
          </ul>
        </div>
      </div>

      {/* mobile and tablet li */}
      <div className="hidden md:block lg:hidden absolute top-8 left-1/2 -translate-x-1/2">
        <h1 className="text-indigo-800 font-bold text-2xl">Safed Baradari</h1>
      </div>
      {open && (
        <div className="lg:hidden bg-neutral-300 w-full pb-4">
          <ul className="flex flex-col items-center gap-3 text-lg font-bold">
            <li className="cursor-pointer hover:text-indigo-800"><Link onClick={()=>handleNavigateHeader("about")} to="about" smooth={true} duration={500}>About</Link></li>
            <li className="cursor-pointer hover:text-indigo-800"><Link onClick={()=>handleNavigateHeader("book")} to="book" smooth={true} duration={500}>How To Book</Link></li>
            <li className="cursor-pointer hover:text-indigo-800"><Link onClick={()=>handleNavigateHeader("member")} to="member" smooth={true} duration={500}>Members</Link></li>
            <li className="cursor-pointer hover:text-indigo-800"><Link onClick={()=>handleNavigateHeader("event")} to="event" smooth={true} duration={500}>Events</Link></li>
            <li className="cursor-pointer hover:text-indigo-800"><Link onClick={()=>handleNavigateHeader("review")} to="review" smooth={true} duration={500}>Reviews</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
