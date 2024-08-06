import { useSelector } from "react-redux";

import About from "./About";
import Intro from "./Intro";
import Awards from "./Awards";
import CurrentPosition from "./CurrentPosition";
import PastPosition from "./PastPosition";
import Interest from "./Interest";
import Recognitions from "./Recognitions";
import AddPosition from "./AddPosition";
import VisitingPosition from "./VisitingPosition";
import Experience1 from "./Experience1";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      {portfolioData && (
        <div className="mt-16">
          <section id="intro">
            <Intro />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="current-position">
            <CurrentPosition />
          </section>
          <section id="add-position">
            <AddPosition />
          </section>
          <section id="past-position">
            <PastPosition />
          </section>
          <section id="visiting-position">
            <VisitingPosition />
          </section>
          <section id="experience1">
            <Experience1 />
          </section>
          <section id="awards">
            <Awards />
          </section>
          <section id="interest">
            <Interest />
          </section>
          <section id="recognitions">
            <Recognitions />
          </section>
        </div>
      )}
    </div>
  );
}

export default Home;
