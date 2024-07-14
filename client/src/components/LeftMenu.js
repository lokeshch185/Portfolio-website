import React, { Component } from 'react';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal" overflowedIndicator={<MenuOutlined />} >
        <Menu.Item key="home">
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item key="ugproject">
          <a href="/ugproject">UG Project</a>
        </Menu.Item>
        <Menu.Item key="courses">
          <a href="/courses">Courses</a>
        </Menu.Item>
        <Menu.Item key="conference">
          <a href="/conference">Conference</a>
        </Menu.Item>
        <Menu.Item key="talks">
          <a href="/talks">Talks</a>
        </Menu.Item>
        <Menu.Item key="projects">
          <a href="/projects">Projects</a>
        </Menu.Item>
        <Menu.Item key="journals">
          <a href="/journals">Journals</a>
        </Menu.Item>
        <Menu.Item key="oractivities">
          <a href="/oractivities">OR Activities</a>
        </Menu.Item>
        <Menu.Item key="award">
          <a href="/award">Award</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a href="/about">About</a>
        </Menu.Item>
        <Menu.Item key="experiences">
          <a href="/experiences">Experiences</a>
        </Menu.Item>
        <Menu.Item key="contact">
          <a href="/contact">Contact</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;
