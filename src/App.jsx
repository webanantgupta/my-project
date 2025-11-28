import AllRoutes from "./AllRoutes/Routes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
useEffect(() => {
  AOS.init({
    duration: 1200,
    once: true,
  });
}, []);


  return (
    <div className="bg-neutral-100">
        <BrowserRouter>

          <Navbar />
          <AllRoutes />
          <Footer />
     

        </BrowserRouter>
      <ToastContainer  position="top-right"/>

    </div>
  )
}

export default App
