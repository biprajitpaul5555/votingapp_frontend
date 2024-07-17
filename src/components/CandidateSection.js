import React from "react";
import { Link } from "react-router-dom";

const CandidateSection = () => {
    return (
        <div className="container px-4 py-5 my-5" id="candidate-section">
            <h2 className="pb-2 border-bottom text-center">Candidates</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="/images/vote.jpg" className="card-img-top" alt="candidate-dp" />
                        <div className="card-body">
                            <h5 className="card-title">Candidate 1</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="/images/vote.jpg" className="card-img-top" alt="candidate-dp" />
                        <div className="card-body">
                            <h5 className="card-title">Candidate 2</h5>
                            <p className="card-text">
                                This card has supporting text below as a natural lead-in to additional content.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="/images/vote.jpg" className="card-img-top" alt="candidate-dp" />
                        <div className="card-body">
                            <h5 className="card-title">Candidate 3</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This card has even longer content than the first to show that equal height
                                action.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-2">
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/candidate" type="button" className="btn btn-primary btn-lg px-4 gap-3">
                        Vote Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CandidateSection;
