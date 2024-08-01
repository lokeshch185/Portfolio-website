import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function VisitingPosition() {
  const { portfolioData } = useSelector((state) => state.root);
  const { visitingpositions } = portfolioData;

  return (
    <div className="container mx-auto px-4 py-4 bg-gray-50">
      <SectionTitle text="bold" title="Visiting Faculty at:" />
      <ul className="list-disc ml-5 space-y-2">
        {visitingpositions.map((visitingposition, index) => (
          <li key={index} className="pb-4">
            <div>
              <h1 className="text-lg font-medium">
                {visitingposition.institute} ({visitingposition.tenure}) <br />
                Course: {visitingposition.course}
              </h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VisitingPosition;