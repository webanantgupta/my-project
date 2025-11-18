import workimg from "../assets/baradari2.png"
import { IoSearch } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import { MdLocalPostOffice } from "react-icons/md";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';



const Book = () => {
    return <div id="book" className="mt-5 mb-10 pl-5 pr-5">
        <div className="flex mt-20">
            <div className="basis-2/4">
                <img className="w-full h-[400px] object-cover rounded-md mt-20" src={workimg} alt="baradari" />
            </div>
            <div className="basis-2/4">
                <div>
                    <h2 className="text-4xl font-semibold text-indigo-800 text-center">How To Book For Any Occasion </h2>
                    <p className="text-center font-semibold text-neutral-500 mt-2">Follow these simple steps to make your royal celebration at Safed Baradari unforgettable.</p>
                </div>
                <div className="flex flex-col items-center mt-10 pl-10 basis-2/4 h-[400px]">
                    <Swiper
                        rewind={true}
                        direction={'vertical'}
                        slidesPerView={2}
                        spaceBetween={0}
                        mousewheel={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Mousewheel, Pagination, Navigation]}
                        className="mySwiper book_section"
                    >
                        <SwiperSlide>
                            <div className="flex justify-between items-center border h-38 w-full p-5 mb-5 rounded-2xl">
                                <div className="flex flex-col justify-center basis-1/3 ">
                                    <div>
                                        <IoSearch className="bg-violet-500 text-6xl p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Explore Venue</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 font-medium">View images, details, and facilities of Safed Baradari before booking.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex justify-between items-center border h-38 w-full p-5 mb-5 rounded-2xl">
                                <div className="flex flex-col justify-center basis-1/3 ">
                                    <div>
                                        <FaRegCalendarCheck className="bg-blue-500 text-6xl p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Check Availability</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 font-medium">Select your event date and see real-time slot availability.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex justify-between items-center border h-38 w-full p-5 mb-5 rounded-2xl">
                                <div className="flex flex-col justify-center basis-1/3 ">
                                    <div>
                                        <LuNotebookPen className="bg-green-500 text-6xl p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Fill Booking Form</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 font-medium">Provide event details, contact info, and any custom requirements.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex justify-between items-center border h-38 w-full p-5 mb-5 rounded-2xl">
                                <div className="flex flex-col justify-center basis-1/3 ">
                                    <div>
                                        <MdAttachMoney className="bg-yellow-500 text-6xl p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Make Secure Payment</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 font-medium">Pay easily through Razorpay, Paytm, or UPI for instant confirmation</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex justify-between items-center border h-38 w-full p-5 mb-5 rounded-2xl">
                                <div className="flex flex-col justify-center basis-1/3 ">
                                    <div>
                                        <MdLocalPostOffice className="bg-orange-500 text-6xl p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Get Confirmation</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 font-medium">Receive email & SMS confirmation with all event details.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>
        </div>

    </div>
}

export default Book; 