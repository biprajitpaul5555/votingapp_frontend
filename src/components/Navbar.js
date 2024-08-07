import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
        alert("Logged out successfully");
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top navii">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/">
                        Voting App
                    </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/#candidate-section">
                                Candidates
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#result-section">
                                Result
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#guide-section">
                                Guide
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#contact-section">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    {!localStorage.getItem("token") ? (
                        <form className="d-flex">
                            <Link className="btn btn-primary mx-1" to="/login" role="button">
                                Login
                            </Link>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">
                                Signup
                            </Link>
                        </form>
                    ) : (
                        <form className="d-flex">
                            <Link to="/profile" role="button">
                                <img
                                    src="/votingapp_frontend/images/users.png"
                                    alt="user-logo"
                                    id="nav-user-logo"
                                    className="mx-1"
                                />
                            </Link>
                            <button className="btn btn-primary mx-1" onClick={handleLogout}>
                                Logout
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
