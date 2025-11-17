import baradariHero from "../assets/baradari3.jpg"


const Herosection = () => {
    return <div>
        <div className="relative">
            <img className="h-[500px] w-full object-cover" src={baradariHero} alt="baradari" />

            <div className="absolute inset-0 flex flex-col justify-center items-center">
                 <h1 className="text-4xl font-bold text-white">Lucknow's Premier Venue for Weddings, Exhibitions, and Cultural Events</h1>
                 <p className="text-2xl text-white">Weddings At The Safed Baradari Qaisar Bagh</p>
                 <button className="bg-blue-500 text-white p-3 mt-2 cursor-pointer rounded-md w-[150px] text-xl">Book Now</button>
            </div>
        </div>
    </div>
}

export default Herosection;