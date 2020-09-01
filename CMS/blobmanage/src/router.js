import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Admin from './admin'
import App from './App';
import Login from './views/login'
// ui组件
import TagManage from './views/base/tag'
import CategoryManage from './views/base/category'
import BlobManage from './views/base/blob'
// form组件
import NoMatch from './views/noMatch'
export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={ Login }></Route>
                    <Route path="/base" render={
                        () => <Admin>
                            <Switch>
                                <Route path="/base/tag" component={ TagManage }></Route>
                                <Route path="/base/category" component={ CategoryManage }></Route>
                                <Route path="/base/blob" component={ BlobManage }></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                    {/* <Redirect to="ui/buttons" /> */}
                </App>
            </HashRouter>
        )
    }
}