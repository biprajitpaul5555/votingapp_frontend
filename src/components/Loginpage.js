import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [input, setInput] = useState({
        name: "",
        adhar: "",
        password: "",
    });
    const navigate = useNavigate();
    useEffect(() => {
        const adhar = document.getElementById("adhar");
        adhar.addEventListener("input", (e) => {
            if (!e.target.value) return;
            const isNum = e.target.value[e.target.value.length - 1].match(/[0-9]/g);
            if (!isNum) e.target.value = e.target.value.substring(0, e.target.value.length - 1);
        });
    }, []);

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
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...input }),
        });
        const json = await response.json();
        if (response.ok) {
            // Save the auth token and redirect
            localStorage.setItem("token", json.token);
            navigate("/");
            alert("Logged in successfully");
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
                    <h1>Login</h1>
                    <div className="name&age toptwo">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            autoComplete="name"
                            value={input.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="adhar">
                        <div className="field">
                            <input
                                type="password"
                                id="adhar"
                                className="pass"
                                name="adhar"
                                placeholder="Your Aadhaar Number"
                                autoComplete="off"
                                value={input.adhar}
                                onChange={handleChange}
                            />
                            <i className="fa-solid fa-eye-slash eye-icon" onClick={toggleIcon}></i>
                        </div>
                    </div>
                    <div className="password">
                        <div className="field">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="pass"
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                value={input.password}
                                onChange={handleChange}
                            />
                            <i className="fa-solid fa-eye-slash eye-icon" onClick={toggleIcon}></i>
                        </div>
                    </div>

                    <button type="submit" value="Signin">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
