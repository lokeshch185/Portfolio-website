import React from 'react';
import { Row, Col, Typography, Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

const { Header, Content } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;

const NavBar = (props) => {
  const navigate = useNavigate();

  const gotoPage = (page) => {
    navigate(page);
  };
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; // Adjust this value to match the height of your navbar
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <Row justify="center">
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <Header className="header-fixed">
          <Row>
            <Col xl={12} lg={12} md={12} sm={20} xs={20}>
              <Title id="title-button" level={4}>
                <a onClick={() => gotoPage('/')}>Prof. K.T.V Talele</a>
              </Title>
            </Col>
            <Col xl={12} lg={12} md={12} sm={4} xs={4}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["home"]}
                overflowedIndicator={<MenuOutlined />}
              >
                <SubMenu key="home" title="Home"  onTitleClick={() => gotoPage("/")}>
                  <Menu.Item key="intro">
                    <Link scroll={scrollWithOffset} to="/#intro">Intro</Link>
                  </Menu.Item>
                  <Menu.Item key="about">
                    <Link scroll={scrollWithOffset} to="/#about">About</Link>
                  </Menu.Item>
                  <Menu.Item key="current-position">
                    <Link scroll={scrollWithOffset} to="/#current-position">Current Position</Link>
                  </Menu.Item>
                  <Menu.Item key="add-position">
                    <Link scroll={scrollWithOffset} to="/#add-position">Add Position</Link>
                  </Menu.Item>
                  <Menu.Item key="past-position">
                    <Link scroll={scrollWithOffset} to="/#past-position">Past Position</Link>
                  </Menu.Item>
                  <Menu.Item key="visiting-position">
                    <Link scroll={scrollWithOffset} to="/#visiting-position">Visiting Position</Link>
                  </Menu.Item>
                  <Menu.Item key="experience1">
                    <Link scroll={scrollWithOffset} to="/#experience1">Experience</Link>
                  </Menu.Item>
                  <Menu.Item key="awards">
                    <Link scroll={scrollWithOffset} to="/#awards">Awards</Link>
                  </Menu.Item>
                  <Menu.Item key="interest">
                    <Link scroll={scrollWithOffset} to="/#interest">Interest</Link>
                  </Menu.Item>
                  <Menu.Item key="recognitions">
                    <Link scroll={scrollWithOffset} to="/#recognitions">Recognitions</Link>
                  </Menu.Item>
                </SubMenu>
                
                <SubMenu key="projects" title="Projects"  onTitleClick={() => gotoPage("/projects")}>
                  <Menu.Item key="fundedprojects">
                    <Link scroll={scrollWithOffset} to="/projects#funded-projects">Funded Research Projects</Link>
                  </Menu.Item>
                  <Menu.Item key="mentoredprojects">
                    <Link scroll={scrollWithOffset} to="/projects#mentored">Mentored Sponsored Projects</Link>
                  </Menu.Item>
                  <Menu.Item key="ugprojects">
                    <Link scroll={scrollWithOffset} to="/projects#ug-projects">Undergraduate Projects</Link>
                  </Menu.Item>
                  <Menu.Item key="pgprojects">
                    <Link scroll={scrollWithOffset} to="/projects#pg-projects">Postgraduate Projects</Link>
                  </Menu.Item>
                </SubMenu>
                
                <SubMenu key="conference" title="Publications"  onTitleClick={() => gotoPage("/conference")}>
                  <Menu.Item key="Conference Papers">
                    <Link scroll={scrollWithOffset} to="/conference#conferences">Conference Papers</Link>
                  </Menu.Item>
                  <Menu.Item key="Journals Published">
                    <Link scroll={scrollWithOffset} to="/conference#journals">Journals Published</Link>
                  </Menu.Item>
                  <Menu.Item key="Patents">
                    <Link scroll={scrollWithOffset} to="/conference#patents">Patents</Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu key="oractivities" title="Outreach Activities" onTitleClick={() => gotoPage("/oractivities")}>
                <Menu.Item key="oractivities0">
                    <Link scroll={scrollWithOffset} to="/oractivities#conferences">Outreach Activities</Link>
                  </Menu.Item>
                  <Menu.Item key="oractivities1">
                    <Link scroll={scrollWithOffset} to="/oractivities#talks">Talks</Link>
                  </Menu.Item>
                  <Menu.Item key="oractivities2">
                    <Link scroll={scrollWithOffset} to="/oractivities#fdps">Faculty Development Programmes</Link>
                  </Menu.Item>
                  <Menu.Item key="oractivities3">
                    <Link scroll={scrollWithOffset} to="/oractivities#workshops">Workshops</Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu key="events" title="Events"  onTitleClick={() => gotoPage("/events")}>
                  <Menu.Item key="events1">
                    <Link scroll={scrollWithOffset} to="/events#events"
                    >Events</Link>
                  </Menu.Item>
                  <Menu.Item key="events2">
                    <Link scroll={scrollWithOffset} to="/events#flagship-events">Flagship Events</Link>
                  </Menu.Item>
             
                </SubMenu>
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
