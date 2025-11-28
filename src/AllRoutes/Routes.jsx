import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndCondition from "../pages/TermsAndCondition";


const AllRoutes = () => {
    return <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/term" element={<TermsAndCondition />} />
            </Routes>

    </div>
}

export default AllRoutes;