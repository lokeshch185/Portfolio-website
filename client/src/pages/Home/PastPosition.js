import React, { useState } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import moment from "moment";

function PastPosition() {
  const { portfolioData } = useSelector((state) => state.root);
  const { pastpositions } = portfolioData;
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
      <SectionTitle text="bold" title="Past Positions" />
      <div className="space-y-4">
        {pastpositions.map((pastposition, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm"
            onMouseEnter={() => toggleAccordion(index)}
            onMouseLeave={() => toggleAccordion(-1)}
          >
            <div className="p-3 cursor-pointer">
              <h1 className="text-lg font-semibold mb-1">
                {pastposition.position}
              </h1>
              {expandedIndex === index && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600 font-semibold">
                    Department: {pastposition.department}
                  </p>
                  <div className="text-sm text-gray-600 font-semibold">
                    <p>From: {moment(pastposition.tenurefrom).format('YYYY-MM-DD')}</p>
                    <p>To: {moment(pastposition.tenureto).format('YYYY-MM-DD')}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastPosition;
