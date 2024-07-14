import React from "react";
import { useSelector } from "react-redux";
import { Table, Typography } from 'antd';
import moment from 'moment';
import './Award.css'

const {Title} = Typography;

function Award() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);

    // Safely access awards with optional chaining and provide a default empty array
    const awards = portfolioData?.awards || [];

    // Define table columns
    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (text) => moment(text).format('DD/MM/YYYY')

        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Organisation',
            dataIndex: 'organisation',
            key: 'organisation',
        },
        {
            title: 'Photo',
            dataIndex: 'photo',
            key: 'photo',
            render: (text, record) => (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" onClick={() => handleDownloadImage(record.photo)} style={{ width: 50 }}>
                    View
                </button>
            ),
        },
        {
            title: 'Remark',
            dataIndex: 'remark',
            key: 'remark',
            resposive: 'md'
        },

    ];

    const handleDownloadImage = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="">
           <h1 className="flex justify-center items-center text-4xl text-primary py-5 font-semibold">Awards & Recognitions</h1>
            <Table
                dataSource={awards}
                columns={columns}
                rowKey="_id"
                pagination={{ pageSize: 12 }}
                className="border border-gray-200"
                bordered
                size="small"


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

export default Award;
