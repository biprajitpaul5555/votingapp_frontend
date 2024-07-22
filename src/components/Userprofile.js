import React from "react";
import { Link } from "react-router-dom";
function Userprofile() {

    return <>
        <div className="mainpartprof">
            <div className="profup">
                <img src="/images/user.jpg"></img>
                <div>
                    <h3>Sutirtha Modak</h3>
                    
                </div>


            </div>
            <div className="info">
            <p> <span>Age:</span> 21</p>
                <p> <span>Email:</span> modaksXXXXXXgmail.com</p>
                <p>  <span>Contact:</span> 690XXXXXX46</p>
                <p>  <span>Aadhaar:</span> 1025XXXXXX3336</p>
                <p>  <span>Address:</span> Shibnagar, College road, Agartala, Tripura</p>
                <p> <span>Voted:</span>Yes </p>
                <Link className="btn btn-primary mx-1" to="/profilepassword" role="button">
                    Change Password
                </Link>
            </div>
        </div>

    </>
}

export default Userprofile;