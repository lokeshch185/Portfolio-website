
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Interest() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { interests } = portfolioData;
  return (
    <div>
    <div className="h-[vh-5] flex flex-col overflow-hidden scale-95">
      <SectionTitle text = "bold" className="fixed" title="Areas Of Interest" />

        <ul className="list-disc ml-5"l>
          {interests.map((interest, index) => (
            <li key={index} className="text-lg font-medium mb-1">
              {interest.title}
            </li>
          ))}
        </ul>




    </div>
    </div>
  );
}

export default Interest;
