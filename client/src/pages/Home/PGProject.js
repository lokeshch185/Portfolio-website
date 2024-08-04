
import { useSelector } from "react-redux";
import { Table, Typography} from 'antd';


const { Title, Text } = Typography;
const handleDownloadImage = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

function PGProject() {

    const { portfolioData } = useSelector((state) => state.root);

    // Safely access awards with optional chaining and provide a default empty array
    const pgprojects = portfolioData?.pgprojects || [];

    console.log(portfolioData);
    
    // Define table columns
    const columns = [
        
        
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
            fixed: 'left',
            width : 10,
        },
        {
            title: 'Student Group',
            dataIndex: 'group',
            key: 'group',
            align: 'center',
        },
        {
            title: 'Abstract',
            dataIndex: 'abstract',
            key: 'abstract',
            align: 'center',
        },
        {
            title: 'Video Link',
            dataIndex: 'link',
            key: 'link',
            align: 'center',
            render: (text, record) => (
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                    onClick={() => window.open(record.link, '_blank')}
                    style={{ width: 50 }}
                >
                    View
                </button>
            ),
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
            title: 'Report',
            dataIndex: 'reportlink',
            key: 'reportlink',
            align: 'center',
            render: (text, record) => (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" onClick={() => handleDownloadImage(record.reportlink)} style={{ width: 50 }}>
                    View
                </button>
            ),
        },
        
        
        
    ];

    return (
            <div className="m-8 sm:m-4">
            <h1 className="select-none flex hover:animate-pulse duration-150 py-4 sm:py-2 sm:mx-4 lg:mx-56 justify-start lg:justify-center items-center rounded-xl bg-gradient-to-r
             from-blue-300 via-blue-100 to-blue-300 shadow-xl shadow-gray-600 text-4xl sm:text-2xl font-semibold whitespace-nowrap">Postgraduate Projects</h1>
            <Table
                
                dataSource={pgprojects}
                columns={columns}
                size="small"
                rowKey="_id"
                pagination={false}
                className=""
                bordered
                scroll={{
                    x:  'max-content', // Enable horizontal scroll
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
        
    );
}

export default PGProject;