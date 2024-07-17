import React from "react";
import { Link } from "react-router-dom";

const ResultSection = () => {
    return (
        <div className="container my-5" id="result-section">
            <div className="p-5 text-center bg-body-tertiary rounded-3">
                <h2 className="text-body-emphasis">Results</h2>
                <div className="d-flex justify-content-around align-items-center my-5">
                    <div>
                        <h3>5000</h3>
                        Votes casted
                    </div>
                    <div>
                        <h3>154</h3>
                        Total candidates
                    </div>
                    <div>
                        <h3>XYZ</h3>
                        Highest votes
                    </div>
                </div>
                <div className="d-inline-flex gap-2 mb-3">
                    <Link
                        className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
                        to="/result">
                        Vote Count
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResultSection;
