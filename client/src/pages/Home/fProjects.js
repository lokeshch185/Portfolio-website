import React from "react";
import { useSelector } from "react-redux";
import { Space, Table, Tag,Typography } from 'antd';

const {Title,Text}=Typography;

function fProjects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);

    // Safely access awards with optional chaining and provide a default empty array
    const fProjects= portfolioData?.fProjects|| [];

    console.log(portfolioData);

    // Define table columns
    const columns = [
        {
            title: 'Title',
            dataIndex: 'Title',
            key: 'Title',
        },
        {
            title:'Student Group',
            dataIndex: 'Student_grp',
            key: 'Student_grp',
        },
        {
            title: 'Abstract video link',
            dataIndex: 'Abstract_video_link',
            key: 'Abstract_video_link',
           
        },
        {
          title: 'Photo',
          dataIndex: 'Photo',
          key: 'Photo',
         
        },
        {
            title: 'Funding agency name',
            dataIndex: 'Funding_agency_name',
            key: 'Funding_agency_name',
        },
        {
            title: 'Amount Funded',
            dataIndex: 'Amount_funded',
            key: 'Amount_funded',
        },
        {
            title: 'Remark',
            dataIndex: 'Remark',
            key: 'Remark',
        },
    ];

    return (
        <div>
          <h1 className="flex justify-center items-center text-4xl text-primary ">fProjects Published</h1>

            <Table  dataSource={fProjects} columns={columns} rowKey="_id" pagination={{ pageSize: 12 }}
            className="border border-gray-200"
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
export default fProjects; 