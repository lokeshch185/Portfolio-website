
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import Events from "./Events";
import Loader from "../../components/Loader";

function Flagship() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const flagships = portfolioData?.flagships || [];


  if (loading) {
    return <div><Loader /></div>; // Show a loading state while data is being fetched
  }

    return (
        <div className="mt-20">
         <div id="events" className="px-4 "><Events /></div>
        <div id="flagship-events" className="px-4 ">
        <SectionTitle text = "bold" className="fixed" title="Flagship Events" />

            <div className="ml-5 flex  items-center sm:flex-col mt-10 text-lg">
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
       
       
        </div>
        
    );
}

export default Flagship;
