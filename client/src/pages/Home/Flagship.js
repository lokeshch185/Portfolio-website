import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import Events from "./Events";

function Flagship() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { flagships } = portfolioData;
    console.log(portfolioData);
    console.log(flagships);
    return (
        <>
        <div classname = "container m-10 px-5">
            <SectionTitle text = "bold" title="Flagship Events" />

            <div className="flex items-center sm:flex-col">
                <ul>
                    {flagships.map((flagship, index) => (
                        <li key={index} className ="">
                            [{index + 1}] {flagship.event}
                            [{flagship.year}] at {flagship.college}
                            <br />
                            {`Role: ${flagship.role}`}
                            <br></br>
                            <br></br>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
        <Events />
        </>
        
    );
}

export default Flagship;
