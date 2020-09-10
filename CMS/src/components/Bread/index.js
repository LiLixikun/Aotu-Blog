import React from 'react'
import { Breadcrumb } from 'antd'
import { connect } from 'react-redux'
class Bread extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="bread">
                <Breadcrumb style={{marginLeft: "10px"}}>
                    {(this.props.menuKey || 'home').split('/').map((item)=>{
                    return <Breadcrumb.Item key={item}>
                        {item}
                    </Breadcrumb.Item>
                })}
                </Breadcrumb>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      menuKey: state.menuKeyStatus.menuKey
    }
}
export default connect(mapStateToProps)(Bread)