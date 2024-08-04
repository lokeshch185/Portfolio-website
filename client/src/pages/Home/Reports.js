
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";


function Reports() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const reports = portfolioData?.reports || [];

  if (loading) {
    return <div><Loader /></div>; // Show a loading state while data is being fetched
  }
    return (
        <>
        <div classname="min-h-screen">
        <h1 className="mt-6 flex justify-center items-center text-4xl text-primary font-bold ">Reports</h1>

            <div className="ml-5 sm:flex-col mt-10 mb-5 text-lg min-h-screen">
                <ul>
                    {reports.map((report, index) => (
                        <li key={index} className ="">
                            [{index + 1}] {report.title}
                            <br />
                            Link : {report.link && (
                                <>
                                    <a href={report.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                        {report.link}
                                    </a>
                                    
                                </>
                                
                            )}
                        </li>
                    ))}
                </ul>
            </div>


        </div>
        </>
        
    );
}

export default Reports;
