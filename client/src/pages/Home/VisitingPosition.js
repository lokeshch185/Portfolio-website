import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function VisitingPosition() {
  const { portfolioData } = useSelector((state) => state.root);
  const { visitingpositions } = portfolioData;

  return (
    <div>
    {/* <div className="container mx-auto px-4 py-4 bg-gray-50"> */}
    <div className="h-[vh-5] flex flex-col overflow-hidden scale-95">
      <SectionTitle text="bold" className="fixed" title="Visiting Faculty at:" />
      <ul className="list-disc ml-5">
        {visitingpositions.map((visitingposition, index) => (
          <li key={index} className="pb-2">
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
    </div>
  );
}

export default VisitingPosition;