
import { useSelector } from "react-redux";
import { Table, Typography} from 'antd';
import moment from "moment";
import Talks from "./Talks"
import './Styles.css';
import Flagship from "./Flagship";
import Events from "./Events";
import Workshops from "./Workshops";
import FDP from "./FDP";
import Loader from "../../components/Loader";

const { Title, Text } = Typography;

function ORActivities() {

    const { loading, portfolioData } = useSelector((state) => state.root);
    const oractivities = portfolioData?.oractivities || [];

    if (loading) {
    return <div><Loader /></div>; // Show a loading state while data is being fetched
    }
    
    // Define table columns
    const columns = [
        
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            align: 'center',
            responsive: ['md'],
            fixed: 'left',
            render: (text) => moment(text).format('DD/MM/YYYY')
        },
        {
            title: 'Name of Organisation',
            dataIndex: 'organisation',
            key: 'organisation',
            align: 'center',
            fixed: 'left',
        },
        {
            title: 'OutReach Activity Type',
            dataIndex: 'type',
            key: 'type',
            align: 'center',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
            width: 10
        },
        {
            title: 'Responsibilities Handled',
            dataIndex: 'responsibilities',
            key: 'responsibilities',
            align: 'center',
        },
    
        {
            title: 'Remarks',
            dataIndex: 'remarks',
            key: 'remarks',
            align: 'center',
            responsive: ['md'],
        },
        
        
        
    ];

    return (
        <div className="mt-20">
            <div className="m-8 sm:m-4"id="oractivities">
            <h1 className="select-none flex hover:animate-pulse duration-150 py-4 sm:py-2 sm:mx-4 lg:mx-56 justify-start lg:justify-center items-center rounded-xl bg-gradient-to-r
             from-blue-300 via-blue-100 to-blue-300 shadow-xl shadow-gray-600 text-4xl sm:text-2xl font-semibold whitespace-nowrap">Outreach Activities</h1>
            <Table
                
                dataSource={oractivities}
                columns={columns}
                size="small"
                rowKey="_id"
                pagination={false}
                className="animated-table"
                bordered

            />
            <style jsx>{`
                .ant-table-thead > tr > th {
                font-family: 'Segoe UI', sans-serif;
                font-weight: regular;
                font-size: 16px;
                border-radius: 6px 6px 0 0; /* Rounded Top Corners */
                
                border: 3px solid #D1D5DB; /* Light Grey */
                background-color:#0D47A1  !important; /* Use primary color */
                color: white !important;
                

                }
            .ant-table-tbody > tr > td {
                background-color:#ADD8E6; 

              }
            `}</style>
            
        </div>

        <div id="talks">
            <Talks/>
        </div>
       
        {/* <Flagship />
        <Events /> */}
        <div id="fdps">
        <FDP />
        </div>
        <div id="workshops">
        <Workshops />
        </div>
        </div>
        
    );
}

export default ORActivities;