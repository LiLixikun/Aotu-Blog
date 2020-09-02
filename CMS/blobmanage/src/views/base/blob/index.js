import React from 'react'
import './../ui.less'
export default class BlobManage extends React.Component {
    constructor(props){
        super(props)    
    }   
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div >
               blob
            </div>
        )
    }
}
