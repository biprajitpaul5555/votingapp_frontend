import React from "react";
import HeroSection from "./HeroSection";
import CandidateSection from "./CandidateSection";
import GuideSection from "./GuideSection";
import ResultSection from "./ResultSection";
import ContactSection from "./ContactSection";

const HomePage = ({ candidates }) => {
    return (
        <>
            <HeroSection />
            <CandidateSection candidates={candidates} />
            <ResultSection />
            <GuideSection />
            <ContactSection />
        </>
    );
};

export default HomePage;
