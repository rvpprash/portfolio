"use client";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InteractivePointer from "./components/InteractivePointer";
import MyWork from "./components/MyWork";
import PageSection from "./components/PageSection";
import ParticlesBackground from "./components/ParticlesBackground";
import Portfolio from "./components/Portfolio";
import PortfolioLayout from "./components/PortfolioLayout";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import TypewriterLines from "./components/TypewriterLines";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <InteractivePointer />
      <main
        id="mainContent"
        className={`text-white h-screen pt-[57px] snap-y snap-mandatory overflow-y-scroll no-scrollbar scrollbar-hide scroll-smooth overflow-x-hidden`}
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
        }}
      >
        <Header />
        <PageSection
          id="Summary"
          classes="min-h-[calc(100vh-57px)] pt-[57px] snap-center flex flex-col items-start justify-center px-8 md:px-24 box-border"
        >
          <div className="flex-grow flex flex-col justify-center items-center">
            <Summary />
          </div>
          <div className="mt-auto mb-8 self-center">
            <TypewriterLines />
          </div>
        </PageSection>
        <PageSection
          id="work"
          classes="min-h-screen snap-start pt-20 flex flex-col md:flex-row items-center bg-[#111826] px-8 md:px-24 overflow-y-auto"
        >
          <MyWork />
        </PageSection>
        <PageSection
          id="projects"
          classes="min-h-[calc(100vh-57px)] snap-start  px-8 md:px-24 bg-black-faint overflow-y-auto"
        >
          <PortfolioLayout />
        </PageSection>
        {/* <PageSection
          id="contact"
          classes="h-screen snap-center px-8 md:px-24 py-24 bg-black-faint"
        >
          <Contact />
        </PageSection> */}
        <Footer id="footer" />
      </main>
    </>
  );
}
