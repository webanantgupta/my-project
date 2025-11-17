import CommonBtn from "./common/CommonBtn"
import Aboutsection from "./components/Aboutsection"
import ComingEvents from "./components/ComingEvents"
import Contactus from "./components/Contactus"
import Footer from "./components/Footer"
import Herosection from "./components/Herosection"
import Members from "./components/Members"
import Navbar from "./components/Navbar"
import Testimonial from "./components/Testimonial"
import Works from "./components/Works"


function App() {


  return (
    <div className="bg-neutral-100">
      <Navbar />
      <Herosection />
      <Aboutsection />
      <Works />
      <Members />
      <ComingEvents/>
      <Testimonial/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default App
