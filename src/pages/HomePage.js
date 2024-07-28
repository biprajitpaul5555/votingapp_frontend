import React from "react";
import HeroSection from "../components/HeroSection";
import CandidateSection from "../components/CandidateSection";
import ResultSection from "../components/ResultSection";
import GuideSection from "../components/GuideSection";
import ContactSection from "../components/ContactSection";

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
