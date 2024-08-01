
import { useSelector } from "react-redux";
import { Space, Table, Tag, Typography } from 'antd';

const { Title, Text } = Typography;

function Journals() {
    const { portfolioData } = useSelector((state) => state.root);

    // Safely access awards with optional chaining and provide a default empty array
    const journals = portfolioData?.journals || [];

    console.log(portfolioData);

    // Define table columns
    const columns = [
        {
            title: 'Title',
            dataIndex: 'Title',
            key: 'Title',
            align: 'center',
            fixed: 'left',
            width: 10
        },
        {
            title: 'Title of journal papers',
            dataIndex: 'Title_of_journal_ppr',
            key: 'Title_of_journal_ppr',
            align: 'center',
            width: 200
        },
        {
            title: 'List of Authors',
            dataIndex: 'Author_list',
            key: 'Author_list',
            align: 'center',
            width: 200
        },
        {
            title: 'ISSN/DOI',
            dataIndex: 'ISSN_DOI',
            key: 'ISSN_DOI',
            align: 'center',
            width: 150
        },
        {
            title: 'Remark',
            dataIndex: 'Remark',
            key: 'Remark',
            align: 'center',
            width: 200
        }
    ];

    return (
        <div className="m-8 sm:m-4">
            <h1 className="select-none flex hover:animate-pulse duration-150 py-4 sm:py-2 sm:mx-4 lg:mx-56 justify-start lg:justify-center items-center rounded-xl bg-gradient-to-r
             from-blue-300 via-blue-100 to-blue-300 shadow-xl shadow-gray-600 text-4xl sm:text-2xl font-semibold whitespace-nowrap">Journals Published</h1>
            <Table 
                dataSource={journals} 
                columns={columns} 
                rowKey="_id" 
                pagination={false}
                className="border border-gray-200"
                bordered
                scroll={{
                    x: 'max-content', // Enable horizontal scroll
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
    );
}

export default Journals;
