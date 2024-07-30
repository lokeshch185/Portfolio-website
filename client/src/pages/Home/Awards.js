import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import { current } from "@reduxjs/toolkit";
import moment from "moment";


function CurrentPosition() {
  const [selectedItemIndex , setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { awards } = portfolioData;
  return (
    <div>
      <SectionTitle title="Awards" />

      <div className="flex py-10 gap-10 sm:flex-col">
        <div className="flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {awards.map((award, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                 ${
                   selectedItemIndex === index
                     ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                     : "text-black"
                 } `}
              >
                {award.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 items-center">
        <img 
            src={awards[selectedItemIndex].photo} 
            alt={awards[selectedItemIndex].title} 
            className="w-64 h-auto object-cover rounded-lg"
          />
        </div>
        <div>
        <h1 className="text-tertiary text-xl">
            Date: {moment(awards[selectedItemIndex].date).format('YYYY-MM-DD')}
          </h1>
          <h1 className="text-tertiary text-xl">
            Organisation : {awards[selectedItemIndex].organisation}
          </h1>
          <h1 className="text-secondary text-xl">
            {awards[selectedItemIndex].remark}
          </h1>
          
        </div>
      </div>
    </div>
  );
}

export default CurrentPosition;
