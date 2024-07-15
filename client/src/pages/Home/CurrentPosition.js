import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import { current } from "@reduxjs/toolkit";
import moment from "moment";


function CurrentPosition() {
  const [selectedItemIndex , setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { currentpositions } = portfolioData;
  return (
    <div>
      <SectionTitle title="Current Positions" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {currentpositions.map((currentposition, index) => (
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
                     : "text-white"
                 } `}
              >
                {currentposition.position}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            Department : {currentpositions[selectedItemIndex].department}
          </h1>
          <h1 className="text-tertiary text-xl">
          Working from: {moment(currentpositions[selectedItemIndex].tenure).format('YYYY-MM-DD')}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CurrentPosition;
