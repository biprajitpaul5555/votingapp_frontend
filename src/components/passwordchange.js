import React from "react";
import { Link} from "react-router-dom";
function Passchange() {

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
    return <>
        <div className="passing">
            <input placeholder="Old Password" id="passw" type="password"></input>
            <input placeholder="New Password" id="passw"onClick={toggleIcon}></input>
            <Link className="btn btn-primary mx-1" to="/profile/password" role="button">
                    Change
                </Link>
        </div>

    </>;
}

export default Passchange;