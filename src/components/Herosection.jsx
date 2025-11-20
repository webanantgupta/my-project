import { useState } from "react";
import baradariHero from "../assets/baradari3.jpg"
import CommonBtn from "../common/CommonBtn";
import BookingModal from "./BookingModal";


const Herosection = () => {

    const [open, setOpen] = useState(false);

    return <section className="hero_container relative">
        <BookingModal open={open} onClose={() => setOpen(false)} />

        <div>
            <div>
                <img className="h-[500px] w-full object-cover" src={baradariHero} alt="baradari" />
            </div>

            <div className="hero_element absolute inset-0 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-white mb-5">Lucknow's Premier Venue for Weddings, Exhibitions, and Cultural Events</h1>
                <p className="text-2xl text-white mb-5">Weddings At The Safed Baradari Qaisar Bagh</p>
                <button className="bg-indigo-800 px-4 py-2 text-white font-semibold rounded-md cursor-pointer " onClick={()=>setOpen(true)}>Book Now</button>

            </div>
        </div>

    </section>
}

export default Herosection;