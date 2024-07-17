import React from "react";

const Login = () => {
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

    return (
        <div className="mainpart">
            <div>
                <form className="body">
                    <div className="voteindia">
                        <img src="/images/voteIndia.jpg" className="voteindia-logo" alt="kuch bhi" />
                    </div>
                    <h1>Login</h1>
                    <div className="name&age toptwo">
                        <input type="text" id="name" name="name" placeholder="Enter your name" />
                    </div>

                    <div className="adhar">
                        <input type="number" id="adhar" name="adhar" placeholder="Your Aadhaar Number" />
                    </div>
                    <div className="password">
                        <div className="field">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="pass"
                                placeholder="Enter your password"
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
