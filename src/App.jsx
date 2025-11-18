import Aboutsection from "./components/Aboutsection"
import Contactus from "./components/Contactus"
import Footer from "./components/Footer"
import Herosection from "./components/Herosection"
import Members from "./components/Members"
import Navbar from "./components/Navbar"
import Reviews from "./components/Reviews"
import Book from "./components/Book"
import Highlights from "./components/Highlights"
import UpComingEvents from "./components/UpComingEvents"


function App() {


  return (
    <div className="bg-neutral-100">
      <Navbar />
      <Herosection />
      <Aboutsection />
      <Highlights/>
      <Book />
      <Members />
      <UpComingEvents/>
      <Reviews/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default App
