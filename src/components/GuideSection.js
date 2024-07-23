import React from "react";

const GuideSection = () => {
    return (
        <div className="container py-5 my-5" id="guide-section">
            <h2 className="pb-2 border-bottom text-center">Quick Voting Guide</h2>
            <div className="accordion rounded-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Who can Vote ?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Adults above 18 Years of age.</strong> Each an Every Citizend of India who is above 18 Years of age
                            , wheather its Male or Female or of any caste creed and section of society can caste their Votes for any 
                            Candidate of their choice.{" "}
                            {/* <code>.accordion-body</code> */}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo">
                            Basic Overview of Election in India
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Democratic Government For the people, Of the people , By the people.</strong> There is Different levels
                            at which Indian elections takes place, 542 Parliamentary Seats are available, and at Assembly level States have
                            minimum of 60 seats , the people of India or state Elect their Leader every 5 years{" "}
                            {/* <code>.accordion-body</code> */}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree">
                            When and how can we vote in this App ?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>24 X 7.</strong> You can Vote in this App whenever you want but <strong>Once</strong> , for Login and Signup
                            you have to use your Aadhaar credential and can make your profile and can choose anyone you want to vote for. For any query
                            Contact us in the below section. {" "}
                            {/* <code>.accordion-body</code>, though the transition does limit overflow. */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideSection;
