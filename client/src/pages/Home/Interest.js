import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Interest() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { interests } = portfolioData;
  // console.log(interests);
  // console.log(portfolioData);
  // const { skills, lottieURL, description1, description2 } = interests;
  return (
    <div>
      <SectionTitle title="Areas Of Interest" />

      <div className="flex w-full items-center sm:flex-col">
        <ul>
          {interests.map((interest, index) => (
            <li key={index} className="text-white">
              {interest.title}
            </li>
          ))}
        </ul>

        {/* <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">{description1 || ""}</p>
          <p className="text-white">{description2 || ""}</p> */}
        {/* </div> */}
      </div>


    </div>
  );
}

export default Interest;
