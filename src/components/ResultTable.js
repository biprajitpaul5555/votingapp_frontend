import React, { useState, useEffect } from "react";

const ResultTable = () => {
    const [partyName, setPartyName] = useState("BJP(Bharatiya Janata Party)");
    const [partyList, setPartyList] = useState([]);
    useEffect(() => {
        const fetchResults = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/candidate/${partyName}`);
            const json = await response.json();
            if (response.ok) {
                setPartyList(json);
                console.log(json);
            } else {
                alert(json.error);
            }
        };
        fetchResults();
    }, [partyName]);

    return (
        <div className="container py-5 my-5" id="guide-section">
            <h2 className="pb-2 border-bottom text-center">Candidate Votes</h2>
            <div className="accordion rounded-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            onClick={(e) => setPartyName(e.target.innerText)}
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            BJP(Bharatiya Janata Party)
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sl no.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Votecount</th>
                                    </tr>
                                </thead>
                                {partyList.map((candidate, idx) => {
                                    return (
                                        <tbody key={idx}>
                                            <th scope="row">{idx + 1}</th>
                                            <td>{candidate.name}</td>
                                            <td>{candidate.age}</td>
                                            <td>{candidate.votecount}</td>
                                        </tbody>
                                    );
                                })}
                            </table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            onClick={(e) => setPartyName(e.target.innerText)}
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo">
                            INC(Indian National Congress)
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sl no.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Votecount</th>
                                    </tr>
                                </thead>
                                {partyList.map((candidate, idx) => {
                                    return (
                                        <tbody key={idx}>
                                            <th scope="row">{idx + 1}</th>
                                            <td>{candidate.name}</td>
                                            <td>{candidate.age}</td>
                                            <td>{candidate.votecount}</td>
                                        </tbody>
                                    );
                                })}
                            </table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            onClick={(e) => setPartyName(e.target.innerText)}
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree">
                            CPIM(Communist Party of India Marxist)
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sl no.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Votecount</th>
                                    </tr>
                                </thead>
                                {partyList.map((candidate, idx) => {
                                    return (
                                        <tbody key={idx}>
                                            <th scope="row">{idx + 1}</th>
                                            <td>{candidate.name}</td>
                                            <td>{candidate.age}</td>
                                            <td>{candidate.votecount}</td>
                                        </tbody>
                                    );
                                })}
                            </table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            onClick={(e) => setPartyName(e.target.innerText)}
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour">
                            AAP(Aam Admi Party)
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sl no.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Votecount</th>
                                    </tr>
                                </thead>
                                {partyList.map((candidate, idx) => {
                                    return (
                                        <tbody key={idx}>
                                            <th scope="row">{idx + 1}</th>
                                            <td>{candidate.name}</td>
                                            <td>{candidate.age}</td>
                                            <td>{candidate.votecount}</td>
                                        </tbody>
                                    );
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultTable;
