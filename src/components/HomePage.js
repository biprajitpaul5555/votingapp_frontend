import React from "react";
import HeroSection from "./HeroSection";
import CandidateSection from "./CandidateSection";
import GuideSection from "./GuideSection";
import ResultSection from "./ResultSection";
import ContactSection from "./ContactSection";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <CandidateSection />
            <ResultSection />
            <GuideSection />
            <ContactSection />
        </>
    );
};

export default HomePage;
