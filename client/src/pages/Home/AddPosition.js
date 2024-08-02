import { useRef } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import moment from "moment";
import { FaChevronDown } from 'react-icons/fa';

function AddPosition() {
  const { portfolioData } = useSelector((state) => state.root);
  const { addpositions } = portfolioData;

  return (
    <div>
      <div className="h-[vh-5] flex flex-col overflow-hidden scale-95">
        <SectionTitle text="bold" className="fixed" title="Additional Positions" />
        <div>
          <ul className="list-disc ml-4">
            {addpositions.map((addposition, index) => (
              <li key={index} className="mb-4">
                <div>
                  <h1 className="text-lg lg: w-1/2 font-medium">
                    {addposition.position} of {addposition.department}
                     {/* from {moment(addposition.tenurefrom).format('YYYY-MM-DD')} to {moment(addposition.tenureto).format('YYYY-MM-DD')} */}
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

export default AddPosition;