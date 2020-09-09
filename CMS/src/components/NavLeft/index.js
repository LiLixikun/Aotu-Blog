import React from 'react';
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import menuList from './../../config/menuConfig';
import './index.less';
import { connect } from 'react-redux'
import { setMenuKey } from '@/redux/action'
const { SubMenu } = Menu;
class NavLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
    };
  }
  componentDidMount() {
    this.setState({
      menuList: menuList
    },()=> {
      this.props.setMenuKey(this.props.location.pathname)
    });
  }
  handleClick = (e) => {
    this.props.setMenuKey(e.key)
    };
  renderMenu = (data) => {
    return (data || []).map((item) => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu title={item.title} key={item.key} >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key} >
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
          <span>React 后台管理系统</span>
        </div>
        <Menu
          onClick={this.handleClick}
          style={{ width: '100%' }}
          mode="inline"
          theme="dark"
          selectedKeys={[this.props.menuKey]}>

            {this.renderMenu(this.state.menuList)}
        </Menu>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuKey: state.menuKeyStatus.menuKey
  }
}

const mapDispatchProps = {
  setMenuKey
}

export default connect(mapStateToProps, mapDispatchProps)(NavLeft)
