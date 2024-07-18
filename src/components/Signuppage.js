import React from "react";

const Signup = () => {
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
                    <h1>Signup</h1>
                    <div className="name&age toptwo">
                        <input type="text" id="name" name="name" placeholder="Enter your name" />
                        <input type="number" id="age" name="age" placeholder="Enter your age" />
                    </div>

                    <div className="email&mobile toptwo">
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                        <input type="tel" id="mobile" name="mobile" placeholder="Enter your contact" />
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
                            />
                            <i className="fa-solid fa-eye-slash eye-icon" onClick={toggleIcon}></i>
                        </div>
                    </div>
                    <div className="address">
                        <textarea id="address" name="address" placeholder="Address"></textarea>
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
