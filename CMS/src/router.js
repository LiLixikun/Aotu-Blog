import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Admin from './admin';
import App from './App';
// page
import TagManage from './views/base/tag';
import CategoryManage from './views/base/category';
import BlobManage from './views/base/blob';
import Home from './views/home';
import Login from './views/login';

// form组件
import NoMatch from './views/noMatch';
export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route
              path="/base"
              render={() => (
                <Admin>
                  <Switch>
                    <Route path="/base/tag" component={TagManage}></Route>
                    <Route
                      path="/base/category"
                      component={CategoryManage}
                    ></Route>
                    <Route path="/base/blob" component={BlobManage}></Route>
                    <Route component={NoMatch}></Route>
                  </Switch>
                </Admin>
              )}
            ></Route>
            <Route
              path="/home"
              render={() => (
                <Admin>
                  <Route path="/home" component={Home}></Route>
                </Admin>
              )}
            ></Route>

            <Redirect to="/home" />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
