import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import {connect} from 'react-redux'
import { setGlobalConfig } from '@/redux/action'
import languageList from '@/config/language'
class Language extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            languageList
        }
    }
    changeLanguage = (item)=> {
        this.props.setGlobalConfig({...this.props.config,...{locale: item.value}})
    }
    menu = ()=> (
        <Menu>
        {/*  */}
        { this.state.languageList.map(item=>(
            <Menu.Item 
            key={item.value}
            disabled={item.value === this.props.config.locale}
             onClick={e=> {this.changeLanguage(item)}}>
              {item.label}  
            </Menu.Item>
        )) }
        </Menu>
    )
    render() {
        return(
            <div>
                <Dropdown overlay={this.menu} trigger="click">
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    多语言A <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      config: state.globalConfig.config
    }
  } 

const mapDispatchProps = {
    setGlobalConfig
}
export default connect(mapStateToProps,mapDispatchProps)(Language)