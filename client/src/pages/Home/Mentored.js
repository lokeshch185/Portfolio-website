import React from "react";
import { useSelector } from "react-redux";
import { Table, Typography } from 'antd';
import moment from "moment";
import "../../index.css"
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const {Title, Text} = Typography;

function Mentored() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);

    // Safely access awards with optional chaining and provide a default empty array
    const mentored = portfolioData?.mentored || [];

    console.log(portfolioData);

    // Define table columns
    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            responsive: ['md'],
            align: 'center',
            fixed: 'left',
            render: (text) => moment(text).format('DD/MM/YYYY')
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
            fixed: 'left',
            width: 20,
        },
        {
            title: 'Organisation',
            dataIndex: 'organisation',
            key: 'organisation',
            align: 'center',
        },
        {
            title: 'Grant Received',
            dataIndex: 'grantreceived',
            key: 'grantreceived',
            align: 'center',
            width: 150,
        },
       
        {
            title: 'Remarks',
            dataIndex: 'remarks',
            key: 'remarks',
            align: 'center',
            // responsive: ['md'],
        },
        

    ];



    return (
        <div>
          
        <div className="m-10">
            <h1 className="flex justify-center items-center text-4xl text-primary font-semibold">Mentored Projects</h1>
        <Table
            dataSource={mentored}
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
    </div>
    );
}

export default Mentored;