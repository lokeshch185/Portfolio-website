
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
          <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:gap-4 pl-4">
            <h1 className="text-lg font-semibold text-black"> • {award.title}</h1>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <h1 className="text-primary text-xs">Date: {moment(award.date).format('YYYY-MM-DD')}</h1>
              <h1 className="text-primary text-xs">Organisation: {award.organisation}</h1>
              <h1 className="text-secondary text-xs">{award.remark}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Awards;
