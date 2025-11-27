// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import reviewData from "../data/ReviewsData"
import headline from "../assets/headline2.png"
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";


const Reviews = () => {
    console.log(reviewData);

    return (

        <>
            <section id="review" className="scroll-mt-36 mt-5 mb-5 pl-5 pr-5">
                <div data-aos="fade-up">
                    <h4 className="text-4xl text-center text-indigo-800 font-semibold mt-15">Loved By Customers</h4>
                    <div className='flex justify-center items-center mt-2'>
                        <img src={headline} className='w-full md:h-20 md:w-80  bg-neutral-100' alt="headline" />
                    </div>
                    <div className=" mt-5 gap-6">
                        {/* grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 */}
                        <Swiper
                            navigation={true}
                            className="mySwiper h-[300px]"
                            modules={[Navigation]}
                            spaceBetween={20}
                            loop={true}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 1, },
                                768: { slidesPerView: 2, spaceBetween: 30 },
                                1024: { slidesPerView: 3, spaceBetween: 30 }
                            }}
                        >
                            {/* <div className="bg-neutral-300 rounded-2xl p-8 shadow-2xl"> */}
                            {reviewData.map((obj, index) => {
                                return (
                                    <SwiperSlide key={index} className="bg-neutral-300 rounded-2xl p-5">
                                        <div className='flex flex-col justify-evenly items-center h-65 px-4'>
                                            <div className='flex justify-center items-center gap-4'>
                                                <ImQuotesLeft className='text-2xl text-indigo-800' />
                                                <div>
                                                    <img className="h-25 w-25 md:h-20 md:w-20 lg:w-30 lg:h-30 rounded-full" src={obj.image} alt="person" />
                                                </div>
                                                    <ImQuotesRight className='text-2xl text-indigo-800' />
                                            </div>
                                            <div className='flex flex-col '>
                                                <p className="text-center">{obj.review}</p>
                                                <p className="text-center text-indigo-800 font-bold text-xl">{obj.name}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* </div> */}
                        </Swiper>

                    </div>
                </div>
            </section></>
    )
}

export default Reviews;