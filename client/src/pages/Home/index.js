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
import Interest from "./Interest";
import Recognitions from "./Recognitions";
import AddPosition from "./AddPosition";
import VisitingPosition from "./VisitingPosition";
import Flagship from "./Flagship";
import Events from "./Events";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      {/* <Header /> */}

      {portfolioData && (
        <div className="bg-primary ">
          <Intro />
          <About />
          <CurrentPosition/>
          <PastPosition/>
          <AddPosition />
          <VisitingPosition />
          <Experiences/>
          <Interest />
          <Awards/>
          <Recognitions />
          <Contact />
          <LeftSider />
        </div>
      )}
    </div>
  );
}

export default Home;
