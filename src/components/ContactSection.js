import React from "react";

const ContactSection = () => {
    return (
        <form
            className="container px-4 py-5 my-5"
            id="contact-section"
            action={`mailto:modaksutirtha9@gmail.com`}
            method="post"
            enctype="text/plain">
            <h2 className="pb-2 border-bottom text-center">Have Your Say</h2>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                </label>
                <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Feedback
                </label>
                <textarea
                    name="feedback"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Feel free, share your thoughts"></textarea>
            </div>

            <div className="row mt-2">
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="submit" className="btn btn-primary btn-lg px-4 gap-3">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactSection;
