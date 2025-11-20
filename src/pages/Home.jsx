import Aboutsection from "../components/Aboutsection";
import Book from "../components/Book";
import Calenders from "../components/Calenders";
import Contactus from "../components/Contactus";
import Herosection from "../components/Herosection";
import Highlights from "../components/Highlights";
import Members from "../components/Members";
import Reviews from "../components/Reviews";
import UpComingEvents from "../components/UpComingEvents";


const Home = () => {
    return <div>
        <Herosection />
        <Aboutsection />
        <Highlights />
        <Book />
        <Calenders/>
        <Members />
        <UpComingEvents />
        <Reviews />
        <Contactus />
    </div>
}

export default Home;