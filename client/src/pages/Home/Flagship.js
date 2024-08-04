
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
        <>
        <div>
        <h1 className="mt-6 flex justify-center items-center text-4xl text-primary font-bold">Flagship Events</h1>

            <div className="ml-5 flex w-full items-center sm:flex-col mt-10 text-lg">
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
