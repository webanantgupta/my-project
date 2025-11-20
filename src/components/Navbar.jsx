import baradarilogo from "../assets/footerlogo.png"

const Navbar = () => {
    return <header className="sticky top-0 z-50">
        <div id="navbar" className="navbar_container  flex justify-between items-center h-32 bg-neutral-300">
            <div className="navbar_image basis-1/4 cursor-pointer ">
                <img className="rounded-full" src={baradarilogo} alt="baradari logo" style={{ height: "120px" }} />
            </div>
            <ul className="navbar_items flex justify-evenly basis-2/4 text-lg font-semibold">
                <li className="cursor-pointer hover:text-indigo-800"><a href="#about">About</a></li>
                <li className="cursor-pointer hover:text-indigo-800"><a href="#book">How To Book</a></li>
                <li className="cursor-pointer hover:text-indigo-800"><a href="#member">Members</a></li>
                <li className="cursor-pointer hover:text-indigo-800"><a href="#event">Events</a></li>
                <li className="cursor-pointer hover:text-indigo-800"><a href="#review">Reviews</a></li>
            </ul>
        </div>
    </header>

}

export default Navbar;