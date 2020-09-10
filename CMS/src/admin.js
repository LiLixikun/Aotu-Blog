import React from 'react';
import './App.less';
import Header from './components/Header';
// import Footer from './components/Footer'
import NavLeft from './components/NavLeft';
import Bread from './components/Bread'
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
          <NavLeft {...this.props}></NavLeft>
        </div>
        <div className="main">
            <Header></Header>
          <Bread {...this.props}></Bread>
           
          <div className="content">
          {renderRoutes(routes)}
          
            </div>
          {/* <div className="footer">
                       
                        <Footer></Footer>
                    </div> */}
        </div>
      </div>
    );
  }
}

