import React from 'react';
import { Row, Col, Typography, Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const { Header, Content } = Layout;
const { Title } = Typography;

const NavBar = (props) => {
  const navigate = useNavigate();

  const gotoPage = (page) => {
    navigate(page);
  };

  return (
    <Row justify='center'>
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <Header className='header-fixed'>
          <Row>
            <Col xl={12} lg={12} md={12} sm={20} xs={20}>
              <Title id='title-button' level={4}>
                <a onClick={() => gotoPage('/')}>Lokesh Chaudhari</a>
              </Title>
            </Col>
            <Col xl={12} lg={12} md={12} sm={4} xs={4}>
              <Menu
                theme='dark'
                mode='horizontal'
                defaultSelectedKeys={["home"]}
                overflowedIndicator={<MenuOutlined />}
              >
                <Menu.Item key="home" onClick={() => gotoPage("/")}>
                  Home
                </Menu.Item>
                {/* <Menu.Item key="award" onClick={() => gotoPage("/award")}>
                  Awards
                </Menu.Item> */}
                <Menu.Item key="projects" onClick={() => gotoPage("/projects")}>
                Projects
                </Menu.Item>
                <Menu.Item key="conference" onClick={() => gotoPage("/conference")}>
                Publications
                </Menu.Item>
                {/* <Menu.Item key="talks" onClick={() => gotoPage("/talks")}>
                  Talks
                </Menu.Item> */}
                <Menu.Item key="oractivities" onClick={() => gotoPage("/oractivities")}>
                  OutReach Activities
                </Menu.Item>
                {/* <Menu.Item key="journals" onClick={() => gotoPage("/journals")}>
                  Journals
                </Menu.Item> */}
                {/* <Menu.Item key="about" onClick={() => gotoPage("/about")}>
                  About
                </Menu.Item>
                <Menu.Item key="experiences" onClick={() => gotoPage("/experiences")}>
                  Experiences
                </Menu.Item> */}
                {/* <Menu.Item key="courses" onClick={() => gotoPage("/courses")}>
                  Courses
                </Menu.Item> */}
                {/* <Menu.Item key="projects" onClick={() => gotoPage("/projects")}>
                  Projects
                </Menu.Item>
                <Menu.Item key="contact" onClick={() => gotoPage("/contact")}>
                  Contact
                </Menu.Item> */}
              </Menu>
            </Col>
          </Row>
        </Header>
        <Content>{props.children}</Content>
      </Col>
    </Row>
  );
};

export default NavBar;
