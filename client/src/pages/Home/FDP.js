
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import { convertLegacyProps } from "antd/lib/button/button";
import moment from "moment";
import Loader from "../../components/Loader";

function FDP() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const fdps = portfolioData?.fdps || [];

if (loading) {
  return <div><Loader /></div>; // Show a loading state while data is being fetched
}
  return (
    
      <div className="m-10">
      <h1 className="flex justify-center items-center text-4xl text-primary font-bold">Faculty Development Programs</h1>

      <div className="flex w-full items-center sm:flex-col mt-10 text-lg">
        <ul>
          {fdps.map((fdp, index) => (
            <li key={index} className="text-black">
                [{index + 1}] 
             Title: {fdp.title}
              <br></br>
              Description: {fdp.description}
              <br></br>
              From: {moment(fdp.from).format('YYYY-MM-DD')}
              <br></br>
              To: {moment(fdp.from).format('YYYY-MM-DD')}
              <br></br><br></br>
            </li>
          ))}
        </ul>


      </div>


    </div>
  );
}

export default FDP;
