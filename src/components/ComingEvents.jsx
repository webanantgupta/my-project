import image1 from "../assets/baradari.jpeg"
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";


const ComingEvents = () => {
    return <div className="mt-30 mb-20 pl-5 pr-5">
        <h2 className="text-center text-4xl font-semibold">Upcoming Events</h2>
        <div className="grid gap-15 mt-20 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <div className="bg-neutral-300 rounded-2xl flex flex-col shadow-2xl">
                <img className="rounded-t-2xl" src={image1} alt="image" />
                <div className="pl-5 pr-5 pb-5">
                    <h4 className="text-2xl font-semibold mt-2">Birthday Celebration</h4>
                    <p className="flex items-center gap-2 mt-5">
                        <SlCalender />
                        15-12-25
                    </p>
                    <p className="flex items-center gap-2 mt-2">
                        <FaLocationDot />
                        Lucknow,India
                    </p>
                    <p className="mt-2">Celebrating this special day in the timeless elegance of Safed Baradari.
                        A place where history adds grace to every birthday moment</p>
                </div>

            </div>
            <div className="bg-neutral-300 rounded-2xl flex flex-col shadow-2xl">
                <img className="rounded-t-2xl" src={image1} alt="image" />
                 <div className="pl-5 pr-5 pb-5">
                    <h4 className="text-2xl font-semibold mt-2">Cultural Events and Festivals</h4>
                    <p className="flex items-center gap-2 mt-5">
                        <SlCalender />
                        15-12-25
                    </p>
                    <p className="flex items-center gap-2 mt-2">
                        <FaLocationDot />
                        Lucknow,India
                    </p>
                    <p className="mt-2">The venue regularly hosts cultural programs, including classical music and dance performances. It is the main venue for the annual</p>
                </div>
            </div>
            <div className="bg-neutral-300 rounded-2xl flex flex-col shadow-2xl">
                <img className="rounded-t-2xl" src={image1} alt="image" />
                   <div className="pl-5 pr-5 pb-5">
                    <h4 className="text-2xl font-semibold mt-2">Weddings and Receptions</h4>
                    <p className="flex items-center gap-2 mt-5">
                        <SlCalender />
                        15-12-25
                    </p>
                    <p className="flex items-center gap-2 mt-2">
                        <FaLocationDot />
                        Lucknow,India
                    </p>
                    <p className="mt-2">Its historical ambiance and elegant white marble architecture make it a sought-after location for marriage functions and parties</p>
                </div>
            </div>
            <div className="bg-neutral-300 rounded-2xl flex flex-col shadow-2xl">
                <img className="rounded-t-2xl" src={image1} alt="image" />
                    <div className="pl-5 pr-5 pb-5">
                    <h4 className="text-2xl font-semibold mt-2">Formal Ceremonies</h4>
                    <p className="flex items-center gap-2 mt-5">
                        <SlCalender />
                        15-12-25
                    </p>
                    <p className="flex items-center gap-2 mt-2">
                        <FaLocationDot />
                        Lucknow,India
                    </p>
                    <p className="mt-2">Celebrating this special day in the timeless elegance of Safed Baradari.
                        A place where history adds grace to every birthday moment</p>
                </div>
            </div>
            <div className="bg-neutral-300 rounded-2xl flex flex-col shadow-2xl">
                <img className="rounded-t-2xl" src={image1} alt="image" />
                  <div className="pl-5 pr-5 pb-5">
                    <h4 className="text-2xl font-semibold mt-2">Exhibitions and Sales</h4>
                    <p className="flex items-center gap-2 mt-5">
                        <SlCalender />
                        15-12-25
                    </p>
                    <p className="flex items-center gap-2 mt-2">
                        <FaLocationDot />
                        Lucknow,India
                    </p>
                    <p className="mt-2">It is frequently used for art and craft exhibitions, handloom fairs, and silk expos, showcasing products from artisans across India.</p>
                </div>
            </div>
            <div className="bg-neutral-300 rounded-2xl flex flex-col shadow-2xl">
                <img className="rounded-t-2xl" src={image1} alt="image" />
                 <div className="pl-5 pr-5 pb-5">
                    <h4 className="text-2xl font-semibold mt-2">Corporate Events</h4>
                    <p className="flex items-center gap-2 mt-5">
                        <SlCalender />
                        15-12-25
                    </p>
                    <p className="flex items-center gap-2 mt-2">
                        <FaLocationDot />
                        Lucknow,India
                    </p>
                    <p className="mt-2">Celebrating this special day in the timeless elegance of Safed Baradari.
                        A place where history adds grace to every birthday moment</p>
                </div>
            </div>
        </div>
    </div>
}

export default ComingEvents