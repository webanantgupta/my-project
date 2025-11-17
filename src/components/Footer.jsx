import logo from "../assets/footerlogo.png"
import { BsMeta } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
    return <div>
        <div className="bg-neutral-300 pl-5 pr-5">
            <div className="flex pt-5 pb-10 ">
                <div className=" basis-2/6 flex flex-col items-center">
                    <img className="h-50 w-50 rounded-full" src={logo} alt="baradari logo" />
                    <p className="text-center mt-2 ">Baradari's timeless charm and peaceful surroundings made our experience truly memorable. A perfect blend of heritage and elegance. The beauty and calmness of Baradari added a magical touch to our day. Highly recommended for anyone who appreciates heritage and serenity.</p>
                </div>
                <div className=" basis-2/6">
                    <h2 className="text-4xl text-start font-semibold m-8">Quick Links</h2>
                    <ul className="grid grid-cols-2 gap-10 mt-10 ml-10">
                        <li className="text-start cursor-pointer">About</li>
                        <li className="text-start cursor-pointer">How To Book</li>
                        <li className="text-start cursor-pointer">Members of Baradari</li>
                        <li className="text-start cursor-pointer">Upcoming Events</li>
                        <li className="text-start cursor-pointer">Reviews</li>
                        <li className="text-start cursor-pointer">Terms and Conditions</li>
                        <li className="text-start cursor-pointer">Property Highlights</li>
                        <li className="text-start cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>
                <div className=" basis-2/6">
                    <h2 className="text-4xl text-center font-semibold m-8">Let's stay in touch</h2>
                    <p className="text-center mt-10 ">Join us on social media for behind-the-scenes moments, updates, and celebrations at Safed Baradari.Follow Safed Baradari for event highlights, cultural moments, and latest updates.</p>
                    <div className="flex justify-evenly items-center mt-20">
                        <BsMeta className="text-4xl text-indigo-700 cursor-pointer" />
                        <SiInstagram className="text-3xl text-pink-400 cursor-pointer" />
                        <FaLinkedinIn className="text-3xl text-blue-500 cursor-pointer" />
                        <BsTwitterX  className="text-2xl cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="pb-5 flex justify-center gap-1">
                <p className="text-center font-bold">Copyright © 2025 All Rights Reserved - </p><p className="text-center font-bold text-indigo-800"> Safed Baradari</p> 
            </div>
        </div>

    </div>
}

export default Footer;