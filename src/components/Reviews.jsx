import person1 from "../assets/person.avif"
import person2 from "../assets/person2.webp"
import person3 from "../assets/person3.jpg"

const Reviews = () => {
    return <div id="review" className="mt-5 mb-5 pl-5 pr-5">
        <div>
            <h4 className="text-4xl text-center text-indigo-800 font-semibold mt-15">Loved By Customers</h4>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-6">
                <div className="bg-neutral-300 rounded-2xl p-8 shadow-2xl">
                    <div className="flex  flex-col items-center">
                        <p className="text-center">"The experience at Safed Baradari was truly mesmerizing. The heritage architecture and calm ambiance made our visit unforgettable. The staff was very cooperative and ensured a smooth experience."</p>
                        <img className="h-15 w-15 rounded-full mt-10" src={person1} alt="person" />
                        <p className="mt-2 text-2xl text-indigo-800 font-bold">Anant Gupta</p>
                    </div>
                </div>
                <div className="bg-neutral-300 rounded-2xl p-8 shadow-2xl">
                    <div className="flex  flex-col items-center">
                        <p className="text-center">"The experience at Safed Baradari was truly mesmerizing. The heritage architecture and calm ambiance made our visit unforgettable. The staff was very cooperative and ensured a smooth experience."</p>
                        <img className="h-15 w-15 rounded-full mt-10" src={person2} alt="person" />
                        <p className="mt-2 text-2xl text-indigo-800 font-bold">Thala</p>
                    </div>
                </div>
                <div className="bg-neutral-300 rounded-2xl p-8 shadow-2xl">
                    <div className="flex  flex-col items-center">
                        <p className="text-center">"The experience at Safed Baradari was truly mesmerizing. The heritage architecture and calm ambiance made our visit unforgettable. The staff was very cooperative and ensured a smooth experience."</p>
                        <img className="h-15 w-15 rounded-full mt-10" src={person3} alt="person" />
                        <p className="mt-2 text-2xl text-indigo-800 font-bold">Humza</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Reviews;