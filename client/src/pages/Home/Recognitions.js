import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import moment from "moment";

function Recognitions() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { recognitions } = portfolioData;
   console.log(recognitions);
  return (
    <div>
      <SectionTitle title="Recognitions" />

      <div className="flex w-full items-center sm:flex-col">
        <ul>
          {recognitions.map((recognition, index) => (
            <li key={index} className="text-white">
              Recognized as {recognition.title} with effect from {moment(recognition.date).format('YYYY-MM-DD')}
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

export default Recognitions;
