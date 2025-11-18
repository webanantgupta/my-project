import baradarilogo from "../assets/footerlogo.png"

const Navbar = () => {
    return <div id="navbar" className="flex justify-between items-center h-32 bg-neutral-200">
        <div className="basis-1/4 cursor-pointer ">
            <img className="rounded-full"  src={baradarilogo} alt="baradari logo" style={{ height: "120px" }} />
        </div>
            <ul className="flex justify-evenly basis-2/4 text-lg font-semibold">
                <li className="cursor-pointer hover:text-indigo-800"><a href="#about">About</a></li>
                <li className="cursor-pointer hover:text-indigo-800"><a href="#book">How To Book</a></li>
                <li className="cursor-pointer hover:text-indigo-800"><a href="#member">Members</a></li>
                <li className="cursor-pointer hover:text-indigo-800"><a href="#event">Events</a></li>
                <li className="cursor-pointer hover:text-indigo-800"><a href="#review">Reviews</a></li>
            </ul>
    </div>
}

export default Navbar;