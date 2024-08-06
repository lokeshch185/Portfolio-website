
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
        <div id="events">
            
            <SectionTitle text = "bold" className="fixed" title="Events" />
                <div className="ml-5  text-lg">
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
                                        Link
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
