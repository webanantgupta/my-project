import baradariAbout from "../assets/baradarihero1.jpg";
import { FaHireAHelper } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { RiParkingBoxFill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";


const Aboutsection = () => {
    return <div className="mt-20 pl-5 pr-5 mb-20">
        <div className="flex">
            <div className="basis-2/4 pr-2">
                <h2 className="text-4xl font-semibold mb-5">About This Property</h2>
                <h4 className="text-2xl font-medium  mb-2">Safed Baradari, Lucknow Overview</h4>
                <p className="mb-10">Built by Nawab Wajid Ali Shah, Safed Baradari is a white marbled palace originally constructed as the Nawab's "Palace of Mourning". Located at Maharaja Mahamudabad of Qaiser Bagh, the Safed Baradari houses marble statues of the Anjuman founders Maharajas Man Singh and Balrampur's Digvijay Singh. Initially called Qasr-ul-Aza, this structure further came to be used as a British petitionary court.</p>
                <h4 className="text-2xl font-medium mb-2">Safed Baradari Architecture</h4>
                <p>Built by Nawab Wajid Ali Shah in 1854, the Safed Baradari houses an entire royal manifestation in marble. It sites elaborate corridors, halls and well-designed architectural intricacies. This marble palace also hosts two marble statues of the Maharajas in the Baradar's main hall.
                </p>
                <p> These kings, Man Singh and Digvijay Singh founded the Anjuman which was later known as the British India Association of Oudh. The Baradari, or the 'Twelve Doored Palace' houses its main entrance on the eastern end which open up to octagonal pillars, further giving way to witnessing marvellous artistry via stucco artworks and bright wallwork</p>

            </div>
            <div className="basis-2/4">
                <img className="w-full object-cover rounded-xl" src={baradariAbout} alt="baradari image" />
            </div>
        </div>
        <div>
            <h2 className="text-2xl font-semibold mt-10">Property Highlights</h2>
            <div className="flex justify-between mt-10 pl-30 pr-30">
                <div className=" p-5 w-[250px] border rounded-md flex items-center justify-evenly">
                    <div  className="bg-indigo-400 rounded-full p-1">
                        <FaHireAHelper className="text-2xl"/>
                    </div>
                    <div className="text-lg">Historical Significance</div>
                </div>
                <div className=" p-5 w-[250px] border rounded-md flex items-center justify-evenly">
                    <div className="bg-blue-400 rounded-full p-1">
                        <IoAccessibility className="text-2xl"/>
                        </div>
                    <div className="text-lg">Easy Accessibility</div>
                </div>
                <div className="p-5 w-[250px] border rounded-md flex items-center justify-evenly">
                    <div  className="bg-slate-400 rounded-full p-1">
                        <RiParkingBoxFill  className="text-2xl"/>
                    </div>
                    <div className="text-lg">On Site Parking</div>
                </div>
                <div className=" p-5 w-[250px] border rounded-md flex items-center justify-evenly">
                    <div  className="bg-green-400 rounded-full p-1">
                        <FaWifi className="text-2xl"/>
                    </div>
                    <div className="text-lg">Free Wifi Available</div>
                </div>

            </div>
        </div>
    </div>

}

export default Aboutsection;