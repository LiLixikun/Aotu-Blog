import React from 'react';
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import menuList from './../../config/menuConfig';
import './index.less';
const { SubMenu } = Menu;
export default class NavLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
      // defaultSelectedKeys: ['/home']
    };
  }
  componentDidMount() {
    this.setState({
      menuList: menuList,
    });
  }
  handleClick = (e) => {
    console.log('click', e);
  };
  renderMenu = (data) => {
    return (data || []).map((item) => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="left-header">
          <img src={'./logo192.png'}></img>
          <i>logo</i>
        </div>
        <Menu
          onClick={this.handleClick}
          style={{ width: '100%' }}
          mode="inline"
          theme="dark"
          // defaultSelectedKeys={this.state.defaultSelectedKeys}
        >
          {this.renderMenu(this.state.menuList)}
        </Menu>
      </div>
    );
  }
}
