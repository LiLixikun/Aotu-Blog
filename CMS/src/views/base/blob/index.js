import React from 'react';
import { Table } from 'antd';
import './../ui.less';

import EditableTable from './components/tableEdit';

export default class BlobManage extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <EditableTable />
      </div>
    );
  }
}
