import Aboutsection from "./components/Aboutsection"
import Herosection from "./components/Herosection"
import Members from "./components/Members"
import Navbar from "./components/Navbar"
import Works from "./components/Works"


function App() {


  return (
    <div className="bg-neutral-100">
    <Navbar/>
    <Herosection/>
     <Aboutsection/>
     <Works/>
     <Members/>
    </div>
  )
}

export default App
