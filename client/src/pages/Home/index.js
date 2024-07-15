import React from "react";
import { useSelector } from "react-redux";

import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Experiences from "./Experiences";
import Footer from "./Footer";
import Intro from "./Intro";
import LeftSider from "./LeftSider";
import Projects from "./Projects";
import Awards from "./Awards";
import CurrentPosition from "./CurrentPosition";
import PastPosition from "./PastPosition";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      {/* <Header /> */}

      {portfolioData && (
        <div className="bg-primary px-40 sm:px-10 ">
          <Intro />
          <About />
          <CurrentPosition/>
          <PastPosition/>
          <Experiences />
          {/* <Projects />
          <Courses /> */}
          <Awards/>
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      )}
    </div>
  );
}

export default Home;
