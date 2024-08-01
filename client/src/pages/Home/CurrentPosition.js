import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import moment from "moment";

function VisitingPosition() {
  const { portfolioData } = useSelector((state) => state.root);
  const { currentpositions } = portfolioData;

  return (
    <div className="h-[vh-5] flex flex-col overflow-hidden mt-5 scale-95">
      <SectionTitle text="bold" title="Current Positions" />
      <ul className="list-disc ml-5 space-y-2">
        {currentpositions.map((currentposition, index) => (
          <li key={index} className="pb-4">
            <div>
              <h1 className="text-lg font-medium">
                {currentposition.position} in {currentposition.department} <br />
                Course: {moment(currentposition.tenure).format("YYYY-MM-DD")}
              </h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VisitingPosition;