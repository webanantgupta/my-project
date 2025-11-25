import { BsMeta } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";


const Footer = () => {
    const location = useLocation();

    const navigate = useNavigate();
    
    const handleNavigate = (section) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: section } });
        } else {
            scroller.scrollTo(section, {
                smooth: true,
                delay: 0,
                duration: 500,
                offset: -110,
            });
        }
    }
    return <footer className="w-full   bottom-0 ">
        <div className="bg-neutral-300 p-2">
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-2">
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
                        <li className="text-start cursor-pointer md:mt-4 lg:mt-4"><ScrollScrollScrollScrollScrollScrollScrollScrollScrollScrollScrollScrollScrollLink to="/term">Terms and Conditions</ScrollScrollScrollScrollScrollScrollScrollScrollScrollScrollScrollScrollScrollLink></li>
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
            </div> */}
            <div className="sm:mt-5 lg:mt-10">
                <h2 className="text-4xl text-center text-indigo-800 font-bold my-3">Safed Baradari</h2>
            </div>
            <div className="mt-2 sm:mt-5 lg:mt-10">
                <ul className="grid grid-cols-2 items-center mx-2 justify-center gap-4 md:flex lg:flex lg:justify-evenly ">
                    <li><ScrollLink className="font-semibold cursor-pointer md:font-bold lg:font-bold hover:text-indigo-800"
                        onClick={() => {
                            handleNavigate('about')
                        }} to="about">About</ScrollLink></li>
                    <li><ScrollLink className="font-semibold cursor-pointer hover:text-indigo-800" onClick={() => {
                        handleNavigate('book')
                    }} to="book">How To Book</ScrollLink></li>
                    <li><ScrollLink className="font-semibold cursor-pointer hover:text-indigo-800" onClick={() => {
                        handleNavigate('member')
                    }} to="member">Members</ScrollLink></li>
                    <li><ScrollLink className="font-semibold cursor-pointer hover:text-indigo-800"
                        onClick={() => {
                            handleNavigate('event')
                        }}
                        to="event">Upcoming Events</ScrollLink></li>
                    <li><RouterLink className="font-semibold  hover:text-indigo-800" to="/privacy">Privacy Policy</RouterLink></li>
                    <li><RouterLink className="font-semibold  hover:text-indigo-800" to="/term">Terms And Conditions</RouterLink></li>
                </ul>
            </div>
            <div className="flex justify-center gap-8 mt-4 sm:mt-5 lg:mt-10">
                <BsMeta className="text-4xl text-indigo-700 cursor-pointer" />
                <SiInstagram className="text-3xl text-pink-400 cursor-pointer" />
                <FaLinkedinIn className="text-3xl text-blue-500 cursor-pointer" />
                <BsTwitterX className="text-2xl cursor-pointer" />
            </div>
            <div className="mt-2 flex flex-col sm:mt-5 md:flex-row md:gap-2 items-center justify-center lg:my-0 lg:mt-5">
                <p className="text-start font-bold">Copyright © 2025 All Rights Reserved -</p>
                <p className="text-center font-bold text-indigo-800">
                    <a href="#navbar">Safed Baradari</a>
                </p>
            </div>
        </div>

    </footer>
}

export default Footer;