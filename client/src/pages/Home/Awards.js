
import { useState } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import moment from "moment";

function Awards() {
  const { portfolioData } = useSelector((state) => state.root);
  const { awards } = portfolioData;

  return (
    <div className="bg-slate-50 mx-auto px-3 pt-5">
      <SectionTitle title="Awards" />

      <div className="flex flex-col gap-2 py-5">
        {awards.map((award, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-center  pl-4">
            <p className="text-lg font-medium text-black"> • {award.title}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Awards;
