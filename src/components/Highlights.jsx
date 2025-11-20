import { FaHireAHelper } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { RiParkingBoxFill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";

const Highlights = () => {
    return <section id="highlight" className="highlight_container scroll-mt-36">
        <div>
            <div className="highlight_heading mb-10">
                <h2 className="text-4xl mt-10 sm:mt-10 lg:mt-20 text-center font-semibold text-indigo-800">Property Highlights</h2>
            </div>


            <div className="highlight_element 
             grid
             grid-cols-1 
             sm:grid-cols-2
             lg:grid-cols-4
             place-items-center
             ">
                <div className=" highlight_each w-[350px] sm:w-[380px] lg:w-[280px] border rounded-md flex items-center mb-10 p-5 justify-evenly shadow-2xl">
                    <div className="bg-indigo-800 rounded-full p-1">
                        <FaHireAHelper className="text-2xl text-white" />
                    </div>
                    <div className="text-lg">Historical Significance</div>
                </div>
                <div className=" highlight_each w-[350px] sm:w-[380px] lg:w-[280px] border rounded-md flex items-center justify-evenly shadow-2xl  mb-10 p-5">
                    <div className="bg-indigo-800 rounded-full p-1">    
                        <IoAccessibility className="text-2xl text-white" />
                    </div>
                    <div className="text-lg">Easy Accessibility</div>
                </div>
                <div className=" highlight_each w-[350px] sm:w-[380px] lg:w-[280px] border rounded-md flex items-center justify-evenly shadow-2xl  mb-10 p-5">
                    <div className="bg-indigo-800 rounded-full p-1">
                        <RiParkingBoxFill className="text-2xl text-white" />
                    </div>
                    <div className="text-lg">On Site Parking</div>
                </div>
                <div className=" highlight_each w-[350px] sm:w-[380px] lg:w-[280px] border rounded-md flex items-center justify-evenly shadow-2xl  mb-10 p-5">
                    <div className="bg-indigo-800 rounded-full p-1">
                        <FaWifi className="text-2xl text-white" />
                    </div>
                    <div className="text-lg">Free Wifi Available</div>
                </div>
            </div>
        </div>
    </section>
}

export default Highlights;