import React from 'react';
// import { Table } from 'antd';
import './../ui.less';
import { Button } from 'antd'
import EditableTable from './components/tableEdit';
export default class BlobManage extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    color: 'red'
  };
  setTheme = (color) => {
    window.less.modifyVars({
      '@primary-color': 'red'
    }).then(()=> {
      console.log('Success!!!')
    })
  }
  render() {
    return (
      <div>
        <EditableTable />
        <Button type="primary" onClick={this.setTheme(this.state.color)} >
          Primary Button
        </Button>
      </div>
    );
  }
}
