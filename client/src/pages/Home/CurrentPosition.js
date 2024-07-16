import React, { useState } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import moment from "moment";

function CurrentPosition() {
  const { portfolioData } = useSelector((state) => state.root);
  const { currentpositions } = portfolioData;
  const [expandedIndex, setExpandedIndex] = useState(-1); // -1 means none is expanded initially

  const handleHover = (index) => {
    setExpandedIndex(index); // Expand hovered item
  };

  const handleHoverLeave = () => {
    setExpandedIndex(-1); // Collapse on hover leave
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <SectionTitle text="bold" title="Current Positions" />
      <div className="space-y-4">
        {currentpositions.map((currentposition, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleHoverLeave}
          >
            <div className="p-3 cursor-pointer">
              <h1 className="text-lg font-semibold mb-1">
                {currentposition.position}
              </h1>
              {expandedIndex === index && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600 font-semibold">
                    Department: {currentposition.department}
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    Working from:{" "}
                    {moment(currentposition.tenure).format("YYYY-MM-DD")}
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

export default CurrentPosition;
