import React, { Component } from "react";
import { Menu, Icon, Avatar } from "antd";

class TopMenu extends Component {
  render() {
    return (
      <Menu
        mode="horizontal"
        className="menu"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Menu.Item key="app">
          <a  href="/blogs">Blogs</a>
        </Menu.Item>
        <Menu.Item key="avatar">
          <Avatar icon={<Icon type="user" />} />
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopMenu;
