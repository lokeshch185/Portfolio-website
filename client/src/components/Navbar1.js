import React from 'react';
import { Row, Col, Typography, Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const { Header, Content } = Layout;
const { Title } = Typography;
const {SubMenu} = Menu;

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
                <a onClick={() => gotoPage('/')}>Kiran Talele</a>
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
                
                <Menu.Item key="projects" onClick={() => gotoPage("/projects")}>
                Projects
                </Menu.Item>
                <Menu.Item key="conference" onClick={() => gotoPage("/conference")}>
                Publications
                </Menu.Item>
                
                <Menu.Item key="oractivities" onClick={() => gotoPage("/oractivities")}>
                  OutReach Activities
                </Menu.Item>
                <Menu.Item key="events" onClick={() => gotoPage("/events")}>
                  Events
                </Menu.Item>
                
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
