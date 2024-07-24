import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ResultSection = () => {
    const [totalVotes, setTotalVotes] = useState(0);
    const [totalCandidates, setTotalCandidates] = useState(0);
    const [highestVotes, setHighestVotes] = useState("");

    useEffect(() => {
        const fetchResults = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/candidate/vote/count`);
            const json = await response.json();
            if (response.ok) {
                let totVotes = 0;
                for (let i = 0; i < json.length; i++) {
                    const cur = json[i];
                    if (i === 0) setHighestVotes(cur.party);
                    totVotes += cur.count;
                }
                setTotalCandidates(json.length);
                setTotalVotes(totVotes);
            } else {
                alert(json.error);
            }
        };
        fetchResults();
    }, []);

    return (
        <div className="container my-5" id="result-section">
            <div className="p-5 text-center bg-body-tertiary rounded-3">
                <h2 className="text-body-emphasis">Results</h2>
                <div className="d-flex justify-content-around align-items-center my-5">
                    <div>
                        <h3>{totalVotes}</h3>
                        Votes casted
                    </div>
                    <div>
                        <h3>{totalCandidates}</h3>
                        Total candidates
                    </div>
                    <div>
                        <h3>{highestVotes}</h3>
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
