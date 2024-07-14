import React from "react";
import { useSelector } from "react-redux";
import { Table, Typography} from 'antd';
import moment from "moment";

const { Title, Text } = Typography;

function Conference() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);

    // Safely access awards with optional chaining and provide a default empty array
    const conferences = portfolioData?.conferences || [];

    console.log(portfolioData);
    
    // Define table columns
    const columns = [
        
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            responsive: ['md'],
            align: 'center',
            render: (text) => moment(text).format('DD/MM/YYYY')
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            fixed: 'left',
            align: 'center',
        },
        {
            title: 'Conference',
            dataIndex: 'conference',
            key: 'conference',
            align: 'center',
        },
        {
            title: 'Author List',
            dataIndex: 'authors',
            key: 'authors',
            align: 'center',
        },
        {
            title: 'Hosting Venue',
            dataIndex: 'venue',
            key: 'venue',
            align: 'center',
        },
        {
            title: 'DOI',
            dataIndex: 'DOI',
            key: 'DOI',
            align: 'center',
        },
        {
            title: 'Remark',
            dataIndex: 'remark',
            key: 'remark',
            align: 'center',
        },
        
        
        
    ];

    return (
         <div className="m-10">
            <h1 className="flex justify-center items-center text-4xl text-primary py-5 font-semibold">Conference Papers</h1>
            <Table
                
                dataSource={conferences}
                columns={columns}
                rowKey="_id"
                pagination={{ pageSize: 12 }}
                className="border border-gray-200 m-10"
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

export default Conference;