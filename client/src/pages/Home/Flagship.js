import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Flagship() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { flagships } = portfolioData;
    console.log(portfolioData);
    console.log(flagships);
    return (
        <div>
            <SectionTitle title="Flagship Events" />

            <div className="flex w-full items-center sm:flex-col">
                <ul>
                    {flagships.map((flagship, index) => (
                        <li key={index} className ="">
                            {`${flagship.event} [${flagship.year}] at ${flagship.venue}`}
                            <br />
                            {`Role: ${flagship.role}`}
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

export default Flagship;
