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
        <div className="bg-primary px-40 sm:px-10 ">
          <Intro />
          <About />
          <CurrentPosition/>
          <PastPosition/>
          <AddPosition />
          <VisitingPosition />
          <Experiences/>
          <Interest />
          <Projects />
          <Courses />
          <Awards/>
<<<<<<< HEAD
          
=======
>>>>>>> 52b6b3032f6b048b43136ab539156602df36287e
          <Recognitions />

          <Contact />
          
          <LeftSider />
        </div>
      )}
    </div>
  );
}

export default Home;
