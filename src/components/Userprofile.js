import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Userprofile() {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user/profile`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const json = await response.json();
            if (response.ok) {
                setProfile(json.userProfile);
            } else {
                alert(json.error);
            }
        };
        fetchProfile();
    }, []);
    return (
        <>
            <div className="mainpartprof">
                <div className="profup">
                    <img src="/images/users.png" alt="user-logo" />
                    <div>
                        {/* <h3>Sutirtha Modak</h3> */}
                        <h3>{profile.name}</h3>
                    </div>
                </div>
                <div className="info">
                    <p>
                        {" "}
                        {/* <span>Age:</span> 21 */}
                        <span>Age:</span> {profile.age}
                    </p>
                    <p>
                        {" "}
                        {/* <span>Email:</span> modaksXXXXXXgmail.com */}
                        <span>Email:</span> {profile.email}
                    </p>
                    <p>
                        {" "}
                        {/* <span>Contact:</span> 690XXXXXX46 */}
                        <span>Contact:</span> {profile.mobile}
                    </p>
                    <p>
                        {" "}
                        {/* <span>Aadhaar:</span> 1025XXXXXX3336 */}
                        <span>Aadhaar:</span> {profile.adhar}
                    </p>
                    <p>
                        {" "}
                        {/* <span>Address:</span> Shibnagar, College road, Agartala, Tripura */}
                        <span>Address:</span> {profile.address}
                    </p>
                    <p>
                        {" "}
                        {/* <span>Voted:</span>Yes{" "} */}
                        <span>Voted: </span>
                        {profile.isvote ? "Yes" : "No"}{" "}
                    </p>
                    <Link className="btn btn-primary mx-1" to="/profilepassword" role="button">
                        Change Password
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Userprofile;
