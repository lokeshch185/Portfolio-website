
import { useSelector } from "react-redux";
import { Table, Typography } from 'antd';
import moment from "moment";
import './Styles.css';
import Journals from "./Journals";
import Patents from "./Patents";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const { Title, Text } = Typography;

function Conference() {

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
            fixed: 'left',
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
            width: 10
        },
        {
            title: 'Hosting Venue',
            dataIndex: 'venue',
            key: 'venue',
            align: 'center',
            width: 7
        },
        {
            title: 'DOI',
            dataIndex: 'DOI',
            key: 'DOI',
            align: 'center',
            width: 8

        },
        {
            title: 'Remark',
            dataIndex: 'remark',
            key: 'remark',
            align: 'center',
        },



    ];

    return (
        <div className="mt-20">
        <section id="conferences">
        <div className="m-8 sm:m-4 ">
            <h1 className="select-none flex hover:animate-pulse duration-150 py-4 sm:py-2 sm:mx-4 lg:mx-56 justify-start lg:justify-center items-center rounded-xl bg-gradient-to-r
             from-blue-300 via-blue-100 to-blue-300 shadow-xl shadow-gray-600 text-4xl sm:text-2xl font-semibold whitespace-nowrap">Conference Papers</h1>
            <Table

                dataSource={conferences}
                columns={columns}
                rowKey="_id"
                size="small"
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
        </section>
        <section id="journals">
        <Journals/>
        </section>
        <section id="patents">
        <Patents />
        </section>
        </div>

    );
}

export default Conference;