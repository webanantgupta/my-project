import baradarilogo from "../assets/baradarilogo.png"

const Navbar = () => {
    return <div className="flex justify-between items-center h-24 bg-neutral-200">
        <div className="basis-1/4 cursor-pointer">
            <img src={baradarilogo} alt="baradari logo" style={{height:"120px"}} />
        </div>
        <div className="flex justify-evenly basis-2/4 text-lg font-semibold">
            <div className="cursor-pointer">How it Works</div>
            <div className="cursor-pointer">Members</div>
            <div className="cursor-pointer">Calender</div>
            <div className="cursor-pointer">Events</div>
            <div className="cursor-pointer">Reviews</div>
        </div>
    </div>
}

export default Navbar;