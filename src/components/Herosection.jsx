// import baradariHero from "../assets/baradari3.jpg"
import BookingModal from "./BookingModal";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import imgData from "../data/HeroImgData"




const Herosection = ({open,setOpen}) => {

    console.log(imgData);

    return <section className="hero_container relative">
        <BookingModal open={open} onClose={() => setOpen(false)} />
        <div className="flex flex-col justify-center items-center h-80 md:h-96 lg:h-[500px] absolute inset-0 top-0 z-20">
            <div>
                <h1 className="text-base text-center font-bold text-white md:text-2xl lg:text-4xl">Lucknow's Premier Venue for Weddings, Exhibitions and Cultural Events</h1>
            </div>
            <div>
                <p className="text-base text-white font-semibold text-center md:text-2xl lg:mt-4">Weddings At The Safed Baradari Qaisar Bagh</p>
            </div>
             <button className="bg-indigo-800 px-4 py-2 mt-1 text-white font-semibold rounded-md cursor-pointer lg:mt-4" onClick={() => setOpen(true)}>Book Now</button>
        </div>
        <div>
            <Swiper
                navigatio inset-0n={true}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper h-80 md:h-96 lg:h-[500px]"
            >
                {imgData.map((obj, index) => {
                    return (<SwiperSlide key={index}>
                        <img src={obj.image} alt={obj.info} className="h-full w-full object-cover brightness-50" />
                    </SwiperSlide>
                    )
                })}
            </Swiper>
            {/* <div>
                <img className="h-[500px] w-full object-cover" src={baradariHero} alt="baradari" />
            </div> */}

            {/* <div className="hero_element absolute inset-0 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-white mb-5">Lucknow's Premier Venue for Weddings, Exhibitions, and Cultural Events</h1>
                <p className="text-2xl text-white mb-5">Weddings At The Safed Baradari Qaisar Bagh</p>
                <button className="bg-indigo-800 px-4 py-2 text-white font-semibold rounded-md cursor-pointer " onClick={() => setOpen(true)}>Book Now</button>
            </div> */}
        </div>
    </section>
}

export default Herosection;