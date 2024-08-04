
import { useState } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import moment from "moment";

function Awards() {
  const { portfolioData } = useSelector((state) => state.root);
  const { awards } = portfolioData;

  return (
    <div>
    <div className="h-[vh-5] flex flex-col overflow-hidden scale-95">
      <SectionTitle  text="bold" className="fixed" title="Awards" />

      <ul className="list-disc ml-5">
        {awards.map((award, index) => (
          <li key={index} className="pb-2">
            <div>
              <h1 className="text-lg font-medium">
              {award.title}
              </h1>
            </div>
          </li>
        ))}
      </ul>

    </div>
    </div>
  );
}

export default Awards;
