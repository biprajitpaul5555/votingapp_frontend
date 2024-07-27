import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CandidatePage = ({ candidates }) => {
    const [profile, setProfile] = useState({});
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

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
                navigate("/login");
                // alert(json.error);
                alert("Please log in to access that page");
            }
        };
        fetchProfile();
    }, [clicked, navigate]);

    const handleClick = async (e) => {
        const candidateid = e.target.value;
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/candidate/vote/${candidateid}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const json = await response.json();
        if (response.ok) {
            alert(json.message);
            setClicked(true);
        } else {
            alert(json.error);
        }
    };

    return (
        <div className="container mt-3 mb-5">
            <h1 className="text-center mb-3"> All Candidates</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {candidates.map((candidate, idx) => {
                    return (
                        <div className="col" key={idx}>
                            <div className="card">
                                <img
                                    src={`/votingapp_frontend/images/candidate${idx + 1}.jpg`}
                                    className="card-img-top"
                                    alt="candidate-dp"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{candidate.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        Candidate Party : <span>{candidate.party}</span>
                                    </h6>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        Age : <span>{candidate.age}</span>
                                    </h6>
                                    <p className="card-text">{candidate.description}</p>
                                </div>
                                <div className="card-footer text-center">
                                    <button
                                        className="btn btn-primary"
                                        value={candidate._id}
                                        onClick={handleClick}
                                        disabled={profile.isvote}>
                                        Vote this candidate
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CandidatePage;
