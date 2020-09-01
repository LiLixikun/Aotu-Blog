import React from 'react'
import './App.less'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
export default class Admin extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div className="container">
                <div className="nav-left">
                    <NavLeft {...this.props}></NavLeft>
                </div>   
                <div className="main">
                    <div className="header">
                        <Header></Header>
                    </div> 
                    <div className="content">
                        { this.props.children }
                    </div> 
                    <div className="footer">
                        <Footer></Footer>
                    </div>
                </div>
            </div> 
        );
    }

}


