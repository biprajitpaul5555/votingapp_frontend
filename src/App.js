import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Signup from "./components/Signuppage";
import Login from "./components/Loginpage"
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </>
    );
}

export default App;
