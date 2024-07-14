import React from "react";
import { useSelector } from "react-redux";
import { Space, Table, Tag,Typography } from 'antd';

const {Title,Text}=Typography;

function Journals() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);

    // Safely access awards with optional chaining and provide a default empty array
    const journals= portfolioData?.journals|| [];

    console.log(portfolioData);

    // Define table columns
    const columns = [
        {
            title: 'Title',
            dataIndex: 'Title',
            key: 'Title',
        },
        {
            title: 'Title of journal papers',
            dataIndex: 'Title_of_journal_ppr',
            key: 'Title_of_journal_ppr',
        },
        {
            title: 'List of Authors',
            dataIndex: 'Author_list',
            key: 'Author_list',
           
        },
        {
          title: 'ISSN/DOI',
          dataIndex: 'ISSN_DOI',
          key: 'ISSN_DOI',
         
      },
        {
            title: 'Remark',
            dataIndex: 'Remark',
            key: 'Remark',
        },
    ];

    return (
        <div>
          <h1 className="flex justify-center items-center text-4xl text-primary ">Journals Published</h1>

            <Table  dataSource={journals} columns={columns} rowKey="_id" pagination={{ pageSize: 12 }}
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
export default Journals; 