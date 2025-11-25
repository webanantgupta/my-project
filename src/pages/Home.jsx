import { lazy, Suspense } from "react";
import Aboutsection from "../components/Aboutsection";
// import Book from "../components/Book";
// import Calenders from "../components/Calenders";
// import Contactus from "../components/Contactus";
import Herosection from "../components/Herosection";
// import Highlights from "../components/Highlights";
// import Members from "../components/Members";
// import Reviews from "../components/Reviews";
// import UpComingEvents from "../components/UpComingEvents";


const Highlights = lazy(() => import("../components/Highlights"))
const Calenders = lazy(() => import("../components/Calenders"))
const Members = lazy(() => import("../components/Members"))
const UpComingEvents = lazy(() => import("../components/UpComingEvents"))
const Reviews = lazy(() => import("../components/Reviews"))
const Contactus = lazy(() => import("../components/Contactus"))
const Book = lazy(()=> import ("../components/Book"))


const Home = () => {
    return <div>
        <Herosection />
        <Aboutsection />
        <Suspense fallback={<div>Loading....</div>}>
            <Highlights />
        </Suspense>

<Suspense fallback={<div>Loading...</div>}>
        <Book />
</Suspense>

        <Suspense fallback={<div>Loading....</div>}>
            <Calenders />
        </Suspense>

        <Suspense fallback={<div>Loading....</div>}>
            <Members />
        </Suspense>

        <Suspense fallback={<div>Loading....</div>}>
            <UpComingEvents />
        </Suspense>

        <Suspense fallback={<div>Loading....</div>}>
            <Reviews />
        </Suspense>
        <Suspense fallback={<div>Loading....</div>}>
            <Contactus />
        </Suspense>
    </div>
}

export default Home;