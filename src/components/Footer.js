import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 ">© {new Date().getFullYear()} Voting-App.India</p>

                <Link
                    to="/"
                    className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-black link-black text-decoration-none">
                    Back to Home
                </Link>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item ">
                        <Link to="/#candidate-section" className="nav-link px-2 text-black ">
                            Candidates
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/#result-section" className="nav-link px-2 text-black">
                            Result
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/#guide-section" className="nav-link px-2 text-black">
                            Guide
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/#contact-section" className="nav-link px-2 text-black">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
