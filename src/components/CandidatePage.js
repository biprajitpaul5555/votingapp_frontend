import React from "react";

const CandidatePage = () => {
    return (
        <div className="container mt-3 mb-5">
            <h1 className="text-center mb-3"> All Candidates</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                <div className="col">
                    <div className="card">
                        <img src="/images/vote.jpg" className="card-img-top" alt="candidate-dp" />
                        <div className="card-body">
                            <h5 className="card-title">Candidate Name</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Candidate Party</h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Age</h6>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary">Vote this candidate</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/vote.jpg" className="card-img-top" alt="candidate-dp" />
                        <div className="card-body">
                            <h5 className="card-title">Candidate Name</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Candidate Party</h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Age</h6>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary">Vote this candidate</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/vote.jpg" className="card-img-top" alt="candidate-dp" />
                        <div className="card-body">
                            <h5 className="card-title">Candidate Name</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Candidate Party</h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Age</h6>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in to additional
                                content.
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary">Vote this candidate</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/vote.jpg" className="card-img-top" alt="candidate-dp" />
                        <div className="card-body">
                            <h5 className="card-title">Candidate Name</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Candidate Party</h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Age</h6>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary">Vote this candidate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidatePage;
