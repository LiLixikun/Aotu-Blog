import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';


// page
import Admin from './admin';
import TagManage from './views/base/tag';
import CategoryManage from './views/base/category';
import BlobManage from './views/base/blob';
import Home from './views/home';
import Login from './views/login';
import NoMatch from './views/noMatch';
// import { renderRoutes } from "react-router-config";
import renderRoutes  from '@/utils/renderRoutes';
import { ConfigProvider } from 'antd'

import { connect } from 'react-redux'
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const routes = [
  {
    component: Admin,
    path: '/',
    routes: [
      {
        path: '/home',
        component: Home
      },
      {
        path: "/base/tag",
        component: TagManage
      },
      {
        path: "/base/category",
        component: CategoryManage
      },
      {
        path: "/base/blob",
        component: BlobManage
      }
    ]
  },
  {
    component:Login,
    path: '/login'
  },
  {
    path: '*',
    component: NoMatch
  }
]

class Router extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
     
        <HashRouter>
          <ConfigProvider locale={this.props.config.locale==='zh-cn' ? zhCN : enUS}>
            <App>
              <Switch>
                {renderRoutes(routes)}
              </Switch>
            </App>
        </ConfigProvider> 
      </HashRouter>
      
      );
  }
}

function mapStateToProps(state) {
  return {
    config: state.globalConfig.config
  }
} 

export default connect(mapStateToProps)(Router)
