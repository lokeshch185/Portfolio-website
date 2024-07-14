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
            align: 'center',
            responsive: ['md'],
            render: (text) => moment(text).format('DD/MM/YYYY')

        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            fixed: 'left',
            align: 'center',
            width: 10
        },
        {
            title: 'Organisation',
            dataIndex: 'organisation',
            key: 'organisation',
            align: 'center',
        },
        {
            title: 'Photo',
            dataIndex: 'photo',
            key: 'photo',
            align: 'center',
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
            align: 'center',
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
        <div className="m-10">
           <h1 className="flex justify-center items-center text-4xl text-primary py-5 font-semibold">Awards & Recognitions</h1>
            <Table
                dataSource={awards}
                columns={columns}
                rowKey="_id"
                pagination={false}
                className=""
                bordered
                size="small"
                scroll={{
                    x: 'max-content', // Enable horizontal scroll
                    // Enable vertical scroll with a height limit
                }}



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
