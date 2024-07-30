import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Experience1() {
  const [selectedItemIndex , setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  return (
    <div className=" container mx-auto px-4 py-4">
      <SectionTitle title="Teaching Experience" />

      {/* <div className="h-[vh-2]  flex py-10 gap-20 sm:flex-col">
        <div className="overflow-y-scroll  flex flex-col gap-7 border-l-2 border-[#135e4c82] sm:flex-row sm:overflow-x-scroll sm:w-full w-1/4"> */}
         <div className=" flex py-5 gap-10  sm:flex-col max-h-[50vh]">
         {/* <div className="grid grid-cols-1 gap-2"> Reduced gap */}
         <div className="flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3 overflow-y-auto sm:flex-row sm:overflow-x-scroll sm:w-full">
         
          {experiences.map((experience, index) => (
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
                     ? "text-black border-tertiary border-l-4  bg-slate-400 ml-3 py-3"
                     : "text-black"
                 } `}
              >
                {experience.title}
              </h1>
            </div>
          ))}
        </div>

        {/* <div className="max-h-[calc(70vh-120px)] flex flex-col justify-center gap-5 w-1/2 "> */}
        <div className="max-h-[calc(70vh-120px)] flex flex-col gap-5 w-1/2 ">
          <h1 className="text-primary text-3xl font-semibold">
            {experiences[selectedItemIndex].company}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].period}
          </h1>
          <p className="text-black ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            expedita accusantium nulla ad odio quisquam consequuntur laudantium
            saepe ratione consectetur optio necessitatibus ut, impedit ducimus
            corrupti ullam veniam error non.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience1;
