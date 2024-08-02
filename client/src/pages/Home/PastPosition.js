import { useRef } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import moment from "moment";
import { FaChevronDown } from 'react-icons/fa';

function PastPosition() {
  const { portfolioData } = useSelector((state) => state.root);
  const { pastpositions } = portfolioData;

  return (
    <div>
      <div className="h-[vh-5] flex flex-col overflow-hidden scale-95">
        <SectionTitle text="bold" className="fixed" title="Past Positions" />
        <div>
          <ul className="list-disc ml-4">
            {pastpositions.map((pastposition, index) => (
              <li key={index} className="mb-4">
                <div>
                  <h1 className="text-lg font-medium">
                    {pastposition.position} of {pastposition.department} from {pastposition.tenurefrom} to {pastposition.tenureto}
                  </h1>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PastPosition;