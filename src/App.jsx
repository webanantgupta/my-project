import AllRoutes from "./AllRoutes/Routes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"

function App() {


  return (
    <div className="bg-neutral-100">
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
