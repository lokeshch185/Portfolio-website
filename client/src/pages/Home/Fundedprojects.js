
import { useSelector } from "react-redux";
import { Space, Table, Tag, Typography } from 'antd';
import Mentored from "./Mentored";
import UGProject from "./UGProject";
import PGProject from "./PGProject";
import moment from "moment";
import './Styles.css';




const { Title, Text } = Typography;

function Fundedprojects() {
    const { portfolioData } = useSelector((state) => state.root);

    // Safely access awards with optional chaining and provide a default empty array
    const fprojects = portfolioData?.fprojects || [];

    console.log(fprojects);
    console.log(portfolioData);

    // Define table columns
    const columns = [
        {
            title: 'From',
            dataIndex: 'date',
            key: 'date',
            responsive: ['md'],
            align: 'center',
            fixed: 'left',
            render: (text) => moment(text).format('YYYY-MM-DD'),
            // render: (text) => {moment(from).format("YYYY-MM-DD"), moment(to).format("YYYY-MM-DD")}

            
        },
        {
            title: 'To',
            dataIndex: 'date',
            key: 'date',
            responsive: ['md'],
            align: 'center',
            fixed: 'left',
            render: (text) => moment(text).format('YYYY-MM-DD'),
            // render: (text) => {moment(from).format("YYYY-MM-DD"), moment(to).format("YYYY-MM-DD")}

            
        },

        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
            fixed: 'left',
            width: 150,

        },
        // {
        //     title: 'Studentgrp',
        //     dataIndex: 'studentgrp',
        //     key: 'studentgrp',
        //     align: 'center',

        // },
        // {
        //     title: 'Abstract video link',
        //     dataIndex: 'absvideolink',
        //     key: 'absvideolink',
        //     align: 'center',


        // },

        {
            title: 'Funding agency name',
            dataIndex: 'fundingagencyname',
            key: 'fundingagencyname',
            align: 'center',

        },
        {
            title: 'Amt Funded (Rs)',
            dataIndex: 'amtfunded',
            key: 'amtfunded',
            align: 'center',

        },
        {
            title: 'Remark',
            dataIndex: 'remark',
            key: 'remark',
            align: 'center',
            width:550,

        },
        // {
        //     title: 'Photo',
        //     dataIndex: 'photo',
        //     key: 'photo',
        //     align: 'center',
        //     width: 20,
        //     render: (text, record) => (
        //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" onClick={() => handleDownloadImage(record.photo)} style={{ width: 50 }}>
        //             View
        //         </button>
        //     ),
        // },
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
        <div className=" m-8 sm:m-4 ">
            <h1 className=" select-none flex hover:animate-pulse duration-150 py-4 sm:py-2 sm:mx-4 lg:mx-56 justify-start lg:justify-center items-center rounded-xl bg-gradient-to-r
             from-blue-300 via-blue-100 to-blue-300 shadow-xl shadow-gray-600 text-4xl sm:text-2xl font-semibold whitespace-nowrap">Funded Research Projects</h1>
            <Table
                dataSource={fprojects}
                columns={columns}
                size="small"
                rowKey="_id"
                pagination={false}
                className="animated-table"
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
        <UGProject />
        <PGProject />
        </>
    );
}
export default Fundedprojects; 