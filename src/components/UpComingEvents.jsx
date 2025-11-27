import image1 from "../assets/baradari.jpeg"
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import headline from "../assets/headline2.png";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const UpComingEvents = () => {
    return <section  id="event" className="scroll-mt-36 mt-5 mb-5 pl-5 pr-5">
        <div data-aos="fade-up">
        <h2  className="text-center text-4xl text-indigo-800 font-semibold">Upcoming Events</h2>
        <div className="flex justify-center">
            <img src={headline} alt="headline" className="w-full md:h-20 md:w-80 " />
        </div>
        <div className="flex flex-wrap justify-evenly items-center mt-5">
            <Swiper
                cssMode={true}
                slidesPerView={1}
                // spaceBetween={60}
                navigation={true}
                pagination={true}
                mousewheel={true} rewind loop
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="rounded-2xl"
                breakpoints={{
                    640: { slidesPerView: 1,},
                    768: { slidesPerView: 2,spaceBetween:30},
                    1024: { slidesPerView: 3, spaceBetween:30}
                }}
            >
                <SwiperSlide>
                    <div className="bg-neutral-300  rounded-2xl">
                        <div>
                            <img src={image1} className="w-full object-contain rounded-t-2xl" alt="baradari" />
                        </div>
                        <div className="p-3">
                            <h4 className="text-2xl font-semibold text-indigo-800">Brithday Celebration</h4>
                            <div className="flex  justify-start items-center gap-2">
                                <SlCalender />
                                <p>15.12.25</p>
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                <FaLocationDot />
                                <p>Kaiserbagh, Lucknow</p>
                            </div>
                            <div>
                                <p>Celebrating this special day in the timeless elegance of Safed Baradari.
                                    A place where history adds grace to every birthday moment</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-neutral-300 rounded-2xl">
                        <div>
                            <img src={image1} className="w-full object-contain rounded-t-2xl" alt="baradari" />
                        </div>
                        <div className="p-3">
                            <h4 className="text-2xl font-semibold text-indigo-800">Cultural Festival</h4>
                            <div className="flex  justify-start items-center gap-2">
                                <SlCalender />
                                <p>15.12.25</p>
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                <FaLocationDot />
                                <p>Kaiserbagh, Lucknow</p>
                            </div>
                            <div>
                                <p>Celebrating this special day in the timeless elegance of Safed Baradari.
                                    A place where history adds grace to every birthday moment</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-neutral-300 rounded-2xl">
                        <div>
                            <img src={image1} className="w-full object-contain rounded-t-2xl" alt="baradari" />
                        </div>
                        <div className="p-3">
                            <h4 className="text-2xl font-semibold text-indigo-800">Wedding Celebration</h4>
                            <div className="flex  justify-start items-center gap-2">
                                <SlCalender />
                                <p>15.12.25</p>
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                <FaLocationDot />
                                <p>Kaiserbagh, Lucknow</p>
                            </div>
                            <div>
                                <p>Celebrating this special day in the timeless elegance of Safed Baradari.
                                    A place where history adds grace to every birthday moment</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-neutral-300 rounded-2xl">
                        <div>
                            <img src={image1} className="w-full object-contain rounded-t-2xl" alt="baradari" />
                        </div>
                        <div className="p-3">
                            <h4 className="text-2xl font-semibold text-indigo-800">Confrence</h4>
                            <div className="flex  justify-start items-center gap-2">
                                <SlCalender />
                                <p>15.12.25</p>
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                <FaLocationDot />
                                <p>Kaiserbagh, Lucknow</p>
                            </div>
                            <div>
                                <p>Celebrating this special day in the timeless elegance of Safed Baradari.
                                    A place where history adds grace to every birthday moment</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <div className="bg-neutral-300 rounded-2xl flex flex-col shadow-2xl">
                <img className="rounded-t-2xl object-contain" src={image1} alt="image" />
                <div className="pl-5 pr-5 pb-5">
                    <h4 className="text-2xl font-semibold text-indigo-800 mt-2">Birthday Celebration</h4>
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
            </div> */}

            {/* {/* <div className="bg-neutral-300 rounded-2xl flex flex-col shadow-2xl">
                <img className="rounded-t-2xl" src={image1} alt="image" />
                 <div className="pl-5 pr-5 pb-5">
                    <h4 className="text-2xl font-semibold text-indigo-800 mt-2">Cultural Events and Festivals</h4>
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
            </div> */}

            {/* <div className="bg-neutral-300 rounded-2xl flex flex-col shadow-2xl">
                <img className="rounded-t-2xl" src={image1} alt="image" />
                   <div className="pl-5 pr-5 pb-5">
                    <h4 className="text-2xl font-semibold text-indigo-800 mt-2">Weddings and Receptions</h4>
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
            </div>  */}
        </div>
        </div>
    </section>
}

export default UpComingEvents