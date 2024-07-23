import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Events() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { events } = portfolioData;
    // console.log(interests);
    console.log(portfolioData);
    return (
        <div>
            <SectionTitle title="Events" />

            <div className="flex w-full items-center sm:flex-col">
                <ul>
                    {events.map((event, index) => (
                        <li key={index} className="text-white mb-2">
                            {`[${index + 1}] ${event.event}`}
                            <br />
                            {`Venue: ${event.venue} Date: ${event.date}`}
                            <br />
                            {`Role: ${event.role}`}
                            {event.weblink && (
                                <>
                                    <br />
                                    <a href={event.weblink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                        {event.weblink}
                                    </a>
                                </>
                            )}
                        </li>
                    ))}
                </ul>


                {/* <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">{description1 || ""}</p>
          <p className="text-white">{description2 || ""}</p> */}
                {/* </div> */}
            </div>


        </div>
    );
}

export default Events;
