import React from "react";
import { Link } from "react-router-dom";

const CandidateSection = ({ candidates }) => {
    const first3Candidates = candidates.slice(0, 3);

    return (
        <div className="container px-4 py-5 my-5" id="candidate-section">
            <h2 className="pb-2 border-bottom text-center">Candidates</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* <div className="col">
                    <div className="card h-100">
                        <img src="/images/candidate1.jpg" className="card-img-top toptop" alt="candidate-dp" />
                        <div className="card-body">
                            <h5 className="card-title">Arjun Sharma</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Candidate Party : <span>INC(Indian National Congress)</span></h6>
                            <p className="card-text">
                                Union Cabinet Minister for last 10 years of Politics.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="/images/candidate2.jpg" className="card-img-top toptop" alt="candidate-dp" />
                        <div className="card-body">
                            <h5 className="card-title">Priya Patel</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Candidate Party : <span>INC(Indian National Congress)</span></h6>
                            <p className="card-text">
                                Stayed CM(Chief Minister)of UTTAR PRADESH for last 5 years .
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="/images/candidate3.jpg" className="card-img-top toptop" alt="candidate-dp" />
                        <div className="card-body">
                            <h5 className="card-title">Rohan Gupta</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Candidate Party : <span>BJP(Bharatiya Janata Party)</span></h6>
                            <p className="card-text">
                                Competing for the first in Parliamentary Election.
                            </p>
                        </div>
                    </div>
                </div> */}
                {first3Candidates.map((candidate, idx) => {
                    return (
                        <div className="col" key={idx}>
                            <div className="card h-100">
                                <img
                                    src={`/images/candidate${idx + 1}.jpg`}
                                    className="card-img-top toptop"
                                    alt="candidate-dp"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{candidate.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        Candidate Party : <span>{candidate.party}</span>
                                    </h6>
                                    <p className="card-text">{candidate.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="row mt-2">
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/candidate" type="button" className="btn btn-primary btn-lg px-4 gap-3">
                        See All Candidates
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CandidateSection;
