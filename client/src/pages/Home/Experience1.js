import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Experience1() {
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  return (
    <div>
    <div className="h-[vh-5] flex flex-col overflow-hidden scale-95">
      <SectionTitle text="bold" className="fixed" title="Teaching Experience" />

      <ul className="list-disc ml-5">
        {experiences.map((experience, index) => (
          <li key={index} className="pb-2">
            <div>
              <h1 className="text-lg font-medium">
                {experience.title} at  {experience.company} from  {experience.period} 
              </h1>
            </div>
          </li>
        ))}
      </ul>

    </div>
    </div>
  );
}

export default Experience1;
