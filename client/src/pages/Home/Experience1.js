import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Experience1() {
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  return (
    <div className=" container mx-auto px-4 py-4">
      <SectionTitle title="Teaching Experience" />

      <div className="flex flex-col gap-2 py-5">
        {experiences.map((experience, index) => (
          <div 
            key={index} 
            className="flex flex-col px-2 sm:flex-row sm:items-start sm:gap-6 sm:p-6"
          >
            {/* Experience Title */}
            <h1 className="text-lg sm:text-md font-medium w-full sm:w-auto sm:mr-4">
            • {experience.title} at  {experience.company} from  {experience.period}
            </h1>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Experience1;
