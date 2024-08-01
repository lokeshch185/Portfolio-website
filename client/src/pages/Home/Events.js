
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Events() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { events } = portfolioData;

    return (
        <div>
            <SectionTitle title="Events" />

            <div className="flex w-full items-center px-2 sm:flex-col">
                <ul>
                    {events.map((event, index) => (
                        <li key={index} className="mb-2">
                            [{index + 1}] {event.event}
                            <br />
                            Venue: {event.venue} Date: {event.date}
                            <br />
                            Role: {event.role}
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
            </div>
        </div>
    );
}

export default Events;
