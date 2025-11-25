import AllRoutes from "./AllRoutes/Routes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
// import { ToastContainer } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className="bg-neutral-100">
      {/* <ToastContainer  position="top-right"> */}
        <BrowserRouter>
          <Navbar />
          <AllRoutes />
          <Footer />
        </BrowserRouter>
      {/* </ToastContainer> */}
    </div>
  )
}

export default App
