import React from 'react'
import { getTableList } from '../../../api/table'
import './../ui.less'
export default class  TagManage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            value: 'small'
        }
    }
    componentWillMount() {
        const postData = {
            pageSize: 10,
            pageNum: 1,
            query:'query'
        }
        getTableList(postData).then(({data})=> {
            console.log(data)
        })  
    }
    handleColseLoading = ()=> {
        this.setState({
            loading: !this.state.loading
        })
    }
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      }
    render() {
        return (
            <div >
              button
            </div>
        )
    }
}