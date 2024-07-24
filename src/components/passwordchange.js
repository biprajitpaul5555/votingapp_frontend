import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Passchange() {
    const [input, setInput] = useState({ currentpass: "", newpass: "" });
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
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user/profile/password`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ ...input }),
        });
        const json = await response.json();
        if (response.ok) {
            navigate("/profile");
            alert(json.message);
        } else {
            alert(json.error);
        }
    };

    return (
        <>
            <form className="passing" onSubmit={handleSubmit}>
                <div className="password passw">
                    <div className="field">
                        <input
                            type="password"
                            id="currentpass"
                            name="password"
                            className="pass"
                            placeholder="Old Password"
                            value={input.currentpass}
                            onChange={handleChange}
                        />
                        <i className="fa-solid fa-eye-slash eye-icon" onClick={toggleIcon}></i>
                    </div>
                </div>
                <div className="password passw">
                    <div className="field">
                        <input
                            type="password"
                            id="newpass"
                            name="password"
                            className="pass"
                            placeholder="New Password"
                            value={input.newpass}
                            onChange={handleChange}
                        />
                        <i className="fa-solid fa-eye-slash eye-icon" onClick={toggleIcon}></i>
                    </div>
                </div>
                <button className="btn btn-primary mx-1" type="submit">
                    Change
                </button>
            </form>
        </>
    );
}

export default Passchange;
