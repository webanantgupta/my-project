import baradarilogo from "../assets/footerlogo.png"

const Navbar = () => {
    return <div className="flex justify-between items-center h-32 bg-neutral-200">
        <div className="basis-1/4 cursor-pointer">
            <img className="rounded-full"  src={baradarilogo} alt="baradari logo" style={{ height: "120px" }} />
        </div>
            <ul className="flex justify-evenly basis-2/4 text-lg font-semibold">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">How To Book</li>
                <li className="cursor-pointer">Members</li>
                <li className="cursor-pointer">Events</li>
                <li className="cursor-pointer">Reviews</li>
            </ul>

    
    </div>
}

export default Navbar;