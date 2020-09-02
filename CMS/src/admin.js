import React from 'react';
import './App.less';
import Header from './components/Header';
// import Footer from './components/Footer'
import NavLeft from './components/NavLeft';
import { renderRoutes } from 'react-router-config'
export default class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { routes } = this.props.route
    return (
      <div className="container">
        <div className="nav-left">
          <NavLeft></NavLeft>
        </div>
        <div className="main">
          <div className="header">
            <Header></Header>
          </div>
          <div className="content">
          {renderRoutes(routes)}
            {console.log(this.props)}
            </div>
          {/* <div className="footer">
                       
                        <Footer></Footer>
                    </div> */}
        </div>
      </div>
    );
  }
}
