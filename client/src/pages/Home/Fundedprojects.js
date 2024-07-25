import React from "react";
import { useSelector } from "react-redux";
import { Space, Table, Tag, Typography } from 'antd';
import Mentored from "./Mentored";

const { Title, Text } = Typography;

function Fundedprojects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);

    // Safely access awards with optional chaining and provide a default empty array
    const fprojects = portfolioData?.fprojects || [];

    console.log(fprojects);
    console.log(portfolioData);

    // Define table columns
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
            fixed: 'left',
            width: 10

        },
        {
            title: 'Studentgrp',
            dataIndex: 'studentgrp',
            key: 'studentgrp',
            align: 'center',

        },
        {
            title: 'Abstract video link',
            dataIndex: 'absvideolink',
            key: 'absvideolink',
            align: 'center',


        },

        {
            title: 'Funding agency name',
            dataIndex: 'fundingagencyname',
            key: 'fundingagencyname',
            align: 'center',

        },
        {
            title: 'Amt Funded',
            dataIndex: 'amtfunded',
            key: 'amtfunded',
            align: 'center',

        },
        {
            title: 'Remark',
            dataIndex: 'remark',
            key: 'remark',
            align: 'center',

        },
        {
            title: 'Photo',
            dataIndex: 'photo',
            key: 'photo',
            align: 'center',
            width: 20,
            render: (text, record) => (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" onClick={() => handleDownloadImage(record.photo)} style={{ width: 50 }}>
                    View
                </button>
            ),
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
        <>
        <div className="m-10">
            <h1 className="flex justify-center items-center text-4xl py-5 font-semibold text-primary ">Funded Projects</h1>
            <Table
                dataSource={fprojects}
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
                background-color: #0A192F !important; /* Use primary color */
                color: white !important;
            }
           `}</style>

        </div>
        <Mentored />
        </>
    );
}
export default Fundedprojects; 