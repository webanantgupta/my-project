import headline from "../assets/headline2.png";
import packageData from "../data/PackageData.jsx";
import { FaRupeeSign } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from 'swiper/modules';
import {SwiperSlide,Swiper } from "swiper/react";


const Package = () => {
    // console.log(packageData);

    return <div data-aos="fade-up">
        <div>
            <h2 className='text-center text-4xl text-indigo-800 font-semibold'>Package</h2>
            <div className="flex justify-center">
                <img src={headline} alt="headline" className="w-full md:h-20 md:w-80 " />
            </div>
        </div>
    

        <div className="">
            <Swiper
              cssMode={true}
                navigation={true}
                mousewheel={true} rewind loop
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard ,Autoplay]}
                 Autoplay={{
                    delay: 1500,
                    disableOnInteraction: false
                }}
                className="mt-2"
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
            >

            {packageData.map((obj, index) => {
                return ( 
             <SwiperSlide key={index} className="pb-10">
                    <div className="flex flex-col bg-neutral-300 rounded-2xl mx-5 h-[550px] md:h-[650px] lg:h-[600px] shadow-2xl">
                        <h3 className="text-4xl font-semibold text-center text-indigo-800 mt-3 lg:mt-10">{obj.name}</h3>
                        <h4 className="text-xl font-semibold text-center mt-2 px-2 ">{obj.description}</h4>
                        <div className="flex items-center justify-center my-2 gap-2">
                            <FaRupeeSign className="text-xl" />
                            <div>
                                <h4 className="text-2xl font-semibold">{obj.price}</h4>
                            </div>
                        </div>
                        <div className=" flex flex-col  my-4">
                            <div>
                                <h6 className="text-center text-2xl  font-semibold text-indigo-800">Services Includes</h6>
                                <ul className="flex flex-col mt-2">
                                    {obj.services.map((service, index) => {
                                        return <li key={index}>
                                            <div className="flex items-center justify-start gap-2 pl-15 ">
                                                <GoCheck className="text-xl font-bold text-green-500" />
                                                <p>{service}</p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col my-4">
                            <h6 className="text-center text-2xl font-semibold text-indigo-800">Add On Services</h6>
                            <ul className="flex flex-col px-5 mt-2">
                                {obj.addonServices.map((addon, index) => {
                                    return <li key={index}>
                                        <div className="flex items-center justify-start gap-2 pl-11">
                                            <GoCheck className="text-xl font-bold text-green-500" />
                                            <p>{addon}</p>
                                        </div>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>

                </SwiperSlide>
                )
            })}
            </Swiper>

        </div>
    

    </div>
}


export default Package;