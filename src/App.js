import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Signup from "./components/Signuppage";
import Login from "./components/Loginpage";
import CandidatePage from "./components/CandidatePage";
import Footer from "./components/Footer";
import ScrollToAnchor from "./components/ScrollToAnchor";
import Userprofile from "./components/Userprofile";
import Passchange from "./components/Passwordchange";
import Result from "./components/Resultpage";

function App() {
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        const fetchCandidates = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/candidate`);
            const json = await response.json();
            if (response.ok) {
                setCandidates(json);
            } else {
                alert(json.error);
            }
        };
        fetchCandidates();
    }, []);

    ScrollToAnchor();
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage candidates={candidates} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Userprofile />} />
                <Route path="/profilepassword" element={<Passchange />} />
                <Route path="/candidate" element={<CandidatePage candidates={candidates} />} />
                <Route path="/result" element={<Result/>}/>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
