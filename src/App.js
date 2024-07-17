import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Signup from "./components/Signuppage";
import Login from "./components/Loginpage";
import CandidatePage from "./components/CandidatePage";
import Footer from "./components/Footer";
import ScrollToAnchor from "./components/ScrollToAnchor";
function App() {
    ScrollToAnchor();
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/candidate" element={<CandidatePage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
