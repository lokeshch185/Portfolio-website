
import { useSelector } from "react-redux";
import { Space, Table, Typography } from 'antd';
import moment from "moment";
import "../../index.css"


const {Title, Text} = Typography;

function Talks() {

    const { portfolioData } = useSelector((state) => state.root);

    // Safely access awards with optional chaining and provide a default empty array
    const talks = portfolioData?.talks || [];

    console.log(portfolioData);

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
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
            fixed: 'left',
            width: 10
        },
        {
            title: 'Type of audience',
            dataIndex: 'type_of_audience',
            key: 'type_of_audience',
            align: 'center',
        },
        {
            title: 'Number of audience',
            dataIndex: 'number',
            key: 'number',
            align: 'center',
        },
        {
            title: 'Name of organisation',
            dataIndex: 'org_name',
            key: 'org_name',
            align: 'center',
        },
        {
            title: 'Remarks',
            dataIndex: 'remark',
            key: 'remark',
            align: 'center',
            // responsive: ['md'],
        },
        

    ];



    return (
        <div>
          
        <div className="m-8 sm:m-4">
            <h1 className="select-none flex hover:animate-pulse duration-150 py-4 sm:py-2 sm:mx-4 lg:mx-80 justify-start lg:justify-center items-center rounded-xl bg-gradient-to-r
             from-blue-300 via-blue-100 to-blue-300 shadow-xl shadow-gray-600 text-4xl sm:text-2xl font-semibold whitespace-nowrap">Talks</h1>
        <Table
            dataSource={talks}
            columns={columns}
            size="small"
            rowKey="_id"
            pagination={false}
            className=""
            bordered
            scroll={{
                    x: 'max-content', // Enable horizontal scroll
                    // Enable vertical scroll with a height limit
                }}

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

    </div>
    );
}

export default Talks;