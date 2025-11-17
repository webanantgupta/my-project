import baradariHero from "../assets/baradari3.jpg"
import CommonBtn from "../common/CommonBtn";


const Herosection = () => {
    return <div>
        <div className="relative">
            <img className="h-[500px] w-full object-cover" src={baradariHero} alt="baradari" />

            <div className="absolute inset-0 flex flex-col justify-center items-center">
                 <h1 className="text-4xl font-bold text-white">Lucknow's Premier Venue for Weddings, Exhibitions, and Cultural Events</h1>
                 <p className="text-2xl text-white">Weddings At The Safed Baradari Qaisar Bagh</p>
                <CommonBtn title={"Book Now"} bg={"bg-indigo-700"}/>
            </div>
        </div>
    </div>
}

export default Herosection;