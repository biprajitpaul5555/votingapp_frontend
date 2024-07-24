import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        email: "",
        mobile: "",
        address: "",
        adhar: "",
        password: "",
    });
    const navigate = useNavigate();

    const toggleIcon = () => {
        const arr = document.getElementsByClassName("eye-icon");
        for (let i = 0; i < arr.length; i++) {
            const cur = arr[i];
            const previousInput = cur.previousElementSibling;
            if (cur.classList.contains("fa-eye-slash")) {
                previousInput.setAttribute("type", "text");
                cur.classList.replace("fa-eye-slash", "fa-eye");
            } else {
                previousInput.setAttribute("type", "password");
                cur.classList.replace("fa-eye", "fa-eye-slash");
            }
        }
    };
    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...input, age: parseInt(input.age), mobile: parseInt(input.mobile) }),
        });
        const json = await response.json();
        if (response.ok) {
            // Save the auth token and redirect
            localStorage.setItem("token", json.token);
            navigate("/");
            alert("Account created successfully");
        } else {
            alert(json.error);
        }
    };

    return (
        <div className="mainpart">
            <div>
                <form className="body" onSubmit={handleSubmit}>
                    <div className="voteindia">
                        <img src="/votingapp_frontend/images/voteIndia.jpg" className="voteindia-logo" alt="kuch bhi" />
                    </div>
                    <h1>Signup</h1>
                    <div className="name&age toptwo">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={input.name}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            id="age"
                            name="age"
                            placeholder="Enter your age"
                            value={input.age}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="email&mobile toptwo">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={input.email}
                            onChange={handleChange}
                        />
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            placeholder="Enter your contact"
                            value={input.mobile}
                            onChange={handleChange}
                        />
                        <br></br>
                    </div>

                    <div className="adharandpass">
                        <div className="field">
                            <input
                                type="password"
                                id="adhar"
                                className="pass"
                                name="adhar"
                                placeholder="Your Aadhaar Number"
                                value={input.adhar}
                                onChange={handleChange}
                            />
                            <i className="fa-solid fa-eye-slash eye-icon" onClick={toggleIcon}></i>
                        </div>

                        <div className="field">
                            <input
                                type="password"
                                id="password"
                                className="pass"
                                name="password"
                                placeholder="Enter a Strong password"
                                value={input.password}
                                onChange={handleChange}
                            />
                            <i className="fa-solid fa-eye-slash eye-icon" onClick={toggleIcon}></i>
                        </div>
                    </div>
                    <div className="address">
                        <textarea
                            id="address"
                            name="address"
                            placeholder="Address"
                            value={input.address}
                            onChange={handleChange}></textarea>
                    </div>

                    <button type="submit" value="Signin">
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
