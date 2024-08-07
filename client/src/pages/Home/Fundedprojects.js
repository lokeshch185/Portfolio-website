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
    const fprojects = portfolioData?.fprojects || [];

    const columns = [
        {
            title: 'From',
            dataIndex: 'tenurefrom',
            key: 'tenurefrom',
            responsive: ['md'],
            align: 'center',
            fixed: 'left',
            render: (text) => moment(text).format('YYYY-MM-DD'),
        },
        {
            title: 'To',
            dataIndex: 'tenureto',
            key: 'tenureto',
            responsive: ['md'],
            align: 'center',
            fixed: 'left',
            render: (text) => moment(text).format('YYYY-MM-DD'),
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
            fixed: 'left',
            width: 350,
        },
        {
            title: 'Funding agency name',
            dataIndex: 'fundingagencyname',
            key: 'fundingagencyname',
            align: 'center',
            width: 400,
        },
        {
            title: 'Amt Funded (Rs)',
            dataIndex: 'amtfunded',
            key: 'amtfunded',
            align: 'center',
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
        <div className="m-8 sm:m-4 mt-20 sm:mt-20" id="funded-projects">
            <h1 className="select-none flex hover:animate-pulse duration-150 py-4 sm:py-2 sm:mx-4 lg:mx-56 justify-start lg:justify-center items-center rounded-xl bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 shadow-xl shadow-gray-600 text-4xl sm:text-2xl font-semibold whitespace-nowrap">Funded Research Projects</h1>
            <Table
                dataSource={fprojects}
                columns={columns}
                size="small"
                rowKey="_id"
                pagination={false}
                className="animated-table"
                bordered
                scroll={{ x: 'max-content' }}
            />
            <style jsx>{`
            .ant-table-thead > tr > th {
                background-color: #0A192F !important;
                color: white !important;
            }
           `}</style>
        </div>
        <div id="mentored">
            <Mentored />
        </div>
        <div id="ug-projects">
            <UGProject />
        </div>
        <div id="pg-projects">
            <PGProject />
        </div>
        </>
    );
}
export default Fundedprojects;
