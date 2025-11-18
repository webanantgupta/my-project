import { FaHireAHelper } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { RiParkingBoxFill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";

const Highlights = () => {
    return <div id="highlight" className="pl-5 pr-5">
        <div>
            <h2 className="text-4xl font-semibold text-indigo-800">Property Highlights</h2>
            <div className="flex justify-between mt-5 pl-30 pr-30">
                <div className="p-4 w-[250px] border rounded-md flex items-center justify-between shadow-2xl">
                    <div className="bg-indigo-800 rounded-full p-1">
                        <FaHireAHelper className="text-2xl text-white" />
                    </div>
                    <div className="text-lg">Historical Significance</div>
                </div>
                <div className=" p-2 w-[250px] border rounded-md flex items-center justify-evenly shadow-2xl">
                    <div className="bg-indigo-800 rounded-full p-1">
                        <IoAccessibility className="text-2xl text-white" />
                    </div>
                    <div className="text-lg">Easy Accessibility</div>
                </div>
                <div className="p-2 w-[250px] border rounded-md flex items-center justify-evenly shadow-2xl">
                    <div className="bg-indigo-800 rounded-full p-1">
                        <RiParkingBoxFill className="text-2xl text-white" />
                    </div>
                    <div className="text-lg">On Site Parking</div>
                </div>
                <div className=" p-2 w-[250px] border rounded-md flex items-center justify-evenly shadow-2xl">
                    <div className="bg-indigo-800 rounded-full p-1">
                        <FaWifi className="text-2xl text-white" />
                    </div>
                    <div className="text-lg">Free Wifi Available</div>
                </div>
            </div>
        </div>
    </div>
}

export default Highlights;