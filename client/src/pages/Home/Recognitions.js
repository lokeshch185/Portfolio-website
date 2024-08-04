
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import moment from "moment";

function Recognitions() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { recognitions } = portfolioData;
   console.log(recognitions);
  return (
    <div>
    <div className="h-[vh-5] flex flex-col overflow-hidden scale-95">
      <SectionTitle text = "bold" className="fixed" title="Recognitions" />
      <ul className="list-disc ml-5">
          {recognitions.map((recognition, index) => (
            <li key={index} className="text-lg font-medium mb-1 py-1" style={{ fontSize: '17px' }}>
            {recognition.title} 
            </li>
          ))}
        </ul>
    </div>
    </div>
  );
}

export default Recognitions;
