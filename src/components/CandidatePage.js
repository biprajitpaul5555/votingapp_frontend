import React from "react";

const CandidatePage = () => {
    return (
        <div className="container mt-3 mb-5">
            <h1 className="text-center mb-3"> All Candidates</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                <div className="col">
                    <div className="card">
                        <img src="/images/candidate1.jpg" className="card-img-top" alt="candidate-dp" />
                        <div className="card-body">
                            <h5 className="card-title">Arjun Sharma</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Candidate Party : <span>INC(Indian National Congress)</span></h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Age : <span>65</span></h6>
                            <p className="card-text">
                                Union Cabinet Minister for last 10 years of Politics.
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary">Vote this candidate</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/candidate2.jpg" className="card-img-top" alt="candidate-dp" />
                        <div className="card-body">
                            <h5 className="card-title">Priya Patel</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Candidate Party : <span>INC(Indian National Congress)</span></h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Age : <span>35</span></h6>
                            <p className="card-text">
                                Stayed CM(Chief Minister)of UTTAR PRADESH for last 5 years .
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary">Vote this candidate</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/candidate3.jpg" className="card-img-top" alt="candidate-dp" />
                        <div className="card-body">
                            <h5 className="card-title">Rohan Gupta</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Candidate Party : <span>BJP(Bharatiya Janata Party)</span></h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Age : <span>71</span></h6>
                            <p className="card-text">
                            Served as MP(Member of Parliament) for last 10 years.
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary">Vote this candidate</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/candidate4.jpg" className="card-img-top" alt="candidate-dp" />
                        <div className="card-body">
                            <h5 className="card-title">Karan Mehta</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Candidate Party : <span>AAP(Aam Admi Party)</span></h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Age : <span>52</span></h6>
                            <p className="card-text">
                            Competing for the first in Parliamentary Election.
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
