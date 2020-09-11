import React from 'react'
import { getTagList } from '../../../api/table'
import './../ui.less'
import EditableTable from './components/tableEdit'
import Search from './components/search'
// import { Form, Input, Button } from 'antd';
export default class  TagManage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            value: 'small'
        }
    }
    componentDidMount() {
        const postData = {
            pageSize: 10,
            pageNum: 1,
            query:'query'
        }
        getTagList(postData).then(({data})=> {
        })  
    }
    render() {
        return (
            <div >
                <Search />
                <EditableTable  />
            </div>
        )
    }
}