import { FaHireAHelper } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { RiParkingBoxFill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import headline from "../assets/headline2.png";

const Highlights = () => {
    return <section id="highlight" className="highlight_container scroll-mt-36 px-5">
        <div data-aos="fade-up">
            <div className="highlight_heading">
                <h2 className="text-4xl mt-5 md:mt-5 lg:mt-20 text-center font-semibold text-indigo-800">Highlights</h2>
            </div>
             <div className="flex justify-center">
                              <img src={headline} alt="headline" className="w-full md:h-20 md:w-80 " />
                          </div>

            <div className="highlight_element 
             grid
             grid-cols-1 
             md:grid-cols-2
             md:px-5
             lg:grid-cols-4
             place-items-center">
                <div className=" highlight_each w-[350px] md:w-[340px] lg:w-[280px] border rounded-md flex items-center mb-10 p-5 justify-evenly md:justify-center md:gap-5 shadow-2xl">
                    <div className="bg-indigo-800 rounded-full p-1">
                        <FaHireAHelper className="text-2xl text-white" />
                    </div>
                    <div className="text-lg">Historical Significance</div>
                </div>
                <div className=" highlight_each w-[350px] md:w-[340px] lg:w-[280px] border rounded-md flex items-center justify-evenly  md:justify-center md:gap-5  shadow-2xl  mb-10 p-5">
                    <div className="bg-indigo-800 rounded-full p-1">    
                        <IoAccessibility className="text-2xl text-white" />
                    </div>
                    <div className="text-lg">Easy Accessibility</div>
                </div>
                <div className="highlight_each w-[350px] md:w-[340px] lg:w-[280px] border rounded-md flex items-center justify-evenly md:justify-center md:gap-5 shadow-2xl mb-10 md:mb-0 lg:mb-10 p-5">
                    <div className="bg-indigo-800 rounded-full p-1">
                        <RiParkingBoxFill className="text-2xl text-white" />
                    </div>
                    <div className="text-lg">On Site Parking</div>
                </div>
                <div className=" highlight_each w-[350px] md:w-[340px] lg:w-[280px] border rounded-md flex items-center justify-evenly  md:justify-center md:gap-5  shadow-2xl md:mb-0 lg:mb-10 p-5">
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