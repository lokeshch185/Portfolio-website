import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Experience1() {
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  return (
    <div className="bg-slate-200 container mx-auto px-4 py-4">
      <SectionTitle title="Teaching Experience" />

      <div className="flex flex-col gap-2 py-5">
        {experiences.map((experience, index) => (
          <div 
            key={index} 
            className="flex flex-col px-2 sm:flex-row sm:items-start sm:gap-6 sm:p-6"
          >
            {/* Experience Title */}
            <h1 className="text-md sm:text-md text-black font-semibold w-full sm:w-auto sm:mr-4">
            • {experience.title}
            </h1>
            {/* Experience Details */}
            <div className="flex flex-col gap-1 sm:gap-2">
              <h1 className="text-primary text-xs sm:text-base font-semibold">
                {experience.company}
              </h1>
              <h1 className="text-tertiary text-xs sm:text-base">
                {experience.period}
              </h1>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                expedita accusantium nulla ad odio quisquam consequuntur laudantium
                saepe ratione consectetur optio necessitatibus ut, impedit ducimus
                corrupti ullam veniam error non.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience1;
