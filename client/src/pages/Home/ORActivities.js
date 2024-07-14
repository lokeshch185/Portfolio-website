import React from "react";
import { useSelector } from "react-redux";
import { Table, Typography} from 'antd';
import moment from "moment";

const { Title, Text } = Typography;

function ORActivities() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);

    // Safely access awards with optional chaining and provide a default empty array
    const oractivities = portfolioData?.oractivities || [];

    console.log(portfolioData);
    
    // Define table columns
    const columns = [
        
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            align: 'center',
            responsive: ['md'],
            render: (text) => moment(text).format('DD/MM/YYYY')
        },
        {
            title: 'Name of Organisation',
            dataIndex: 'organisation',
            key: 'organisation',
            align: 'center',
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
            <div className="m-10">
            <h1 className="flex justify-center items-center text-4xl text-primary py-5 font-semibold">Out Reach Activities</h1>
            <Table
                
                dataSource={oractivities}
                columns={columns}
                size="md"
                rowKey="_id"
                pagination={false}
                className=""
                bordered

            />
            <style jsx>{`
                .ant-table-thead > tr > th {
                    background-color: #0A192F !important; /* Use primary color */
                    color: white !important;
                }
            `}</style>
        </div>
        
    );
}

export default ORActivities;