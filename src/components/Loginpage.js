import React from "react";
//import { Link, useNavigate } from "react-router-dom";
import "../CSS/Signuppage.css";
import "../CSS/Loginpage.css";
import { Link } from "react-router-dom";
import voteindia from "../CSS/image/voteindiaa.jpg"
const Login = () => {
    return (<>
        <div className="mainpart">
            <div >

                <form className="body" action="post">
                    <div className="voteindia"> <img src={voteindia}></img> </div>
                    <h1>Login</h1>
                    <div className="name&age toptwo">
                        {/* <label for="name">Name:</label> */}
                        <input type="text" id="name" name="name" placeholder="Enter your name"></input>

                    </div>

                    <div className="adhar">
                        {/* <label for="adhar">Aadhar Number:</label> */}
                        <input type="number" id="adhar" name="adhar" placeholder="Your Aadhaar Number"></input>

                    </div>
                    <div className="password">
                        {/* <label for="password">Password:</label> */}
                        <div className="field">
                            <input type="password" id="password" name="password" placeholder="Enter your password"></input>
                            <i class="fa-solid fa-eye eye-icon" ></i>
                        </div>
                    </div>


                    <button type="submit" value="Signin">Login</button>

                </form>
            </div>
        </div>
    </>);
}

export default Login;