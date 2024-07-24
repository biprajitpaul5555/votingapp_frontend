import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <img
                className="d-block mx-auto mb-4"
                src="/votingapp_frontend/images/voteIndia.jpg"
                alt="logo"
                width="72"
                height="57"
            />
            <h1 className="display-5 fw-bold text-body-emphasis">Empower Yourself</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    “Your vote is your voice. Make it heard.” “Democracy is not a spectator sport. Get involved!” “The
                    power of the people is stronger than the people in power.” “Every vote counts. Every voice matters.”
                    “Be the change you wish to see in the world. Vote!”
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/signup" type="button" className="btn btn-primary btn-lg px-4 gap-3">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
