import React from "react";
//import { Link, useNavigate } from "react-router-dom";
import "../CSS/Signuppage.css";
import { Link } from "react-router-dom";
import voteindia from "../CSS/image/voteindiaa.jpg"

// $(".eye-icon").click(() => {
//     if ($(".eye-icon").hasClass("fa-eye-slash")) {
//         $(".eye-icon").removeClass("fa-eye-slash").addClass("fa-eye");
//         $(".pass").attr("type", "text");
//     } else {
//         $(".eye-icon").removeClass("fa-eye").addClass("fa-eye-slash");
//         $(".pass").attr("type", "password");
//     }
// });
const Signup = () => {

    // function clickeye(){
    //     const eyes= document.getElementsByClassName("eye-icon");




    // }
    return (<>
        <div className="mainpart">
            <div >
                <form className="body" action="post">
                    <div className="voteindia"> <img src={voteindia}></img> </div>
                    <h1>Signup</h1>
                    <div className="name&age toptwo">
                        {/* <label for="name">Name:</label> */}
                        <input type="text" id="name" name="name" placeholder="Enter your name"></input>
                        {/* <label for="age">Age:</label> */}
                        <input type="number" id="age" name="age" placeholder="age"></input>
                    </div>

                    <div className="email&mobile toptwo">
                        {/* <label for="email">Email:</label> */}
                        <input type="email" id="email" name="email" placeholder="Enter your email"></input>
                        {/* <label for="mobile">Mobile:</label> */}
                        <input type="tel" id="mobile" name="mobile" placeholder="Enter your contact"></input><br></br>
                    </div>



                    <div className="adharandpass">
                        {/* <label for="adhar">Aadhar Number:</label> */}
                        <div className="field">
                            <input type="text" id="adhar" name="adhar" placeholder="Your Aadhaar Number"></input>
                            <i class="fa-solid fa-eye eye-icon" ></i>
                        </div>
                        
                        {/* <label for="password">Password:</label> */}
                        <div className="field">
                            <input type="password" id="password" name="password" placeholder="Enter a Strong password" />
                            <i class="fa-solid fa-eye eye-icon" ></i>
                        </div>

                    </div>
                    <div className="address">
                        {/* <label for="address">Address:</label> */}
                        <textarea id="address" name="address" placeholder="Address"></textarea>
                    </div>

                    <button type="submit" value="Signin">Signup</button>

                </form>
            </div>
        </div>
    </>);
}

export default Signup;