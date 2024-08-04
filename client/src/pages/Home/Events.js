
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import SectionTitle from "../../components/SectionTitle";

function Events() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const events = portfolioData?.events || [];

  if (loading) {
    return <div><Loader /></div>; // Show a loading state while data is being fetched
  }
    return (
        <div classname = "container m-10 px-5">
            <h1 className="flex justify-center items-center text-4xl text-primary font-bold">Events</h1>

                <div className="ml-5 flex w-full items-center sm:flex-col mt-10 text-lg">
                <ul>
                    {events.map((event, index) => (
                        <li key={index} className="mb-2 p-2">
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
