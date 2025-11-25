import logo from "../assets/baradari111.png"
import { BsMeta } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";


const Footer = () => {
    return <footer>
        <div className="bg-neutral-300 pb-5 pl-5 pr-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-2">
                <div className=" basis-2/6 flex flex-col items-center">
                    <a href="#navbar">
                        <img className="h-50 w-50 rounded-full" src={logo} alt="baradari logo" />
                    </a>
                    <p className="text-center mt-2 font-semibold ">Baradari's timeless charm and peaceful surroundings made our experience truly memorable. A perfect blend of heritage and elegance. The beauty and calmness of Baradari added a magical touch to our day. Highly recommended for anyone who appreciates heritage and serenity.</p>
                </div>
                <div className=" basis-2/6">
                    <h2 className="text-4xl text-center text-indigo-800 font-semibold mt-5">Quick Links</h2>
                    <ul className="grid grid-cols-2 gap-6 mt-5 ml-5 ">
                        <li className="text-start cursor-pointer md:mt-4 lg:mt-4"><a href="#about">About</a></li>
                        <li className="text-start cursor-pointer md:mt-4 lg:mt-4"><a href="#book">How To Book</a></li>
                        <li className="text-start  cursor-pointer md:mt-4 lg:mt-4"><a href="#member">Members of Baradari</a></li>
                        <li className="text-start  cursor-pointer md:mt-4 lg:mt-4"><a href="#event">Upcoming Events</a></li>
                        <li className="text-start  cursor-pointer md:mt-4 lg:mt-4"><a href="#review">Reviews</a></li>
                        <li className="text-start cursor-pointer md:mt-4 lg:mt-4"><Link to="/term">Terms and Conditions</Link></li>
                        <li className="text-start  cursor-pointer md:mt-4 lg:mt-4"><a href="#highlight">Property Highlights</a></li>
                        <li className="text-start  cursor-pointer md:mt-4 lg:mt-4"><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className=" basis-2/6 md:col-span-2 lg:col-span-1">
                    <h2 className="text-4xl text-center text-indigo-800 font-semibold my-8 md:block md:w-full">Let's stay in touch</h2>
                    <p className="text-center font-semibold mt-5 ">Join us on social media for behind-the-scenes moments, updates and celebrations at Safed Baradari. Follow Safed Baradari for event highlights, cultural moments and latest updates.</p>
                    <div className="flex justify-evenly items-center mt-5 lg:mt-20">
                        <BsMeta className="text-4xl text-indigo-700 cursor-pointer" />
                        <SiInstagram className="text-3xl text-pink-400 cursor-pointer" />
                        <FaLinkedinIn className="text-3xl text-blue-500 cursor-pointer" />
                        <BsTwitterX className="text-2xl cursor-pointer" />
                    </div>
                </div>
            </div>
          
            <div className="my-5 flex flex-col md:flex-row md:gap-2 items-center justify-center lg:my-0">
                <p className="text-start font-bold">Copyright © 2025 All Rights Reserved </p>
                <p className="text-center font-bold text-indigo-800">
                    <a href="#navbar">Safed Baradari</a>
                    </p>
            </div>
        </div>

    </footer>
}

export default Footer;