import React, { useState } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";


function VisitingPosition() {
  const { portfolioData } = useSelector((state) => state.root);
  const { visitingpositions } = portfolioData;
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand clicked item
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <SectionTitle text="bold" title="Visiting faculty at: " />
      <div className="space-y-4">
        {visitingpositions.map((visitingposition, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm"
            onMouseEnter={() => toggleAccordion(index)}
            onMouseLeave={() => toggleAccordion(-1)}
          >
            <div className="p-3 cursor-pointer">
              <h1 className="text-lg font-semibold mb-1">
                {visitingposition.institute}
              </h1>
              {expandedIndex === index && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600 font-semibold">
                    Course taught: {visitingposition.course}
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    Tenure: {visitingposition.tenure}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VisitingPosition;
