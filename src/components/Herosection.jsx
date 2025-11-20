import baradariHero from "../assets/baradari3.jpg"
import CommonBtn from "../common/CommonBtn";


const Herosection = () => {
    return <section className="hero_container relative">
        <div>
            <div>
                <img className="h-[500px] w-full object-cover" src={baradariHero} alt="baradari" />
            </div>

            <div className="hero_element absolute inset-0 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-white mb-5">Lucknow's Premier Venue for Weddings, Exhibitions, and Cultural Events</h1>
                <p className="text-2xl text-white mb-5">Weddings At The Safed Baradari Qaisar Bagh</p>
                <CommonBtn title={"Book Now"} bg={"bg-indigo-700"} />
            </div>
        </div>

    </section>
}

export default Herosection;